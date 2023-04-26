import React, { Component } from 'react';
import HornedBeasts from './HornedBeasts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Main extends Component {
  render() {
    return (
      <main className="Lab01-AppMain">
        <Container>
          <Row>
            {this.props.imageData.map((imageData) => (
              <Col key={imageData.id}>
                <HornedBeasts
                  keyword={imageData.keyword}
                  description={imageData.description}
                  title={imageData.title}
                  imageUrl={imageData.image_url}
                  selectedImg={() => this.props.selectedImg(imageData)}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </main>
    );
  }
}

export default Main;
