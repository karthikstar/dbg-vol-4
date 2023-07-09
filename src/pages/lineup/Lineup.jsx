import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { updateTopEightLineup } from '../../actions/topEightActions';
import Card from '../../components/card/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './lineup.css';

const Lineup = (props) => {
    const [refreshLineup, setRefreshLineup] = useState(false) // bad code

    console.log("lineup", props.topEightBattlersList);
    console.log("first ", props.topEightBattlersList[0].name);
    // if (props.topEightBattlersList.length === 0){
    //     return <div style={{ color: "white" }}> Loading </div>
    // }
    return (
        <div>
            <button onClick={() => {randomizeLineup(props.topEightBattlersList); setRefreshLineup((prev) => !prev); console.log("yes");}}>
                Randomize
            </button>
            {props.topEightBattlersList.map(battler => {
                return (
                    <p style={{ color: "white" }}>{battler.name}</p>
                )
            })}

            <table>
                <tr>
                    <td>
                        <TextField 
                            label=" " 
                            InputLabelProps={{shrink: false}}
                            className="lineup-text top-eight"
                            value={props.topEightBattlersList[0].name}
                            onChange={(event) => {changeNameInEightLineup(0, event.target.value, props.topEightBattlersList); setRefreshLineup((prev) => !prev);}}
                        />
                    </td>
                    <td rowspan="2">
                        <TextField 
                            label=" " 
                            InputLabelProps={{shrink: false}}
                            className="lineup-text top-four"
                        />
                    </td>
                    <td rowspan="4">
                        <TextField 
                            label=" " 
                            InputLabelProps={{shrink: false}}
                            className="lineup-text top-two"
                        />
                    </td>
                    <td rowspan="4">
                        <TextField 
                            label=" "
                            InputLabelProps={{shrink: false}}
                            className="lineup-text top-two"
                        />
                    </td>
                    <td rowspan="2">
                        <TextField 
                            label=" "
                            InputLabelProps={{shrink: false}}
                            className="lineup-text top-four"
                        />
                    </td>
                    <td>
                        <TextField 
                            label=" "
                            InputLabelProps={{shrink: false}}
                            className="lineup-text top-eight"
                            value={props.topEightBattlersList[4].name}
                            onChange={(event) => {changeNameInEightLineup(4, event.target.value, props.topEightBattlersList); setRefreshLineup((prev) => !prev);}}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <TextField 
                            label=" " 
                            InputLabelProps={{shrink: false}}
                            className="lineup-text top-eight"
                            value={props.topEightBattlersList[1].name}
                            onChange={(event) => {changeNameInEightLineup(1, event.target.value, props.topEightBattlersList); setRefreshLineup((prev) => !prev);}}
                        />
                    </td>
                    <td>
                        <TextField 
                            label=" " 
                            InputLabelProps={{shrink: false}}
                            className="lineup-text top-eight"
                            value={props.topEightBattlersList[5].name}
                            onChange={(event) => {changeNameInEightLineup(5, event.target.value, props.topEightBattlersList); setRefreshLineup((prev) => !prev);}}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <TextField 
                            label=" " 
                            InputLabelProps={{shrink: false}}
                            className="lineup-text top-eight"
                            value={props.topEightBattlersList[2].name}
                            onChange={(event) => {changeNameInEightLineup(2, event.target.value, props.topEightBattlersList); setRefreshLineup((prev) => !prev);}}
                        />
                    </td>
                    <td rowspan="2">
                        <TextField 
                            label=" " 
                            InputLabelProps={{shrink: false}}
                            className="lineup-text top-four"
                        />
                    </td>
                    <td rowspan="2">
                        <TextField 
                            label=" " 
                            InputLabelProps={{shrink: false}}
                            className="lineup-text top-four"
                        />
                    </td>
                    <td>
                        <TextField 
                            label=" " 
                            InputLabelProps={{shrink: false}}
                            className="lineup-text top-eight"
                            value={props.topEightBattlersList[6].name}
                            onChange={(event) => {changeNameInEightLineup(6, event.target.value, props.topEightBattlersList); setRefreshLineup((prev) => !prev);}}
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <TextField 
                            label=" " 
                            InputLabelProps={{shrink: false}}
                            className="lineup-text top-eight"
                            value={props.topEightBattlersList[3].name}
                            onChange={(event) => {changeNameInEightLineup(3, event.target.value, props.topEightBattlersList); setRefreshLineup((prev) => !prev);}}
                        />
                    </td>
                    <td>
                        <TextField 
                            label=" " 
                            InputLabelProps={{shrink: false}} 
                            className="lineup-text top-eight"
                            value={props.topEightBattlersList[7].name}
                            onChange={(event) => {changeNameInEightLineup(7, event.target.value, props.topEightBattlersList); setRefreshLineup((prev) => !prev);}}
                        />
                    </td>
                </tr>
            </table>
        </div>
    )

}

const randomizeLineup = (lineup) => {
    const sortedLineup = lineup.sort(() => Math.random() - 0.5);
    updateTopEightLineup(sortedLineup);
    console.log("sorted", sortedLineup);
}

const changeNameInEightLineup = (index, newName, lineup) => {
    lineup[index] = { name: newName };
    updateTopEightLineup(lineup);
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
