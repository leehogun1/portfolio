import '../styles/aboutUs.css'
import AboutUsImg from '../assets/aboutUs-img.png'

function aboutUs({ refProp }) {
    return (
        <section className='aboutUs-sec' ref={refProp}>
            <div className='aboutUs-inner'>
                <div className='aboutUs-img'>
                    <img src={AboutUsImg} alt='aboutUs-img'></img>
                </div>
                <div className='aboutUs-contents'>
                    <div className='aboutUs-title'>
                        <span className='display-text'>About </span>
                        <span className='display-text extra-bold'>me</span>
                    </div>
                    <div className='aboutUs-texts'>
                        <span className='p2'>사용자 경험을 중심으로 화면을 구현하는 프론트엔드 개발자입니다.
                            JavaScript 기반 웹 UI 구현과 사용 흐름 개선에 관심이 많습니다.</span>
                        <span className='p2'>프론트엔드 개발에서는 특히 렌더링 속도와 사용 편의성에 신경 써왔습니다.
                            불필요한 렌더링을 줄이고, 사용자가 페이지를 이용하면서 불편함을 느끼지 않도록 UI 구조와 동작 흐름을 지속적으로 개선하려 노력했습니다.</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default aboutUs