let arrnav = Array.from(document.querySelectorAll(".home li a"));
let arrdiv = Array.from(document.querySelectorAll("body > div"));
document.body.onscroll = () => {
  arrdiv.forEach((d) => {
    if (d.offsetTop - 10 <= scrollY) {
      arrnav.forEach((n) => {
        n.dataset.gold == d.id
          ? n.classList.add("active")
          : n.classList.remove("active");
      });
    }
  });
};
let ul = document.querySelector(".home ul ");
document.querySelector(".home .nav i").onclick = () => {
  ul.classList.contains("media")
    ? ul.classList.remove("media")
    : ul.classList.add("media");
};
let arrpara = Array.from(document.querySelectorAll(".portfolio .box p"));
let arrimg = Array.from(document.querySelectorAll(".portfolio .box img"));
let arrimghaned = Array.from(document.querySelectorAll(".haden img"));
arrpara.forEach((p, i) => {
  p.addEventListener("click", () => {
    document.querySelector(".haden").style.display = "flex";
    arrimghaned.forEach((h) => h.classList.remove("active"));
    arrimghaned[i].classList.add("active");
    document.querySelector(".haden .center i").onclick = () => {
      document.querySelector(".haden").style.display = "none";
    };
  });
  document.querySelector(".haden > i:first-child").onclick = () => {
    i == 0 ? (i = arrimghaned.length - 1) : i--;
    arrimghaned.forEach((h) => h.classList.remove("active"));
    arrimghaned[i].classList.add("active");
  };
  document.querySelector(".haden > i:last-child").onclick = () => {
    i == arrimghaned.length - 1 ? (i = 0) : i++;
    arrimghaned.forEach((h) => h.classList.remove("active"));
    arrimghaned[i].classList.add("active");
  };
});
let li = Array.from(document.querySelectorAll(".portfolio li"));
let box = Array.from(document.querySelectorAll(".portfolio .box"));
li.forEach((l) => {
  l.addEventListener("click", () => {
    li.forEach((i) => i.classList.remove("active"));
    l.classList.add("active");
    box.forEach((b) => {
      b.classList.contains(l.dataset.gold)
        ? (b.style.display = "block")
        : (b.style.display = "none");
    });
  });
});
