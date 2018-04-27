import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

jest.mock('./PassageComponent');

import PassageComponent from './PassageComponent';
import PassageContainer from './PassageContainer';
import passageActionTypes from './passageActionTypes';
import * as passageActions from './passageActions';

describe('<PassageContainer />', () => {
  const state = {
    passage: {
      passage: '',
      vocabularyList: []
    }
  };
  const store = configureMockStore()(state);

  let container, component, componentProps;

  beforeEach(() => {
    spyOn(store, 'dispatch');
    spyOn(passageActions, 'updatePassage').and.returnValue({
      type: passageActionTypes.UPDATE_PASSAGE,
      passage: 'sample passage'
    });

    PassageComponent.mockImplementation(() => {
      return {
        render() {
          return <div />;
        }
      };
    });

    const wrapper = mount(
      <Provider store={store}>
        <PassageContainer />
      </Provider>
    );

    container = wrapper.find(PassageContainer);
    component = wrapper.find('PassageComponent');
    componentProps = component.props();
  });

  it('renders the PassageContainer', () => {
    expect(container.length).toBe(1);
    expect(component.length).toBe(1);
  });

  describe('mapStateToProps', () => {
    it('sets the fileUploadPending prop', () => {
      // expect(componentProps).toEqual(state);
    });
  });

  describe('mapDispatchToProps', () => {
    it('calls updatePassage action', () => {
      componentProps.updatePassage('sample passage');
      expect(store.dispatch).toHaveBeenCalledWith({
        type: passageActionTypes.UPDATE_PASSAGE,
        passage: 'sample passage'
      });
    });
  });
});
