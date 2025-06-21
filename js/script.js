      // Typing effect for typing-text
      const typingText = document.querySelector(".typing-text span");
      const cursor = document.querySelector(".cursor");
      const words = ["Web Developerr", "Web Designerr", "Youtuberr"];
      let wordIndex = 0;
      let charIndex = 0;
      let isDeleting = false;

      function typeEffect() {
        const currentWord = words[wordIndex];
        const displayedText = isDeleting
          ? currentWord.substring(0, charIndex--)
          : currentWord.substring(0, charIndex++);

        typingText.textContent = displayedText;
        cursor.style.left = `${typingText.offsetWidth}px`; // Update cursor position

        if (!isDeleting && charIndex === currentWord.length) {
          isDeleting = true;
          setTimeout(typeEffect, 2000); // Pause before deleting
        } else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(typeEffect, 500); // Pause before typing next word
        } else {
          setTimeout(typeEffect, isDeleting ? 100 : 200);
        }
      }
