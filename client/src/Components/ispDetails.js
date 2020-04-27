import React from 'react';

function GameDetails(props) {

    return (
        <div className="isp-details-inner">
            <div className="isp-image-details">
                <div className="isp-image">
                    <img src={props.data.image}/>
                </div>
                <div className="isp-body">
                    <div>
                        {props.data.name}
                    </div>
                    <div>
                        {props.data.max_speed}
                    </div>
                    <div>
                        {props.data.contact_no}
                    </div>
                    <div>
                        {props.data.email}
                    </div>
                    <div>
                        {props.data.lowest_price}
                    </div>
                </div>
            </div>
            <div className="isp-footer">
                <div>
                    Rating : {props.data.rating}
                </div>
                <div className="discription">
                    {props.data.description}
                </div>
                <div className="link-button">
                    <button>LINK</button>
                    <button>Share</button>
                    <button>Download</button>
                </div>
            </div>
        </div>
    )
}

export default GameDetails;