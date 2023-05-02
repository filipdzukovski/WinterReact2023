import React,{useContext} from 'react';
import {GalleryContext} from './../config/GalleryContext';

export const Popup = () => {

    const {selectedPhoto,setSelectedPhoto,deletePhoto} = useContext(GalleryContext); 

    return(
        <div id="popup">
            <button
            onClick={()=>{setSelectedPhoto('')}}
            className='close-popup'
            >
                &times;
            </button>
            <button className='delete-photo' onClick={deletePhoto}>
                Del
            </button>
            <div className='popup-container'>
                <img src={selectedPhoto.url} alt={""}/>
            </div>
        </div>
    )
}