import React from 'react'
import image from '../../assets/FeaturedPimages/house5.jpg';
// import '../FeaturedP/FeaturedP.css';
import { LiaBedSolid } from "react-icons/lia";
import './Finest.css';

function Finest() {
  return (
    <section style={{ backgroundColor: '#f7f8f9' }}>

      <div className=" card-container">

        <div className="card">
          <img src={image} alt='' />
          <div className='holder'>
            <h4>Luxurious 1 Bedroom Apartment for sale</h4>
            <b className="location">#580,000,000</b>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <LiaBedSolid className="bedIcon" />
              <p className="num">2 &nbsp; &nbsp; 1</p>
            </div>

          </div>
        </div>

        <div className="card">
          <img src={image} alt='' />
          <div className='holder'>
            <h4>Luxurious 2 Bedroom Apartment for sale</h4>
            <b className="location">#580,000,000</b>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <LiaBedSolid className="bedIcon" />
              <p className="num">2 &nbsp; &nbsp; 1</p>
            </div>

          </div>
        </div>

        <div className="card">
          <img src={image} alt='' />
          <div className='holder'>
            <h4>5 Bedroom Contemporary Full Detached</h4>
            <b className="location">#580,000,000</b>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <LiaBedSolid className="bedIcon" />
              <p className="num">2 &nbsp; &nbsp; 1</p>
            </div>

          </div>

        </div>

      </div>

      {/* <section className="images-br" style={{transform: 'translateY(-50px)'}}>
  
        <div className="col">
            <img src={image} alt='' />
            <div className='holder'>
              <h4>Luxurious 1 Bedroom Apartment for sale</h4>
              <b className="location">#580,000,000</b>
              <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
            <LiaBedSolid className="bedIcon" />
            <p className="num">2 &nbsp; &nbsp; 1</p>
            </div>
            
            </div>
            
        </div>
        
  
        <div className="col">
          <img src={image} alt='' />
          <div className='holder'>
            <h4>Luxurious 2 Bedroom Apartment for sale</h4>
            <b className="location">#580,000,000</b>
            <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
            <LiaBedSolid className="bedIcon" />
            <p className="num">2 &nbsp; &nbsp; 1</p>
            </div>
            
          </div>          
        </div>
        
  
        <div className="col">
          <img src={image} alt='' />
          <div className='holder'>
            <h4>5 Bedroom Contemporary Full Detached</h4>
            <b className="location">#580,000,000</b>
            <div style={{display:'flex', alignItems:'center', gap:'10px'}}>
            <LiaBedSolid className="bedIcon" />
            <p className="num">2 &nbsp; &nbsp; 1</p>
            </div>
            
          </div>          
        </div>
 
      </section> */}

      <div className="ldmr" style={{ transform: 'translateY(-50px)' }}>
        <button>Load More</button>
      </div>



    </section>
  )
}

export default Finest