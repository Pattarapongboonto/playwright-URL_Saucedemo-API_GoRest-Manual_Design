const { test, expect, request } = require('@playwright/test');

const TOKEN = '24f88d1781fbf3e15d0bf74796039117f088325f66335f4dd71370d5aef30b4e';

test('GoRest API - CRUD flow stable', async () => {

    const api = await request.newContext({
        ignoreHTTPSErrors: true,
        extraHTTPHeaders: {
            Authorization: `Bearer ${TOKEN}`,
            Accept: 'application/json'
        }
    });

    const uniqueEmail = `john.qa.${Date.now()}@example.com`;

    // CREATE 
    const createRes = await api.fetch(
        'https://gorest.co.in/public/v2/users',
        {
            method: 'POST',
            data: {
                name: 'John QA',
                gender: 'male',
                email: uniqueEmail,
                status: 'active'
            }
        }
    );

    const text = await createRes.text();
    console.log('STATUS:', createRes.status());
    console.log('BODY:', text);

    expect(createRes.status()).toBe(201);

    const user = JSON.parse(text);

    const userId = user.id;

    // GET
    const getRes = await api.get(`https://gorest.co.in/public/v2/users/${userId}`);
    expect(getRes.status()).toBe(200);

    // UPDATE
    const updateRes = await api.fetch(
        `https://gorest.co.in/public/v2/users/${userId}`,
        {
            method: 'PUT',
            data: {
                name: 'John QA Updated',
                status: 'inactive'
            }
        }
    );

    expect(updateRes.status()).toBe(200);

    // DELETE
    const deleteRes = await api.delete(
        `https://gorest.co.in/public/v2/users/${userId}`
    );

    expect(deleteRes.status()).toBe(204);
});