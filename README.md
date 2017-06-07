# Youtube Redux App
![travis](https://travis-ci.org/Samatar26/codestorms-youtube-app.svg?branch=staging)

An app using the youtube Api which allows you to view the most watched videos of the past and also search through Youtube. https://www.codestorms-youtube-app.surge.sh

### Tech Stack:
- UI: __React__
- State: **Redux**
- MiddleWare: **Redux-Promise**
- Styling: **Styled-Components**
- Testing: **Jest**


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
