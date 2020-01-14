import React from 'react'
import { Paper, TextField, Button } from '@material-ui/core'
import styled from 'styled-components';

const ContactForm = () => {
  
    const [value, setValue] = React.useState('Controlled');
    const handlSendMessage = () => {
        console.log('sending message');
    }
    const handleChange = event => {
        setValue(event.target.value);
    };

    return (
        <form style={{ width: '300px' }}>
            <Paper style={{ display: 'flex', flexDirection: 'column', padding: '0 30px 30px 30px' }}>
                <TextField id="Name" label="Name" />
                <TextField id="Email" label="Email" />
                <TextField id="Phone" label="Phone" />
                <TextField

                    id="Message"
                    label="Message"
                    multiline
                    rowsMax="4"
                    onChange={handleChange}
                    rows="4"
                />
                <Button style={{marginTop: '24px'}} variant='contained' color='secondary' onClick={handlSendMessage}>Send</Button>
            </Paper>

        </form>

    )
}

export default ContactForm
