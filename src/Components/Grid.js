import React, { useState, useEffect } from "react";
import './Grid.css';

const Grid = () => {

    return (
        <div className="d-flex" id="wrapper">
            <div className="border-end bg-white" id="sidebar-wrapper">
                <div className="list-group list-group-flush">
                    <div className="menu">
                        <a className="list-group-item list-group-item-action list-group-item-light p-3 glyphicon"
                            href="#!">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 472 512"
                                height="2em" width="6em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M422.5 202.9c30.7 0 33.5 53.1-.3 53.1h-10.8v44.3h-26.6v-97.4h37.7zM472 352.6C429.9 444.5 350.4 504 248 504 111 504 0 393 0 256S111 8 248 8c97.4 0 172.8 53.7 218.2 138.4l-186 108.8L472 352.6zm-38.5 12.5l-60.3-30.7c-27.1 44.3-70.4 71.4-122.4 71.4-82.5 0-149.2-66.7-149.2-148.9 0-82.5 66.7-149.2 149.2-149.2 48.4 0 88.9 23.5 116.9 63.4l59.5-34.6c-40.7-62.6-104.7-100-179.2-100-121.2 0-219.5 98.3-219.5 219.5S126.8 475.5 248 475.5c78.6 0 146.5-42.1 185.5-110.4z"></path></svg>
                            <br></br>
                            <br></br>
                        </a>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024"
                                height="1em" width="5em" height="25" xmlns="http://www.w3.org/2000/svg" color="#216b82">
                                <path d="M858.5 763.6a374 374 0 0 0-80.6-119.5 375.63 375.63 0 0 0-119.5-80.6c-.4-.2-.8-.3-1.2-.5C719.5 518 760 444.7 760 362c0-137-111-248-248-248S264 225 264 362c0 82.7 40.5 156 102.8 201.1-.4.2-.8.3-1.2.5-44.8 18.9-85 46-119.5 80.6a375.63 375.63 0 0 0-80.6 119.5A371.7 371.7 0 0 0 136 901.8a8 8 0 0 0 8 8.2h60c4.4 0 7.9-3.5 8-7.8 2-77.2 33-149.5 87.8-204.3 56.7-56.7 132-87.9 212.2-87.9s155.5 31.2 212.2 87.9C779 752.7 810 825 812 902.2c.1 4.4 3.6 7.8 8 7.8h60a8 8 0 0 0 8-8.2c-1-47.8-10.9-94.3-29.5-138.2zM512 534c-45.9 0-89.1-17.9-121.6-50.4S340 407.9 340 362c0-45.9 17.9-89.1 50.4-121.6S466.1 190 512 190s89.1 17.9 121.6 50.4S684 316.1 684 362c0 45.9-17.9 89.1-50.4 121.6S557.9 534 512 534z"></path></svg>
                            <div className="a">Students</div>
                        </a>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1em"
                                width="5em" height="25" xmlns="http://www.w3.org/2000/svg" color="#216b82">
                                <path d="M6,22h15v-2H6.012C5.55,19.988,5,19.805,5,19s0.55-0.988,1.012-1H19h1h1v-1v-2V4c0-1.103-0.897-2-2-2H6 C4.794,2,3,2.799,3,5v3v6v3v2C3,21.201,4.794,22,6,22z M5,8V5c0-0.805,0.55-0.988,1-1h13v11v1H5v-2V8z"></path><path d="M8 6H17V8H8z"></path></svg>
                            <div className="a">Lession Plan</div>
                        </a>
                        <a className="list-group-item list-group-item-action list-group-item-light p-3" href="#!">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024"
                                height="1em" width="5em" height="25" xmlns="http://www.w3.org/2000/svg" color="#216b82">
                                <path d="M924.8 625.7l-65.5-56c3.1-19 4.7-38.4 4.7-57.8s-1.6-38.8-4.7-57.8l65.5-56a32.03 32.03 0 0 0 9.3-35.2l-.9-2.6a443.74 443.74 0 0 0-79.7-137.9l-1.8-2.1a32.12 32.12 0 0 0-35.1-9.5l-81.3 28.9c-30-24.6-63.5-44-99.7-57.6l-15.7-85a32.05 32.05 0 0 0-25.8-25.7l-2.7-.5c-52.1-9.4-106.9-9.4-159 0l-2.7.5a32.05 32.05 0 0 0-25.8 25.7l-15.8 85.4a351.86 351.86 0 0 0-99 57.4l-81.9-29.1a32 32 0 0 0-35.1 9.5l-1.8 2.1a446.02 446.02 0 0 0-79.7 137.9l-.9 2.6c-4.5 12.5-.8 26.5 9.3 35.2l66.3 56.6c-3.1 18.8-4.6 38-4.6 57.1 0 19.2 1.5 38.4 4.6 57.1L99 625.5a32.03 32.03 0 0 0-9.3 35.2l.9 2.6c18.1 50.4 44.9 96.9 79.7 137.9l1.8 2.1a32.12 32.12 0 0 0 35.1 9.5l81.9-29.1c29.8 24.5 63.1 43.9 99 57.4l15.8 85.4a32.05 32.05 0 0 0 25.8 25.7l2.7.5a449.4 449.4 0 0 0 159 0l2.7-.5a32.05 32.05 0 0 0 25.8-25.7l15.7-85a350 350 0 0 0 99.7-57.6l81.3 28.9a32 32 0 0 0 35.1-9.5l1.8-2.1c34.8-41.1 61.6-87.5 79.7-137.9l.9-2.6c4.5-12.3.8-26.3-9.3-35zM788.3 465.9c2.5 15.1 3.8 30.6 3.8 46.1s-1.3 31-3.8 46.1l-6.6 40.1 74.7 63.9a370.03 370.03 0 0 1-42.6 73.6L721 702.8l-31.4 25.8c-23.9 19.6-50.5 35-79.3 45.8l-38.1 14.3-17.9 97a377.5 377.5 0 0 1-85 0l-17.9-97.2-37.8-14.5c-28.5-10.8-55-26.2-78.7-45.7l-31.4-25.9-93.4 33.2c-17-22.9-31.2-47.6-42.6-73.6l75.5-64.5-6.5-40c-2.4-14.9-3.7-30.3-3.7-45.5 0-15.3 1.2-30.6 3.7-45.5l6.5-40-75.5-64.5c11.3-26.1 25.6-50.7 42.6-73.6l93.4 33.2 31.4-25.9c23.7-19.5 50.2-34.9 78.7-45.7l37.9-14.3 17.9-97.2c28.1-3.2 56.8-3.2 85 0l17.9 97 38.1 14.3c28.7 10.8 55.4 26.2 79.3 45.8l31.4 25.8 92.8-32.9c17 22.9 31.2 47.6 42.6 73.6L781.8 426l6.5 39.9zM512 326c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm79.2 255.2A111.6 111.6 0 0 1 512 614c-29.9 0-58-11.7-79.2-32.8A111.6 111.6 0 0 1 400 502c0-29.9 11.7-58 32.8-79.2C454 401.6 482.1 390 512 390c29.9 0 58 11.6 79.2 32.8A111.6 111.6 0 0 1 624 502c0 29.9-11.7 58-32.8 79.2z"></path></svg>
                            <div className="a">Settings</div>
                        </a>
                    </div>
                </div>
            </div>

            <div id="page-content-wrapper">
                <nav className="navbar bg-light">
                    <div>
                        <h5 className="students">
                            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512"
                                height="2em" width="2em" xmlns="http://www.w3.org/2000/svg" color="#216b82">
                                <path d="M320 128L192 256l128 128z"></path>
                            </svg>
                            <div className="vid" color="#216b82">Videos</div>
                        </h5>
                    </div>

                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="input-group rounded">
                                    <input type="search" className="form-control rounded" placeholder="Insert URL here"
                                        aria-label="Insert URL here" aria-describedby="search-addon" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="page-content-wrapper">
                        <div className="container-fluid">
                            <h5 className="videos">or</h5>
                            <div className="card input-card">
                                <div onClick={() =>
                                    console.log("clicked")}>
                                    <div className="card-body">
                                        <h5 className="card-title">upload</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>

            </div>
        </div>
    );
};
export default Grid;