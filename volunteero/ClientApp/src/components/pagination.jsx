import React from "react";

const Pagination = () => {
    return (
        <nav className="my-4" aria-label="...">
            <ul className="pagination pagination-circle justify-content-center">
                <li className="page-item">
                    <a
                        className="page-link"
                        style={{ color: "black" }}
                        href="#"
                        tabIndex={-1}
                        aria-disabled="true"
                    >
                        Previous
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" style={{ color: "black" }} href="#">
                        1
                    </a>
                </li>
                <li className="page-item active" aria-current="page">
                    <a className="page-link" style={{ backgroundColor: "#52ab98" }} href="#">
                        2 <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" style={{ color: "black" }} href="#">
                        3
                    </a>
                </li>
                <li className="page-item">
                    <a className="page-link" style={{ color: "black" }} href="#">
                        Next
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;
