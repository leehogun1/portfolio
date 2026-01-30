import '../styles/footer.css'
import LogoM from '../assets/icons/logoM.svg?react'

function footer() {
    return (
        <>
            <footer>
                <div className='footer-inner'>
                    <div className='logo'>
                        <LogoM width={40} height={40} className='footer-logo' />
                        <h5>포트폴리오</h5>
                    </div>
                    <span className='p3'>Copyright © 2026 <p>Lee Seok-ho</p></span>
                </div>
            </footer>
        </>
    )
}

export default footer