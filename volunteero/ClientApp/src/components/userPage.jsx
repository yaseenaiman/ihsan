import React, { useEffect, useState } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import NewCard from './newCard';

function UserAddShow() {
    const navigate = useNavigate();

    const [searchInput, setSearchInput] = useState("");
    const [isAddingPost, setIsAddingPost] = useState(false);
    const [postName, setPostName] = useState("");
    const [postDescription, setPostDescription] = useState("");
    const [postImage, setPostImage] = useState("");
    const [postsWithImages, setPostsWithImages] = useState([]);
    const [posts, setPosts] = useState([
 ]);
    const [expandedCards, setExpandedCards] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const handleLogout = () => {
        // Clear tokens and user ID from local storage
        localStorage.removeItem("token");
        localStorage.removeItem("token");
        localStorage.removeItem("userId");

        setIsLoggedIn(false);
        navigate('/login');

    };

    useEffect(() => {
        // Check if the user is logged in
        const accessToken = localStorage.getItem("token");
        const refreshToken = localStorage.getItem("token");
        const userId = localStorage.getItem("userId");

        if (accessToken && refreshToken && userId) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const toggleCardExpansion = (cardId) => {
        if (expandedCards.includes(cardId)) {
            setExpandedCards(expandedCards.filter((id) => id !== cardId));
        } else {
            setExpandedCards([...expandedCards, cardId]);
        }
    };

    const isCardExpanded = (cardId) => {
        return expandedCards.includes(cardId);
    };


    const [formData, setFormData] = useState({
        Postname: '',
        UpdateBy: '',
        Postdescribtion: '',
        userID: '',
        ImageFile: null,
    });
    useEffect(() => {
        const token = localStorage.getItem('token');

        fetch("api/ApprovedPost/GetAllPosts", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(posts => {
                console.log(posts);
                const imagePromises = posts.map(post => {
                    return fetch(`api/ApprovedPost/GetUserImageByApprovedPostId/${post.approvedPostID}`)
                        .then(response => response.json());
                });

                Promise.all(imagePromises)
                    .then(userImages => {
                        const postsWithImages = posts.map((post, index) => {
                            const userImage = userImages[index];
                            return {
                                ...post,
                                postImage: userImage ? `/uploads/${userImage.filePath}` : null,
                            };
                        });

                        setPosts(postsWithImages);
                        setPostsWithImages(postsWithImages);
                        console.log(userImages);
                        console.log(postsWithImages);

                    })
                    .catch(error => {
                        console.error(error);
                    });
            })
            .catch(error => {
                console.error(error);
            });
    }, []);


    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleAddPost = () => {
        setIsAddingPost(true);
    };
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
    useEffect(() => {
        // Fetch the currently logged-in user's ID and set it to the userID field
        const userId = localStorage.getItem('userId');
        setFormData((prevData) => ({
            ...prevData,
            userID: userId,
        }));
    }, []);
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

            console.log(formData);
            const token = localStorage.getItem('token'); // Get the authorization token from local storage
            const response = await axios.post(
                'api/ApprovedPost/CreateApproved',
                requestData,
                {
                    headers: {
                        Authorization: `Bearer ${token}`, // Add the token to the headers
                        'Content-Type': 'multipart/form-data', // Set the content type for file upload
                    },
                }
            );
            console.log('Response:', requestData.data);

            console.log('Response:', response.data);
            toast.success('Registration successful!', { autoClose: 5000 });
        } catch (error) {
            console.error(error);
            toast.error('Registration failed. Please try again later.', {
                autoClose: 5000,
            });
        }
    };
    useEffect(() => {
        // Fetch the currently logged-in user's ID and set it to the userID field
        const userId = localStorage.getItem('userId');
        setFormData((prevData) => ({
            ...prevData,
            userID: userId,
        }));
    }, []);
    const handlePostNameChange = (e) => {
        setPostName(e.target.value);
    };

    const handlePostDescriptionChange = (e) => {
        setPostDescription(e.target.value);
    };

    const handlePostImageChange = (e) => {
        const file = e.target.files[0];
        setPostImage(URL.createObjectURL(file));
    };


    const handleAddComment = (postId, commentText) => {
        const updatedPosts = posts.map((post) => {
            if (post.id === postId) {
                return {
                    ...post,
                    comments: [...post.comments, commentText],
                    key: Date.now() // Adding the key property with a unique value
                };
            }
            return post;
        });

        setPosts(updatedPosts);
    };

    const { Postname, UpdateBy, Postdescribtion, userID, ImageFile } = formData;

    return (
       <>

                <div className="row mb-3">
                    <div className="col-md-6 offset-md-3">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search..."
                                value={searchInput}
                                onChange={handleSearchInputChange}
                            />
                            <div className="input-group-append">
                                <button className="btn btn-primary" type="button">
                                    Search
                                </button>
                            </div>
                    </div>
                        <>
                            &nbsp; {/* Spacer */}
                        </>

                    <NewCard formData={postsWithImages} />

                                             
                    

                    {!isAddingPost ? (
                        <div className="text-center mt-4">
                            <button className="btn btn-success" onClick={handleAddPost}>
                                Add Post
                            </button>
                        </div>
                    ) : (<div>

                        <form onSubmit={handleSubmit} className="mt-4">
                            <div className="form-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="Postname"

                                    placeholder="Post Name"
                                    value={Postname}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    className="form-control"
                                    placeholder="Post Description"
                                    name="Postdescribtion"

                                    value={Postdescribtion}
                                    onChange={handleChange}
                                    maxLength={400}
                                    required
                                ></textarea>
                            </div>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    placeholder="Upload By"
                                    name="UpdateBy"

                                    value={UpdateBy}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="postImageInput">Upload Image:</label>
                                <input
                                    type="file"
                                    className="form-control-file"
                                    name="ImageFile"
                                    onChange={handleImageChange}
                                />
                            </div>

                            <div className="text-center">
                                <button type="submit" className="btn btn-primary">
                                    Submit Post
                                </button>
                            </div>
                        </form>
                        <ToastContainer />
                    </div>

                    )}
        </>
    );
}

export default UserAddShow;
