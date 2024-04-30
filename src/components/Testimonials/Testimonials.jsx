import React from 'react';
import Matthew from '../../assets/matthew.jpg'
import Alex from '../../assets/alex.jpg'
import Olawale from '../../assets/olawale.jpg'
import './Testimonials.css';
import '../Agents/Agents.css';


const Testimonials = () => {
    return (

        <section className="testimonialz">

            <h2 className="meet">Testimonials</h2>
        <div className="testimonials">
             <div className="testifier">
                <p>
                    I am extremely satisfied with the services provided by J & P realty
                    during my first property purchase in Banana Island Lagos Nigeria. Their
                    team was knowledgeable, trust-worthy and guided me through the entire
                    process. They made sure that all my concerns were addressed and helped
                    me find the property that met all my requirements. I highly recommend J & P realty
                    to anyone looking to buy property in Lekki Lagos State.
                </p>

                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <img src={Olawale} alt="" />
                        <p>by <span style={{fontWeight: 'bold'}}>Olawale ayobami</span> </p>
                </div>
            </div>

            <div className="testifier">
                <p>
                    I am extremely satisfied with the services provided by J & P realty
                    during my first property purchase in Banana Island Lagos Nigeria. Their
                    team was knowledgeable, trust-worthy and guided me through the entire
                    process. They made sure that all my concerns were addressed and helped
                    me find the property that met all my requirements. I highly recommend J & P realty
                    to anyone looking to buy property in Lekki Lagos State.
                </p>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <img src={Matthew} alt="" />
                        <p> by <span style={{fontWeight: 'bold'}}>Dr Matthew Mario</span> </p>
                </div>
            </div>

            <div className="testifier">
                <p>
                    I am extremely satisfied with the services provided by J & P realty
                    during my first property purchase in Banana Island Lagos Nigeria. Their
                    team was knowledgeable, trust-worthy and guided me through the entire
                    process. They made sure that all my concerns were addressed and helped
                    me find the property that met all my requirements. I highly recommend J & P realty
                    to anyone looking to buy property in Lekki Lagos State.
                </p>
                <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <img src={Alex} alt="" />
                        <p> by <span style={{fontWeight: 'bold'}}> Alex Akinwunmi</span></p>
                </div>
            </div>

        </div>
           

        </section>
    );
};

export default Testimonials;
