const images = document.querySelectorAll(".architecture-img");

console.log("Imágenes encontradas:", images.length);

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close-modal");

images.forEach(image => {

    image.addEventListener("click", () => {

        console.log("CLICK DETECTADO");

        modal.style.display = "block";

        modalImg.src = image.src;

    });

});

closeModal.addEventListener("click", () => {

    modal.style.display = "none";

});

modal.addEventListener("click", (e) => {

    if (e.target === modal) {

        modal.style.display = "none";

    }

});

document.addEventListener("keydown", (e) => {

    if (e.key === "Escape") {

        modal.style.display = "none";

    }

});