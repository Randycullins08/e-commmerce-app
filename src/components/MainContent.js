import { items } from "../mockData";

export default function MainContent() {
  function renderItems() {
    return items.map((item) => {
      return (
        <div key={item.id} className="items-wrapper">
          <ul>
            <li>
              <img className="image-wrapper" src={item.image} alt={item.name} />
            </li>
            <li className="product-name">{item.name}</li>
            <li className="product-description">{item.description}</li>
            <li className="product-price">{item.price}</li>
          </ul>
          <button>Add To Cart</button>
        </div>
      );
    });
  }

  return <div className="main-content-container">{renderItems()}</div>;
}
