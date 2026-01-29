import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser"; // ✅ Correct package

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "ganesh050801@gmail.com",
    href: "mailto:ganesh050801@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 70927 73840",
    href: "tel:+917092773840",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Chennai, India",
    href: "#",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });

    emailjs
      .send(
        "service_pf5x82l", // ✅ Your Service ID
        "template_t5df5v4", // ✅ Your Template ID
        {
          from_name: formData.name, // matches {{from_name}}
          reply_to: formData.email,
          message: formData.message,
          to_name: "Ganesh Arumugam", // matches {{to_name}}
        },
        "pBJ9fSO2R_VtqN9Gt" // ✅ Your Public Key
      )
      .then(() => {
        setSubmitStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setSubmitStatus({
          type: "error",
          message: "Failed to send message. Please try again later.",
        });
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade">
            Get In Touch
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade animation-delay-100 text-secondary-foreground">
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade animation-delay-200">
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="glass p-8 rounded-3xl border border-primary/30 animate-fade animation-delay-300">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  required
                  placeholder="Your name..."
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3
                             bg-surface-light dark:bg-surface-dark
                             text-foreground-light dark:text-foreground-dark
                             placeholder:muted-light dark:placeholder:muted-dark
                             rounded-xl border border-border-light dark:border-border-dark
                             focus:border-primary focus:ring-1 focus:ring-primary
                             outline-none transition-all"
                  disabled={isLoading}
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3
                             bg-surface-light dark:bg-surface-dark
                             text-foreground-light dark:text-foreground-dark
                             placeholder:muted-light dark:placeholder:muted-dark
                             rounded-xl border border-border-light dark:border-border-dark
                             focus:border-primary focus:ring-1 focus:ring-primary
                             outline-none transition-all"
                  disabled={isLoading}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  required
                  placeholder="Your message..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-3
                             bg-surface-light dark:bg-surface-dark
                             text-foreground-light dark:text-foreground-dark
                             placeholder:muted-light dark:placeholder:muted-dark
                             rounded-xl border border-border-light dark:border-border-dark
                             focus:border-primary focus:ring-1 focus:ring-primary
                             outline-none transition-all resize-none"
                  disabled={isLoading}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-14 bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg rounded-xl flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : <>
                  Send Message
                  <Send className="w-5 h-5" />
                </>}
              </button>

              {/* Status Message */}
              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    <AlertCircle className="w-5 h-5" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6 animate-fade animation-delay-400">
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface-light dark:hover:bg-surface-dark transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-light dark:text-muted-dark">
                        {item.label}
                      </div>
                      <div className="font-medium text-foreground-light dark:text-foreground-dark">
                        {item.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <div className="glass rounded-3xl p-8 border border-primary/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-medium text-foreground-light dark:text-foreground-dark">
                  Currently Available
                </span>
              </div>
              <p className="text-muted-light dark:text-muted-dark text-sm">
                Open to frontend roles, freelance projects, and exciting collaborations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
