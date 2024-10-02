import React, { useState } from "react";
import oily from './images/oily.png';
import dry from './images/dry.png';
import combination from './images/combination.png';
import pimples from './images/pimples1.jpg';
import pigmentation from './images/pigmentation.jpg';
import sensitive from './images/sensitive.png';
import preg from './images/pregnancy.jpeg';
import bre from './images/bre.jpeg';


const questions = [
  {
    id: 1,
    question: "What is your skin type?",
    options: ["Dry", "Oily", "Normal", "Combination"],
    images: [dry , oily, combination], 
  },
  {
    id: 2,
    question: "What is your main skin concern?",
    options: ["Acne", "Wrinkles", "Pigmentation", "Sensitive"],
    images: [pimples,pigmentation, sensitive],
  },
  {
    id: 3,
    question: "Are you Pregnant or breastfeeding",
    options: ["Yes, I am Pregnant", "Yes, I am Breastfeeding", "No"],
    images: [preg, bre],
  },
  {
    id: 4,
    question: "What is your daily skincare routine like?",
    options: ["Simple", "Moderate", "Advanced"],
    images: ["/images/simple_routine.png", "/images/moderate_routine.png", "/images/advanced_routine.png"],
  },
  {
    id: 5,
    question: "Do you use sunscreen daily?",
    options: ["Yes", "No"],
    images: ["/images/sunscreen_yes.png", "/images/sunscreen_no.png"],
  },
];

const CustomizeProduct = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selections, setSelections] = useState({});

  // Handle selection of options
  const handleOptionSelect = (option) => {
    setSelections({
      ...selections,
      [questions[currentQuestion].id]: option,
    });
  };

  // Navigate to the next question
  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  // Submit the selections
  const handleSubmit = () => {
    console.log("User Selections:", selections);
    // Add submission logic here (e.g., sending to backend)
  };

  return (
    <div className="custom">
      <h2>Customize Your Skincare Routine</h2>

      {/* Display images for reference */}
      <div className="image-container">
        {questions[currentQuestion].images.map((image, index) => (
          <img key={index} src={image} alt={`reference ${index}`} style={{ width: "100px", marginRight: "10px" }} />
        ))}
      </div>

      {/* Display the question */}
      <h3>{questions[currentQuestion].question}</h3>

      {/* Display options */}
      <div className="options-container">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            className={`option-btn ${selections[questions[currentQuestion].id] === option ? "selected" : ""}`}
            onClick={() => handleOptionSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Display navigation buttons */}
      <div >
        {currentQuestion < questions.length - 1 ? (
          <button className="navigation-buttons" onClick={handleNext} disabled={!selections[questions[currentQuestion].id]}>
            Next
          </button>
        ) : (
          <button  className="navigation-buttons" onClick={handleSubmit} disabled={!selections[questions[currentQuestion].id]}>
            Submit
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomizeProduct;
