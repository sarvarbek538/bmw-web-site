let currentImageIndex = 0;
const images = ["bmw1.jpg", "bmw2.jpg", "bmw3.jpg", "bmw4.jpg", "bmw5.jpg", "bmw6.jpg", "bmw7.jpg", "bmw8.jpg", "bmw9.jpg", "bmw10.jpg"];

function showImage(index) {
    const img = document.getElementById("slider-image");
    img.src = images[index];
}

function prevImage() {
    currentImageIndex = (currentImageIndex > 0) ? currentImageIndex - 1 : images.length - 1;
    showImage(currentImageIndex);
}

function nextImage() {
    currentImageIndex = (currentImageIndex < images.length - 1) ? currentImageIndex + 1 : 0;
    showImage(currentImageIndex);
}

async function sendMessage(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const botToken = '7547840378:AAHCsyEGaxJrR_X3ioxQhHjsVKJp-rKWsh4';
    const chatId = '6206221012';
    const text = `Ism: ${name}\nEmail: ${email}\nXabar: ${message}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(text)}`;
    await fetch(url);

    alert("Xabaringiz yuborildi!");
}

function showDetails(model) {
    const titleElement = document.getElementById('model-title');
    const descriptionElement = document.getElementById('model-description');
    const detailsElement = document.getElementById('details');

    if (model === 'm8') {
        titleElement.innerText = "BMW M8";
        descriptionElement.innerText = "BMW M8 — 2019-yilda chiqarilgan yuqori qudratli sport avtomobili.";
    } else if (model === 'x5') {
        titleElement.innerText = "BMW X5";
        descriptionElement.innerText = "BMW X5 — 1999-yilda chiqarilgan sport SUV, uzoq yo‘l bosishga va qulaylikka mo‘ljallangan.";
    } else if (model === '3series') {
        titleElement.innerText = "BMW 3 Series";
        descriptionElement.innerText = "BMW 3 Series — Qulaylik va samaradorlikka ega mashhur sedan modeli.";
    } else if (model === '7series') {
        titleElement.innerText = "BMW 7 Series";
        descriptionElement.innerText = "BMW 7 Series — Oliy darajadagi hashamatli sedan, ilg‘or texnologiyalar bilan jihozlangan.";
    } else if (model === 'x7') {
        titleElement.innerText = "BMW X7";
        descriptionElement.innerText = "BMW X7 — Eng katta SUV modeli, keng ichki joy va kuchli motor bilan ta’minlangan.";
    } else if (model === 'i8') {
        titleElement.innerText = "BMW i8";
        descriptionElement.innerText = "BMW i8 — Gibrid sport avtomobili, ekologik toza va zamonaviy texnologiyalar bilan jihozlangan.";
    } else if (model === 'z4') {
        titleElement.innerText = "BMW Z4";
        descriptionElement.innerText = "BMW Z4 — Kabriolet sport avtomobili, dinamik haydov va ochiq dizayn bilan ajralib turadi.";
    }

    detailsElement.style.display = "block"; // Ma'lumotlarni ko'rsatish
}