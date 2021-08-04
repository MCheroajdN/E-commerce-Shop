
import './App.css';

function App() {
  const openMenu = () => {
    document.querySelector(".sidebar").classList.add("open");
  }

  const closeMenu = () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div className="grid-container">
            <header className= "header">
                <div className="brand">
                    <button onClick={openMenu}>
                        &#9776; 
                    </button>
                    <a href="index.html"> E-commerce Shop</a>
                </div>

                <div className="header-links">
                    <a href = "cart.html">Cart</a>
                    <a href = "signin">Sign In</a>
                </div>
            </header>

            <aside className="sidebar">
               <h3>Shopping Categories </h3>
                   <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                   <ul>
                       <li>
                           <a href="index.html">Watches</a>
                       </li>

                        <li>
                            <a href="index.html">Bags</a>
                        </li>
                   </ul>
            </aside>

            <main className="main">
               <div className="content">
                <ul className="products">
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/watch1.jpg" alt="product"/>
                            <div className="product-name"> <a href = "product.html">MK Lexington Smart Watch</a></div>
                            <div className="product-brand">Michael Kors</div>
                            <div className="product-price"> £299 </div>
                            <div className="product-rating">4.6 Stars (10 Reviews)</div>
                        </div>
                    </li>

                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/watch1.jpg" alt="product"/>
                            <div className="product-name"> <a href = "product.html">MK Lexington Smart Watch</a></div>
                            <div className="product-brand">Michael Kors</div>
                            <div className="product-price">£299</div>
                            <div className="product-rating">4.6 Stars (10 Reviews)</div>
                        </div>
                    </li>

                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/watch1.jpg" alt="product"/>
                            <div className="product-name"> <a href = "product.html">MK Lexington Smart Watch</a></div>
                            <div className="product-brand">Michael Kors</div>
                            <div className="product-price">£299</div>
                            <div className="product-rating">4.6 Stars (10 Reviews)</div>
                        </div>
                    </li>

                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/watch1.jpg" alt="product"/>
                            <div className="product-name"> <a href = "product.html">MK Lexington Smart Watch</a></div>
                            <div className="product-brand">Michael Kors</div>
                            <div className="product-price">£299</div>
                            <div className="product-rating">4.6 Stars (10 Reviews)</div>
                        </div>
                    </li>

                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/watch1.jpg" alt="product"/>
                            <div className="product-name"> <a href = "product.html">MK Lexington Smart Watch</a></div>
                            <div className="product-brand">Michael Kors</div>
                            <div className="product-price">£299</div>
                            <div className="product-rating">4.6 Stars (10 Reviews)</div>
                        </div>
                    </li>

                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/watch1.jpg" alt="product"/>
                            <div className="product-name"> <a href = "product.html">MK Lexington Smart Watch</a></div>
                            <div className="product-brand">Michael Kors</div>
                            <div className="product-price">£299</div>
                            <div className="product-rating">4.6 Stars (10 Reviews)</div>
                        </div>
                    </li>

                    
                </ul>
               </div>
            </main>

            <footer className= "footer">
                All rights reserve. Created By M. Chris @ 2021
            </footer>
            </div>
  );
}

export default App;
