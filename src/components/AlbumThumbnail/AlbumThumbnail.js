import React from "react";
import {apiURL} from "../../constants";
import imageNotAvailable from '../../assets/images/image_not_available.png';
import './AlbumThumbnail.css';


const AlbumThumbnail = props => {

    let image = imageNotAvailable;

    if (props.image) {
        image = apiURL + '/uploads/albums/' + props.image;
    }

    return <img src={image}  className="img-thumbnail" alt="albumImage" />

};



export default AlbumThumbnail;