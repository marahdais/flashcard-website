// Get references to HTML elements
const flashcard = document.getElementById('flashcard');
const front = document.getElementById('front');
const back = document.getElementById('back');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Debugging logs
console.log("Flashcard:", flashcard);
console.log("Front:", front);
console.log("Back:", back);
console.log("Previous Button:", prevBtn);
console.log("Next Button:", nextBtn);

// Flashcard data
const flashcards = [
  { front: 'Bonjour', back: 'Hello' },
  { front: 'Merci', back: 'Thank you' },
  { front: 'Au revoir', back: 'Goodbye' },
  { front: 'S\'il vous plaît', back: 'Please (formal)' },
  { front: 'Oui', back: 'Yes' },
  { front: 'Non', back: 'No' },
];

let currentIndex = 0;

// Function to display the current flashcard
function updateFlashcard(index) {
  if (!front || !back) {
    console.error("Front or Back element not found.");
    return;
  }
  front.textContent = flashcards[index].front;
  back.textContent = flashcards[index].back;
  flashcard.classList.remove('flipped'); // Reset flipped state
}

// Flip the flashcard on click
if (flashcard) {
  flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('flipped');
  });
} else {
  console.error("Flashcard element not found!");
}

// Navigate to the previous flashcard
if (prevBtn) {
  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    updateFlashcard(currentIndex);
  });
} else {
  console.error("Previous button element not found!");
}

// Navigate to the next flashcard
if (nextBtn) {
  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    updateFlashcard(currentIndex);
  });
} else {
  console.error("Next button element not found!");
}

// Initialize the first flashcard
updateFlashcard(currentIndex);