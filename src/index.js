import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

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

   renderContent() {
      if (this.state.lat && !this.state.errorMessage) {
         return <SeasonDisplay lat={this.state.lat} />
      } else if (!this.state.lat && this.state.errorMessage) {
         return (<div>Error: {this.state.errorMessage}</div>)
      } else {
         return <Spinner message="Please accept location request" />
      }
   }

   render() {
      return (<div>{this.renderContent()}</div>);
   }
}

ReactDOM.render(
   <App />,
   document.querySelector("#root")
);