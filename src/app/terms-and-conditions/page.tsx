'use client';

import React from 'react';

export default function TermsAndConditionsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-12 text-gray-800">
      <h1 className="text-3xl font-bold mb-6">Terms &amp; Conditions</h1>
      <p className="mb-4"><strong>Effective Date:</strong> 9 August 2025</p>

      <p className="mb-4">
        Welcome to <strong>Another Head</strong> (“we”, “our”, “us”). These Terms &amp; Conditions (“Terms”)
        govern your use of our website <a href="https://www.anotherhead.com" className="text-blue-600 underline">www.anotherhead.com</a>
        and our products and services. By accessing or using our site, you agree to these Terms.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">1. Use of Our Services</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>You must be at least 18 years old or have the consent of a parent/guardian to use our services.</li>
        <li>You agree to use our services only for lawful purposes and in accordance with these Terms.</li>
        <li>You are responsible for maintaining the confidentiality of your account information.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">2. Intellectual Property</h2>
      <p className="mb-4">
        All content, trademarks, logos, and designs on this website are owned by or licensed to <strong>Another Head</strong>.
        You may not copy, distribute, or use them without our written permission.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">3. Pricing & Payment</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Prices for our products and services are listed in Indian Rupees (INR) unless stated otherwise.</li>
        <li>We reserve the right to change pricing at any time without prior notice.</li>
        <li>Payments are processed securely through trusted payment gateways.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-3">4. Cancellations & Refunds</h2>
      <p className="mb-4">
        Refunds and cancellations are subject to our Refund Policy. Please contact us at
        <a href="mailto:support@anotherhead.com" className="text-blue-600 underline"> support@anotherhead.com</a>
        for assistance.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">5. Limitation of Liability</h2>
      <p className="mb-4">
        We are not liable for any direct, indirect, incidental, or consequential damages arising from the
        use of our website or services.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">6. Third-Party Links</h2>
      <p className="mb-4">
        Our site may contain links to third-party websites. We do not control or endorse their content
        and are not responsible for their terms or policies.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">7. Changes to These Terms</h2>
      <p className="mb-4">
        We may update these Terms from time to time. The latest version will always be available on this page.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">8. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by and construed in accordance with the laws of India. Any disputes
        will be subject to the exclusive jurisdiction of the courts in [Your City, State].
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-3">Contact Us</h2>
      <p className="mb-4">
        📧 <a href="mailto:support@anotherhead.com" className="text-blue-600 underline">support@anotherhead.com</a><br />
        📞 +91-XXXXXXXXXX<br />
        📍 Your Office Address
      </p>
    </main>
  );
}
