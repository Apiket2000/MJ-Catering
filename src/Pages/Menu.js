import Aos from 'aos'
import 'aos/dist/aos.css';
import React, { useEffect } from 'react'
import { useContext } from 'react'
import { Data } from '../Store'

const Menu = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    let{mode}=useContext(Data)
  return (
    <>
    <div id='Menu'>
    <div className={`container-fluid bg-${mode ? 'dark' : 'light'}`}>
        <div className="row" >
            <div className="col-lg-6 " data-aos="flip-up">
                <h1 style={{textAlign:"center",fontFamily:"serif",color:"green",webkitTextStroke: ' 1px red'}}>Our Menu</h1>
                <br />
                <ul style={{color:"green",fontFamily:"serif"}}>
                    <li>
                    <h4>Bread Basket</h4>
                    <br />
                    <p>Assortment of fresh baked fruit breads and muffins.</p>
                    </li>
                    
                    <li>
                    <h4>Honey Almond Granola with Fruits</h4>
                    <br />
                    <p>Natural cereal of honey toasted oats, raisins, almonds and dates.</p>
                    </li>
                    
                    <li>
                    <h4>Belgian Waffle</h4>
                    <br />
                    <p>Vanilla flavored batter with malted flour.</p>
                    </li>
                    
                    <li>
                    <h4>Scrambled eggs</h4>
                    <br />
                    <p>Scrambled eggs, roasted red pepper and garlic, with green onions.</p>
                    </li>
                    
                    <li>
                    <h4>Blueberry Pancakes</h4>
                    <br />
                    <p>With syrup, butter and lots of berries.</p>
                    </li>
                </ul>
            </div>
            <div className="col-lg-6 d-flex justify-content-center align-items-center "  data-aos="flip-left">
                <img src="/Images/cacd.jpg" alt=""width="70%" height="500px" style={{borderRadius:"20px"}} />
            </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Menu