import { useState } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "message sent successfully!",
      description: "thank you for your message. i'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "jwei57@ucsc.edu",
    },
    {
      icon: Phone, // change this to github icon later
      label: "github.com/jolenewei",
    },
    {
      icon: MapPin,
      label: "san jose, ca",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      href: "#",
      label: "github",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "linkedin",
    },
    {
      icon: Twitter,
      href: "#",
      label: "twitter",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted min-h-screen pt-28">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">get in touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            i'm always interested in new opportunities and collaborations. let's connect!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">contact information</h3>
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-center">
                    <Icon className="w-5 h-5 mr-3" strokeWidth={2} />
                    <span className="text-muted-foreground">{item.label}</span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <h4 className="font-semibold mb-4">socials</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className="p-2 border border-border hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      aria-label={social.label}
                    >
                      <Icon className="w-5 h-5" strokeWidth={2} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">name</Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="your name"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="email">email</Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="mt-2"
                  />
                </div>
                <div>
                  <Label htmlFor="message">message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="your message..."
                    className="mt-2"
                  />
                </div>
                <Button type="submit" className="w-full">
                  send message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
