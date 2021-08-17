import StepsLeft from "./components/steps-left/StepsLeft"
import StepsRight from "./components/steps-right/StepsRight"
import StepsMid from './components/steps-mid/steps-mid';
import "./services-steps.scss"

const ServicesSteps = () =>{
    return(
        <div className="services__steps">
            <h2 className="services__steps--title">How it goes, step by step</h2>
            <p className="services__steps--text"> 
                We use a traditional software development lifecycle in order to keep the 
                process open, transparent, and give you a clear road map to the successful
                conclusion of your project
            </p>
            <div className="services__steps__list">
                <StepsLeft/>
                <StepsMid/>
                <StepsRight/>
            </div>
        </div>
    )
}

export default ServicesSteps