import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './reviewdata';
import './slide.css';
function Slider() {
    const [people, setPeople] = useState(data);
    const [index, setIndex] = React.useState(0);

    useEffect(() => {
        const lastIndex = people.length - 1;
        if (index < 0) {
            setIndex(lastIndex);
        }
        if (index > lastIndex) {
            setIndex(0);
        }
    }, [index, people]);

    useEffect(() => {
        let slider = setInterval(() => {
            setIndex(index + 1);
        }, 5000);
        return () => {
            clearInterval(slider);
        };
    }, [index]);

    return (
        <section className="psection">
            <div className="ptitle">
                <h2>
                    <span>/</span>reviews
        </h2>
            </div>
            <div className="psection-center">
                {people.map((person, personIndex) => {
                    const { id, image, name, title, quote } = person;

                    let position = 'nextSlide';
                    if (personIndex === index) {
                        position = 'activeSlide';
                    }
                    if (
                        personIndex === index - 1 ||
                        (index === 0 && personIndex === people.length - 1)
                    ) {
                        position = 'lastSlide';
                    }

                    return (
                        <article className={position} key={id}>
                            <img src={image} alt={name} className="person-img" />
                            <h4>{name}</h4>
                            <p className="ptitle">{title}</p>
                            <p className="tex">{quote}</p>
                            <FaQuoteRight className="icon" />
                        </article>
                    );
                })}
                <button className="prev" onClick={() => setIndex(index - 1)}>
                    <FiChevronLeft />
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                    <FiChevronRight />
                </button>
            </div>
            <div class="footer" >
                <span class="footer-primary-navigation">
                    <ul id="menu-footer-menu" class="nav-menu">
                        <li id="menu-item-553" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-31 current_page_item menu-item-553"><a href="https://electura.co/" aria-current="page">Home</a></li>
                        <li id="menu-item-577" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-577"><a href="https://electura.co/about-us/">About Us</a></li>
                        <li id="menu-item-617" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-617"><a href="https://electura.co/join-as-teacher/">Join as Teacher</a></li>
                        <li id="menu-item-1064" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1064"><a href="https://electura.co/our-tutors/">Our Tutors</a></li>
                        <li id="menu-item-552" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-552"><a href="https://electura.co/contact/">Contact</a></li>
                        <li id="menu-item-705" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-705"><a href="https://electura.co/disclaimer/">Disclaimer</a></li>
                        <li id="menu-item-863" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-863"><a href="https://electura.co/blogs/">Blogs</a></li>
                        <li id="menu-item-903" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-903"><a href="https://electura.co/buy_course/">Buy a course</a></li>
                        <li id="menu-item-964" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-964"><a href="https://electura.co/privacy_policy_tnc/">Privacy Policy</a></li>
                        <li id="menu-item-1112" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1112"><a href="https://electura.co/home-new/">Home New</a></li>
                    </ul></span>
            </div>
        </section>
    );
}

export default Slider;
