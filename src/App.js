import React, {Component} from 'react';
import './App.css';
import web3 from './web3';
import inbox from './inbox';
 
class App extends Component {

  constructor(props) { 
    super(props);
    this.state = { message: ''};
  }
 
  async componentDidMount(){
    const message = await inbox.methods.message().call();
    this.setState({ message});
  }
 
  render(){
    return (
      <div>
        <h3>Inbox Message</h3>
        <p>{this.state.message}</p>
      </div>
    );
  }
}
 
export default App;
