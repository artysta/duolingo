# duolingo

This npm package is quite simple and rather not perfect. My main goal in creating this package was to learn how to create my own npm packages and how to add them to the official npm repository. Anyway, I believe that it might be useful for someone. 🙃

## 1. Installation.

You can add this package to your project by running the command below:

    npm install duolingo

## 2. Usage example.

Below you can find some usage examples.

```javascript
const Duolingo = require('duolingo');

(async() => {
    const duo = new Duolingo('adrian_kurek');
    await duo.init();

    const streak = duo.getField('streak');
    console.log(streak); // Output: 272

    const totalXp = duo.getField('totalXp');
    console.log(totalXp); // Output: 114189

    const learningLanguage = duo.getField('learningLanguage');
    console.log(learningLanguage); // Output: de

    const learninLanguageFullName = duo.getLanguageDetail(learningLanguage, 'fullName');
    console.log(learninLanguageFullName); // Output: German

    const learninLanguageEmojiFlag = duo.getLanguageDetail(learningLanguage, 'emojiFlag');
    console.log(learninLanguageEmojiFlag); // Output: 🇩🇪
})();
```

## 3. Contribution.

At the moment `getLanguageDetail` method supports only 4 languages (Polish, English, German and Spanish).

New languages can be simply added to the `languages` constant array in `./src/constants.js` file.

```
{
    shortName: 'jp', // This one is the 'learningLanguage' field from the response JSON, but I named it 'shortName'.
    fullName: 'Japanese', // Full name of the language.
    emojiFlag: '🇯🇵' // Emoji flag of the language.
}
```

