import React from 'react';
import {Card} from "reactstrap";

const TrackHistoryList = props => {
    return (
        <Card body inverse color="warning" className="mb-2">
                <strong className="mb-2">
                    Artist: {props.artist}
                </strong>
                <p>Song: {props.track}</p>
                <p>Date: {props.datetime}</p>
        </Card>
    );
};

export default TrackHistoryList;