import React from 'react';
import { shallow } from 'enzyme';

import VocabularySet from './VocabularySet';

describe('<VocabularySet />', () => {
  const deleteVocabularySetMock = jest.fn();

  const props = {
    vocabularyList: ['word1', 'word2'],
    deleteVocabularySet: deleteVocabularySetMock
  };

  it('renders the VocabularySet Component', () => {
    const component = shallow(<VocabularySet {...props} />);
    expect(component.hasClass('vocabulary_list')).toBeTruthy();

    const vocabularySet = component.find('.vocabulary_list');
    expect(vocabularySet.find('li').length).toBe(2);
  });

  xit('renders the TextArea component inside VocabularySet Component', () => {
    const component = shallow(<VocabularySet {...props} />);

    component.setState({
      message: props.message,
      messageClass: props.messageClass
    });

    const vocabularySet = component.find('.VocabularySet');
    expect(vocabularySet.find('li').length).toBe(1);
  });

  xit('appends new word to VocabularySet list', () => {
    const component = shallow(<VocabularySet {...props} />);

    const checkAndCreateNewWordInVocabularySetMock = jest.fn();
    component.instance().checkAndCreateNewWordInVocabularySet = checkAndCreateNewWordInVocabularySetMock;

    const passageComponent = component.find('.VocabularySet');

    const button = passageComponent.find(Button);
    expect(button.length).toBe(1);

    component.setState({
      word: 'new word',
      vocabularySet: []
    });

    expect(button.props().className).toBe('Button_primary');
    expect(button.prop('children')).toEqual('create');
    button
      .at(0)
      .props()
      .onClick();
    expect(checkAndCreateNewWordInVocabularySetMock).toHaveBeenCalled();
  });
});
