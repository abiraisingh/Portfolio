import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import catFriend from "@/assets/cat-friend.jpg";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 overflow-hidden"
    >
      {/* Light Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50"></div>

      {/* Decorative blobs */}
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

                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-blue-400 blur-3xl opacity-40 group-hover:opacity-60 transition duration-500" />

                <img
                  src={catFriend}
                  alt="Cat friend"
                  className="relative w-64 h-64 rounded-full object-cover border border-white shadow-lg"
                />

                {/* Speech bubble */}
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

            <form className="space-y-6">

              <div className="grid md:grid-cols-2 gap-4">

                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    className="bg-white/80 border-gray-200 focus:border-purple-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="bg-white/80 border-gray-200 focus:border-purple-400"
                  />
                </div>

              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  placeholder="Write your message here..."
                  rows={5}
                  className="bg-white/80 border-gray-200 focus:border-purple-400 resize-none"
                />
              </div>

              <Button
                size="lg"
                className="w-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:opacity-90"
              >
                Send Message
              </Button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;