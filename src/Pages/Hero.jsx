import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [text, setText] = useState("");
  const fullText = "Welcome to My Professional World";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-100 to-indigo-200 px-4">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }}
        className="text-4xl md:text-5xl font-bold text-gray-800 drop-shadow-sm"
      >
        {text}
      </motion.h1>
      
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 1, duration: 1 }}
        className="mt-6 max-w-3xl text-lg md:text-xl text-gray-700"
      >
        Hello, I'm <span className="font-semibold text-indigo-700">Adelle Gomes</span>, a dedicated software engineer with a flair for full-stack development and frontend creativity.
      </motion.p>

      <motion.a 
        whileHover={{ scale: 1.05 }} 
        className="mt-8 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-full shadow-lg"
        href="#contact"
      >
        Get in Touch
      </motion.a>
    </section>
  );
}
