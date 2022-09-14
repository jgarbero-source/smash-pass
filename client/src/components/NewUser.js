import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'

function NewUser({setIsItTheEnd, setProfiles, profiles}) {

    let starterFormData = {
        name: '',
        username: '',
        password: '',
        email: '',
        age: '',
        gender: 'Male',
        sexuality: 'Gay',
        bio: '',
        location: '',
        avatar: '',
    }

    const [formData, setFormData] = useState(starterFormData);
    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const { name, email, username, password, age, bio, avatar, gender, sexuality, location } = formData

    function handleSubmit(e) {
        e.preventDefault()
        console.log(formData)
        fetch('/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }
        ).then(() => {
            setIsItTheEnd(false)
            setProfiles([...profiles, formData])
            setFormData(starterFormData)
            navigate(`/login`)
    })
    setFormData({
        name: '',
        username: '',
        password: '',
        email: '',
        age: '',
        gender: 'Male',
        sexuality: 'Gay',
        bio: '',
        location: '',
        avatar: '',
    })
    }

    function handleChange(e) {
        const { value, name } = e.target
        setFormData({ ...formData, [name]: value })
    }

    console.log(formData)

    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input 
                        type="text" 
                        name="name" 
                        placeholder='name' 
                        value={name} onChange={handleChange} 
                    />
                </label>
                <label>
                    Email:
                    <input 
                        placeholder="Email"
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Username:
                    <input 
                        placeholder="Username"
                        type='text'
                        name='username' 
                        value={username} 
                        onChange={handleChange}
                    />
                </label>
                <label>
                    Password:
                    <input
                        placeholder="Password" 
                        type='password' 
                        name='password' 
                        value={password} 
                        onChange={handleChange}
                    />
                </label>
                    Age:
                <label>
                    <input 
                        type="number" 
                        name="age" 
                        placeholder='age' 
                        value={age} 
                        onChange={handleChange} 
                    />
                </label>
                Location:
                <label>
                    <input 
                        type="text" 
                        name="location" placeholder='location' 
                        value={location} 
                        onChange={handleChange} 
                    />
                </label>
                Gender:
                <label>
                    <select name="gender" placeholder='gender' value={gender} onChange={handleChange}>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="nonbinary">Nonbinary</option>
                    </select>
                </label>
                Sexuality:
                <label>
                    <select name="sexuality" placeholder='sexuality' value={sexuality} onChange={handleChange}>
                        <option value="gay">Gay</option>
                        <option value="straight">Straight</option>
                        <option value="bisexual">Bisexual</option>
                    </select>
                </label>
                Photo:
                <label>
                    <input type="text" name="avatar" placeholder='picture' value={avatar} onChange={handleChange} />
                </label>
                <label>
                    <textarea type="text" name="bio" placeholder='about you' value={bio} onChange={handleChange} />
                </label>
                <button>Create Account</button>
            </form>
        </div>
    )
}

export default NewUser