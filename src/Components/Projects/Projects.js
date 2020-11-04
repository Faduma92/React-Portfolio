import React from 'react'

export default function Projects(props) {
    

    return (
        <>
           <span className="site-section" id="products-section">
      <span className="container">
        <span className="row mb-5 justify-content-center">
          <span className="col-md-6 text-center">
            <h3 className="section-sub-title">Most Popular </h3>
            <h2 className="section-title mb-3">Projects</h2>
            
          </span>
        </span>
        <span className="row">
          <span className="col-lg-4 col-md-6 mb-5">
            <span className="product-item">
              <figure>
                <img src="images/goAds-SS.png" alt="Image" className="img-fluid" />
              </figure>
              <span className="px-4">
                <h3><a href="#">goAds</a></h3>
                
                <p className="mb-4">goAds is an online classNameified advertising services platform for electronics and appliances.</p>
                <span>
                  <a href="https://github.com/sushmakaluva/goAds.com" className="btn btn-black mr-1 rounded-0">GitHub</a>
                  <a href="https://fathomless-hollows-88186.herokuapp.com/" className="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
                </span>
              </span>
            </span>
          </span>

          <span className="col-lg-4 col-md-6 mb-5">
            <span className="product-item">
              <figure>
                <img src="images/EatTheBurger.png" alt="Image" className="img-fluid" />
              </figure>
              <span className="px-4">
                <h3><a href="#">Eat The Burger</a></h3>
                
                <p className="mb-4">The purpose of this app is create a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM. </p>
                <span>
                  <a href="https://github.com/Faduma92/burger" className="btn btn-black mr-1 rounded-0">GitHub</a>
                  <a href="https://stark-mesa-38854.herokuapp.com" className="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
                </span>
              </span>
            </span>
          </span>

          <span className="col-lg-4 col-md-6 mb-5">
            <span className="product-item">
              <figure>
                <img src="images/SN-SS.png" alt="Image" className="img-fluid" />
              </figure>
              <span className="px-4">
                <h3><a href="#">Sports News Project</a></h3>
                
                <p className="mb-4">This app provides users with up-to-date sports news and game stats. Users may search for specific teams or find players.</p>
                <span>
                  <a href="https://github.com/HSHman/SportsNews" className="btn btn-black mr-1 rounded-0">GitHub</a>
                  <a href="https://hshman.github.io/SportsNews/" className="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
                </span>
              </span>
            </span>
          </span>

          <span className="col-lg-4 col-md-6 mb-5">
            <span className="product-item">
              <figure>
                <img src="images/Dashboard-screenshot.png" alt="Image" className="img-fluid" />
              </figure>
              <span className="px-4">
                <h3><a href="#">Responsive Weather Dashboard</a></h3>
               
                <p className="mb-4">This app uses the OpenWeather API to retrieve current weather and 5-day forecast data for cities using "search" inputs and geolocation.</p>
                <span>
                  <a href="https://github.com/Faduma92/Dynamic-Weather-Dashboard" className="btn btn-black mr-1 rounded-0">GitHub</a>
                  <a href="https://faduma92.github.io/Dynamic-Weather-Dashboard/" className="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
                </span>
              </span>
            </span>
          </span>
          
          <span className="col-lg-4 col-md-6 mb-5">
            <span className="product-item">
              <figure>
                <img src="images/quizss.png" alt="Image" className="img-fluid" />
              </figure>
              <span className="px-4">
                <h3><a href="#">Quiz Generator</a></h3>
     
                <p className="mb-4">After clicking "Start Quiz", the user is presented with 1/5 questions and initializes timer to 30 seconds.
                                    
                  Score is calculated according to incorrect/correct answers. 
                  
                  Once the time runs out or the user has finished answering all the questions within 30 seconds, they are presented with their final score along with previous highscores.</p>
                <span>
                  <a href="https://github.com/Faduma92/First-Quiz-Game" className="btn btn-black mr-1 rounded-0">GitHub</a>
                  <a href="https://faduma92.github.io/First-Quiz-Game/" className="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
                </span>
              </span>
            </span>
          </span>

          <span className="col-lg-4 col-md-6 mb-5">
            <span className="product-item">
              <figure>
                <img src="images/PWA-SS.png" alt="Image" className="img-fluid" />
              </figure>
              <span className="px-4">
                <h3><a href="#">Budget PWA</a></h3>
                
                <p className="mb-4">A Progressive Web Application to help users budget and keep track of their spendings even without internet connection.</p>
                <span>
                  <a href="https://github.com/Faduma92/PWA-Budget-Tracker" className="btn btn-black mr-1 rounded-0">GitHub</a>
                  <a href="https://fast-sands-22373.herokuapp.com" className="btn btn-black btn-outline-black ml-1 rounded-0">View</a>
                </span>
              </span>
            </span>
          </span>

          
        </span>
      </span>
    </span>
     
        </>
    )
}
