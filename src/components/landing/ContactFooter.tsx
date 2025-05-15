import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Container } from '@/components/landing/Container';
import { Linkedin, Facebook, Instagram, Twitter, MessageCircle, ShieldCheck } from 'lucide-react';

export function ContactFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gray-900 text-gray-300">
      <Container className="py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Elevate Your Restaurant?
            </h2>
            <p className="mt-4 text-lg text-gray-400">
              Get in touch for a personalized demo or any queries. Our team is here to help you succeed.
            </p>
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-white">Contact Information</h3>
              <p>Email: <a href="mailto:sales@petpooja.com" className="text-primary hover:underline">sales@petpooja.com</a></p>
              <p>Phone: <a href="tel:+911234567890" className="text-primary hover:underline">+91 12345 67890</a></p>
              <Button variant="outline" className="bg-transparent border-primary text-primary hover:bg-primary hover:text-white" asChild>
                <a href="https://wa.me/911234567890" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-white">Follow Us</h3>
              <div className="mt-4 flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-primary"><Linkedin className="h-6 w-6" /></Link>
                <Link href="#" className="text-gray-400 hover:text-primary"><Facebook className="h-6 w-6" /></Link>
                <Link href="#" className="text-gray-400 hover:text-primary"><Instagram className="h-6 w-6" /></Link>
                <Link href="#" className="text-gray-400 hover:text-primary"><Twitter className="h-6 w-6" /></Link>
              </div>
            </div>
          </div>

          <form className="space-y-6 p-8 bg-gray-800 rounded-lg shadow-xl">
            <div>
              <Label htmlFor="name" className="text-gray-300">Full Name</Label>
              <Input type="text" id="name" name="name" required className="mt-1 bg-gray-700 border-gray-600 text-white focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-300">Email Address</Label>
              <Input type="email" id="email" name="email" required className="mt-1 bg-gray-700 border-gray-600 text-white focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <Label htmlFor="businessType" className="text-gray-300">Business Type</Label>
              <Select name="businessType">
                <SelectTrigger id="businessType" className="mt-1 bg-gray-700 border-gray-600 text-white focus:ring-primary focus:border-primary">
                  <SelectValue placeholder="Select business type" />
                </SelectTrigger>
                <SelectContent className="bg-gray-700 border-gray-600 text-white">
                  <SelectItem value="restaurant">Restaurant</SelectItem>
                  <SelectItem value="cafe">Café</SelectItem>
                  <SelectItem value="food_truck">Food Truck</SelectItem>
                  <SelectItem value="cloud_kitchen">Cloud Kitchen</SelectItem>
                  <SelectItem value="qsr">QSR</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="message" className="text-gray-300">Message</Label>
              <Textarea id="message" name="message" rows={4} required className="mt-1 bg-gray-700 border-gray-600 text-white focus:ring-primary focus:border-primary" />
            </div>
            <div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white">Send Message</Button>
            </div>
          </form>
        </div>

        <div className="mt-16 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">&copy; {currentYear} Petpooja. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <span className="flex items-center text-sm text-gray-500">
              <ShieldCheck className="h-4 w-4 mr-1 text-green-500" /> ISO Certified
            </span>
            <span className="flex items-center text-sm text-gray-500">
              <ShieldCheck className="h-4 w-4 mr-1 text-green-500" /> PCI DSS Compliant
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
