import React, { useState, useEffect } from 'react';
import './Gallery.scss'
import sanityClient from "../client.js";



const Gallery = () => {
  const [postData, setPost] = useState(null);
  
  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "gallery"] | order(_createdAt desc) {
          title,
          images[]{
            alt,
            asset->{
              url}
            }
          }`
      )
      .then((data) => setPost(data))
      .catch(console.error);
  }, []);
  
  console.log(postData)

  return !postData ? <>Loading...</> : (
    <main>
    {postData?.map((gallery) => (
        <React.Fragment key={gallery.title} >
          <section className=''>
            <h1 className=''>{gallery.title}</h1>
          </section>

            <section className=''>
            <div className="gallery__container">
          {gallery.images?.map(image => (
              <div className="image__container" key={image.alt}>
                <img className='gallery__image'  src={image.asset.url} alt={image.alt} />
                <a className='image__description-container' href={image.asset.url} target="_blank" rel="noopener noreferrer">
                  <article className='image__description'>
                  {image.alt}
                  </article>
                </a>
              </div>
              ))}
              
            </div>
          </section>
        </React.Fragment>
      ))} 
    </main>
  )
}

export default Gallery