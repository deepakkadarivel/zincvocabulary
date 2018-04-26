import React from 'react';
import { shallow } from 'enzyme';

import Button from './Button';

describe('<Button />', () => {
  it('renders the button of a particular type', () => {
    const onClickMock = jest.fn();

    const props = {
      children: 'next',
      className: 'Button_primary',
      onClick: onClickMock
    };

    const component = shallow(<Button {...props} />);

    expect(component.hasClass('Button_primary')).toBeTruthy();
    expect(component.prop('children')).toEqual('next');

    component.props().onClick();

    expect(onClickMock).toHaveBeenCalled();
  });
});
