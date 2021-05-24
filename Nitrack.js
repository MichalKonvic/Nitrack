/*
    Created by MichalKonvic
    Nitrack is the next ui library
*/

class component{
    tags = ["a",
    "abbr",
    "acronym",
    "address",
    "applet",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "basefont",
    "bdi",
    "bdo",
    "bgsound",
    "big",
    "blink",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "center",
    "cite",
    "code",
    "col",
    "colgroup",
    "content",
    "data",
    "datalist",
    "dd",
    "decorator",
    "del",
    "details",
    "dfn",
    "dir",
    "div",
    "dl",
    "dt",
    "element",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "font",
    "footer",
    "form",
    "frame",
    "frameset",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "isindex",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "listing",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "nobr",
    "noframes",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "plaintext",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "shadow",
    "small",
    "source",
    "spacer",
    "span",
    "strike",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "template",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "tt",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "xmp"]
    /**
     * 
     * @param {string} tagName 
     * @param {string} id 
     * @param {string} className 
     */
    constructor(tagName,id, className){
        if (typeof tagName !== "string" || !this.tags.includes(tagName)) {
            throw new Error("TagName not specified or supported!");
        }else if(typeof id !== "string" && typeof className !== "string"){
            console.warn(`<${tagName}> was created without any id or className!`);
            this.Listenable = false;
        }

    }
}



class NITRACK {
    constructor(){
        // this.#_events = {};
    }
    /**
     * @param {string} HTML Content 
     * @param {*} ID targetElement 
     * @summary Renders content
    */
    Render(content,targetElement){
        document.getElementById(targetElement).innerHTML = content;
    }


    /*-----------------
        Event Handler
    --------------------*/


}







/*
    NOT USED
    DONT DELETE FOR NOW
*/

// class Eventemitter {
//     constructor(){
//         this.#_events = {};
//     }
//     /**
//      * 
//      * @param {string} eventName 
//      * @param {*} listener 
//      */
//     on(eventName,listener){
//         if (!this.#_events[eventName]) {
//             this.#_events[eventName] = []
//         }
        
//         this.#_events[eventName].push(listener);
//     }
//     /**
//      * 
//      * @param {string} eventName 
//      * @param {*} listener 
//      */
//     removeListener(eventName,listener){
//         if (!this.#_events[eventName]) {
//             throw new Error(`Event %{eventName} doesn't exist.Listener not removed!`);
//         }
//         const filterlisteners = (listener) => listener !== listenerToRemove;
//         this.#_events[eventName] = this.#_events[eventName].filter(filterlisteners);
//     }
//     /**
//      * 
//      * @param {String} eventName Name of event 
//      * @param {*} Data Data passed to listener 
//      */
//     #emit(eventName,passData){
//         if (!this.#_events[eventName]) {
//             throw new Error(`Event not emmited. Event ${eventName} doesn't exist`);
//         }
//         const fireCallback = (callback) => {
//             callback(data);
//         }
//         this.#_events[eventName].forEach(fireCallback);
//     }
// }