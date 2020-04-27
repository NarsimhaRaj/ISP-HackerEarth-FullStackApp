import React from 'react';

function GameDetails(props) {

    return (
        <div className="game">
            <div className="game-title">
                {props.data.image}
            </div>
            <div className="game-body">
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
            <div className="isp-footer">
                <div>
                    {props.data.rating}
                </div>
                <div>
                    {props.data.discription}
                </div>
                <div>
                    <button>LINK</button>
                    <button>Share</button>
                    <button>Download</button>
                </div>
            </div>
        </div>
    )
}

export default GameDetails;