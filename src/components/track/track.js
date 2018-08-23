import React, { Component } from "react";
import * as Styles from '../track/track.styles';

class Track extends Component {

    constructor(props) {
        super(props);
        this.onTrackEnd = this.onTrackEnd.bind(this);
    }

    onTrackEnd(){        
        this.props.onTrackEnd();
        this.refs.audio.pause();
        this.refs.audio.load();
    }

    componentDidUpdate(){
        this.refs.audio.play();
    }

    render() {
        return (
            <Styles.TrackCard>
                <Styles.Image src={this.props.track.imageUrl} />
                <Styles.Title> {this.props.track.title} </Styles.Title>
                <audio controls ref="audio"
                     onEnded={this.onTrackEnd}
                     src={this.props.track.mediaUrl}/>
            </Styles.TrackCard>
        );
    }
}

export default Track;