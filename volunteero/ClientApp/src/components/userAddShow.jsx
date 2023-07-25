import React, { useEffect,useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import SearchBar from "./searchBar";
import NewCard from './newCard';
import AddnewPost from "./addnewPost";
import '../style/useraddshow.css';

function UserAddShow() {
    const [postsWithImages, setPostsWithImages] = useState([]);

    const [isLoading, setIsLoading] = useState(true); // Add loading state variable



    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoading(true); // Set loading state to true before fetching data

        fetch("api/ApprovedPost/GetAllPosts", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(posts => {
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

                        setPostsWithImages(postsWithImages);
                        setIsLoading(false); // Set loading state to false after fetching data

                    })
                    .catch(error => {
                        console.error(error);
                        setIsLoading(false); // Set loading state to false if an error occurs
                    });
            })
            .catch(error => {
                console.error(error);
                setIsLoading(false); // Set loading state to false if an error occurs

            });
    }, []);


  
   


  
   
  

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (searchResults) => {
        setSearchResults(searchResults);
    };



    return (
        <>
            <div className="container_x1">
                <div className="container">
                    <SearchBar onSearch={handleSearch} />
                </div>
                <section className="text-center">
                    <div className="container_x4">
                <h4 className="mb-5">
                        <strong>Latest posts</strong>                </h4>

                        </div>
                    

                <div className="container">
                    {isLoading ? (
                        <p>Appreciate You Being Patient...</p> // Display loading message while loading
                    ) : searchResults.length > 0 ? (
                        <NewCard formData={searchResults} />
                    ) : (
                        <NewCard formData={postsWithImages} />
                    )}
                </div>
            </section>



            </div>
            <AddnewPost />

            </>
    );
}

export default UserAddShow;
