import React, { useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Joi from 'joi';
import "../style/style.css";
import logo from "../logo/ihsan.png";


// Request on Client

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
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
        email: Joi.string()
            .custom((value, helpers) => {
                if (!validateEmail(value)) {
                    return helpers.error('any.invalid');
                }
                return value;
            })
            .required()
            .label('Email'),
        password: Joi.string().required().label('Password'),
    }).messages({
        'any.invalid': '{{#label}} is not a valid email',
    });
    const handleForgotPassword = (e) => {
        e.preventDefault();
        const { email } = formData;

        // Perform the necessary actions for password recovery, such as sending a reset link via email
        // You can use Axios or any other library to make the API request
        // Example: axios.post('/api/forgot-password', { email })
        // Handle success and error cases accordingly

        // Show a success message to the user after submitting the form
        toast.success('Password recovery instructions sent to your email!', { autoClose: 5000 });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        const { email, password } = formData;

        const { error } = schema.validate(formData, { abortEarly: false });

        if (error) {
            const errorMessage = error.details.map((detail) => detail.message).join('\n');
            toast.error(errorMessage, { autoClose: 5000 });
            return;
        }

        try {
            const requestData = {
                email,
                password,
            };

            const response = await axios.post('/api/Auth/Login', requestData);

            if (response.data.isSuccess === true) {
                const token = response.data.message;
                localStorage.setItem('token', token);
                axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

                // Get the user's email from the form data
                const { email } = formData;

                // Fetch the user's ID based on the email
                const userIdResponse = await axios.get(`/api/ApprovedPost/GetUserId?email=${email}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                if (userIdResponse.data.isSuccess === true) {
                    const userId = userIdResponse.data.message;
                    localStorage.setItem('userId', userId);
                }

                navigate('/useraddshow');
                window.location.reload();
            }

            console.log('Response:', response.data);
            toast.success('Login successful!', { autoClose: 5000 });
        } catch (error) {
            console.error(error);
            toast.error('Login failed. Please try again later.', { autoClose: 5000 });
        }
    };



    return (
        <section className="h-100 " style={{ backgroundColor: "#eee" }}>
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
                                                {/*<p>Please login to your account</p>*/}
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        value={formData.email}
                                                        name="email"
                                                        onChange={(e) => handleChange(e)}
                                                    />
                                                    <label className="form-label" htmlFor="form2Example11">
                                                        Email
                                                    </label>
                                                </div>
                                                <div className="form-outline mb-4">
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        value={formData.password}
                                                        name="password"
                                                        onChange={(e) => handleChange(e)}
                                                    />
                                                    <label className="form-label" htmlFor="form2Example22">
                                                        Password
                                                    </label>
                                                </div>
                                                <div className="text-center pt-1 mb-5 pb-1">
                                                    <button className="btn btn-outline-danger" type="submit">
                                                        Log in
                                                    </button>
                                                    <a onClick={handleForgotPassword} className="text-muted" href="#!">
                                                        Forgot password?
                                                    </a>
                                                </div>
                                                <div className="d-flex align-items-center justify-content-center pb-4">
                                                    <p className="mb-0 me-2">Don't have an account?</p>
                                                    <a className="cool-link"  href="/register">
                                                        Create new
                                                    </a>
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

export default Login;
