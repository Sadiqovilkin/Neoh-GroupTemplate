import React, { useState } from 'react'
import classes from '../Header/index.module.css'
import { Link } from 'react-router-dom'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
const Header = ({userID, setUserID, setLocalUserID }) => {
    const [nav, setNav] = useState("d-none")
    return (
        <>

            <header>
                <div className={classes.headerContainer}>
                    <div className={classes.innerHead}>
                        <div className={classes.logo}>
                            <img src="https://neoh-react.vercel.app/img/logo.png" alt="" />
                        </div>
                        <div className={classes.textBar}>
                            <span className={classes.menuText}>Menu</span>
                            <button className={classes.barButton} onClick={() => { setNav("d-block") }}>
                                <span className={classes.oneSp} ></span>
                                <span className={classes.twoSp} ></span>
                                <span className={classes.threeSp}></span>
                            </button>
                        </div>
                    </div>
                </div>

            </header>
            <nav className={nav}>
                <div className="container-fluid">
                    <div className={classes.navRow}>
                        <div className={classes.navLeft}></div>
                        <div style={{ backgroundColor: "#111" }} className={classes.navRight}>
                            <div className={classes.close}>
                                <div className={classes.textBar}>
                                    <span className={classes.closeText}>Close</span>
                                    <button className={classes.barButton} onClick={() => { setNav("d-none") }}>
                                        <span className={classes.closeOneSp} ></span>
                                        <span style={{ opacity: "0" }} className={classes.closeTwoSp} ></span>
                                        <span className={classes.closeThreeSp}></span>
                                    </button>
                                </div>
                            </div>
                            <div className={classes.navContent}>
                                <div className={classes.navMenu}>
                                    <ul className='m-0 p-0'>
                                        { userID ? (<>
                                            <li><Link style={{ fontSize: "36px", color: "white" }} to={"/"}>Home</Link></li>
                                        <li><Link style={{ fontSize: "36px", color: "white" }} to={"about"}>About</Link></li>
                                        <li><Link style={{ fontSize: "36px", color: "white" }} to={"collections"}>Collections</Link></li>
                                        <li><Link onClick={() => {
                  Swal.fire({
                    title: "Are you sure?",
                    text: "You won't be able to revert this!",
                    icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!",
                  }).then((result) => {
                    if (result.isConfirmed) {
                      setUserID(null);
                      setLocalUserID(null);
                      Cookies.remove('token');
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success",
                      }).then(() => {
                        navigate("/login");
                      });
                    }
                  });
                }} style={{ fontSize: "36px", color: "white" }} >LogOut</Link></li>
                                        
                                        </>)
                                        :<>
                                                                                <li><Link style={{ fontSize: "36px", color: "white" }} to={"/"}>Home</Link></li>
                                        <li><Link style={{ fontSize: "36px", color: "white" }} to={"about"}>About</Link></li>
                                        <li><Link style={{ fontSize: "36px", color: "white" }} to={"collections"}>Collections</Link></li>
                                        <li><Link style={{ fontSize: "36px", color: "white" }} to={"register"}>Sign up</Link></li>
                                        <li><Link style={{ fontSize: "36px", color: "white" }} to={"login"}>Sign in</Link></li>
                                        </>
                                        
                                        }

                                    </ul>
                                </div>
                            </div>
                            <div className={classes.navFooter}>
                                <div className={classes.footerRow}>
                                    <div className={classes.ftrleft}>
                                        <p className='m-0 p-0'> Copyright 2022- Designed & Developed by Codeefly</p>
                                    </div>
                                    <div className={classes.ftrright}>
                                        <ul className='m-0 p-0 d-flex align-items-center gap-4 ' >
                                            <li><FaTwitter /></li>
                                            <li> <FaFacebook /></li>
                                            <li><FaInstagramSquare /></li>
                                            <li><FaPinterestP /></li>
                                            <li><FaBehance /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header