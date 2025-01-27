import React from 'react';
import Image from "next/image";
import styles from '@/app/styles/Footer.module.css';

const Footer = () => {
    return <footer className={styles.about}>
        <div className={styles.card}>
            <p className={styles.projectname}>Project: <a href='https://github.com/Cogumeluns/ClownFishAI' target="_blank">ClownFishAI</a></p>
            <p className={styles.by}>By:
                <span>
                    <a href='https://github.com/GeorgePaulino' target="_blank">George P.</a>
                </span>
                <span>
                    <a href='https://github.com/Otaviano-Manoel' target="_blank">Otaviano M.</a>
                </span>
            </p>
            <p className={styles.group}>Cogumeluns Group</p>
        </div>

        <div className={styles.logos}>
        
        <a href='https://github.com/Cogumeluns' target="_blank">
            <Image className={styles.img} src={'/cogumeluns.jpeg'} alt={'Cogumeluns'} width={92} height={92}></Image>
        </a>
        <a href='https://github.com/Cogumeluns/ClownFishAI' target="_blank">
            <Image className={styles.img} src={'/clownfishai.jpeg'} alt={'ClownFishAI'} width={92} height={92}></Image>
        </a>
        </div>
        
    </footer>;
};

export default Footer;
