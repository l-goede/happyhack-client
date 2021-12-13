import {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import axios from 'axios'
import {API_URL} from '../config'
import React from 'react'

function EditProfile(props) {
  //not sure if i need to use the props.. 
    let {user} = props 
    const [profileDetail, setProfileDetail] = useState(null)
     const {userId} = useParams()

     
  console.log(userId)
//useEffect
     /*useEffect(() => {
          const getData = async () => {
             // Fetching info from USERid!  
             let response = await axios.get(`${API_URL}/profile/${userId}`, {withCredentials: true})
             setProfileDetail(response.data)
          }
     
          getData()
      }, [])*/
    
//spiner..
      /*if(!profileDetail) {
          return <Spinner animation="grow" variant="dark" />
      }*/



//passing my props, please check on route at app.js. CHECKED???      

const {btnEditProfile} = props
  return (
     <div>
     <h3>Edit Your Profile </h3>
     
    
      <form onSubmit={(event) => { btnEditProfile(event, user._id)  }} > 

         <input defaultValue={user.name} name="name"  type="text"  placeholder="Edit your name"/>
         <input defaultValue={user.location} name="location"  type="text"  placeholder="Enter your location"/>
        
         <input defaultValue={user.image} type="file"  name="myImage"  accept="image/png, image/jpg"/>
         <input defaultValue={user.skills} name="skills"  type="text"  placeholder="Enter desc"/>

         {/* my arrays dont need a input. they will need a link to show list of jobs and requests*/}
         <button type="submit"> Edit</button>
       </form>
 </div>
  )
}

export default EditProfile