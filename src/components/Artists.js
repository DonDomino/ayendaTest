import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import {loadArtists} from "../actionCreators";
import store from '../store';

class Artists extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      artists: []
    }

    store.subscribe(()=> {
      this.setState({artists: store.getState().artists})
    })
  }

  async componentDidMount(){
    await store.dispatch(loadArtists());
    this.setState({loading: false});
  }

  render(){
    if(this.state.loading){
      return <h1 style={{color: "white", textAlign: "center"}}>Cargando...</h1>
    }

    return (
      <div className="container">
        {this.state.artists.map((artist, index) => 
          <div className="artist" key={index} style={{backgroundImage: `url(${artist.image})`}}>
            <Link to={`/artists/${artist.id}/albums`}>{artist.name}</Link>            
          </div>
        )}        
      </div>
    );
  }
}

export default Artists;
