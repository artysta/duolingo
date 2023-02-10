# duolingo

## 1. Description

This npm package is quite simple and rather not perfect. My main goal in creating this package was to learn how to create my own npm packages and how to add them to the official npm repository. Anyway, I believe that it might be useful for someone. 🙃

## 2. Installation.

You can add this package to your project by running the command below:

    npm install duolingo

## 3. Usage example.

You can use `getField` method to get the value of the specific field from the response. Below you can find the available fields (as of 10.02.2023):

```javascript
const fields = [
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
})();
```

## 4. Contribution.

At the moment `getLanguageDetail` method supports only 4 languages (Polish, English, German and Spanish).

New languages can be simply added to the `languages` constant array in `./src/constants.js` file.

```
{
    shortName: 'jp', // This one is the 'learningLanguage' field from the response JSON, but I named it 'shortName'.
    fullName: 'Japanese', // Full name of the language.
    emojiFlag: '🇯🇵' // Emoji flag of the language.
}
```

