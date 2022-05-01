import React from 'react'
import {ContactCard} from './Card'

function Contact() {
    return (
        <section className="contact">
            <div class="row">
                <h6>CONTACT</h6>
                <h2>Get in touch</h2>
            </div>
            <div class="row">
                <div className="contact__main">
                    <div className="contact__container">
                        <ContactCard iconClass='fas fa-phone-alt' title='Phone' text='+91 9066392322' />
                        <ContactCard iconClass='fas fa-envelope' title='Email' text='bharathsampangi95@gmail.com' />
                        <ContactCard iconClass='fas fa-map-marker-alt' title='Address' text='Bangalore, Karnataka' />
                    </div>
                    <br/>
                </div>
            </div>
        </section>
    )
}

export default Contact