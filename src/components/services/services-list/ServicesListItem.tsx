import bedev from "../../../assets/images/bedev.png"
import "./services-list-item.scss"
import { ServicesRefProps } from "../../model"
const ServicesListItem = ({fend,be,de,mob}: ServicesRefProps) =>{
    const servicesListData = [
        {
            title:"Backend Web Development",
            subtitle:"Powering your application",
            text:"Rock-solid, reliable backend development ensures your business logic works as it should.",
            link:"",
            left:true,
            img:bedev,
            ref:be
        },
        {
            title:"Frontend Web Development",
            subtitle:"Interfaces that delight",
            text:"Frontend development sits at the intersection of 3 pillars clean code, beautiful design and intuitive usability. We guarantee all three.",
            link:"",
            left:false,
            img:bedev,
            ref:fend
        },
        {
            title:"Mobile Development",
            subtitle:"Useful Apps",
            text:"We build innovative iOS and Android applications for a variety of industries and use-cases.",
            link:"",
            left:true,
            img:bedev,
            ref:mob
        },
        {
            title:"Product design",
            subtitle:"Beautiful and usable ",
            text:"Our design team designs beautiful software products that are intuitive, functional, and a joy to use.",
            link:"",
            left:false,
            img:bedev,
            ref:de
        }
    ]
    return(
        <div className="services__list">
            {
                servicesListData.map((e,i)=>{
                    return(
                        <div className={`services__list__item ${e.left ? "services__list__itemLeft":"services__list__itemRight"}`} key={i} ref={e.ref} onClick={()=>console.log(e.ref)}>
                            <div className="services__list__item__text">
                                <h2>{e.title}</h2>
                                <p className="services__list__item__text--subtitle">{e.subtitle}</p>
                                <p className="services__list__item__text--txt">{e.text}</p>
                                <a href={e.link}>
                                    Read More
                                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="12.629" viewBox="0 0 26 12.629">
                                        <path fill="#03989b" d="M25.745 6.161L19.1.581a.732.732 0 0 0-1.021.08.707.707 0 0 0 .081 1.007l5.168 4.343H.724a.714.714 0 1 0 0 1.428H23.3l-5.133 4.344a.707.707 0 0 0-.078 1.007.731.731 0 0 0 1.022.076l6.64-5.619a.707.707 0 0 0 0-1.085z" transform="translate(0 -.41)"/>
                                    </svg>
                                </a>
                            </div>
                            <div className="services__list__item__img">
                                 <img src={e.img} alt="list-item" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default ServicesListItem