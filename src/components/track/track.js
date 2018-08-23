import React, { Component } from "react";
import * as Styles from '../track/track.styles';

class Track extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let track = this.props.track;
        return (
            <Styles.TrackCard>
                <Styles.Image src={track.imageUrl} />
                <Styles.Title> {track.title} </Styles.Title>
                <audio controls>
                    <source src={track.mediaUrl} type="audio/ogg" />
                    <source src={track.mediaUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                </audio>
            </Styles.TrackCard>
        );
    }
}

export default Track;