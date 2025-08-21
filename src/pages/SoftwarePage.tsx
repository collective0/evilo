import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sparkles, Calendar, Users, BarChart3, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SoftwarePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b border-border">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Link to="/" className="flex items-center space-x-1 text-muted-foreground hover:text-foreground">
                <ArrowLeft className="w-4 h-4" />
                <span>Back</span>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Evilo Software™</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">Login Portal</Button>
              <Button size="sm">Book Demo</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            <Sparkles className="w-3 h-3 mr-1" />
            AI-Powered Scheduling & Operations
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Evilo Software™
            <span className="block text-primary mt-2">Automated Booking & Workflow Ops</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Designed for clinics, industrial teams, and salons. Evilo's assistant 
            plugs into your website to handle client details, scheduling, follow-ups, 
            communication, and analytics.
          </p>

          <div className="flex gap-4 justify-center">
            <Button size="lg" className="px-8 py-4">Book Demo Meeting</Button>
            <Button size="lg" variant="outline" className="px-8 py-4">Login Portal</Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete Operations Management
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to automate your business operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Smart Scheduling</CardTitle>
                <CardDescription>
                  AI-powered appointment booking with automated conflict resolution 
                  and intelligent time slot optimization.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Customer Management</CardTitle>
                <CardDescription>
                  Comprehensive client profiles with automated follow-ups, 
                  communication tracking, and personalized service recommendations.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-primary" />
                </div>
                <CardTitle>Analytics & Insights</CardTitle>
                <CardDescription>
                  Real-time business intelligence with performance metrics, 
                  trend analysis, and actionable growth recommendations.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Automate Your Operations?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Join businesses already using Evilo Software to streamline their workflow.
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg" className="px-8 py-4">Book Demo Meeting</Button>
            <Button size="lg" variant="outline" className="px-8 py-4">Contact Sales</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2024 Evilo Software™. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default SoftwarePage;