import React from 'react';
import { shallow } from 'enzyme';

import SingleInput from './SingleInput';
import PropTypes from 'prop-types';

describe('<SingleInput />', () => {
  it('renders the SingleInput component', () => {
    const controlFuncMock = jest.fn();

    const props = {
      className: 'Input_vocabulary',
      inputType: 'text',
      name: 'vocabulary',
      controlFunc: controlFuncMock,
      content: 'word1',
      placeholder: 'enter a word',
      message: 'input label message',
      messageClass: 'success'
    };

    const component = shallow(<SingleInput {...props} />);
    const input = component.find('input');

    expect(input.hasClass('Input')).toBeTruthy();
    expect(input.props().type).toBe('text');
    expect(input.props().name).toBe('vocabulary');
    expect(input.props().value).toBe('word1');
    expect(input.props().placeholder).toBe('enter a word');

    input.props().onChange();

    expect(controlFuncMock).toHaveBeenCalled();

    const label = component.find('label');

    expect(label.hasClass('message-label')).toBeTruthy();
    expect(label.props().children).toEqual('input label message');
  });
});
