import React from 'react';
import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newslist'
const Home =()=> {
  return (
    <div>
      <NewsSlider 
        type='featured'
        start={4}
        amount={7}
        settings={{
          dots:false
        }}
      >  
      </NewsSlider>
      
      <NewsList
        type='card'
        loadmore={true}
        start={3}
        amount={3}

      >

      </NewsList>
    </div>
  )
}
export default Home;
