import React from 'react'
import { connect } from 'react-redux'

class Signup extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

    render() {
        return (
            <>
                <h1>Sign Up</h1>
                <input type="text" value={} name="" onChange={} />
                <input type="email" value={} name="" onChange={} />
                <input type="password" value={} name="" onChange={} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Signup)