import React, { Component } from "react";
import Navbar from "./Component/Navbar";
import News from "./Component/News";
import LoadingBar from 'react-top-loading-bar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default class App extends Component {
  apiKey = process.env.REACT_APP_NEWS_API;
  state= {
    progress:0
  };
  setProgress=(progress)=> {
    this.setState({progress:progress});
  };
  render() {
    return (
      <div>
        <Router>        
          <Navbar />
          <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
          <Routes>
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="top" country="in" category="world"/>}>
            </Route>
            <Route exact path="/business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" country="in" category="business"/>}>
            </Route>
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" country="in" category="entertainment"/>}>
            </Route>
            <Route exact path="/environment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="environment" country="in" category="environment"/>}>
            </Route>
            <Route exact path="/food" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="food" country="in" category="food"/>}>
            </Route>
            <Route exact path="/health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" country="in" category="health"/>}>
            </Route>
            <Route exact path="/politics" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="politics" country="in" category="politics"/>}>
            </Route>
            <Route exact path="/science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" country="in" category="science"/>}>
            </Route>
            <Route exact path="/sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" country="in" category="sports"/>}>
            </Route>
            <Route exact path="/technology" element={<News  setProgress={this.setProgress} apiKey={this.apiKey} key="technology" country="in" category="technology"/>}>
            </Route>
            <Route exact path="/top" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="top" country="in" category="top"/>}>
            </Route>
            <Route exact path="/world" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="world" country="in" category="world"/>}>
            </Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
