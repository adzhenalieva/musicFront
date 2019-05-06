import React from 'react';
import ArtistThumbnail from "../ArtistThumbnail/ArtistThumbnail";
import {Card, CardBody} from "reactstrap";

const ArtistsList = props => {
    return (
        <Card body inverse  color="warning" className="mb-5" onClick={props.click}>
            <CardBody>
                <ArtistThumbnail image={props.image}/>
                <strong className="ml-5">
                    {props.artist}
                </strong>
                <p>{props.published}</p>
            </CardBody>
        </Card>
    );
};

export default ArtistsList;