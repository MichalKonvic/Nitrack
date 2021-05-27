/*
    Created by MichalKonvic
    Nitrack is the next ui library
*/
class view{
    #HTML = ``;
    #CSS = {};
    js = ``;
    /**
     * 
     * @param {String} htmlContent 
     * @return {Boolean} true/false if html check passed
     */
    html(htmlContent){
        //html check
    }
    /**
     * 
     * @param {String} cssContent 
     * @return {Boolean} true/false if css check passed
     */
    css(cssContent){
        //Css check
    }
}
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
    renderView(viewObject,renderElementID){
        try {
                    // Render HTML

                    // Render css

                    // Render JS
        } catch (error) {
            
        }
    }
}