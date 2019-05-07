import React from 'react';
import {Card} from "reactstrap";

const TrackHistoryList = props => {
    return (
        <Card className="mb-4">
                <strong className="my-3 ml-2">
                    Artist: {props.artist}
                </strong>
                <p className="ml-2"> Song: {props.track}</p>
                <p className="ml-2">Date: {props.datetime}</p>
        </Card>
    );
};

export default TrackHistoryList;