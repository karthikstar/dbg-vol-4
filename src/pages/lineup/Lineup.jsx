import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateTopEightLineup } from '../../actions/lineupActions';
import { updateTopFourLineup } from '../../actions/lineupActions';
import { updateTopTwoLineup } from '../../actions/lineupActions';
import TextField from '@mui/material/TextField';
import dbgLogo from '../../assets/dbg_logo.png';
import dbgLineupBackground from '../../assets/dbg_lineup_background.png';
import './lineup.css';

const textLineupStyle = {
    color: "white",
    textAlign: "center",
    fontFamily: "Orbitron, Roboto, Verdana",
    fontWeight: "bold",
    fontSize: "16px"
}

const Lineup = (props) => {
    const [refreshLineup, setRefreshLineup] = useState(false)

    return (
        <div className="lineup-container">
            <div className="lineup__background">
                <img src={dbgLogo} className="lineup__background-dbg" />
                <img src={dbgLineupBackground} className="lineup__background-tree" />
            </div>
            <div className="lineup__header">
                <button className="lineup__header-buttons" onClick={() => {randomizeLineup(props.topFourList, false); setRefreshLineup((prev) => !prev);}}>
                    Randomize Top Four
                </button>
                <button className="lineup__header-buttons" onClick={() => {randomizeLineup(props.topEightList, true); setRefreshLineup((prev) => !prev);}}>
                    Randomize Top Eight
                </button>
            </div>
            <div className="lineup__content">
                <table className="lineup__content-table">
                    <tr className="lineup__content-table-row">
                        <td className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                multiline={true}
                                inputProps={{ style:textLineupStyle }}
                                className="lineup-text top-eight"
                                value={props.topEightList[0].name}
                                onChange={(event) => {changeNameInLineup(0, event.target.value, props.topEightList, "eight"); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                        <td rowspan="2" className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                multiline={true}
                                inputProps={{ style:textLineupStyle }}
                                className="lineup-text top-four"
                                value={props.topFourList[0].name}
                                onChange={(event) => {changeNameInLineup(0, event.target.value, props.topFourList, "four"); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                        <td rowspan="4" className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                multiline={true}
                                inputProps={{ style:textLineupStyle }}
                                className="lineup-text top-two"
                                value={props.topTwoList[0].name}
                                onChange={(event) => {changeNameInLineup(0, event.target.value, props.topTwoList, "two"); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                        <td rowspan="4" className="lineup__content-table-col">
                            <TextField 
                                label=" "
                                InputLabelProps={{shrink: false}}
                                multiline={true}
                                inputProps={{ style:textLineupStyle }}
                                className="lineup-text top-two"
                                value={props.topTwoList[1].name}
                                onChange={(event) => {changeNameInLineup(1, event.target.value, props.topTwoList, "two"); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                        <td rowspan="2" className="lineup__content-table-col">
                            <TextField 
                                label=" "
                                InputLabelProps={{shrink: false}}
                                multiline={true}
                                inputProps={{ style:textLineupStyle }}
                                className="lineup-text top-four"
                                value={props.topFourList[2].name}
                                onChange={(event) => {changeNameInLineup(2, event.target.value, props.topFourList, "four"); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                        <td className="lineup__content-table-col">
                            <TextField 
                                label=" "
                                InputLabelProps={{shrink: false}}
                                multiline={true}
                                inputProps={{ style:textLineupStyle }}
                                className="lineup-text top-eight"
                                value={props.topEightList[4].name}
                                onChange={(event) => {changeNameInLineup(4, event.target.value, props.topEightList, "eight"); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                    </tr>
                    <tr className="lineup__content-table-row">
                        <td className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                multiline={true}
                                inputProps={{ style:textLineupStyle }}
                                className="lineup-text top-eight"
                                value={props.topEightList[1].name}
                                onChange={(event) => {changeNameInLineup(1, event.target.value, props.topEightList, "eight"); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                        <td className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                multiline={true}
                                inputProps={{ style:textLineupStyle }}
                                className="lineup-text top-eight"
                                value={props.topEightList[5].name}
                                onChange={(event) => {changeNameInLineup(5, event.target.value, props.topEightList, "eight"); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                    </tr>
                    <tr className="lineup__content-table-row">
                        <td className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                multiline={true}
                                inputProps={{ style:textLineupStyle }}
                                className="lineup-text top-eight"
                                value={props.topEightList[2].name}
                                onChange={(event) => {changeNameInLineup(2, event.target.value, props.topEightList, "eight"); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                        <td rowspan="2" className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                multiline={true}
                                inputProps={{ style:textLineupStyle }}
                                className="lineup-text top-four"
                                value={props.topFourList[1].name}
                                onChange={(event) => {changeNameInLineup(1, event.target.value, props.topFourList, "four"); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                        <td rowspan="2" className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                multiline={true}
                                inputProps={{ style:textLineupStyle }}
                                className="lineup-text top-four"
                                value={props.topFourList[3].name}
                                onChange={(event) => {changeNameInLineup(3, event.target.value, props.topFourList, "four"); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                        <td className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                multiline={true}
                                inputProps={{ style:textLineupStyle }}
                                className="lineup-text top-eight"
                                value={props.topEightList[6].name}
                                onChange={(event) => {changeNameInLineup(6, event.target.value, props.topEightList, "eight"); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                    </tr>
                    <tr className="lineup__content-table-row">
                        <td className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}}
                                multiline={true}
                                inputProps={{ style:textLineupStyle }}
                                className="lineup-text top-eight"
                                value={props.topEightList[3].name}
                                onChange={(event) => {changeNameInLineup(3, event.target.value, props.topEightList, "eight"); setRefreshLineup((prev) => !prev);}}
                            />
                        </td>
                        <td className="lineup__content-table-col">
                            <TextField 
                                label=" " 
                                InputLabelProps={{shrink: false}} 
                                multiline={true}
                                inputProps={{ style:textLineupStyle }}
                                className="lineup-text top-eight"
                                value={props.topEightList[7].name}
                                onChange={(event) => {changeNameInLineup(7, event.target.value, props.topEightList, "eight"); setRefreshLineup((prev) => !prev);}}
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

const changeNameInLineup = (index, newName, lineup, listType) => {
    lineup[index] = { name: newName };
    if (listType = "eight") updateTopEightLineup(lineup);
    else if (listType = "four") updateTopFourLineup(lineup);
    else updateTopTwoLineup(lineup);
}

const mapStateToProps = state => {
    return {
        topEightList: state.lineup.topEightBattlersList,
        topFourList: state.lineup.topFourBattlersList,
        topTwoList: state.lineup.topTwoBattlersList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateTopEightLineup: newLineup => dispatch(updateTopEightLineup(newLineup)),
        updateTopFourLineup: newLineup => dispatch(updateTopFourLineup(newLineup)),
        updateTopTwoLineup: newLineup => dispatch(updateTopTwoLineup(newLineup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lineup);
