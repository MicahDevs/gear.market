import { css } from '@emotion/react'

export const Footer = () => {
  return (
    <footer css={css`
      height: var(--footer-height);
      border-top: var(--border-white);
      background-color: var(--white);
      a {
        text-decoration: none;
      }
    `}>
    </footer>
  )
}
