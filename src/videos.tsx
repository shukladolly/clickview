import videoData from './videos.json'
import playlistData from './playlists.json';
import VideoItem from './components/video-item';
import { SetStateAction, useState } from 'react';
import { useContext } from 'react';
import { MyContext } from './app';


export function Videos() {

  const { myPlayListDats, addData, updateData, addVideoPlayList } = useContext(MyContext);


  const [selectedPlayList, setSelectedPlayList] = useState('');
  const [selectedVideo, setSelectedVideo] = useState('');

  const handlePlayListChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedPlayList(event.target.value)
    console.log(event.target)
  };

  // const addVideoToPlayList = () => {
    
  //   addVideoPlayList([], selectedPlayList)
  // };

  return (
    <main>
      {
        videoData.map((video, index) => (
          <div >
          <VideoItem video={video} />
      

   
          {/* <button onClick={addVideoToPlayList}>Add video to playlist</button> */}
          </div>
        )
        )
      } 
    </main>
  )
}

