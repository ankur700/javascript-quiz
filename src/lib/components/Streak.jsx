const Streak = ({ streak }) => {
  const getStreakMessage = () => {
    if (streak >= 10) return "Unstoppable! 🔥";
    if (streak >= 7) return "Incredible! 🌟";
    if (streak >= 5) return "Amazing! ⭐";
    if (streak >= 3) return "Great job! 👏";
    return "";
  };

  const message = getStreakMessage();

  if (!message) return null;

  return (
    <div className="fixed bottom-4 right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg shadow-lg animate-bounce">
      <p className="font-bold">{message}</p>
      <p className="text-sm">{streak} correct in a row!</p>
    </div>
  );
};

export default Streak;