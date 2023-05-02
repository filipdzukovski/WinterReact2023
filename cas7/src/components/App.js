import React,{useEffect,useState} from 'react';
import {Route,Routes} from 'react-router-dom';
import {Posts} from './Posts';
import {Todos} from './Todos';
import {Navigation} from './Navigation';
import { Gallery } from './Gallery';
import { API_URL } from '../config/ApiConstants';
import {GalleryContext} from './../config/GalleryContext';

export function App(){

    const [photos,setPhotos] = useState([]);
    const [selectedPhoto,setSelectedPhoto]=useState({});

    useEffect(()=>{
        fetch(`${API_URL}/photos`)
            .then(res=>res.json())
            .then(data=>setPhotos(data))
            .catch(err=>alert(err))
    },[])

    function deletePhoto(){
        setPhotos([...photos.filter(item=>item.id !== selectedPhoto.id)]);
        setSelectedPhoto({})
    }

    return(
        <div id="app">
            <Navigation/>
            <GalleryContext.Provider value={{selectedPhoto,setSelectedPhoto,deletePhoto}}>
            <Routes>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/todos" element={<Todos/>}/>
                <Route path="/gallery" 
                element={<Gallery 
                photos={photos} 
                />}/>
            </Routes>
            </GalleryContext.Provider>
        </div>
    )
}