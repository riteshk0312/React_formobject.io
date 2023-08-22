import React from 'react'
import { useState } from 'react'

const Myform = () => {


  const [user, setUser] = useState({
    fname: "",
    lname: "",
    mail: '',
    gender: '',
    mdegree: '',
    mengineer: '',
    hobbies: '',
    address: ''
  })

  const [final, setfinal] = useState({})

  const handleChange = (e) => {
    e.preventDefault();
    setUser(prev => ({ ...prev, [e.target.value]: e.target.value }))
  }

  const printData = (e) => {
    e.preventDefault();
    setfinal(user)
  }

  return (
    <>
    <div className='thediv'>
      <h1>Registration from</h1>

      <form onSubmit={printData}>
        <h1>Personal Details</h1>
        <label htmlFor='fname'>FirstName: </label>
        <input type='text' id='fname' name='fname' onChange={handleChange} placeholder='Enter First Name' />
        <br></br> <br></br>


        <label htmlFor='lname'>LastName: </label>
        <input type='text' id='lname' name='lname' onChange={handleChange} placeholder='Enter Last Name' />
        <br></br><br></br>

        <label htmlFor='mail'>Email: </label>
        <input type='email' id='mail' name='mail' onChange={handleChange} placeholder='Enter Last Name' />
        <br></br><br></br>



        <label htmlFor='gender'>Gender: </label>
        <input type="radio" value="Male" name="gender" onChange={handleChange} /> Male
        <input type="radio" value="Female" name="gender" onChange={handleChange} /> Female

        <h1>Educational Qualification</h1>

        <label htmlfor="mdegree">Degree:  </label>
        <select name="mdegree" id="cars" onChange={handleChange}>
          <option value="Bachelor of Arts">B.A.</option>
          <option value="Bachelor of Commerce"> B.Com</option>
          <option value="Bachelor of Engineering" >B.E.</option>

        </select>
        <br></br><br></br>

        <label htmlfor="mengineer">Degree:  </label>
        <select name="mengineer" id="boat" onChange={handleChange}>
          <option value="Information Technology">I.T.</option>
          <option value="Computer Science"> C.S.</option>
          <option value="Electronics and Telecommunication" >Entc.</option>

        </select>
        <br></br><br></br>

        <label htmlFor='hobbies'>Hobbies: </label>
        <input type="radio" value="Playing Chess" name="hobbies" onChange={handleChange} />Playing Chess
        <input type="radio" value="Reading Books" name="hobbies" onChange={handleChange} />Reading Books
        <br></br><br></br>

        <h1>Address</h1>

        <textarea name="address" cols="30" rows="10" placeholder="Enter your Address" required onChange={handleChange} ></textarea>
        <br></br><br></br>

        <label htmlFor='resume'>Attach resume: </label>
        <input type='file' id='resume' name='resume' onChange={handleChange} />
        <br></br> <br></br>

        <button type='submit'>Submit</button>
        <br></br><br></br>

      </form>

      </div>

<div className='mydiv'>

      <h1>{JSON.stringify(final)}</h1>

</div>


    </>
  )
}

export default Myform