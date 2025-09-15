import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

 function Quiz() {
  const [selected, setSelected] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const question = "Which of these helps reduce plastic waste?";
  const options = [
    "Using reusable bottles",
    "Buying bottled water daily",
    "Throwing plastic in the trash",
    "Burning plastic waste", 
  ];
  const correctAnswer = 0;

  const handleSubmit = () => {
    if (selected !== null) {
      setSubmitted(true);
    }
  };

  return (
    <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg p-6 w-full md:w-[500px] mx-auto mt-10">
      <h3 className="text-lg font-semibold text-blue-900 mb-4">Eco Quiz 🌱</h3>
      <p className="text-gray-700 font-medium mb-4">{question}</p>

      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => !submitted && setSelected(index)}
            className={`w-full text-left px-4 py-2 rounded-lg border transition 
              ${
                selected === index
                  ? "border-blue-600 bg-blue-50"
                  : "border-gray-300 bg-white"
              }
              ${submitted && index === correctAnswer ? "border-green-600 bg-green-50" : ""}
            `}
          >
            {option}
            {submitted && index === correctAnswer && (
              <CheckCircle2 className="inline ml-2 text-green-600" />
            )}
          </button>
        ))}
      </div>

      {!submitted ? (
        <button
          onClick={handleSubmit}
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
        >
          Submit Answer
        </button>
      ) : (
        <p
          className={`mt-6 text-center font-semibold ${
            selected === correctAnswer ? "text-green-600" : "text-red-600"
          }`}
        >
          {selected === correctAnswer
            ? "✅ Correct! Great job!"
            : "❌ Oops! The correct answer is: Using reusable bottles"}
        </p>
      )}
    </div>
  );
}

export default Quiz
