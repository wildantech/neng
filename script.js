document.getElementById('quizForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const correctAnswers = ['B', 'C', 'B', 'A', 'C', 'A', 'B', 'C', 'A', 'B'];
    let score = 0;
  
    for (let i = 1; i <= 10; i++) {
      const answer = document.querySelector(`input[name="q${i}"]:checked`);
      if (answer && answer.value === correctAnswers[i - 1]) {
        score++;
      }
    }
  
    let message = '';
    if (score === 10) {
      message = "💖 Wahh kamu kenal banget sama aku! Bener semua! 💖";
    } else if (score >= 7) {
      message = "✨ Kita emang cocok banget! Jawabanmu hampir semua bener!";
    } else {
      message = "😅 Masih ada yang harus kita ngobrolin bareng nih...";
    }
  
    document.getElementById('result').innerHTML = `
      <p>Nilai kamu: ${score}/10</p>
      <p>${message}</p>
    `;
  });
  