import '../styles/readMore.css'
import Icon from './icons/icons'
import { Link } from 'react-router-dom'

function readMore(props) {
    return (
        <>
            <Link to={`/detail/${props.no}`}>
                <a className='readMoreBox'>
                    <Icon name='Read More' width={20} height={20} className='readMore' />
                    <Icon name='Read More Hover' width={20} height={20} className='readMore-hover' />
                </a>
            </Link>
        </>
    )
}

export default readMore