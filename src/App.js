import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pageSize = 12;
  apiKey = process.env.REACT_APP_NEWS_API
  state = {
    progress: 0
  }
  setProgress =(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar/>
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
        height={3}
      />
          <Routes>
          <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="general" pageSize={this.pageSize} country="in" category="general"/>}></Route>

          <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="business" pageSize={this.pageSize} country="in" category="business"/>}></Route>

          <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="" pageSize={this.pageSize} country="in" category="entertainment"/>}></Route>

          <Route exact path="/general" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="" pageSize={this.pageSize} country="in" category="general"/>}></Route>

          <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="health" pageSize={this.pageSize} country="in" category="health"/>}></Route>

          <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="science" pageSize={this.pageSize} country="in" category="science"/>}></Route>

          <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="sports" pageSize={this.pageSize} country="in" category="sports"/>}></Route>

          <Route exact path="/technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey}key="technology" pageSize={this.pageSize} country="in" category="technology"/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}


