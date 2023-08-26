import React, { useState, useCallback } from 'react';
import Slick from 'react-slick';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './ImagesZoom';


const PostImages = ({images}) => {
    const [showImagesZoom, setShowImagesZoom] = useState(false);
    const onZoom = useCallback(()=>{
        setShowImagesZoom(true);
    },[]);
    const onClose = useCallback(()=>{
        setShowImagesZoom(false);
    },[]);

    if(images.length === 1) {
        return (
            <img src={images[0].src} />
        )
    }
    if(images.length === 2) {
        return (
        <>
            <img src={images[0].src} style={{width:'50%', display:'inline'}} />
            <img src={images[1].src} style={{width:'50%', display:'inline'}} />
            { showImagesZoom && <ImagesZoom images={images} onClose={onClose} /> }

        </>
        )
    }
    
    return (
        <div>    
            <img src={images[0].src} width="50%" />
            <div
                role="presentation"
                style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }}
                onClick ={onZoom}
        >
            <PlusOutlined />
            <br />
            {images.length}
            개 사진 더보기</div>
            { showImagesZoom && <ImagesZoom images={images} onClose={onClose} /> }
        </div>
    );
}

export default PostImages;