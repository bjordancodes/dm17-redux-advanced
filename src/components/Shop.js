import React, {Component} from 'react';
import {connect} from 'react-redux';

import {getPeople} from '../ducks/userReducer';


class Shop extends Component {

    componentDidMount() {
        this.props.getPeople();
    }

    render(){
        console.log(this.props)
        return(
            <div>Shop</div>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state.user
});

export default connect(mapStateToProps, { getPeople })(Shop);