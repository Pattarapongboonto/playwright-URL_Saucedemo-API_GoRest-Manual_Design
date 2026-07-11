const { test, expect } = require('@playwright/test');

const BASE_URL = 'https://gorest.co.in/public/v2/users';

const TOKEN = '24f88d1781fbf3e15d0bf74796039117f088325f66335f4dd71370d5aef30b4e';

// Invalid Email
test('Invalid Email', async ({ request }) => {

    const response = await request.post(BASE_URL, {

        headers: {
            Authorization: `Bearer ${TOKEN}`
        },

        data: {
            name: "John",
            gender: "male",
            email: "abc",
            status: "active"
        }

    });

    expect(response.status()).toBe(422);

    const body = await response.json();

    console.log(body);

});

// Missing Fields
test('Missing Fields', async ({ request }) => {

    const response = await request.post(BASE_URL, {

        headers: {
            Authorization: `Bearer ${TOKEN}`
        },

        data: {}

    });

    expect(response.status()).toBe(422);

    const body = await response.json();

    console.log(body);

});

// Unauthorized
test('Unauthorized', async ({ request }) => {

    const response = await request.post(BASE_URL, {

        data: {

            name: "John",

            gender: "male",

            email: `john${Date.now()}@gmail.com`,

            status: "active"

        }

    });

    expect(response.status()).toBe(401);

    const body = await response.json();

    console.log(body);

});