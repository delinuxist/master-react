import axios from "axios";
import React, { Component } from "react";

class PostList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(data);
        this.setState({
          posts: data,
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchPost();
  }
  render() {
    return (
      <div>
        PostList
        <div>{this.state.posts.length}</div>
      </div>
    );
  }
}

export default PostList;
