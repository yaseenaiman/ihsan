import React, { useEffect, useState } from "react";
import '../style/style.css';
import NewCard from './newCard';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import SearchBar from "./searchBar";
import Pagination from "./pagination";

const HomePage = () => { 


    const [postsWithImages, setPostsWithImages] = useState([]);
      
    const [isLoading, setIsLoading] = useState(true);

   

    //useEffect(() => {
    //    const fetchLikes = async () => {
    //        try {
    //            const likePromises = postsWithImages.map((post) => {
    //                return axios.get(`/api/Like/GetPostLikes?ApprovedPostID=${post.approvedPostID}`)
    //                    .then((response) => response.data.message);
    //            });

    //            const likes = await Promise.all(likePromises);

    //            const postsWithLikes = postsWithImages.map((post, index) => ({
    //                ...post,
    //                numberofLikes: likes[index],
    //            }));

    //            setPostsWithImages(postsWithLikes);
    //        } catch (error) {
    //            console.error(error);
    //        }
    //    };


    //    fetchLikes();
    //}, [postsWithImages]);



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


    useEffect(() => {
        // Fetch the currently logged-in user's ID and set it to the userID field
        const userId = localStorage.getItem('userId');
        setFormData((prevData) => ({
            ...prevData,
            userID: userId,
        }));
    }, []);

    useEffect(() => {
        // Fetch the currently logged-in user's ID and set it to the userID field
        const userId = localStorage.getItem('userId');
        setFormData((prevData) => ({
            ...prevData,
            userID: userId,
        }));
    }, []);

    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = (searchResults) => {
        setSearchResults(searchResults);
    };

    

  return (
      <>



  <header>
    {/* Intro settings */}
    <style
      dangerouslySetInnerHTML={{
        __html:
          "\n      #intro {\n        /* Margin to fix overlapping fixed navbar */\n        margin-top: 58px;\n      }\n      @media (max-width: 991px) {\n        #intro {\n          /* Margin to fix overlapping fixed navbar */\n          margin-top: 45px;\n        }\n      }\n    "
      }}
    />

    {/* Jumbotron */}
    <div id="intro" className="p-5 text-center bg-light">
      <h1 className="mb-3 h2">MAKE YOUR COMMUNITY BETTER</h1>
      <p className="mb-3">Volunteer Now</p>
      <a
                      className="btn btn-outline-danger m-2"
        href="/homepage"
        role="button"
        rel="nofollow"
        target="_blank"
      >
         Specific Contributions
      </a>
      <a
                      className="btn btn-outline-danger m-2"
        href="/homepage"
        target="_blank"
        role="button"
      >
        Need Help?
      </a>
    </div>
    {/* Jumbotron */}
  </header>
  {/*Main Navigation*/}
  {/*Main layout*/}
  <main className="my-5">
    <div className="container">
      {/*Section: Content*/}
                  <section className="text-center">
                      <div className="container">
                          <SearchBar onSearch={handleSearch} />
                      </div>
        <h4 className="mb-5">
                          <strong>Latest posts</strong>
                         
                      </h4>
                      {isLoading ? (
                          <p>Appreciate You Being Patient</p> // Display loading message or spinner
                      ) : (
                          <>
                              {searchResults.length > 0 ? (
                                  <NewCard formData={searchResults} />
                              ) : (
                                  <NewCard formData={postsWithImages} />
                              )}
                          </>
                      )}
      </section>
      {/*Section: Content*/}
                  {/* Pagination */}
                  <Pagination />

    </div>
  </main>
  {/*Main layout*/}
  {/*Footer*/}
  <footer className="bg-light text-lg-start">
    <div className="py-4 text-center">
      <a
        role="button"
                      className="btn btn-outline-danger btn-lg m-2"
        href="/homepage"
        rel="nofollow"
        target="_blank"
      >
       How to Ask for Help
      </a>
      <a
        role="button"
                      className="btn btn-outline-danger btn-lg m-2"
        href="/homepage"
        target="_blank"
      >
        Talk to Our Reps
      </a>
    </div>
    <hr className="m-0" />
    <div className="text-center py-4 align-items-center">
      <p>Follow Ihsan on social media</p>
      <a
        href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
                      className="btn btn-outline-danger m-1"
        role="button"
        rel="nofollow"
        target="_blank"
      >
        <i className="fab fa-youtube" />
      </a>
      <a
        href="https://www.facebook.com/mdbootstrap"
                      className="btn btn-outline-danger m-1"
        role="button"
        rel="nofollow"
        target="_blank"
      >
        <i className="fab fa-facebook-f" />
      </a>
      <a
        href="https://twitter.com/MDBootstrap"
                      className="btn btn-outline-danger m-1"
        role="button"
        rel="nofollow"
        target="_blank"
      >
        <i className="fab fa-twitter" />
      </a>
      <a
        href="https://github.com/mdbootstrap/mdb-ui-kit"
                      className="btn btn-outline-danger m-1"
        role="button"
        rel="nofollow"
        target="_blank"
      >
        <i className="fab fa-github" />
      </a>
    </div>
    {/* Copyright */}
    <div
      className="text-center p-3"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
    >
      © 2023 Copyright:
      <a className="text-dark" href="https://volunteer.iq/">
        ihsan.iq
      </a>
    </div>
    {/* Copyright */}
  </footer>
  {/*Footer*/}
  
</>

  );
};

export default HomePage;
