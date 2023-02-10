const XMLHttpRequest = require('xhr2');
const { languages } = require('./constants');

class Duolingo {
    constructor(userName) {
        this.baseUrl = `https://www.duolingo.com/2017-06-30/users`;
        this.userName = userName;
        this.data;
        this.response;
        this.baseUrl = `${this.baseUrl}?username=${userName}`;
    }

    async init() {
        const response = await this.fetch(this.baseUrl);
        this.data = JSON.parse(response);
    }

    async fetch(url) {
        return await new Promise(resolve => {
            const request = new XMLHttpRequest();
            request.open("GET", url, true);
            request.onload = function(e) {
                resolve(request.response);
            };
            request.send();
        })
    }

    getResponseStatus() {
        if (this.data == undefined) {
            throw new Error('Data is not available. Please ensure that you have used init method that is responsible for preparing data!');
        }

        return this.response.status;
    }

    getField(field) {
        if (this.data == undefined) {
            throw new Error('Data is not available. Please ensure that you have used init method that is responsible for preparing data!');
        }

        if (this.data.users.length < 1) {
            throw new Error(`Please ensure that "${this.userName}" Duolingo user exists!`);
        }

        return this.data.users[0][field];
    }

    getLanguageDetail(shortName, field) {
        const result = languages.filter(l => l.shortName === shortName)[0];
        return result == undefined ? shortName : result[field];
    }
}

module.exports = Duolingo;