// Created by David Walshe on 23/02/2020

import React from "react";
import Modal from "react-modal";

export default class OptionModal extends React.Component {

    componentDidMount() {
        Modal.setAppElement("body");
    }

    render = () => (
        <Modal
            isOpen={!!this.props.selectedOption}
            onRequestClose={this.props.handleCloseModal}
            contentLabel="Selected Option"
        >
            <h3>Selected Option</h3>
            {this.props.selectedOption && <p>{this.props.selectedOption}</p>}
            <button onClick={this.props.handleCloseModal}>Okay</button>
        </Modal>
    );
}

