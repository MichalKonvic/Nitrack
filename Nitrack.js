/*
    Created by MichalKonvic
    Nitrack is the next ui library
*/
class NITRACK{
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
                console.log(`Unhandled error occured`);
            }
        }
    }
}
