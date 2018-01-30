import React, { Component } from 'react';
import Search from './innerCompnt/search';
import Content from './innerCompnt/content';
import List from './innerCompnt/list';
import fetch from 'cross-fetch';



const key="AIzaSyAh8kXeX3DihiH8qqoLdcXLdMGyulNJzS8";
const url="https://www.googleapis.com/youtube/v3/search?id=youtubeapi-193212&key="+key+"&type=video&part=snippet,id&";
let result ='';


export default class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      data: '',
      q: '',
      result: [],
      viewVideo: 'https://www.youtube.com/embed/hrZqiCUx6kg'
    };
    // this.search=this.search.bind(this);
    this.changestate=this.changestate.bind(this);
    this.changeUrl=this.changeUrl.bind(this);
  }

  changeUrl(val){
    this.setState({viewVideo: val});
  }

  changestate(val){

      let q =val;
      let urlTem=url+"q="+q;
      console.log("urlTem is "+urlTem);

      fetch(urlTem)
        .then(res => {
          console.log("below is res");
          console.log(res);
          if (res.status >= 400) {
            throw new Error("Bad response from server");
          }
          return res.json();
        })
        .then(user => {
          // user.map((item,i)=>{return <div>item is {item}</div>});
          console.log(user.items);
          this.setState({q: val,result: user.items});
        })
        .catch(err => {
          console.error(err);
        });

  }


  render() {
    return (
      <div className="app">
        <p>{this.state.viewVideo}</p>
      	<Search onSearch={this.changestate} />
        <p>{this.state.q}</p>
      	<div className="row">
      		<div className="col-md-8">
      			<Content videoUrl={this.state.viewVideo} />
      		</div>
      		<div className="col-md-4">
      			<List result={this.state.result} changeUrl={this.changeUrl} />	
      		</div>
      	</div>
      </div>
    );
  }
}
