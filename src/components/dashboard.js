import React from 'react';
import { connect } from 'react-redux';
import requiresLogin from './requires-login';
import { fetchProtectedData } from '../actions/protected-data';

export class Dashboard extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchProtectedData());
    }

    render() {
        return (
            <div className="dashboard">
                <h1>Pick your champions</h1>

            </div>
        );
    }
}

const mapStateToProps = state => {
    // const { currentUser } = state.auth;
    // return {
    //     username: state.auth.currentUser.username,
    //     name: `${currentUser.firstName} ${currentUser.lastName}`,
    //     protectedData: state.protectedData.data
    // };
};

export default (connect(mapStateToProps)(Dashboard));
