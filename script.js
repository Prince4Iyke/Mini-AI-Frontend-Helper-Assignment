// =====================================
// PERSONALIZATION LOGIC
// =====================================

const userName =
    prompt("Enter your name") || "Guest";

const hour = new Date().getHours();

let greeting = "";

if (hour < 12) {
    greeting = "Good Morning";
}
else if (hour < 18) {
    greeting = "Good Afternoon";
}
else {
    greeting = "Good Evening";
}


// =====================================
// RENDER COMPONENTS
// =====================================

document.getElementById("app").innerHTML =

    Navbar() +

    Hero(`${greeting}, ${userName}`) +

    `
    <section class="cards" id="projects">

        ${Card(
            "AI Portfolio Builder",
            "Generate professional portfolio content using AI."
        )}

        ${Card(
            "AI Blog Writer",
            "Create blog posts instantly with AI."
        )}

        ${Card(
            "AI Resume Builder",
            "Generate professional resumes in seconds."
        )}

    </section>

    <section class="about" id="about">

        <h2>About Us</h2>

        <p>
            This mini project demonstrates how AI can
            assist frontend developers by generating
            content, images, and personalized user
            experiences.
        </p>

    </section>
    ` +

    ContactForm();


// =====================================
// OPENAI AI TEXT INTEGRATION
// =====================================

async function generateAIContent() {

    try {

        const response = await fetch(
            "https://api.openai.com/v1/chat/completions",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json",

                    "Authorization":
                        "Bearer YOUR_API_KEY"
                },

                body: JSON.stringify({
                    model: "gpt-4o-mini",

                    messages: [
                        {
                            role: "user",
                            content:
                                `Generate a short welcome message for ${userName}`
                        }
                    ]
                })
            }
        );

        const data = await response.json();

        document.getElementById(
            "ai-message"
        ).textContent =
            data.choices[0].message.content;

    }
    catch (error) {

        document.getElementById(
            "ai-message"
        ).textContent =
            "Welcome to our AI-powered website.";

        console.error(error);
    }
}


// =====================================
// AI IMAGE INTEGRATION
// =====================================

function generateAIImage() {

    document.getElementById(
        "ai-image"
    ).src =
        `https://picsum.photos/1200/500?random=${Date.now()}`;
}


// =====================================
// INITIALIZE AI FEATURES
// =====================================

generateAIContent();
generateAIImage();