import '../styles/skillBox.css'
import Icon from './icons/icons'

function skills(props) {
    return (
        <div className='skillBox'>
            <Icon name={props.skill} width={56} height={56} className={`${props.class ? props.class : 'icons'}`} />
            <h5>{props.name}</h5>
        </div>
    )
}

export default skills