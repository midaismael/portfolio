import "./header.css";

const Header = () => {
  return (
    <header className="flex">
      <button className="menu">show model</button>
      <div/>
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button>light</button>


      <div className="border fixed">
          <ul className="model border">
            <li><a href="">About</a></li>
            <li><a href=""></a>Articles</li>
            <li><a href=""></a>Projects</li>
            <li><a href=""></a>Speaking</li>
            <li><a href=""></a>Uses</li>
          </ul>
      </div>
    </header>
  );
};

export default Header;
