import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {

	test('renders content', () => {
		render(<Header />);
  	const logoImage = screen.getByRole('img');
  	expect(logoImage).toBeInTheDocument();
	});

});