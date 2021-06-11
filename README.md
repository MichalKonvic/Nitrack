# Nitrack #

Another ui library.
Created by absolute beginner ([me🖐](https://github.com/MichalKonvic)).

## Installation ##

---

* Copy `Nitrack.js` into your project folder
* Add `import 'Nitrack.js'` line
* Add `let Nitrack = new nitrack();` line
* Read [docs](##Docs).

## Docs ##

---

### nitrackView ###

Example of View:
```javascript
import {nitrackView} from "./nitrack.js";
let demoView = new nitrackView();
/* Into this could be passed any valid HTML including script tag */
demoView.HTML = `
    <h1 id="Title">Hello world</h1>
    <p id="Description">This text is rendered using NitrackView </p>
`;

/* Styles for Title */
demoView.newStyle("Title",{
    "font-size":"100px",
    "color":"red"
});

/* Styles for Description */
demoView.newStyle("Description",{
    "font-size":"60px",
    "color":"green"
});
/* exports view */
export default demoView
```