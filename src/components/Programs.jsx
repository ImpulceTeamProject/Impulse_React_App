import '../index'
import {FaCrown} from 'react-icons/fa'
import SectionHead from './SectionHead'
import {programs} from '../data.js'
import Card from '../UI/Card'
import { Link } from 'react-router-dom'
import {BsFillCaretRightFill} from 'react-icons/bs'

const Programs = () => {
  return (
    <section className="programs">
      <div className="container programs__container">
        <SectionHead icon={<FaCrown/>} title="Programs"/>
      </div>
      <div className="programs__wraper">
        {
          programs.map(({id, icon, title, info, path}) => {
            return (
              <Card className='programs__program' key={id}>
                <span>{icon}</span>
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">Узнать больше<BsFillCaretRightFill/></Link>
              </Card>
            )
          })
        }
      </div>
    </section>
  )
}

export default Programs