import React, {useState, useEffect} from 'react';
import db from './firebase';
import CreateProfiles from "./CreateProfiles.jsx";


export default function Profiles() {

    const [profiles, setProfiles] = useState([]);

    useEffect(() => {
        db.collection('Profiles')
            .get()
            .then( snapshot => {
                const profiles = []
                snapshot.forEach( doc => {
                    const data = doc.data()
                    profiles.push(data)
                })
                this.setState({ profiles: profiles})
            })
            .catch( error => console.log(error))
    },[]);
    
    
    return (
        <div className='profiles'> 
           
           {
               this.state.profiles &&
               this.state.profiles.map( profile => {
                   return (
                       <div>
                           <p>{}</p>
                       </div>
                   )
               })
           }

        </div> 
     
  
    )
  }
  
//test