import {test, expect, request} from '@playwright/test';


test('GET todos los usuarios', async () =>{
    const context = await request.newContext();
    const response = await context.get('https://jsonplaceholder.typicode.com/users');
    
    expect(response.status()).toBe(200);
});

test('GET usuario ¨id¨: 5 ', async () => {
    const context = await request.newContext();
    const response = await context.get('https://jsonplaceholder.typicode.com/users/5');

    expect(response.status()).toBe(200);

    const body = await response.json();
    expect(body.id).toBe(5);
});

test('GET usuario inexistente regresa 404', async () => {
  const context = await request.newContext();
  const response = await context.get('https://jsonplaceholder.typicode.com/users/999');
  
  expect(response.status()).toBe(404);
});

test('POST crear usuario nuevo', async() => {
    const context = await request.newContext();
    const response = await context.post('https://jsonplaceholder.typicode.com/posts',{
        data: {
            title: 'Agregar usuario nuevo',
            body: 'Prueba',
            userID: 1,
            name: 'Marcelo',
            email: 'Name@gmail.com',
            Phone: 8118447447
        }
    });

    expect(response.status()).toBe(201);
});