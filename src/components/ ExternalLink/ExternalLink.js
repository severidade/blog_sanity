import React from 'react';
import styles from './ExternalLink.module.css';

export default function ExternalLink( {href, linkText, social_type }) {
  const linkClassName = social_type ? styles[`social_${social_type}`] : styles.external_link ;

  return(
    <a
      href={ href }
      target="_blank"
      rel="noopener noreferrer"
      className={linkClassName}
    >
      { linkText }
    </a>
  )
}