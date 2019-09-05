import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import { loadAlbums } from '../actionCreators';
import store from '../store';

class Albums extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      albums: [],
      artistId: props.match.params.id
    }
    
    store.subscribe(()=> {
      this.setState({albums: store.getState().albums})
    })
  }

  async componentDidMount(){
    await store.dispatch(loadAlbums(this.state.artistId));
    this.setState({loading: false});
  }

  render(){
    if(this.state.loading){
      return <h1 style={{color: "white", textAlign: "center"}}>Cargando...</h1>
    }
    
    return (
      <div className="container albums">
        {this.state.albums.map((album, index) => 
          <div className="album" key={index}>            
            <Link to={`/albums/${album.id}/songs`}>
              <img src={album.image} alt=""></img>
              <div>{album.name}</div>
            </Link>            
          </div>
        )}        
      </div>
    );
  }
}

export default Albums;
