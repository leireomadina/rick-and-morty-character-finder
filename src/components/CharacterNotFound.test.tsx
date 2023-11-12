import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CharacterNotFound from './CharacterNotFound';

const renderCharacterNotFound = () => {
	render(<CharacterNotFound />);
};

const getNotFoundMessage = () => {
 	return screen.getByText("There isn't any character that matches your search!");
}

describe('Character not found component', () => {

	it('should render the gif', () => {
		renderCharacterNotFound();
		const gif = screen.getByRole('img', { name: 'Surprised Morty gif' });
		expect(gif).toBeInTheDocument();
	});

	it('should render the "not found" message', () => {
		renderCharacterNotFound();
		const message = getNotFoundMessage();
		expect(message).toBeInTheDocument();
	});

	it('should have the "aria-live" attribute set to "assertive" on the message', () => {
		renderCharacterNotFound();
		const message = getNotFoundMessage();
		expect(message).toHaveAttribute('aria-live');
    expect(message.getAttribute('aria-live')).toBe('assertive');
	});

});