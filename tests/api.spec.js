import { test, expect, request } from '@playwright/test';

test('GET usuarios regresa 200', async () => {
  const context = await request.newContext();
  const response = await context.get('https://jsonplaceholder.typicode.com/users');
  
  expect(response.status()).toBe(200);
});
test('GET usuario existente regresa 200', async () => {
  const context = await request.newContext();
  const response = await context.get('https://jsonplaceholder.typicode.com/users/1');
  
  expect(response.status()).toBe(200);
});

test('GET usuario inexistente regresa 404', async () => {
  const context = await request.newContext();
  const response = await context.get('https://jsonplaceholder.typicode.com/users/999');
  
  expect(response.status()).toBe(404);
});

test('POST crear usuario regresa 201', async () => {
  const context = await request.newContext();
  const response = await context.post('https://jsonplaceholder.typicode.com/posts', {
    data: {
      title: 'Mi primer post',
      body: 'Prueba de API con Playwright',
      userId: 1
    }
  });
  
  expect(response.status()).toBe(201);
});