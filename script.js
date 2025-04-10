
const tabs = document.querySelectorAll('.sidebar li');
const sections = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(tab.dataset.tab).classList.add('active');
  });
});


const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.timeline-event').forEach(el => observer.observe(el));


const certs = document.querySelectorAll('.cert-item');
let currentCert = 0;

setInterval(() => {
  certs[currentCert].classList.remove('active');
  currentCert = (currentCert + 1) % certs.length;
  certs[currentCert].classList.add('active');
}, 2000);


const quotes = [

  "Not just achievements, but stories they hold,<br>A journey of growth, brave and bold.",
  "With every badge, a chapter earned,<br>In fires of challenge, these skills were learned.",
  "Each cert a symbol, each badge a spark,<br>Lighting the way through paths once dark."
];

const certQuote = document.getElementById("certQuote");
const randomIndex = Math.floor(Math.random() * quotes.length);
certQuote.innerHTML = quotes[randomIndex];

function renderAttachment(filePath) {
  const ext = filePath.split('.').pop().toLowerCase();
  if (['jpg', 'jpeg', 'png', 'gif'].includes(ext)) {
    return `<img src="${filePath}" alt="attachment">`;
  } else if (ext === 'pdf') {
    return `<embed src="${filePath}" type="application/pdf" />`;
  } else {
    return `<a href="${filePath}" target="_blank">📎 Download Attachment</a>`;
  }
}

async function loadPegaQAs() {
  try {
    const res = await fetch('assets/data.json');
    const data = await res.json();
    const list = document.getElementById('qa-list');
    list.innerHTML = '';

    data.forEach(item => {
      const div = document.createElement('div');
      div.className = 'qa-item';
      div.innerHTML = `
        <h3>❓ ${item.question}</h3>
        <p class="answer">💬 ${item.answer}</p>
        ${item.attachment ? renderAttachment(item.attachment) : ''}
        <span class="timestamp">🕒 ${item.timestamp}</span>
      `;
      list.appendChild(div);
    });
  } catch (error) {
    console.error("Error loading data.json:", error);
    document.getElementById('qa-list').innerHTML = "<p>⚠️ Unable to load Q&A data.⚠️</p>";
  }
}

// ⏳ Load when Pega tab is clicked
document.querySelector('[data-tab="pega"]').addEventListener('click', loadPegaQAs);


// type writing

const quoteWords = [
  "I", "am", "not", "just", "a", "developer, I", "am", "a", "strategic", "craftsman,",
  "Bridging", "business", "with", "technology,", "blending", "structure", "with", "imagination.",
  "Ever-curious,", "ever-evolving,", "I", "rise", "with", "every", "challenge,",
  "Fueling", "the", "future", "with", "Pega powered", "precision", "and", "purpose."
];

const quoteElement = document.getElementById("typewriter-text");

let index = 0;
function typeNextWord() {
  if (index < quoteWords.length) {
    quoteElement.innerHTML += quoteWords[index] + " ";
    index++;
    setTimeout(typeNextWord, 250); // typing speed
  }
}

window.addEventListener("load", typeNextWord); // or trigger on tab show

document.getElementById('hamburgerBtn').addEventListener('click', function () {
  document.querySelector('.sidebar').classList.toggle('active');
});

// Close sidebar on menu click (mobile)
document.querySelectorAll(".sidebar ul li").forEach(item => {
  item.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    if (window.innerWidth <= 768 && sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
    }
  });
});

// Ensure sidebar closes and scrolls to top on menu click (mobile)
document.querySelectorAll(".sidebar ul li").forEach(item => {
  item.addEventListener("click", () => {
    const sidebar = document.querySelector(".sidebar");
    if (window.innerWidth <= 768 && sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });
});


// welcome

window.addEventListener('DOMContentLoaded', () => {
  const textElement = document.getElementById('animated-text');

  // Step 1: Show "Welcome" (already showing)
  setTimeout(() => {
    // Step 2: Fade out "Welcome"
    textElement.style.opacity = '0';

    setTimeout(() => {
      // Step 3: Show "Hello"
      textElement.textContent = "Hello";
      textElement.style.opacity = '1';

      // Step 4: After a while, fade out "Hello"
      setTimeout(() => {
        textElement.style.opacity = '0';

        setTimeout(() => {
          // Step 5: Show "I am Vijendhar Reddy"
          textElement.textContent = "I am Vijendhar Reddy";
          textElement.style.opacity = '1';
        }, 500); // fade-out duration

      }, 2000); // time to display "Hello"

    }, 500); // fade-out duration

  }, 3000); // initial "Welcome" duration
});

//preloader



window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const preloader = document.getElementById('preloader');
    preloader.style.opacity = '0';
    preloader.style.pointerEvents = 'none';
    setTimeout(() => preloader.style.display = 'none', 500);
  }, 3000);
});


const greetings = [
  "Hello",        // English
  "హలో",          // Telugu
  "नमस्ते",        // Hindi
  "Bonjour",      // French
  "Hola",         // Spanish
  "Ciao",         // Italian
  "Hallo",        // German
  "こんにちは",     // Japanese
  "안녕하세요",      // Korean
  "مرحبا",         // Arabic
  "வணக்கம்",        // Tamil
  "Olá",          // Portuguese
  "Salam",        // Persian
];

let greetIndex = 0;
const helloText = document.getElementById("helloText");

setInterval(() => {
  greetIndex = (greetIndex + 1) % greetings.length;
  helloText.textContent = greetings[greetIndex];
}, 700); // change every 2 seconds

// star


function createRandomSparkles(count = 20) {
  const preloader = document.getElementById('preloader');

  for (let i = 0; i < count; i++) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');

    // Random position inside preloader
    sparkle.style.top = `${Math.random() * 100}%`;
    sparkle.style.left = `${Math.random() * 100}%`;

    // Random delay to make sparkle loop at different times
    sparkle.style.animationDelay = `${Math.random() * 3}s`;
    sparkle.style.animationDuration = `${1.5 + Math.random() * 2}s`;

    preloader.appendChild(sparkle);
  }
}

window.addEventListener('DOMContentLoaded', () => {
  createRandomSparkles(25); // you can increase or decrease number
});

