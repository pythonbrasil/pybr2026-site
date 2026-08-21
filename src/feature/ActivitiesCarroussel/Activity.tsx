import './styles/Activity.css'

export const Activity = ({
    talkers = [], talkTitle, talkSubtitle
} : any) => {

    return (
        <div className="activity">
            {talkers.map((talker : any) => (
                <div 
                    className="activity_talker"
                    key={talker.nome}
                >
                    <img 
                        src={talker.foto} 
                        alt="foto do palestrante"
                    />
                    <h4>
                        {talker.nome}
                    </h4>
                </div>
            ))}
            <div className="activity_talk">
                <h3>{talkTitle}</h3>
                <h6>{talkSubtitle}</h6>
            </div>
        </div>
    )
}