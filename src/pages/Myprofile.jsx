import { useState } from 'react'
import React from 'react'

const Myprofile = () => {

  const [userData,setUserData] = useState({
    name: "Ravikiran",
    email: "masaramravikiran@gmail.com",
    phone: "1234567890",
    address: "Hyderabad, India",
    dob: "01/01/2000",
    gender: "Male",
    profilePicture: "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    bio: "I am a full stack developer"
    
  })
  const [edit, setEdit] = useState(true)
  return (
    <div>
      <img src={userData.profilePicture} alt=""/>
      {
        edit
        ? <input type="text" value={userData.name} onChange={e => setUserData(prev => ({...prev, name: e.target.value}))} />
        : <p>{userData.name}</p>
      }

      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Phone</p>
          <p>{userData.phone}</p>
        </div>
        <div>
          <p>Email</p>
          <p>{userData.email}</p>
        </div>
        <div>
          <p>Address</p>
          <p>{userData.address}</p>
        </div>
        <div>
          <p>DOB</p>
          <p>{userData.dob}</p>
        </div>
        <div>
          <p>Gender</p>
          <p>{userData.gender}</p>
        </div>
        <div>
          <p>BASIC INFORMATION</p>
          <div>
            <p>Profile Picture</p>
            <p>{userData.profilePicture}</p>
          </div>
          <div>
            <p>Bio</p>
            <p>{userData.bio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Myprofile
