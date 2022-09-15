import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

function Signup() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        username: '',
        password: '',
        age: null,
        avatar: '',
        gender: '',
        sexuality: '',
        location: '',
        bio: ''
    })
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const { name, email, username, password, age, bio, avatar, gender, sexuality, location } = formData

    function handleChange(e) {
        const { name, value } = e.target
        setFormData({...formData, [name]: value })
    }

    function handleSubmit(e) {
        e.preventDefault()

        fetch('/users',{
            method: "POST",
            headers:{'Content-Type': 'application/json'},
            body:JSON.stringify(formData)
        })
        .then(res => {
            if(res.ok){
                res.json().then(user => {
                    console.log(user)
                    navigate(`/login`)
                })
            } else {
                res.json().then(json => setErrors(Object.entries(json.errors)))
            }
        })
        setFormData({
            name: '',
            email: '',
            username: '',
            password: '',
            age: null,
            avatar: '',
            gender: '',
            sexuality: '',
            location: '',
            bio: ''
        })
    }

    return(
        <>
            <h2>Signup!</h2>
            <br />
            <form onSubmit={handleSubmit}>
                Name:
                <input
                    placeholder="Name"
                    type="text"
                    name="name"
                    value={name}
                    onChange={handleChange}
                />
                Email:
                <input 
                    placeholder="Email"
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                Username:
                <input 
                    placeholder="Username"
                    type='text'
                    name='username' 
                    value={username} 
                    onChange={handleChange}
                />
                Password:
                <input
                    placeholder="Password" 
                    type='password' 
                    name='password' 
                    value={password} 
                    onChange={handleChange}
                />
                Age:
                <input 
                    type="number" 
                    name="age" 
                    placeholder='age' 
                    value={age} 
                    onChange={handleChange}
                />
            </form>
        </>
    )
}

export default Signup;