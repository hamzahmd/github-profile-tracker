import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/UI/Navbar';
import Users from './Components/Users/Users';
import Search from './Components/UI/Search';
import Alert from './Components/UI/Alert';
import axios from 'axios';

// Class Based Components
class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: res.data.items, loading: false });
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  // Alerting
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });
    setTimeout(() => this.setState({ alert: null }), 2000);
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className='App'>
        <Navbar />
        <div className='container'>
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;
