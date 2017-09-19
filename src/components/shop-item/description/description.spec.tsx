import 'jsdom-global/register';
import * as globalJsdom from 'jsdom-global';
import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Description from './description.tsx';

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

function getItem() {
  return {
    attributes: "Vintage 1930s French Art Deco Armchairs",
    creators: "Jules Leleu",
    description: "Jules Leleu rare pair of rosewood armchairs, circa 1929, Perfectly restored and upholstered",
    id: "f_3907612",
    image: "https://a.1stdibscdn.com/archivesE/upload/1121189/f_3907612/3907612_s.jpg",
    measurements: {
      size: null,
      diameter: null,
      width: "29.53 in.",
      height: "28.94 in.",
      length: null,
      depth: "27.56 in.",
      display: "H 28.94 in. W 29.53 in. D 27.56 in."
    },
    price: {
      amounts: {
        GBP: "£17,053",
        USD: "$25,000",
        EUR: "€22.407"
      },
      initial_amounts: null
    },
    seller: {
      company: "Galerie Plaisance",
      logo: "/dealer_images/9701/gp_search.png"
    },
    title: "Jules Leleu Rare Pair of Rosewood Armchairs, circa 1929"
  };
}
