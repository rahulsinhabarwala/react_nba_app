import React from 'react';
import styles from '../articles.css';
const postData =(props)=>{
 return(
    <div className={styles.articlePostData}>
    Date:
    <span>{props.data.date}</span>
   
    <div>
        Author:
        <span>{props.data.author}</span>
        </div>
    </div>
 )}
export default postData;