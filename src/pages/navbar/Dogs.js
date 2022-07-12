import React from "react";
import dog1 from './IMG_8203.jpeg';
import dog2 from './camphoto_342241519.jpeg';

const Dogs = () => {
    return (
        <div>
            <h3>Dogs</h3>
            <div>
                <img src={dog1} />
                <img src={dog2} />
            </div>
        </div>
    );
}

export default Dogs;