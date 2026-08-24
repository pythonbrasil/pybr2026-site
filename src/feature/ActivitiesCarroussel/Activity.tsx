import { Image } from '../../components/Image'
import './styles/Activity.css'

export const Activity = ({
    talkers = [], talkTitle, talkLink, counterCat
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
                        <Image 
                            image={talker.foto} 
                            alt="foto do palestrante"
                            counterCat={counterCat}
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