import JSConfetti from 'js-confetti'

export const displayAlertOnButtonClick = () => {
 console.log("hello")
    const buttonClick = document.querySelector('#checkin');
    if (buttonClick) {
      buttonClick.addEventListener('click', (event) => {
        alert('Great! 🎉 a text has been sent to a member of staff who will be with you shortly.');
      });
    }

    const buttonCall = document.querySelector('#callme');
    if (buttonCall) {
      buttonCall.addEventListener('click', (event) => {
        alert('Calling you now');
      });
    }

    const buttonFinished = document.querySelector('#finish');
    const jsConfetti = new JSConfetti()

    if (buttonFinished) {
      buttonFinished.addEventListener('click', (event) => {
      //  alert('Amazing! 🎉 we hope you enjoyed your date.');
        jsConfetti.addConfetti()

      });
    }
  };





// const sound = document.getElementById("sound");
// const triggers = document.querySelectorAll(".js-confetti");
// const defaults = {
//   disableForReducedMotion: true
// };

// function fire(particleRatio, opts) {
//   confetti(
//     Object.assign({}, defaults, opts, {
//       particleCount: Math.floor(200 * particleRatio)
//     })
//   );
// }

// function confettiExplosion(origin) {
//   fire(0.25, {
//     spread: 26,
//     startVelocity: 55,
//     origin
//   });
//   fire(0.2, {
//     spread: 60,
//     origin
//   });
//   fire(0.35, {
//     spread: 100,
//     decay: 0.91,
//     origin
//   });
//   fire(0.1, {
//     spread: 120,
//     startVelocity: 25,
//     decay: 0.92,
//     origin
//   });
//   fire(0.1, {
//     spread: 120,
//     startVelocity: 45,
//     origin
//   });
// }

// Array.from(triggers).forEach((trigger) => {
//   trigger.addEventListener("click", () => {
//     const rect = trigger.getBoundingClientRect();
//     const center = {
//       x: rect.left + rect.width / 2,
//       y: rect.top + rect.height / 2
//     };
//     const origin = {
//       x: center.x / window.innerWidth,
//       y: center.y / window.innerHeight
//     };

//     if (sound) {
//       sound.currentTime = 0;
//       sound.play();
//     }
//     confettiExplosion(origin);
//   });
// });
