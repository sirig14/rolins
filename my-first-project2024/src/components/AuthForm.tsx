"use client";
import { useState, FormEvent, useEffect } from "react";

interface AuthFormProps {
  mode: "Signup" | "Login";
  onSubmit: (data: { email: string, password: string }) => void;
  resetForm?: boolean;
}

const AuthForm: React.FC<AuthFormProps> = ({ mode, onSubmit, resetForm }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    // Cargar emails guardados desde localStorage
    const storedEmails = JSON.parse(localStorage.getItem("email") || "[]");
    setSuggestions(storedEmails);
  }, []);

  useEffect(() => {
    if (resetForm) {
      setEmail("");
      setPassword("");
    }
  }, [resetForm]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Guardar el email en localStorage con un máximo de 3
    let storedEmails = JSON.parse(localStorage.getItem("email") || "[]");
    if (!storedEmails.includes(email)) {
      if (storedEmails.length >= 3) {
        storedEmails = storedEmails.slice(1); // Eliminar el más antiguo
      }
      storedEmails.push(email);
      localStorage.setItem("email", JSON.stringify(storedEmails));
      setSuggestions(storedEmails); // Actualizar sugerencias
    }

    onSubmit({ email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold mb-4 text-center">{mode}</h2>
      <div>
        <label className="block text-gray-700 dark:text-gray-300">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          list="emailSuggestions"
          required
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
        />
        <datalist id="emailSuggestions">
          {suggestions.map((suggestion, index) => (
            <option key={index} value={suggestion} />
          ))}
        </datalist>
      </div>
      <div>
        <label className="block text-gray-700 dark:text-gray-300">
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300 dark:bg-gray-700 dark:text-gray-100 dark:border-gray-600"
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
      >
        {mode}
      </button>
    </form>
  );
};

export default AuthForm;
