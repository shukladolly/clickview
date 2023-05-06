import videoData from './videos.json'
import VideoItem from './components/video-item';
export function Videos() {
  return (
    <main>
      {
        videoData.map((video, index) => (
          <VideoItem video={video} />
        )
        )
      
      } 
    </main>
  )
}

