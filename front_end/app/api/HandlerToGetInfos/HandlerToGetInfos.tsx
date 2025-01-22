"use client";
import { useState } from 'react';

function HandlerToGetInfos(){
    const [infos, setInfos] = useState({});
    const [initCount, setInitCount] = useState(0);

    const GetInfos = async () => {
        try{
            const headers = new Headers();
            const res = await fetch('http://127.0.0.1:8000/get-image-infos', {
                method: 'GET',
                headers: headers,
            });

            const tempinfos = await res.json();

            if(Array.isArray(infos)){
                tempinfos.forEach(element => {
                    if(element[0] === `img_${tempinfos.length - 1}.jpg`){
                        setInfos([element]);
                    }
                });
                return;
            }
            setInfos(tempinfos);
        }
        catch (error)
        {
            console.error('Error to send message: ', error);
        }
    }

    return {infos, initCount, GetInfos};
}

export default HandlerToGetInfos;
