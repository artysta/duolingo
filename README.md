# duolingo

## 1. Description

This npm package is quite simple and rather not perfect. My main goal in creating this package was to learn how to create my own npm packages and how to add them to the official npm repository. Anyway, I believe that it might be useful for someone. 🙃

## 2. Installation.

You can add this package to your project by running the command below:

    npm install duolingo

## 3. Usage example.

You can use `getField` method to get the value of the specific field from the response. Below you can find the available fields **(as of 10.02.2023)**:

```javascript
const mainFields = [
    'joinedClassroomIds',
    'streak',
    'motivation',
    'acquisitionSurveyReason',
    'shouldForceConnectPhoneNumber',
    'picture',
    'learningLanguage',
    'hasFacebookId',
    'shakeToReportEnabled',
    'liveOpsFeatures',
    'canUseModerationTools',
    'id',
    'betaStatus',
    'hasGoogleId',
    'privacySettings',
    'fromLanguage',
    'hasRecentActivity15',
    '_achievements',
    'observedClassroomIds',
    'username',
    'bio',
    'profileCountry',
    'globalAmbassadorStatus',
    'currentCourseId',
    'hasPhoneNumber',
    'creationDate',
    'achievements',
    'hasPlus',
    'name',
    'roles',
    'classroomLeaderboardsEnabled',
    'emailVerified',
    'courses',
    'totalXp'
];
```

You can use `getCourseField` method to get the value of the specific field for a specific course. Below you can find the available fields **(as of 12.02.2023)**:

```javascript
const coursesFields = [
    'preload',
    'placementTestAvailable',
    'authorId',
    'title',
    'learningLanguage',
    'xp',
    'healthEnabled',
    'fromLanguage',
    'crowns',
    'id'
]
```

You can use `getLanguageDetail` method to get some details related to the language that you are currently learning. For example if your learning language is english, method `getField('learningLanguage')` will return `en` value. Then you can pass this value to `getLanguageDetail` method and get the full name of the language or its Emoji flag. 

Below you can find some usage examples.

```javascript
const Duolingo = require('duolingo');

(async() => {
    // You have to pass your Duolingo user name to the constructor and use async method init() to prepare the data.
    const duo = new Duolingo('adrian_kurek');
    await duo.init();

    const streak = duo.getField('streak');
    console.log(streak); // Output: 272

    const totalXp = duo.getField('totalXp');
    console.log(totalXp); // Output: 114189

    const learningLanguage = duo.getField('learningLanguage');
    console.log(learningLanguage); // Output: de

    const learningLanguageFullName = duo.getLanguageDetail(learningLanguage, 'fullName');
    console.log(learningLanguageFullName); // Output: German

    const learningLanguageEmojiFlag = duo.getLanguageDetail(learningLanguage, 'emojiFlag');
    console.log(learningLanguageEmojiFlag); // Output: 🇩🇪

    // Get total crowns from all of the courses.
    const totalCrowns = duo.getTotalCrowns();
    console.log(totalCrowns); // Output: 696

    const learningLanguageXp = duo.getCourseField(learningLanguage, 'xp');
    console.log(learningLanguageXp); // Output: 55185

    const learningLanguageCrowns = duo.getCourseField(learningLanguage, 'crowns');
    console.log(learningLanguageCrowns); // Output: 180

    const spanishLanguageXp = duo.getCourseField('es', 'xp');
    console.log(spanishLanguageXp); // Output: 8344
})();
```

## 4. Contribution.

At the moment `getLanguageDetail` method supports only 8 languages.

New languages can be simply added to the `languages` constant array in `./src/constants.js` file.

```javascript
const languages = {
    'pl': {
        fullName: 'Polish',
        emojiFlag: '🇵🇱'
    },
    'en': {
        fullName: 'English',
        emojiFlag: '🇬🇧'
    },
    'de': {
        fullName: 'German',
        emojiFlag: '🇩🇪'
    },
    'es': {
        fullName: 'Spanish',
        emojiFlag: '🇪🇸'
    },
    'fr': {
        fullName: 'French',
        emojiFlag: '🇫🇷'
    },
    'it': {
        fullName: 'Italian',
        emojiFlag: '🇮🇹'
    },
    'fi': {
        fullName: 'Finnish',
        emojiFlag: '🇫🇮'
    },
    'sv': {
        fullName: 'Swedish',
        emojiFlag: '🇸🇪'
    }
};
```


## 5. Duolingo Statistics Card

I used this npm package to create Duolingo Statistics Card that displays some statistics for a specific user. The data is always "fresh" as the package is using the API to retrieve it, but to be honest I do not know how many times a single IP address can hit this API, because it is not really "official". Therefore I cannot guarantee that the application which allows to render those cards will be working without any problems.

Anyway, the cards can be displayed on a webpage, in the GitHub special repository or any other markdown files (e.g. `README.md`). The example below is showing how the URL should look like:

    https://artysta-cloud.vercel.app/api/duolingo/statistics?user=your_user_name&fields=field_1,field_2,field_3,field_4
    
The `user` query parameter is required. At the moment only 4 fields are supported: `streak`, `totalXp`, `totalCrowns`, `learningLanguage`. Fields in the URL query should be separated by comma. You have to provide at least 1 `field` in the query.

For example, below you can find a valid URL for my Duolingo user:

    https://artysta-cloud.vercel.app/api/duolingo/statistics?user=adrian_kurek&fields=streak,totalXp,totalCrowns,learningLanguage

If it comes to a GitHub special repository or any other markdown file you can just use the markdown example below:

    [![artysta's GitHub Statistics](https://artysta-cloud.vercel.app/api/duolingo/statistics?user=your_user_name&fields=field_1,field_2,field_3,field_4)](https://github.com/artysta/artysta-cloud)
    
Here are some examples how the cards can look like (I have also included non valid URLs, so some of the cards are displaying error messages):

All available fields:

[![artysta's GitHub Statistics](https://artysta-cloud.vercel.app/api/duolingo/statistics?user=adrian_kurek&fields=streak,totalXp,totalCrowns,learningLanguage)](https://github.com/artysta/artysta-cloud)

All available fields (but different fields order - the order in which the fields are displayed depends on the order in which they are given in the query):

[![artysta's GitHub Statistics](https://artysta-cloud.vercel.app/api/duolingo/statistics?user=adrian_kurek&fields=totalCrowns,learningLanguage,totalXp,streak)](https://github.com/artysta/artysta-cloud)

2 fields:

[![artysta's GitHub Statistics](https://artysta-cloud.vercel.app/api/duolingo/statistics?user=adrian_kurek&fields=totalCrowns,streak)](https://github.com/artysta/artysta-cloud)

Only 1 field:

[![artysta's GitHub Statistics](https://artysta-cloud.vercel.app/api/duolingo/statistics?user=adrian_kurek&fields=streak)](https://github.com/artysta/artysta-cloud)

The `user` parameter missing:

[![artysta's GitHub Statistics](https://artysta-cloud.vercel.app/api/duolingo/statistics?fields=totalCrowns)](https://github.com/artysta/artysta-cloud)

The `fields` parameter missing:

[![artysta's GitHub Statistics](https://artysta-cloud.vercel.app/api/duolingo/statistics?user=adrian_kurek)](https://github.com/artysta/artysta-cloud)

Not supported field (or just a typo in its name):

[![artysta's GitHub Statistics](https://artysta-cloud.vercel.app/api/duolingo/statistics?user=adrian_kurek&fields=fromLanguage)](https://github.com/artysta/artysta-cloud)

---

If I find some free time (unfortunately, a day is only 24 hours long 😢) I will try to upgrade the cards and add possibility to change their style, make the title (made with ❤️...) optional using query parameters etc.
