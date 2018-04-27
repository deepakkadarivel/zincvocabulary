import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

jest.mock('./VocabularyComponent');

import VocabularyComponent from './VocabularyComponent';
import VocabularyContainer from './VocabularyContainer';
import vocabularyActionTypes from './vocabularyActionTypes';
import * as vocabularyActions from './vocabularyActions';

describe('<VocabularyContainer />', () => {
  const state = {
    passage: {
      passage: ''
    },
    vocabulary: {
      vocabularyList: []
    }
  };
  const store = configureMockStore()(state);

  let container, component, componentProps;

  beforeEach(() => {
    spyOn(store, 'dispatch');
    spyOn(vocabularyActions, 'updateVocabularyList').and.returnValue({
      type: vocabularyActionTypes.UPDATE_VOCABULARY_LIST,
      list: ['word1', 'word2']
    });
    spyOn(vocabularyActions, 'resetVocabularyList').and.returnValue({
      type: vocabularyActionTypes.RESET_VOCABULARY_LIST
    });
    spyOn(vocabularyActions, 'appendVocabulary').and.returnValue({
      type: vocabularyActionTypes.UPDATE_VOCABULARY_LIST,
      list: ['word1', 'word2', 'word3']
    });
    spyOn(vocabularyActions, 'deleteVocabulary').and.returnValue({
      type: vocabularyActionTypes.UPDATE_VOCABULARY_LIST,
      list: ['word2', 'word3']
    });

    VocabularyComponent.mockImplementation(() => {
      return {
        render() {
          return <div />;
        }
      };
    });

    const wrapper = mount(
      <Provider store={store}>
        <VocabularyContainer />
      </Provider>
    );

    container = wrapper.find(VocabularyContainer);
    component = wrapper.find('VocabularyComponent');
    componentProps = component.props();
  });

  it('renders the VocabularyContainer', () => {
    expect(container.length).toBe(1);
    expect(component.length).toBe(1);
  });

  describe('mapStateToProps', () => {
    it('sets the fileUploadPending prop', () => {
      expect(componentProps.vocabularyList).toEqual(
        state.vocabulary.vocabularyList
      );
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls updateVocabularyList action', () => {
      componentProps.updateVocabularyList(['word1', 'word2']);
      expect(store.dispatch).toHaveBeenCalledWith({
        type: vocabularyActionTypes.UPDATE_VOCABULARY_LIST,
        list: ['word1', 'word2']
      });
    });

    it('calls resetVocabularyList action', () => {
      componentProps.resetVocabularyList();
      expect(store.dispatch).toHaveBeenCalledWith({
        type: vocabularyActionTypes.RESET_VOCABULARY_LIST
      });
    });

    it('calls appendVocabulary action', () => {
      const list = ['word1', 'word2'];
      const vocabulary = 'word3';
      componentProps.appendVocabulary(list, vocabulary);
      expect(store.dispatch).toHaveBeenCalledWith({
        type: vocabularyActionTypes.UPDATE_VOCABULARY_LIST,
        list: ['word1', 'word2', 'word3']
      });
    });

    it('calls deleteVocabulary action', () => {
      const list = ['word1', 'word2', 'word3'];
      const vocabulary = 'word1';
      componentProps.deleteVocabulary(list, vocabulary);
      expect(store.dispatch).toHaveBeenCalledWith({
        type: vocabularyActionTypes.UPDATE_VOCABULARY_LIST,
        list: ['word2', 'word3']
      });
    });
  });
});
