import React from "react";
// this is a bootstrap for buttons for react
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
// import SelectedBeast from "./SelectedBeast";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickImage: 0,
    };
  }


  clickImage = () => {
    this.setState({
      clickImage: this.state.clickImage + 1,
    });
  };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state {
      setViewImg: false,
    };
  }
}

  render() {
    return (
      <div className="HornedList">
        <Card style={{ width: "500px" }}>
          {/* this is what hornedbest is passing through */}
          <h2>{this.props.title}</h2>
          {/* this lets the user click the image to add hearts to the vote */}
          <img
            onClick={this.clickImage}
            src={this.props.imageUrl}
            alt={this.props.keyword}
            title={this.props.title}
          />
          <p>{this.props.description}</p>
          <span>♥ {this.state.clickImage}</span>
        </Card>
        <App>
        <Button onClick={() => {setViewImg(true);}}> Enlarge Image </Button>
        </App>
      </div>
    );
  }
}

export default HornedBeasts;
// hornedbeast is being exported to apps.js

// class HornedBeasts extends Component {
//     constructor(props) {
//         super(constructor);
//         this.state = {
//             "status": "Yay"
//         }
//     }
// }

// handleClick = () => {
//     // this is the click handler function for the thingie
//     const newStatus = this.state.stats === "Nay" ? "Yay" : "Nay";

//     this.setState({
//         status: newStatus
//     });
// }

// render() {
//     return(
//         <div onClick={this.handleClick}>
//         <image src={this.props.imageUrl} alt={this.props.keyword} />
//         <h3>{this.state.status}</h3>
//         </div>
//     )
// }
