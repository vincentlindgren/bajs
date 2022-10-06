function main(x){

    try{
        var resourceIdParsedArray = x.split('/');
        var resourceId = resourceIdParsedArray[4];
    }
    catch(error){
        return error;
    }
    return resourceId;
}