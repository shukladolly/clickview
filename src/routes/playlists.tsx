import playlistData from '../playlists.json';
import { PlaylistItem } from '../components/playlist-item';
import { SetStateAction, useState } from 'react';
export function Playlists() {
  const [playlists, setPlaylists] = useState(playlistData);
  const [inputValue, setInputValue] = useState('');
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



  return (
    <main>
      <div>
        {
        playlists.map((playListItem, index) => (
          <div>
          <PlaylistItem playlist={playListItem} />
          <button onClick={() => handleDeleteChange(index)}>Delete</button>
          </div>
        )
        )
      
      } 
      <div>
        <button onClick={addPlaylists}> Add Playlist</button>
        <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={addPlaylists}>Add</button>
         
        </div>
      </div>
      </div>
    </main>
  );
}




