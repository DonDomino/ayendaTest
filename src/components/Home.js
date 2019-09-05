import React from 'react';
import '../App.css';
import {Link} from "react-router-dom";
import store from '../store';
import { loadGenres, randomSong } from '../actionCreators';

class Home extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      genres: [],
      random: []
    }

    store.subscribe(()=> {
      this.setState({genres: store.getState().genres, random: store.getState().random})
    });
  }

  async componentDidMount(){
    await store.dispatch(loadGenres());  
    const genres = this.state.genres;
    const src = genres[Math.floor(Math.random() * genres.length)];
    await store.dispatch(randomSong(src));  
    this.setState({loading: false});
  }

  render(){
    if(this.state.loading){
      return <h1 style={{color: "white", textAlign: "center"}}>Cargando...</h1>
    }
    
    return (
      <div className="home">  
        <h1>Rubytify</h1>      
        <div className='row'>
          <div className="artistsLink">
            <Link to={{
              pathname: '/player',
              state: {
                url: this.state.random.preview_url,
                name: this.state.random.name
              }
            }}>
              <h2>Reproduce una cancion aleatoria</h2>
              <img src='https://image.flaticon.com/icons/svg/122/122626.svg' alt=''></img>
            </Link>
          </div>
          <div className="artistsLink">
            <Link to={`/artists`}> 
              <h2>Ver artistas</h2>
              <img src='https://image.flaticon.com/icons/svg/195/195137.svg' alt=''></img>
            </Link>    
          </div>
        </div>
        <div className='artistsLink'>
          <Link to={`/genres`}> 
            <h2>Ver la lista de generos</h2>
            <img src='https://image.flaticon.com/icons/png/512/382/382673.png' alt=''></img>
          </Link> 
        </div>
      </div>
    )
  }
}
export default Home;