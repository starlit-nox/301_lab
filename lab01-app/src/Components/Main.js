import React from 'react'
import HornedBeasts from './HornedBeasts';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Main extends React.Component {
    render() {
        console.log('onEnlargeImage:', this.props.onEnlargeImage);

        return (
            <main className="Lab01-AppMain">
                <Container>
                    <Row>
                        {/* image data goes through here */}
                        {this.props.imageData.map(imageData => {
                            return (
                                <Col key={imageData.id}>
                                    <HornedBeasts
                                        key={imageData.id}
                                        keyword={imageData.keyword}
                                        description={imageData.description}
                                        title={imageData.title}
                                        imageUrl={imageData.image_url}
                                        onSelectBeast={this.props.onSelectBeast}
                                        onEnlargeImage={this.props.onEnlargeImage}
                                    />

                                </Col>
                            )
                        })}
                    </Row>
                </Container>
            </main>
        );
    }
}

export default Main;
