import React from 'react';
import style from './sideNav.css';
import {Link} from 'react-router-dom';
 import FontAwesome from 'react-fontawesome';
const SideNavitems = () =>{

    const item = [
        {
            type:style.option,
            icon:'home',
            text:'HOME',
            link:'/'
        },
        {
            type:style.option,
            icon:'file-text-o',
            text:'News',
            link:'/news'
        },
        {
            type:style.option,
            icon:'play',
            text:'Videos',
            link:'/videos'
        },
    ]

    const showItems = ()=> {
       return item.map((item,i)=>{
            return (
                <div key={i} className={item.type}>
                    <Link to={item.link}>
                        <FontAwesome name={item.icon}/>
                        {item.text}
                    </Link>
                </div>
            )
        })
    }
    

    return(
        <div>
            {showItems()}
        </div>
    )
}
export default SideNavitems;