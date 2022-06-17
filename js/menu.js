window.addEventListener("load", function () {
     const links = [...document.querySelectorAll(".nav_link")];
     const header_nav = document.querySelector(".header_nav")
     const nav_close = document.querySelector(".nav_close");
     const nav_open = document.querySelector(".nav_open");
     const body = document.querySelector("body");
     const recipes_heart = document.querySelector(".recipes_heart")
     const recipes_heart_i = document.querySelector(".bxs-heart")

     links.forEach(item => item.addEventListener("mouseenter", handelHoverLink));
     const line = document.createElement("div");
     line.className = "line_effect";
     document.body.appendChild(line)

     function handelHoverLink(event) {
          const { left, top, width, height } = event.target.getBoundingClientRect();
          const offsetBT = 1;
          console.log({ left, top, width, height })
          line.style.width = ` ${width / 2}px`
          line.style.left = ` ${left}px`
          line.style.top = ` ${top + height + offsetBT}px`
     }
     // const menu = document.querySelector(".header_nav");
     header_nav.addEventListener("mouseleave", function () {
          line.style.width = 0;
     })

     nav_open.addEventListener("click", () => {
          header_nav.classList.add("active")
     })
     nav_close.addEventListener("click", () => {
          header_nav.classList.remove("active")
     })

     recipes_heart.addEventListener("click", (e) => {
          recipes_heart_i.classList.add("active")
     })



})
