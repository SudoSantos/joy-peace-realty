import React from 'react'
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="first">

                <div>
                    <p style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>Discover</p>

                    <div className='location'>
                        <p>Lekki</p>
                        <p>Ikoyi</p>
                        <p>Lagos</p>
                    </div>

                </div>

                <div>
                    <p style={{ color: 'white', fontWeight: 'bold', fontSize: '20px' }}>Contact Us</p>

                    <div className='address'>
                        <p>Address: 79A Oyibo Adjarho Street, Lekki Phase1, Lagos, Nigeria.</p>
                        <p>joyandpeacerealty@gmail.com</p>
                    </div>

                </div>

            </div>

            <div className="second">
                <p>© Houzez - All rights reserved</p>
            </div>

        </footer>
    )


}

export default Footer