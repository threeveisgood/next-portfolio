import React from 'react'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import Error from './_error'

function About({ user, statusCode }) {
    if(statusCode) {
      return <Error statusCode={statusCode} />
    }
    return (
    <Layout title="About"> 
      <p>{user.name}</p>      
      <p>A Javascript programmer</p>
      <img src={user.avatar_url} alt="Reed" height="200px" />
    </Layout>
   )
}

About.getInitialProps = async () => {
    const res = await fetch('https://api.github.com/users/reedbarger')
    const statusCode = res.status > 200 ? res.status : false
    const data = await res.json()
    
    return { user: data, statusCode }
}

export default About