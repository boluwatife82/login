Here is the same raw, conversational student vibe for your login app—completely shortened, natural, and without a single bullet point.

---

## Login Authentication App

I built a simple full-stack login app using HTML, CSS, and vanilla JavaScript for the front end, backed by a Node.js and Express server. The app handles basic credential checking against a couple of hardcoded accounts like student123 and admin. My main goal here was to learn how to connect a user interface to an actual backend server and handle HTTP requests.

For the interface, I kept things responsive so it looks clean on both mobile and desktop. When a user fills out the form, the frontend JavaScript instantly checks for empty fields or passwords that are too short before even bothering the server. If everything looks good, it packages the data and fires it over to the backend using the Fetch API.

The Express server listens for that request, checks the username and password, and sends back a JSON response confirming if the login passed or failed. The frontend script reads that response on the fly and updates the page with a success or error message without forcing a full page reload. Inside the project folder, I kept things organized by throwing all the static frontend files into a public folder and leaving the server logic in the root directory.

Getting it running locally is pretty straightforward. You just open the terminal in the project folder, run npm install to grab Express, and start it up with node server.js before heading to localhost port 3000 in the browser. To take it a step further, I also figured out how to deploy it for free on Render by linking a GitHub repo and setting up the basic build and start commands so anyone can test it online.