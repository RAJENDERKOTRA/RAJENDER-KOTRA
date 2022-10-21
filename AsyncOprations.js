import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUser } from "./action";

class Async extends Component {
    render() {
        return (
            <div>

                <h1>async Opearation from user data:</h1>
                <p>count:{this.props.users.length}</p>
                <button onClick={this.props.fetchuser} className="btn btn-primary">cll api</button>

            </div>
        )
    }

}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        users: state?.users
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () => dispatch(fetchUser())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Async)
