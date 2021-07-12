import { ServicesRefProps } from "../../model"
import "./services-navbar.scss"

const ServicesNavbar = ({fend,be,de,mob}:ServicesRefProps) =>{
    const servicesArray = [
        {text:"Backend Web Development",ref:be},{text:"Frontend Web Development",ref:fend},{text:"Mobile Development",ref:mob},{text:"Product Design",ref:de}
    ]

    const scrollHandler = (e:any) =>{
                      window.scrollTo({behavior:'smooth',top:e?.current?.offsetTop-100})
    }
           return(
        <div className="services__navbar">
            {servicesArray.map((e,i)=>{
                return(
                    <p key={i} onClick={()=>scrollHandler(e.ref)}>{e.text}</p>
                )
            })}
        </div>
    )
}

export default ServicesNavbar