import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {

   state = { lat: null, errorMessage: '' }

   componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
         (position) => this.setState({ lat: position.coords.latitude }),
         (err) => this.setState({ errorMessage: err.message })
      );
   }

   componentDidUpdate() {
      console.log('my component was just updated.');
   }

   render() {
      if (this.state.lat && !this.state.errorMessage) {
         return (<div>Latitude: {this.state.lat}</div>)
      } else if (!this.state.lat && this.state.errorMessage) {
         return (<div>Error: {this.state.errorMessage}</div>)
      } else {
         return (<div>Loading</div>)
      }
   }
}

ReactDOM.render(
   <App />,
   document.querySelector("#root")
);