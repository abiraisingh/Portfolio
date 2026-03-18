import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import catFriend from "@/assets/cat-friend.jpg";

const ContactSection = () => {
  const form = useRef<HTMLFormElement | null>(null);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    emailjs
      .sendForm(
        "service_8g9iqff",      // ✅ your service ID
        "template_qdr8u4d",     // ✅ your template ID
        form.current!,
        "ge4KtQP5Aolqg-Lsp"     // ✅ your public key
      )
      .then(
        () => {
          setLoading(false);
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          setLoading(false);
          setStatus("❌ Failed to send message. Try again.");
          console.error(error);
        }
      );
  };

  return (
    <section id="contact" className="relative py-24 px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>

      <div className="absolute top-[-120px] left-[-120px] w-[350px] h-[350px] bg-blue-300/40 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[350px] h-[350px] bg-purple-300/40 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-14 items-center">

          {/* Left Side */}
          <div className="space-y-10">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Contact Me
            </h2>

            <div className="relative flex justify-center md:justify-start">
              <div className="relative group">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 blur-3xl opacity-40 group-hover:opacity-60 transition duration-500" />

                <img
                  src={catFriend}
                  alt="Cat friend"
                  className="relative w-64 h-64 rounded-full object-cover border border-white shadow-lg"
                />

                <div className="absolute -top-6 -right-10 bg-white/80 backdrop-blur-lg border border-gray-200 rounded-xl px-4 py-3 shadow-md">
                  <p className="text-gray-700 font-medium text-sm">
                    My friend is waiting
                    <br />
                    for your message 🐾
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-8 shadow-lg">

            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Get in Touch
            </h3>

            <form ref={form} onSubmit={sendEmail} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-4">

                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    name="name"
                    id="name"
                    placeholder="Your name"
                    required
                    className="bg-white/80 text-gray-900 placeholder:text-gray-500 border-gray-200 focus:border-purple-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    name="email"
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    required
                    className="bg-white/80 text-gray-900 placeholder:text-gray-500 border-gray-200 focus:border-purple-400"
                  />
                </div>

              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  name="message"
                  id="message"
                  placeholder="Write your message here..."
                  rows={5}
                  required
                  className="bg-white/80 text-gray-900 placeholder:text-gray-500 border-gray-200 focus:border-purple-400 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90"
              >
                {loading ? "Sending..." : "Send Message"}
              </Button>

              {status && (
                <p className="text-center text-sm text-gray-700">
                  {status}
                </p>
              )}

            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;