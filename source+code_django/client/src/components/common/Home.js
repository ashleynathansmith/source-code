
import React, { useState } from 'react'
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
      <section className="hero is-fullheight-with-navbar is-white">
        <div className="hero-body">
          <div className="container">
            <h1 className="title is-1 has-text-left is-family-primary has-text-weight-medium">
            We Are Source + Code
            </h1>
            <h2 className="subtitle is-family-secondary has-text-weight-medium has-text-primary">Recruiters who code, source the best talent and have a passion for all things tech</h2>
          </div>
        </div>
      </section>


      <section className="hero is-fullheight has-background-light mt-1">
        <div className="hero-body">
          <div className="container has-text-left">
            <div className="columns is-vcentered">
              <div className="column is-4 is-offset-1">
                <figure className="image is-4by3">
                  <img src={weSourceImage} alt="Description" />
                </figure>
              </div>
              <div className="column is-5 is-offset-1">
                <h1 className="title is-2 is-family-primary has-text-weight-medium">
                            We Source
                </h1>
                <p className="is-6 is-family-primary has-text-weight-medium">
              A technical recruiter on a mission. Source + Code was born out of industry frustrations and a passion to better bridge the gap when it came to talent attraction and in-house technology teams.
                  <br />
                  <br />
                  A passion for technology. We believe our extensive recruitment experience combined with hands on coding knowledge gives us a unique advantage supporting your organisations hiring needs. 
                </p>
                <br />
                <p className="has-text-left">
                  <a className="button is-medium is-primary is-outlined is-family-primary has-text-weight-medium">
                                Find out more
                  </a>
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
                <h1 className="title is-2 is-family-primary has-text-weight-medium">
                            We Code
                </h1>
                <p className="is-6 is-family-primary has-text-weight-medium">
              A technical recruiter on a mission. Source + Code was born out of common industry frustrations and a passion to better bridge the gap when it came to talent attraction and in-house technology teams.
                  <br />
                  <br />
A passion for technology. We believe our extensive recruitment experience combined with hands on coding knowledge gives us a unique advantage supporting your organisations hiring needs. 
                </p>
                <br />
              
                <p className="has-text-left">
                  <a className="button is-medium is-white is-outlined is-family-primary has-text-weight-medium">
                                Find out more
                  </a>
                </p>
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
          <h2 className="title is-1 has-text-centered is-family-primary has-text-weight-medium has-text-white">What We Do</h2>
        </div>
      </section>

      <section className="hero is-fullheight">
        <div className="hero-body">
          <div className="columns is-vcentered is-multiline is-centered">
            <div className='column post is-4 m-2 has-background-light'>
              {isActive ?
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
                      <p>Ne debet graecis epicuri mei, posse iracundia rationibus id vim. Ex audiam dissentias eum, in tempor civibus ius. Honestatis accommodare an has, has ut stet dolore abhorreant, zril graece perfecto ex cum. Eum ei dicit mundi efficiantur. Menandri iudicabit accommodare sit ex, pro timeam convenire mediocritatem te.</p>
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
              {isActive ?
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
                      <a className="button is-primary" onClick={toggleClass}>Read More</a>
                    </p>
                  </div>
                </article>
                :
                <article className="columns is-multiline p-6">
                  <div className="column is-12 featured-content">
                    <div className="has-text-centered">
                      <p>Ne debet graecis epicuri mei, posse iracundia rationibus id vim. Ex audiam dissentias eum, in tempor civibus ius. Honestatis accommodare an has, has ut stet dolore abhorreant, zril graece perfecto ex cum. Eum ei dicit mundi efficiantur. Menandri iudicabit accommodare sit ex, pro timeam convenire mediocritatem te.</p>
                    </div>
                    <br />
                    <p className="has-text-centered">
                      <a className="button is-primary" onClick={toggleClass}>Back</a>
                    </p>
                  </div>
                </article>
              }
            </div>
            <div className="column post is-4 has-background-primary m-2">
              {isActive ? 
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
                      <a onClick={toggleClass} className="button is-primary">Read More</a>
                    </p>
                  </div>
                </article>
                :
                <article className="columns is-multiline p-6">
                  <div className="column is-12 featured-content">
                    <div className="has-text-centered">
                      <p>Ne debet graecis epicuri mei, posse iracundia rationibus id vim. Ex audiam dissentias eum, in tempor civibus ius. Honestatis accommodare an has, has ut stet dolore abhorreant, zril graece perfecto ex cum. Eum ei dicit mundi efficiantur. Menandri iudicabit accommodare sit ex, pro timeam convenire mediocritatem te.</p>
                    </div>
                    <br />
                    <p className="has-text-centered">
                      <a onClick={toggleClass} className="button is-primary">Back</a>
                    </p>
                  </div>
                </article>
              }
            </div>
            <div className="column post is-4 m-2 has-background-light">
              {isActive ?
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
                      <p>Ne debet graecis epicuri mei, posse iracundia rationibus id vim. Ex audiam dissentias eum, in tempor civibus ius. Honestatis accommodare an has, has ut stet dolore abhorreant, zril graece perfecto ex cum. Eum ei dicit mundi efficiantur. Menandri iudicabit accommodare sit ex, pro timeam convenire mediocritatem te.</p>
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
                <h1 className="title is-2 is-family-primary has-text-weight-medium has-text-primary">
              Who We Are:
                </h1>
                <h2 className="is-6 is-family-primary has-text-weight-medium">
              Since 2013, Ashley has a wealth of experience working within technical recruitment from agencies to in-house, building world-class engineering & digital teams.
                  <br />
                  <br />
              Source + Code was born out of a passion for tech and first hand experience working in-house and the challenges working with various corporate agencies can bring.
                  <br />
                  <br />
              Our mission is to simply, better bridge the gap when it comes to recruitment & in-house technology teams to provide the best service we possibly can.
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

      <section id="getInTouch" className="hero is-medium has-background-light">
        <div className="hero-body">
          <h2 id="getInTouchTitle" className="title is-1 has-text-centered is-family-primary has-text-weight-medium has-text-white">Get in touch</h2>
        </div>
      </section>
      
      <section className="section is-small has-background-primary mt-1" id="contact">
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
                        className="input"
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
                        className="input is-white"
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
                        className="textarea is-white"
                        placeholder="How can we help..."
                        name="Message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control ">
                      <button className="button submit-button is-family-secondary has-text-weight-medium is-outlined has-background-white has-text-black">
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
              <article className="notification media has-background-primary">
                <figure className="media-left">
                  <span className="icon">
                    <i className="has-text-primary fas fa-mobile-alt fa-lg"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="is-family-secondary has-text-weight-medium has-text-black is-5">Phone</h1>
                    <p className="message has-background-primary is-family-secondary has-text-weight-medium has-text-dark is-5">
                07854614734
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="notification has-background-primary media">
                <figure className="media-left">
                  <span className="icon has-text-primary">
                    <i className="far fa-lg fa-envelope"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="is-family-secondary has-text-weight-medium has-text-black is-5">Email</h1>
                    <p className="message has-background-primary is-family-secondary has-text-weight-medium has-text-dark is-5">
                ashley@sourceandcode.co.uk
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="column is-one-third">
              <article className="notification has-background-primary media">
                <figure className="media-left">
                  <span className="icon has-text-primary">
                    <i className="fab fa-lg fa-linkedin-in"></i>
                  </span>
                </figure>
                <div className="media-content">
                  <div className="content">
                    <h1 className="is-family-secondary has-text-weight-medium has-text-black is-5">LinkedIn</h1>
                    <p className="message has-background-primary is-family-secondary has-text-weight-medium has-text-dark is-5">
                www.linkedin.com/source+code
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    

      <footer className="footer has-background-white">
        <div className="content has-text-centered">
          <br />
          <p className="has-text-weight-medium">Website built by <a className="has-text-primary" href="https://www.linkedin.com/in/ashleynathansmith/"><strong>Source + Code</strong></a>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default Home