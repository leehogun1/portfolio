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
                        <span className='p2'>저는 항상 개발을 하면서 가장 중요하게 생각하는 것은 사용자가 어떻게 서비스를 편하게 받아들일까 생각하였습니다.</span>
                        <span className='p2'>검색을 하고 다시 돌아왔을 때 검색어가 유지가 되거나 돌아가기를 눌러도 돌아오도록 하고
                            렌더링을 빠르게 하여 사용자가 불편함을 겪게 하지 않도록 하는 방향으로 생각해왔습니다.
                        </span>
                        <span className='p2'>
                            앞으로도 많은 기술들을 배우고 노력하여 더 나은 서비스를 제공하는 개발자가 되고 싶습니다.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default aboutUs