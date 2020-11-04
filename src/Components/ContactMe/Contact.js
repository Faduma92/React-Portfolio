import React from 'react'

export default function Contact(props) {
    

    return (
        <>
           <span className="site-section bg-light" id="contact-section">
      <span className="container">
        <span className="row mb-5">
          <span className="col-12 text-center">
            <h3 className="section-sub-title">Contact Me</h3>
            <h2 className="section-title mb-3">Get In Touch</h2>
          </span>
        </span>
        <span className="row justify-content-center">
          <span className="col-md-7 mb-5">

            

            <form action="#" className="p-5 bg-white">
              
              <h2 className="h4 text-black mb-5">Contact Form</h2> 

              <span className="row form-group">
                <span className="col-md-6 mb-3 mb-md-0">
                  <label className="text-black" for="fname">First Name</label>
                  <input type="text" id="fname" className="form-control rounded-0" />
                </span>
                <span className="col-md-6">
                  <label className="text-black" for="lname">Last Name</label>
                  <input type="text" id="lname" className="form-control rounded-0" />
                </span>
              </span>

              <span className="row form-group">
                
                <span className="col-md-12">
                  <label className="text-black" for="email">Email</label> 
                  <input type="email" id="email" className="form-control rounded-0" />
                </span>
              </span>

              <span className="row form-group">
                
                <span className="col-md-12">
                  <label className="text-black" for="subject">Subject</label> 
                  <input type="subject" id="subject" className="form-control rounded-0" />
                </span>
              </span>

              <span className="row form-group">
                <span className="col-md-12">
                  <label className="text-black" for="message">Message</label> 
                  <textarea name="message" id="message" cols="30" rows="7" className="form-control rounded-0" placeholder="Write your notes or questions here..."></textarea>
                </span>
              </span>

              <span className="row form-group">
                <span className="col-md-12">
                  <input type="submit" value="Send Message" className="btn btn-black rounded-0 py-3 px-4" />
                </span>
                <li style={{listStyle: "none"}}><a href="" className="uk-icon-button uk-margin-small-right" uk-icon="mail"></a>fatimabdillahi@gmail.com</li>
                <li style={{listStyle: "none"}}><a href="" className="uk-icon-button uk-margin-small-right" uk-icon="receiver"></a>647-804-3745</li>
                <li style={{listStyle: "none"}}><a href="https://github.com/Faduma92" className="uk-icon-button uk-margin-small-right" uk-icon="github"></a>Faduma92</li>
                <li style={{listStyle: "none"}}><a href="https://www.linkedin.com/in/fatima-abdillahi-0035111b7/" className="uk-icon-button  uk-margin-small-right" uk-icon="linkedin"></a>LinkedIn</li>
                
              </span>

  
            </form>
          </span>
        
        </span>
        
      </span>
    </span>
 
        </>
    )
}
