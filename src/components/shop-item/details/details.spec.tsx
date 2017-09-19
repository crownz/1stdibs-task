import 'jsdom-global/register';
import * as globalJsdom from 'jsdom-global';
import * as React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Details from './details.tsx';

describe('Component: Details', function () {

  let cleanup;

  beforeEach(() => cleanup = globalJsdom.default);
  afterEach(() => {
    cleanup();
  });

  it('should render Details component', function () {
    const driver = createDriver();
    expect(driver.element('details-container').exists()).to.be.true;
  });

  it('should render item title', function () {
    const driver = createDriver();
    expect(driver.element('title').exists()).to.be.true;
    expect(driver.element('title').text()).to.equal('Jules Leleu Rare Pair of Rosewood Armchairs, circa 1929');
  });

  it('should render item price', function () {
    const driver = createDriver();
    expect(driver.element('price').exists()).to.be.true;
    expect(driver.element('price').text()).to.equal('$25,000');
  });

  it('should render item measurements', function () {
    const driver = createDriver();
    expect(driver.element('measurements').exists()).to.be.true;
    expect(driver.element('measurements').text()).to.equal('H 28.94 in. W 29.53 in. D 27.56 in.');
  });
});

const createDriver = () => {

  const wrapper = shallow(
    <Details item={ getItem()} />
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
