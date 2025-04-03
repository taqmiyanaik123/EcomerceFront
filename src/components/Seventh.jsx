import React, { useEffect } from 'react'

const Seventh = ({isLoggedin}) => {
    const [user,setUsers]= useState([])
    useEffect(() => {
        async function fetchUser(){
            try{
                const response = await fetch("/https://jsconpaceholder.typicode.com/users")
               const data = await  response.json()
              //console.log(data)
               setUser(data)

            }
            catch(error){
                console.error("Error fetching data:",error)
            }

        }
        fetchUser()
        },[])
  return (
    <div>
     <h2>About useEffect Hook</h2> 
     <ul>
        {users.map((user) => (
            <li key={user.id}>
            <h3>{user.email}</h3> 
            <p>{user.phone</p>
            <p></p>

        ))}
     </ul>
    </div>
  )
}

export default Seventh