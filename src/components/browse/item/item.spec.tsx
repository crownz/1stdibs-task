import 'jsdom-global/register';
import * as globalJsdom from 'jsdom-global';
import * as React from 'react';
import * as sinon from 'sinon';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Item from './item';

describe('Component: Item', function () {

  let cleanup;

  beforeEach(() => cleanup = globalJsdom.default);
  afterEach(() => {
    cleanup();
  });

  it('should render component', function () {
    const driver = createDriver();
    expect(driver.element('item-container').exists()).to.be.true;
  });

  it('should render price', function () {
    const driver = createDriver();
    expect(driver.element('price').text()).to.equal('Price Upon Request');
  });

  it('should render image', function () {
    const driver = createDriver();
    expect(driver.element('image').exists()).to.be.true;
    expect(driver.element('image').prop('src')).to.equal('www.google.com')
  });

  it('should render as not liked', function () {
    const driver = createDriver();
    expect(driver.element('liked').exists()).to.be.false;
    expect(driver.element('not-liked').exists()).to.be.true;
  });

  it('should render as liked', function () {
    const driver = createDriver({ isFavorite: true });
    expect(driver.element('liked').exists()).to.be.true;
    expect(driver.element('not-liked').exists()).to.be.false;
  });

  it('should call onFavoriteToggle', function () {
    const onFavoriteToggle = sinon.spy();
    const driver = createDriver({ onFavoriteToggle });
    driver.element('not-liked').click();
    expect(onFavoriteToggle.calledOnce).to.be.true;
  });
});

const createDriver = (newProps = {}) => {

  const wrapper = mount(
    <Item { ...getProps(newProps) } />
  );

  return {
    element: hook => {
      const el = wrapper.find(`[data-hook="${hook}"]`);
      return {
        exists: () => el.length > 0,
        text: () => el.text(),
        prop: name => el.prop(name),
        click: () => el.simulate('click')
      }
    }
  };
};

const getProps = (newProps) => {
  return Object.assign({}, {
    price: null,
    imageUrl: 'www.google.com',
    isFavorite: false,
    onFavoriteToggle: () => ({})
  }, newProps);
};