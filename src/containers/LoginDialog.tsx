import { connect, ConnectedProps } from "react-redux"
import { AnyAction, Dispatch } from "redux"

import {LoginInfo} from '../models/LoginInfo'
import {login} from "../actions"
import LoginDialog from '../ui-components/login-dialog/LoginDialog'

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
    return {
        login: (loginInfo: LoginInfo) => {
            dispatch(login(loginInfo))
        }
    }
}

const connector = connect(null, mapDispatchToProps)
type ContainerProps = ConnectedProps<typeof connector>

const ComponentContainer: React.FunctionComponent<ContainerProps> = props => {
    return <LoginDialog login={props.login}/>
}

export default connector(ComponentContainer)

