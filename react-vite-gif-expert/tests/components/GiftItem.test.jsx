import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";

describe('Probando GiftItem', () => {
    const title = 'Dragon ball';
    const url = 'https://url.com/sam.jpg'
    test('debe hacer match con el snapshot', () => {
        const { container } = render(<GifItem url={url} title={title} />)
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar la imagen con el URL y ALT indicado', () => {
        render(<GifItem url={url} title={title} />);
        //screen.debug();
        //console.log(screen.getByRole('img'))
        expect( screen.getByRole('img').src).toBe( url );
        expect( screen.getByRole('img').alt).toBe( title );

        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    })

    test('debe mostrar el titulo en el componente', () => {
        render(<GifItem url={url} title={title} />);
        screen.debug();
        expect( screen.getByText( title )).toBeTruthy();
    })
});