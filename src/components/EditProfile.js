import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import {API_URL} from '../config'


import React from 'react'

function EditProfile(props) {
     
     const {userId} = useParams()

     const [profileDetail, setProfileDetail] = useState(null)

//useEffect
     useEffect(() => {
          const getData = async () => {
             // Fetching info from USERid!  
             let response = await axios.get(`${API_URL}/profile/${userId}`, {withCredentials: true})
             setProfileDetail(response.data)
          }
     
          getData()
      }, [])
  
//spiner..
      if(!profileDetail) {
          return <Spinner animation="grow" variant="dark" />
      }



//passing my props, please check on route at app.js. CHECKED???      
const {btnEdit} = props
  return (
     <div>
     <h3>Edit Your Profile </h3>

     <form onSubmit={(event) => { btnEdit(event, profileDetail._id)  }} >
     
     {/* event is passed automatically when 'btnEdit' is invoked by the browser */}
     {/* <form onSubmit={btnEdit} > */}

         <input defaultValue={profileDetail.name} name="name"  type="text"  placeholder="Edit your name"/>
         <input defaultValue={profileDetail.location} name="location"  type="text"  placeholder="Enter your location"/>
        
         <input  defaultValue={profileDetail.image} type="file"  name="myImage"  accept="image/png, image/jpg" />
         <input defaultValue={profileDetail.skills} name="skills"  type="text"  placeholder="Enter desc"/>
         {/* my arrays dont need a input. they will need a link to show list of jobs and requests*/}
         <button  type="submit" > Edit</button>
       </form>
 </div>
  )
}

export default EditProfile