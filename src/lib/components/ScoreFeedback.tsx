const ScoreFeedback = ({ score }: { score: number }) => {
  const getFeedbackMessage = () => {
    if (score === 100) return "🏅 Sensei 💯";
    if (score >= 90) return "🏅 Master 👑";
    if (score >= 80) return "🏅 Pro 🏆";
    if (score >= 50) return "🏅 Average 💼";
    if (score >= 40) return "🏅 Beginner 🏋";
    if (score >= 30) return "You don't know JavaScript yet 🙏";
    return "";
  };

  const message = getFeedbackMessage();

  if (!message) return null;

  return <p className="text-lg">{message}</p>;
};

export default ScoreFeedback;
