import React, {useState} from 'react';
import s from './ImagesList.module.css';
import preloader from "../../../img/loading.gif";
import {ImagesListProps} from "../../../interfaces/interfaces";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ImagesList: React.FC<ImagesListProps> = ({downloads}) => {

    return <div className={s.imgContainer}>
        {downloads.map(download => {
            return <LazyLoadImage
                    placeholderSrc={preloader}
                    alt={download.url}
                    height="200"
                    src={download.url}
                    width="200"
                    />
        })}
    </div>
}

export default ImagesList;