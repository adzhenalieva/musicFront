import React from "react";
import {apiURL} from "../../constants";
import imageNotAvailable from '../../assets/images/image_not_available.png';
import './ArtistThumbnail.css';


const ArtistThumbnail = props => {

    let image = imageNotAvailable;

    if (props.image) {
        image = apiURL + '/uploads/artists/' + props.image;
    }

    return <img src={image}  className="img-thumbnail" alt="artistImage" />

};



export default ArtistThumbnail;