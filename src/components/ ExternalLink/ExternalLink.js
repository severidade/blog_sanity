import React from 'react';

export default function ExternalLink( {href, name}) {

  return(
    <a
      href={ href }
      target="_blank"
      rel="noopener noreferrer"
    >
      { name }
    </a>
  )
}