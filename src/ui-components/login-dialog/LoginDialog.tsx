import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { LoginInfo } from '../../models/LoginInfo';

// Using TypeScript to describe the component's properties structure.
// Notice how we use a TypeScript function-type here. 
type LoginDialogProps = {
    login: (loginInfo: LoginInfo) => void
}

export default function LoginDialog(props: LoginDialogProps) {

    const [open, setOpen] = React.useState(true);
    const [username, setUsername] = useState('')

    const handleJoin = () => {
        if (username && username.length > 0) {
            // props.login is available to this ui-component because it is wrapped by a container.
            props.login({username});
            setOpen(false);
        }
    }; 
    
    const handleClose = () => {
        // This will stop users from closing the model
        return; 
    }

    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Join the TechSee Chat!</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To join the chat, please enter your nickname here.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nickname"
            type="text"
            fullWidth
            variant="standard"
            value={username} 
            onChange={(e) => setUsername((e.target as HTMLInputElement).value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleJoin}>Join!</Button>
        </DialogActions>
      </Dialog>        
    )

}