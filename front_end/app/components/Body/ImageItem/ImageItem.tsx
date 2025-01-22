import React from 'react';
import Image from "next/image";
import styles from "../../../styles/Body.module.css";

const ImageItem = ({ image, index, onDownload, onCopyToClipboard, isClipBoard }) => (
    <div key={index} className={styles.container_img}>
        <Image
            aria-hidden
            className={styles.image}
            src={image[1]}
            alt={`Imagem ${index}`}
            width={50}
            height={50}
        />
        <div className={styles.icons}>
            <button className={styles.copy} type="button"
            onClick={onCopyToClipboard}>
                {!isClipBoard[index] ?
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M360-240q-33 0-56.5-23.5T280-320v-480q0-33 23.5-56.5T360-880h360q33 0 56.5 23.5T800-800v480q0 33-23.5 56.5T720-240H360Zm0-80h360v-480H360v480ZM200-80q-33 0-56.5-23.5T120-160v-560h80v560h440v80H200Zm160-240v-480 480Z" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                        <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z"/>
                    </svg>
                }
            </button>
            <button
                className={styles.download}
                type="button"
                onClick={onDownload}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
                    <path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z" />
                </svg>
            </button>
        </div>
    </div>
);

export default ImageItem;
