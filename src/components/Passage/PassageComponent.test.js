import React from 'react';
import { shallow } from 'enzyme';

import PassageComponent from './PassageComponent';
import Button from '../shared/Button/Button';
import TextArea from '../shared/TextArea/TextArea';

describe('<PassageComponent />', () => {
  const updatePassageMock = jest.fn();
  const clearPassageMock = jest.fn();

  const props = {
    updatePassage: updatePassageMock,
    clearPassage: clearPassageMock
  };

  it('renders the Passage Component', () => {
    const pageTitleValue =
      'Paste your text and Zinc will identify the vocabulary words.';

    const component = shallow(<PassageComponent {...props} />);
    expect(component.hasClass('PassageComponent')).toBeTruthy();

    const passageComponent = component.find('.PassageComponent');

    const passageTitle = passageComponent.find('p');
    expect(passageTitle.props().children).toBe(pageTitleValue);

    expect(passageComponent.find(TextArea).length).toBe(1);
    expect(passageComponent.find(Button).length).toBe(2);
  });

  it('renders the TextArea component inside Passage Component', () => {
    const component = shallow(<PassageComponent {...props} />);

    const passageComponent = component.find('.PassageComponent');

    const textareaComponent = passageComponent.find(TextArea);

    expect(textareaComponent.length).toBe(1);
    expect(textareaComponent.props().className).toBe('TextArea_passage');
    expect(textareaComponent.props().rows).toBe(5);
    expect(textareaComponent.props().resize).toBeFalsy();
    expect(textareaComponent.props().content).toBe('');
    expect(textareaComponent.props().name).toBe('passage');
    expect(textareaComponent.props().placeholder).toBe(
      'Enter your passage here.'
    );
  });

  it('renders the Button components inside Passage Component', () => {
    const component = shallow(<PassageComponent {...props} />);

    const passageComponent = component.find('.PassageComponent');

    const buttons = passageComponent.find(Button);
    expect(buttons.length).toBe(2);

    expect(buttons.at(0).props().className).toBe('Button_normal');
    expect(buttons.at(0).prop('children')).toEqual('reset');
    buttons
      .at(0)
      .props()
      .onClick();
    expect(clearPassageMock).toHaveBeenCalled();

    expect(buttons.at(1).props().className).toBe('Button_primary');
    expect(buttons.at(1).prop('children')).toEqual('next');
    buttons
      .at(1)
      .props()
      .onClick();
    expect(updatePassageMock).toHaveBeenCalled();
  });
});
