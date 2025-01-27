"use client";
import { useState } from 'react';

function UseTextArea(initialValue = '') {
    const [text, setText] = useState(initialValue);

    const HandlerChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
    };

    return {text, HandlerChange}
};

export default UseTextArea;
