import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CharacterDetail from './CharacterDetail';

const renderCharacterDetail = () => {
	return render(
		<BrowserRouter>
			<CharacterDetail
				name="Rick"
				image="rick.jpg"
				status="Dead"
				species="Human"
				origin="earth"
				episode={[
					'https://rickandmortyapi.com/api/episode/1',
					'https://rickandmortyapi.com/api/episode/2'
				]}
			/>
		</BrowserRouter>
	);
};

describe('Given all props are passed to the Character detaail component', () => {
	it('should render without errors', () => {
		renderCharacterDetail();
	});

	it('should navigate to the home page when the "Go back" button is clicked', () => {
		renderCharacterDetail();
		const goBackButton = screen.getByText('Go back');
		expect(goBackButton).toBeInTheDocument();
		fireEvent.click(goBackButton);
		expect(window.location.pathname).toBe('/');
	});
});

describe('Given the status prop is "Dead"', () => {
	it('should render the 💀 emoji', () => {
		renderCharacterDetail();
		const status = screen.getByTestId('status');
		expect(status).toBeInTheDocument();
		expect(status).toHaveTextContent('💀');
	})
});

describe('Given the species prop is "Human"', () => {
	it('should render the 🌎 emoji', () => {
		renderCharacterDetail();
		const species = screen.getByTestId('species');
		expect(species).toBeInTheDocument();
		expect(species).toHaveTextContent('🌎');
	})
});

describe('Given the character appears in two episodes', () => {
	it('should render 2 episodes', () => {
		renderCharacterDetail();
		const episodes = screen.getByTestId('episodes');
		expect(episodes).toBeInTheDocument();
		expect(episodes).toHaveTextContent('2');
	})
});
