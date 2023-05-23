import React from 'react';
import styles from './Footer.module.css';
import ExternalLink from '../ ExternalLink/ExternalLink';

export default function Footer() {

  return(
    <footer className={styles.container_footer}>
      <ul className={styles.container_social}>
        <li>
          <a
            className={styles.social_linkedin}
            href="https://www.linkedin.com/in/severidade/"
            target="_blank"
            rel="noopener noreferrer"
          >
            linkedin
          </a>
        </li>
        <li>
          <a
            className={styles.social_github}
            href="https://github.com/severidade"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            className={styles.social_codepen}
            href="https://codepen.io/severidade"
            target="_blank"
            rel="noopener noreferrer"
          >
            codepen
          </a>
        </li>
      </ul>
      <div>
        <p>
          Este blog foi desenvolvido em{' '}
          <ExternalLink href={"https://react.dev/"}  name={"React"} />{' '}
          e usa como plataforma de gerenciamento de conteúdo o{' '}
          <ExternalLink href={"https://www.sanity.io"} name={"Sanity"}/>.
        </p>
        <p>Veja o repositório desse projeto no{' '}
          <ExternalLink href={ "https://github.com/severidade/blog_sanity" } name={ "GitHub" }/>.
        </p>
      </div>
    </footer>
  )
}