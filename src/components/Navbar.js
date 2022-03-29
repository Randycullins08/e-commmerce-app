import { users } from "../mockData";

export default function Navbar() {
  function renderUsers() {
    return users.map((user) => {
      return (
        <h3 className="user-header" key={user.id}>
          {user.name}
        </h3>
      );
    });
  }

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
        <i className="fas fa-shopping-cart"></i>
        {renderUsers()}
      </div>
    </div>
  );
}
