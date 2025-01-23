function OnCopyToClipboard(index, infos, setClipboard, images){
    infos.forEach(element => {
        if(element[0] === images[index][0]){
            navigator.clipboard.writeText(element[1]);

            setClipboard((prev) => prev.map((val, i) => (i === index ? true : val)));

            // Reseta o estado do índice após 2 segundos
            setTimeout(() => {
                setClipboard((prev) => prev.map((val, i) => (i === index ? false : val)));
            }, 300);
        }
    });
};

export default OnCopyToClipboard;
