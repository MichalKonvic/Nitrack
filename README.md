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

### Nitrack-View ###

Example of Nitrack-View:
```javascript
import nitrackView from "./Nitrack-View";

let demoView = new nitrackView();
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

/* Scripts are rendered as <script> tag inside browser */
demoView.setJS(()=>{
    console.log("Script loaded");
})

/* This properties are optional */
demoView.jsCompileProperties = {
    "async": true,
    "type=": "application/javascript"
};
/* Default jsCompileProperties:
    "async": "__!Include",
    "crossorigin=": "__!Include",
    "integrity=": "__!Include",
    "nomodule": "__!Include",
    "referrerpolicy=": "__!Include",
    "src=": "__!Include",
    "type=": "__!Include"
*/

export default demoView;
```