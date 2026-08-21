import './styles/Activity.css'

export const Activity = ({
    img , talkerName , talkTitle, talkSubtitle
} : any) => {

    return (
        <div className="activity">
            <div className="activity_talker">
                <img src={img} alt="foto do palestrante" />
                <h4>{talkerName}</h4>
            </div>
            <div className="activity_talk">
                <h3>{talkTitle}</h3>
                <h6>{talkSubtitle}</h6>
            </div>
        </div>
    )
}