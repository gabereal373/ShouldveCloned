import React , {useState}from 'react'
import { Link } from 'react-router-dom'
import { PayPalButton } from 'react-paypal-button-v2'
import {useDispatch, useSelector} from 'react-redux'
import {RegisterSearch} from '../components/RegisterSearchForm.js'
import {searchTeam} from '../actions/registerActions'
import {Alert} from 'react-bootstrap'




const PaymentScreen = () => {

    const Message = ({ variant, children }) => {
        return <Alert variant={variant}>{children}</Alert>
      }
      
      Message.defaultProps = {
        variant: 'info',
      }

        const [team_name, setTeamName] = useState(' ')
        const [contact_email, setEmail] = useState('')
        const [tournament_date, setTournDate] = useState('')
        const [rank, setTeamRank] = useState('')
        const [time_slot, setTimeSlot] = useState('')
        const [tournament_selection, setTournamentSelect] = useState('')
        const [message, setMessage] = useState(null)
        const dispatch = useDispatch()

        const search = useSelector(state => state.searchTeam)
        const {loading, error, searchResults} = search
        
        const submitHandler = (e) => {
            e.preventDefault();
            dispatch(searchTeam(team_name, contact_email, tournament_date, time_slot, rank, tournament_selection))
            console.log(team_name, contact_email, tournament_date, time_slot, rank, tournament_selection)
        }
     
                
        
 
  return (
      <div className="payment-container">
    
       {/* <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}
        {/* <!-- <Link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet"> --> */}
        <Link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap" rel="stylesheet"></Link>
        <Link rel="stylesheet" href="css/icon-font.css"></Link>
        <Link rel="stylesheet" href="css/style.css"></Link>

                <div>
                <form id="team-lookup" className="team-search-form">        
                    <div className="team-section">
                        <div className="your-name">
                            <label htmlFor="team-name"></label>
                        </div>
                            <h1>Check Your Payment Status</h1>
                            <div className="team-name">
                                <label htmlFor="team-name"></label>
                                <input type="text" placeholder="Team Name" id="team-name" value={team_name} onChange={(e) => setTeamName(e.target.value)}/>
                            </div>
                            <div className="team-email">
                                <label htmlFor="team-email"></label>
                                <input type="text" placeholder="Team Email" id="team-email" value={contact_email} onChange={(e) => setEmail(e.target.value)}/>
                            </div>
                            <br/>
                            <div className="time-slot-container" id="date-time">
                                <h5>Start date/time</h5>
                                <input type="time" id="time-slot" value={time_slot} onChange={(e) => setTimeSlot(e.target.value)}/>
                                <input type="date" id="date-slot" value={tournament_date} onChange={(e) => setTournDate(e.target.value)}/>
                            </div>
                            


                                <select name="teamSize" id="teamSize"  value={tournament_selection} onChange={(e) => setTournamentSelect(e.target.value)}>

                                    <option value="0" id="place_holder">Team Size</option>
                                    <option value="Duos" id="2" >Duos</option>
                                    <option value="Trios" id="3" >Trios</option>
                                    <option value="Quads" id="4">Quads</option>
                                </select>
                                <div>
                                </div>
                                <select name="rank" id="rank" value={rank} onChange={(e) => setTeamRank(e.target.value)}>

                                    <option value="0" id="place_holder">Rank</option>
                                    <option value="Amateur" id="2">Amateur</option>
                                    <option value="Intermediate" id="3">Intermediate</option>
                                    <option value="Pro" id="4">Pro</option>
                                </select>
                                <div className='message-container'>
                        {searchResults && <Message variant='danger'>{searchResults}</Message>}
                        {message && <Message variant='danger'>{message}</Message>}
                            {error && <Message variant='danger'>{error}</Message>}
                        </div>
                                </div>
                                <div className="register-button" href="#" method="POST" id="form-submit" className="btn btn--white btn--animated" onClick={submitHandler}>Search</div>
                                <div className="paypal-container">
                                <PayPalButton className="paypal"
                                        //   amount={order.totalPrice}
                                        //   onSuccess={successPaymentHandler}
                                        />
                                </div>
                            </form>
                </div>
                
          
<script src="/src/scores_styles.js"></script>

    </div>
     
  )
}

export default PaymentScreen