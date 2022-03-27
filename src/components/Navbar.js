export default function Navbar() {
  return (
    <div className="navbar-container">
      <div className="logo-wrapper">
        <h1>
          <span>Randy Cullins</span>
        </h1>
      </div>

      <div className="links-wrapper">
        <button>Home</button>
        <button>Shop</button>
        <button>Contact</button>
        <button>About</button>
      </div>

      <div className="user-wrapper">
        <h3>User</h3>
      </div>
    </div>
  );
}
