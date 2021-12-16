import axios from 'axios'
import React, { Component } from 'react'
import {API_URL} from "../config"
import "./UserList.css"
import { Link, Navigate } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'


function UserList(props) {
   let navigate = useNavigate()
   const { users, user } = props
    let handleChatClick = (chatUserId) => {
        if (!user) {
            navigate('/signin')
        }
        else {
            let data = {
                participants: [chatUserId, user._id]
            }
            axios.post(`${API_URL}/conversation`, data, { withCredentials: true })
                .then((response) => {
                    console.log("response of the converstaion",response)
                    navigate(`/chat/${response.data._id}`)
                })
        }
    }
        // remove yourself if you're signed in
        if (!user) {
            return <h1>Loading</h1>
        }
        if (user) {
            users.filter(u => u._id !== user._id)
        }
        return (
            <>
        <h1 className="title-pages">All users</h1>
            <div id="chatlist-main">
                
                <div className="chatlist-body">
                    {
                        users.map((user) => {
                            return (
                                <div className="msg-box-container">
                                    
                                    <div className="msg-box-container-box">
                                    <Link to={`/chat /${user._id}`}>
                                        <img className="msg-box-container-box-img" src={user.profilePic} />
                                        </Link>
                                    </div>
                                    
                                    <div className="msg-box-container-box-container">
                                        <div className="msg-box-container-box-info">
                                            <h3 className="msg-box-container-box-info-h3">{user.name}</h3>
                                            <Link className="msg-box-container-box-info-profile" to={`/chat/${user._id}`}>profile</Link>
                                            <button className="msg-box-container-box-info-chat" onClick={() => { handleChatClick(user._id)}}>Chat</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

            </div>
            </>
        )
}

export default UserList