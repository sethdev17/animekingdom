# animekingdom
const express = require('express');
const app = express();
const port = 3000;

// Rute pentru pagina principală
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="ro">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Pagină personalizată</title>
            <style>
                /* Setarea background-ului la negru */
                body {
                    background-color: black; /* Fundal negru */
                    color: white; /* Text alb pentru contrast */
                    font-family: Arial, sans-serif;
                    text-align: center;
                    padding: 20px;
                }

                h1 {
                    font-size: 2.5em;
                }

                p {
                    font-size: 1.2em;
                }

                a {
                    color: red; /* Culoare roșie pentru link */
                    text-decoration: none;
                }

                a:hover {
                    text-decoration: underline; /* Adaugă subliniere când treci cu mouse-ul peste link */
                }
            </style>
        </head>
        <body>
            <h1>Salut</h1>
            <p>Dacă ești un iubitor de animeuri te așteptăm pe server-ul nostru de Discord:</p>
            <p><a href="https://discord.gg/7bkkg9a5ee" target="_blank">Alătură-te serverului nostru de Discord</a></p>
        </body>
        </html>
    `);
});

// Pornirea serverului
app.listen(port, () => {
    console.log(`Serverul rulează pe http://localhost:${port}`);
});
