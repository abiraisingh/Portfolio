import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import catFriend from "@/assets/cat-friend.jpg";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gradient-hero">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Cat and Message */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Contact me
            </h2>
            
            <div className="relative">
              <div className="relative w-64 h-64 mx-auto md:mx-0">
                <img
                  src={catFriend}
                  alt="Cat friend"
                  className="w-full h-full rounded-full object-cover border-4 border-border/20"
                />
                
                {/* Speech bubble */}
                <div className="absolute -top-8 -right-8 bg-gradient-card backdrop-blur-sm border border-border rounded-2xl p-4 shadow-lg">
                  <p className="text-foreground font-medium whitespace-nowrap">
                    My friend is waiting
                    <br />
                    for your letters
                  </p>
                  <div className="absolute bottom-0 left-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-border transform translate-y-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gradient-card backdrop-blur-lg rounded-3xl p-8 border border-border/20 shadow-2xl">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Get in touch today
            </h3>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Name</Label>
                  <Input
                    id="name"
                    placeholder="Anton Filikas"
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground">E-mail</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="anton.f@gmail.com"
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message" className="text-foreground">Leave us a message</Label>
                <Textarea
                  id="message"
                  placeholder="Please type your message here..."
                  rows={5}
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>
              
              <Button variant="gradient" className="w-full rounded-full py-3" size="lg">
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;