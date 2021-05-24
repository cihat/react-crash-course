import Link from "next/link"

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Anasayfa</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>Hakkında</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/blog/post">
              <a>Post</a>
            </Link>
          </li>
        </ul>
      </nav>
      <style jsx>
        {`
          .header {
            background-color: #fff;
            border-bottom: 1px solid #ccc;
            ul {
              display: flex;
              justify-content: center;
              
              li {
                a {
                  height: 60px;
                  display: flex;
                  text-decoration: none;
                  align-items: center;
                  padding: 0 20px;
                  color: #333;
                  
                  
                }
              }
            }
          }
        `}
      </style>
    </header>
  )
}

export default Header
