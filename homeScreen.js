import React from 'react'
import { Link } from 'react-router-dom'




const HomeScreen = () => {


    

  console.log('Home Screen')
 
  return (
      <div className="home-container">
      <div>
       {/* <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> */}
        {/* <!-- <Link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900" rel="stylesheet"> --> */}
        <Link href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap" rel="stylesheet"></Link>
        <Link rel="stylesheet" href="css/icon-font.css"></Link>
        <Link rel="stylesheet" href="css/style.css"></Link>

        <title>Backseat Gaming</title>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main weekly-tournaments">Weekly Tournaments</span>
                </h1>

                <a href="/register" className="btn btn--white btn--animated">Register</a>
                <a href="/score" className="btn btn--white btn--animated">Submit Scorecard</a>
                <a href="/rules" className="btn btn--white btn--animated">Rules</a>
                <a href="/payment" className="btn btn--white btn--animated">Payment</a>
            </div>
<script src="/src/scores_styles.js"></script>

    </div>
    </div>
     
  )
}

export default HomeScreen