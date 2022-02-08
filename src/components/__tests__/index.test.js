// about tests

//We need react to enable the components to function properly so we can test them.
import React from 'react';
// "render" the component.
import { render, cleanup } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
//we'll import the component we will be testing,
import About from '../About';
import Navigation from '../Navigation';
//This will ensure that after each test, we won't have any leftover memory data that could give us false results.
afterEach(cleanup)

describe('About component', () => {
    // renders About test
    //first test
    it('renders', () => {
        render(<About />);
    });

    // second test
    it('matches snapshot DOM node structure', () => {
        // render About
        const  { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})




const categories = [
    { name: 'portraits', description: 'Portraits of people in my life' }
  ]
  const mockCurrentCategory = jest.fn();
  const mockSetCurrentCategory = jest.fn();
  const mockContactSelected = jest.fn();
  const mockSetContactSelected = jest.fn();

afterEach(cleanup);

describe('Navigation component', () => {
    // baseline test
    it('renders', () => {
      render(<Navigation
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
      />);
    });

    // snapshot test
    it('matches snapshot', () => {
        const { asFragment } = render(<Navigation />);
      
        expect(asFragment()).toMatchSnapshot();
      });
})

// emoji test
describe('emoji is visible', () => {
    it('inserts emoji into the h2', () => {
        // arrange
        const {getByLabelText} = render(<Navigation
            categories={categories}
            mockSetCurrentCategory={mockCurrentCategory}
            currentCategory={mockCurrentCategory} 
            contactSelected={mockContactSelected}
            setContactSelected={mockSetContactSelected}
            />);
            
        //assert
        //Here, we have used a custom matcher to compare the expected value to the one received by our query.
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    });
})

// links are visible
describe('links are visible', () => {
    it('inserts text into the links', () => {
      const { getByTestId } = render(<Navigation
        categories={categories}
        mockSetCurrentCategory={mockCurrentCategory}
        currentCategory={mockCurrentCategory} 
        contactSelected={mockContactSelected}
        setContactSelected={mockSetContactSelected}
        />);
      expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
      expect(getByTestId('about')).toHaveTextContent('About me');
    });
  })

