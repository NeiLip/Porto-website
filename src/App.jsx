import React, { Component } from 'react'
import Navigation from './components/navigation';
import Header from './components/header';
import Features from './components/features';
import About from './components/about';
import Services from './components/services';
import Gallery from './components/gallery';
import Testimonials from './components/testimonials';
import Team from './components/Team';
import Contact from './components/contact';
import JsonData from './data/data.json';
import {BrowserRouter as Router, Route, Switch, Link, Redirect} from 'react-router-dom';
import NeilOfPorto from './components/NeilOfPorto';


export class App extends Component {
  state = {
    landingPageData: {},
  }
  getlandingPageData() {
    this.setState({landingPageData : JsonData})
  }

  componentDidMount() {
    this.getlandingPageData();
  }

  render() {
    return (
      


      <div>
      
        <Navigation />
       
  <Header data={this.state.landingPageData.Header} />
        
        {/*<Features data={this.state.landingPageData.Features} />*/}
        <Services data={this.state.landingPageData.Services} />       
     
      
        <Gallery />
         <About data={this.state.landingPageData.About} />
        {/*<Testimonials data={this.state.landingPageData.Testimonials} />*/}
        <Team data={this.state.landingPageData.Team} />
        
    {/*      <Router>
  
   
	<Route exact path="/">
    <Redirect to="/home" />
</Route>
  <Route path="/home">
    <Redirect to="/home" />
</Route>
  <Route path="/NeilOfPorto">
    <Redirect to="/NeilOfPorto" />
</Route>


    <Route path="/Home" exact component={Home} />
    <Route path="/NeilOfPorto" exact component={NeilOfPorto} />

    
</Router>*/}
     
       
        <Contact data={this.state.landingPageData.Contact} />
      
      </div>
        
    )
  }
}

export default App;
