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
    fontFamily: "Open Sauce One",
    fontWeight: "bold",
    fontSize: "16px"
}

const Lineup = (props) => {
    // console.log(props)
    const [refreshLineup, setRefreshLineup] = useState(false)

    return (
        <div className="lineup-container">
            {/* <div className="lineup__background">
                <img src={mjLogo} className="lineup__background-dbg" />
                <img src={dbgLineupBackground} className="lineup__background-tree" />
            </div> */}
            <div className="lineup__header">
                <button className="lineup__header-buttons" onClick={() => {randomizeLineup(props.topFourList, false, props); setRefreshLineup((prev) => !prev);}}>
                    Randomize Top Six
                </button>
                <button className="lineup__header-buttons" onClick={() => {randomizeLineup(props.topEightList, true, props); setRefreshLineup((prev) => !prev);}}>
                    Randomize Top Twelve
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
                                    className="lineup-text top-eight color-one"
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
                                    className="lineup-text top-four color-one"
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
                                    className="lineup-text top-two color-orange"
                                    value={props.topTwoList[0].name}
                                    onChange={(event) => {changeNameInLineup(0, event.target.value, props.topTwoList, "two", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                                                        <td rowSpan="2" className="lineup__content-table-col">
                                <TextField 
                                    label=" "
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-four color-two"
                                    value={props.topFourList[1].name}
                                    onChange={(event) => {changeNameInLineup(1, event.target.value, props.topFourList, "four", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                            
                            <td className="lineup__content-table-col">
                                <TextField 
                                    label=" "
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-eight color-two"
                                    value={props.topEightList[1].name}
                                    onChange={(event) => {changeNameInLineup(1, event.target.value, props.topEightList, "eight", props); 
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
                                    className="lineup-text top-eight color-one"
                                    value={props.topEightList[2].name}
                                    onChange={(event) => {changeNameInLineup(2, event.target.value, props.topEightList, "eight", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                            <td className="lineup__content-table-col">
                                <TextField 
                                    label=" " 
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-eight color-two"
                                    value={props.topEightList[3].name}
                                    onChange={(event) => {changeNameInLineup(3, event.target.value, props.topEightList, "eight", props); 
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
                                    className="lineup-text top-eight color-three"
                                    value={props.topEightList[4].name}
                                    onChange={(event) => {changeNameInLineup(4, event.target.value, props.topEightList, "eight", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                            <td rowSpan="2" className="lineup__content-table-col">
                                <TextField 
                                    label=" " 
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-four color-three"
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
                                    className="lineup-text top-two color-orange"
                                    value={props.topTwoList[1].name}
                                    onChange={(event) => {changeNameInLineup(1, event.target.value, props.topTwoList, "two", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                                                        <td rowSpan="2" className="lineup__content-table-col">
                                <TextField 
                                    label=" "
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-four color-four"
                                    value={props.topFourList[3].name}
                                    onChange={(event) => {changeNameInLineup(3, event.target.value, props.topFourList, "four", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                            
                            <td className="lineup__content-table-col">
                                <TextField 
                                    label=" "
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-eight color-four"
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
                                    className="lineup-text top-eight color-three"
                                    value={props.topEightList[6].name}
                                    onChange={(event) => {changeNameInLineup(6, event.target.value, props.topEightList, "eight", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                            <td className="lineup__content-table-col">
                                <TextField 
                                    label=" " 
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-eight color-four"
                                    value={props.topEightList[7].name}
                                    onChange={(event) => {changeNameInLineup(7, event.target.value, props.topEightList, "eight", props); 
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
                                    className="lineup-text top-eight color-five"
                                    value={props.topEightList[8].name}
                                    onChange={(event) => {changeNameInLineup(8, event.target.value, props.topEightList, "eight", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                            <td rowSpan="2" className="lineup__content-table-col">
                                <TextField 
                                    label=" " 
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-four color-five"
                                    value={props.topFourList[4].name}
                                    onChange={(event) => {changeNameInLineup(4, event.target.value, props.topFourList, "four", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                            
                            <td rowSpan="2" className="lineup__content-table-col">
                                <TextField 
                                    label=" "
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-two color-orange"
                                    value={props.topTwoList[2].name}
                                    onChange={(event) => {changeNameInLineup(2, event.target.value, props.topTwoList, "two", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                                                        <td rowSpan="2" className="lineup__content-table-col">
                                <TextField 
                                    label=" "
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-four color-six"
                                    value={props.topFourList[5].name}
                                    onChange={(event) => {changeNameInLineup(5, event.target.value, props.topFourList, "four", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                            
                            <td className="lineup__content-table-col">
                                <TextField 
                                    label=" "
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-eight color-six"
                                    value={props.topEightList[9].name}
                                    onChange={(event) => {changeNameInLineup(9, event.target.value, props.topEightList, "eight", props); 
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
                                    className="lineup-text top-eight color-five"
                                    value={props.topEightList[10].name}
                                    onChange={(event) => {changeNameInLineup(10, event.target.value, props.topEightList, "eight", props); 
                                        setRefreshLineup((prev) => !prev);}}
                                />
                            </td>
                            <td className="lineup__content-table-col">
                                <TextField 
                                    label=" " 
                                    InputLabelProps={{shrink: false}}
                                    multiline={true}
                                    inputProps={{ style:textLineupStyle }}
                                    className="lineup-text top-eight color-six"
                                    value={props.topEightList[11].name}
                                    onChange={(event) => {changeNameInLineup(11, event.target.value, props.topEightList, "eight", props); 
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
    console.log(lineup)
    // const sortedLineup = lineup.sort(() => Math.random() - 0.5);
    if (isTopEight) {
        const sortedLineup = lineup.sort(() => Math.random() - 0.5);
        updateTopEightLineup(sortedLineup)
        localStorage.setItem("lineup", JSON.stringify({ 
            topTwoBattlersList: props.topTwoList, 
            topFourBattlersList: props.topFourList,
            topEightBattlersList: sortedLineup
        }))
    } else { 
        const purple = lineup[3]

        console.log("purple:", purple)

        const beforePurple = lineup.slice(0, 3)
        console.log("before purple:", beforePurple)

        const afterPurple = lineup.slice(4, 6)
        console.log("after purple:", afterPurple)

        const mergedBeforeAfter = beforePurple.concat(afterPurple)
        console.log("mergedBeforeAfter", mergedBeforeAfter)

        const sortedMerge = mergedBeforeAfter.sort(() => Math.random() - 0.5);
        console.log("sortedMerge", sortedMerge)

        let sortedLineup = []
        sortedLineup.push(sortedMerge[0])
        sortedLineup.push(sortedMerge[1])
        sortedLineup.push(sortedMerge[2])
        sortedLineup.push(purple)
        sortedLineup.push(sortedMerge[3])
        sortedLineup.push(sortedMerge[4])

        console.log("sorted: ", sortedLineup)
        // const sortedLineup = lineup.sort(() => Math.random() - 0.5);
        updateTopFourLineup(sortedLineup);
        localStorage.setItem("lineup", JSON.stringify({ 
            topTwoBattlersList: props.topTwoList, 
            topFourBattlersList: sortedLineup,
            topEightBattlersList: props.topEightList
        }))
        window.location.reload()
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
