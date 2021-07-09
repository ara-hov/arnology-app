import "./steps-left.scss"

const StepsLeft = () =>{
    return(
        <div className="steps__list__left">
                {
                    [1,2,3,4].map((e,i)=>{
                        return(
                            <div className="steps__list__left__item">
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

export default StepsLeft