import { Col, Image, Row } from 'react-bootstrap';
import { Video } from '../interfaces/video';
import { useContext } from 'react';
import { MyContext } from '../app';
import { SetStateAction, useState } from 'react';

interface VideoItemProps {
  video: Video;
}

export default function VideoItem(props: VideoItemProps) {
  const { myPlayListDats, addData, updateData, addVideoPlayList } = useContext(MyContext);
  const [selectedPlayList, setSelectedPlayList] = useState('');
  const [selectedVideo, setSelectedVideo] = useState('');

  const { video } = props;

  const handlePlayListChange = (event: { target: { value: SetStateAction<string>; }; }) => {
    setSelectedPlayList(event.target.value)
    // console.log(video.id)
    // console.log(event.target.value)
  };


  const  addVideoToPlayList = () =>
  {
    var videoArr = []
    videoArr.push(video.id)
    addVideoPlayList(videoArr, parseInt(selectedPlayList))
  }

  return (
    <div >
    <Row>
      <Col xs='12' md='3' className='mb-3'>
        <Image fluid rounded src={`${video.thumbnail}?size=small`} alt={video.name} className='w-100' />
      </Col>
      <Col xs='12' md='3' className='mb-3'>
        <h2 className='h4'>{video.name}</h2>
        <p>{video.description}</p>
      </Col>
      <Col xs='12' md='3' className='mb-3'>
      <select id="dropdown" value={selectedPlayList} onChange={handlePlayListChange}>
        <option value="">--Please add to a playlist option--</option>
        {myPlayListDats?.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
      </Col>
      <Col xs='12' md='3' className='mb-3' >  <button onClick={addVideoToPlayList}>Add video to playlist</button> 
      </Col>
    </Row>
   
    </div>
  )
}