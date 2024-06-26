import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters';
import emailJs from '@emailjs/browser'

import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';

export default function Contact() {

    const [letterClass, setLetterClass] = useState('text-animate')
    const formRef = useRef();

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 4000);

        return () => clearTimeout(timeoutId); // Cleanup function
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();

        const form = formRef.current;
        const formData = new FormData(form);

        const name = formData.get('name');
        const email_id = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');

        const params = {
            name,
            email_id,
            subject,
            message,
        };

        emailJs
            .send(
                'service_vmpgz2p',
                'template_sk4yv3h',
                 params,
                'aQZ2cCSyldXrr21-s'

            ).then(
                () =>{
                    alert("Email sent successfully!")
                    window.location.reload(false)
                } )
            .catch(
                () => {
                    alert('Failed to sent the email!!')
                 })
    }

    return (
        <>
            <div className='container contact-page'>
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am interested in freelance opportunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className="contact-form">
                        <form ref={formRef} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input
                                        type="text"
                                        name='name'
                                        placeholder='Name'
                                        required />
                                </li>
                                <li className="half">
                                    <input
                                        type="email"
                                        name='email'
                                        placeholder='email'
                                        required />
                                </li>
                                <li>
                                    <input
                                        placeholder="Subject"
                                        type="text"
                                        name="subject"
                                        required
                                    />
                                </li>
                                <li>
                                    <textarea
                                        placeholder="Message"
                                        name="message"
                                        required
                                    ></textarea>
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className="info-map">
                    Amit Pandey,
                    <br />
                    India,
                    <br />
                    19, New Market Place, <br />
                    Near Railway Station, <br />
                    Indore <br />
                    <p>amiitt@gmail.com</p>
                </div>
                <div className="map-wrap">
                    <MapContainer center={[22.6922775,75.9208699]} zoom={13}>
                      <TileLayer url='https://tile.openstreetmap.org/{z}/{x}/{y}.png' />
                      <Marker position={[22.6922775,75.9208699]}>
                         <Popup>Amit lives here, come over for a cup of tea :)</Popup>
                      </Marker>
                    </MapContainer>
                </div>
            </div>

            <Loader type='pacman' />
        </>
    )
}
