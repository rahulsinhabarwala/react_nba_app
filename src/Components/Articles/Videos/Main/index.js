import React from 'react';
import VideosList from '../../../widgets/VideosList/videoslist';

const VideosMain = () =>(
    <div>
         <VideosList
           type='card'
           title={false}
           loadMore={true}
           start={0}
           amount={10} 
         />
    </div>
)
export default VideosMain;