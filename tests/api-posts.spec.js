import {test, expect, request} from '@playwright/test';

test('GET todos los post', async () =>{
    const context = await request.newContext();
    const response = await context.get('https://jsonplaceholder.typicode.com/posts');

    expect(response.status()).toBe(200);
});

test('GET post especifico', async () => {
    const context = await request.newContext();
    const response = await context.get('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);
});

test('GET post inexistente', async () => {
    const context = await request.newContext();
    const response = await context.get('https://jsonplaceholder.typicode.com/posts/999');

    expect(response.status()).toBe(404);
});

test('Crear post con Post', async () => {
    const context = await request.newContext();
    const response = await context.post('https://jsonplaceholder.typicode.com/posts',{
        data: {
            title : 'Analizar usuario existente',
            body: 'Prueba',
            userID: 1,
            name: 'Marcelo',
            email: 'Mar@gmail.com',
            Phone: 8811223366,
        }
    });

    expect(response.status()).toBe(201);
});

test('Actualizar post con Put', async () => {
    const context = await request.newContext();
    const response = await context.put('https://jsonplaceholder.typicode.com/posts/1',{
        data: {
            title : 'Actualizar usuario existente',
            body: 'Prueba 2',
            userID: 1,
            name: 'Misael',
            email: 'Marce@gmail.com',
            Phone: 8811773366,
        }
    });

    expect(response.status()).toBe(200);
});

test('Eliminar post', async () => {
    const context = await request.newContext();
    const response = await context.delete('https://jsonplaceholder.typicode.com/posts/1');

    expect(response.status()).toBe(200);
});
