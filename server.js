const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const currentHour = new Date().getHours();

    let welcomeMessage = '';
    let icon = '';
    let messageColor = '';
    let imageGlowColor = '#00BFFF';

    if (currentHour >= 5 && currentHour < 12) {
        welcomeMessage = 'Bună dimineața!';
        icon = '<i class="material-icons">wb_sunny</i>';
        messageColor = '#FFD700';
    } else if (currentHour >= 12 && currentHour < 18) {
        welcomeMessage = 'Bună ziua!';
        icon = '<i class="material-icons">wb_cloudy</i>';
        messageColor = '#FF6347';
    } else {
        welcomeMessage = 'Bună seara!';
        icon = '<i class="material-icons">nights_stay</i>';
        messageColor = '#00BFFF';
    }

    res.send(`
        <!DOCTYPE html>
        <html lang="ro">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Site server anime</title>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <style>
                body {
                    background-color: #000000;
                    color: white;
                    font-family: 'Arial', sans-serif;
                    padding: 20px;
                    margin: 0;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    text-align: left;
                }

                h1 {
                    font-size: 3em;
                    margin-bottom: 20px;
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    color: ${messageColor};
                }

                p {
                    font-size: 1.2em;
                    color: #ccc;
                    line-height: 1.6;
                    margin-bottom: 20px;
                    white-space: pre-wrap;
                }

                /* Fontul de mașină de scris pentru paragraf */
                .machine-text {
                    font-family: 'Courier New', Courier, monospace;
                }

                a {
                    color: #FF0000;
                    text-decoration: none;
                    font-weight: bold;
                    padding: 10px;
                    border-radius: 5px;
                    display: inline-block;
                    transition: box-shadow 0.3s ease, color 0.3s ease;
                    margin-bottom: 30px; /* Spațiu ca să nu fie aproape de imagine */
                }

                a:hover {
                    box-shadow: 0 0 5px 2px #FF6347;
                }

                a:active {
                    color: #FF0000;
                }

                .image-container img {
                    max-width: 100%;
                    border-radius: 15px;
                    box-shadow: 0 0 15px 5px ${imageGlowColor};
                    margin-bottom: 10px;
                }

                .image-container p {
                    margin-top: 10px;
                    margin-bottom: 5px;
                }

                .footer {
                    width: 100%;
                    text-align: center;
                    font-size: 0.9em;
                    padding: 10px 0;
                    background: rgba(0, 0, 0, 0.8);
                    color: #aaa;
                }

                .footer span {
                    color: #0066CC;
                    font-weight: 600;
                }

                @media (max-width: 768px) {
                    h1 {
                        font-size: 2.5em;
                    }
                    p {
                        font-size: 1em;
                    }
                    .image-container img {
                        width: 90%;
                    }
                }
            </style>
        </head>
        <body>
            <div class="content">
                <h1>${welcomeMessage} ${icon}</h1>
                <p>Dacă ești un iubitor de anime-uri te așteptăm pe server-ul nostru de Discord:</p>
                <p><a href="https://discord.gg/7bkkg9a5ee" target="_blank">Alătură-te serverului nostru!</a></p>

                <div class="image-container">
                    <img src="https://i.imgur.com/FmA2uln.jpeg" alt="Anime">
                    <p class="machine-text">
Salutare, după cum cred că deja v-ați dat seama... îmi plac anime-urile, și cu ocazia aceasta, am decis să-mi creez propriul meu server de discord pe această temă.
De ce? Deoarece în viața mea cunosc foarte puține (spre deloc) persoane ce se uită la acest gen de divertisment și m-am gândit că dacă aș crea o comunitate șansele de a cunoaște oameni cu aceleași gusturi, cresc.
Și nu-i acesta singurul motiv, mă gândeam că făcând asta, aș reuși să unesc oamenii și să creez un mediu prietenos și plăcut pentru ei deoarece probabil, majoritatea trec prin aceleași situații.
Deocamdată încă nu am reușit să-mi împlinesc acest vis dar cu puțină răbdare și speranță, cred că voi reuși.
                    </p>
                </div>
            </div>

            <div class="footer">
                <p>&copy; 2025 <span>SethDev</span>. Toate drepturile rezervate.</p>
            </div>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(`Serverul rulează pe http://localhost:${port}`);
});
