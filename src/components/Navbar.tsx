import logo from "../img/icono.png";

interface Props {
  title: string;
}

const Navbar = ({ title }: Props) => {
  return (
    <nav className="navbar navbar-dark bg-ligth">
      <div className="container" style={{ display: "flex" }}>
        <a
          href="/"
          style={{ textDecoration: "none", display: "flex" }}
          className="navbar-brand text-dark"
        >
          <img src={logo} alt="logo" width={50} />
          <h1 style={{ display: "inline-block", margin: "0 20px" }}>{title}</h1>
        </a>
        <h3 style={{ marginRight: "40px", paddingTop: "10px" }}>
          React and Typescript
        </h3>
      </div>
    </nav>
  );
};

export default Navbar;
