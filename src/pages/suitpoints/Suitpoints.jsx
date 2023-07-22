import React, { useState } from 'react';
import { connect } from 'react-redux';
import TextField from '@mui/material/TextField';
import diamondSuitLogo from '../../assets/diamondSuitLogo.png';
import heartSuitLogo from '../../assets/heartSuitLogo.png';
import clubSuitLogo from '../../assets/clubSuitLogo.png';
import spadeSuitLogo from '../../assets/spadeSuitLogo.png';
import { updateSuitPoints } from '../../actions/suitActions';
import './suitpoints.css';

const textLineupStyle = {
    color: "white",
    textAlign: "center",
    fontFamily: "Orbitron, Roboto, Verdana",
    fontWeight: "bold",
    fontSize: "56px"
}

const Suitpoints = (props) => {
    const [refreshLineup, setRefreshLineup] = useState(false)

    return (
        <div className="suit-container">
            <p className="suit-heading">TOP 32 SUIT POINTS</p>
            <div className="suit-firstrow">
                <div className="card-container">
                    <div className="card__logotitle">
                        <img src={diamondSuitLogo} alt='diamond logo' className="card__logotitle-logo" />
                        <p className="card__logotitle-title">DIAMOND</p>
                        <img src={diamondSuitLogo} alt='diamond logo' className="card__logotitle-logo" />
                    </div>
                    <div className="card__scoreboard">
                        <TextField 
                            label=" " 
                            InputLabelProps={{shrink: false}} 
                            className="card__scoreboard-points"
                            inputProps={{ style:textLineupStyle }}
                            value={props.suitPointsList[0].points}
                            onChange={(event) => {changeSuitPoints(0, event.target.value, props.suitPointsList); setRefreshLineup((prev) => !prev);}}
                        />
                    </div>
                </div>
                <div className="card-container">
                    <div className="card__logotitle">
                        <img src={clubSuitLogo} alt='club logo' className="card__logotitle-logo" />
                        <p className="card__logotitle-title">CLUB</p>
                        <img src={clubSuitLogo} alt='club logo' className="card__logotitle-logo" />
                    </div>
                    <div className="card__scoreboard">
                        <TextField 
                            label=" " 
                            InputLabelProps={{shrink: false}} 
                            className="card__scoreboard-points"
                            inputProps={{ style:textLineupStyle }}
                            value={props.suitPointsList[1].points}
                            onChange={(event) => {changeSuitPoints(1, event.target.value, props.suitPointsList); setRefreshLineup((prev) => !prev);}}
                        />
                    </div>
                </div>
            </div>
            <div className="suit-secondrow">
                <div className="card-container">
                    <div className="card__logotitle">
                        <img src={heartSuitLogo} alt='heart logo' className="card__logotitle-logo" />
                        <p className="card__logotitle-title">HEART</p>
                        <img src={heartSuitLogo} alt='heart logo' className="card__logotitle-logo" />
                    </div>
                    <div className="card__scoreboard">
                        <TextField 
                            label=" " 
                            InputLabelProps={{shrink: false}} 
                            className="card__scoreboard-points"
                            inputProps={{ style:textLineupStyle }}
                            value={props.suitPointsList[2].points}
                            onChange={(event) => {changeSuitPoints(2, event.target.value, props.suitPointsList); setRefreshLineup((prev) => !prev);}}
                        />
                    </div>
                </div>
                <div className="card-container">
                    <div className="card__logotitle">
                        <img src={spadeSuitLogo} alt='spade logo' className="card__logotitle-logo" />
                        <p className="card__logotitle-title">SPADE</p>
                        <img src={spadeSuitLogo} alt='spade logo' className="card__logotitle-logo" />
                    </div>
                    <div className="card__scoreboard">
                        <TextField 
                            label=" " 
                            InputLabelProps={{shrink: false}} 
                            className="card__scoreboard-points"
                            inputProps={{ style:textLineupStyle }}
                            value={props.suitPointsList[3].points}
                            onChange={(event) => {changeSuitPoints(3, event.target.value, props.suitPointsList); setRefreshLineup((prev) => !prev);}}
                        />
                    </div>
                </div>
            </div>
        </div>

        
    )
}

const changeSuitPoints = (index, newPoints, suitPointsList) => {
    suitPointsList[index] = { points: newPoints };
    localStorage.setItem("suit", JSON.stringify({suitPointsList: suitPointsList}));
    updateSuitPoints(suitPointsList);
}

const mapStateToProps = state => {
    return {
        suitPointsList: state.suit.suitPointsList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updateSuitPoints: newPointsList => dispatch(updateSuitPoints(newPointsList))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Suitpoints);
