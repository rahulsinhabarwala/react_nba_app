import React from 'react';
import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newslist';
import VideoList from '../widgets/VideosList/videoslist';
const Home =()=> {
  return (
    <div>
      <NewsSlider 
        type='featured'
        start={4}
        amount={7}
        settings={{
          dots:false
        }}/>  
      
      <NewsList
        type='card'
        loadmore={true}
        start={3 }
        amount={3} />
      <VideoList
        type='card'
        title={true}
        loadmore={true}
        start={0}
        amount={3}
      />
    </div>
  )
}
export default Home;
