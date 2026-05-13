import React, { useState } from "react";

export default function RegisterationForm(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState({name:"", email:"", password:"", confirmPassword:""});

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'name') setName(value);
        else if (name === 'email') setEmail(value);
        else if (name === 'password') setPassword(value);
        else if (name === 'confirmPassword') setConfirmPassword(value);
        // Clear error when user starts typing
        setError(prev => ({ ...prev, [name]: "" }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let newErrors = { name: "", email: "", password: "", confirmPassword: "" };
        if (name.trim() === "") newErrors.name = "Name is required";
        if (email.trim() === "") newErrors.email = "Email is required";
        if (password.trim() === "") newErrors.password = "Password is required";
        if (password !== confirmPassword) newErrors.confirmPassword = "Passwords do not match";

        const emailRegex = /^\S+@\S+\.\S+$/;
        if (email && !emailRegex.test(email)) newErrors.email = "Invalid email format";

        setError(newErrors);
        if (Object.values(newErrors).some(err => err !== "")) return;

        console.log("Name: " + name + ", Email: " + email + ", Password: " + password + ", Confirm Password: " + confirmPassword);
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setError({ name: "", email: "", password: "", confirmPassword: "" });
    }

    const inputStyles = {
        alignSelf:"center",
        width: '300px',
        padding:'10px',
        margin:'10px',
        outline:'none',
        borderRadius:'10px'
    }
    const buttonstyles = {
        padding:'10px 20px',
        margin:'10px',
        outline:'none',
        borderRadius:'10px',
        cursor:'pointer',
        alignSelf:"center"
    }
    return(
        <>
        <div style={{display:"flex", flexDirection:'column'}}>
           <h1 style={{alignSelf:"center"}}>Registeration Form</h1>
           <input onChange={handleChange} type="text" name="name" value={name} style={inputStyles}  />
           {error.name && <p style={{ color: 'red', alignSelf: 'center',padding:0, margin:0 }}>{error.name}</p>}
           <input onChange={handleChange} type="email" name="email" value={email} style={inputStyles} />
           {error.email && <p style={{ color: 'red', alignSelf: 'center',padding:0, margin:0 }}>{error.email}</p>}
           <input onChange={handleChange} type="password" name="password" value={password} style={inputStyles} />
           {error.password && <p style={{ color: 'red', alignSelf: 'center',padding:0, margin:0 }}>{error.password}</p>}
           <input onChange={handleChange} type="password" name="confirmPassword" value={confirmPassword} style={inputStyles} />
            {error.confirmPassword && <p style={{ color: 'red', alignSelf: 'center',padding:0, margin:0 }}>{error.confirmPassword}</p>}
            <button onClick={handleSubmit} type="submit" style={buttonstyles}>Register</button>
        </div> 
        </>
    )
}