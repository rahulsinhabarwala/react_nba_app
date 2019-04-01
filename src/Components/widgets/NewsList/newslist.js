import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {URL} from '../../../config';
import styles from './newslist.css';
import { CSSTransition , TransitionGroup } from 'react-transition-group';
import Button from '../Buttons/button'

import CardInfo from '../../widgets/CardInfo/cardinfo';

class NewsList extends Component{
    state={
        teams:[], 
        items:[],
        start:this.props.start,
        end:this.props.start + this.props.amount,
        amount:this.props.amount
    }

    componentWillMount(){
        this.request(this.state.start,this.state.end);
    }
    request=(start,end)=>{
        if(this.state.items.length < 1){
            axios.get(`${URL}/teams`)
            .then(response=>{
                this.setState({
                    teams:response.data
                })
            })
        }

        axios.get(`${URL}/articles?_start=${this.state.start}&_end=${this.state.end}`)
        .then(response=>{
            this.setState({
                items:[...this.state.items,...response.data]
            })
        })
    }
    
    loadMore=()=>{
        let end = this.state.end + this.state.amount;
        console.log(end);
        this.request(this.state.end,end) 
    }
    renderNews=(type)=>{
        let template=null;
        switch(type){
            case('card'):
            template=this.state.items.map((item,i) => (
            <CSSTransition 
                classNames={{
                    enter:styles.newsList_wraper,
                    enterActive:styles.newsList_wrapper_enter
                }}
                timeout={500}
                key={i}
            >
            <div className={styles.newslist_item}>
                    <Link to={`/articles/${item.id}`}>
                        <CardInfo teams={this.state.teams} team={item.team} date={item.date}/>

                        <h2>{item.title}</h2>

                    </Link>
                </div>
            </CSSTransition>
            ))
            break;
            default:
            template=null;
        }
        return template;
    }
    render(){
      //  console.log(this.state.teams);  
        return(
            <div>
                <TransitionGroup
                    component='div'
                    className='list'
                >
                    {this.renderNews(this.props.type)}
                </TransitionGroup>

                <Button
                    type='loadmore'
                    loadMore={()=>this.loadMore()}
                    cta="Load More News"
                />

                
            </div>
        )
    }
}
export default NewsList;