import React, { Component } from "react";
import * as Styles from './player.styles';
import Track from "../track/track";
import axios from 'axios';

class Player extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tracks: [],
            isLoading: false,
            currentTrack: 0
        }
        
        this.prevTrack = this.prevTrack.bind(this);
        this.nextTrack = this.nextTrack.bind(this);
    }

    componentDidMount() {

        this.setState({ isLoading: true });
        
        axios.get('/tracks')
            .then(response => this.setState({
                tracks: response.data.tracks,
                isLoading: false
            }))
            .catch(error => this.setState({
                error,
                isLoading: false
            }));

    }

    prevTrack(){
        if (this.state.currentTrack > 0) {               
            this.setState({ currentTrack : this.state.currentTrack -= 1});
        } else {
            this.setState({ currentTrack : this.state.tracks.length -1});
        }
    }

    nextTrack(){
        if (this.state.currentTrack + 1 < this.state.tracks.length) {              
            this.setState({ currentTrack : this.state.currentTrack += 1 });
        } else {
            this.setState({ currentTrack : 0});
        }
    }

    render() {
        return (
              <Styles.PlayerContainer>
                <Styles.Prev onClick={this.prevTrack} src="src/assets/prev.png"/>
                { 
                    this.state.tracks.length > 0 && 
                    <Track track={this.state.tracks[this.state.currentTrack]} onTrackEnd={this.nextTrack} /> 
                }       
                <Styles.Next onClick={this.nextTrack} src="src/assets/next.png"/>
             </Styles.PlayerContainer> 
        );
    }
}
export default Player;