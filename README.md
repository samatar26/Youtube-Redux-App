# Codestorms-Youtube-App
![travis](https://travis-ci.org/Samatar26/codestorms-youtube-app.svg?branch=staging)

### Hosting your React App on a domain
Because the React app doesn't have a backend, you can't host your app on something like Heroku.
Surge provides the availability of hosting your app, similar to GitHub pages. You will first have to build a production build of your app and if you're using React Router, you will need to rename your index.html file to 200 html.


```js
"build": "react-scripts build",
"rename": "mv build/index.html build/200.html",
"surge": "surge ./build --domain codestorms-youtube-app.surge.sh",
"deploy": "run-s build rename surge",
```
### Test Coverage
In order to find out your test coverage you can run the script
```js
npm run test -- --coverage
yarn test -- --coverage
```
