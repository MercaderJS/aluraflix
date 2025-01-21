import './TeamArea.css'
import CardTeam from '../CardTeam/CardTeam'

function TeamArea(props) {
    const { colorPrimario, colorSecundario, categoria } = props.datos
    const { cards } = props
    const backgroundTitle = { backgroundColor: colorPrimario }
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
                        {categoria}
                    </h3>
                </h3>
                {
                        cards.map((cards, indice) => <CardTeam
                            cards={cards}
                            key={indice}
                            colorPrimario={colorPrimario}
                        />)
                    }


            </section> 
        }
    </>
    )

}

export default TeamArea


