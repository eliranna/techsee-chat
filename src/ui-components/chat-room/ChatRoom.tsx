import * as React from 'react';
import styled from 'styled-components';

// Using Material UI to save time & effort
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

// This is a custom TypeScript type.
// Use it anywhere you need to talk about messages.
// This makes our codebase consistent. 
import { Message } from '../../models/Message';

// Using TypeScript to describe the component's properties structure.
type ChatRoomProps = {
    messages: Message[]
}

// Instead of using primitive HTML elements (such as div), 
// I recommend on using styled-components. 
// This is more readable and Maintainable.
const ListItemWrapper = styled.div``

export default function ChatRoom(props: ChatRoomProps) {
  //props.messages is available to this ui-component because it is wrapped by a container. 
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {props.messages.map((message: any) => {
            return (
                <ListItemWrapper>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                        <Avatar alt={message.authorId}/>
                        </ListItemAvatar>
                        <ListItemText
                        primary={message.authorId}
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {message.content}
                                </Typography>
                            </React.Fragment>
                        }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </ListItemWrapper>
            )
        })}
    </List>
  );
}
