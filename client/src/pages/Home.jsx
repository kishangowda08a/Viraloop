import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getServices } from "../services/serviceService";
import { getProjects } from "../services/projectService";
import { motion } from "framer-motion";
import { sendMessage } from "../services/contactService";
import toast from "react-hot-toast";
import { FaXTwitter } from "react-icons/fa6";

function Home() {

  const [services, setServices] = useState([]);
const [projects, setProjects] = useState([]);
const [selectedVideo,
  setSelectedVideo] =
  useState(null);

  useEffect(() => {
  const handleEsc = (event) => {
    if (event.key === "Escape") {
      setSelectedVideo(null);
    }
  };

  window.addEventListener(
    "keydown",
    handleEsc
  );

  return () => {
    window.removeEventListener(
      "keydown",
      handleEsc
    );
  };
}, []);
  useEffect(() => {

    const fetchProjects = async () => {
  try {
    const data = await getProjects();

    setProjects(data.slice(0, 4));
  } catch (error) {
    console.log(error);
  }
};

fetchProjects();
    const fetchServices = async () => {
      try {
        const data = await getServices();
        setServices(data.slice(0, 3));
      } catch (error) {
        console.log(error);
      }
    };

    fetchServices();
  }, []);


  const [loading, setLoading] = useState(false);

  const [contact, setContact] = useState({
  name: "",
  email: "",
  message: "",
});

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
const handleSubmit = async (e) => {
  e.preventDefault();

  if (!contact.name.trim()) {
    toast.error("Please enter your name");
    return;
  }

  if (!contact.email.trim()) {
    toast.error("Please enter your email");
    return;
  }

  if (!isValidEmail(contact.email)) {
    toast.error("Please enter a valid email address");
    return;
  }

  if (!contact.message.trim()) {
    toast.error("Please enter your message");
    return;
  }

  try {
    setLoading(true);
    await sendMessage(contact);

    toast.success("Message sent successfully!");

    setContact({
      name: "",
      email: "",
      message: "",
    });
  } catch (error) {
    console.error(error);
    toast.error("Failed to send message");
  }
  finally {
  setLoading(false);
}
};

  return (
<div className="min-h-screen bg-gray-100 pt-16">
      {/* Navbar */}
     <nav
  className="
  fixed
  top-0
  left-0
  w-full
  z-50
  backdrop-blur-md
  bg-white/70
  shadow-md
  px-8
  py-4
  flex
  justify-between
  items-center
  "
>
  <h1 className="text-2xl font-bold text-indigo-600">
    Viraloop
  </h1>

  <div className="flex gap-6 items-center">

   <a
  href="#services"
  className="hover:text-indigo-600 transition"
>
  Services
</a>

  <a
  href="#projects"
  className="hover:text-indigo-600 transition"
>
  Projects
</a>

    <Link
      to="/login"
      className="hover:text-indigo-600 transition"
    >
      Login
    </Link>

    <Link
      to="/register"
      className="
      bg-indigo-600
      text-white
      px-4
      py-2
      rounded-lg
      hover:bg-indigo-700
      transition
      "
    >
      Register
    </Link>

  </div>
</nav>

      {/* Hero */}
      <section className="relative h-screen overflow-hidden">

  {/* Background Video */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute top-0 left-0 w-full h-full object-cover"
  >
    <source
      src="/videos/hero.mp4"
      type="video/mp4"
    />
  </video>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Hero Content */}
<motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-6"
>
<h1 className="text-3xl md:text-4xl md:text-6xl font-bold mb-6">      Grow Your Brand With Viraloop 
    </h1>

<p className="text-base md:text-xl mb-8 max-w-2xl">      Content Creation, Reel Editing,
      Marketing & Digital Growth.
    </p>

<div className="flex flex-col md:flex-row gap-4">  <Link
    to="/public-services"
    className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
  >
    View Services
  </Link>

  <Link
    to="/public-projects"
    className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition"
  >
    View Projects
  </Link>
</div>

</motion.div>

</section>
      {/* Services Preview */}
<section
  id="services"
  className="py-20 px-8 bg-white"
>  <h2 className="text-3xl md:text-3xl md:text-4xl font-bold text-center mb-12">
    Our Services
  </h2>

<div className="grid md:grid-cols-3 gap-8">

 {services.map((service, index) => (
    <motion.div
    key={service._id}
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: index * 0.2 }}
  viewport={{ once: true }}
>
  <Link
      
      to="/public-services"
      className="
      group
      bg-white
      p-6
      rounded-2xl
      shadow-lg
      transition-all
      duration-500
      transform-gpu
      hover:-translate-y-4
      hover:scale-105
      hover:rotate-1
      hover:shadow-[0_0_50px_rgba(99,102,241,0.45)]
      cursor-pointer
      block
      "
    >
      <h3 className="text-2xl font-semibold mb-3 group-hover:text-indigo-600 transition-colors duration-300">
        {service.title}
      </h3>

      <p className="text-gray-600">
        {service.description}
      </p>

      <p className="mt-4 text-indigo-600 font-bold">
        ₹{service.price}
      </p>
    </Link>
    </motion.div>
  ))}

</div>
</section>
{/* Projects Preview */}
<section
  id="projects"
  className="py-20 px-8 bg-gray-100"
>  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    Featured Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

   {projects.map((project, index) => (
  <motion.div
    key={project._id}
      onClick={() =>
    setSelectedVideo(project.videoUrl)
  }
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.5,
      delay: index * 0.2,
    }}
    viewport={{ once: true }}
    className="
      group
      bg-white
      p-6
      rounded-2xl
      shadow-lg
      border-2
      border-transparent
      transition-all
      duration-500
      transform-gpu
      hover:-translate-y-4
      hover:scale-105
      hover:bg-emerald-50
      hover:border-emerald-400
      hover:shadow-[0_0_50px_rgba(16,185,129,0.45)]
      cursor-pointer
    "
  >
  <video
  autoPlay
  loop
  muted
  playsInline
  className="
    w-full
    h-56
    object-cover
    rounded-xl
    mb-4
  "
>
  <source
    src={project.videoUrl}
    type="video/mp4"
  />
</video>

<div
  className="
    absolute
    top-4
    right-4
    bg-black/70
    text-white
    px-3
    py-1
    rounded-full
    text-sm
  "
>
  🔊 View With Sound
</div>

<h3 className="text-xl font-bold transition-all duration-300 group-hover:text-emerald-600">
  {project.projectTitle}
</h3>

    <p className="mt-3 text-gray-600">
      {project.description}
    </p>

    <p className="mt-4 font-semibold text-emerald-600">
      Client: {project.clientName}
    </p>

    {project.results && (
      <p className="mt-2 text-sm text-gray-500">
        {project.results}
      </p>
    )}
  </motion.div>
))}

  </div>
</section>
{/* Testimonials */}
<section className="py-20 px-4 md:px-8 bg-white">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    What Our Clients Say
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

<motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
  className="bg-gray-50 p-6 rounded-2xl shadow-lg"
>      <p className="text-gray-600 italic">
        "Viraloop helped us reach over
        1 million views in just 3 weeks."
      </p>

      <h4 className="mt-4 font-bold">
        - Mr. Kishan
      </h4>
    </motion.div>

    <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
  className="bg-gray-50 p-6 rounded-2xl shadow-lg"
>
      <p className="text-gray-600 italic">
        "The reel editing quality is
        exceptional and boosted our
        engagement significantly."
      </p>

      <h4 className="mt-4 font-bold">
        - Ajio CEO
      </h4>
   </motion.div>

   <motion.div
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true }}
  className="bg-gray-50 p-6 rounded-2xl shadow-lg"
>
      <p className="text-gray-600 italic">
        "Professional team, fast
        delivery and amazing results."
      </p>

      <h4 className="mt-4 font-bold">
        - Cult Owner
      </h4>
  </motion.div>

  </div>
</section>

{/* Statistics */}
<section className="py-20 px-4 md:px-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">

  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    Viraloop Impact
  </h2>

  <div className="grid md:grid-cols-4 gap-8 text-center">

<motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  viewport={{ once: true }}
>      <h3 className="text-5xl font-bold">
        1M+
      </h3>

      <p className="mt-2 text-lg">
        Views Generated
      </p>
  </motion.div>

    <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
  viewport={{ once: true }}
>
      <h3 className="text-5xl font-bold">
        100+
      </h3>

      <p className="mt-2 text-lg">
        Reels Delivered
      </p>
   </motion.div>

    <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.9 }}
  viewport={{ once: true }}
>
      <h3 className="text-5xl font-bold">
        25+
      </h3>

      <p className="mt-2 text-lg">
        Happy Clients
      </p>
  </motion.div>

    <motion.div
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.1 }}
  viewport={{ once: true }}
>
      <h3 className="text-5xl font-bold">
        50+
      </h3>

      <p className="mt-2 text-lg">
        Campaigns Managed
      </p>
   </motion.div>

  </div>

</section>
{/* Contact Section */}
<section className="py-20 px-4 md:px-8 bg-white">
  <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
    Contact Us
  </h2>

  <div className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-lg">

<form
  onSubmit={handleSubmit}
  className="space-y-6"
>
<input
  type="text"
  placeholder="Your Name"
  value={contact.name}
  onChange={(e) =>
    setContact({
      ...contact,
      name: e.target.value,
    })
  }
  className="w-full border p-4 rounded-lg"
/>

    <input
  type="email"
  placeholder="Your Email"
  value={contact.email}
  onChange={(e) =>
    setContact({
      ...contact,
      email: e.target.value,
    })
  }
  className="w-full border p-4 rounded-lg"
/>

   <textarea
  rows="5"
  placeholder="Tell us about your project..."
  value={contact.message}
  onChange={(e) =>
    setContact({
      ...contact,
      message: e.target.value,
    })
  }
  className="w-full border p-4 rounded-lg"
/>
   <button
  type="submit"
  disabled={loading}
  className="
    w-full
    bg-indigo-600
    text-white
    py-4
    rounded-lg
    hover:bg-indigo-700
    transition
    disabled:bg-gray-400
    disabled:cursor-not-allowed
  "
>
  {loading ? "Sending..." : "Send Message"}
</button>

    </form>

  </div>
</section>

{selectedVideo && (
<div
  onClick={() => setSelectedVideo(null)}
  className="
      fixed
      inset-0
      bg-black/80
      backdrop-blur-md
      flex
      items-center
      justify-center
      z-50
  "
>
   <div
  onClick={(e) => e.stopPropagation()}
  className="
    bg-white
    p-3
    rounded-2xl
    w-[45vw]
    max-w-[700px]
    min-w-[450px]
    relative
  "
>
      <button
        onClick={() =>
          setSelectedVideo(null)
        }
        className="
          absolute
          top-2
          right-4
          text-3xl
        "
      >
        ×
      </button>

   <video
  autoPlay
  controls
  playsInline
  className="
    w-full
    max-h-[60vh]
    object-contain
    rounded-xl
  "
>
        <source
          src={selectedVideo}
          type="video/mp4"
        />
      </video>

    </div>
  </div>
)}
<footer className="bg-gray-900 text-white text-center py-8">
  <h3 className="text-2xl font-bold">
    Viraloop
  </h3>

  <p className="mt-2">
    Content Creation • Marketing • Growth
  </p>

  <div className="mt-6">
  <h4 className="text-lg font-semibold mb-4">
    Follow Us On!
  </h4>

  <div className="flex justify-center gap-6">

    <a href="https://www.linkedin.com/in/kishan-gowda-b-n-754179330/" target="_blank">
      <img
        src="/linkedin1'.png"
        alt="LinkedIn"
        className="w-8 h-8 hover:scale-110 transition"
      />
    </a>

    <a href="https://www.facebook.com/kishangowda.appu" target="_blank">
      <img
        src="/facebook.png"
        alt="Facebook"
        className="w-8 h-8 hover:scale-110 transition"
      />
    </a>

    <a href="YOUR_X_LINK" target="_blank">
      <img
        src="/Twitter.png"
        alt="X"
        className="w-8 h-8 hover:scale-110 transition"
      />
    </a>

    <a href="https://www.instagram.com/likhithgowda44?igsh=MWtpNmQzMmdmbmZ4Yg==" target="_blank">
      <img
        src="/instagram.png"
        alt="Instagram"
        className="w-8 h-8 hover:scale-110 transition"
      />
    </a>

  </div>
</div>

  <p className="mt-4 text-gray-400">
    © 2026 Viraloop. All rights reserved.
  </p>
</footer>

    </div>
  );
}

export default Home;