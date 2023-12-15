import { type ReactNode, type FC } from "react"

interface headerProps {
    image: {
        src:string;
        alt:string;
    };
    children:ReactNode
}

const Header:FC<headerProps> = ({image, children}) => {
    // const { src, alt } = image; way1

    return (
    <header>
      {/* <img src={src} alt={alt}/> way1*/}
      {/* <img src={image.src} alt={image.alt}/> way2 */}
      <img {...image} />
      {children}
    </header>
  )
}

export default Header
