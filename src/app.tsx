import { Navigate, Route, Routes } from 'react-router-dom';

import { NotFound, Playlists, PlaylistVideos, Videos } from './routes';
import Layout from './components/layout';
import playlistData from './playlists.json';
import videoData from './videos.json';
import {SetStateAction, useState } from 'react';
import React from 'react';
import { createContext } from 'react';
import { Playlist } from '../src/interfaces/playlist';


//Created a centralised context and now this context is being shared with each and everyone 

interface MyContextType {
  myPlayListDats: Playlist[],
  addData: (newData: Playlist) => void;
  updateData: (id: number) => void;
  addVideoPlayList: (videoId: number[], id: number) => void;
}

export const MyContext = createContext<MyContextType>({ myPlayListDats: [], addData: () => {}, updateData: () => {}, addVideoPlayList: () => {} });


export default function App() {
  const [myPlayListDats, setMyArray] = useState<Playlist[]>(playlistData); 
   const addData = (newData: Playlist) => {
    setMyArray([...myPlayListDats, newData]);
  }
  const updateData = (id: number) => {
    const videoData = [...myPlayListDats]
    videoData.splice(id, 1);
    setMyArray(videoData);
  };

  const addVideoPlayList = (videoId:  number[], id: number) => {
    const videoIdUpdate = myPlayListDats.filter(obj => obj.id === id)[0];
    
    videoIdUpdate.videoIds = videoId;
    const updatedArray = myPlayListDats.map(obj => obj.id === id ? videoIdUpdate : obj);
    setMyArray([...updatedArray]);

  }

  return (
    <MyContext.Provider value = {{myPlayListDats, addData, updateData, addVideoPlayList }}>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='' element={<Navigate to='/playlists' replace />} />
        <Route path='playlists'>
          <Route index element={<Playlists />} />
          <Route path=':id' element={<PlaylistVideos />} />
        </Route>
        <Route path='videos' element={<Videos />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    </Routes>
    </MyContext.Provider>
  );
}