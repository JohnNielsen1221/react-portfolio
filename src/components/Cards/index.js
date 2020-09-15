import React from 'react';

//individual project card layout using props
function Cards(props) {
    return (
        <div className="card">
            <div className="card-image">
                <img alt={props.name} src={props.image} />
            </div>
            <div className="card-content">
                <p>{props.name}</p>
                <p>
                    <a href={props.github}><img src="https://img.icons8.com/nolan/48/github.png" alt="Repository" id="project-icon"/></a> 
                    <a href={props.deploy}><img src="https://img.icons8.com/nolan/48/monitor.png" alt="Deployed Site" id="project-icon"/></a> 
                </p>
            </div>
        </div>
    )
}

export default Cards