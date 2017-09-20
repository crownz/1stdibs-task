import 'jsdom-global/register';
import * as globalJsdom from 'jsdom-global';
import * as React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import { getItems } from '../../services/fake-data';
import { Browse } from './browse';

describe('Component: Browse', function () {

  let cleanup;

  beforeEach(() => cleanup = globalJsdom.default);
  afterEach(() => {
    cleanup();
  });

  it('should render Browse component', function () {
    const driver = createDriver();
    expect(driver.element('browse-container').exists()).to.be.true;
  });

  it('should render three items', function () {
    const driver = createDriver();
    expect(driver.element('items').children().length).to.equal(3);
  });

  it('should render no liked items', function () {
    const driver = createDriver();
    expect(driver.elements('liked').length).to.equal(0);
  });

  it('should render 2 liked items', function () {
    const driver = createDriver({ favorite: ['1', '2'] });
    expect(driver.elements('liked').length).to.equal(2);
  });

  it('should render load more when there are more items than displayed', function () {
    const driver = createDriver();
    expect(driver.elements('load-more').exists()).to.be.true;
  });

  it('should not render load more when all items are displayed', function () {
    const driver = createDriver({ totalItems: 3 });
    expect(driver.elements('load-more').exists()).to.be.false;
  });
});

const createDriver = (newProps = {}) => {

  const wrapper = mount(
    <Browse { ...getProps(newProps) } />
  );

  return {
    element: hook => {
      const el = wrapper.find(`[data-hook="${hook}"]`);
      return {
        exists: () => el.length > 0,
        children: () => el.children()
      }
    },
    elements: hook => wrapper.find(`[data-hook="${hook}"]`)
  };
};

const getProps = (newProps) => {
  return Object.assign({}, {
    items: getItems(),
    favorite: [],
    getItem: () => ({}),
    toggleFavoriteItem: () => ({}),
    history: null,
    totalItems: 4
  }, newProps);
};