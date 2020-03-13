import React, {useState} from 'react';
import ImagesList from "./ImagesList/ImagesList";
import DownloadForm from "./DownloadForm/DownloadForm";
import {IDownload} from "../../interfaces/interfaces";
import {Loader} from "../Loader";

const Main: React.FC = (props) => {
    const [downloads, setDownloads] = useState<IDownload[]>([])


    const addHandler = (url: string) => {
        const newDownload: IDownload = {
            url: url,
            id: Date.now()
        }
        setDownloads(prev => [newDownload, ...prev])
    }


    return <>
        <DownloadForm onAdd={addHandler}/>
        <ImagesList downloads={downloads}/>
    </>
}

export default Main;