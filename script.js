function checkAnswer() {
  const problemElement = document.getElementById('problem');
  const answerElement = document.getElementById('answer');
  const resultElement = document.getElementById('result');
  const scoreElement = document.getElementById('currency');

  const problem = problemElement.innerText;
  const userAnswer = parseInt(answerElement.value, 10);

  const [num1, operator, num2] = problem.split(' ').map(item => isNaN(item) ? item : parseInt(item, 10));
  let correctAnswer;

  // if (operator === '+') {
  //  correctAnswer = num1 + num2;
  // } else {
  //  correctAnswer = num1 - num2;
  // }

  if (userAnswer === correctAnswer) {
    resultElement.innerText = 'Correct! Well done!';
    resultElement.style.color = '#4caf50'; // green color for correct
    score += 10; // Increase score by 10 for each correct answer
  } else {
    resultElement.innerText = 'Oops! Try again.';
    resultElement.style.color = '#e74c3c'; // red color for incorrect
    score = Math.max(0, score - 1); // Decrease score by 1 for each incorrect answer, but never go below 0
  }

  scoreElement.innerText = `Score: ${score}`;
  problemElement.innerText = generateProblem();
  answerElement.value = '';
}
