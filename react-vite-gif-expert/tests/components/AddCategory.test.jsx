import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory />', () => {
    test('debe de cambiar el valor de la caja de texto', () => {
        render( <AddCategory onNewCategory={ () => {} }/>);
        //screen.debug();
        const input = screen.getByRole('textbox');

        // fireEvent to trigger an event, in this case for the OnChange in the input
        fireEvent.input( input, { target: { value: 'Saitama'}});
        
        //screen.debug()
        expect( input.value ).toBe('Saitama');
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => {
        const inputValue = 'Saitama';

        // here we are just passing an anonymous function, but we should pass a onNewCategory funciton, so we mocked that
        // render( <AddCategory onNewCategory={ () => {} } />);

        // TODO: MOCK a function
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue }});
        fireEvent.submit( form );

        //screen.debug();
        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );
    });

    // I did these, but much easear would be just removing the seting the input value
    // because if we do not do that, it will have an '' empty value
    test('no debe de llamar el onNewCategory si el input esta vacio', () => {
        const inputValue = '';

        // TODO: MOCK a function
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue }});
        fireEvent.submit( form );
      
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
    });

    // Same but better
    test('no debe de llamar el onNewCategory si el input esta vacio => 2', () => {
        const onNewCategory = jest.fn();
        render( <AddCategory onNewCategory={ onNewCategory } />);

        const form = screen.getByRole('form');

        fireEvent.submit( form );
      
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
    });
});
