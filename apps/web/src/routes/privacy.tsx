import { createFileRoute } from "@tanstack/react-router";
import type React from "react";
import { useState } from "react";
import {
  Shield,
  Lock,
  Eye,
  Server,
  Globe,
  Mail,
  ChevronDown,
  ChevronUp,
} from "feather-icons-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy" },
      { name: "description", content: "Roadsyster Privacy Policy" },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <div className=" py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-12 h-12" />
            <h1 className="text-4xl font-bold">Privacy Policy</h1>
          </div>
          <p className="text-lg">
            Your trust matters. Learn how RoadSyster protects your data and
            respects your privacy.
          </p>
          <p className="text-sm mt-4">Last Updated: January 18, 2026</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="rounded-lg shadow-sm p-6 mb-8">
          <h2 className="text-2xl font-bold mb-4">
            Our Commitment to Your Privacy
          </h2>
          <p className=" mb-4">
            At RoadSyster, we believe freelancers deserve complete transparency
            and control over their data. This Privacy Policy explains how we
            collect, use, protect, and share information when you use our
            open-source CRM platform.
          </p>
          <p className="mb-4">
            RoadSyster is operated by [Your Company Name] ("we," "us," or
            "our"). By using RoadSyster, you agree to the practices described in
            this policy.
          </p>
          <div className="border-l-4 p-4 mt-4">
            <p className="text-sm">
              <strong>Quick Summary:</strong> We only collect data necessary to
              provide our service, never sell your information, and give you
              complete control to export or delete your data anytime.
            </p>
          </div>
        </div>

        {/* Expandable Sections */}
        <PrivacySection
          title="Information We Collect"
          icon={<Eye />}
          defaultOpen={true}
        >
          <h3 className="font-semibold mb-3">Account Information</h3>
          <p className=" mb-4">
            When you create a RoadSyster account, we collect your name, email
            address, and password (encrypted). If you sign up via OAuth
            providers (Google, etc.), we receive basic profile information they
            provide.
          </p>

          <h3 className="font-semibold mb-3 mt-6">Business Data You Create</h3>
          <p className=" mb-2">
            As you use RoadSyster, you create and store various types of data:
          </p>
          <ul className="list-disc list-inside  space-y-1 ml-4">
            <li>
              Client information (names, contact details, company information)
            </li>
            <li>
              Project details (descriptions, deadlines, deliverables, files)
            </li>
            <li>
              Financial records (invoices, payments, expenses, revenue data)
            </li>
            <li>
              Communication logs (notes about calls, meetings, and interactions)
            </li>
            <li>Proposals and contracts you create</li>
            <li>Time tracking entries</li>
            <li>Task lists and deadlines</li>
          </ul>

          <h3 className="font-semibold mb-3 mt-6">Usage Information</h3>
          <p className=" mb-4">
            We automatically collect technical information about how you use
            RoadSyster, including IP address, browser type, device information,
            pages visited, features used, and timestamps. This helps us improve
            the platform and diagnose technical issues.
          </p>

          <h3 className="font-semibold mb-3 mt-6">Cookies and Tracking</h3>
          <p className=" mb-4">
            We use essential cookies to keep you logged in and remember your
            preferences. Optional analytics cookies help us understand usage
            patterns. You can disable non-essential cookies in your browser
            settings.
          </p>

          <h3 className="font-semibold mb-3 mt-6">Integration Data</h3>
          <p className=" mb-4">
            When you connect third-party services (payment processors, calendar
            apps, accounting software), we receive only the data necessary to
            provide the integration functionality. You can disconnect
            integrations anytime.
          </p>
        </PrivacySection>

        <PrivacySection title="How We Use Your Information" icon={<Server />}>
          <p className=" mb-4">We use your information to:</p>
          <ul className="list-disc list-inside  space-y-2 ml-4">
            <li>
              <strong>Provide core services:</strong> Enable you to manage
              clients, projects, invoices, and all RoadSyster features
            </li>
            <li>
              <strong>Process payments:</strong> Handle subscription billing and
              invoice payments through our payment processors
            </li>
            <li>
              <strong>Send transactional communications:</strong> Account
              notifications, invoice reminders, system updates, and security
              alerts
            </li>
            <li>
              <strong>Improve the platform:</strong> Analyze usage patterns to
              enhance features, fix bugs, and optimize performance
            </li>
            <li>
              <strong>Provide customer support:</strong> Respond to your
              questions and troubleshoot issues
            </li>
            <li>
              <strong>Ensure security:</strong> Detect fraud, prevent abuse, and
              protect against security threats
            </li>
            <li>
              <strong>Comply with legal obligations:</strong> Meet regulatory
              requirements and respond to lawful requests
            </li>
          </ul>

          <div className="border-l-4 p-4 mt-6">
            <p className="text-sm ">
              <strong>We will never:</strong> Sell your data to third parties,
              use your client information for our own marketing, or share your
              business data with competitors.
            </p>
          </div>
        </PrivacySection>

        <PrivacySection title="How We Share Your Information" icon={<Globe />}>
          <p className=" mb-4">
            We share your information only in limited circumstances:
          </p>

          <h3 className="font-semibold mb-3">Service Providers</h3>
          <p className=" mb-4">
            We work with trusted third-party companies that help us operate
            RoadSyster, including cloud hosting providers, payment processors,
            email services, and analytics tools. These partners can only access
            data necessary for their services and are contractually required to
            protect your information.
          </p>

          <h3 className="font-semibold mb-3 mt-6">Integrations You Enable</h3>
          <p className=" mb-4">
            When you connect third-party services (like Stripe for payments or
            Google Calendar for scheduling), you authorize us to share relevant
            data with those services. You control which integrations to enable
            and can revoke access anytime.
          </p>

          <h3 className="font-semibold mb-3 mt-6">Legal Requirements</h3>
          <p className=" mb-4">
            We may disclose information if required by law, court order, or
            government request, or if necessary to protect our rights, prevent
            fraud, or ensure user safety.
          </p>

          <h3 className="font-semibold mb-3 mt-6">Business Transfers</h3>
          <p className=" mb-4">
            If RoadSyster is acquired or merged with another company, your
            information may be transferred. We'll notify you before this happens
            and explain your options.
          </p>

          <h3 className="font-semibold mb-3 mt-6">Open Source Community</h3>
          <p className=" mb-4">
            While RoadSyster's code is open source, your personal data and
            business information are never included in public repositories. Only
            anonymized, aggregated statistics may be shared with the developer
            community.
          </p>
        </PrivacySection>

        <PrivacySection title="Data Security" icon={<Lock />}>
          <p className=" mb-4">
            We take security seriously and implement multiple layers of
            protection:
          </p>

          <ul className="list-disc list-inside  space-y-2 ml-4 mb-6">
            <li>
              <strong>Encryption:</strong> All data is encrypted in transit
              (TLS/SSL) and at rest (AES-256)
            </li>
            <li>
              <strong>Access controls:</strong> Strict internal policies limit
              who can access user data
            </li>
            <li>
              <strong>Regular backups:</strong> Automated daily backups ensure
              data recovery if needed
            </li>
            <li>
              <strong>Security monitoring:</strong> Continuous monitoring for
              suspicious activity and threats
            </li>
            <li>
              <strong>Secure infrastructure:</strong> Industry-standard cloud
              hosting with enterprise-grade security
            </li>
            <li>
              <strong>Regular audits:</strong> Periodic security assessments and
              vulnerability testing
            </li>
          </ul>

          <p className=" mb-4">
            <strong>Your role in security:</strong> Use a strong, unique
            password, enable two-factor authentication if available, keep your
            login credentials confidential, and log out on shared devices.
          </p>

          <div className="border-l-4 p-4 mt-4">
            <p className="text-sm ">
              While we implement strong security measures, no system is 100%
              secure. If you believe your account has been compromised, contact
              us immediately at security@roadsyster.com
            </p>
          </div>
        </PrivacySection>

        <PrivacySection title="Your Privacy Rights" icon={<Shield />}>
          <p className=" mb-4">
            You have complete control over your data. Your rights include:
          </p>

          <h3 className="font-semibold mb-3">Access Your Data</h3>
          <p className=" mb-4">
            You can view all your data anytime through your RoadSyster account
            dashboard. Request a complete copy of your data in machine-readable
            format.
          </p>

          <h3 className="font-semibold mb-3 mt-6">Export Your Data</h3>
          <p className=" mb-4">
            Download all your business data (clients, projects, invoices, etc.)
            in CSV or JSON format. No lock-in, no restrictions.
          </p>

          <h3 className="font-semibold mb-3 mt-6">Correct Your Data</h3>
          <p className=" mb-4">
            Update any inaccurate or outdated information directly in your
            account or contact support for assistance.
          </p>

          <h3 className="font-semibold mb-3 mt-6">Delete Your Data</h3>
          <p className=" mb-4">
            Close your account anytime from settings. All your data will be
            permanently deleted within 30 days (except what we're legally
            required to retain).
          </p>

          <h3 className="font-semibold mb-3 mt-6">Opt-Out of Marketing</h3>
          <p className=" mb-4">
            Unsubscribe from marketing emails using the link in any message.
            You'll still receive essential transactional emails (invoices,
            security alerts).
          </p>

          <h3 className="font-semibold mb-3 mt-6">
            For EU/UK Users (GDPR Rights)
          </h3>
          <p className=" mb-4">
            Additional rights include data portability, restriction of
            processing, and objection to processing. Contact our Data Protection
            Officer at privacy@roadsyster.com to exercise these rights.
          </p>

          <h3 className="font-semibold mb-3 mt-6">
            For California Users (CCPA Rights)
          </h3>
          <p className=" mb-4">
            You have the right to know what personal information we collect,
            request deletion, and opt-out of sale (though we never sell your
            data). Contact privacy@roadsyster.com to exercise your rights.
          </p>
        </PrivacySection>

        <PrivacySection title="Data Retention" icon={<Server />}>
          <p className=" mb-4">
            We retain your data as long as your account is active or as needed
            to provide services. When you close your account:
          </p>

          <ul className="list-disc list-inside  space-y-2 ml-4">
            <li>Most data is deleted within 30 days</li>
            <li>
              Some information may be retained longer for legal, tax, or
              regulatory compliance (typically 7 years for financial records)
            </li>
            <li>
              Anonymized usage statistics may be retained indefinitely for
              product improvement
            </li>
            <li>
              Backup copies are automatically purged according to our backup
              retention schedule (90 days)
            </li>
          </ul>
        </PrivacySection>

        <PrivacySection title="International Data Transfers" icon={<Globe />}>
          <p className=" mb-4">
            RoadSyster may store and process data in multiple countries to
            provide optimal performance. If you're located outside our primary
            hosting region, your data may be transferred internationally.
          </p>

          <p className=" mb-4">
            We ensure appropriate safeguards are in place for international
            transfers, including standard contractual clauses approved by
            regulatory authorities, to protect your data regardless of location.
          </p>

          <p className=" mb-4">
            For EU users, we comply with GDPR requirements for international
            data transfers and only transfer data to countries with adequate
            protections or under approved mechanisms.
          </p>
        </PrivacySection>

        <PrivacySection title="Children's Privacy" icon={<Shield />}>
          <p className=" mb-4">
            RoadSyster is not intended for individuals under 16 years old. We do
            not knowingly collect personal information from children. If we
            discover we've collected data from a child, we'll delete it
            promptly.
          </p>

          <p className=" mb-4">
            If you're a parent or guardian and believe your child has provided
            us with personal information, contact us at privacy@roadsyster.com
          </p>
        </PrivacySection>

        <PrivacySection title="Changes to This Policy" icon={<Mail />}>
          <p className=" mb-4">
            We may update this Privacy Policy periodically to reflect changes in
            our practices, technology, legal requirements, or other factors.
            We'll notify you of significant changes by:
          </p>

          <ul className="list-disc list-inside  space-y-2 ml-4 mb-4">
            <li>
              Posting the updated policy on this page with a new "Last Updated"
              date
            </li>
            <li>Sending you an email notification (for material changes)</li>
            <li>Displaying an in-app notification when you next log in</li>
          </ul>

          <p className=" mb-4">
            We encourage you to review this policy periodically. Your continued
            use of RoadSyster after changes indicates acceptance of the updated
            policy.
          </p>
        </PrivacySection>

        {/* Contact Information */}
        <div className=" rounded-lg shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold mb-4">Questions or Concerns?</h2>
          <p className="mb-6">
            We're here to help. If you have questions about this Privacy Policy
            or how we handle your data, please reach out.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-2">General Privacy Inquiries</h3>
              <p className="text-sm">privacy@roadsyster.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Data Protection Officer</h3>
              <p className="text-sm">dpo@roadsyster.com</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Security Issues</h3>
              <p className="text-sm">security@roadsyster.com</p>
            </div>
            {/*<div>
              <h3 className="font-semibold mb-2">Mailing Address</h3>
              <p className="text-sm">
                [Your Company Name]
                <br />
                [Street Address]
                <br />
                [City, State ZIP]
                <br />
                [Country]
              </p>
            </div>*/}
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 p-6 rounded-lg border">
          <p className="text-sm text-center">
            As an open-source project, RoadSyster's code is publicly available
            on GitHub. We believe in transparency—you can review our security
            practices and data handling implementation in our repository.
          </p>
        </div>
      </div>
    </div>
  );
}

const PrivacySection = ({
  title,
  icon: Icon,
  children,
  defaultOpen = false,
}: {
  title: string;
  icon: React.JSX.Element;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border rounded-lg mb-4 overflow-hidden">
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 transition-colors"
      >
        <div className="flex items-center gap-3">
          {Icon}
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
        {isOpen ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </Button>
      {isOpen && <div className="p-6">{children}</div>}
    </div>
  );
};
