// JavaScript Tricks
// Using Intl for translations

const languages = ["JavaScript", "Python", "C#"];
const language = 'en';

// Joining the languages with a comma and a slash
const joinedLanguages = languages.join(', ');

// Using Intl.ListFormat to format the list of languages
const listFormat = new Intl.ListFormat(language).format(languages);

// Printing the results
console.log(`The languages are: ${joinedLanguages}`);
console.log(`In ${language}, they are written as: ${listFormat}`);
