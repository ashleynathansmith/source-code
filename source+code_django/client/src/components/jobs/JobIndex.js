import React from 'react'
import { getAllJobs } from '../../lib/api'

function JobIndex() {
  const [jobs, setJobs] = React.useState(null)
  const [hasError, setHasError] = React.useState(false)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getAllJobs()
        setJobs(data)
      } catch (err) {
        setHasError(true)
      }
    }
    getData()
  }, [])

  return (
    <body>
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="columns">
              <div className="column is-12">
                <div className="container content">
                  <h1 className="title is-1 has-text-left is-family-primary has-text-weight-light">Current Jobs</h1>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="container">
        {jobs ?
          <div className="section">
            {jobs.map(job => (
              <section key={job.id} className="section">
                <div className="container">
                  <div className="columns">
                    <div className="column is-3">
                    </div>
                    <div className="column is-9">
                      <div className="content is-medium">
                        <div className="box">
                          <h4 id="const" className="title is-family-primary has-text-weight-light has-text-white is-3 has-text-primary">{job.title} - {job.location}</h4>
                          <article className="message is-white">
                            <div className="message-body is-family-secondary has-text-weight-light has-text-black is-5 p-5">
                              {job.description}
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section> 
            ))}
          </div>
          :
          <h2 className="title has-text-centered">
            {hasError ? 'Error, something went wrong' : '...loading'}
          </h2>
        }
      </div>
      <footer className="footer">
        <div className="content has-text-centered">
          <p className="has-text-weight-light">Website made by <a className="has-text-primary" href="https://www.linkedin.com/in/ashleynathansmith/"><strong>Source + Code</strong></a>
          </p>
        </div>
      </footer>
    </body>
  )
}

export default JobIndex
