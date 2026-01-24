import { useCopyToClipboard } from "@/hooks/use-copy-to-clipboard";
import { Navigation } from "@/components/navigation";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Link2 } from "feather-icons-react";
import { createSectionId } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const LAST_UPDATED = "February 13, 2025";

export const Route = createFileRoute("/(info)/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service" },
      { name: "description", content: "Roadsyster terms of service" },
    ],
  }),
  component: RouteComponent,
});

function RouteComponent() {
  const { copiedValue: copiedSection, copyToClipboard } = useCopyToClipboard();

  const handleCopyLink = (sectionId: string) => {
    const url = `${window.location.origin}${window.location.pathname}#${sectionId}`;
    copyToClipboard(url, sectionId);
  };
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto max-w-4xl px-4 py-16">
        <Card className="overflow-hidden rounded-xl border-none bg-gray-50/80 dark:bg-transparent">
          <CardHeader className="space-y-4 px-8 py-8">
            <div className="space-y-2 text-center">
              <CardTitle className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl dark:text-white">
                Terms of Service
              </CardTitle>
              <div className="flex items-center justify-center gap-2">
                <p className="text-sm text-gray-500 dark:text-white/60">
                  Last updated: {LAST_UPDATED}
                </p>
              </div>
            </div>
          </CardHeader>

          <div className="space-y-8 p-8">
            {sections.map((section) => {
              const sectionId = createSectionId(section.title);
              return (
                <div key={section.title} id={sectionId} className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {section.title}
                    </h2>
                    <Button
                      variant="ghost"
                      size="icon-sm"
                      onClick={() => handleCopyLink(sectionId)}
                      className="text-gray-400 hover:text-gray-700 dark:text-white/60 dark:hover:text-white/80"
                      aria-label={`Copy link to ${section.title} section`}
                    >
                      <Link2
                        className={`h-4 w-4 ${copiedSection === sectionId ? "text-green-500 dark:text-green-400" : ""}`}
                      />
                    </Button>
                  </div>
                  <div className="prose prose-sm prose-a:text-blue-600 hover:prose-a:text-blue-800 dark:prose-a:text-blue-400 dark:hover:prose-a:text-blue-300 max-w-none text-gray-600 dark:text-white/80">
                    {section.content}
                  </div>
                </div>
              );
            })}

            <div className="mt-12 flex flex-wrap items-center justify-center gap-4"></div>
          </div>
        </Card>
      </div>
    </div>
  );
}

const sections = [
  {
    title: "Notice",
    content: (
      <p>
        <strong>Important:</strong> Please read these Terms of Service carefully
        before using RoadSyster. By accessing or using our platform, you agree
        to be bound by these terms.
      </p>
    ),
  },
  {
    title: "1. Acceptance of Terms",
    content: (
      <section className="flex flex-col gap-4">
        <p>
          By accessing and using RoadSyster ("the Service"), you accept and
          agree to be bound by the terms and provisions of this agreement. If
          you do not agree to these Terms of Service, please do not use the
          Service.
        </p>
        <p>
          RoadSyster is an open-source Customer Relationship Management platform
          designed for solo freelancers. These terms govern your use of both the
          hosted service and any self-hosted instances you may deploy.
        </p>
      </section>
    ),
  },
  {
    title: "2. Description of Service",
    content: (
      <section className="flex flex-col gap-4">
        <p>
          RoadSyster provides a comprehensive CRM platform specifically designed
          for freelancers, offering:
        </p>
        <ul className="ml-4 list-disc space-y-2">
          <li>Client and project management tools</li>
          <li>Invoicing and payment tracking</li>
          <li>Communication timeline and history</li>
          <li>Proposal building and contract management</li>
          <li>Time tracking and capacity planning</li>
          <li>Financial reporting and analytics</li>
          <li>Task and deadline management</li>
        </ul>
        <p>
          We reserve the right to modify, suspend, or discontinue any aspect of
          the Service at any time, with or without notice.
        </p>
      </section>
    ),
  },
  {
    title: "3. User Accounts",
    content: (
      <section className="flex flex-col gap-2">
        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            3.1 Account Registration
          </h3>
          <p>
            To access certain features of RoadSyster, you must register for an
            account. You agree to:
          </p>
          <ul className="ml-4 list-disc space-y-2">
            <li>
              Provide accurate, current, and complete information during
              registration
            </li>
            <li>
              Maintain and update your information to keep it accurate and
              current
            </li>
            <li>Maintain the security of your password and account</li>
            <li>
              Accept all responsibility for activity that occurs under your
              account
            </li>
            <li>
              Notify us immediately of any unauthorized use of your account
            </li>
          </ul>
        </div>

        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            3.2 Account Eligibility
          </h3>
          <p>
            You must be at least 18 years old to use RoadSyster. By creating an
            account, you represent that you meet this age requirement and have
            the legal capacity to enter into this agreement.
          </p>
        </div>

        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            3.3 Account Termination
          </h3>
          <p>
            We reserve the right to suspend or terminate your account if we
            believe you have violated these Terms of Service or if your account
            has been inactive for an extended period. You may also terminate
            your account at any time through your account settings.
          </p>
        </div>
      </section>
    ),
  },
  {
    title: "4. Subscription Plans and Billing",
    content: (
      <section className="flex flex-col gap-2">
        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            4.1 Free and Paid Plans
          </h3>
          <p>
            RoadSyster offers both free and paid subscription plans. The
            features, limitations, and pricing for each plan are described on
            our pricing page and may be updated from time to time.
          </p>
        </div>

        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            4.2 Payment Terms
          </h3>
          <p>For paid subscriptions:</p>
          <ul className="ml-4 list-disc space-y-2">
            <li>
              Billing cycles are monthly or annual, as selected during
              subscription
            </li>
            <li>Payment is due at the beginning of each billing cycle</li>
            <li>All fees are non-refundable except as required by law</li>
            <li>
              We accept payment via credit card and other methods as indicated
              on our platform
            </li>
            <li>
              Failed payments may result in service suspension or termination
            </li>
          </ul>
        </div>

        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            4.3 Subscription Changes and Cancellation
          </h3>
          <p>
            You may upgrade, downgrade, or cancel your subscription at any time.
            Changes take effect at the start of the next billing cycle. Upon
            downgrade, you may lose access to certain features and data limits
            may apply.
          </p>
        </div>

        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            4.4 Price Changes
          </h3>
          <p>
            We reserve the right to modify our pricing with at least 30 days'
            notice to existing subscribers. Continued use of the Service after a
            price change constitutes acceptance of the new pricing.
          </p>
        </div>
      </section>
    ),
  },
  {
    title: "5. User Data and Privacy",
    content: (
      <section className="flex flex-col gap-2">
        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            5.1 Your Data
          </h3>
          <p>
            You retain all rights to the data you input into RoadSyster,
            including client information, projects, invoices, and
            communications. We claim no ownership over your content.
          </p>
        </div>

        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            5.2 Data Protection
          </h3>
          <p>We implement industry-standard security measures, including:</p>
          <ul className="ml-4 list-disc space-y-2">
            <li>AES-256 encryption for data at rest and in transit</li>
            <li>Regular automated backups</li>
            <li>GDPR compliance for users in applicable jurisdictions</li>
            <li>Secure API key management for third-party integrations</li>
          </ul>
        </div>

        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            5.3 Data Export and Deletion
          </h3>
          <p>
            You have the right to export your data at any time in standard
            formats. You may also request complete deletion of your account and
            associated data, which we will process within 30 days unless legal
            obligations require retention.
          </p>
        </div>

        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            5.4 Privacy Policy
          </h3>
          <p>
            Our collection and use of personal information is described in our{" "}
            <Link
              to="/privacy"
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              Privacy Policy
            </Link>
            , which is incorporated into these Terms by reference.
          </p>
        </div>
      </section>
    ),
  },
  {
    title: "6. Acceptable Use Policy",
    content: (
      <section className="flex flex-col gap-4">
        <p>You agree not to use RoadSyster to:</p>
        <ul className="ml-4 list-disc space-y-2">
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe on intellectual property rights of others</li>
          <li>Transmit malware, viruses, or malicious code</li>
          <li>
            Attempt to gain unauthorized access to our systems or other users'
            accounts
          </li>
          <li>
            Use automated systems (bots, scrapers) without written permission
          </li>
          <li>
            Engage in any activity that disrupts or interferes with the Service
          </li>
          <li>Harass, abuse, or harm others</li>
          <li>
            Distribute spam or unsolicited communications through the platform
          </li>
          <li>Resell or redistribute the Service without authorization</li>
        </ul>
      </section>
    ),
  },
  {
    title: "7. Third-Party Integrations",
    content: (
      <section className="flex flex-col gap-4">
        <p>
          RoadSyster integrates with various third-party services including
          payment processors, calendar services, accounting software, and
          others.
        </p>
        <p>
          Your use of these integrations is subject to the respective
          third-party terms and privacy policies. We are not responsible for the
          practices or performance of these third-party services. You grant us
          permission to access your data from these services as necessary to
          provide integration functionality.
        </p>
      </section>
    ),
  },
  {
    title: "8. Intellectual Property",
    content: (
      <section className="flex flex-col gap-2">
        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            8.1 Open Source License
          </h3>
          <p>
            RoadSyster's source code is available under an open-source license
            as specified in our GitHub repository. You may use, modify, and
            distribute the code subject to the terms of that license.
          </p>
        </div>

        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            8.2 Trademarks and Branding
          </h3>
          <p>
            The RoadSyster name, logo, and branding are proprietary. While the
            code is open source, you may not use our trademarks without written
            permission except as allowed by the open-source license for
            attribution purposes.
          </p>
        </div>

        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            8.3 User Content
          </h3>
          <p>
            You retain all rights to content you create using RoadSyster. By
            using the Service, you grant us a limited license to host, store,
            and display your content solely for the purpose of providing the
            Service to you.
          </p>
        </div>
      </section>
    ),
  },
  {
    title: "9. Disclaimers and Limitations of Liability",
    content: (
      <section className="flex flex-col gap-2">
        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            9.1 Service Availability
          </h3>
          <p>
            RoadSyster is provided "as is" and "as available" without warranties
            of any kind, either express or implied. We do not guarantee that the
            Service will be uninterrupted, secure, or error-free.
          </p>
        </div>

        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            9.2 No Professional Advice
          </h3>
          <p>
            RoadSyster is a business management tool and does not provide legal,
            financial, tax, or accounting advice. You are responsible for
            consulting with appropriate professionals regarding your business
            decisions.
          </p>
        </div>

        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            9.3 Limitation of Liability
          </h3>
          <p>
            To the maximum extent permitted by law, RoadSyster and its
            affiliates shall not be liable for:
          </p>
          <ul className="ml-4 list-disc space-y-2">
            <li>
              Indirect, incidental, special, consequential, or punitive damages
            </li>
            <li>Loss of profits, revenue, data, or business opportunities</li>
            <li>Service interruptions or data loss</li>
            <li>Actions or omissions of third-party services</li>
          </ul>
          <p>
            Our total liability for any claim arising from these Terms or your
            use of the Service shall not exceed the amount you paid us in the 12
            months preceding the claim, or R1 000 if you are using the free
            plan.
          </p>
        </div>

        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            9.4 Indemnification
          </h3>
          <p>
            You agree to indemnify and hold harmless RoadSyster, its affiliates,
            and their respective officers, directors, employees, and agents from
            any claims, damages, losses, or expenses (including legal fees)
            arising from your use of the Service or violation of these Terms.
          </p>
        </div>
      </section>
    ),
  },
  {
    title: "10. Modifications to Terms",
    content: (
      <section className="flex flex-col gap-4">
        <p>
          We may modify these Terms of Service at any time. We will notify you
          of material changes via email or through a prominent notice on the
          platform at least 30 days before they take effect. Your continued use
          of the Service after changes become effective constitutes acceptance
          of the modified Terms.
        </p>
        <p>
          For minor changes (such as clarifications or corrections), we may
          update these Terms without prior notice, though we will update the
          "Last Updated" date at the top of this page.
        </p>
      </section>
    ),
  },
  {
    title: "11. Governing Law and Dispute Resolution",
    content: (
      <section className="flex flex-col gap-4">
        <p>
          These Terms shall be governed by and construed in accordance with the
          laws of South Africa, without regard to its conflict of law
          provisions.
        </p>
        <p>
          Any disputes arising from these Terms or your use of RoadSyster shall
          first be addressed through good-faith negotiation. If negotiations
          fail, disputes shall be resolved through binding arbitration in
          accordance with the rules of the{" "}
          <a
            href="https://arbitration.co.za/"
            className="underline text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            Arbitration Foundation of Southern Africa (AFSA)
          </a>
          , except where prohibited by law.
        </p>
      </section>
    ),
  },
  {
    title: "12. General Provisions",
    content: (
      <section className="flex flex-col gap-2">
        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            12.1 Entire Agreement
          </h3>
          <p>
            These Terms, together with our Privacy Policy and any other legal
            notices published by us, constitute the entire agreement between you
            and RoadSyster.
          </p>
        </div>
        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            12.2 Severability
          </h3>
          <p>
            If any provision of these Terms is found to be unenforceable or
            invalid, that provision shall be limited or eliminated to the
            minimum extent necessary, and the remaining provisions shall remain
            in full force and effect.
          </p>
        </div>
        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            12.3 No Waiver
          </h3>
          <p>
            Our failure to enforce any right or provision of these Terms shall
            not be deemed a waiver of such right or provision.
          </p>
        </div>
        <div className="mt-3">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            12.4 Assignment
          </h3>
          <p>
            You may not assign or transfer these Terms without our written
            consent. We may assign these Terms without restriction.
          </p>
        </div>
      </section>
    ),
  },
  {
    title: "Contact Information",
    content: (
      <div className="text-muted-foreground mt-4 space-y-3">
        <p>For questions about these terms:</p>
        <div className="flex flex-col space-y-2">
          <Link
            to="/github"
            className="inline-flex items-center text-blue-600 hover:text-blue-800"
          >
            <Github className="mr-2 h-4 w-4" />
            Open an issue on GitHub
          </Link>
        </div>
      </div>
    ),
  },
];
