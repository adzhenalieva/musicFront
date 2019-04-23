import React, {Component} from 'react';
import {connect} from "react-redux";
import {showHistory} from "../../store/actions/trackHistoryActions";
import TrackHistoryList from "../../components/TrackHistoryList/TrackHistoryList";


class TrackHistory extends Component {
    componentDidMount() {
        if (!this.props.user) {
            this.props.history.push('/');
        } else{
            this.props.showTrackHistory();
        }

    }

    dateFormat = date => {
        let d = new Date(date);

        return d.toLocaleDateString('ru-GB') + '  ' + d.toLocaleTimeString();
    };

    render() {
        console.log(this.props.trackHistory);
        return (
            <div>
                <h1>
                    Your Track History
                </h1>
                {this.props.trackHistory.map(trackHistory => (
                    <TrackHistoryList
                        key={trackHistory._id}
                        artist={trackHistory.track.album.artist.artist}
                        track={trackHistory.track.title}
                        datetime={this.dateFormat(trackHistory.datetime)}/>
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        user: state.users.user,
        trackHistory: state.trackHistories.trackHistory

    }
};

const mapDispatchToProps = dispatch => {
    return {
        showTrackHistory: () => dispatch(showHistory())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TrackHistory);