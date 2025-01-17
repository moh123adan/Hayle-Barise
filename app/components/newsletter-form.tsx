"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log({ email, subscribed });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-[#4c75ae] mb-4">
          SIGN UP FOR SCHOOL NEWS
        </h1>
        <p className="text-lg text-gray-600">
          Stay up-to-date with the latest news
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            type="email"
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md text-base"
            required
          />
        </div>

        <div className="flex items-start space-x-2">
          <Checkbox
            id="subscribe"
            checked={subscribed}
            onCheckedChange={(checked) => setSubscribed(checked as boolean)}
            className="mt-1"
          />
          <label
            htmlFor="subscribe"
            className="text-sm text-gray-600 leading-none mt-1"
          >
            Yes, subscribe me to your newsletter.
          </label>
        </div>

        <div className="flex justify-end">
          <Button
            type="submit"
            className="bg-[#3bb995] hover:bg-[#2b8e72] text-white px-8 py-2"
          >
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
}
