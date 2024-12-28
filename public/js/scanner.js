const scanner = new Html5QrcodeScanner("reader", {
  // Scanner will be initialized in DOM inside element with id of 'reader'
  qrbox: {
    width: 250,
    height: 250,
  }, // Sets dimensions of scanning box (set relative to reader element width)
  fps: 20, // Frames per second to attempt a scan
});

scanner.render(success, error);
// Starts scanner

function success(result) {
  // text area
  document.getElementById("result").innerHTML = `${result}`;

  // bot input field
  let abc = (document.getElementById("messageInput").value = `${result}`
    .split(" ")
    .slice(0, 3)
    .join(" "));

  console.log(abc);

  // scanner.clear();
  // Clears scanning instance

  // document.getElementById('reader').remove();
  // Removes reader element from DOM since no longer needed
}

function error(err) {
  console.error(err);
  // Prints any errors to the console
}

let speech = new SpeechSynthesisUtterance();

document.getElementById("speakbtn").addEventListener("click", function () {
  speech.text = document.querySelector("textarea").value;
  window.speechSynthesis.speak(speech);
});

// scroll to scanner///////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("scrollButton")
    .addEventListener("click", function () {
      // Smooth scroll using requestAnimationFrame
      let start = null;
      const scrollStep = 310; // Scroll 100 pixels
      const scrollDuration = 500; // Duration of the scroll animation in ms

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const r = progress / scrollDuration;
        const amount = r * scrollStep;
        window.scrollBy(0, amount - window.scrollY);
        if (progress < scrollDuration) {
          window.requestAnimationFrame(step);
        } else {
          window.scrollBy(0, scrollStep - (amount - window.scrollY));
        }
      }

      window.requestAnimationFrame(step);
    });
});

//scroll to Bot ////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("scrollButton2")
    .addEventListener("click", function () {
      // Smooth scroll using requestAnimationFrame
      let start = null;
      const scrollStep = 669; // Scroll 100 pixels
      const scrollDuration = 500; // Duration of the scroll animation in ms

      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const r = progress / scrollDuration;
        const amount = r * scrollStep;
        window.scrollBy(0, amount - window.scrollY);
        if (progress < scrollDuration) {
          window.requestAnimationFrame(step);
        } else {
          window.scrollBy(0, scrollStep - (amount - window.scrollY));
        }
      }

      window.requestAnimationFrame(step);
    });
});
