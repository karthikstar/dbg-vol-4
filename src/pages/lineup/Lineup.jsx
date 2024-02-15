import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateTopEightLineup } from '../../actions/lineupActions';
import { updateTopFourLineup } from '../../actions/lineupActions';
import { updateTopTwoLineup } from '../../actions/lineupActions';
import TextField from '@mui/material/TextField';
import mjLogo from '../../assets/mj_logo.png';
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
            {/* <div className="lineup__background">
                <img src={mjLogo} className="lineup__background-dbg" />
                <img src={dbgLineupBackground} className="lineup__background-tree" />
            </div> */}
            <div className="lineup__header">
                <button className="lineup__header-buttons" onClick={() => {randomizeLineup(props.topFourList, false, props); setRefreshLineup((prev) => !prev);}}>
                    Randomize Top Four
                </button>
                <button className="lineup__header-buttons" onClick={() => {randomizeLineup(props.topEightList, true, props); setRefreshLineup((prev) => !prev);}}>
                    Randomize Top Eight
                </button>
            </div>
            <div className="lineup__content">
                <table className="lineup__content-table">
                    <tbody>
                        <tr className="lineup__content-table-row">
                            <td className="lineup__content-table-col">
                                <TextField 
                                    label=" " 
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-eight"
                                    value={props.topEightList[0].name}
                                    onChange={(event) => {changeNameInLineup(0, event.target.value, props.topEightList, "eight", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                            <td rowSpan="2" className="lineup__content-table-col">
                                <TextField 
                                    label=" " 
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-four color-yellow"
                                    value={props.topFourList[0].name}
                                    onChange={(event) => {changeNameInLineup(0, event.target.value, props.topFourList, "four", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                            
                            <td rowSpan="2" className="lineup__content-table-col">
                                <TextField 
                                    label=" "
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-four color-red"
                                    value={props.topFourList[2].name}
                                    onChange={(event) => {changeNameInLineup(2, event.target.value, props.topFourList, "four", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                                                        <td rowSpan="2" className="lineup__content-table-col">
                                <TextField 
                                    label=" "
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-four color-blue"
                                    value={props.topFourList[2].name}
                                    onChange={(event) => {changeNameInLineup(2, event.target.value, props.topFourList, "four", props); 
                                        setRefreshLineup((prev) => !prev);}}
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
                                    onChange={(event) => {changeNameInLineup(4, event.target.value, props.topEightList, "eight", props); 
                                        setRefreshLineup((prev) => !prev);}}
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
                                    onChange={(event) => {changeNameInLineup(1, event.target.value, props.topEightList, "eight", props); 
                                        setRefreshLineup((prev) => !prev);}}
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
                                    onChange={(event) => {changeNameInLineup(5, event.target.value, props.topEightList, "eight", props); 
                                        setRefreshLineup((prev) => !prev);}}
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
                                    value={props.topEightList[0].name}
                                    onChange={(event) => {changeNameInLineup(0, event.target.value, props.topEightList, "eight", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                            <td rowSpan="2" className="lineup__content-table-col">
                                <TextField 
                                    label=" " 
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-four color-yellow"
                                    value={props.topFourList[0].name}
                                    onChange={(event) => {changeNameInLineup(0, event.target.value, props.topFourList, "four", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                            
                            <td rowSpan="2" className="lineup__content-table-col">
                                <TextField 
                                    label=" "
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-four color-red"
                                    value={props.topFourList[2].name}
                                    onChange={(event) => {changeNameInLineup(2, event.target.value, props.topFourList, "four", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                                                        <td rowSpan="2" className="lineup__content-table-col">
                                <TextField 
                                    label=" "
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-four color-blue"
                                    value={props.topFourList[2].name}
                                    onChange={(event) => {changeNameInLineup(2, event.target.value, props.topFourList, "four", props); 
                                        setRefreshLineup((prev) => !prev);}}
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
                                    onChange={(event) => {changeNameInLineup(4, event.target.value, props.topEightList, "eight", props); 
                                        setRefreshLineup((prev) => !prev);}}
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
                                    onChange={(event) => {changeNameInLineup(1, event.target.value, props.topEightList, "eight", props); 
                                        setRefreshLineup((prev) => !prev);}}
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
                                    onChange={(event) => {changeNameInLineup(5, event.target.value, props.topEightList, "eight", props); 
                                        setRefreshLineup((prev) => !prev);}}
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
                                    value={props.topEightList[0].name}
                                    onChange={(event) => {changeNameInLineup(0, event.target.value, props.topEightList, "eight", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                            <td rowSpan="2" className="lineup__content-table-col">
                                <TextField 
                                    label=" " 
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-four color-yellow"
                                    value={props.topFourList[0].name}
                                    onChange={(event) => {changeNameInLineup(0, event.target.value, props.topFourList, "four", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                            
                            <td rowSpan="2" className="lineup__content-table-col">
                                <TextField 
                                    label=" "
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-four color-red"
                                    value={props.topFourList[2].name}
                                    onChange={(event) => {changeNameInLineup(2, event.target.value, props.topFourList, "four", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                                                        <td rowSpan="2" className="lineup__content-table-col">
                                <TextField 
                                    label=" "
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-four color-blue"
                                    value={props.topFourList[2].name}
                                    onChange={(event) => {changeNameInLineup(2, event.target.value, props.topFourList, "four", props); 
                                        setRefreshLineup((prev) => !prev);}}
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
                                    onChange={(event) => {changeNameInLineup(4, event.target.value, props.topEightList, "eight", props); 
                                        setRefreshLineup((prev) => !prev);}}
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
                                    onChange={(event) => {changeNameInLineup(1, event.target.value, props.topEightList, "eight", props); 
                                        setRefreshLineup((prev) => !prev);}}
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
                                    onChange={(event) => {changeNameInLineup(5, event.target.value, props.topEightList, "eight", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                        </tr>

                        
                        
                    </tbody>
                </table>
            </div>
            
        </div>
    )

}

const randomizeLineup = (lineup, isTopEight, props) => {
    const sortedLineup = lineup.sort(() => Math.random() - 0.5);
    if (isTopEight) {
        updateTopEightLineup(sortedLineup)
        localStorage.setItem("lineup", JSON.stringify({ 
            topTwoBattlersList: props.topTwoList, 
            topFourBattlersList: props.topFourList,
            topEightBattlersList: sortedLineup
        }))
    } else { 
        updateTopFourLineup(sortedLineup);
        localStorage.setItem("lineup", JSON.stringify({ 
            topTwoBattlersList: props.topTwoList, 
            topFourBattlersList: sortedLineup,
            topEightBattlersList: props.topEightList
        }))
    }
}

const changeNameInLineup = (index, newName, lineup, listType, props) => {
    lineup[index] = { name: newName };
    if (listType == "eight") {
        updateTopEightLineup(lineup);
        localStorage.setItem("lineup", JSON.stringify({ 
            topTwoBattlersList: props.topTwoList, 
            topFourBattlersList: props.topFourList,
            topEightBattlersList: lineup
        }))
    } else if (listType == "four") {
        updateTopFourLineup(lineup);
        localStorage.setItem("lineup", JSON.stringify({ 
            topTwoBattlersList: props.topTwoList, 
            topFourBattlersList: lineup,
            topEightBattlersList: props.topEightList
        }))
    } else { 
        updateTopTwoLineup(lineup);
        localStorage.setItem("lineup", JSON.stringify({ 
            topTwoBattlersList: lineup, 
            topFourBattlersList: props.topFourList,
            topEightBattlersList: props.topEightList
        }))
    }
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
