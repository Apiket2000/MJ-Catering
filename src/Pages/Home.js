import React, { useContext, useEffect } from 'react'
import { Data } from '../Store'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  let { mode } = useContext(Data)



  return (
    <>
      <div id="Home">
        <div className={`container-fluid bg-${mode ? 'dark' : 'light'} pt-5 pt-lg-0`} data-aos="flip-right">
          <div className="row home align-items-center justify-content-evenly">
          <div className="col-lg-5 ">
              <img src="Images/125-1259742_pizza-chef-logo-clipart-pizza-chef-logo-png.jpeg" alt="" width="100%" />
            </div>
            <div className={`col-lg-5  text-${mode ? 'light' : 'dark'} `}>
              <h1 className='text-danger' style={{ fontFamily: "serif", webkitTextStroke: ' 1px green' }}>MOJANKAR CATERERS</h1>
              <p className='text-danger fs-4' style={{ fontFamily: "serif", webkitTextStroke: ' 1px green' }}>There is no sincere love than the love of food.</p>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home