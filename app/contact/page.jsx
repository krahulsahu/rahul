"use client";
import { useState } from "react"; 
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, GitlabIcon as GitHub, Linkedin } from "lucide-react";

export default function Contact() {
  const [loading, setLoading] = useState(false); 
  const [status, setStatus] = useState(""); 

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true);
  setStatus("");

  const formData = {
    name: e.target.name.value,
    email: e.target.email.value,
    subject: e.target.subject.value,
    message: e.target.message.value,
  };

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (data.success) {
      setStatus("✅ Message sent successfully!");
      e.target.reset(); // clear form
    } else {
      setStatus("❌ Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    setStatus("❌ Something went wrong.");
  }

  setLoading(false);
};


  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
            <p className="text-muted-foreground mb-8">
              I'm currently looking for new opportunities. Whether you have a
              question or just want to say hi, I'll try my best to get back to
              you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5" />
                <a
                  href="mailto:rahulkumarsahu8182@gmail.com"
                  className="text-muted-foreground hover:text-foreground"
                >
                  rahulkumarsahu8182@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <GitHub className="h-5 w-5" />
                <a
                  href="https://github.com/krahulsahu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  github.com/krahulsahu
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="h-5 w-5" />
                <a
                  href="https://www.linkedin.com/in/rahul-k-22839a1a1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  linkedin.com/in/rahul-k-22839a1a1
                </a>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <Input id="name" name="name" placeholder="Your name" required />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can I help you?"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message"
                  name="message"
                  rows={5}
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Sending. . ." : "Send Message"}
              </Button>
              {status && (
                <p className="text-sm text-center mt-2 text-muted-foreground">{ status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
