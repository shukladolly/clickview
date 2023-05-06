import videoData from './videos.json'
import playlistData from './playlists.json';
import VideoItem from './components/video-item';
import { SetStateAction, useState } from 'react';

export function Videos() {


  const [selectedPlayList, setSelectedPlayList] = useState('');

  const handlePlayListChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedPlayList(event.target.value)
  };

  // const addVideoToPlayList = () => {

  // }

  return (
    <main>
      {
        videoData.map((video, index) => (
          <div>
          <VideoItem video={video} />
      

    <select id="dropdown" value={selectedPlayList} onChange={handlePlayListChange}>
        <option value="">--Please add to a playlist option--</option>
        {playlistData.map((option, index) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
          {/* <button onClick={addVideoToPlayList}>Add video to playlist</button> */}
          </div>
        )
        )
      } 
    </main>
  )
}

