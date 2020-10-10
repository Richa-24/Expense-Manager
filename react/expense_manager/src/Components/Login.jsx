import React from 'react'
import { connect } from 'react-redux'

class Login extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: ""
        }
    }

    render() {
        const { email, password } = this.state
        return (
            <>
                <h1>Login</h1>
                <input type="email" value={email} name="name" onChange={} />
                <input type="password" value={password} name="" onChange={} />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(Login)