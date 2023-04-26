import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.beast != null} onHide={this.props.onClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.beast ? this.props.beast.title : ''}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={this.props.beast ? this.props.beast.imageUrl : ''} alt={this.props.beast ? this.props.beast.keyword : ''} />
          <p>{this.props.beast ? this.props.beast.description : ''}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
