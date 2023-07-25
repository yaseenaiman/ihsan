import React, { useState } from "react";
import axios from "axios";
import '../style/search.css';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ onSearch }) => {
    const [searchInput, setSearchInput] = useState("");

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const handleSearch = () => {
        // Call the API endpoint with the search input
        axios
            .get(`/api/ApprovedPost/SearchPosts?searchInput=${searchInput}`)
            .then((response) => {
                const posts = response.data;
                // Pass the search results to the parent component
                onSearch(posts);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="search">
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-6 offset-md-3">
                        <div className="input-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search for a specific keyword..."
                                value={searchInput}
                                onChange={handleSearchInputChange}
                                onKeyPress={handleKeyPress} // Add the keyPress event handler
                            />
                            <div className="input-group-append">
                                <button className="btn btn-outline-danger" type="button" onClick={handleSearch}>
                                    <FontAwesomeIcon icon={faSearch} />

                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
