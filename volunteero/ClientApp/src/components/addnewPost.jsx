import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/addnewpost.css';

const AddnewPost = () => {
    const [formData, setFormData] = useState({
        Postname: '',
        UpdateBy: '',
        Postdescribtion: '',
        userID: '',
        ImageFile: null,
    });
    const [isPopupActive, setIsPopupActive] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files.item(0);
        setFormData((prevData) => ({
            ...prevData,
            ImageFile: file,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const { Postname, UpdateBy, Postdescribtion, userID, ImageFile } = formData;

        try {
            const requestData = new FormData();
            requestData.append('Postname', Postname);
            requestData.append('UpdateBy', UpdateBy);
            requestData.append('Postdescribtion', Postdescribtion);
            requestData.append('userID', userID);
            requestData.append('ImageFile', ImageFile);

            const token = localStorage.getItem('token');
            const response = await axios.post('api/ApprovedPost/CreateApproved', requestData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log('Response:', response.data.message);

            toast.success('Post created successfully!', { autoClose: 5000 });
        } catch (error) {
            console.error(error);
            toast.error('Failed to create post. Please try again later.', {
                autoClose: 5000,
            });
        }
    };

    useEffect(() => {
        const userId = localStorage.getItem('userId');
        setFormData((prevData) => ({
            ...prevData,
            userID: userId,
        }));
    }, []);

    const togglePopup = () => {
        setIsPopupActive((prevState) => !prevState);
    };

    const { Postname, UpdateBy, Postdescribtion, ImageFile } = formData;

    return (
        <>
            {!isPopupActive && (
                <div className="container_j">
                    <div className="container_y">
                        <button className="btn btn-outline-danger" onClick={togglePopup}>
                            Add Post
                        </button>
                    </div>
                </div>
            )}

            {isPopupActive && (
                <div className="popup-container">
                    <div className="container_1">
                        <div className="container_x">
                            <h2 className="container_title">Add a New Post!</h2>
                            <button className="container_x" onClick={togglePopup}>
                                &times;
                            </button>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="container_2">
                                <input
                                    type="text"
                                    className="container_3"
                                    name="Postname"
                                    placeholder="Post Name"
                                    value={Postname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="container_2">
                                <textarea
                                    className="container_3"
                                    placeholder="Post Description"
                                    name="Postdescribtion"
                                    value={Postdescribtion}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>
                            <div className="container_2">
                                <input
                                    className="container_3"
                                    placeholder="Upload By"
                                    name="UpdateBy"
                                    value={UpdateBy}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="container_2">
                                <label htmlFor="postImageInput">Upload Image:</label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    name="ImageFile"
                                    onChange={handleImageChange}
                                />
                            </div>

                            <div className="container_4">
                                <button type="submit" className="btn btn-outline-danger">
                                    Submit Post
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <ToastContainer />
        </>
    );
};

export default AddnewPost;
