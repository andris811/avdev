import { useForm } from "react-hook-form";
import { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faBriefcase } from "@fortawesome/free-solid-svg-icons";
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
      className="min-h-screen flex items-center justify-center px-6 pt-16 pb-20 bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative max-w-5xl w-full p-8 md:p-12 rounded-lg shadow-md bg-white dark:bg-gray-900 z-10"
      >
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-6">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                Get In Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Feel free to reach out through the form or connect with me on social media. I typically respond within 24-48 hours.
              </p>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-medium text-gray-800 dark:text-gray-200 mb-4">Connect on Social</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/andris811"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-600 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
                >
                  <GitHubIcon fontSize="small" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/andrasv89/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-purple-600 dark:hover:border-purple-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
                >
                  <LinkedInIcon fontSize="small" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Location & Availability */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faLocationDot} className="text-purple-600 dark:text-purple-400" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Location</span>
                    <p className="text-gray-700 dark:text-gray-300">Shanghai, China</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faBriefcase} className="text-purple-600 dark:text-purple-400" />
                  <div>
                    <span className="text-sm text-gray-500 dark:text-gray-400">Status</span>
                    <p className="text-gray-700 dark:text-gray-300">Open to opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>

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
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
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
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-1 text-sm font-medium"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                {...register("message", { required: "Message is required" })}
                className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              />
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        )}
          </div>
        </div>

        {/* Form Glow Effect */}
        <div
          className="absolute -inset-2 z-0 rounded-xl bg-gradient-to-br from-purple-400/10 to-blue-400/10 blur-xl pointer-events-none"
          aria-hidden="true"
        ></div>
      </motion.div>
    </section>
  );
};

export default Contact;
