import logo from "./logo.svg";
import "./App.css";

import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export class App extends Component {
  pageSize = 15;
  apikey=process.env.REACT_NEWS_API ;
  state = {
    progress : 0
  }
   setProgress=(progress)=>{
    this.setState({progress : progress})
  }

  render() {
    return (
      <div>
        <Router>
        <LoadingBar
            color="#f11946"
            progress={this.state.progress}
            height={3}
          />
          <Navbar></Navbar>
          
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={this.setProgress}    
                  key="News Villa"
                  pageSize={this.pageSize}
                  country="us"
                  category="general"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress}    
                  key="business"
                  pageSize={this.pageSize}
                  country="us"
                  category="business"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress}    
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="us"
                  category="entertainment"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News setProgress={this.setProgress}    
                  key="general"
                  pageSize={this.pageSize}
                  country="us"
                  category="general"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News setProgress={this.setProgress}    
                  key="health"
                  pageSize={this.pageSize}
                  country="us"
                  category="health"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={this.setProgress}    
                  key="sports"
                  pageSize={this.pageSize}
                  country="us"
                  category="sports"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News setProgress={this.setProgress}    
                  key="science"
                  pageSize={this.pageSize}
                  country="us"
                  category="science"
                ></News>
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress}    
                  key="technology"
                  pageSize={this.pageSize}
                  country="us"
                  category="technology"
                ></News>
              }
            ></Route>
          </Routes>
        </Router>
        <footer
          class="blockquote-footer text-light"
          style={{
            backgroundColor: "grey",
            marginTop: "20px",
            marginBottom: "0",
            height: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Developed by - <cite title="Source Title">Rocky</cite>
        </footer>
      </div>
    );
  }
}

export default App;
