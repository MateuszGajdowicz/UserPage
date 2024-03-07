function pobierzDane() {
    let h1 = document.getElementById("h1");
            // Pobieramy parametry z adresu URL
            var urlParams = new URLSearchParams(window.location.search);

            // Sprawdzamy, czy istnieje parametr "username" w adresie URL
            if(urlParams.has('username')) {
                // Pobieramy wartość parametru "username" z adresu URL
                var username = urlParams.get('username');

                // Wyświetlamy komunikat powitalny
                h1.textContent = "hello" + username;
            }
        }

        // Wywołujemy funkcję pobierania danych po załadowaniu strony
        window.onload = pobierzDane;