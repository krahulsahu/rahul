import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, GitlabIcon as GitHub, Linkedin, Twitter } from "lucide-react"

export default function Contact() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl font-bold mb-6">Get In Touch</h1>
            <p className="text-muted-foreground mb-8">
              I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try
              my best to get back to you!
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5" />
                <a href="mailto:rahul.cse.nsec@gmail.com" className="text-muted-foreground hover:text-foreground">
                  rahul.cse.nsec@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-4">
                <GitHub className="h-5 w-5" />
                <a
                  href="https://github.com/rahulkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  github.com/rahulkumar
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Linkedin className="h-5 w-5" />
                <a
                  href="https://linkedin.com/in/rahulkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  linkedin.com/in/rahulkumar
                </a>
              </div>
              <div className="flex items-center gap-4">
                <Twitter className="h-5 w-5" />
                <a
                  href="https://twitter.com/rahulkumar"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground"
                >
                  twitter.com/rahulkumar
                </a>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input id="email" type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input id="subject" placeholder="How can I help you?" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={5} />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
