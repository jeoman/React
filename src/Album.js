import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Album.css';


class Album extends Component{

    static propTypes={
        title : PropTypes.string.isRequired,
        poster : PropTypes.string.isRequired
    }


    render (){
        return(
            <div>
                <AlbumPoster poster ={this.props.poster} />
                <h1>{this.props.title}</h1>
            </div>
        )
    }
}

class AlbumPoster extends Component{

    static propTypes ={
        poster : PropTypes.string.isRequired
    }

    render(){
        return(
            <img src={this.props.poster} />
        )
    }
}
export default Album;