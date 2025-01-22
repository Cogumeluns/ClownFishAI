import styles from '@/app/styles/Body.module.css'
import { useEffect, useState } from "react";
import HandlerToGetImage from "@/app/api/HandlerToGetImage/HandlerToGetImage";
import HandlerToGetInfos from "@/app/api/HandlerToGetInfos/HandlerToGetInfos";
import SaveImage from "./SaveImage/SaveImage";
import ImageItem from "./ImageItem/ImageItem";
import OnCopyToClipboard from './OnCopyToClipboard/OnCopyToClipboard';
import OnDownload from './OnDownload/OnDownload';

const Body = ({data, setData}) => {

    const {images, GetImage, Reset} = HandlerToGetImage();
    const {infos, initCount, GetInfos} = HandlerToGetInfos();
    const { handleDownload } = SaveImage();
    const [clipboard, setClipboard] = useState([]);

    useEffect(() => {
        if (images.length) {
            setClipboard(new Array(images.length).fill(false));
        }
    }, [images]);

    useEffect(() => {
        if(infos.length !== 0){
            for (let index = initCount; index < infos.length; index++) {
                const imageName = infos[index][0];
                GetImage(imageName);
            }
        }
    }, [infos])

    useEffect(() => {
        if (data) {
            setData(false);
            GetInfos();
        }
    }, [data]);

    useEffect(() => {
        GetInfos();
    }, [])

    return <div className={styles.list_img}>
        {images.map((image, index) => (
            <ImageItem
            key={index}
            index={index}
            image={image}
            onDownload={() => OnDownload(infos, index, images, handleDownload)}
            onCopyToClipboard={() => OnCopyToClipboard(index, infos, setClipboard, images)}
            isClipBoard={clipboard}/>
        ))}
    </div>
};

export default Body;
