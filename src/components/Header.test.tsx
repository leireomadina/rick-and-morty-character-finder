import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header';

const renderHeader = () => {
	render(
		<MemoryRouter>
			<Header />
		</MemoryRouter>
	);
};

describe('Header component', () => {

	it('should render the logo', () => {
		renderHeader();
  	const logoImage = screen.getByRole('img', { name: 'Rick and Morty logo' });
  	expect(logoImage).toBeInTheDocument();
	});

	it('should have a link that goes to the main page', () => {
		renderHeader();
  	const logoLink = screen.getByRole('link', { name: 'Rick and Morty logo' });
  	expect(logoLink).toBeInTheDocument();
		expect(logoLink).toHaveAttribute('href', '/');
	});

});