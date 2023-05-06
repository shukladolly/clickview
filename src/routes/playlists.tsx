import playlistData from '../playlists.json';
import videolistData from '../videos.json';
import { PlaylistItem } from '../components/playlist-item';
import { Link } from 'react-router-dom';

import { SetStateAction, useState } from 'react';
export function Playlists() {
  const [playlists, setPlaylists] = useState(playlistData);
  const [inputValue, setInputValue] = useState('');
  const [w, setInputVidos] = useState(videolistData);
  const [editingIndex, setEditingIndex] = useState(-1);

  const addPlaylists = () => {
    if (inputValue.trim() !== '') {
      const newTodo = {
        id: playlists.length + 1,
        name: inputValue,
        description: "",
        videoIds: [140824],
        completed: false,
        dateCreated: Date.now().toString()
      };
      setPlaylists([...playlists, newTodo]);
      setInputValue('');
    }
  };

  const handleDeleteChange = (index: number) => {
    const newTodos = [...playlists];
    newTodos.splice(index, 1);
    setPlaylists(newTodos);
  };

  const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setInputValue(event.target.value);
  };

  const handleInputVideo = () => {
    return "tet"
  }


  return (
    <main>
      <div>
        {
        playlists.map((playListItem, index) => (
          <div>
          <PlaylistItem playlist={playListItem} />
          <button className='mb-0' onClick={() => handleDeleteChange(index)}>Delete Playlist</button>
          </div>
        )
        )
      
      } 
      <div>
        {/* <button onClick={addPlaylists}> Add Playlist</button> */}
        <div>
        <input type="text" placeholder = " Name of Playlist" value={inputValue} onChange={handleInputChange} />
      <button onClick={addPlaylists}>Add New Playlist</button>
        </div>
      </div>
      </div>
    </main>
  );
}




