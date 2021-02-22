import React from 'react';
// import { FaRegBell } from 'react-icons/fa';
import { Button } from 'react-bootstrap';
import { features } from '../../data';
import './main.css';
const main = () => {
    return (
        <div className='bg'>
            <div
                class="text-center bg-image" className='text' >
                <div class="mask">
                    <div class="d-flex justify-content-center align-items-center h-100">
                        <div class="text-white">
                            <h4 class="mb-3"><u>Your</u> Learning Journey Matters to Us</h4>
                            <h1 class="mb-3">Future achievers study from IITians Online</h1>
                            <a class="btn btn-outline-light btn-lg" href="#!" role="button"
                            >REGISTER FOR FREE</a
                            >
                        </div>
                    </div>
                </div>
                <div>

                </div>
            </div>
            <div className='featuresContainer'>
                {features.map((feature) => {
                    const { id, icon, head1, head2 } = feature;
                    return (
                        <div key={id} className='card'>
                            <img src={icon} alt='' />
                            <h1>{head1}</h1>
                            <h4>{head2}</h4>
                        </div>
                    );
                })}
            </div>
            <div className='tagline'><b>Electura lays a path of realizable and practical knowledge for young minds, by acting as a rendezvous between them and high academic achievers, through technology.</b></div>
            <div className='PathToSuccess'>
                <div>
                    <h1><b>The Path to Success</b></h1>
                    <img src="https://electura.co/wp-content/uploads/2020/07/Presentation1-1.jpg" />
                </div>
                <div className='Expert'>
                    <h1>Register for a webinar with an IITian Expert</h1>
                    <a href="https://electura.co/"> <Button className='glow-on-hover'>Register</Button></a>
                    <h1><b>Happy Students, Happy Parents!</b></h1>
                </div>

            </div>

        </div>
    );
}

export default main;