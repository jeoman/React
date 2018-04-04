import React, { Component } from 'react';
import './App.css';
import Album from './Album';




class App extends Component {
  //render : componentWillMount() -> render() -> componentDidMount()
  //update : componentWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() ->componentDidUpdate() 
  
  state ={  
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        albums : [
          {
            title : "Dailylook",
            poster :  "https://i0.wp.com/klyrics.net/wp-content/uploads/2017/02/Hash-Swan-Shangri-La.jpg?fit=600%2C600&ssl=1"
          },
          {
            title : "We Here 2",
            poster :  "https://i.ytimg.com/vi/ZLvgSetReqk/hqdefault.jpg"
          },
          {
            title : "Francesca",
            poster : "https://i2.wp.com/klyrics.net/wp-content/uploads/2018/02/Hash-Swan-Alexandrite.jpg?fit=600%2C600&ssl=1"
          },
          {
            title :  "One more rollies",
            poster :  "https://2.bp.blogspot.com/-pT9nzqMwALk/WSU36xgHJNI/AAAAAAAAIzo/3fbkG7CIigYuSaACZg-2aC4uHN_1FzUHgCK4B/s1600/Lirik%2BLagu%2BCHANGMO%2B%25E2%2580%2593%2BOne%2BMore%2BRollie.jpg"
          },
          {
            title : "dressroom",
            poster : "https://images.genius.com/15d2414830253d3d42bcbc55a673d3c8.1000x1000x1.jpg"
          }
        ],
      })
    }, 2000)
  }

  _renderAlbums = () =>{
    const albums = this.state.albums.map((album,index)=>{
      return <Album title={album.title} poster={album.poster} key={index} />
    })
    return albums
  }

  render() {
    return (
      <div className="App">
        {this.state.albums ? this._renderAlbums() : 'Loading'}
      </div>
    );
  }
}

export default App;
