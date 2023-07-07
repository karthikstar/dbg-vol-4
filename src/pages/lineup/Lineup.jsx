import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { updateTopEightLineup } from '../../actions/topEightActions';

const Lineup = (props) => {
    const [refreshLineup, setRefreshLineup] = useState(false) // bad code

    if (props.topEightBattlersList.length === 0){
        return <div style={{ color: "white" }}> Loading </div>
    }
    return (
        <div>
            <button onClick={() => {randomizeLineup(props.topEightBattlersList); setRefreshLineup((prev) => !prev);}}>
                Randomize
            </button>
            {props.topEightBattlersList.map(battler => {
                return (
                    <p style={{ color: "white" }}>{battler.name}</p>
                )
            })}
        </div>
    )

}

const randomizeLineup = (lineup) => {
    const sortedLineup = lineup.sort(() => Math.random() - 0.5);
    updateTopEightLineup(sortedLineup);
    return sortedLineup;
}

const mapStateToProps = state => {
    return {
        topEightBattlersList: state.topEight.topEightBattlersList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTopEightLineup: newLineup => dispatch(updateTopEightLineup(newLineup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lineup);
