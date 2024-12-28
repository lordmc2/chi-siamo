<?php
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">
    <link rel="stylesheet" href="style.css"> <!-- Assicurati che questo file contenga gli stili -->
    <link rel="icon" href="main.png" type="image/x-icon">
    <title>Profile | Shadow</title>
</head>
<body>
    <header>
    <a href="main.php"><p class="logo">Profile</p></a>
        <nav>
            
        </nav>
    </header>
    <section class="home">
        <div class="home-img">
            <img src="main.png" alt="">
        </div>

        <nav>
        <ul>
            <li><a target="_blank" class="btn" href="main.php">Home</a></li>
            <li><a target="_blank" class="btn" href="esperienze.php">Esperienze</a></li>
        </ul>
    </nav>


        <div class="home-content">
            <h1>Hi, my name is <span>Shadow</span></h1>
            <h3 class="typing-text">I'm a <span>Developer</span></h3>
            <p>I am a junior programmer and developer currently on a journey to grow and improve my skills in the tech industry. I am passionate about programming languages and always excited to learn new technologies such as Java, Python, JavaScript, HTML, CSS, and PHP. My long-term goal is to become an expert developer capable of contributing to exciting and dynamic software projects while collaborating with experienced professionals in the field of programming and technology. I am eager to expand my knowledge of frameworks like Node.js. Aiming to become a versatile and well-rounded programmer, I still have a lot to learn, especially in languages like Java, but I am capable of producing high-quality work, even if it's just small tasks.</p>
            <div class="social-icons">


    </section>
</body>







<style>
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            text-decoration: none;
        }

        body {
            font-family: Arial, sans-serif;
            background-color: black;
            color: white;
        }

        /* Barra di navigazione */
        nav {
            position: fixed;
            top: 0;
            right: 0;
            background-color: black;
            padding: 1rem 9%;
            display: flex;
            justify-content: flex-start;
            align-items: center;
            z-index: 100;
        }

        ul {
            display: flex;
            list-style-type: none;
            padding: 0;
        }

        li {
            margin-right: 2rem;
        }

        a {
            color: white;
            font-weight: 600;
            font-size: 1.6rem;
            transition: color 0.3s ease;
        }

        a:hover {
            color: #01caca;
        }

        /* Posizionamento dei due bottoni .btn in alto a destra */
        .btn-container {
            position: fixed;
            top: 20px;   /* Distanza dal top */
            right: 20px; /* Distanza dal lato destro */
            display: flex;
            flex-direction: column; /* Posiziona i bottoni uno sotto l'altro */
            gap: 20px; /* Distanza tra i bottoni */
            z-index: 200;
        }

        .btn {
            padding: 1rem 2.8rem;
            background-color: black;
            border-radius: 4rem;
            font-size: 1.6rem;
            color: #01caca;
            letter-spacing: 0.3rem;
            font-weight: 600;
            border: 2px solid #01caca;
            transition: 0.3s ease;
            cursor: pointer;
        }

        /* Hover per il bottone */
        .btn:hover {
            transform: scale3d(1.03);
            background-color: #01caca;
            color: black;
            box-shadow: 0 0 25px #01caca;
        }

        /* Sezione principale della home */
        .home {
            min-height: 100vh;
            padding: 5rem 9% 5rem;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 8rem;
            background-color: black;
        }

        .home .home-content h1 {
            font-size: 6rem;
            font-weight: 700;
            line-height: 1.3;
        }

        .home .home-content p {
            font-size: 1.6rem;
        }
    </style>




















</html>


