/*
    Created by MichalKonvic
    Nitrack is the next ui library
*/

class nitrack{
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
                // Render HTML
                document.getElementById(renderElementID).innerHTML = viewObject.HTML;
        } catch (error) {
            console.error("Error occured while rendering html!");
        }
        try {
            // Render CSS
            let stylesObject = viewObject.getStyles();
            // Loops through elements
            Object.keys(styles).forEach(elementId =>{
                const styles = stylesObject[elementId];
                //  Loops through element styles
                Object.keys(styles).forEach(style => {
                    // Renders style
                    document.getElementById(elementId)[style] = styles[style];
                });
            });
        } catch (error) {
            console.error("Error occured while rendering css!");
        }
    }
}