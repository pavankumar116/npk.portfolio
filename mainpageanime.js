const texts = ["welcome To My Portfolio " ,"You Can Explore More Here","Imagination is more important than knowledge - AE"];
  let index = 0;
  let charIndex = 0;
  const speed = 100;
  const delayBetween = 1500;
  const element = document.getElementById("type-text");

  function typeWriter() {
    if (charIndex < texts[index].length) {
      element.textContent += texts[index].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, speed);
    } else {
      setTimeout(() => {
        element.textContent = "";
        charIndex = 0;
        index = (index + 1) % texts.length;
        typeWriter();
      }, delayBetween);
    }
  }

  typeWriter();