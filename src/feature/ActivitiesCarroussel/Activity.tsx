import './styles/Activity.css'

export const Activity = ({
    talkers = [], talkTitle, talkLink
} : any) => {

    return (
        <div className="activity">
            <a href={talkLink ?? '#'} target="_blank" rel="noreferrer" className="activity_link">

                <div className="activity_talk">
                    <h3>{talkTitle}</h3>
                </div>
                {talkers.map((talker : any) => (
                    <div 
                        className="activity_talker"
                        key={talker.nome}>
                        <img 
                            src={talker.foto} 
                            alt="foto do palestrante"
                        />
                        <h4>
                            {talker.nome}
                        </h4>
                    </div>
                ))}
            </a>
        </div>
    )
}