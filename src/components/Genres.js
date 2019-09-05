import React from 'react';
import '../App.css';
import { loadGenres } from '../actionCreators';
import store from '../store';

class Genres extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      genres: []
    }

    store.subscribe(()=> {
      this.setState({genres: store.getState().genres})
    });
  }

  async componentDidMount(){    
    await store.dispatch(loadGenres());  
    this.setState({loading: false});
  }

  render(){
    if(this.state.loading){
      return <h1 style={{color: "white", textAlign: "center"}}>Cargando...</h1>
    }
    
    return (
      <div className="list">
        <div className="wrapper">
          {this.state.genres.map((genre, index) =>
            <div className="genre" key={index}>  
              <p>{genre}</p>
            </div>
          )}
      </div>  
      </div>
    )
  }
}
export default Genres;