

const ScoreFeedback = ({ scorePercent }: {scorePercent: number}) => {
  const getFeedbackMessage = () => {
    if (scorePercent === 100) return "JavaScript Sensei, you can bend JavaScript at your will.";
    if (scorePercent >= 90) return "JavaScript Master, you can write JavaScript code in your sleep.";
    if (scorePercent >= 80) return "JavaScript Hero, you can work on any JavaScript codebase.";
    if (scorePercent >= 70) return "JavaScript Pro, you understand JavaScript well.";
    if (scorePercent >= 60) return "JavaScript Soy Dev, you are understanding JavaScript well, keep learning.";
    if (scorePercent >= 50) return "JavaScript Intermediate, keep learning.";
    if (scorePercent >= 40) return "JavaScript Beginner, work hard there is a lot to learn.";
    if (scorePercent >= 30) return "You don't know JavaScript yet.";
    return "";
  };

  const message = getFeedbackMessage();

  if (!message) return null;

  return (
    <div className="">
      <p className="font-bold">{message}</p>
    </div>
  );
};

export default ScoreFeedback;