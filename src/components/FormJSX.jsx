import React from 'react'
import { useState } from 'react'

const FormJSX = () => {
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        age: "",
        birth: "",
        email: "",
        address: ""
    })

    const onChangeHandle = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const onClickHandle = (e) => {
        e.preventDefault();
        localStorage.setItem('form', JSON.stringify(form));
    }

    console.log(form)
  return (
    <>  
        <br/>
        First Name: <input type="text" 
               placeholder="FirstName"
               name="firstname"
               onChange={onChangeHandle}
        />
        <br/>
        Last Name: <input type="text" 
               placeholder="LastName"
               name="lastname"
               onChange={onChangeHandle}
        />
        <br/>
        Age: <input type="text" 
               placeholder="Age"
               name="age"
               onChange={onChangeHandle}
        />
        <br/>
        Birth: <input type="text" 
               placeholder="Birth"
               name="birth"
               onChange={onChangeHandle}
        />
        <br/>
        Email: <input type="text" 
               placeholder="Email"
               name="email"
               onChange={onChangeHandle}
        />
        <br/>
        Address: <input type="text" 
               placeholder="Address"
               name="address"
               onChange={onChangeHandle}
        />
        <br/>
        <button onClick={onClickHandle}>SaveTolocal</button>
    </>
  )
}

export default FormJSX