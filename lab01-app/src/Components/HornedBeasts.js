import React from "react";
import Card from "react-bootstrap/Card";
import SelectedBeast from "./SelectedBeast";

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickImage: 0,
      show: false,
    };
  }

  clickImage = () => {
    this.setState({
      clickImage: this.state.clickImage + 1,
    });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <div className="HornedList">
        <Card style={{ width: "300px", height: "300px" }}>
          <h2>{this.props.title}</h2>
          <img
            onClick={this.handleShow}
            src={this.props.imageUrl}
            alt={this.props.keyword}
            title={this.props.title}
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
          <p>{this.props.description}</p>
          <span>♥ {this.state.clickImage}</span>
        </Card>
        <SelectedBeast
          show={this.state.show}
          selectedImg={this.props}
          handleClose={this.handleClose}
        />
      </div>
    );
  }
}

export default HornedBeasts;
