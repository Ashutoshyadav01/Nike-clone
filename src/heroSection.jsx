const HeroSection = () => {
    return (
        <main className="hero container">
            <div className="hero-content">
                <h1>YOUR FEET DESERVE THE BEST</h1>
                <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                <div className="hero-btn">
                    <button>Shop Now</button>
                    <button id="btn2">Category</button>
                </div>
                <div className="shoping">
                    <p>Also Available on</p>
                    <div className="brand-icons">
                        <img src="./image/amazon.png" alt="amazon" />
                        <img src="./image/flipkart.png" alt="flipkart" />
                    </div>
                </div>
            </div>
            <div className="hero-image">
                <img src="./image/shoe_image.png" alt="shoe image" />
            </div>
        </main>
    )
}
export default HeroSection;