import React, { useState } from "react";

const ForgotPassword = () => {
  const [step, setStep] = useState(1); // Step 1: Enter Username, Step 2: Reset Password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Mock database usernames
  const mockDatabase = ["user1", "user2", "admin"]; // Replace with API calls to backend

  const validateUsername = () => {
    const newErrors = {};
    if (!username.trim()) {
      newErrors.username = "Username is required.";
    } else if (!mockDatabase.includes(username)) {
      newErrors.username = "Username not found.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validatePasswords = () => {
    const newErrors = {};
    if (!password || password.length < 6) {
      newErrors.password = "Password must be at least 6 characters long.";
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleUsernameSubmit = (e) => {
    e.preventDefault();
    if (validateUsername()) {
      setStep(2); // Move to Step 2: Reset Password
      setErrors({});
    }
  };

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (validatePasswords()) {
      // Simulate updating the database
      console.log(`Password for ${username} updated to: ${password}`);
      setSuccessMessage("Your password has been updated successfully!");
      setUsername("");
      setPassword("");
      setConfirmPassword("");
      setStep(1); // Reset to Step 1
    }
  };

  return (
    <div
      className="flex justify-center items-center min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://static.vecteezy.com/system/resources/thumbnails/033/352/387/small/grass-land-beautiful-green-landscape-ai-generated-photo.jpg')", // Replace with your image URL
      }}
    >
      <div className="bg-white bg-opacity-40 shadow-lg rounded-lg p-8 w-full max-w-md">
        {step === 1 && (
          <>
            <h1 className="text-2xl font-bold text-center mb-6 text-white-800">
              Forgot Password
            </h1>
            <p className="text-black-800 text-center mb-4">
              Enter your username to reset your password.
            </p>
            <form className="flex flex-col gap-4" onSubmit={handleUsernameSubmit}>
              {/* Username Field */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-black-700"
                >
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className={`mt-1 block w-full p-2 border rounded-md ${
                    errors.username ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.username && (
                  <p className="text-sm text-red-500">{errors.username}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
              >
                Verify Username
              </button>
            </form>
          </>
        )}

        {step === 2 && (
          <>
            <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
              Reset Password
            </h1>
            <form className="flex flex-col gap-4" onSubmit={handlePasswordSubmit}>
              {/* New Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  New Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`mt-1 block w-full p-2 border rounded-md ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.password && (
                  <p className="text-sm text-red-500">{errors.password}</p>
                )}
              </div>

              {/* Confirm Password Field */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700"
                >
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className={`mt-1 block w-full p-2 border rounded-md ${
                    errors.confirmPassword ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.confirmPassword && (
                  <p className="text-sm text-red-500">{errors.confirmPassword}</p>
                )}
              </div>

              <button
                type="submit"
                className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
              >
                Update Password
              </button>
            </form>
          </>
        )}

        {successMessage && (
          <p className="text-center text-green-500 text-sm mt-4">{successMessage}</p>
        )}

        {step === 2 && (
          <p className="text-center text-gray-600 text-sm mt-4">
            <button
              onClick={() => setStep(1)}
              className="text-blue-500 hover:underline"
            >
              Go Back
            </button>
          </p>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;
