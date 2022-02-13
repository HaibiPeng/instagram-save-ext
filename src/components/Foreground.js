import React from 'react';

function Foreground() {
    return (
        <div style={styles.main}>
            <h2>Extention Description</h2>
            <h3>Usage: download images and videos using url copied from Instagram posts</h3>
        </div>
    )
}

const styles = {
    main: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '1000',
        fontSize: '80px',
        pointerEvents: 'none'
    }
}

export default Foreground;