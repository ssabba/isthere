// List of all supported languages
const suppLangList = ["en", "ko", "ja"];

// Current user language
const userLang = navigator.languages;
let language;

userLang.every((lang) => {
  if (suppLangList.indexOf(lang) !== -1) {
    language = lang;
    return false;
  }
  return true;
});

if (language !== undefined) {
  let domain = window.location.href;
  let url = `${domain}${language}/home/`;
  window.location.replace(url);
}

console.log(window.location.href);
