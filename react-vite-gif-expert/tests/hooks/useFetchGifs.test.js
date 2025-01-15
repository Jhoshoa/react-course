import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => {
    test('deber de regresar el estado inicial', () => {
        // This returns 3 typers of response result, rerender, unmount
        //renderHook( () => useFetchGifs('One punch'));      
        const { result } = renderHook( () => useFetchGifs('One punch'));
        //console.log(result)
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    });

    test('debe de retornar un arreglo de imagenes y isLoading en false', async() => {
        const { result } = renderHook( () => useFetchGifs('One punch'));

        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        );
        //console.log(result)
        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    })
    
})
