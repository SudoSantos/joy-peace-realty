import React from 'react'
import { Agentsdata } from '../../data/Agentsdata';
import './Agents.css';


const Agents = () => {
    return (
        <section className="agentus">

            <h2 className="meet">Meet Our Agents</h2>
            <div className="agents">
                {Agentsdata.map((agent, index) => {
                    return (
                        <div className="agent">
                            <img src={agent.image} alt="" />
                            <p className="name">{agent.name}</p>
                            <p className="role">{agent.role}</p>
                            <a href=" /">View Profile</a>
                        </div>
                    )
                })}


            </div>

        </section>
    )
}

export default Agents