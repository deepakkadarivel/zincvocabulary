import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

jest.mock('./VocabularySet');

import VocabularySet from './VocabularySet';
import VocabularySetContainer from './VocabularySetContainer';
import vocabularyActionTypes from '../vocabularyActionTypes';
import * as vocabularyActions from '../vocabularyActions';

describe('<VocabularySetContainer />', () => {
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
    spyOn(vocabularyActions, 'deleteVocabulary').and.returnValue({
      type: vocabularyActionTypes.UPDATE_VOCABULARY_LIST,
      list: ['word2', 'word3']
    });

    VocabularySet.mockImplementation(() => {
      return {
        render() {
          return <div />;
        }
      };
    });

    const wrapper = mount(
      <Provider store={store}>
        <VocabularySetContainer />
      </Provider>
    );

    container = wrapper.find(VocabularySetContainer);
    component = wrapper.find('VocabularySet');
    componentProps = component.props();
  });

  it('renders the VocabularySetContainer', () => {
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
