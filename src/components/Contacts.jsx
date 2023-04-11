import React from 'react';

import "./Contacts.scss";


const Contacts = () => {
  return (
    <div className='container2'>
      <section class='contacts' id='contacts'>
        <h2 class='contacts__title'>Send me a message</h2>
        <div class='contacts__container'>
          <form class='contacts__form'>
            <label for='name' class='contacts__label contacts__label-name'>
              Name
            </label>
            <input
              class='contacts__input contacts__input-text'
              type='text'
              name='name'
              id='name'
              placeholder='Name'
              required
            />
            <label for='email' class='contacts__label contacts__label-email'>
              Email
            </label>
            <input
              class='contacts__input contacts__input-email'
              type='email'
              name='email'
              id='email'
              maxlength='23'
              placeholder='Email'
              required
            />
            <label for='message' class='contacts__label contacts__label-message'>
              Message
            </label>
            <div
              contenteditable='true'
              class='contacts__input contacts__input-message'
              name='message'
              id='message'
              data-placeholder='Message'
              placeholder='Message'
              required></div>
            <button class='button contacts__button'>Send</button>
          </form>
          <div class='contacts__info'>
            <div class='contacts__item'>
              <h3 class='contacts__subtitle'>Phone</h3>
              <a class='contacts__text' href='tel:+1 234 5555-55-55'>
                +XX XXXXX
              </a>
            </div>
            <div class='contacts__item'>
              <h3 class='contacts__subtitle'>Email</h3>
              <a class='contacts__text' href='mailto:jakub.photography@photo.com'>
                jakub.photography@photo.com
              </a>
            </div>
            <div class='contacts__address'>
              <h3 class='contacts__subtitle'>Address</h3>
              <a
                class="contacts__text"
                href="http://maps.google.com/?q=Moravske 15, Zvolen, MN, 55401"
                target="_blank"
                rel="noreferrer"
              >
                Moravske 15
                <br />
                Zvolen
                <br />
                Slovakia
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contacts;
