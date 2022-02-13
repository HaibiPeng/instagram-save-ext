import React from 'react';
import Save from './Save.js';

const Popup = () => {
    return (
        <div style={styles.main}>
            <h2>Save posts from Instagram</h2>
            <Save />
        </div>
    )
}

const styles = {
    main: {
        width: '400px',
        height: '150px'
    }
}

export default Popup;