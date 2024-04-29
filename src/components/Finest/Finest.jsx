import React from 'react'
import image from '../../assets/FeaturedPimages/house2.jpg';
import '../FeaturedP/FeaturedP.css';

function Finest() {
  return (
    <section style={{backgroundColor: '#f7f8f9', transform: 'translateY(-100px)'}}>

        <section className="images-br">
  
        <div className="col">
            <img src={image}  alt=''/>
            <div style={{transform: 'translateY(-100px)', color: 'white'}}>
            <h4>Luxurious 1 Bedroom Apartment for sale</h4>
            <p className="location">Osapa London Lagos, Nigeria</p>
            <p className="num">2 &nbsp; &nbsp; 1</p>
            <p className="num">RESIDENTIAL APARTMENT</p>
            </div>
            
        </div>
        
  
        <div className="col">
          <img src={image} alt='' />
          <div style={{transform: 'translateY(-100px)', color: 'white'}}>
            <h4>Luxurious 2 Bedroom Apartment for sale</h4>
            <p className="location">Ikoyi Lagos State Nigeria</p>
            <p className="num">2 &nbsp; &nbsp; 1</p>
            <p className="num">MULTI FAMILY HOME, APARTMENT</p>
          </div>
        </div>
        
  
        <div className="col">
          <img src={image} alt='' />
          <div style={{transform: 'translateY(-100px)', color: 'white'}}>
            <h4>5 Bedroom Contemporary Full Detached</h4>
            <p className="location">Ikate, Lagos State, Nigeria</p>
            <p className="num">2 &nbsp; &nbsp; 1</p>
            <p className="num">SINGLE FAMILY HOME, APARTMENT</p>
          </div>
          
        </div>
 
      </section>

      <section className="images-br" style={{transform: 'translateY(-150px)'}}>
  
        <div className="col">
            <img src={image} alt='' />
            <div style={{transform: 'translateY(-100px)', color: 'white'}}>
              <h4>Luxurious 1 Bedroom Apartment for sale</h4>
              <p className="location">Osapa London Lagos, Nigeria</p>
              <p className="num">2 &nbsp; &nbsp; 1</p>
              <p className="num">RESIDENTIAL APARTMENT</p>
            </div>
            
        </div>
        
  
        <div className="col">
          <img src={image} alt='' />
          <div style={{transform: 'translateY(-100px)', color: 'white'}}>
            <h4>Luxurious 2 Bedroom Apartment for sale</h4>
            <p className="location">Ikoyi Lagos State Nigeria</p>
            <p className="num">2 &nbsp; &nbsp; 1</p>
            <p className="num">MULTI FAMILY HOME, APARTMENT</p>
          </div>          
        </div>
        
  
        <div className="col">
          <img src={image} alt='' />
          <div style={{transform: 'translateY(-100px)', color: 'white'}}>
            <h4>5 Bedroom Contemporary Full Detached</h4>
            <p className="location">Ikate, Lagos State, Nigeria</p>
            <p className="num">2 &nbsp; &nbsp; 1</p>
            <p className="num">SINGLE FAMILY HOME, APARTMENT</p>
          </div>          
        </div>
 
      </section>

      <div className="ldmr" style={{transform: 'translateY(-150px)'}}>
        <button>Load More</button>
      </div>
           
      

      </section>
  )
}

export default Finest