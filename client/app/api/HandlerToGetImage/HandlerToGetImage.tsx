"use client";
import { useState } from 'react';

function HandlerToGetImage(){
    const [images, setImages] = useState([]);

    const GetImage = async (imageName) => {
        try {
            const headers = new Headers();
            headers.append('Content-Type', 'application/json');
            const res = await fetch('http://127.0.0.1:8000/get-image', {
                method: 'POST',
                headers: headers,
                body: JSON.stringify({ text: imageName }),
            });

            if (res.ok) {
                const blob = await res.blob();
                const url = URL.createObjectURL(blob);
                console.log(url);
                setImages((prevent) => [...prevent, [imageName, url]]);
            } else {
                console.error('Failed to fetch image:', res.status, res.statusText);
            }
        } catch (error) {
            console.error('Error to send message: ', error);
        }
    }

    const Reset = () => {
        setImages([]);
    }

    return {images, GetImage, Reset};
}

export default HandlerToGetImage;
