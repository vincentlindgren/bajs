function main(x){

    try{
        var resourceIdParsedArray = x.split('/');
        var resourceId = resourceIdParsedArray[4];
    }
    catch(error){
        return error;
    }
    return resourceId;
<<<<<<< HEAD
}
=======
}


// function main(x){

//     try{
//         var resourceIdParsedArray = x.split('/');
//         var resourceId = resourceIdParsedArray[4];
//     }
//     catch(error){
//         return error;
//     }
//     return resourceId;
// }
>>>>>>> 2f1365ac0841e2d17d0118cbdb7b63da81c6adfd
