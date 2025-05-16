
particlesJS("particles-js", {
  particles: {
    number: {
      value: 80,
      density: { enable: true, value_area: 700 }
    },
    color: {
      value: ["#9f00ff", "#ffcc00"]
    },
    shape: { type: "circle" },
    opacity: { value: 0.9 },
    size: {
      value: 4,
      random: true
    },
    line_linked: {
      enable: true,
      distance: 120,
      color: "#ffcc00",
      opacity: 0.6,
      width: 1.8
    },
    move: {
      enable: true,
      speed: 4,
      attract: {
        enable: true,
        rotateX: 800,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: true, mode: "repulse" },
      onclick: { enable: true, mode: "push" }
    },
    modes: {
      repulse: { distance: 150, duration: 0.6 },
      push: { particles_nb: 3 }
    }
  },
  retina_detect: true
});
