import React from 'react';
import { shallow } from 'enzyme';

import TextArea from './TextArea';

describe('<TextArea />', () => {
  it('renders the textarea component', () => {
    const controlFuncMock = jest.fn();

    const props = {
      className: 'TextArea_passage',
      rows: 5,
      name: 'passage',
      content: 'Sample text',
      resize: false,
      placeholder: 'Enter your passage here.',
      controlFunc: controlFuncMock
    };

    const component = shallow(<TextArea {...props} />);

    expect(component.hasClass('TextArea_passage')).toBeTruthy();
    expect(component.prop('rows')).toEqual(5);
    expect(component.prop('name')).toEqual('passage');
    expect(component.prop('value')).toEqual('Sample text');
    expect(component.prop('resize')).toBeFalsy();
    expect(component.prop('placeholder')).toEqual('Enter your passage here.');

    component.props().onChange();

    expect(controlFuncMock).toHaveBeenCalled();
  });
});
