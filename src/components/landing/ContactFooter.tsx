"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Linkedin,
  Facebook,
  Instagram,
  Twitter,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

export function ContactFooter() {
  const currentYear = new Date().getFullYear();
  const [businessType, setBusinessType] = useState("");

  const AHLogo = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-primary"
    >
      <path
        d="M4 18.5V5.5H8.5L12 12L15.5 5.5H20V18.5H16V10L12 17L8 10V18.5H4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );

  const sendDataToGoogleSheet = async (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    // const businessType = form.businessType.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !businessType || !message) {
      alert("Please fill all the fields.");
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("businessType", businessType);
    formData.append("message", message);
    formData.append("phone",phone);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbxgzXhSouWe09xDdGBXbeTJENaK1ssW8YxxR_e0TqMykKq_SaZBcWNbRjlgSyuc9Fc/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.text(); // or response.json() if your script returns JSON
      console.log("Success:", result);
      form.reset();
    } catch (error) {
      console.error("Error submitting to Google Sheets:", error);
    }
  };

  return (
    <footer id="contact" className="bg-secondary/50 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5">
            <div className="mb-6">
              <Link href="/" className="flex items-center gap-2">
                <AHLogo />
                <span className="text-2xl font-bold text-foreground">
                  Another Head
                </span>
              </Link>
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Ready to Elevate Your Restaurant?
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Get in touch for a personalized demo or any queries. Our team is
              here to help you succeed.
            </p>
            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-semibold text-white">
                Contact Information
              </h3>
              {/* <p>Email: <a href="mailto:sales@Grendel Graphs.com" className="text-primary hover:underline">sohanverma50@gmail.com</a></p> */}
              {/* <p>Phone: <a href="tel:+911234567890" className="text-primary hover:underline">+91 12345 67890</a></p> */}
              <Button
                variant="outline"
                className="bg-transparent border-primary text-primary hover:bg-primary hover:text-white"
                asChild
              >
                <a
                  href="https://wa.me/9340785987"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
                </a>
              </Button>
            </div>
            <div className="mt-8 flex space-x-4">
              <Link
                href="https://www.linkedin.com/company/anotherhead"
                className="text-gray-400 hover:text-primary"
              >
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.facebook.com/GrendelGraphs/about/?_rdr"
                className="text-gray-400 hover:text-primary"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="https://www.instagram.com/anotherheadofficial/"
                className="text-gray-400 hover:text-primary"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="https://x.com/GrendelGraphs"
                className="text-gray-400 hover:text-primary"
              >
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Card className="p-8 bg-card rounded-2xl shadow-lg">
              <form className="space-y-6" onSubmit={sendDataToGoogleSheet}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground/90">
                      Full Name
                    </Label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-foreground/90">
                      Email Address
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
  <Label htmlFor="phone" className="text-foreground/90">
    Phone Number
  </Label>
  <Input
    type="phone"
    id="phone"
    name="phone"
    required
    className="mt-2"
    pattern="[0-9]{10}" // Optional: basic validation for 10-digit numbers
    placeholder="e.g. 1234567890"
  />
</div>

                </div>
                <div>
                  <div>
                    <Label
                      htmlFor="businessType"
                      className="text-foreground/90"
                    >
                      Business Type
                    </Label>
                    <Select onValueChange={(value) => setBusinessType(value)}>
                      <SelectTrigger
                        id="businessType"
                        className="mt-2  border-gray-600 text-black focus:ring-primary focus:border-primary"
                      >
                        <SelectValue placeholder="Select business type" />
                      </SelectTrigger>
                      <SelectContent className="border-gray-600 text-black">
                        <SelectItem value="restaurant">Restaurant</SelectItem>
                        <SelectItem value="cafe">Café</SelectItem>
                        <SelectItem value="food_truck">Food Truck</SelectItem>
                        <SelectItem value="medical_shop">Medical Shop</SelectItem>
                        <SelectItem value="cloud_kitchen">
                          Cloud Kitchen
                        </SelectItem>
                        <SelectItem value="qsr">QSR</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="text-foreground/90">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="mt-2"
                  />
                </div>
                <div>
                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Another Head. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Dummy Card component to resolve compile error.
// Assumes a Card component exists in the project.
function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
