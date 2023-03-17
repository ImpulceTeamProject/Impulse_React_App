import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_5.jpg'
import {trainers} from '../../data'
import {BsInstagram} from 'react-icons/bs'
import {FaTelegram} from 'react-icons/fa'
import Trainer from '../../components/Trainer'
import './trainers.css'

const Trainers = () => {
  return (
    <>
    <Header title="Our trainers" image={HeaderImage}>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam, sapiente incidunt adipisci culpa accusamus laborum voluptate esse vero aliquid suscipit?
    </Header>
    <section className="trainers">
      <div className="container trainers__container">
        {
          trainers.map(({id, image, name, job, socials}) => {
            return <Trainer key={id} image={image} name={name} job={job} socials={
              [
                {icon: <BsInstagram/>, link: socials[0]},
                {icon: <FaTelegram/>, link: socials[1]},
              ]
            }/>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Trainers