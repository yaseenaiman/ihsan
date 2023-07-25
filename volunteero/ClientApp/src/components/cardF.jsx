import { useState } from "react";
import '../style/card.css';

export default function CardF({ uploadby, name, articles, imgi, numberofLikes, approvedPostID }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleReadMore = () => {
        setIsExpanded(true);
    };


    return (
        <>
            <div className="col-sm-4 mb-4">
                <div className={`card ${isExpanded ? "expanded" : ""}`}>
                    <div className="bg-image hover-overlay ripple" data-mdb-ripple-color="light">
                        <img src={imgi} alt="house" style={{ width: "100%", height: "200px" }} className="img-fluid" />
                        <a href="#!">
                            <div className="mask" style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }} />
                        </a>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">{name}</h5>
                        <p className={`card1-text ${isExpanded ? "expanded-text" : ""}`}>
                            {articles}
                        </p>
                        <p className="card1-text">Posted By: {uploadby}</p>
                        {isExpanded ? (
                            <button className="btn btn-outline-danger" onClick={() => setIsExpanded(false)}>
                                Read Less
                            </button>
                        ) : (
                                <button className="btn btn-outline-danger" onClick={handleReadMore}>
                                Read More
                            </button>
                        )}
                    </div>
             
                </div>
            </div>
        </>
    );
}
