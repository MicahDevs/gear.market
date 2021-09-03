import { css } from '@emotion/react'

export const Footer = () => {
  return (
    <footer css={css`
      height: var(--footer-height);
      border-top: var(--border-black);
      background-color: var(--black);
      a {
        text-decoration: none;
      }
    `}>
    </footer>
  )
}
