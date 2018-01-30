import React, { Component } from 'react';


const youtuUrl="https://www.youtube.com/embed/";

export default class ListItem extends Component {
	constructor(props) {
	  super(props);

	  this.state = {};

	  this.changeUrl=this.changeUrl.bind(this);

	}

  changeUrl(){
  	this.props.changeUrl(youtuUrl+this.props.data.id.videoId);

  }

  render() {
	return(
		<div className="listItem">
		    <div className="row">
		       <h2>{this.props.data.snippet.title}</h2>
		    </div>
		    <div className="row">
			    <div onClick={this.changeUrl}>
				    <img src={this.props.data.snippet.thumbnails.default.url} />
			    </div>
			    <span>{this.props.data.snippet.description}</span>
		    </div>
		</div>
	);
  }
}

