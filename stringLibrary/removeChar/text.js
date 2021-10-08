function rem(text, char){
    let result = "";
    for(let currentChar of text){
        if(currentChar != char){
            result = result + currentChar;

        }

    }
    return result;

}
rem("Khala", "a");