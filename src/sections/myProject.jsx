import '../styles/myProject.css'
import ReadMore from '../components/readMore'
import projectImg1 from '../assets/project1-img.webp'

function myProject({ refProp }) {
    return (
        <section className='project-sec' id="project-sec" ref={refProp}>
            <div className='project-inner'>
                <div className='project-title'>
                    <span className='display-text'>My </span>
                    <span className='display-text extra-bold'>Projects</span>
                </div>
                <div className='project-left'>
                    <div className='projectImg-sec'>
                        <img src={projectImg1} alt='project-1-img'></img>
                    </div>
                    <div className='project-left-contents'>
                        <span className='display-text project-no'>01</span>
                        <h2 className='bold project-name'>문화유산 통합 정보 플랫폼</h2>
                        <span className="p2">문화재청 공공 API를 기반으로 문화유산 데이터를 수집·정제하여
                            지도, 게시판, 뉴스, 반환 연표 형태로 제공하는 통합 문화유산 정보 플랫폼입니다.
                            문화유산을 일상 속에서 자연스럽게 접할 수 있도록 하여, 사용자들의 관심을 높이는 것을 목표로 했습니다.</span>
                        <ReadMore no='1'></ReadMore>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default myProject