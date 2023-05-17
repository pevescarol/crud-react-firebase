import { useEffect, useState } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'

import { getDoc, doc, updateDoc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase.js'


export const Edit = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [realName, setRealName] = useState('')

  const navigate = useNavigate()

  const { id } = useParams()

  //funcion que actualiza un doc
  const update = async (e) => {
    e.preventDefault()
    const playerDoc = doc(db, 'heroes', id)
    const data = {
      age: Number(age),
      name: name,
      realName: realName
    }
    await updateDoc(playerDoc, data)
    navigate('/')
  }

  // funcion que trae un doc por su id
  const getHeroesById = async (id) => {
    const playerDoc = await getDoc(doc(db, 'heroes', id))
    if (playerDoc.exists()) {
      setName(playerDoc.data().name)
      setRealName(playerDoc.data().realName)
      setAge(playerDoc.data().age)
    } else {
      console.log('No existe')
    }
  }

  useEffect(() => {
    getHeroesById(id)
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Heroe</h1>
          <form onSubmit={update}>
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input type="text" className='form-control' value={name} onChange={(e) => setName(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Nombre Real</label>
              <input type="text" className='form-control' value={realName} onChange={(e) => setRealName(e.target.value)}/>
            </div>
            <div className="mb-3">
              <label className="form-label">Edad</label>
              <input type="number" className='form-control' value={age} onChange={(e) => setAge(e.target.value)}/>
            </div>
            <button type='submit' className='btn btn-primary'>Editar Heroe</button>
            <Link to='/'><button className='btn btn-danger'>Cancelar</button></Link>
          </form>
        </div>
      </div>
    </div>
  )
}
// getDoc(doc(db, 'heroes', id))