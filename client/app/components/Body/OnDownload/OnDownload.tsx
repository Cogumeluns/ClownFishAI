function OnDownload(infos, index, images, handleDownload){
    infos.forEach(element => {
        if(element[0] === images[index][0]){
            handleDownload(element, images[index][1]);
        }
    });
};

export default OnDownload;
