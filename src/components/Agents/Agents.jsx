import React from 'react'
import joy from '../../assets/joyJoseph.jpg';
import peace from '../../assets/peaceJoseph.jpg';
import './Agents.css';


const Agents = () => {
    return (
        <section className="agentus">
            
      <h2 className="meet">Meet Our Agents</h2>
            <div className="agents">
                <div className="agent">
                    <img src={joy} alt="" />
                    <p className="name">Joy Joseph</p>
                    <p className="role">CEO, JOY AND PEACE REALTY</p>
                    <a href=" /">View Profile</a>
                </div>

                <div className="agent">
                    <img src={peace} alt="" />
                    <p className="name">Peace Joseph</p>
                    <p className="role">CEO, JOY AND PEACE REALTY</p>
                    <a href="/">View Profile</a>
                </div>

            </div>

        </section>
    )
}

export default Agents