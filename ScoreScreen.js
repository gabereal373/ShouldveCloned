import React, {useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { submitScore } from '../actions/scoreCardActions'
import {Alert} from 'react-bootstrap'

const ScoreScreen = ({history}) => {

    const dispatch = useDispatch()

    const score = useSelector(state => state.scoreSub)
    const {loading, error, scoreCard} = score

    const Message = ({ variant, children }) => {
        return <Alert variant={variant}>{children}</Alert>
      }
      
      Message.defaultProps = {
        variant: 'info',
      }


    const [team_name, setTeamName] = useState('')
    const [contact_email, setEmail] = useState('')
    const [tournament_date, setTournamentDate] = useState('')
    const [tournament_selection, setTournamentSelect] = useState('')
    const [rank, setTeamRank] = useState('')
    const [time_slot, setTimeSlot] = useState('')
    const [game1_damage, setGame1Damage] = useState('')
    const [game1_kills, setGame1Kills] = useState('')
    const [game1_placement, setGame1Placement] = useState('')
    const [game1_contracts, setGame1Contracts] = useState('')
    const [game2_damage, setGame2Damage] = useState('')
    const [game2_kills, setGame2Kills] = useState('')
    const [game2_placement, setGame2Placement] = useState('')
    const [game2_contracts, setGame2Contracts] = useState('')
    const [game3_damage, setGame3Damage] = useState('')
    const [game3_kills, setGame3Kills] = useState('')
    const [game3_placement, setGame3Placement] = useState('')
    const [game3_contracts, setGame3Contracts] = useState('')
    const [game4_damage, setGame4Damage] = useState('')
    const [game4_kills, setGame4Kills] = useState('')
    const [game4_placement, setGame4Placement] = useState('')
    const [game4_contracts, setGame4Contracts] = useState('')
    const [message, setMessage] = useState(null)

    const submitHandler = (e) => {
        // e.prevent.default()
        const game1_information = {
            combined_kills: game1_kills,
            combined_damage: game1_damage,
            contracts_completed: game1_contracts,
            team_placement: game1_placement
        }
        const game2_information = {
            combined_kills: game2_kills,
            combined_damage: game2_damage,
            contracts_completed: game2_contracts,
            team_placement: game2_placement
        }
        const game3_information = {
            combined_kills: game3_kills,
            combined_damage: game3_damage,
            contracts_completed: game3_contracts,
            team_placement: game3_placement
        }
        const game4_information = {
            combined_kills: game4_kills,
            combined_damage: game4_damage,
            contracts_completed: game4_contracts,
            team_placement: game4_placement
        }

            dispatch(submitScore(team_name, tournament_selection, contact_email, tournament_date, rank, time_slot, game1_information, game2_information, game3_information, game4_information))
            console.log(game4_information)
            console.log(game3_information)
            console.log(game2_information)
            console.log(game1_information)
            console.log(time_slot)
            console.log(error)
        
    }



    return (
       <>
            <div className="form-box">
                <form id="score-submission" action="/submitted" method="POST" className="form">        
                    <div className="team-section">
                        <div className="your-name">
                            <label htmlFor="team-name"></label>
                        </div>
                            <div className="scores-submission-header">Scores Submission</div>
                            <div className="team-name">
                                <label htmlFor="team-name"></label>
                                <input type="text" placeholder="Team Name" id="team-name" value={team_name} onChange={(e) => setTeamName(e.target.value)}/>
                            </div>
                            <div className="team-eamil">
                                <label htmlFor="team-email"></label>
                                <input type="text" placeholder="Team Email" id="team-email" value={contact_email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div> 
                            </div>
                            <select name="teamSize" id="teamSize" value={tournament_selection} onChange={(e) => setTournamentSelect(e.target.value)}>

                                <option value="0" id="place_holder">Team Size</option>
                                <option value="Duos" id="2">Duos</option>
                                <option value="Trios" id="3">Trios</option>
                                <option value="Quads" id="4">Quads</option>
                            </select>
                            <div>
                                <select name="rank" id="rank" value={rank} onChange={(e) => setTeamRank(e.target.value)}>

                                    <option value="0" id="place_holder">Rank</option>
                                    <option value="Amateur" id="2">Amateur</option>
                                    <option value="Intermediate" id="3">Intermediate</option>
                                    <option value="Pro" id="4">Pro</option>
                                </select>
                            </div>
                            <br/>
                            <div className="time-slot-container">
                                <div className="start-date">Start date/time</div>
                                <input type="time" id="time-slot" value="0:00" step="1800" value={time_slot} onChange={(e) => setTimeSlot(e.target.value)}/>
                                <input type="date" id="date-slot" value="2021-01-24" value={tournament_date} onChange={(e) => setTournamentDate(e.target.value)}/>
                            </div>
                
                            </div>
                            <div className="results-container" id="score-card">
                                <div className="results__game-1">
                                    <div className="info-block">
                                        <div className="h1" id="game-1">Game #1</div>
                                        <label htmlFor="combined-kills" className="combined-kills"></label>
                                        <input type="text" placeholder="combined kills" id="1-combined-kills" value={game1_kills} onChange={(e) => setGame1Kills(e.target.value)}/>
                                        <label htmlFor="combined-damage" className="combined-damage"></label>
                                        <input type="text" placeholder="combined damage" id="1-combined-damage" value={game1_damage} onChange={(e) => setGame1Damage(e.target.value)}/>
                                        <label htmlFor="contacts-completed" className="contacts-completed"></label>
                                        <input type="text" placeholder="contacts completed" id="1-contracts-complete" value={game1_contracts} onChange={(e) => setGame1Contracts(e.target.value)}/>
                                        <label htmlFor="team-placement" className="team-placement"></label>
                                        <input type="text" placeholder="team placement" id="1-team-placement" value={game1_placement} onChange={(e) => setGame1Placement(e.target.value)}/>
                                    </div> 
                                </div>
                                <div className="results__game-2">
                                    <div className="info-block">
                                        <div className="h1">Game #2</div>
                                        <label htmlFor="combined-kills" className="combined-kills"></label>
                                        <input type="text" placeholder="combined kills" id="2-combined-kills"value={game2_kills} onChange={(e) => setGame2Kills(e.target.value)}/>
                                        <label htmlFor="combined-damage" className="combined-damage"></label>
                                        <input type="text" placeholder="combined damage" id="2-combined-damage" value={game2_damage} onChange={(e) => setGame2Damage(e.target.value)}/>
                                        <label htmlFor="contacts-completed" className="contacts-completed"></label>
                                        <input type="text" placeholder="contacts completed" id="2-contracts-complete" value={game2_contracts} onChange={(e) => setGame2Contracts(e.target.value)}/>
                                        <label htmlFor="team-placement" className="team-placement"></label>
                                        <input type="text" placeholder="team placement" id="2-team-placement" value={game2_placement} onChange={(e) => setGame2Placement(e.target.value)}/>
                                    </div> 
                                </div>
                                <div className="results__game-3">
                                    <div className="info-block">
                                        <div className="h1">Game #3</div>
                                        <label htmlFor="combined-kills" className="combined-kills"></label>
                                        <input type="text" placeholder="combined kills" id="3-combined-kills" value={game3_kills} onChange={(e) => setGame3Kills(e.target.value)}/>
                                        <label htmlFor="combined-damage" className="combined-damage"></label>
                                        <input type="text" placeholder="combined damage" id="3-combined-damage" value={game3_damage} onChange={(e) => setGame3Damage(e.target.value)}/>
                                        <label htmlFor="contacts-completed" className="contacts-completed"></label>
                                        <input type="text" placeholder="contacts completed" id="3-contracts-complete" value={game3_contracts} onChange={(e) => setGame3Contracts(e.target.value)}/>
                                        <label htmlFor="team-placement" className="team-placement"></label>
                                        <input type="text" placeholder="team placement" id="3-team-placement" value={game3_placement} onChange={(e) => setGame3Placement(e.target.value)}/>
                                    </div> 
                                </div>
                                <div className="results__game-4">
                                    <div className="info-block">
                                        <div className="h1">Game #4</div>
                                        <label htmlFor="combined-kills" className="combined-kills"></label>
                                        <input type="text" placeholder="combined kills" id="4-combined-kills"value={game4_kills} onChange={(e) => setGame4Kills(e.target.value)}/>
                                        <label htmlFor="combined-damage" className="combined-damage"></label>
                                        <input type="text" placeholder="combined damage" id="4-combined-damage" value={game4_damage} onChange={(e) => setGame4Damage(e.target.value)}/>
                                        <label htmlFor="contacts-completed" className="contacts-completed"></label>
                                        <input type="text" placeholder="contacts completed" id="4-contracts-complete"value={game4_contracts} onChange={(e) => setGame4Contracts(e.target.value)}/>
                                        <label htmlFor="team-placement" className="team-placement"></label>
                                        <input type="text" placeholder="team placement" id="4-team-placement" value={game4_placement} onChange={(e) => setGame4Placement(e.target.value)}></input>
                                    </div> 
                                </div>
                            </div>


  
                        {/* <!-- M rated game, probably should verify age --> */}
                       
                        <div className='message-container'>
                        {message && <Message variant='danger'>{message}</Message>}
                            {error && <Message variant='danger'>{error}</Message>}
                        </div>
                    <a  id="form-submit" className="btn btn--white btn--animated" onClick={submitHandler}>Submit</a>
                </form>
            </div>
       </>
    )
}

export default ScoreScreen
