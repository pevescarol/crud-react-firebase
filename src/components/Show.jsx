import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore'
import { db } from '../firebaseConfig/firebase.js'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


const mySwal = withReactContent(Swal)

export const Show = () => {
  //1. configurar useState (hook)
  const [heroes, setHeroes] = useState([])

  //2. referenciamos a la db de firestore
  const heroesCollection = collection(db, 'heroes')

  //3. funcion para mostrar todos los docs
  const getHeroes = async () => {
    const data = await getDocs(heroesCollection)

    setHeroes(
      data.docs.map( doc => ({...doc.data(), id:doc.id}))
    )
  }
}