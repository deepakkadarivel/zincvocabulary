import React from 'react';
import { shallow } from 'enzyme';

import SingleInput from './SingleInput';

describe('<SingleInput />', () => {
  it('renders the SingleInput component', () => {
    const controlFuncMock = jest.fn();

    const props = {
      className: 'Input_vocabulary',
      inputType: 'text',
      name: 'vocabulary',
      controlFunc: controlFuncMock,
      content: 'word1',
      placeholder: 'enter a word'
    };

    const component = shallow(<SingleInput {...props} />);

    expect(component.hasClass('Input_vocabulary')).toBeTruthy();
    expect(component.props().type).toBe('text');
    expect(component.props().name).toBe('vocabulary');
    expect(component.props().value).toBe('word1');
    expect(component.props().placeholder).toBe('enter a word');

    component.props().onChange();

    expect(controlFuncMock).toHaveBeenCalled();
  });
});
