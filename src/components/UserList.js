import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { API_URL } from "../config";
function UserList(props) {

    const navigate = useNavigate()

    const handleChatClick = (chatUserId) => {
        const { user } = props
        if(!user){
            navigate('/signin')
            return; 
        }
        else {
           let data = {
               participants: [chatUserId, user._id]
           }
           axios.post(`${API_URL}/api/conversation`, data, {withCredentials: true})
                .then((response) => {
                    navigate(`/chat/${response.data._id}`)
                })
            
        }
    }

    const { users, user } = props
    
    let allUsers = users
    if (user) {
        allUsers = users.filter(u => u._id !== user._id)
    }
    console.log(allUsers)
    return (
        <div>
            
            {
                allUsers.map((user) => {
                    return (
                        <p>
                            {user.username} 
                            <button onClick={() => { handleChatClick(user._id) }}>
                               Chat
                            </button>
                        </p>
                    )
                })
            }
        </div>
    )
}

export default UserList