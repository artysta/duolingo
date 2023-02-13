const XMLHttpRequest = require('xhr2');
const { languages } = require('./constants');

class Duolingo {
    constructor(user) {
        this.user = user;
        this.url = `https://www.duolingo.com/2017-06-30/users?username=${user}`;
        this.data;
    }

    /**
     * This method is responsible for assigning Duolingo data to the data field.
     */
    async init() {
        const response = await this.fetch(this.url);
        this.data = JSON.parse(response);

        if (this.data.users.length < 1) {
            throw new Error(`Please ensure that "${this.user}" Duolingo user exists.`);
        }
    }

    /**
     * This method just fetches the data using xhr2.
     * @param {string} url The url that should be fetched.
     */
    async fetch(url) {
        return await new Promise(resolve => {
            const request = new XMLHttpRequest();
            request.open('GET', url, true);
            request.onload = function(e) {
                resolve(request.response);
            };
            request.send();
        })
    }

    /**
     * @param {string} field
     * @returns The value of the specific field.
     */
    getField(field) {
        if (this.data == undefined) {
            throw new Error('Data is not available. Please ensure that you have invoked init method which is responsible for preparing the data.');
        }

        const value = this.data.users[0][field];

        if (value == undefined) {
            throw new Error(`Could not find the "${field}" field.`);
        }

        return value;
    }

    /**
     * @param {string} shortName The short name of the language.
     * @param {string} field The field realted to the language.
     * @returns The detail field related to the given language.
     */
    getLanguageDetail(shortName, field) {
        return languages[shortName] == undefined ? shortName : languages[shortName][field];
    }

    /**
     * @returns The total amout of crowns from all of the courses the user is assigned to.
     */
    getTotalCrowns() {
        return this.getField('courses').reduce((s, c) => s + c.crowns, 0);
    }

    /**
     * @param {string} learningLanguage The learning language (just a short name of the language).
     * @param {string} field The field related to the specific course. 
     * @returns The value of the specific field.
     */
    getCourseField(learningLanguage, field) {
        const course = this.getField('courses').filter(c => c.learningLanguage === learningLanguage)[0];

        if (course == undefined) {
            throw new Error(`Could not find a "${learningLanguage}" course for the "${this.user}" user.`);
        }

        const value = course[field];

        if (value == undefined) {
            throw new Error(`Could not find a "${field}" field for the "${learningLanguage}" course.`);
        }

        return value;
    }
}

module.exports = Duolingo;