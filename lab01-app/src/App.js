import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import data from './data.json';
import SelectedBeast from './Components/SelectedBeast';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imageData: data,
      selectedImage: null,
      showModal: false,
    };
  }

  handleImageSelect = (image) => {
    this.setState({
      selectedImage: image,
      showModal: true,
    });
  };

  handleCloseModal = () => {
    this.setState({
      selectedImage: null,
      showModal: false,
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <Main imageData={this.state.imageData} handleImageSelect={this.handleImageSelect} />
        <Footer />
        {this.state.showModal && (
          <SelectedBeast selectedImage={this.state.selectedImage} handleCloseModal={this.handleCloseModal} />
        )}
      </div>
    );
  }
}

export default App;
