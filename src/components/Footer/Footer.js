import React from 'react';
import styles from './Footer.module.css';
import ExternalLink from '../ ExternalLink/ExternalLink';

export default function Footer() {

  return(
    <footer className={styles.container_footer}>
      <ul className={styles.container_social}>
        <li>
          <ExternalLink href={"https://www.linkedin.com/in/severidade/"} linkText={"Linkedin"} social_type={"linkedin"} />
        </li>
        <li>
          <ExternalLink href={"https://github.com/severidade"} linkText={"GitHub"} social_type={"github"} />
        </li>
        <li>
          <ExternalLink href={"https://codepen.io/severidade"} linkText={"Codepen"} social_type={"codepen"} />
        </li>
      </ul>
      <div>
        <p>
          Este blog foi desenvolvido em{' '}
          <ExternalLink href={"https://react.dev/"}  linkText={"React"} />{' '}
          e usa como plataforma de gerenciamento de conteúdo o{' '}
          <ExternalLink href={"https://www.sanity.io"} linkText={"Sanity"}/>.
        </p>
        <p>Veja o repositório desse projeto no{' '}
          <ExternalLink href={ "https://github.com/severidade/blog_sanity" } linkText={ "GitHub" }/>.
        </p>
      </div>
    </footer>
  )
}