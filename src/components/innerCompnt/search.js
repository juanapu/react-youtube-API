import React, { Component } from 'react';

export default class Search extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
    	txt: ''
    };
    this.inputhandle=this.inputhandle.bind(this);
    this.changeInput=this.changeInput.bind(this);
  }

  inputhandle(e){
  	// this.setState({txt: e.target.value});
    this.props.onSearch(this.state.txt);
    e.preventDefault();
  }

  changeInput(e){
    this.setState({txt: e.target.value});
  }


  render() {
    return (
      <div className="search">
        <form id="search-form" onSubmit={this.inputhandle} action="/" className="style-scope ytd-searchbox">
	      <div id="container" className="style-scope ytd-searchbox">
	        <div id="search-input">
	           <input id="search" onChange={this.changeInput} />
	        </div>
	        <button is="paper-icon-button-light" id="search-icon" className="search-icon style-scope ytd-searchbox" hidden="" aria-label="搜索">
	        </button>
	      </div>
	      <button id="search-icon-legacy" aria-label="搜索">search</button>
	   	</form>
     </div>
    );
  }
}

