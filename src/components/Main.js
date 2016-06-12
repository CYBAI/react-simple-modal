import React from 'react';
import Modal from './Modal';

class AppComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      openModal: false
    };

    this.handleToggleModal = this.handleToggleModal.bind(this);
  }

  handleToggleModal() {
    this.setState({ openModal: !this.state.openModal });
  }

  render() {
    const {
      openModal
    } = this.state;

    return (
      <div className="index">
        <button onClick={this.handleToggleModal}>Show Modal</button>
        <Modal
          open={openModal}
          onToggleModal={this.handleToggleModal}
          content='Hello World'
        />
      </div>
    );
  }
}

export default AppComponent;
