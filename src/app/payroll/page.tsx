
'use client';

import { Navbar } from '@/components/landing/Navbar';
import { ContactFooter } from '@/components/landing/ContactFooter';
import { Container } from '@/components/landing/Container';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle2, ArrowRight, Users, Calculator, FileStack, HandCoins, ShieldCheck, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { Metadata } from 'next';
import payrollDashboard from '../../assets/payrollDashboard.jpg';

// export const metadata: Metadata = {
//   title: 'Payroll Management Software | Another Head Payroll',
//   description: 'Simple, accurate, and compliant payroll software. Automate salary processing, statutory compliance (PF, ESI, TDS), and reporting. Pay employees on time, every time.',
//   keywords: ['payroll software', 'payroll management system', 'salary software', 'hr payroll software india'],
// };


export default function PayrollPage() {
  const features = [
    {
      icon: Calculator,
      title: 'Automated Salary Calculation',
      description: 'Automatically calculate salaries, including deductions, bonuses, and overtime. Eliminate manual errors and save hours of work.',
    },
    {
      icon: FileStack,
      title: 'Statutory Compliance (PF, ESI, PT)',
      description: 'Stay compliant with the latest regulations. Our software handles PF, ESI, TDS, and PT calculations and generates all required reports.',
    },
    {
      icon: Clock,
      title: 'Leave & Attendance Integration',
      description: 'Integrate with biometric systems or use our online portal to manage attendance, track leaves, and sync data for payroll processing.',
    },
    {
      icon: HandCoins,
      title: 'Employee Self-Service Portal',
      description: 'Empower your employees to view payslips, submit investment declarations, and check leave balances online.',
    },
    {
      icon: ShieldCheck,
      title: 'Secure & Confidential',
      description: 'Your company and employee data is protected with multiple layers of security, ensuring complete confidentiality.',
    },
    {
      icon: Users,
      title: 'Comprehensive Reporting',
      description: 'Generate payslips, salary statements, compliance forms, and custom reports with just a few clicks.',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background antialiased">
      <Navbar />
      <main className="flex-grow">
        {/* Header Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-green-500/10 to-background">
          <Container className="text-center py-12 md:py-16">
            <Users className="h-16 w-16 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
              Simple, Accurate, and Compliant Payroll Software
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto">
              Pay your employees on time, every time, without the hassle. Our software automates payroll processing so you can focus on your people.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-x-6 gap-y-4">
              <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto" asChild>
                <Link href="/#contact">Request a Demo</Link>
              </Button>
            </div>
          </Container>
        </section>

        {/* Feature Section */}
        <Container id="features" className="py-16 sm:py-24 md:py-32">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Payroll Management, Simplified</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Discover the features that make payroll processing stress-free.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-left bg-card hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="p-6">
                  <div className="p-3 bg-green-500/10 rounded-full mb-4 inline-block">
                    <feature.icon className="h-8 w-8 text-green-500" />
                  </div>
                  <CardTitle className="text-2xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0">
                  <p className="text-foreground/70">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>

         {/* Why Us Section */}
        <section className="bg-secondary/40 py-16 sm:py-24 md:py-32">
          <Container className="py-0">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               <div className="relative aspect-square w-full max-w-lg mx-auto">
                 <Image
                    src='/payrollDashboard.jpg'
                    alt="HR manager reviewing payroll on a laptop"
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint="payroll software laptop"
                    className="rounded-2xl shadow-xl"
                  />
              </div>
              <div className="text-center lg:text-left">
                  <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Focus on People, Not Paperwork</h2>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground">
                    Manual payroll is prone to errors and consumes valuable time. Another Head Payroll automates the entire process, ensuring accuracy and compliance, so your HR team can focus on strategic initiatives that matter.
                  </p>
                  <ul className="mt-8 space-y-4 text-left">
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-green-500 mt-1 shrink-0" /><span className="text-lg"><strong>Always Up-to-Date:</strong> We keep track of changing tax laws and compliance rules so you don't have to.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-green-500 mt-1 shrink-0" /><span className="text-lg"><strong>Scales With You:</strong> From 5 employees to 500, our software grows with your business.</span></li>
                    <li className="flex items-start gap-3"><CheckCircle2 className="h-6 w-6 text-green-500 mt-1 shrink-0" /><span className="text-lg"><strong>Great Value:</strong> Get enterprise-level payroll features at a price that fits your budget.</span></li>
                  </ul>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <Container className="text-center py-16 sm:py-24 md:py-32">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
              Ready for Stress-Free Payroll?
            </h2>
            <p className="mt-4 text-xl text-foreground/80 max-w-3xl mx-auto mb-10">
              Let us show you how easy payroll can be. Get a personalized demo today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto px-8 py-3 text-lg font-semibold">
                <Link href="/#contact">Talk to an Expert</Link>
              </Button>
            </div>
        </Container>

      </main>
      <ContactFooter />
    </div>
  );
}
