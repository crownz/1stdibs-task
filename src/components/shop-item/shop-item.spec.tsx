import * as React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import ShopItem from './shop-item';

describe('Component: Shop Item', function () {

  it('should render Quizz component', function () {
    const driver = createDriver();
    expect(driver.element('quizz-container').exists()).to.be.true;
  });
});

const createDriver = (newProps = {}) => {

  const wrapper = mount(
    <ShopItem { ...getProps(newProps) } />
  );

  return {
    element: hook => {
      const el = wrapper.find(`[data-hook="${hook}"]`);
      return {
        exists: () => el.length > 0,
        text: () => el.text(),
        hasClass: className => el.hasClass(className),
        children: () => el.children(),
        click: () => el.simulate('click'),
      }
    },
    selection: () => {
      const selections = wrapper.find(`[data-hook="selection-container"]`).children();
      return {
        at: index => {
          const selection = selections.at(index);
          return {
            isActive: () => selection.hasClass('active'),
            isCompleted: () => selection.hasClass('answered'),
            select: () => selection.simulate('click')
          }
        }
      }
    }
  };
};

// const getProps = (newProps) => {
//   return Object.assign({}, {
//     item: getItem(),
//     onBack: () => ({}),
//     onFavoriteToggle: () => ({}),
//     isFavorite: false
//   }, newProps);
// };

const getProps = (newProps) => {
  return {
    item: getItem(),
    onBack: () => ({}),
    onFavoriteToggle: () => ({}),
    isFavorite: false
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
