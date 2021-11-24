/* 
    This is a Redux container for ChatInput component. 
    It should inject the ChatInput UI component with the sendMessage functionality
*/


import { connect, ConnectedProps } from "react-redux"
import { AnyAction, Dispatch } from "redux"

import {Message} from '../models/Message'
import {login} from "../actions"
import LoginDialog from '../ui-components/login-dialog/LoginDialog'

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        sendMessage: (message: Message) => {
            dispatch(sendMessage(message))
        }
    }
}

const connector = connect(null, mapDispatchToProps)
type ContainerProps = ConnectedProps<typeof connector>

const ComponentContainer: React.FunctionComponent<ContainerProps> = props => {
    return <ChatInput login={props.sendMessage}/>
}

export default connector(ComponentContainer)

