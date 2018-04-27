import React from 'react';
import { shallow } from 'enzyme';

import VocabularyComponent from './VocabularyComponent';
import Button from '../shared/Button/Button';
import TextArea from '../shared/SingleInput/SingleInput';

describe('<VocabularyComponent />', () => {
  const updateVocabularyListMock = jest.fn();
  const resetVocabularyListMock = jest.fn();
  const appendVocabularyMock = jest.fn();
  const deleteVocabularyMock = jest.fn();

  const props = {
    vocabularyList: [],
    updateVocabularyList: updateVocabularyListMock,
    resetVocabularyList: resetVocabularyListMock,
    appendVocabulary: appendVocabularyMock,
    deleteVocabulary: deleteVocabularyMock
  };

  it('renders the Vocabulary Component', () => {
    const pageTitleValue = 'Add up to 15 words to complete your set.';

    const component = shallow(<VocabularyComponent {...props} />);
    expect(component.hasClass('VocabularyComponent')).toBeTruthy();

    const passageComponent = component.find('.VocabularyComponent');

    const passageTitle = passageComponent.find('p');
    expect(passageTitle.props().children).toBe(pageTitleValue);

    expect(passageComponent.find('SingleInput').length).toBe(1);
    expect(passageComponent.find(Button).length).toBe(1);
  });

  it('renders the TextArea component inside Vocabulary Component', () => {
    const component = shallow(<VocabularyComponent {...props} />);

    const passageComponent = component.find('.VocabularyComponent');

    const singleInputComponent = passageComponent.find('SingleInput');

    expect(singleInputComponent.length).toBe(1);
    expect(singleInputComponent.props().className).toBe('Input_vocabulary');
    expect(singleInputComponent.props().inputType).toBe('text');
    expect(singleInputComponent.props().name).toBe('vocabulary');
    expect(singleInputComponent.props().content).toBe('');
    expect(singleInputComponent.props().placeholder).toBe(
      'Type a word to add to the set...'
    );
  });

  it('renders the Button components inside Vocabulary Component', () => {
    const component = shallow(<VocabularyComponent {...props} />);

    const passageComponent = component.find('.VocabularyComponent');

    const button = passageComponent.find(Button);
    expect(button.length).toBe(1);

    expect(button.props().className).toBe('Button_primary');
    expect(button.prop('children')).toEqual('create');
    // button
    //     .at(0)
    //     .props()
    //     .onClick();
    // expect(clearVocabularyMock).toHaveBeenCalled();
  });
});
