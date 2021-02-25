import React from 'react'
import { Link } from 'react-router-dom'




const RulesScreen = () => {


    const text = `1.) A valid stream link must be submitted with your registration.
    This stream must be active for the entirety of your time period.




    2.) Tournaments last 3 hours unless specified. You must start your
     first game and your lastgame within this time period for it to be counted.




    3.) Points are awarded for various things:

                1 kill = 1 point
                1500 damage = 1 point
                1 contract complete = 0.5 point


                1st Place = 25 points
                2nd Place = 20 points
                3rd Place = 15 points
                Top 10 = 10 points

    
    4.) The payment is $15 per person. That is $60 for a Quads team, $45 for a trios, and $30 for a duos. The prize will be 80% of the total submissions. Payments MUST be made before the start of the tournament. 
    You can use your information to look up your registrations and payment status.
    


    5.) Scores must be submitted within 24 hours after your tournament ends. 
    Submissions exceeding 24 hours will not be counted.
    


    6.) Winners will be announced within 24 hours of a tournament day
    


    7.) Cheating of any kind will not be tolerated. Cheating will result in a ban
    from all future Backseat Gaming events
    


    8.) Due to the nature of the game, all participants must be at least 18 
    years of age or be under the supervision of a legal guardian during the tournament
    


    9.) Your team's KDR will determine your tournament. Admins will 
    check your KDR with your Activision account. The ranking system is in the table below.
    
    10.) Good luck and Good hunting!`

const Renderer = () =>
    <div>
        {text.split('\n\n').map(paragraph =>
            <p>
                {paragraph.split('\n').reduce((total, line) => [total, <br />, line])}
            </p>
        )}
    </div>
 
  return (
      
      <div className="rules-container">
      <div>
       {/* <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}
        {/* <!-- <Link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet"> --> */}
        <Link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap" rel="stylesheet"></Link>
        <Link rel="stylesheet" href="css/icon-font.css"></Link>
        <Link rel="stylesheet" href="css/style.css"></Link>

        <title>Backseat Gaming</title>
            <div className="rule-textbox">
                <h1 className="rule-header">The Rules</h1>
                <br/>
                <div className="rules-text">
                <Renderer className='renderer'/>
                </div>
                <div className="table-title"><span id="titleTxt">Combined KDR Per Team</span></div>
                <div className="table-container">
            <table  text='fuck' className="content-table">
                <thead>
                    <tr>
                        <th>Tourament Type</th>
                        <th>Amatuer</th>
                        <th>Intermediate</th>
                        <th>Pro</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="active-row">
                        <td>Quads</td>
                        <td>4.0</td>
                        <td>6.0</td>
                        <td>8.0</td>
                    </tr>
                    <tr className="active-row">
                        <td>Trios</td>
                        <td>3.0</td>
                        <td>4.5</td>
                        <td>6.0</td>
                    </tr>
                    <tr className="active-row">
                        <td>Duos</td>
                        <td>2.0</td>
                        <td>3.0</td>
                        <td>4.0</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
            </div>
<script src="/src/scores_styles.js"></script>

    </div>
    </div>
     
  )
}

export default RulesScreen