/*eslint-env node, mocha */
/*eslint no-console: 0*/
'use strict';

import expect from 'expect';
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import createComponent from 'helpers/shallowRenderHelper';

import Modal from 'components/Modal';

describe('ModalComponent', () => {
  let ModalComponent;
  let modal;

  beforeEach(() => {
    let open = false;
    ModalComponent = createComponent(Modal);
    modal = TestUtils.renderIntoDocument(
      <Modal
        open={open}
        minWidth='200px'
        maxWidth='500px'
        content='Hello World'
        onToggleModal={() => this.setState({ open: !this.state.open })}
      />
    );
    modal.setState({ open });
  });

  it('should have its component name as default className', () => {
    expect(ModalComponent.props.className).toEqual('modal-wrapper');
  });

  it('should exist', () => {
    expect(modal).toExist();
  });

  it('should render content with `Hello World`', () => {
    let content = TestUtils.findRenderedDOMComponentWithClass(modal, 'content');
    expect(content.className).toEqual('content');
    expect(content.textContent).toEqual('Hello World');
  });

  it('should render with appropriate min and max width', () => {
    let modalDiv = TestUtils.findRenderedDOMComponentWithClass(modal, 'modal');
    expect(modalDiv.style.minWidth).toEqual('200px');
    expect(modalDiv.style.maxWidth).toEqual('500px');
  });

  it('should toggle modal after click overlay', () => {
    TestUtils.Simulate.click(modal.refs.overlay);
    expect(modal.state.open).toEqual(true);
  });
});
