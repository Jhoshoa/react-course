import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GifGrid />', () => {
    const category = 'One punch';
    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true,
        })
        
        render( <GifGrid category={ category } />);
        // screen.debug();

        expect( screen.getByText('Cargando...'));
        expect( screen.getByText( category ));
    });
    
    test('debe de mostrar items cuando se cargan las imagenes desde useFetchgifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost.com',
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://goku.com',
            }
        ]
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true,
        })
        
        render( <GifGrid category={ category } />);
        // screen.debug();

        expect(screen.getAllByRole('img').length).toBe(2);
    })
    
})
