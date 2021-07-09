import "./steps-right.scss"

const StepsRight = () => {
    return(
        <div className="steps__list__right">
            {
                [1,2,3].map((e,i)=>{
                    return(
                        <div className="steps__list__right__item">
                            <h4>Planning</h4>
                            <p>
                                Our team examines your requirements 
                                and expectations, takes account of your 
                                needs, and creates a preliminary plan 
                                for your approval
                            </p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StepsRight