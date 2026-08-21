import './styles/Slide.css'

export const Slide = ({
    img , talkerName , talkTitle, talkSubtitle, variant = ""
} : any) => {
    return (
        <div className={`ActivitiesCarroussel_Slide ${variant}`}>
            <div className={`ActivitiesCarroussel_Slide_talker ${variant}`}>
                <img src={img} alt="foto do palestrante" />
                <h4>{talkerName}</h4>
            </div>
            <div className={`ActivitiesCarroussel_Slide_talk ${variant}`}>
                <h3>{talkTitle}</h3>
                <h6>{talkSubtitle}</h6>
            </div>
        </div>
    )
}