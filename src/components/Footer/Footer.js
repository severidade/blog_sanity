import React from 'react';
import styles from './Footer.module.css';

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
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>{' '}
          e usa como plataforma de gerenciamento de conteúdo o{' '}
          <a
            href="https://www.sanity.io/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Sanity
          </a>.
        </p>
        <p>Veja o repositório desse projeto no{' '}
            <a
              href="https://github.com/severidade/blog_sanity"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>.
        </p>
      </div>
    </footer>
  )
}