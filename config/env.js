require('dotenv').config();

module.exports = {
    // UI
    baseUrl: process.env.BASE_URL,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,

    // API
    apiBaseUrl: process.env.API_BASE_URL,
    token: process.env.TOKEN
};
