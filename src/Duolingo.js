class Duolingo {
    constructor(userName) {
        this.baseUrl = `https://www.duolingo.com/2017-06-30/users`;
        this.userName = userName;
        this.data;
        this.response;
        this.baseUrl = `${this.baseUrl}?username=${userName}`;
    }

    async init() {
        this.response = await fetch(this.baseUrl);
        this.data = await this.response.json();
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

export { Duolingo };