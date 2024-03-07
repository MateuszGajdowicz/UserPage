function pobierzDane() {
            // Pobieramy parametry z adresu URL
            var urlParams = new URLSearchParams(window.location.search);

            // Sprawdzamy, czy istnieje parametr "username" w adresie URL
            if(urlParams.has('username')) {
                // Pobieramy wartość parametru "username" z adresu URL
                var username = urlParams.get('username');

                // Wyświetlamy komunikat powitalny
                document.getElementById("welcome-message").innerText = "Hello, " + username + "!";
            }
        }

        // Wywołujemy funkcję pobierania danych po załadowaniu strony
        window.onload = pobierzDane;