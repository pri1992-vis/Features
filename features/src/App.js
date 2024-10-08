import React from 'react'
import './App.css'
import InstructorLed from './InstructorLed'
import OnlineWebinar from './OnlineWebinar'
import CoursePortals from './CoursePortals'
import Timed from './Timed'
import Groupmocks from './Groupmocks'

const WhiteboxLearning=()=>{
  return(
    <div className='whitebox-learning'><center>
      <h1>What is Whitebox Learning? </h1>
      <p> Whitebox Learning(WBL) is a classroom and online based training<br/>
          platform for developers and ML & data engineers.
      </p>
      </center>
      <div className="whitebox-learning-container">
        < InstructorLed />
        < OnlineWebinar/>
        < CoursePortals/>
        <OnlineWebinar />
        <Timed />
        <Groupmocks/>

      </div>
    </div>

  )
}
export default WhiteboxLearning

