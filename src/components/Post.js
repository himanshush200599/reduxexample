import React , { Component } from "react";
import PropTypes from 'prop-types'
import {connect} from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Post extends Component {
componentWillMount(){
  this.props.fetchPosts();
}
componentWillReceiveProps(nextProps){
  if(nextProps.newPost){
    this.props.posts.unshift(nextProps.newPost);
  }
}
  render(){
    const posts = this.props.posts.map((data)=>(
    <div key={data.id} >
      <h3>{data.title}</h3>
      <p>{data.body}</p>
      <hr />
    </div>

   ))
    return(
      <div>
        {posts}
      </div>
    );
}
}
Post.propsTypes = {
  fetchPosts:PropTypes.func.isRequired,
  posts:PropTypes.array.isRequired,
  newPost:PropTypes.object
}
const mapStateToProps = state =>({
  posts:state.posts.items,newPost:state.posts.item
})

export default connect(mapStateToProps,{fetchPosts})(Post);
