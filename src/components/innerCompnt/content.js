import React, { Component } from 'react';

export default class Content extends Component {

constructor(props) {
  super(props);

  this.state = {};
}


  render() {
    return (
      <div className="content">
          <iframe width="640" height="360" src={this.props.videoUrl} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen>
          </iframe>
      </div>
    );
  }
}

