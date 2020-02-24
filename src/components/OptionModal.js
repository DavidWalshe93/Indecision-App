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
            closeTimeoutMS={200}
            className={"modal"}
        >
            <h3 className={"modal__title"}>Selected Option</h3>
            {this.props.selectedOption && <p className={"modal__body"}>{this.props.selectedOption}</p>}
            <button
                onClick={this.props.handleCloseModal}
                className={"button"}
            >Okay
            </button>
        </Modal>
    );
}

