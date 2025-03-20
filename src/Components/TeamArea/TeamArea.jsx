import './TeamArea.css'
import Card from '../Card/Card';
function TeamArea(props) {
    const { cards, primaryColor, title,buttonEditNewVideo, buttonDeleteMain, cardKey} = props;
    const backgroundTitle = { backgroundColor: primaryColor };
    return (
        <>
        {
            cards.length > 0  &&
            <section className='team__container'>
                <h3
                    className='title'
                    style={backgroundTitle}
                >
                    <h3 >
                        {title}
                    </h3>
                </h3>
		<div className='video__container'>

                {
                cards.map((card)=><Card
                key={card.title}
                video={card.video}
                title={card.title}
                buttonDelete={buttonDeleteMain}
                buttonEdit={buttonEditNewVideo}
                />)
                }
            
        </div>

            </section>
        }
    </>
    )

}

export default TeamArea;

