import '../styles/snsBox.css'
import Icon from './icons/icons'

function snsBox(props) {
    return (
        <div className='snsBox'>
            <Icon name={props.name} width={20} height={20} className='icons' />
        </div>
    )
}

export default snsBox