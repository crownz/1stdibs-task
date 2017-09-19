import 'jsdom-global/register';
import * as globalJsdom from 'jsdom-global';
import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { getItem } from '../../../services/fake-data';
import Description from './description';

describe('Component: Details', function () {

  let cleanup;

  beforeEach(() => cleanup = globalJsdom.default);
  afterEach(() => {
    cleanup();
  });

  it('should render Description component', function () {
    const driver = createDriver();
    expect(driver.element('description-container').exists()).to.be.true;
  });

  it('should render description', function () {
    const driver = createDriver();
    expect(driver.element('description').exists()).to.be.true;
    expect(driver.element('description').text()).to.equal('Jules Leleu rare pair of rosewood armchairs, circa 1929, Perfectly restored and upholstered');
  });

  it('should render author', function () {
    const driver = createDriver();
    expect(driver.element('author').exists()).to.be.true;
    expect(driver.element('author').text()).to.include('Jules Leleu');
  });
});

const createDriver = () => {

  const wrapper = shallow(
    <Description item={ getItem()} />
  );

  return {
    element: hook => {
      const el = wrapper.find(`[data-hook="${hook}"]`);
      return {
        exists: () => el.length > 0,
        text: () => el.text()
      }
    }
  };
};