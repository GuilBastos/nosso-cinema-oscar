document.addEventListener('DOMContentLoaded', () => {

    const movieDetails = {
        title: "Hamnet",
        poster: "fotos/poster-hamnet.jpg",
        synopsis: "Em uma narrativa delicada e emocional, Hamnet acompanha uma família marcada por um acontecimento profundo que transforma suas vidas para sempre. A história mergulha no amor, na memória e nos laços que continuam existindo mesmo quando tudo parece mudar.",
        downloadLink: "https://drive.google.com/drive/folders/1uR-rEUDv0gqScgOJ2v9mbpUpNkJZwEug?hl=pt-br"
    };

    document.getElementById('movieTitle').textContent = movieDetails.title;

    const poster = document.getElementById('moviePoster');
    poster.src = movieDetails.poster;
    poster.alt = `Poster do filme: ${movieDetails.title}`;

    document.getElementById('movieSynopsis').textContent = movieDetails.synopsis;
    document.getElementById('downloadMovieLink').href = movieDetails.downloadLink;

    const countdownElement = document.getElementById('countdown');
    const startButton = document.getElementById('startCountdown');
    const resetButton = document.getElementById('resetCountdown');

    let countdownInterval;
    let timeLeft = 3;

    function updateCountdown() {

        if (timeLeft > 0) {

            countdownElement.textContent = timeLeft;

            countdownElement.style.transform = "scale(1.3)";
            setTimeout(() => {
                countdownElement.style.transform = "scale(1)";
            }, 200);

            timeLeft--;

        } else {

            countdownElement.textContent = "PLAY ❤️";

            clearInterval(countdownInterval);

            startButton.style.display = 'none';
            resetButton.style.display = 'inline-block';

        }
    }

    startButton.addEventListener('click', () => {

        timeLeft = 3;
        countdownElement.textContent = '';

        countdownInterval = setInterval(updateCountdown, 1000);

        startButton.disabled = true;

    });

    resetButton.addEventListener('click', () => {

        clearInterval(countdownInterval);

        countdownElement.textContent = '';

        startButton.style.display = 'inline-block';
        resetButton.style.display = 'none';

        startButton.disabled = false;

        timeLeft = 3;

    });

    const movieButton = document.getElementById("downloadMovieLink");

    movieButton.addEventListener("click", () => {
        setTimeout(() => {
            alert("Boa sessão, meu amor ❤️");
        }, 200);
    });

});