import React , { Component } from "react";

class Post extends Component {
  constructor(props){
    super(props);

    this.state = {
        post:[]
    };

  }
  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res=>res.json())
    .then(data=> this.setState({post:data}))
  }
  render(){
    const posts = this.state.post.map((data)=>(
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
export default Post;
