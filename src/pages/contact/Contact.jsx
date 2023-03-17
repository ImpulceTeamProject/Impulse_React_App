import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_2.jpg'
import {MdEmail} from 'react-icons/md'
import {FaTelegram} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import './contact.css'

const Contact = () => {
  return (
    <>
    <Header title="Get In Touch" image={HeaderImage}>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, sunt?
    </Header>
    <section className="contact">
      <div className='container contact__container'>
        <div className="contact__wrapper">
          <a href="mailto:danchick_v2001@mail.ru" target="_blank" rel='noreferrer noopener'><MdEmail/></a>
          <a href="https://t.me/anton_zaika" target="_blank" rel='noreferrer noopener'><FaTelegram/></a>
          <a href="https://wa.me/79270761369" target="_blank" rel='noreferrer noopener'><IoLogoWhatsapp/></a>
        </div>
      </div>
    </section>
    </>
  )
}

export default Contact