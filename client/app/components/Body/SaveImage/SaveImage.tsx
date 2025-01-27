import React from 'react';
import JSZip from 'jszip';
import saveAs from 'file-saver';

function SaveImage(){
    const handleDownload = async (infos, url) => {
        const zip = new JSZip();
    
        zip.file("data.json", JSON.stringify(infos, null, 2));
    
        const imageBlob = await fetch(url).then((res) => res.blob());
        zip.file("image.jpg", imageBlob);
    
        const content = await zip.generateAsync({ type: "blob" });
    
        saveAs(content, "ImageAndInfos.zip");
      };

    return {handleDownload};
}

export default SaveImage;
