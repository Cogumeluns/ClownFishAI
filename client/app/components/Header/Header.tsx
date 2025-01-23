"use client";
import styles from '@/app/styles/header.module.css';
import UseTextArea from './UseTextArea/UseTextArea';
import GetSVGToButton from './GetSVGToButton/GetSVGToButton';

const Header = ({loading, generateImage}) => {

    const {text, HandlerChange} = UseTextArea();
    const HandlerSend = () => generateImage(text); 

    return <header className={styles.header}>

        <textarea className={styles.description}
        value={text}
        onChange={HandlerChange}
        name="description"
        id="description"
        placeholder='Insert a description...'/>

        <button type="button"
        onClick={HandlerSend}
        className={styles.send}>
            {GetSVGToButton(loading)}
        </button>
        
    </header>
};

export default Header;
