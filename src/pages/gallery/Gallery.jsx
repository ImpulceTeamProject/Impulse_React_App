import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_3.jpg'
import {BiEditAlt} from 'react-icons/bi'
import {useState} from 'react'
import './gallery.css'
import ImageUpload from '../../components/ImageUpload'

const Gallery = () => {
  const galleryLength = 15;
  const images = [];

  for (let i = 1; i <= galleryLength; i++) {
    images.push({
      id: i,
      image: require(`../../images/gallery${i}.jpg`),
    })
  }
  
  const [list, setList] = useState(images);

  /* СПРОСИ КАК ЛУЧШЕ? */ 
  const HandleRemove = (id) => {
    console.log(list);
    // const deletVal=[...val]
    // deletVal.splice(i,1) КАК ЛУЧШЕ??????
    // setVal(deletVal)  
    const deleteImage = list.filter((l) => l.id !== id);
    setList (deleteImage);
  }

  return (
    <>
    <Header title="Our Gallery" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta ullam ea qui non ipsa. Ullam asperiores quaerat numquam aut fugit?
    </Header>
    <div className="gallery__btn-container">
      <button className='gallery__btn'><BiEditAlt/></button>
      <ImageUpload/>
    </div>
    <section className="gallery">
      <div className="container gallery__container">
        {
          list.map((data, i) => {
            return <article key={data.id}>
              <img src={data.image} alt={`Gallery Image ${data.id+ 1}`} />
              <span onClick={() => HandleRemove(data.id)}>delete TEST</span>
            </article>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Gallery