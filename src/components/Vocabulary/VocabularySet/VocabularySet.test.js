import React from 'react';
import { shallow } from 'enzyme';

import VocabularySet from './VocabularySet';

describe('<VocabularySet />', () => {
  const deleteVocabularyMock = jest.fn();

  const props = {
    vocabularyList: ['word1', 'word2'],
    deleteVocabulary: deleteVocabularyMock
  };

  it('renders the VocabularySet Component', () => {
    const component = shallow(<VocabularySet {...props} />);
    expect(component.hasClass('vocabulary_list')).toBeTruthy();

    const vocabularySet = component.find('.vocabulary_list');
    expect(vocabularySet.find('li').length).toBe(2);
  });

  it('appends new word to VocabularySet list', () => {
    const component = shallow(<VocabularySet {...props} />);
    expect(component.hasClass('vocabulary_list')).toBeTruthy();

    const vocabularySet = component.find('.vocabulary_list');

    const listItem = vocabularySet.find('li').at(0);

    const button = listItem.find('button');

    button.props().onClick();

    expect(deleteVocabularyMock).toHaveBeenCalled();
  });
});
