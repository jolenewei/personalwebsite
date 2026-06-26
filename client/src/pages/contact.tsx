import { useState } from "react";
import { Mail, MapPin, Github, Linkedin, Send, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({ title: "please fill in all fields", variant: "destructive" });
      return;
    }
    setSending(true);
    try {
      const res = await fetch("https://formspree.io/f/mnnzvngn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        toast({ title: "message sent!", description: "i'll get back to you soon." });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({ title: "something went wrong", description: "please try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "something went wrong", description: "please try again.", variant: "destructive" });
    }
    setSending(false);
  };

  const contactLinks = [
    { icon: Mail, label: "email", value: "jowei@ucsd.edu", href: "mailto:jowei@ucsd.edu" },
    { icon: Github, label: "github", value: "jolenewei", href: "https://github.com/jolenewei" },
    { icon: Linkedin, label: "linkedin", value: "jolene-wei", href: "https://www.linkedin.com/in/jolene-wei" },
    { icon: MapPin, label: "location", value: "san jose, ca", href: null },
  ];

  return (
    <section id="contact" className="px-6 py-20 md:py-32 relative">
      <div className="absolute top-28 left-8 md:left-16 text-[10px] text-white/[0.04] font-mono -rotate-90 hidden md:block">
        CONTACT — 05
      </div>

      <div className="max-w-5xl mx-auto">
        <p className="font-mono text-xs text-muted-foreground tracking-widest uppercase mb-8 fade-up">
          05 / contact
        </p>

        <h2 className="text-4xl md:text-6xl font-extrabold mb-16 leading-tight fade-up">
          let's<span className="text-muted-foreground/40"> connect</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4 fade-up fade-up-delay-1">
            {contactLinks.map((link, index) => {
              const Icon = link.icon;
              const inner = (
                <div className="glass-card p-5 rounded-2xl flex items-center justify-between group transition-all">
                  <div className="flex items-center gap-4">
                    <Icon className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                        {link.label}
                      </p>
                      <p className="text-sm font-medium mt-0.5">{link.value}</p>
                    </div>
                  </div>
                  {link.href && (
                    <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
              );

              if (link.href) {
                return (
                  <a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {inner}
                  </a>
                );
              }
              return <div key={index}>{inner}</div>;
            })}
          </div>

          <div className="glass-card p-6 md:p-8 rounded-2xl fade-up fade-up-delay-2 md:-mt-8">
            <h3 className="font-semibold text-white mb-6">send me a message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="text-xs text-muted-foreground mb-1.5 block uppercase tracking-wider font-medium">
                  name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/25 transition-all"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-xs text-muted-foreground mb-1.5 block uppercase tracking-wider font-medium">
                  email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/25 transition-all"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-xs text-muted-foreground mb-1.5 block uppercase tracking-wider font-medium">
                  message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="your message..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/25 focus:outline-none focus:border-white/25 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={sending}
                className="w-full bg-white/10 border border-white/15 text-white py-2.5 rounded-xl text-sm font-medium hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {sending ? "sending..." : "send message"} {!sending && <Send className="w-3.5 h-3.5" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
