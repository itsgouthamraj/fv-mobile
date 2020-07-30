import React from 'react';
import ReactDOM from 'react-dom';
import './assets/fv-css/framework.scss';

ReactDOM.render(
  <React.StrictMode>
    <div className="fv-app">
      <div className="search-bar-container">
        <input className="search-bar" name="search_term" placeholder="Search Furnitures,Matresses,Beds,etc." />

      </div>


      <div className="fv-app-container">
      <div className="top-banner">
        <img className="banner-img" src="https://i.pinimg.com/originals/bc/9e/b6/bc9eb68653d62ce7b5ee018c6ffc1796.jpg" />
        {/* <span className="banner-txt">
          Flat 10% off on wooden cots
        </span> */}
      </div>


      <div className="featured-products">
        <div className="title-bar">
          <div className="title">
            New Arrival's
          </div>
          <div className="side-txt">
            See more
          </div>
        </div>

        <div className="prod-container">

          <div className="prod">
            <img className="prod-pic" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg" />

            <div className="prod-title">
              Newly designed Furniture
              </div>

            <div className="prod-price center">
              ₹ 100
            </div>
          </div>

          <div className="prod">
            <img className="prod-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0tsdR4RiwIxBtR9Kq4DHVk7zJ7acag0o7PA&usqp=CAU" />

            <div className="prod-title">
              Designer Pillows
              </div>

            <div className="prod-price center">
              ₹ 800
            </div>
          </div>

          <div className="prod">
            <img className="prod-pic" src="https://n2.sdlcdn.com/imgs/b/x/f/Bellz-Foam-Mattress-Buy-1-SDL045914958-1-fbea6.JPG" />

            <div className="prod-title">
              Ultra Comfort Mattresses
              </div>

            <div className="prod-price center">
              ₹ 7500
            </div>
          </div>

          <div className="prod">
            <img className="prod-pic" src="https://media.architecturaldigest.com/photos/5e8f8e7a53d7c800096dd138/master/w_650,h_634,c_limit/prod18010010_E512395783_F_RS.jfif" />

            <div className="prod-title">
              Sofa with new features
              </div>

            <div className="prod-price center">
              ₹ 2500
            </div>
          </div>





        </div>

      </div>


      <div className="featured-products">
        <div className="title-bar">
          <div className="title">
            Modular Furnitures
          </div>
          <div className="side-txt">
            See more
          </div>
        </div>

        <div className="prod-container">

          <div className="prod">
            <img className="prod-pic" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/amazon-rivet-furniture-1533048038.jpg" />

            <div className="prod-title">
              Newly designed Furniture
              </div>

            <div className="prod-price center">
              ₹ 100
            </div>
          </div>

          <div className="prod">
            <img className="prod-pic" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ0tsdR4RiwIxBtR9Kq4DHVk7zJ7acag0o7PA&usqp=CAU" />

            <div className="prod-title">
              Designer Pillows
              </div>

            <div className="prod-price center">
              ₹ 800
            </div>
          </div>

          <div className="prod">
            <img className="prod-pic" src="https://n2.sdlcdn.com/imgs/b/x/f/Bellz-Foam-Mattress-Buy-1-SDL045914958-1-fbea6.JPG" />

            <div className="prod-title">
              Ultra Comfort Mattresses
              </div>

            <div className="prod-price center">
              ₹ 7500
            </div>
          </div>

          <div className="prod">
            <img className="prod-pic" src="https://media.architecturaldigest.com/photos/5e8f8e7a53d7c800096dd138/master/w_650,h_634,c_limit/prod18010010_E512395783_F_RS.jfif" />

            <div className="prod-title">
              Sofa with new features
              </div>

            <div className="prod-price center">
              ₹ 2500
            </div>
          </div>





        </div>

      </div>
      </div>


      <div className="navbar-mob">
        <div onClick={() => { }} className="nav-item center">
          <i className="material-icons-outlined nav-icon">
            home
          </i>
          <span className="nav-text">
            Home
          </span>
        </div>
        <div className="nav-item center">
          <i className="material-icons-outlined nav-icon">
            border_all
          </i>
          <span className="nav-text">
            Category
          </span>
        </div>
        <div className="nav-item center">
          <i className="material-icons-outlined nav-center-icon">
            explore
          </i>

        </div>
        <div className="nav-item center">
          <i className="material-icons-outlined nav-icon">
            perm_identity
          </i>
          <span className="nav-text">
            Account
          </span>
        </div>
        <div className="nav-item center">
          <i className="material-icons-outlined nav-icon">
            shopping_cart
          </i>
          <span className="nav-text">
            Cart
          </span>
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

