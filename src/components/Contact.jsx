import { useForm } from "react-hook-form";
import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/mdknoldq", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error submitting form.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center px-6 py-16 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative max-w-xl w-full p-8 rounded-lg shadow-md bg-white dark:bg-gray-900 z-10">
        {/* Header */}
        <h2 className="text-3xl font-bold mb-2 text-center">Let’s Connect</h2>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-6">
          Whether it's freelance work, collaboration, or a tech question — feel free to reach out!
        </p>

        {/* Social icons */}
        <div className="flex justify-center gap-6 mb-8 text-gray-600 dark:text-gray-300">
          <a href="https://github.com/andris811" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
            <GitHubIcon />
          </a>
          <a href="https://www.linkedin.com/in/andrasv89/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition">
            <LinkedInIcon />
          </a>
        </div>

        {/* Form / Confirmation */}
        {submitted ? (
          <div className="bg-green-100 dark:bg-green-800 text-green-800 dark:text-green-200 p-4 rounded text-center mb-6">
            ✅ Message sent successfully! I’ll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1 text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                type="text"
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block mb-1 text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="block mb-1 text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                {...register("message", { required: "Message is required" })}
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 font-semibold py-2 rounded hover:scale-[1.02] transition"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}

        {/* Form Glow Effect */}
        <div className="absolute -inset-2 z-0 rounded-xl bg-gradient-to-br from-purple-400/10 to-blue-400/10 blur-xl pointer-events-none" aria-hidden="true"></div>
      </motion.div>
    </section>
  );
};

export default Contact;
