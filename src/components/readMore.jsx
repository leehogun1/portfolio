import '../styles/readMore.css'
import Icon from './icons/icons'

function readMore(props) {
    return (
        <>
                <div className='readMoreBox'>
                    <Icon name='Read More' width={20} height={20} className='readMore' />
                    <Icon name='Read More Hover' width={20} height={20} className='readMore-hover' />
                </div>
        </>
    )
}

export default readMore