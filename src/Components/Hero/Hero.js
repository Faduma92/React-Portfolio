import React from 'react'
import Img from './port-bg.jpeg'

export default function Hero(props) {
    
    const heroImage = {
        backgroundImage: `url(${Img})`
    }

    return (
        <>
          <span className="site-blocks-cover overlay" style={heroImage}>
      <span className="container">
        <span className="row align-items-center justify-content-center">

          <span className="col-md-12" data-aos="fade-up" data-aos-delay="400">
                        
            <span className="row mb-4">
              <span className="col-md-7">
                <h1>Hi there.</h1>
                <p className="mb-5 lead">My name is Fatima Abdillahi. I help companies design, develop, and deliver the right app for their customer.</p>
                
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>    
        </>
    )
}
