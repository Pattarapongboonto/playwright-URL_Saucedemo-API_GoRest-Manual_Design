const { request } = require('@playwright/test');

async function getApiContext() {
    return await request.newContext({
        baseURL: 'https://gorest.co.in/public/v2', // 🔥 hard fix ชั่วคราว
        extraHTTPHeaders: {
            Authorization: `Bearer 24f88d1781fbf3e15d0bf74796039117f088325f66335f4dd71370d5aef30b4e`,
            'Content-Type': 'application/json'
        }
    });
}

module.exports = { getApiContext };