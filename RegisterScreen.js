import React,{useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {Alert} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {registerTeam} from '../actions/registerActions'


const RegisterScreen = ({history}) => {
    const dispatch = useDispatch()

    const [team_name, setTeamName] = useState('')
    const [team_stream_link, setStreamLink] = useState('')
    const [contact_email, setEmail] = useState('')
    const [tournament_date, setTournDate] = useState('')
    const [rank, setTeamRank] = useState('')
    const [time_slot, setTimeSlot] = useState('')
    const [tournament_selection, setTournSelect] = useState('')
    const [message, setMessage] = useState(null)
    const [team1_name, setTeam1Name] = useState(' ')
    const [team1_activision, setTeam1Activision] = useState(' ')
    const [team1_KDR, setTeam1KDR] = useState(' ')
    const [team2_name, setTeam2Name] = useState(' ')
    const [team2_activision, setTeam2Activision] = useState(' ')
    const [team2_KDR, setTeam2KDR] = useState(' ')
    const [team3_name, setTeam3Name] = useState(' ')
    const [team3_activision, setTeam3Activision] = useState(' ')
    const [team3_KDR, setTeam3KDR] = useState(' ')
    const [team4_name, setTeam4Name] = useState(' ')
    const [team4_activision, setTeam4Activision] = useState(' ')
    const [team4_KDR, setTeam4KDR] = useState(' ')

    
    // // Time-slot-stuff
    const timeSlotButton = document.querySelector('.time-slot-button')
    const timeSlotOptions = document.querySelector('.time-slot-options')
    const timeSlot = document.querySelector('.time-slot')

    // timeSlot.addEventListener('click', function() {
    //     timeSlotButton.textContent = "Thank you!"
    // });




    const teamRegister = useSelector(state => state.registerTeam)
    const {loading, error, teamInfo} = teamRegister

    const Message = ({ variant, children }) => {
        return <Alert variant={variant}>{children}</Alert>
      }
      
      Message.defaultProps = {
        variant: 'info',
      }

    function formUpdate() {
        const teamSize = document.getElementById('teamSize').value;
        console.log('you did it!');

        if (teamSize == "Duos") {
            console.log("Bust out the marshmellows, 'cuz you're going camping")
            document.getElementById("tm-1").classList.remove('hidden')
            document.getElementById("tm-2").classList.remove("hidden")
            document.getElementById("tm-3").classList.add("hidden")
            document.getElementById("tm-4").classList.add("hidden")
            setTournSelect('Duos')
        } else if (teamSize == "Trios") {
            console.log("you have selected the muthafuckin tio-bomb kehd.");
            document.getElementById("tm-1").classList.remove('hidden')            
            document.getElementById("tm-2").classList.remove('hidden')            
            document.getElementById("tm-3").classList.remove('hidden')  
            document.getElementById("tm-4").classList.add("hidden")  
            setTournSelect('Trios')        

 
            
        } else if (teamSize == "Quads") {
            console.log("Quads")
            document.getElementById("tm-1").classList.remove('hidden')
            document.getElementById("tm-2").classList.remove('hidden')
            document.getElementById("tm-3").classList.remove('hidden')
            document.getElementById("tm-4").classList.remove('hidden')
            setTournSelect('Quads')
            


        }
        
        
    }


    const submitHandler = (e) => {
        e.preventDefault()
       const team_info = {
             member1_name : team1_name,
             member1_activision_acct : team1_activision,
             member1_KDR: team1_KDR,
             member2_name : team2_name,
             member2_activision_acct : team2_activision,
             member2_KDR: team2_KDR,
             member3_name : team3_name,
             member3_activision_acct : team3_activision,
             member3_KDR: team3_KDR,
             member4_name : team4_name,
             member4_activision_acct : team4_activision,
             member4_KDR: team4_KDR,

             }

            dispatch(registerTeam(team_name, team_stream_link, contact_email, tournament_date, time_slot,rank, team_info, tournament_selection))
            console.log(time_slot)
        }
    
  
    return (
        <>
       {/* <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}
        {/* <!-- <Link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet"> --> */}
        <Link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap" rel="stylesheet"></Link>
        <Link rel="stylesheet" href="css/icon-font.css"></Link>
        <Link rel="stylesheet" href="css/style.css"></Link>

        <title>Backseat Gaming</title>
            <div className="form-box">
                <form id="team-registration" className="form">        
                    <div className="team-section">
                        <div className="your-name">
                            <label htmlFor="team-name">Team Name</label>
                        </div>
                            <h1>Sign up for next tournament</h1>
                            <div className="team-name">
                                <label htmlFor="team-name"></label>
                                <input type="text" placeholder="Team Name" id="team-name" value={team_name} onChange={(e) => setTeamName(e.target.value)}/>
                            </div>
                            <div className="team-email">
                                <label htmlFor="team-email"></label>
                                <input type="text" placeholder="Team Email" id="team-email" value={contact_email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <div className="team_stream_link">
                                <label htmlFor="team-name"></label>
                                <input type="text" placeholder="Stream Link" id="stream-link"value={team_stream_link} onChange={(e) => setStreamLink(e.target.value)}/>
                            </div>
                            <br/>
                            <div className="time-slot-container" id="date-time">
                                <h5>Start date/time</h5>
                                {/* <input type="time" id="time-slot"  onChange={(e) => setTimeSlot(e.target.value)}/> */}
                                <input type="date" id="date-slot"  onChange={(e) => setTournDate(e.target.value)}/>
                                <div className="dropdown-container">
                                    <button className="time-slot-button" value={time_slot} onChange={(e) => setTimeSlot(e.target.value)}>Pick a time</button>
                                    <div className="time-slot-options">
                                        <button className="time-slot" value="0:00">12:00 AM</button>
                                        <button className="time-slot" value="0:30">12:30 AM</button>
                                        <button className="time-slot" value="1:00">1:00 AM</button>
                                        <button className="time-slot" value="1:30">1:30 AM</button>
                                        <button className="time-slot" value="2:00">2:00 AM</button>
                                        <button className="time-slot" value="2:30">2:30 AM</button>
                                        <button className="time-slot" value="3:00">3:00 AM</button>
                                        <button className="time-slot" value="3:30">3:30 AM</button>
                                        <button className="time-slot" value="4:00">4:00 AM</button>
                                        <button className="time-slot" value="4:30">4:30 AM</button>
                                        <button className="time-slot" value="5:00">5:00 AM</button>
                                        <button className="time-slot" value="5:30">5:30 AM</button>
                                        <button className="time-slot" value="6:00">6:00 AM</button>
                                        <button className="time-slot" value="6:30">6:30 AM</button>
                                        <button className="time-slot" value="7:00">7:00 AM</button>
                                        <button className="time-slot" value="7:30">7:30 AM</button>
                                        <button className="time-slot" value="8:00">8:00 AM</button>
                                        <button className="time-slot" value="8:30">8:30 AM</button>
                                        <button className="time-slot" value="9:00">9:00 AM</button>
                                        <button className="time-slot" value="9:30">9:30 AM</button>
                                        <button className="time-slot" value="10:00">10:00 AM</button>
                                        <button className="time-slot" value="10:30">10:30 AM</button>
                                        <button className="time-slot" value="11:00">11:00 AM</button>
                                        <button className="time-slot" value="11:30">11:30 AM</button>
                                        <button className="time-slot" value="12:00">12:00 PM</button>
                                        <button className="time-slot" value="12:30">12:30 PM</button>
                                        <button className="time-slot" value="13:00">1:00 PM</button>
                                        <button className="time-slot" value="13:30">1:30 PM</button>
                                        <button className="time-slot" value="14:00">2:00 PM</button>
                                        <button className="time-slot" value="14:30">2:30 PM</button>
                                        <button className="time-slot" value="15:00">3:00 PM</button>
                                        <button className="time-slot" value="15:30">3:30 PM</button>
                                        <button className="time-slot" value="16:00">4:00 PM</button>
                                        <button className="time-slot" value="16:30">4:30 PM</button>
                                        <button className="time-slot" value="17:00">5:00 PM</button>
                                        <button className="time-slot" value="17:30">5:30 PM</button>
                                        <button className="time-slot" value="18:00">6:00 PM</button>
                                        <button className="time-slot" value="18:30">6:30 PM</button>
                                        <button className="time-slot" value="19:00">7:00 PM</button>
                                        <button className="time-slot" value="19:30">7:30 PM</button>
                                        <button className="time-slot" value="20:00">8:00 PM</button>
                                        <button className="time-slot" value="20:30">8:30 PM</button>
                                        <button className="time-slot" value="21:00">9:00 PM</button>
                                        <button className="time-slot" value="21:30">9:30 PM</button>
                                        <button className="time-slot" value="22:00">10:00 PM</button>
                                        <button className="time-slot" value="22:30">10:30 PM</button>
                                        <button className="time-slot" value="23:00">11:00 PM</button>
                                        <button className="time-slot" value="23:30">11:30 PM</button>
                                    </div>
                                </div>
                            </div>
                                <select name="teamSize" id="teamSize" onChange={formUpdate}>

                                    <option value="0" id="place_holder">Team Size</option>
                                    <option value="Duos" id="2" onChange={(e) => setTournSelect(e.target.value)}>Duos</option>
                                    <option value="Trios" id="3" onChange={(e) => setTournSelect(e.target.value)}>Trios</option>
                                    <option value="Quads" id="4" onChange={(e) => setTournSelect(e.target.value)}>Quads</option>
                                </select>
                                <div>
                                </div>
                                <select name="rank" id="rank" value={rank} onChange={(e) => setTeamRank(e.target.value)}>

                                    <option value="0" id="place_holder">Rank</option>
                                    <option value="Amateur" id="2">Amateur</option>
                                    <option value="Intermediate" id="3">Intermediate</option>
                                    <option value="Pro" id="4">Pro</option>
                                </select>
            


                            <form>
                            {/* <!-- Not Displayed by Default --> */}
                            <div className="team_size" id ='team-info'>
                                <div id="tm-1" className="info-block hidden">
                                    <div className="h1">Team Member #1</div>
                                    <label htmlFor="tm-1" className="tm-1"></label>
                                    <input type="text" placeholder="Name" id="member1-name" value ={team1_name} onChange={(e) => setTeam1Name(e.target.value)}/>
                                    <label htmlFor="tm-1" className="tm-1"></label>
                                    <input type="text" placeholder="Activision Number" id="member1-account" value ={team1_activision} onChange={(e) => setTeam1Activision(e.target.value)}/>
                                    <label htmlFor="tm-1" className="tm-1"></label>
                                    <input type="number" placeholder="KDR" step=".01" min="0" max="10" id="member1-KDR" value ={team1_KDR} onChange={(e) => setTeam1KDR(e.target.value)}/>
                                </div> 

                                <div id="tm-2" className="info-block hidden">
                                    <div className="h1">Team member #2</div>
                                    <label htmlFor="tm-2" className="tm-2"></label>
                                    <input type="text" placeholder="name" id="member2-name"value ={team2_name} onChange={(e) => setTeam2Name(e.target.value)}/>
                                    <label htmlFor="tm-2" className="tm-2"></label>
                                    <input type="text" placeholder="Activision Number" id="member2-account" value ={team2_activision} onChange={(e) => setTeam2Activision(e.target.value)}/>
                                    <label htmlFor="tm-2" className="tm-2"></label>
                                    <input type="number" placeholder="KDR" step=".01" min="0" max="10" id="member2-KDR" value ={team2_KDR} onChange={(e) => setTeam2KDR(e.target.value)}/>
                                </div>
                                <div id="tm-3" className="info-block hidden">
                                    <div className="h1">Team member #3</div>
                                    <label htmlFor="tm-3" className="tm-3"></label>
                                    <input type="text" placeholder="Name" id="member3-name" value ={team3_name} onChange={(e) => setTeam3Name(e.target.value)}/>
                                    <label htmlFor="tm-3" className="tm-3"></label>
                                    <input type="text" placeholder="Activision Number" id="member3-account" value ={team3_activision} onChange={(e) => setTeam3Activision(e.target.value)}/>
                                    <label htmlFor="tm-3" className="tm-3"></label>
                                    <input type="number" placeholder="KDR" step=".01" min="0" max="10" id="member3-KDR" value ={team3_KDR} onChange={(e) => setTeam3KDR(e.target.value)}/>
                                </div> 
                                <div id="tm-4" className="info-block hidden">
                                    <div className="h1">Team member #4</div>
                                    <label htmlFor="tm-4" className="tm-4"></label>
                                    <input type="text" placeholder="Name" id="member4-name" value ={team4_name} onChange={(e) => setTeam4Name(e.target.value)}/>
                                    <label htmlFor="tm-4" className="tm-4"></label>
                                    <input type="text" placeholder="Activision Number" id="member4-account" value ={team4_activision} onChange={(e) => setTeam4Activision(e.target.value)}/>
                                    <label htmlFor="tm-4" className="tm-4"></label>
                                    <input type="number" placeholder="KDR" step=".01" min="0" max="10" id="member4-KDR" value ={team4_KDR} onChange={(e) => setTeam4KDR(e.target.value)}/>
                                </div> 
                            </div>
                            </form>
                        </div>


  
                        {/* <!-- M rated game, probably should verify age --> */}
                        <br/>
                        <div className='message-container'>
                        {teamInfo && <Message variant='danger'>You have Been Registered. Don't forget to <Link to='/payment'>Pay!</Link></Message>}    
                        {message && <Message variant='danger'>{message}</Message>}
                            {error && <Message variant='danger'>You have not filled out all forms correctly</Message>}
                        </div>

                    <div className="register-button" href="#" method="POST" id="form-submit" className="btn btn--white btn--animated" onClick={submitHandler}>Register</div>
                </form>
            </div>
            

    </>

    )
}

export default RegisterScreen
