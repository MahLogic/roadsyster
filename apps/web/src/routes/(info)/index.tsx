import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Box,
  Calendar,
  CheckCircle,
  Code,
  DollarSign,
  FileText,
  Github,
  Users,
} from "feather-icons-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { WaitlistDialog } from "@/components/waitlist/dialog";
import { Navigation } from "@/components/navigation";
import { Boxes } from "lucide-react";

export const Route = createFileRoute("/(info)/")({ component: App });

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <main>
        <section className="py-20 md:py-32 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground"></span>
                </span>
                Work in Progress
              </div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
                Manage your freelance business in one place
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Track clients, invoices, and proposals in one centralized
                dashboard. Built for independent freelancers who need simple,
                powerful tools.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                <WaitlistDialog>
                  <Button size="lg" className="w-full sm:w-auto">
                    Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </WaitlistDialog>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto bg-transparent"
                  asChild
                >
                  <Link to="/github" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 fill-white" /> View on
                    GitHub
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
              The freelancer struggle is real
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 text-pretty leading-relaxed">
              You spend more time managing tools than doing the work you love.
              Switching between spreadsheets, invoice generators, and email
              threads wastes hours every week.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <span className="text-2xl">⏱️</span>
                </div>
                <h3 className="font-semibold">
                  Time lost to context switching
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Bouncing between different apps breaks your focus and slows
                  you down.
                </p>
              </Card>
              <Card className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <span className="text-2xl">💸</span>
                </div>
                <h3 className="font-semibold">Money left on the table</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Missed invoices and forgotten follow-ups mean lost revenue.
                </p>
              </Card>
              <Card className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-lg bg-destructive/10 flex items-center justify-center">
                  <span className="text-2xl">😓</span>
                </div>
                <h3 className="font-semibold">Admin work burnout</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  You became a freelancer to do great work, not endless
                  paperwork.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Everything you need, nothing you don't
              </h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                RoadSyster replaces fragmented tools with one unified dashboard
                designed for how you actually work.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Work & Schedule Organization
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  See all your projects, deadlines, and tasks in one place.
                  Never miss a deliverable or double-book yourself again.
                </p>
              </Card>
              <Card className="p-8 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">
                  Client & Relationship Management
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Keep track of client details, communication history, and
                  project notes. Build stronger relationships with better
                  context.
                </p>
              </Card>
              <Card className="p-8 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Financial Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Create invoices, track payments, and monitor your income.
                  Simple financial tools that help you get paid faster.
                </p>
              </Card>
              <Card className="p-8 space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Proposal Management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Build and send professional proposals quickly. Track status
                  and follow up at the right time to win more work.
                </p>
              </Card>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-balance">
              Real outcomes, not feature lists
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-12 text-pretty leading-relaxed">
              Every feature exists to solve a real problem you face every day.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">
                    Spend less time on admin
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Automated reminders, templates, and workflows cut down
                    repetitive tasks.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Get paid consistently</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Invoice tracking and payment reminders ensure nothing falls
                    through the cracks.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">
                    Understand your business
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    See where your time goes, who your best clients are, and how
                    your income trends.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">
                    Easy tech stack management
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Track the tools and technologies you use across projects
                    without manual spreadsheets.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-balance">
                  Built by MahLogic Solutions
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  RoadSyster is currently built and maintained by a solo
                  developer who understands the freelance life firsthand.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  This is not a venture-backed startup rushing to scale. It's a
                  focused tool built by someone who uses it, for people who need
                  it. Development happens deliberately, with attention to the
                  details that matter.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button variant="outline" asChild>
                    <Link to="/about">
                      <Code className="mr-2 h-4 w-4" /> Learn More
                    </Link>
                  </Button>
                </div>
              </div>
              <Card className="p-8 bg-muted/50">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Users className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">
                        Independent & Sustainable
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Built for the long term
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">Freelancer-First</div>
                      <div className="text-sm text-muted-foreground">
                        Built by a developer, for everyone
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calendar className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold">
                        Thoughtful Development
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Quality over speed
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        <section id="open-source" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Open source, built in public
              </h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                RoadSyster is licensed under AGPL-3.0, which means you can see
                exactly how it works.
              </p>
            </div>
            <Card className="p-8 md:p-12">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3">
                    What AGPL-3.0 means for you
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">
                        You can view, modify, and run the code for personal or
                        commercial use
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">
                        If you modify and distribute it, you must share your
                        changes under the same license
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-muted-foreground leading-relaxed">
                        The code is transparent and auditable by anyone
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="pt-4">
                  <Button
                    variant="outline"
                    className="w-full sm:w-auto bg-transparent"
                    asChild
                  >
                    <Link to="/github">
                      <Github className="mr-2 h-4 w-4" /> Explore the Code
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="support" className="py-20 px-4 ">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Support independent development
              </h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Building and maintaining RoadSyster takes time, effort, and
                resources.
              </p>
            </div>
            <Card className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">Why donations help</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-primary">
                          1
                        </span>
                      </div>
                      <span className="text-muted-foreground leading-relaxed">
                        Cover hosting and infrastructure costs
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-primary">
                          2
                        </span>
                      </div>
                      <span className="text-muted-foreground leading-relaxed">
                        Support ongoing development time
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-semibold text-primary">
                          3
                        </span>
                      </div>
                      <span className="text-muted-foreground leading-relaxed">
                        Keep the project sustainable and independent
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    Every contribution, no matter the size, helps keep this
                    project alive and growing. Your support means this tool can
                    stay focused on what freelancers actually need.
                  </p>
                  <Button className="w-full sm:w-auto" asChild>
                    <Link to="/paypal">Support via PayPal</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="zaio" className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                Level up your tech career with ZAIO
              </h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed max-w-2xl mx-auto">
                Whether you're starting out or leveling up, ZAIO offers
                industry-recognized bootcamps and certifications to help you
                break into tech.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <Card className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">
                  Fullstack AI Engineer Bootcamp
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Master AI-powered development with cutting-edge tools and
                  frameworks to build intelligent applications.
                </p>
              </Card>
              <Card className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Box className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Fullstack Bootcamp</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Learn frontend and backend development from scratch and become
                  a job-ready fullstack developer.
                </p>
              </Card>
              <Card className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Data Science Bootcamp</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Dive into data analysis, machine learning, and visualization
                  to unlock insights from data.
                </p>
              </Card>
              <Card className="p-6 space-y-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Cybersecurity Bootcamp</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Protect systems and networks with hands-on training in ethical
                  hacking and security practices.
                </p>
              </Card>
              <Card className="p-6 space-y-3 md:col-span-2 lg:col-span-2">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold">Occupational Certificates</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Earn recognized credentials in Software Development,
                  Cybersecurity, or Data Science to validate your skills and
                  boost your career prospects.
                </p>
              </Card>
            </div>
            <div className="text-center">
              <Button size="lg" asChild>
                <Link to="/zaio" target="_blank" rel="noopener noreferrer">
                  Explore ZAIO Programs <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Use our referral link to support RoadSyster while investing in
                your future.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance">
                What's the status?
              </h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                RoadSyster is actively being built. Here's what exists now and
                what's coming.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 bg-muted/30">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Available Now
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="leading-relaxed">
                      Core project structure and architecture
                    </span>
                  </li>

                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="leading-relaxed">
                      Open-source repository on GitHub
                    </span>
                  </li>
                </ul>
              </Card>
              <Card className="p-8 bg-muted/30">
                <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  Coming Soon
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span className="leading-relaxed">
                      Basic client management features
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span className="leading-relaxed">
                      Invoice generation and tracking
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span className="leading-relaxed">
                      Proposal builder and templates
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span className="leading-relaxed">
                      Schedule and task management
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground">•</span>
                    <span className="leading-relaxed">
                      Financial reporting and insights
                    </span>
                  </li>
                </ul>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <p className="text-muted-foreground leading-relaxed">
                Join the waitlist to get updates as features launch and be among
                the first to try RoadSyster.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 bg-muted/30">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Ready to simplify your freelance business?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-pretty leading-relaxed">
              Join the waitlist to be notified when RoadSyster launches. No
              spam, just updates on progress and early access.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <WaitlistDialog>
                <Button size="lg" className="w-full sm:w-auto">
                  Join the Waitlist <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </WaitlistDialog>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-transparent"
                asChild
              >
                <Link to="/github" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4 fill-white" /> Star on GitHub
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Boxes className="h-5 w-5" />
                <span className="font-semibold">RoadSyster</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Business management for independent freelancers. Built by
                MahLogic Solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#features"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="/roadmap.pdf"
                    className="hover:text-foreground transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
                <li>
                  <Link
                    to="/contributors"
                    className="hover:text-foreground transition-colors"
                  >
                    Contributors
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <a
                    href="/sitemap.xml"
                    className="hover:text-foreground transition-colors"
                  >
                    Sitemap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link
                    to="/github"
                    className="hover:text-foreground transition-colors"
                  >
                    GitHub
                  </Link>
                </li>
                <li>
                  <Link
                    to="/x"
                    className="hover:text-foreground transition-colors"
                  >
                    X
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>© 2025 MahLogic Solutions. Licensed under AGPL-3.0.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
