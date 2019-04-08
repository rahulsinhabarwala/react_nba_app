import React from 'react';
import styles from '../articles.css';

const teamNfo = (props) => {
return(
    <div className={styles.articleTeamHeader}>
    <div className={styles.left}
    style={{
        background:`url('/images/teams/${props.team.logo}')`
    }}
    />
    <div className={styles.right}>
        <div>
            <span>
                {props.team.city} {props.team.name}
            </span>
        </div>
        <div>
            W{props.team.stats[0].wins}-L{props.team.stats[0].defeats}
        </div>
    </div>   
    </div>
)
}
export default teamNfo;