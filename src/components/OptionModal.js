import React from 'react' 
import Modal from 'react-modal'

const OptionModal = (props) => {
    return (
        <Modal 
            isOpen={!!props.selectedOption}
            onRequestClose={props.clearModal}
            contentLabel="Selected Option"
        >
                <h3>Selected Option</h3>
                <p>{props.selectedOption}</p>
                <button onClick={props.clearModal}>Okay</button>
        </Modal>
    );
}

export default OptionModal