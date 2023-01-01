import {
  footer,
  product,
  productDescription,
  navHeader,
  navLink
} from './footer.css'

interface IFooterNavProps {
  nav: {
    isHeader?: boolean,
    link: string,
    text: string
  }[][]
}

export const Footer = ({ nav }: IFooterNavProps) => {
  return (
    <footer className={footer}>
      <div className={product}>
        Project
        <div className={productDescription}>Docs &copy; 2022</div>
      </div>
      {nav.map((links, navIndex) => (
        <nav key={navIndex}>
          <ul>
            {links.map((item, itemIndex) => (
              <li key={itemIndex}>
                <a className={item.isHeader ? navHeader : navLink} href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>
        </nav>
      ))}
    </footer>
  )
}
