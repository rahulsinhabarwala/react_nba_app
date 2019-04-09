import React from 'react';
import styles from '../videoslist.css';

import VideoListTemplate from '../VideoListTemplate';

const videosRelated = (props) => (
    <div className={styles.relatedWrapper}>
        <VideoListTemplate
            data={props.data}
            teams={props.teams}
        />
    </div>
)

export default videosRelated;