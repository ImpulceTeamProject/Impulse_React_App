import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil ut minus obcaecati optio praesentium! Modi quia error quas laborum reprehenderit?
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Our story image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi, praesentium laboriosam quisquam harum aut. Sit numquam distinctio hic dignissimos?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellat natus dolorem aliquam eos maiores voluptatibus alias facere fugit, nemo illum minima ducimus, ipsa a veniam molestiae incidunt. Sit, explicabo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laboriosam soluta sed unde maxime! Tempore fugiat totam tenetur sit aliquam, iusto quas officiis facilis? Corrupti deserunt nam exercitationem! Inventore, molestias.</p>
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi, praesentium laboriosam quisquam harum aut. Sit numquam distinctio hic dignissimos?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellat natus dolorem aliquam eos maiores voluptatibus alias facere fugit, nemo illum minima ducimus, ipsa a veniam molestiae incidunt. Sit, explicabo?</p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our vision image" />
        </div>
      </div>
    </section>
    
    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Our mission image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nisi, praesentium laboriosam quisquam harum aut. Sit numquam distinctio hic dignissimos?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores repellat natus dolorem aliquam eos maiores voluptatibus alias facere fugit, nemo illum minima ducimus, ipsa a veniam molestiae incidunt. Sit, explicabo?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laboriosam soluta sed unde maxime! Tempore fugiat totam tenetur sit aliquam, iusto quas officiis facilis? Corrupti deserunt nam exercitationem! Inventore, molestias.</p>
        </div>
      </div>
    </section>
    </>
  )
}

export default About