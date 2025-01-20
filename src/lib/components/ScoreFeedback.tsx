const ScoreFeedback = ({ score }: { score: number }) => {
  const getFeedbackMessage = () => {
    if (score === 100) return "🏅 JavaScript Sensei 💯";
    if (score >= 90) return "🏅 JavaScript Master 👑";
    if (score >= 70) return "🏅 JavaScript Pro 🏆";
    if (score >= 50) return "🏅 JavaScript Soydev 💼";
    if (score >= 40) return "🏅 JavaScript Beginner 🏋";
    if (score >= 30) return "You don't know JavaScript yet 🙏";
    return "";
  };

  const message = getFeedbackMessage();

  if (!message) return null;

  return <p className="text-lg">{message}</p>;
};

export default ScoreFeedback;
