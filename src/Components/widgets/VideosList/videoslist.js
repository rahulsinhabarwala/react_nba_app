import React,{Component} from 'react';
import styles from './videoslist.css';
import axios from 'axios';
import { URL } from '../../../config';
import Button from '../Buttons/button';
import VideosListTemplate from './VideoListTemplate'

class VideosList extends Component{
    state={
            teams:[],
            videos:[],
            start:this.props.start,
            amount:this.props.amount,
            end: this.props.start + this.props.amount
    }
    renderTitle=(title)=>{
        return this.props.title ?
        <h3><strong>NBA</strong>Videos</h3>:null
    }

    loadMore=()=>{
        let end = this.state.start + this.state.amount;
        this.request(this.state.end,end);
        }

    renderButton=()=>{
        return this.props.loadmore ?
        <Button
        type='loadmore'
        loadMore={()=> this.loadMore()}
        cta='Load More Videos'
        />
        :
        <Button 
        type="linkTo" cta='More Videos' linkTo='/videos'
        />
    }
    
    renderVideos = () => {
        let template = null;

        switch(this.props.type){
            case('card'):
                template = <VideosListTemplate data={this.state.videos} teams={this.state.teams}/>
                break;
            default:
                template = null;
        }
        return template;
    }
    
    componentWillMount(){
        
        this.request(this.state.start, this.state.end)
    }
    request = (start,end) => {
        if(this.state.teams.length < 1){
            axios.get(`${URL}/teams`)
            .then( response => {
                this.setState({
                    teams:response.data
                })
            })
        }

        axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
        .then( response => {
            this.setState({
                videos:[...this.state.videos,...response.data],
                start,
                end
            })
        })
    }
 

     render(){
         return(
             <div className={styles.videoList_wrapper}>
                {this.renderTitle()}
                {this.renderVideos()}
                {this.renderButton()}
             </div>
         )
     }
}
export default VideosList;