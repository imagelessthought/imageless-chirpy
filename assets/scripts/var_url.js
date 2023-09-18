const links = document.querySelectorAll("a.web_url");
links.forEach(link => link.href = "https://itservices.cvad.unt.edu");
links.forEach(link => link.alt = "Back to Homepage");
links.forEach(link => link.innerHTML = "itservices.cvad.unt.edu");