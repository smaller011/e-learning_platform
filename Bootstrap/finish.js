document.addEventListener("DOMContentLoaded", () => {
      console.log("Confetti rain starting...");

       function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
       };
      // run forever (continuous rain)
      setInterval(() => {
        confetti({
          particleCount: 100,
          startVelocity: 20,
          spread: 360,
          ticks: 60,
          origin: {
            x: Math.random(), // random horizontal position
            y: 0 // always from the top
          }
        });
      }, 300); // every 300ms
    });