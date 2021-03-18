import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import profileImage from '../../styles/images/Ash.png'
import weSourceImage from '../../styles/images/weSourceImage.jpg'
import weCodeImage from '../../styles/images/image1.jpg'

function Home() {

  const [isActive, setIsActive] = useState(false)

  const toggleClass = e => {
    e.preventDefault()
    setIsActive(!isActive)
  }
  
  return (
    <div>
      <section className="homePage hero is-fullheight-with-navbar is-white">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-left is-family-primary has-text-weight-medium">
            We Are Source + Code
            </h1>
            <h2 className="subtitle is-family-secondary has-text-weight-medium has-text-primary animate__animated animate__bounce">Recruiters who code, source the best talent and have a passion for all things tech</h2>
          </div>
        </div>
      </section>


      <section className="hero is-fullheight has-background-white mt-1">
        <div className="hero-body">
          <div className="container has-text-left">
            <div className="columns is-vcentered">
              <div className="column is-4 is-offset-1">
                <figure className="image is-4by3">
                  <img src={weSourceImage} alt="Description" />
                </figure>
              </div>
              <div className="column is-5 is-offset-1">
                <h1 className="title is-2 is-family-primary has-text-weight-medium has-text-left">
                            We Source
                </h1>
                <p className="is-6 is-family-primary has-text-weight-medium">
              A technical recruiter on a mission. Source + Code was born out of common industry frustrations and a vision to better bridge the gap when it came to talent attraction and in-house technology teams.
                  <br />
                  <br />
                  A real passion for technology. We believe our extensive recruitment experience combined with hands on coding knowledge gives us a unique advantage supporting your organisations technical hiring needs. 
                </p>
                <br />
                <p className="has-text-left">
                  <Link to="/sourcing/"className="button is-medium is-primary is-outlined is-family-primary has-text-weight-medium">
                                Find out more
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="has-background-white">
      </div>
      <section className="hero is-fullheight mt-1">
        <div className="hero-body has-background-primary">
          <div className="container has-text-left">
            <div className="columns is-vcentered">
              <div className="column is-5 is-offset-1">
                <h1 className="title is-2 is-family-primary has-text-weight-medium has-text-left">
                            We Code
                </h1>
                <p className="is-6 is-family-primary has-text-weight-medium">
              Alongside our recruitment experience, we are also aspriring software engineers. We love React.js and the combination of technology, building clean, modern & customer centric websites.
                  <br />
                  <br />
A passion for technology. We believe our extensive recruitment experience combined with hands on coding knowledge gives us a unique advantage supporting your organisations hiring needs. 
                </p>
                <br />
                <div className="container has-text-left">
                  <i id="icons"className="fab fa-html5 fa-3x m-2"></i>
                  <i id="icons"className="fab fa-react fa-3x m-2"></i>
                  <i id="icons"className="fab fa-js-square fa-3x m-2"></i>
                  <i id="icons"className="fab fa-node-js fa-3x m-2"></i>
                  <i id="icons"className="fab fa-css3-alt fa-3x m-2"></i>
                  <i id="icons"className="fab fa-python fa-3x m-2"></i>
                </div>
              </div>
              <div className="column is-4 is-offset-1">
                <figure className="image is-4by3">
                  <img src={weCodeImage} alt="Description" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-do" className="hero is-medium mt-1">
        <div className="hero-body">
          <h2 className="title is-1 has-text-centered has-text-weight-medium has-text-white">WHAT WE DO</h2>
        </div>
      </section>

      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="columns is-vcentered is-multiline is-centered">
            <div className='softwareEngineeringBox column post is-4 m-2'>
              {!isActive ?
                <article className="columns is-multiline p-6">
                  <div className="column is-12 featured-content">
                    <div className="has-text-centered">
                      <br />
                      <i className="fas fa-code fa-2x"></i>
                    </div>
                    <br />
                    <h1 className="title post-title has-text-centered">Software Engineering</h1>
                    <br />
                    <p className="has-text-centered">
                      <a onClick={toggleClass} className="button is-primary">Read More</a>
                    </p>
                  </div>
                </article>
                :
                <article className="columns is-multiline p-6">
                  <div className="column is-12 featured-content">
                    <div className="has-text-centered">
                      <p className="has-text-weight-medium">Simply put, this is what we love to do. From sourcing experienced tech leads to a creative front-end developer, our niche is engaging with the best talent in the coding community to support your organisations hiring plans</p>
                    </div>
                    <br />
                    <p className="has-text-centered">
                      <a onClick={toggleClass} className="button is-primary">Back</a>
                    </p>
                  </div>
                </article>
              }
              
            </div>
            <div className="column post is-4 has-background-primary m-2">
              {!isActive ?
                <article className="columns is-multiline p-6">
                  <div className="column is-12 featured-content">
                    <div className="has-text-centered">
                      <br />
                      <i className="fas fa-truck fa-2x"></i>
                    </div>
                    <br />
                    <h1 className="title post-title has-text-centered">Software Delivery</h1>
                    <br />
                    <p className="has-text-centered">
                      <a className="button is-light" onClick={toggleClass}>Read More</a>
                    </p>
                  </div>
                </article>
                :
                <article className="columns is-multiline p-6">
                  <div className="column is-12 featured-content">
                    <div className="has-text-centered">
                      <p className="has-text-weight-medium">From Project Managers to an Agile Delivery Lead, we have extensive experience sourcing talented indviduals who keep the product on track and balance the world of methodoligies and whats best for the organisation</p>
                    </div>
                    <br />
                    <p className="has-text-centered">
                      <a className="button is-light" onClick={toggleClass}>Back</a>
                    </p>
                  </div>
                </article>
              }
            </div>
            <div className="column post is-4 has-background-primary m-2">
              {!isActive ? 
                <article className="columns is-multiline p-6">
                  <div className="column is-12 featured-content">
                    <div className="has-text-centered">
                      <br />
                      <i className="fas fa-laptop fa-2x"></i>
                    </div>
                    <br />
                    <h1 className="title post-title has-text-centered">Product & Design</h1>
                    <br />
                    <p className="has-text-centered">
                      <a onClick={toggleClass} className="button is-light">Read More</a>
                    </p>
                  </div>
                </article>
                :
                <article className="columns is-multiline p-6">
                  <div className="column is-12 featured-content">
                    <div className="has-text-centered">
                      <p className="has-text-weight-medium">Ne debet graecis epicuri mei, posse iracundia rationibus id vim. Ex audiam dissentias eum, in tempor civibus ius. Honestatis accommodare an has, has ut stet dolore abhorreant, zril graece perfecto ex cum. Eum ei dicit mundi efficiantur. Menandri iudicabit accommodare sit ex, convenire mediocritatem te.</p>
                    </div>
                    <br />
                    <p className="has-text-centered">
                      <a onClick={toggleClass} className="button is-light">Back</a>
                    </p>
                  </div>
                </article>
              }
            </div>
            <div className="ecommerceBox column post is-4 m-2 has-background-light">
              {!isActive ?
                <article className="columns is-multiline p-6">
                  <div className="column is-12 featured-content">
                    <div className="has-text-centered">
                      <br />
                      <i className="fas fa-shopping-basket fa-2x"></i>
                    </div>
                    <br />
                    <h1 className="title post-title has-text-centered">E-Commerce</h1>
                    <br />
                    <p className="has-text-centered">
                      <a onClick={toggleClass} className="button is-primary">Read More</a>
                    </p>
                  </div>
                </article>
                :
                <article className="columns is-multiline p-6">
                  <div className="column is-12 featured-content">
                    <div className="has-text-centered">
                      <p className="has-text-weight-medium">We are extremly passionaite about the ecommerce industry. With previous in-house experience managing the technical recruitment for one of the UKs biggest fashion retailers. We understand the importance of a customer centric mindset</p>
                    </div>
                    <br />
                    <p className="has-text-centered">
                      <a onClick={toggleClass} className="button is-primary">Back</a>
                    </p>
                  </div>
                </article>
              }
            </div>
          </div>
        </div>
      </section>


      <section id="about" className="hero has-background-light is-fullheight">
        <div className="hero-body">
          <div className="container">
            <div className="columns  is-vcentered reverse-columns">
              <div className="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-5-desktop is-offset-1-desktop
          is-5-widescreen is-offset-1-widescreen
          is-5-fullhd is-offset-1-fullhd" data-aos="fade-down">
                <h1 className="title is-2 is-family-primary has-text-weight-medium has-text-primary has-text-left">
              Who We Are:
                </h1>
                <h2 className="is-6 is-family-primary has-text-weight-medium">
              Since 2013, Ashley has a wealth of experience working within technical recruitment from agencies to in-house, building world-class engineering & digital teams.
                  <br />
                  <br />
              Specialising across technical & engineering hires. Ashley is also an aspiring Software Engineer who has a real passion for technology. Although having exsposure to full-stack development, he loves creating clean and modern web-sites, as well as keeping up with whats going on in the tech/recruitment world.
                  <br />
                  <br />
              At Source + Code, our mission is to simply better bridge the gap when it comes to recruitment & in-house technology teams to provide the best service we possibly can.
                </h2>
                <br />
                <div className="buttons">
                  <a className="button is-medium is-linkedin" href="https://www.linkedin.com/in/ashleynathansmith/">
                    <span className="icon">
                      <i className="fab fa-linkedin fa-lg"></i>
                    </span>
                  </a>
                  <a className="button is-medium is-github" href="https://github.com/ashleynathansmith">
                    <span className="icon">
                      <i className="fab fa-github fa-lg"></i>
                    </span>
                  </a>
                  
                </div>
              </div>
              <div className="column
          is-10-mobile is-offset-1-mobile
          is-10-tablet is-offset-1-tablet
          is-4-desktop is-offset-1-desktop
          is-4-widescreen is-offset-1-widescreen
          is-4-fullhd is-offset-1-fullhd">
                <figure className="image is-256x256">
                  <img  id="profile-image" className="is-rounded" src={profileImage} />
                </figure>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="hero is-fullheight mt-1 mb-1">
        <div className="columns m-0">
          <div className='column is-half has-background-primary'>
            <div className="hero-body">
              <div className="columns is-multiline">
                <div className="column is-8 is-offset-2">
                  <div className="section"></div>
                  <h1 className="title is-2 is-family-primary has-text-weight-medium  has-text-white has-text-centered">Why Choose Us?</h1>
                  <h2 className="subtitle is-7 is-family-primary has-text-weight-medium  has-text-white has-text-centered">*Disclaimer, sadly we do not work with <q>exclusive candidates</q> however...</h2>
                </div>
                <div className="section"></div>
                <div className="section">
                  <div className="columns">
                    <div
                      className="column is-2 has-text-centered is-offset-2"
                    
                    >
                      <i className="far fa-smile fa-3x"></i>
                      <br />
                      <br />
                      <h2>
                  We are honest & authentic
                      </h2>
                    </div>
                    <div
                      className="column is-2 has-text-centered is-offset-1"
                    
                    >
                      <i className="fas fa-brain fa-3x"></i>
                      <br />
                      <br />
                      <h2>
                  Agency & in-house experience
                      </h2>
                    </div>
                    <div
                      className="column is-2 has-text-centered is-offset-1"
              
                    >
                      <i className="fas fa-code fa-3x"></i>
                      <br />
                      <br />
                      <h2>
                  We love to code
                      </h2>
                    </div>
                  </div>
                  <div className="columns is-12">
                    <div
                      className="column is-2 has-text-centered is-offset-2"
                    
                    >
                      <i className="fas fa-globe-europe fa-3x"></i>
                      <br />
                      <br />
                      <h2>
                  Extensive talent network
                      </h2>
                    </div>
                    <div
                      className="column is-2 has-text-centered is-offset-1"
                    >
                      <i className="fas fa-fingerprint fa-3x"></i>
                      <br />
                      <br />
                      <h2>
                        
                        A bespoke approach to finding the right talent
                      </h2>
                    </div>
                    <div
                      className="column is-2 has-text-centered is-offset-1"
                    >
                      <i className="fas fa-users fa-3x"></i>
                      <br />
                      <br />
                      <h2>
                      Expert technical recruiters
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="why-us-image" className="column is-half has-background-white p-0">
          </div>
        </div>
      </section>

      <section id="getInTouch" className="hero is-medium">
        <div className="hero-body">
          <h2 id="getInTouchTitle" className="title is-1 has-text-centered is-family-primary has-text-weight-medium has-text-white">GET IN TOUCH</h2>
        </div>
      </section>
      
      <section className="section is-small has-background-white mt-1" id="contact">
        <div className="section-light contact" id="contact">
          <div className="container m-5">
            <div
              className="columns is-multiline"
            >
              <div className="column is-8 is-offset-2">
                <form
                  action="https://formspree.io/ashleynathansmith@gmail.com"
                  method="POST"
                >
                  <div className="field">
                    <label className="label is-family-secondary has-text-weight-medium">Name</label>
                    <div className="control has-icons-left">
                      <input
                        className="input is-primary is-outlined"
                        type="text"
                        placeholder="Ex. Jane Smith"
                        name="Name"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-user"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label is-family-secondary has-text-weight-medium">Email</label>
                    <div className="control has-icons-left">
                      <input
                        className="input is-primary is-outlined"
                        type="email"
                        placeholder="Ex. hello@arctheme.com"
                        name="Email"
                      />
                      <span className="icon is-small is-left">
                        <i className="fas fa-envelope"></i>
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label className="label is-family-secondary has-text-weight-medium">Message</label>
                    <div className="control">
                      <textarea
                        className="textarea is-primary is-outlined"
                        placeholder="How can we help..."
                        name="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control ">
                      <button className="button submit-button is-family-secondary has-text-weight-medium is-outlined is-primary has-background- has-text-black">
                      Submit&nbsp;&nbsp;
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="container">
          <div className="columns is-multiline">
            <div className="column is-one-third">
              <article className="notification media has-background-white">
                <figure className="media-left">
                  <span className="icon">
                    <i className="has-text-primary fas fa-mobile-alt fa-lg"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="is-family-secondary has-text-weight-medium has-text-black is-5 has-text-left">Phone</h1>
                    <p className="message has-background-white is-family-secondary has-text-weight-medium has-text-dark is-5">
                +447854614734
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="notification has-background-white media">
                <figure className="media-left">
                  <span className="icon has-text-primary">
                    <i className="far fa-lg fa-envelope"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="is-family-secondary has-text-weight-medium has-text-black is-5 has-text-left">Email</h1>
                    <p className="message has-background-white is-family-secondary has-text-weight-medium has-text-dark is-5">
                ashley@sourceandcode.co.uk
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="notification has-background-white media">
                <figure className="media-left">
                  <span className="icon has-text-primary">
                    <i className="fab fa-lg fa-linkedin-in"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="is-family-secondary has-text-weight-medium has-text-black is-5 has-text-left">LinkedIn</h1>
                    <p className="message has-background-white is-family-secondary has-text-weight-medium has-text-dark is-5">
                www.linkedin.com/sourceandcode
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    

      <footer className="footer has-background-primary">
        <div className="content has-text-centered">
          <br />
          <p className="has-text-weight-medium">Website built by <a className="has-text-white" href="https://www.linkedin.com/in/ashleynathansmith/"><strong>Source + Code</strong></a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home