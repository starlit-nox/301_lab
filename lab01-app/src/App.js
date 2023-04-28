import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';
import Main from './Components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data.json';
import SelectedBeast from './Components/SelectedBeast';
import BeastFilter from './Components/BeastFilter';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedBeast: null,
      enlargedImageUrl: null,
      filter: "",
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

  handleFilterChange = (filter) => {
    this.setState({ filter });
  };

  render() {
    const filteredData = this.state.filter
      ? data.filter((beast) => beast.horns === Number(this.state.filter))
      : data;

    return (
      <div>
        <Header />
        <BeastFilter beasts={data} onFilterChange={this.handleFilterChange} />
        <Main
          imageData={filteredData}
          onSelectBeast={this.handleSelectBeast}
          onEnlargeImage={this.handleEnlargeImage}
        />
        <SelectedBeast beast={this.state.selectedBeast} onClose={this.handleClose} />
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
