import React, { Component } from 'react';
import { SearchBox } from './components/search-box/search-box.component';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchText: ''
  }

}

// ComponentDidMount will get called when a component is called
  componentDidMount(){
    fetch('http://jsonplaceholder.typicode.com/users').then((response)=>{

      if(response.status === 200){
        return response.json()
      }else{
        console.log('error occured when retrieving monster information')
      }
    }).then((users)=> {this.setState({monsters: users})})
  }

  handleChange = (e) => {
    console.log(this.state)
    this.setState({searchText: e.target.value});
  }

  render(){
    const {monsters, searchText} = this.state;
    const filteredMonsters = monsters.filter((monsters) => 
      monsters.name.toLowerCase().includes(searchText.toLowerCase())
    )
    return(
      <div className="App">
      <h1>Monster's Academia</h1>
      <SearchBox 
        placeholder = 'Search Monsters'
        handleChange = {this.handleChange}
      />   
      <CardList monsters={filteredMonsters}></CardList>
    </div>
    )
  }
}

export default App;