import React from 'react';
import ArtistThumbnail from "../ArtistThumbnail/ArtistThumbnail";
import {Card, CardBody} from "reactstrap";

const ArtistsList = props => {
    return (
        <Card className="mb-5" onClick={props.click}>
            <CardBody>
                <ArtistThumbnail image={props.image}/>
                <p><strong >
                    {props.artist}
                </strong></p>
                <p>{props.published}</p>
            </CardBody>
        </Card>
    );
};

export default ArtistsList;