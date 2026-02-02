import '../styles/hero.css'
import Sns from '../components/snsBox'
import HeroImg from '../assets/myPhoto.webp'

function Hero({ refProp }) {
    return (
        <section className='hero' ref={refProp}>
            <div className="hero-inner">
                <div className='heroImg-sec'>
                    <img src={HeroImg} alt='hero-img'></img>
                </div>
                <div className='heroText-sec'>
                    <div className='hero-title'>
                        <p>
                            <span className='display-text'>사용자 화면 구현을 중심으로 UI 구조와 동작 흐름을 고민해 온 </span>
                            <span className='outlined extra-bold'>신입 개발자 </span>
                            <span className='display-text extra-bold'>이석호 </span>
                            <span className='display-text'>입니다. </span>
                        </p>
                    </div>
                    <span className='p2'>JavaScript 기반 화면 개발 경험을 바탕으로, 사용자 동선에 맞는 UI 구성과 유지보수하기 쉬운 코드 작성을 지향하고 있습니다.</span>
                    <p className='p1'>이메일 : world419@naver.com </p>
                    <p className='p1'>전화번호 : 010-5295-7909 </p>
                </div>
            </div>
            <div className='Social-sec'>
                <a href="https://open.kakao.com/o/gPq60Zdi" target='_blanck'><Sns name="Social icon"></Sns></a>
                <a href='https://www.instagram.com/leeseokho1997' target='_blank'><Sns name="Social icon-1"></Sns></a>
                <a href="https://github.com/leehogun1" target='_blank'><Sns name="Social icon-2"></Sns></a>
                <a href="https://discord.com/users/1074380092203081840" target='_blank'><Sns name="Social icon-3" className='icon'></Sns></a>
            </div>
        </section>
    )
}

export default Hero