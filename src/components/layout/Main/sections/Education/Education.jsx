import React from 'react'
import './Education.css'
import UTVT from '../../../../../assets/img/utvt_logo_2.png';
import CECyTEM from '../../../../../assets/img/cecytem-logo.png';
import Edu from '../../../../../assets/img/education.png';

const Education = () => {
    return (
        <section className='Education'>
            <div className='section-tittle'>Education</div>
            <br />
            <br />
            <div className="content-e">
                <div className="image-e">
                    <img src={Edu} alt="" />
                </div>
                <div className="info-e">
                    <div className="institute-section">

                        <div className="institutes">

                            <div className="institute-info">
                                <div className="institute-img">
                                    <img src={UTVT} alt="" />
                                </div>
                                <div className="institute-name">Universidad Técnologica del Valle de Toluca</div>
                                <div className="career-name">Software Engineer</div>
                                <div className="career-date">September 2020 - Actually</div>
                                <ul className="career-list">
                                    <li>Higher university technician in multiplatform software development.</li>
                                    <li>Engineering in software development and management.</li>
                                </ul>
                            </div>
                            <br />
                            <div className="institute-info">
                                <div className="institute-img">
                                    <img src={CECyTEM} alt="" />
                                </div>
                                <div className="institute-name">Colegio de Estudios Cientificos y Técnologicos del Estado de México</div>
                                <div className="career-name">Programming technician</div>
                                <div className="career-date">September 2017 - September 2020</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Education
