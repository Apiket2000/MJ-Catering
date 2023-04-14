import React, { useContext, useEffect } from 'react'
import { Data } from '../Store'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(() => {
        AOS.init();
    }, [])

    let { mode } = useContext(Data)

    let info = [
        {
            id: 1,
            title: "Corporate Catering",
        
        },
        {
            id: 3,
            title: "Wedding catering",
        },
        {
            id: 4,
            title: "Social Event catering",
        },
    ]

    return (
        <>
            <div id="About">
                <div className={`container-fluid bg-${mode ? 'dark' : 'light'} text-${mode ? 'light' : 'dark'} pt-5 pt-lg-0`}>
                    <div className="row justify-content-center about align-items-center">
                        <h1 className='text-danger' style={{ textAlign: 'center', fontFamily: 'serif' }}><strong style={{ webkitTextStroke: ' 1px green' }}>About</strong></h1>
                        <div className="col-lg-5" data-aos="flip-right">
                            <img src="Images/hmct-overview.jpg" alt="" width="100%" />
                        </div>

                        <div className="col-lg-6" data-aos="zoom-in">
                            <h1 style={{ color: "green", fontFamily: "serif" }}>Welcome,To Mojankar Caterers</h1>
                            <p style={{ color: "green", fontFamily: "serif" }}>Catering is the process or business of preparing food and providing food services for clients at remote locations, such as hotels, restaurants, offices, concerts, and events. Companies that offer food, drinks, and other services to various customers, typically for special occasions, make up the catering sector.</p>
                            <h3 style={{ color: "green", fontFamily: "serif" }}>Available Services :</h3>
                            <table className={`table text-${mode ? 'light' : 'dark'}`}>
                                {
                                    info.map((e) => {
                                        return (
                                            <tbody key={e.id}>
                                                <tr>
                                                    <th style={{ color: "green", fontFamily: "serif" }}>{e.title}</th>
                                                </tr>
                                            </tbody>
                                        )
                                    })
                                }
                            </table>
                        
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About