const Pricing = () => {
  return (
    <section className="pricing-section" id="pricing">
      <div className="container">
        <h2 className="section-title">Pricing</h2>
        <h3 className="section-subtitle">Choose a package that suits your needs.</h3>

        <div className="pricing-cards">
          <div className="pricing-card">
            <h3>Basic</h3>
            <p className="price">Rp 100.000</p>
            <ul>
              <li>1 Template</li>
              <li>Custom Text</li>
              <li>No Revisions</li>
            </ul>
            <button className="order-button">Order Now</button>
          </div>

          <div className="pricing-card popular">
            <h3>Pro</h3>
            <p className="price">Rp 250.000</p>
            <ul>
              <li>3 Template Options</li>
              <li>Custom Text & Colors</li>
              <li>2x Revisions</li>
            </ul>
            <button className="order-button">Order Now</button>
          </div>

          <div className="pricing-card">
            <h3>Premium</h3>
            <p className="price">Rp 500.000</p>
            <ul>
              <li>Unlimited Template Access</li>
              <li>Full Customization</li>
              <li>Unlimited Revisions</li>
            </ul>
            <button className="order-button">Order Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;