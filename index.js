document.querySelectorAll(".img-slide").forEach(slider_button => slider_button.addEventListener('click', slide));

function slide(e) {
    e.preventDefault;
    var image = document.querySelector(".image");
    image.classList.remove("fade");
    void image.offsetWidth;
    var imageID = document.querySelector(".image").id;
    var testimonialText = document.querySelector(".testimonial-text");
    var name1 = document.querySelector(".name");
    var job = document.querySelector(".job");
    // image.style.transition = "opacity 2s";
    // image.classList.toggle("transparent");
    image.classList.add("fade");

    if (imageID === "img-1") {
        image.src = "./images/image-john.jpg";
        image.id = "img-2";
        // imageID = "img-2";
        testimonialText.innerHTML = "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”";
        name1.innerHTML = "John Tarkpor";
        job.innerHTML = "&ensp;Junior Front-end Developer";

    } else if (imageID === "img-2") {
        image.src = "./images/image-tanya.jpg";
        image.id = "img-1";
        // imageID = "img-1";
        testimonialText.innerHTML = "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”";
        name1.innerHTML = "Tanya Sinclair";
        job.innerHTML = "&ensp;UX Engineer";

    }

}