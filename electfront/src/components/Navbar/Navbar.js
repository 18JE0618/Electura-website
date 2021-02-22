import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../../data';
import logo from '../../logo.svg';
import './Navbar.css';

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);
    const linksContainerRef = useRef(null);
    const linksRef = useRef(null);
    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };
    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        if (showLinks) {
            linksContainerRef.current.style.height = `${linksHeight}px`;
        } else {
            linksContainerRef.current.style.height = '0px';
        }
    }, [showLinks]);
    return (
        <nav>
            <div className='nav-center'>
                <div className='nav-header'>
                    <img src="https://electura.co/wp-content/uploads/2020/07/cropped-logo-1-160x49.png" className='logo' alt='logo' />

                    <button className='nav-toggle' onClick={toggleLinks}>
                        <FaBars />
                    </button>
                </div>
                <div className='links-container' ref={linksContainerRef}>
                    <ul className='links' ref={linksRef}>
                        {links.map((link) => {
                            const { id, url, text } = link;
                            return (
                                <li key={id}>
                                    <a href={url}>{text}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <ul className='social-icons'>
                    {social.map((socialIcon) => {
                        const { id, url, icon } = socialIcon;
                        return (
                            <li key={id}>
                                {/* <img src={logo} className='logo' /> */}
                                <a href={url}>{icon} +91-9302275951</a>
                                {/* <a href="https://electura.co/home-new/#"></a> */}
                            </li>

                        );
                    })}
                </ul>
                <ul className='login'><a class="btn btn-outline-dark btn-md" href="https://electura.co/" role="button"
                >Login</a
                ></ul>
            </div>
        </nav>
    );
};

export default Navbar;
