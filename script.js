document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname;

    // 🔹 Паралакс-ефект (тільки для головної сторінки)
    if (currentPage.endsWith("index.html") || currentPage === "/") {
        const parallaxContainer = document.querySelector(".parallax-container");
        if (parallaxContainer) {
            const layers = document.querySelectorAll(".parallax-layer");
            let isMobile = window.innerWidth < 768;

            function updateParallax() {
                if (isMobile) return; // Вимкнути паралакс на мобільних

                const scrollY = window.scrollY;
                const containerHeight = parallaxContainer.offsetHeight;
                const scrollPercent = scrollY / containerHeight;

                layers.forEach(layer => {
                    const speed = parseFloat(layer.getAttribute('data-speed'));
                    const yPos = -(scrollY * speed);
                    layer.style.transform = `translate3d(0, ${yPos}px, 0)`;
                    
                    // Додаткові ефекти для глибини
                    if (speed > 0.3) {
                        const scale = 1 + (scrollPercent * speed * 0.2);
                        layer.style.transform += ` scale(${scale})`;
                    }
                });
            }

            // Оптимізація з requestAnimationFrame
            let ticking = false;
            window.addEventListener('scroll', function() {
                if (!ticking && !isMobile) {
                    window.requestAnimationFrame(function() {
                        updateParallax();
                        ticking = false;
                    });
                    ticking = true;
                }
            });

            // Перевірка на мобільні пристрої при ресайзі
            window.addEventListener('resize', function() {
                isMobile = window.innerWidth < 768;
            });

            // Ініціалізація
            updateParallax();
        }
    }

    // 🔹 Анімація заголовка (на всіх сторінках) - ваш оригінальний код
    const title = document.querySelector("h1");
    if (title) {
        title.style.opacity = "0";
        title.style.transform = "scale(0.8)";

        setTimeout(() => {
            title.style.transition = "opacity 1s ease-out, transform 1s ease-out";
            title.style.opacity = "1";
            title.style.transform = "scale(1)";
        }, 500);
    }

    // 🔹 Інтерактивне меню (на всіх сторінках) - ваш оригінальний код
    const header = document.querySelector("header");
    if (header) {
        let lastScrollY = window.scrollY;

        window.addEventListener("scroll", () => {
            if (window.scrollY > lastScrollY) {
                header.style.transform = "translateY(-100%)";
            } else {
                header.style.transform = "translateY(0)";
            }
            lastScrollY = window.scrollY;
        });
    }

    // 🔹 Динамічні оновлення (тільки на головній сторінці та видах спорту) - ваш оригінальний код
    if (currentPage.endsWith("index.html") || currentPage === "/" || currentPage.includes("/olimpic/") || currentPage.includes("/paraolimpic/")) {
        const updatesSection = document.querySelector(".updates-section ul");
        if (updatesSection) {
            const newUpdate = document.createElement("li");
            newUpdate.textContent = "🚀 Додано нові нормативи!";
            newUpdate.style.opacity = "0";

            updatesSection.appendChild(newUpdate);

            setTimeout(() => {
                newUpdate.style.transition = "opacity 1s ease";
                newUpdate.style.opacity = "1";
            }, 1000);
        }
    }

    // 🔹 Динамічне підсвічування таблиць (для сторінок з видами спорту) - ваш оригінальний код
    if (currentPage.includes("/olimpic/") || currentPage.includes("/paraolimpic/")) {
        document.querySelectorAll("table tr").forEach(row => {
            row.addEventListener("mouseover", () => {
                row.style.backgroundColor = "rgba(255, 215, 0, 0.2)";
            });

            row.addEventListener("mouseout", () => {
                row.style.backgroundColor = "";
            });
        });
    }

    // 🔹 Розкриття технічних порад (для сторінок з видами спорту) - ваш оригінальний код
    if (currentPage.includes("/olimpic/") || currentPage.includes("/paraolimpic/")) {
        document.querySelectorAll("ul li").forEach(item => {
            item.addEventListener("click", () => {
                item.style.fontWeight = "bold";
                item.style.color = "var(--primary)";
            });
        });
    }

    // 🔹 Оновлена анімація таблиць (для сторінок з видами спорту) - ваш оригінальний код
    if (currentPage.includes("/olimpic/") || currentPage.includes("/paraolimpic/")) {
        document.querySelectorAll("table tbody tr").forEach((row, index) => {
            row.style.opacity = "0";
            row.style.transform = "translateY(20px) scale(0.95)";
            row.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";

            setTimeout(() => {
                row.style.opacity = "1";
                row.style.transform = "translateY(0) scale(1)";
            }, index * 150);
        });
    }
});
