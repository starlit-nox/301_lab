import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {
  state = {
    clickImage: 0,
  };

  toggleViewImg = () => {
    this.props.onEnlargeImage(this.props.imageUrl);
  };

  clickImage = () => {
    this.setState({
      clickImage: this.state.clickImage + 1,
    });
  };

  render() {
    return (
      <div className="HornedList">
        <Card style={{ width: '500px' }}>
          <h2>{this.props.title}</h2>
          <img onClick={this.clickImage} src={this.props.imageUrl} alt={this.props.keyword} title={this.props.title}  />
          <p>{this.props.description}</p>
          <span>♥ {this.state.clickImage}</span>
          <Button onClick={this.props.onSelectBeast.bind(null, this.props)} src={this.props.imageUrl} alt={this.props.keyword} title={this.props.title} >Enlarge Image</Button>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;
