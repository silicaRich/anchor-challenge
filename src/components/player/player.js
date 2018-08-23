import React, { Component } from "react";
import * as Styles from './player.styles';
import Track from "../track/track";
import axios from 'axios';

class Player extends Component {

    constructor() {
        super();
        this.state = {
            tracks: [],
            isLoading: false,
            currentTrack: 0
        }
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
        if (this.state.currentTrack - 1 > 0) {               
            this.setState({ currentTrack : this.state.currentTrack -= 1});
        } else {
            this.setState({ currentTrack : this.state.tracks.length -1});
        }
    }
    nextTrack(){
        if (this.state.currentTrack + 1 < this.state.tracks.length < 1) {              
            this.setState({ currentTrack : this.state.currentTrack += 1 });
        } else {
            this.setState({ currentTrack : 0});
        }
    }

    render() {
        let track = this.state.tracks[this.state.currentTrack];
        return (
              <Styles.PlayerContainer>
                  { this.state.tracks.length > 0 && 
                    <Track track={this.state.tracks[this.state.currentTrack]} />  
                  }
             </Styles.PlayerContainer> 
        );
    }
}
export default Player;