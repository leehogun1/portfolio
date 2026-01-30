import '../styles/mySkill.css'
import SkillBox from '../components/skillBox'

function mySkill({ refProp }) {
    return (
        <section className="skill-sec" ref={refProp}>
            <div className="skill-inner">
                <div className="title">
                    <span className='display-text'>My </span>
                    <span className='display-text extra-bold'>Skills</span>
                </div>
                <div className='skill-boxs'>
                    <div className='row'>
                        <SkillBox name="Javascript" skill="icon-javscript" />
                        <SkillBox name="react" skill="icon-react" class="react-svg" />
                        <SkillBox name="nodejs" skill="icon-nodejs" class="node-svg" />
                        <SkillBox name="java" skill="java-icon" class="java-svg" />
                        <SkillBox name="springboot" skill="springboot" />
                        <SkillBox name="mySQL" skill="mysql" />
                        <SkillBox name="git" skill="icon-git" />
                        <SkillBox name="github" skill="github" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default mySkill