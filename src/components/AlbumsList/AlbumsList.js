import React from 'react';
import {Card, CardBody, CardTitle, CardSubtitle} from "reactstrap";
import AlbumThumbnail from "../AlbumThumbnail/AlbumThumbnail";


const AlbumsList = props => {
    return (
        <Card body inverse  color="warning" className="mb-5" onClick={props.click}>
            <CardBody className="ml-5">
                <CardTitle>
                    <strong> {props.artist}</strong>
                </CardTitle>
                <AlbumThumbnail image={props.image}/>
                <CardTitle>
                    {props.title}
                </CardTitle>
                <CardSubtitle>{props.year}</CardSubtitle>
            </CardBody>
        </Card>
    );
};

export default AlbumsList;