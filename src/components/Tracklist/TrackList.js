import React from 'react';
import {CardText, Col} from "reactstrap";
import Row from "reactstrap/es/Row";
import './TrackList.css';

const TrackList = props => {
    return (
        <Row className="Row">
            <Col sm="6">
                        <CardText className=" mb-1 TrackWrap">
                            <span className="Track Play" onClick={props.play}/>
                            <span className="Track">№ {props.number}</span>
                            <span className="Track"><strong>{props.title}</strong></span>
                            <span className="TrackDuration">{props.duration}</span>
                            <span className="Publish">{props.published}</span>
                        </CardText>
            </Col>
        </Row>
    );
};

export default TrackList;