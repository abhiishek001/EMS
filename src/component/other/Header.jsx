import React, { useState } from 'react'
import { setLocalStorage } from '../../utils/localStorage'

const Header = (props) => {

  // const [username, setUsername] = useState('')

  // if(!data){
  //   setUsername('Admin')
  // }else{
  //   setUsername(data.firstName)
  // }

  const logOutUser = () => {
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    
    // window.location.reload()
  }

  return (
    <div className='flex justify-between items-end  '>
      <h1 className='text-3xl font-bold'>helloo <br /> <span> username👋</span></h1>
      <button onClick={logOutUser} className='bg-red-500 text-lg font-medium text-white px-4 py-2 rounded'>Log out</button>
    </div>
  )
}

export default Header
