import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { updateTopEightLineup } from '../../actions/topEightActions';
import Card from '../../components/card/Card';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './lineup.css';
import { updateTopFourLineup } from '../../actions/topFourActions';

const Lineup = (props) => {
    const [refreshLineup, setRefreshLineup] = useState(false)

    return (
        <div className="lineup-container">
            <div className="lineup__header">
                <button className="lineup__header-buttons" onClick={() => {randomizeLineup(props.topEightList, true); setRefreshLineup((prev) => !prev);}}>
                    Randomize Top Eight
                </button>
                <button className="lineup__header-buttons" onClick={() => {randomizeLineup(props.topFourList, false); setRefreshLineup((prev) => !prev);}}>
                    Randomize Top Four
                </button>
            </div>
            <div className="lineup__content">
                <table className="lineup__content-table">
                    <tr className="lineup__content-table-row">
                        <td className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                className="lineup-text top-eight"
                                value={props.topEightList[0].name}
                                onChange={(event) => {changeNameInLineup(0, event.target.value, props.topEightList, true); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                        <td rowspan="2" className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                className="lineup-text top-four"
                                value={props.topFourList[0].name}
                                onChange={(event) => {changeNameInLineup(0, event.target.value, props.topFourList, false); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                        <td rowspan="4" className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                className="lineup-text top-two"
                            />
                        </td>
                        <td rowspan="4" className="lineup__content-table-col">
                            <TextField 
                                label=" "
                                InputLabelProps={{shrink: false}}
                                className="lineup-text top-two"
                            />
                        </td>
                        <td rowspan="2" className="lineup__content-table-col">
                            <TextField 
                                label=" "
                                InputLabelProps={{shrink: false}}
                                className="lineup-text top-four"
                                value={props.topFourList[2].name}
                                onChange={(event) => {changeNameInLineup(2, event.target.value, props.topFourList, false); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                        <td className="lineup__content-table-col">
                            <TextField 
                                label=" "
                                InputLabelProps={{shrink: false}}
                                className="lineup-text top-eight"
                                value={props.topEightList[4].name}
                                onChange={(event) => {changeNameInLineup(4, event.target.value, props.topEightList, true); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                    </tr>
                    <tr className="lineup__content-table-row">
                        <td className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                className="lineup-text top-eight"
                                value={props.topEightList[1].name}
                                onChange={(event) => {changeNameInLineup(1, event.target.value, props.topEightList, true); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                        <td className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                className="lineup-text top-eight"
                                value={props.topEightList[5].name}
                                onChange={(event) => {changeNameInLineup(5, event.target.value, props.topEightList, true); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                    </tr>
                    <tr className="lineup__content-table-row">
                        <td className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                className="lineup-text top-eight"
                                value={props.topEightList[2].name}
                                onChange={(event) => {changeNameInLineup(2, event.target.value, props.topEightList, true); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                        <td rowspan="2" className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                className="lineup-text top-four"
                                value={props.topFourList[1].name}
                                onChange={(event) => {changeNameInLineup(1, event.target.value, props.topFourList, false); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                        <td rowspan="2" className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                className="lineup-text top-four"
                                value={props.topFourList[3].name}
                                onChange={(event) => {changeNameInLineup(3, event.target.value, props.topFourList, false); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                        <td className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                className="lineup-text top-eight"
                                value={props.topEightList[6].name}
                                onChange={(event) => {changeNameInLineup(6, event.target.value, props.topEightList, true); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                    </tr>
                    <tr className="lineup__content-table-row">
                        <td className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                className="lineup-text top-eight"
                                value={props.topEightList[3].name}
                                onChange={(event) => {changeNameInLineup(3, event.target.value, props.topEightList, true); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                        <td className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}} 
                                className="lineup-text top-eight"
                                value={props.topEightList[7].name}
                                onChange={(event) => {changeNameInLineup(7, event.target.value, props.topEightList, true); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                    </tr>
                </table>
            </div>
            
        </div>
    )

}

const randomizeLineup = (lineup, isTopEight) => {
    const sortedLineup = lineup.sort(() => Math.random() - 0.5);
    isTopEight ? updateTopEightLineup(sortedLineup) : updateTopFourLineup(sortedLineup);
}

const changeNameInLineup = (index, newName, lineup, isTopEight) => {
    lineup[index] = { name: newName };
    isTopEight ? updateTopEightLineup(lineup) : updateTopFourLineup(lineup);
}

const mapStateToProps = state => {
    return {
        topEightList: state.topEight.topEightBattlersList,
        topFourList: state.topFour.topFourBattlersList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTopEightLineup: newLineup => dispatch(updateTopEightLineup(newLineup)),
        updateTopFourLineup: newLineup => dispatch(updateTopFourLineup(newLineup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lineup);
