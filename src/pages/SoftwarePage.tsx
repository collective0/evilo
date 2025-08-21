import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Calendar, Users, BarChart3, Settings, Zap, Shield } from "lucide-react";

const SoftwarePage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Software Features</h1>
        
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center mb-3">
                <Calendar className="w-5 h-5 text-blue-600" />
              </div>
              <CardTitle>Appointment Scheduling</CardTitle>
              <CardDescription>
                Advanced booking system with calendar integration, automated reminders, 
                and conflict detection.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-10 h-10 bg-green-100 rounded flex items-center justify-center mb-3">
                <Users className="w-5 h-5 text-green-600" />
              </div>
              <CardTitle>Client Database</CardTitle>
              <CardDescription>
                Comprehensive customer profiles with history tracking, preferences, 
                and communication logs.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-10 h-10 bg-purple-100 rounded flex items-center justify-center mb-3">
                <BarChart3 className="w-5 h-5 text-purple-600" />
              </div>
              <CardTitle>Reporting Dashboard</CardTitle>
              <CardDescription>
                Real-time analytics, revenue tracking, and business insights 
                with exportable reports.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-10 h-10 bg-orange-100 rounded flex items-center justify-center mb-3">
                <Settings className="w-5 h-5 text-orange-600" />
              </div>
              <CardTitle>Workflow Automation</CardTitle>
              <CardDescription>
                Custom automated processes for follow-ups, notifications, 
                and routine administrative tasks.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-10 h-10 bg-yellow-100 rounded flex items-center justify-center mb-3">
                <Zap className="w-5 h-5 text-yellow-600" />
              </div>
              <CardTitle>API Integration</CardTitle>
              <CardDescription>
                Connect with existing tools and systems through REST API 
                and webhook support.
              </CardDescription>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader>
              <div className="w-10 h-10 bg-red-100 rounded flex items-center justify-center mb-3">
                <Shield className="w-5 h-5 text-red-600" />
              </div>
              <CardTitle>Security & Compliance</CardTitle>
              <CardDescription>
                Enterprise-grade security with data encryption, backup systems, 
                and compliance monitoring.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Technical Specifications</h2>
          <div className="grid md:grid-cols-3 gap-4 text-sm">
            <div className="p-4 bg-muted rounded">
              <h3 className="font-semibold mb-2">Platform</h3>
              <p>Cloud-based SaaS solution with 99.9% uptime guarantee</p>
            </div>
            <div className="p-4 bg-muted rounded">
              <h3 className="font-semibold mb-2">Integration</h3>
              <p>RESTful API with webhook support and third-party connectors</p>
            </div>
            <div className="p-4 bg-muted rounded">
              <h3 className="font-semibold mb-2">Support</h3>
              <p>24/7 technical support with dedicated account management</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SoftwarePage;