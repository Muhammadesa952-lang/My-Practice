// 3. Quiz Game Engine
class QuizGame {
  constructor(questions) {
    this.questions = questions;
    this.score = 0;
    this.currentIndex = 0;
  }

  getCurrentQuestion() {
    return this.questions[this.currentIndex];
  }

  submitAnswer(choiceIndex) {
    const current = this.getCurrentQuestion();
    if (!current) return;

    if (choiceIndex === current.correctIndex) {
      this.score += 10;
      console.log("Correct! +10 points.");
    } else {
      console.log(
        `Wrong! The correct answer was: ${current.options[current.correctIndex]}`,
      );
    }
    this.currentIndex++;
  }

  isFinished() {
    return this.currentIndex >= this.questions.length;
  }

  getResults() {
    const maxScore = this.questions.length * 10;
    const percentage = (this.score / maxScore) * 100;
    return {
      score: this.score,
      maxScore,
      percentage: percentage.toFixed(1) + "%",
    };
  }
}

// Data & Execution
const sampleQuestions = [
  {
    question: "What language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    correctIndex: 3,
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Central Style System",
      "Computer Style Sheet",
    ],
    correctIndex: 0,
  },
];

const quiz = new QuizGame(sampleQuestions);
console.log(quiz.getCurrentQuestion().question);
quiz.submitAnswer(3);
console.log(`Final Results:`, quiz.getResults());
