/*
    Created by MichalKonvic
    Nitrack is the next ui library
*/
/**
 * Converts css style to js style name
 * @param {string} styleName in css
 * @returns return css style converted to js style, undefined when css style is invalid
 */
function cssToJs(styleName=""){
    if(styleName.length > 1){
        try {
            styleName = styleName.split("-");
            for (let letter = 0; letter < styleName.length; letter++) {
                if(letter == 0) continue;
                styleName[letter] = styleName[letter][0].toUpperCase() + styleName[letter].slice(1);
            }
            styleName = styleName.join("");
        } catch (error) {
            return undefined;
        }
    }
    return styleName
}

export class nitrack{
    /**
     * 
     * @param {string} renderContent 
     * @summary Renders content to page
     */
    render(renderContent,renderElementID){
        try {
            document.getElementById(renderElementID).innerHTML = renderContent;
        } catch (error) {
            if (error == "TypeError: document.getElementById(...) is null") {
                console.log(`The %c${renderElementID}%c is not valid id!\n Error moved to error panel!`,"color:red;","color:white;");
                console.error(`renderError: Invalid id!\n\n ${renderContent}\n\n was not rendered!`);
            }else{
                console.log(`Unhandled error occured!`);
            }
        }
    }
    /**
     * 
     * @param {Object}  NitrackViewObject
     * @param {String} renderElementID 
     */
    renderView(viewObject,renderElementID){
        try {
            document.getElementById(renderElementID).innerHTML = viewObject.HTML; // Render HTML
        } catch (error) {
            console.error("Error occured while rendering html!");
        }
        try {
            // Render CSS
            Object.entries(viewObject.CSS).forEach(([elementId,elementStyles]) => {
                Object.entries(elementStyles).forEach(([cssStyle,cssStyleValue]) => {
                    document.getElementById(elementId).style[cssToJs(cssStyle)] = cssStyleValue;
                })
            })
        } catch (error) {
            console.error("Error occured while rendering css!");
            console.log(error)
        }
    }
}
export class nitrackView{
    HTML = ``;
    CSS = {};
    /**
     * Adds or changes element style.
     * @param {String} elementId 
     * @param {Object} styles !!!PUT EVERYTHING INSIDE OBJECT TO STRING!!!
     * @returns Updated css Object
     */
    elementStyle(elementId,styles){
        this.CSS[elementId] = styles;
        return this.CSS;
    }
    /**
     * Removes element style
     * @param {String} elementId 
     * @returns Updated css Object or if element doesnt exist undefined
     */
    removeElementStyle(elementId){
        if (!this.CSS[elementId] || elementId === undefined) {
            return undefined;
        }
        delete this.CSS[elementId];
        return this.CSS;
    }
}