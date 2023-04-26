import React from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

class SelectedBeast extends React.Component {
  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.selectedImg.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={this.props.selectedImg.image_url}
            alt={this.props.selectedImg.keyword}
            title={this.props.selectedImg.title}
            style={{ width: "100%" }}
          />
          <p>{this.props.selectedImg.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default SelectedBeast;
  
