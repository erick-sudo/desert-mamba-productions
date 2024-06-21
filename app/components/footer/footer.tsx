import React from "react";
import SocialMediaLinks from "../social-media-links";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-gray-300">
      <div className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 py-12">
          {/* About Us Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p>
              Desert Mamba Productions is dedicated to creating high-quality
              content that captures the essence of storytelling. From
              documentaries to podcasts, we bring your stories to life.
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Quick Links
            </h3>
            <ul>
              <li className="mb-2">
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="/documentaries" className="hover:underline">
                  Documentaries
                </a>
              </li>
              <li className="mb-2">
                <a href="/podcasts" className="hover:underline">
                  Podcasts
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h3>
            <ul>
              <li className="mb-2">
                Email:{" "}
                <a
                  href="mailto:info@desertmamba.com"
                  className="hover:underline"
                >
                  info@desertmamba.com
                </a>
              </li>
              <li className="mb-2">
                Phone:{" "}
                <a href="tel:+1234567890" className="hover:underline">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="mb-2">
                Address: 123 Desert Lane, Sand City, AZ 12345
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Follow Us</h3>

            <div className="flex gap-4">
              <SocialMediaLinks />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-cyan-500/50 p-4 text-center">
        &copy; {new Date().getFullYear()}&nbsp;Desert Mamba Productions. All
        rights reserved.
        <a href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </a>
        &nbsp; |&nbsp;
        <a href="/terms-of-service" className="hover:underline">
          Terms of Service
        </a>
      </div>
    </footer>
  );
}
