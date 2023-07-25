import React, { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
import "../style/style.css";
import logo from "../logo/ihsan.png";


// Request on Client

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        Mobilenumber: '',
        email: '',
        password: '',
        confirmPassword: '',
        IsOrganisation: false,
        IsVolunteer: false,
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type } = e.target;
        let newValue = value;

        if (type === 'checkbox') {
            newValue = e.target.checked;
        } else if (type === 'number') {
            newValue = parseInt(value);
        } else if (type === 'file') {
            newValue = e.target.files[0];
        } else if (name === 'IsOrganisation' || name === 'IsVolunteer') {
            newValue = name === 'IsOrganisation' ? true : false;
            const oppositeField = name === 'IsOrganisation' ? 'IsVolunteer' : 'IsOrganisation';
            setFormData((prevData) => ({
                ...prevData,
                [name]: newValue,
                [oppositeField]: !newValue,
            }));
            return;
        }

        setFormData((prevData) => ({
            ...prevData,
            [name]: newValue,
        }));
    };


    const validateEmail = (value) => {
        // Custom email validation function
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const segments = value.split('@');
        return (
            emailRegex.test(value) &&
            segments.length === 2 && // Adjust the minimum number of segments here
            segments[1].split('.').length >= 2 // Adjust the minimum number of domain segments here
        );
    };

    const schema = Joi.object({
        username: Joi.string().required().label('Username'),
        Mobilenumber: Joi.string().required().label('Mobile Number'),
        IsVolunteer: Joi.required(),
        IsOrganisation: Joi.required(),
        email: Joi.string()
            .custom((value, helpers) => {
                if (!validateEmail(value)) {
                    return helpers.error('any.invalid');
                }
                return value;
            })
            .required()
            .label('Email'),
        password: Joi.string().min(6).required().label('Password'),
        confirmPassword: Joi.string()
            .valid(Joi.ref('password'))
            .required()
            .label('Confirm password'),
    }).messages({
        'any.only': '{{#label}} does not match the password',
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { username, email, Mobilenumber, password, confirmPassword, IsOrganisation, IsVolunteer } = formData;

        // Validate the form data
        const { error } = schema.validate(formData, { abortEarly: false });

        if (error) {
            const errorMessage = error.details.map((detail) => detail.message).join('\n');
            toast.error(errorMessage, { autoClose: 5000 });
            return;
        }

        try {
            // Create a new object with only the required fields
            const requestData = {
                username,
                email,
                Mobilenumber,
                password,
                confirmPassword,
                IsVolunteer,
                IsOrganisation,
            };

            console.log('Request Data:', requestData); // Debug log

            // Send the data to the API
            const response = await axios.post('/api/Auth/Register', requestData);

            if (response.data.isSuccess === true) {
                navigate('/login');
            }

            console.log('Response:', response.data); // Debug log

            // Handle successful registration response here
            toast.success('Registration successful!', { autoClose: 5000 });
        } catch (error) {
            // Handle registration error here
            console.error(error);
            toast.error('Registration failed. Please try again later.', { autoClose: 5000 });
        }
    };

    return (
            <section className="h-100" style={{ backgroundColor: "#eee" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card rounded-3 text-black">
                            <div className="row g-0">
                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-4">
                                        <div className="login-container">
                                            <div className="text-center">
                                                <div className="logo-containerlogin">
                                                    <img src={logo} style={{ width: 185, marginBottom: 40 }} alt="logo" />
                                                </div>
                                            </div>
                                            <form className="login-form" onSubmit={handleSubmit}>
                                                {/*<p>Please, fill out the following fields to register</p>*/}
                                                <div className="form-outline mb-4">
                                                    <input
                                                        id="username"
                                                        type="text"
                                                        placeholder="Username"
                                                        value={formData.username}
                                                        name="username"
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" >
                                                        Username
                                                    </label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="email"
                                                        placeholder="Email"
                                                        value={formData.email}
                                                        name="email"
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" >
                                                        Email
                                                    </label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="text"
                                                        placeholder="Mobile Number"
                                                        value={formData.Mobilenumber}
                                                        name="Mobilenumber"
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" >
                                                        Mobile Number
                                                    </label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="password"
                                                        placeholder="Password"
                                                        value={formData.password}
                                                        name="password"
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" >
                                                        Password
                                                    </label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="password"
                                                        placeholder="Confirm Password"
                                                        value={formData.confirmPassword}
                                                        name="confirmPassword"
                                                        onChange={handleChange}
                                                    />
                                                    <label className="form-label" >
                                                        Confirm Password
                                                    </label>
                                                </div>
                                              
                                                <div className="form-outline mb-4">
                                                    
                                                    <select
                                                        id="IsOrganisation"
                                                        className="form-select"
                                                        value={formData.IsOrganisation ? 'organisation' : 'volunteer'}
                                                        name="IsOrganisation"
                                                        onChange={handleChange}
                                                    >

                                                        <option value="organisation">As Organisation</option>
                                                        <option value="volunteer">As Volunteer</option>

                                                    </select>
                                                    <div className="different" >
                                                        Select Role
                                                    </div>
                                                  
                                                </div>
                                              


                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="btn btn-outline-danger" type="submit">
                                                        Sign Up
                                                    </button>

                                                </div>
                                            </form>
                                            <ToastContainer />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                                    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                                        <h4 className="mb-4">We are happy to be one of us</h4>
                                        {/*<p className="small mb-0">*/}
                                        {/*  sign in and join us*/}
                                        {/*</p>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Register;
