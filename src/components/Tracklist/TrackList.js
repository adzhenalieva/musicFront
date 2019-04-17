import React from 'react';
import {CardText, Col} from "reactstrap";
import './TrackList.css';
import Row from "reactstrap/es/Row";

const TrackList = props => {
    return (
        <Row className="row">
            <Col sm="6">
                        <CardText className=" mb-1 trackWrap">
                            <span className="track">№ {props.number}</span>
                            <span className="track"><strong>{props.title}</strong></span>
                            <span className="trackDuration">{props.duration}</span>
                        </CardText>
            </Col>
        </Row>
    );
};

export default TrackList;