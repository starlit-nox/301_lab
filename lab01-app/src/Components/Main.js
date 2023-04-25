import React, { Component } from 'react'
import Data from './data.json';
import HornedBeasts from './HornedBeasts';
// added bootstraps for the containers with rows * columuns
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';


// this is what's rendering hornedbeasts
class Main extends React.Component {
    render() {
        return (
            <main className="Lab01-AppMain">
                <Container>
                    <Row>
                        {/* image data goes through here */}
                        {this.props.imageData.map(imageData => {
                            return (
                                <Col>
                                    <HornedBeasts keyword={imageData.keyword}
                                        description={imageData.description}
                                        title={imageData.title}
                                        imageUrl={imageData.image_url}
                                        selectedImg={this.props.selectedImg} />
                                </Col>
                            )
                        })}

                        {/* there is only 19 slots despite there being 20 ids in data.json bc arrays start with 0 instead of 1 */}
                    </Row>
                </Container>

            </main>
        );
    }
}

fitler = (e) => {
    const
}
export default Main;
