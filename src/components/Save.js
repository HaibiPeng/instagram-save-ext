import React, { useState } from 'react'
import { ThemeProvider, Button, Input } from 'react-ui';
import { tokens, components } from 'react-ui/themes/base';
import { downloadMedia } from 'instagram-save-client';

// overwrite Button sizes
components.Button.sizes = {
   small: 6, medium: 10
}

// overwrite Button variants
// the default variant is primary
components.Button.variants = {
  primary: {
    backgroundColor: 'green',
    borderColor: 'green',
    color: 'white',
    ':hover':  { backgroundColor: 'darkgreen' },
    ':focus':  { backgroundColor: 'darkgreen' },
    ':active': { backgroundColor: 'seagreen' }
  },
  danger: {
    backgroundColor: 'red',
    borderColor: 'red',
    color: 'white',
    ':hover':  {backgroundColor: 'darkred' },
    ':focus':  {backgroundColor: 'red' },
    ':active': {backgroundColor: 'maroon' },
    borderRadius: 5
  }
}

const Save = () => {
    const saveImages = async (event) => {
        event.preventDefault();
        const url = event.target.url.value;
        // const dir = event.target.dir.value;
        console.log("url:", url);
        // console.log("dir:", dir);
        await downloadMedia(url.split("?")[0]);
    }

    return (
        <ThemeProvider tokens={tokens} components={components}>
            <form style={styles.container} onSubmit={saveImages}>
                <Input label="url" name="url" type="text" placeholder="Please enter the resource url" />
                {/* <Input label="dir" name="dir" style={styles.margin} type="text" placeholder="Please enter the directory where you want to save the images" /> */}
                <Button style={styles.margin} variant="danger" fullWidth type="submit">Download</Button>
            </form>
        </ThemeProvider>
    );
};

const styles = {
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "flex-end",
    },
    margin: {
        marginTop: 5,
        marginBottom: 5
    }
};

export default Save;
