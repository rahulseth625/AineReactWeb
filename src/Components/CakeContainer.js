import React from 'react'
import '../App.css'
//import { buyCake } from '../redux/cakes/CakeAction';
import { buyCake } from '../redux';
import { connect } from 'react-redux';

const CakeContainer = (props) => {
    return (
        <div>
            <h2>Number of cake - {props.numOfCakes}</h2>
            <button onClick={props.buyCake}>Buy cake</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        numOfCakes : state.cake.numOfCakes 
    }
}

const mapDispatchToProps = dispatch =>{
    return {
        buyCake : () => dispatch(buyCake())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CakeContainer)