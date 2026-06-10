function Hero(userName) {
    return `
        <section class="hero" id="home">

            <img
                id="ai-image"
                src="assets/images/ai-image.jpg"
                alt="AI Generated Image"
            >

            <h1>${userName}</h1>

            <p id="ai-message">
                Loading AI-generated content...
            </p>

            <button>Get Started</button>

        </section>
    `;
}