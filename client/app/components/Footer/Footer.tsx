import React from 'react';
import Image from "next/image";
import styles from '@/app/styles/Footer.module.css';

const Footer = () => {
    return <footer className={styles.about}>
        <div className={styles.card}>
            <p className={styles.projectname}>Project: ClownFishAI</p>
            <p className={styles.by}>By:<span>George P.</span><span>Otaviano M.</span></p>
            <p className={styles.group}>Cogumeluns Group</p>
        </div>

        <div className={styles.logos}>
            <Image className={styles.img} src={'/logo-project.jpeg'} alt={''} width={92} height={92}></Image>
            <Image className={styles.img} src={'/logo-week.jpeg'} alt={''} width={92} height={92}></Image>
        </div>
        
    </footer>;
};

export default Footer;
