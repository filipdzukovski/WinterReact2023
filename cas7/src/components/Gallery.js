import React,{useContext} from "react";
import {Popup} from './Popup';
import {GalleryContext} from './../config/GalleryContext'

export const Gallery = ({photos}) => {

    const {selectedPhoto,setSelectedPhoto} = useContext(GalleryContext);

    return (
    <div id="gallery">
     {photos.slice(0,50).map(photo=>{
        return(
            <div key={photo.id}
            className="image-holder"
            onClick={()=>{setSelectedPhoto(photo)}}
            >
                <img src={photo.thumbnailUrl} alt={photo.title} />
            </div>
        )
     })

     }
     {
        Object.keys(selectedPhoto).length > 0 &&  <Popup/>
     }
    </div>
  );
};
