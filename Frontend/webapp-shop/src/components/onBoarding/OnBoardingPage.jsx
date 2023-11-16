import { Component } from 'react';
import "./_OnBoarding.scss";
class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Welcome to Manero!'
    };
  }


render() {
  return (
    <div className="App">
    
    
    <div className="body container-fluid d-flex">
    
   
   
  <div className="box container-fluid">
 
    <div className="circel-box d-flex flex-column justify-content-center">
    <div className="text-button-box container mt-4 d-flex flex-column justify-content-center">
      <h1 className='title'>{this.state.title}</h1>
      <p className='boarding-text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button className="start-button mt-2">Get started</button>
      </div>
      <div className="carousel-button-box container mt-4 d-flex flex-row justify-content-center ">
      
      <a href='#'  onClick={() => {
        this.setState({ title: 'Welcome to Manero!'});
      }} className="carousel-button"></a>
      <a href='#' onClick={() => {
        this.setState({ title: 'Easy Track Order!'});
      }} className="carousel-button"></a>
      <a href='#'  onClick={() => {
        this.setState({ title: 'Door to Door delivery!'});
      }} className="carousel-button"></a>
    </div>
      </div>
    </div>
    
   
    </div>
    
    </div>
  )
}
}
export default App;
