import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

import { collection, addDoc } from 'firebase/firestore'

import { db } from '../firebaseConfig/firebase.js'

export const Create = () => {

  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [realName, setRealName] = useState('')

  const navigate = useNavigate()

  const heroesCollection = collection(db, 'heroes')

  const createHeroes = async (e) => {
    e.preventDefault()
    await addDoc(heroesCollection, {
      age: Number(age),
      name: name,
      realName: realName
    })

    navigate('/')
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Crear Heroe</h1>
          <form onSubmit={createHeroes}>
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
            <button type='submit' className='btn btn-primary'>Crear Heroe</button>
            <Link to='/'><button className='btn btn-danger'>Cancelar</button></Link>
            
          </form>
        </div>
      </div>
    </div>
  )
}