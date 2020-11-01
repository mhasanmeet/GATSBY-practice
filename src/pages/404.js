import React from 'react'
import {Link} from 'gatsby'

export default function error() {
  return (
    <div>
      <h1>This is our error page</h1>

      <hr></hr>

      <Link to="/">Home</Link>
    </div>
  )
}
