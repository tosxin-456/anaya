import React, { useState } from "react";
import { ArrowLeft, Check, CircleCheckIcon } from "lucide-react";
import { TbLoader } from "react-icons/tb";
import { CiCircleCheck } from "react-icons/ci";

const SkincareConsultation = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    ageRange: "",
    gender: "",
    skinType: "",
    skinConcerns: [],
    skinCondition: "",
    skinConditionDetails: "",
    usageFrequency: "",
    currentProducts: [],
    ingredientKnowledge: "",
    skinGoal: "",
    usedApps: "",
    confidence: "",
    photoConsent: ""
  });

  const steps = [
    { id: 1, title: "Getting to know you", completed: currentStep > 1 },
    { id: 2, title: "Your Skin, Your Story", completed: currentStep > 2 },
    { id: 3, title: "Your Routine", completed: currentStep > 3 },
    { id: 4, title: "Skin Goals", completed: currentStep > 4 },
    { id: 5, title: "Let's Talk Photos", completed: currentStep > 5 }
  ];

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value
    }));
  };

  const handleConcernToggle = (concern) => {
    setFormData((prev) => ({
      ...prev,
      skinConcerns: prev.skinConcerns.includes(concern)
        ? prev.skinConcerns.filter((c) => c !== concern)
        : prev.skinConcerns.length < 3
        ? [...prev.skinConcerns, concern]
        : prev.skinConcerns
    }));
  };

  const handleProductToggle = (product) => {
    setFormData((prev) => ({
      ...prev,
      currentProducts: prev.currentProducts.includes(product)
        ? prev.currentProducts.filter((p) => p !== product)
        : [...prev.currentProducts, product]
    }));
  };

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const StepOne = () => (
    <div className="px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevStep}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          disabled={currentStep === 1}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-sm font-medium text-gray-600">
          Step {currentStep}/5
        </span>
      </div>

      <h1 className="text-2xl font-semibold text-gray-900 mb-2">
        Getting to know you
      </h1>
      <p className="text-gray-600 mb-8">
        Tell us a little about yourself so we can personalize your experience.
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            1. Your Age Range:
          </h3>
          <div className="space-y-3">
            {["Under 18", "18 - 24", "25 - 34", "35 - 44", "45+"].map((age) => (
              <label
                key={age}
                className="flex items-center cursor-pointer p-3 hover:bg-gray-50 rounded-lg"
              >
                <input
                  type="radio"
                  name="ageRange"
                  value={age}
                  checked={formData.ageRange === age}
                  onChange={(e) =>
                    handleInputChange("ageRange", e.target.value)
                  }
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-3 text-gray-700">{age}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            2. Gender Identity:
          </h3>
          <div className="space-y-3">
            {["Female", "Male", "Non-binary", "Prefer not to say"].map(
              (gender) => (
                <label
                  key={gender}
                  className="flex items-center cursor-pointer p-3 hover:bg-gray-50 rounded-lg"
                >
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={(e) =>
                      handleInputChange("gender", e.target.value)
                    }
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <span className="ml-3 text-gray-700">{gender}</span>
                </label>
              )
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-12">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex-1 px-4 py-3 bg-gray-400 text-white rounded-lg font-medium hover:bg-gray-500 transition-colors disabled:opacity-50"
        >
          previous
        </button>
        <button
          onClick={nextStep}
          className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );

  const StepTwo = () => (
    <div className="px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevStep}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-sm font-medium text-gray-600">
          Step {currentStep}/5
        </span>
      </div>

      <h1 className="text-2xl font-semibold text-gray-900 mb-2">
        Your Skin, Your Story
      </h1>
      <p className="text-gray-600 mb-8">
        Every skin journey is unique. Help us understand yours better.
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            1. How would you describe your skin type?
          </h3>
          <div className="space-y-3">
            {[
              "Oily",
              "Dry",
              "Combination",
              "Normal",
              "Sensitive",
              "Not sure"
            ].map((type) => (
              <label
                key={type}
                className="flex items-center cursor-pointer p-3 hover:bg-gray-50 rounded-lg"
              >
                <input
                  type="radio"
                  name="skinType"
                  value={type}
                  checked={formData.skinType === type}
                  onChange={(e) =>
                    handleInputChange("skinType", e.target.value)
                  }
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-3 text-gray-700">{type}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            2. What are your top skin concerns? (Select up to 3)
          </h3>
          <div className="space-y-3">
            {[
              "Dark spots / hyperpigmentation",
              "Acne / breakouts",
              "Uneven skin tone",
              "Dryness / flakiness",
              "Oiliness / shine",
              "Dullness",
              "Fine lines / wrinkles",
              "Other (Short answer)"
            ].map((concern) => (
              <label
                key={concern}
                className="flex items-center cursor-pointer p-3 hover:bg-gray-50 rounded-lg"
              >
                <input
                  type="checkbox"
                  checked={formData.skinConcerns.includes(concern)}
                  onChange={() => handleConcernToggle(concern)}
                  disabled={
                    !formData.skinConcerns.includes(concern) &&
                    formData.skinConcerns.length >= 3
                  }
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500 disabled:opacity-50"
                />
                <span
                  className={`ml-3 ${
                    !formData.skinConcerns.includes(concern) &&
                    formData.skinConcerns.length >= 3
                      ? "text-gray-400"
                      : "text-gray-700"
                  }`}
                >
                  {concern}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            3. Have you been diagnosed with a skin condition?
          </h3>
          <div className="space-y-3">
            {["Yes", "No", "Not sure"].map((option) => (
              <label
                key={option}
                className="flex items-center cursor-pointer p-3 hover:bg-gray-50 rounded-lg"
              >
                <input
                  type="radio"
                  name="skinCondition"
                  value={option}
                  checked={formData.skinCondition === option}
                  onChange={(e) =>
                    handleInputChange("skinCondition", e.target.value)
                  }
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-3 text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>

        {formData.skinCondition === "Yes" && (
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              If "Yes" (Please specify the skin condition)
            </h3>
            <textarea
              placeholder="Please tell us about you..."
              value={formData.skinConditionDetails}
              onChange={(e) =>
                handleInputChange("skinConditionDetails", e.target.value)
              }
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 resize-none h-24"
            />
          </div>
        )}
      </div>

      <div className="flex gap-3 mt-12">
        <button
          onClick={prevStep}
          className="flex-1 px-4 py-3 bg-gray-400 text-white rounded-lg font-medium hover:bg-gray-500 transition-colors"
        >
          previous
        </button>
        <button
          onClick={nextStep}
          className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );

  const StepThree = () => (
    <div className="px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevStep}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-sm font-medium text-gray-600">
          Step {currentStep}/5
        </span>
      </div>

      <h1 className="text-2xl font-semibold text-gray-900 mb-2">
        Your Routine
      </h1>
      <p className="text-gray-600 mb-8">
        Knowing what you already use helps us recommend smarter options.
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            1. How often do you use skincare products?
          </h3>
          <div className="space-y-3">
            {["Daily", "Few times a week", "Occasionally", "Rarely"].map(
              (frequency) => (
                <label
                  key={frequency}
                  className="flex items-center cursor-pointer p-3 hover:bg-gray-50 rounded-lg"
                >
                  <input
                    type="radio"
                    name="usageFrequency"
                    value={frequency}
                    checked={formData.usageFrequency === frequency}
                    onChange={(e) =>
                      handleInputChange("usageFrequency", e.target.value)
                    }
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <span className="ml-3 text-gray-700">{frequency}</span>
                </label>
              )
            )}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            2. Which types of skincare products do you currently use? (Select
            all that apply)
          </h3>
          <div className="space-y-3">
            {[
              "Cleanser",
              "Toner",
              "Moisturizer",
              "Sunscreen",
              "Serums (e.g., Vitamin C, Niacinamide)",
              "Face masks",
              "Spot treatments",
              "None"
            ].map((product) => (
              <label
                key={product}
                className="flex items-center cursor-pointer p-3 hover:bg-gray-50 rounded-lg"
              >
                <input
                  type="checkbox"
                  checked={formData.currentProducts.includes(product)}
                  onChange={() => handleProductToggle(product)}
                  className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                />
                <span className="ml-3 text-gray-700">{product}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            3. How much do you know about skincare ingredients?
          </h3>
          <div className="space-y-3">
            {[
              "I check everything religiously",
              "I check sometimes",
              "I rarely check",
              "I don't check at all"
            ].map((option) => (
              <label
                key={option}
                className="flex items-center cursor-pointer p-3 hover:bg-gray-50 rounded-lg"
              >
                <input
                  type="radio"
                  name="ingredientKnowledge"
                  value={option}
                  checked={formData.ingredientKnowledge === option}
                  onChange={(e) =>
                    handleInputChange("ingredientKnowledge", e.target.value)
                  }
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-3 text-gray-700">{option}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-12">
        <button
          onClick={prevStep}
          className="flex-1 px-4 py-3 bg-gray-400 text-white rounded-lg font-medium hover:bg-gray-500 transition-colors"
        >
          previous
        </button>
        <button
          onClick={nextStep}
          className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );

  const StepFour = () => (
    <div className="px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevStep}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-sm font-medium text-gray-600">
          Step {currentStep}/5
        </span>
      </div>

      <h1 className="text-2xl font-semibold text-gray-900 mb-2">Skin Goals</h1>
      <p className="text-gray-600 mb-8">
        Share what you're aiming for—we'll help you get there faster.
      </p>

      <div className="space-y-8">
        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            1. What's your main skincare goal right now?
          </h3>
          <div className="space-y-3">
            {[
              "Fade dark spots / PIH",
              "Get a clearer complexion",
              "Even out skin tone",
              "Improve texture",
              "Just starting my skincare journey"
            ].map((goal) => (
              <label
                key={goal}
                className="flex items-center cursor-pointer p-3 hover:bg-gray-50 rounded-lg"
              >
                <input
                  type="radio"
                  name="skinGoal"
                  value={goal}
                  checked={formData.skinGoal === goal}
                  onChange={(e) =>
                    handleInputChange("skinGoal", e.target.value)
                  }
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-3 text-gray-700">{goal}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            2. Have you used skincare apps or analysis tools before?
          </h3>
          <div className="space-y-3">
            {["Yes", "No"].map((answer) => (
              <label
                key={answer}
                className="flex items-center cursor-pointer p-3 hover:bg-gray-50 rounded-lg"
              >
                <input
                  type="radio"
                  name="usedApps"
                  value={answer}
                  checked={formData.usedApps === answer}
                  onChange={(e) =>
                    handleInputChange("usedApps", e.target.value)
                  }
                  className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                />
                <span className="ml-3 text-gray-700">{answer}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 mb-4">
            3. How confident are you when choosing skincare products?
          </h3>
          <div className="space-y-3">
            {["1 (Totally Confused)", "2", "3", "4", "5 (Very Confident)"].map(
              (level) => (
                <label
                  key={level}
                  className="flex items-center cursor-pointer p-3 hover:bg-gray-50 rounded-lg"
                >
                  <input
                    type="radio"
                    name="confidence"
                    value={level}
                    checked={formData.confidence === level}
                    onChange={(e) =>
                      handleInputChange("confidence", e.target.value)
                    }
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <span className="ml-3 text-gray-700">{level}</span>
                </label>
              )
            )}
          </div>
        </div>
      </div>

      <div className="flex gap-3 mt-12">
        <button
          onClick={prevStep}
          className="flex-1 px-4 py-3 bg-gray-400 text-white rounded-lg font-medium hover:bg-gray-500 transition-colors"
        >
          previous
        </button>
        <button
          onClick={nextStep}
          className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );

  const StepFive = () => (
    <div className="px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={prevStep}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <span className="text-sm font-medium text-gray-600">
          Step {currentStep}/5
        </span>
      </div>

      <div className=" rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Let's Talk Photos
        </h1>
        <p className="text-gray-600 mb-8">
          A quick selfie helps us deliver personalized, AI-driven insights.
        </p>

        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              1. Are you open to uploading a bare-face photo for AI analysis?
            </h3>
            <div className="space-y-3">
              {[
                "Yes, I'm ready",
                "Yes, but I have some questions",
                "Not sure yet",
                "No"
              ].map((option) => (
                <label
                  key={option}
                  className="flex items-center cursor-pointer p-3 hover:bg-gray-50 rounded-lg"
                >
                  <input
                    type="radio"
                    name="photoConsent"
                    value={option}
                    checked={formData.photoConsent === option}
                    onChange={(e) =>
                      handleInputChange("photoConsent", e.target.value)
                    }
                    className="w-4 h-4 text-purple-600 border-gray-300 focus:ring-purple-500"
                  />
                  <span className="ml-3 text-gray-700">{option}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-3 mt-12">
          <button
            onClick={prevStep}
            className="flex-1 px-4 py-3 bg-gray-400 text-white rounded-lg font-medium hover:bg-gray-500 transition-colors"
          >
            previous
          </button>
          <button
            onClick={() => alert("Form completed!")}
            className="flex-1 px-4 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors"
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );

  // Mobile-first design
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="bg-white lg:mr-80">
        {currentStep === 1 ? (
          <StepOne />
        ) : currentStep === 2 ? (
          <StepTwo />
        ) : currentStep === 3 ? (
          <StepThree />
        ) : currentStep === 4 ? (
          <StepFour />
        ) : (
          <StepFive />
        )}
      </div>

      {/* Hidden desktop sidebar for larger screens */}
      <div className="hidden lg:block fixed right-0 top-0 w-80 bg-gray-50 h-full p-8 space-y-6">
        {steps.map((step) => (
          <div key={step.id} className="flex items-center space-x-4">
            <div
              className={`rounded-full flex items-center justify-center font-medium ${
                currentStep === step.id
                  ? "w-8 h-8 bg-purple-600 text-white text-base"
                  : step.completed
                  ? "w-6 h-6 bg-purple-600 text-white text-sm"
                  : "w-6 h-6 bg-gray-300 text-gray-600 text-sm"
              }`}
            >
              {currentStep === step.id ? (
                <TbLoader className="animate-spin text-white text-base" />
              ) : step.completed ? (
                <CiCircleCheck className="text-white text-base" />
              ) : (
                <TbLoader className="animate-spin text-white text-base" />
              )}
            </div>
            <span
              className={`${
                currentStep === step.id
                  ? "text-black font-medium text-base"
                  : step.completed
                  ? "text-purple-600 text-sm"
                  : "text-gray-400 text-sm"
              }`}
            >
              Step {step.id}: {step.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkincareConsultation;
