import '../styles/Modal.css';
import React, { Component } from 'react';

import classNames from 'classnames';

class Modal extends Component {
  componentDidMount() {
    this.refs.overlay.addEventListener('click', () => {
      this.props.onToggleModal();
    });
  }

  componentWillUnmount() {
    this.refs.overlay.removeEventListener('click');
  }

  render() {
    const {
      open,
      content,
      onToggleModal
    } = this.props;

    let {
      minWidth,
      maxWidth
    } = this.props;

    if (!minWidth) {
      minWidth = Math.floor(window.innerWidth * 0.2);
    }

    if (!maxWidth) {
      maxWidth = Math.floor(window.innerWidth * 0.8);
    }

    return (
      <div className="modal-wrapper">
        <div
          className={classNames({
            'overlay fade-and-drop': open,
            open
          })}
          ref="overlay"
        ></div>
        <div
          className={
            classNames({
              'modal fade-and-drop': true,
              open
            })
          }
          style={{ minWidth, maxWidth }}>
          <button
            className={classNames('close close-button')}
            onClick={onToggleModal}
          >&times;</button>
          <div className="content">
            {content}
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
