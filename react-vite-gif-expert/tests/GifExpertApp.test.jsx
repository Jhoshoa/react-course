import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Prueba al componente <GifExpertApp />', () => {

    test('debe mostrar estado inicial del componente', () => {
        
        render( <GifExpertApp />);
        //screen.debug();

        expect(screen.getByText('GifExpertApp'));
    	expect(screen.getByText('One Punch'));
    });

    test('debe de mostrar un nuevo ', () => {
    	render(<GifExpertApp />);

        const input = screen.getByPlaceholderText('Buscar gifs');
   	 
    	// Simulate adding a new category
    	fireEvent.change(input, { target: { value: 'Naruto' } });
		const form = screen.getByRole('form');

        fireEvent.submit( form );
   	 
        //screen.debug();
    	// Check if the new category is rendered
    	expect(screen.getByText('Naruto'));
	});

	test('no debe permitir categorias duplicadas', () => {
    	render(<GifExpertApp />);
   	 
        const input = screen.getByPlaceholderText('Buscar gifs');
   	 
    	fireEvent.change(input, { target: { value: 'One Punch' } });
		const form = screen.getByRole('form');

        fireEvent.submit( form );
   	 
        //screen.debug();
    	// Check if the new category is rendered
    	expect(screen.getAllByText('One Punch')).toHaveLength(1);
	});
      
})
