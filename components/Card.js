import React from "react";

const Card = ({ education }) => (
    <div className="card">
        <div className="s-6 card-left">
            <img src={education.img} className="responsive card-image" alt={education.school}/>
        </div>
        <div className="s-6 card-right">
            <div className="information">
                <p><strong>{education.school}</strong></p>
                <p>{education.description}</p>
                <p>{education.age}</p>
            </div>
        </div>
        <style jsx>{`
            .card {
              display: inline-flex;
              width: 100%;
              align-items: center;
              margin: 0 0 2em 0;
              background-color: gainsboro;
              box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
              border-radius: 5px;
            }
            
            .card-left {
              display: flex;
            }
            
            .information {
              margin: 0.6em;
            }
            
            .card-image {
              border-radius: 5px 0 0 5px;
            }
            
            @media (max-width: 500px) {
              .card {
                display: grid;
              }
            
              .card-image {
                border-radius: 5px 5px 0 0;
              }
            }
        `}</style>
    </div>
);

export default Card;
