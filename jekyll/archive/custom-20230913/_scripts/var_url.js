const links = document.querySelectorAll("a.web_url");
links.forEach(link => link.href = "https://innovate.cvad.unt.edu");
links.forEach(link => link.alt = "Back to Homepage");
links.forEach(link => link.innerHTML = "innovate.cvad.unt.edu");