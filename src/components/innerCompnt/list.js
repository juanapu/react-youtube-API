import React, { Component } from 'react';
import ListItem from './listItem';

       // const ListItems = "<div>tst</div>";

export default class List extends Component {
	constructor(props) {
	  super(props);

	  this.state = {
	  };
	  this.changeUrl=this.changeUrl.bind(this);
	}

	changeUrl(val){
		this.props.changeUrl(val);	
	}

  render() {
	return(
		<ul>
			{this.props.result.map((item)=><ListItem key={item.etag} data={item} changeUrl={this.changeUrl}/>)}
		</ul>
	);
  }
}

