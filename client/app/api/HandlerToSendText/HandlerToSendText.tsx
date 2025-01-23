"use client";
import { useState } from 'react';

function HandlerToSendText(){
    const [data, setData] = useState(false);
    const [loading, setLoading] = useState(false);

    const descriptionIsNullOrEmpty = (text): boolean => {
        return !text || text.trim() === '';
    }

    const generateImage = async (text) => {
        if(loading) return;

        if(descriptionIsNullOrEmpty(text)){
            console.error('Description cannot be null or empty.')
            return;
        }

        setLoading(true);

        try{
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const api = 'http://127.0.0.1:8000/generate-image';
            const res = await fetch(api, {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ "text": text }),
            });
            
            await res;

            if(res.ok)
                setData(true)
            
        }
        catch (error)
        {
            console.error('Error to send message: ', error);
            setData(false);
        }
        finally{
            setLoading(false);
        }
    }

    return {data, setData, loading, generateImage}
}

export default HandlerToSendText;
