import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import Main from './Components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import SelectedBeast from './Components/SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: null,
      enlargedImageUrl: null,
    };
  }

  handleSelectBeast = (beast) => {
    this.setState({ selectedBeast: beast });
  };

  handleClose = () => {
    this.setState({ selectedBeast: null });
  };

  handleEnlargeImage = (imageUrl) => {
    this.setState({ enlargedImageUrl: imageUrl });
  };

  handleHideEnlarged = () => {
    this.setState({ enlargedImageUrl: null });
  };

  render() {
    return (
      <div>
        <Header />
        <Main 
          imageData={data} 
          onSelectBeast={this.handleSelectBeast}
          onEnlargeImage={this.handleEnlargeImage} 
        />
        <SelectedBeast
          beast={this.state.selectedBeast}
          onClose={this.handleClose}
        />
        {this.state.enlargedImageUrl && (
          <div className="enlarged-container" onClick={this.handleHideEnlarged}>
            <img src={this.state.enlargedImageUrl} className="enlarged-image" alt="" />
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
