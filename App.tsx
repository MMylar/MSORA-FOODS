
import { useState } from 'react'
import './App.css'

const WHATSAPP_NUMBER = '9391232809'
const PHONE_NUMBER = '+919391232809'

const whatsappLink = (message: string) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`

const categories = [
  'All Items',
  'Fruit Bowls',
  'Meals',
  'Chicken Specials',
  'Snacks',
]

const menuItems = [
  {
    id: 1,
    name: 'Mixed Fruit Bowl',
    category: 'Fruit Bowls',
    price: '₹65',
    description: 'A refreshing mix of seasonal fruits.',
    image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?w=700',
  },
  {
    id: 2,
    name: 'Watermelon Bowl',
    category: 'Fruit Bowls',
    price: '₹65',
    description: 'Fresh and juicy watermelon pieces.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBKDjwfQnww64rPgvhZG8v9YgzjrwMpCTnhUenmpiREH-r5-xb3ESAvjTJ&s=10',
  },
  {
    id: 3,
    name: 'Daily Veg Meals',
    category: 'Meals',
    price: '₹130',
    description: 'Homestyle vegetarian meal.',
    image: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=700',
  },
  {
    id: 4,
    name: 'Special Veg Meals',
    category: 'Meals',
    price: '₹130',
    description: 'A satisfying special vegetarian meal.',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=700',
  },
  {
    id: 5,
    name: 'Chicken Fry',
    category: 'Chicken Specials',
    price: '₹250',
    description: '250g chicken fry.',
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=700',
  },
  {
    id: 6,
    name: 'Chicken Kebab',
    category: 'Chicken Specials',
    price: '₹250',
    description: '250g chicken kebab.',
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=700',
  },
  {
    id: 7,
    name: 'Chicken 65',
    category: 'Chicken Specials',
    price: 'Ask for price',
    description: 'Spicy and crispy chicken starter.',
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=700',
  },
  {
    id: 8,
    name: 'Pepper Chicken',
    category: 'Chicken Specials',
    price: 'Ask for price',
    description: 'Chicken cooked with aromatic pepper spices.',
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=700',
  },
  {
    id: 9,
    name: 'Samosa',
    category: 'Snacks',
    price: 'Ask for price',
    description: 'Crispy, delicious snack.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700',
  },
  {
    id: 10,
    name: 'Onion Pakoda',
    category: 'Snacks',
    price: 'Ask for price',
    description: 'Crispy onion fritters.',
    image: 'https://images.unsplash.com/photo-1604908177522-402b5c6e1c6d?w=700',
  },
  {
    id: 11,
    name: 'Mirchi Bajji',
    category: 'Snacks',
    price: 'Ask for price',
    description: 'Traditional spicy evening snack.',
    image: 'https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7?w=700',
  },
  {
    id: 12,
    name: 'Punugulu',
    category: 'Snacks',
    price: 'Ask for price',
    description: 'Crispy South Indian snack.',
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=700',
  },
]

function App() {
  const [activeCategory, setActiveCategory] = useState('All Items')

  const filteredItems =
    activeCategory === 'All Items'
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory)

  return (
    <div className="website">
      {/* HEADER */}
      <header className="header">
        <a href="#home" className="logo">
          <span className="logo-mark">M</span>
          <span>MSORA FOODS</span>
        </a>

        <nav className="navigation">
          <a href="#home">Home</a>
          <a href="#menu">Our Menu</a>
          <a href="#corporate">Corporate Orders</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="header-actions">
          <a href={`tel:${PHONE_NUMBER}`} className="call-button">
            Call Us
          </a>

          <a
            href={whatsappLink('Hi MSORA FOODS, I would like to place an order.')}
            target="_blank"
            rel="noreferrer"
            className="header-button"
          >
            Order Now
          </a>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-content">
            <p className="eyebrow">FRESH FOOD. QUALITY. CARE.</p>

            <h1>
              Good Food,
              <br />
              <span>Better Days.</span>
            </h1>

            <p className="hero-description">
              Fresh fruit bowls, delicious meals and flavourful snacks
              for your everyday cravings and office gatherings.
            </p>

            <div className="hero-actions">
              <a href="#menu" className="primary-button">
                Explore Our Menu
              </a>

              <a href="#corporate" className="secondary-button">
                Corporate Orders
              </a>
            </div>

            <div className="hero-note">
              <span>✓</span> Individual orders and bulk enquiries welcome
            </div>
          </div>

          <div className="hero-image">
            <img
              src="https://images.unsplash.com/photo-1547592180-85f173990554?w=1000"
              alt="Fresh food served by MSORA FOODS"
            />

            <div className="image-label">
              <span>MSORA FOODS</span>
              <strong>Made with care.</strong>
            </div>
          </div>
        </section>

        {/* PRICE HIGHLIGHTS */}
        <section className="price-strip">
          <div className="price-item">
            <span>Fresh Fruit Bowls</span>
            <strong>₹65</strong>
          </div>

          <div className="price-divider" />

          <div className="price-item">
            <span>Homestyle Meals</span>
            <strong>₹130</strong>
          </div>

          <div className="price-divider" />

          <div className="price-item">
            <span>Chicken Specials (250g)</span>
            <strong>₹250</strong>
          </div>
        </section>

        {/* MENU */}
        <section className="menu-section section-padding" id="menu">
          <div className="section-heading">
            <p className="eyebrow">WHAT WE SERVE</p>
            <h2>Explore Our Menu</h2>
            <p>Something delicious for every appetite.</p>
          </div>

          <div className="category-list">
            {categories.map((category) => (
              <button
                key={category}
                className={
                  activeCategory === category
                    ? 'category-button active'
                    : 'category-button'
                }
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="menu-grid">
            {filteredItems.map((item) => (
              <article className="menu-card" key={item.id}>
                <div className="menu-image">
                  <img src={item.image} alt={item.name} loading="lazy" />
                </div>

                <div className="menu-details">
                  <span className="menu-category">{item.category}</span>

                  <div className="menu-title-row">
                    <h3>{item.name}</h3>
                    <strong>{item.price}</strong>
                  </div>

                  <p>{item.description}</p>

                  <a
                    href={whatsappLink(
                      `Hi MSORA FOODS, I am interested in ${item.name}. Please share availability and ordering details.`,
                    )}
                    target="_blank"
                    rel="noreferrer"
                    className="menu-order"
                  >
                    Enquire on WhatsApp →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CORPORATE ORDERS */}
        <section className="corporate-section" id="corporate">
          <div className="corporate-image">
            <img
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1000"
              alt="Food prepared for group orders"
              loading="lazy"
            />
          </div>

          <div className="corporate-content">
            <p className="eyebrow">FOR TEAMS & WORKPLACES</p>

            <h2>
              Good Food for
              <br />
              <span>Great Teams.</span>
            </h2>

            <p>
              Planning an office lunch, team meeting, employee gathering
              or corporate event? Contact MSORA FOODS for bulk food
              enquiries and menu details.
            </p>

            <ul>
              <li>Office lunch enquiries</li>
              <li>Team and group orders</li>
              <li>Meeting and event food enquiries</li>
              <li>Fruit bowls and snack orders</li>
            </ul>

            <a
              href={whatsappLink(
                'Hi MSORA FOODS, I would like to enquire about corporate or bulk food orders.',
              )}
              target="_blank"
              rel="noreferrer"
              className="primary-button"
            >
              Enquire for Corporate Orders
            </a>
          </div>
        </section>

        {/* LOCATION */}
        <section className="location-section">
          <p className="eyebrow">SERVING HYDERABAD</p>
          <h2>Food for Your Workday</h2>

          <p>
            Looking for meals, fruit bowls or snacks for your office?
            Contact us to check availability for your location.
          </p>

          <div className="location-tags">
            <span>HITEC City</span>
            <span>Madhapur</span>
            <span>Gachibowli</span>
            <span>Kondapur</span>
            <span>Financial District</span>
          </div>

          <a
            href={whatsappLink(
              'Hi MSORA FOODS, please confirm food availability and delivery options for my office location in Hyderabad.',
            )}
            target="_blank"
            rel="noreferrer"
            className="primary-button"
          >
            Check Location Availability
          </a>
        </section>

        {/* CONTACT */}
        <section className="contact-section section-padding" id="contact">
          <div>
            <p className="eyebrow">GET IN TOUCH</p>
            <h2>Let's Make Your Next Meal Special.</h2>

            <p>
              For menu details, orders, bulk enquiries or availability,
              connect with MSORA FOODS.
            </p>

            <p className="contact-number">
              Phone: <a href={`tel:${PHONE_NUMBER}`}>+91 93912 32809</a>
            </p>
          </div>

          <div className="contact-actions">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="primary-button"
            >
              Call Us Now
            </a>

            <a
              href={whatsappLink('Hi MSORA FOODS, I would like to know more.')}
              target="_blank"
              rel="noreferrer"
              className="secondary-button"
            >
              WhatsApp Us
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo footer-logo">
          <span className="logo-mark">M</span>
          <span>MSORA FOODS</span>
        </a>

        <p>Fresh food. Good taste. Better days.</p>

        <div className="footer-contact">
          <a href={`tel:${PHONE_NUMBER}`}>Call: +91 93912 32809</a>
          <a
            href={whatsappLink('Hi MSORA FOODS, I would like to enquire.')}
            target="_blank"
            rel="noreferrer"
          >
            WhatsApp Us
          </a>
        </div>

        <p className="copyright">
          © {new Date().getFullYear()} MSORA FOODS. All rights reserved.
        </p>
      </footer>

      {/* FLOATING WHATSAPP */}
      <a
        href={whatsappLink('Hi MSORA FOODS, I would like to place an order.')}
        target="_blank"
        rel="noreferrer"
        className="floating-whatsapp"
        aria-label="Contact MSORA FOODS on WhatsApp"
      >
        WhatsApp
      </a>
    </div>
  )
}

export default App
