import React from 'react'
import './Midpage.css';
import Image1 from '../../assets/FeaturedPimages/house1.jpg';

const Midpage = () => {
  return (
    <section className="midpage">
    <div className="elem">
      <h2 style={{fonteight: 'lighter'}}>Residential</h2>
      <p style={{marginTop: '10px', lineHeight: '30px', fontWeight: 'lighter'}}>
        Discover a wide range of exceptional residential
        buildings at our real estate firm. From luxury apartments to cozy homes,
        find your dream home with expert assistance.
        <div style={{borderBottom: "1px solid black", width: '40%', marginTop: '50px'}}></div>
      </p>
    </div>

    <div className="elem elemI">
      <img src={Image1} alt="" />
      <div className="caption">More Details</div>
    </div>

    <div className="elem elemI">
      <img src={Image1} alt="" />
      <div className="caption">More Details</div>
    </div>

    <div className="elem elemI">
      <img src={Image1} alt="" />
      <div className="caption">More Details</div>
    </div>

    <div className="elem elemI">
      <img src={Image1} alt="" />
      <div className="caption">More Details</div>
    </div>

    <div className="elem elemI">
      <img src={Image1} alt="" />
      <div className="caption">More Details</div>
    </div>

    <div className="elem">
      <h2 style={{marginTop: '10px'}}>Commercial</h2>
      <p style={{marginTop: "10px", lineHeight: '30px', fontWeight: 'lighter'}}>
        Find your perfect commercial space with us. From offices to retail spaces, our 
        curated listings cater to diverse business needs. Explore our portfolio now.
        <div style={{borderBottom: '1px solid black', width: '40%', marginTop: '50px'}}></div>
      </p>
    </div>

    <div className="elem elemI">
      <img src={Image1} alt="" />
      <div className="caption">More Details</div>
    </div>

    <div className="elem elemI">
      <img src={Image1} alt="" />
      <div className="caption">More Details</div>
    </div>

  </section>
  )
}

export default Midpage;