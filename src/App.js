import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AdventList from "./components/Advert";
import {useNavigate } from 'react-router-dom';

function App() {
  const [myError, setError] = useState(null);
  const [adverts, setAdverts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {

    const getData = async () => {
        let response  = await axios.get('http://localhost:5005/adverts')
        setAdverts(response.data)
    }

    getData()

}, [])

  useEffect(() => {
    navigate('/')
  }, [adverts])

  const handleSubmit = async (event) => {
    event.preventDefault()
    let newAdvent = {
      name: event.target.name.value,
      username: event.target.username.value,
      skills: event.target.skills.value,
      details: event.target.details.value,
      date: event.target.date.value,
      price: event.target.price.value,
      contact: event.target.contact.value,
      completed: false,
    }
    // Pass an object as a 2nd param in POST requests
    let response = await axios.post('http://localhost:5005/create', newAdvent)
    setAdverts([response.data, ...adverts])
}

  const handleEdit = async (event, id) => {
    event.preventDefault()
    let editedAdvert = {
      name: event.target.name.value,
      username: event.target.username.value,
      skills: event.target.skills.value,
      details: event.target.details.value,
      date: event.target.date.value,
      price: event.target.price.value,
      contact: event.target.contact.value,
      completed: false, //pergunte ao manish
    }
    // Pass an object as a 2nd param in POST requests
    let response = await axios.patch(`http://localhost:5005/adverts/${id}`, editedAdvert)
    // Update our state 'adverts' with the edited todo so that the user see the upadted info without refrshing the page

    // We have the updated todo here
    console.log(response.data)

    let updatedAdverts = adverts.map((elem) => {
        if (elem._id == id) {
            elem.name = response.data.name
            elem.username = response.data.username
            elem.skills = response.data.skills
            elem.details = response.data.details
            elem.date = response.data.date
            elem.price = response.data.price
            elem.contact = response.data.contact
           }
        return elem
    })

    setAdverts(updatedAdverts)
    
}

const handleDelete = async (id) => {
  // make a request to the server to delete it from the database
  await axios.delete(`http://localhost:5005/api/adverts/${id}`)

  // Update your state 'adverts' and remove the todo that was deleted
  let filteredAdvert = adverts.filter((elem) => {
    return elem._id !== id
  })

  setAdverts(filteredAdvert)
}

  return (
    <div>
      <h1>heeeeeey</h1>
      <Routes>
        <Route path="/signin" element={<SignIn />} />          
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<AdventList /> } />
      </Routes>
    </div>
  );
}

export default App;
