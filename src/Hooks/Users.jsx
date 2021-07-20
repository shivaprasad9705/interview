import React, { useState ,useEffect} from 'react';
import axios from 'axios';

function Users(props) {
   const [users,setUsers]= useState([]);

    useEffect(()=>{
    
     async function getUsers() {
       const result=await axios("https://api.openbrewerydb.org/breweries?by_name=cooper");
      setUsers(result.data);
        }
        getUsers();


    async function getState(){
        const stateResult=await axios("https://api.openbrewerydb.org/breweries?by_state=new_york");
    }
    getState();
    })
    
    async function getCity(){
        const cityResults=await axios("https://api.openbrewerydb.org/breweries?by_city=san_diego");
    }
    getCity();
    
    return (
        <div>
            <h3>All users data  </h3>
            <ul >
                {users.map(user=>
                    <li key={user.id} >{user.name})</li>
                )}
            </ul>
            <h3>All data with state  </h3>
            <ul>
                {users.map(user=>
                    <li key={user.id} >{user.state})</li>
                )}
            </ul>
            <h3>All data with city</h3>
            <ol>
                {users.map(user=>
                    <li key={user.id} >{user.city})</li>
                )}
            </ol>
            
        </div>
    );
}

export default Users;