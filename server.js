const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    // Obține ora curentă
    const currentHour = new Date().getHours();

    // Mesajul de bun venit în funcție de ora zilei
    let welcomeMessage = '';
    if (currentHour >= 5 && currentHour < 12) {
        welcomeMessage = 'Bună dimineața!';
    } else if (currentHour >= 12 && currentHour < 18) {
        welcomeMessage = 'Bună ziua!';
    } else {
        welcomeMessage = 'Bună seara!';
    }

    res.send(`
        <!DOCTYPE html>
        <html lang="ro">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Site server anime</title>
            <style>
                body {
                    background-color: black;
                    color: white;
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    margin: 0;
                    display: flex;
                    justify-content: flex-start;
                    align-items: flex-start;
                    flex-direction: column;
                    overflow-y: auto;
                    height: auto;
                }

                h1 {
                    font-size: 2.5em;
                    margin-bottom: 20px;
                }

                p {
                    font-size: 1.2em;
                    margin: 10px 0;
                }

                a {
                    color: red;
                    text-decoration: none;
                    font-weight: bold;
                }

                a:hover {
                    text-decoration: underline;
                }

                .image-container img {
                    max-width: 100%;
                    height: auto;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
                    margin-top: 20px;
                }

                /* Media queries pentru a îmbunătăți stilul pe dispozitive mobile */
                @media (max-width: 768px) {
                    body {
                        padding: 10px;  /* Reducem padding-ul pe dispozitive mobile pentru mai mult spațiu */
                    }

                    h1 {
                        font-size: 2em;  /* Diminuăm fontul pentru titluri pe mobile */
                    }
                }

            </style>
        </head>
        <body>
            <h1>${welcomeMessage}</h1>
            <p>Dacă ești un iubitor de anime-uri te așteptăm pe server-ul nostru de Discord:</p>
            <p><a href="https://discord.gg/7bkkg9a5ee" target="_blank">Alătură-te serverului nostru de Discord</a></p>

            <div class="image-container">
                <img src="https://i.imgur.com/FmA2uln.jpeg" alt="Anime">
            </div>

            <p>Salutare, după cum cred că deja v-ați dat seama... îmi plac anime-urile, și cu ocazia aceasta, am decis să-mi creez propriul meu server de discord pe această temă. De ce? Deoarece în viața mea cunosc foarte puține (spre deloc) persoane ce se uită la acest gen de divertisment și m-am gândit că dacă aș crea o comunitate șansele de a cunoaște oameni cu același gusturi, cresc. Și nu-i acesta singurul motiv, mă gândeam că făcând asta, aș reuși să unesc oamenii și să creez un mediu prietenos și plăcut pentru ei deoarece probabil, majoritatea trec prin aceleași situații. Deocamdată încă nu am reușit să-mi împlinesc acest vis dar cu puțină răbdare și speranță, cred că voi reuși.</p>

            <script>
            </script>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Serverul rulează pe http://localhost:${port}`);
});
