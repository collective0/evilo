import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const SoftwarePage = () => {
  const handleBookDemo = () => {
    // Handle demo booking - can be customized for software page specific action
    console.log('Demo booking requested');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-slate-900">
      {/* Animated background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-900/10 via-slate-900 to-slate-800">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-900/5 to-slate-700/10"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-slate-400/5 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-500/3 to-slate-500/3 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>
      
      <div className="relative z-10">
        {/* Simple standalone header */}
        <header className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-8 py-6">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="text-2xl font-bold text-white">
              Evilo Software
            </div>
            <Button variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900">
              Login Portal
            </Button>
          </div>
        </header>
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                  Automated Customer Management
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                  Powerful AI-Driven
                  <span className="text-blue-400 block">Operations</span>
                </h1>
                
                <p className="text-lg text-gray-300 mb-8 max-w-xl">
                  Evilo Software automates onboarding, scheduling, management, follow-ups, 
                  and communications—all from a single platform that plugs directly into your 
                  website. Focus on caring for your customers while we handle the administration.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white">Integrated AI assistant for seamless client interactions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white">Customizable schedules tailored to your team</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white">Actionable analytics and insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white">Easy two-way communication (email, SMS & chat)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-white">Customer directories & appointment histories</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" onClick={handleBookDemo} className="bg-blue-600 hover:bg-blue-700 text-white">
                    Book a Demo
                  </Button>
                  <Button size="lg" variant="outline" className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-slate-900">
                    Login Portal
                  </Button>
                </div>
              </div>

              <div className="relative">
                <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border border-slate-700">
                  <img
                    src="/lovable-uploads/7343a5c5-cec5-4f68-8bd9-dd4a72a7ec46.png"
                    alt="Practice management dashboard showing a daily schedule and key metrics"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ROI Statistics */}
        <section className="py-16 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-white">10+ hrs</CardTitle>
                  <CardDescription className="text-gray-400">Admin work saved every week</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-white">$250</CardTitle>
                  <CardDescription className="text-gray-400">Approximate weekly labour cost savings</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold text-white">$1K+</CardTitle>
                  <CardDescription className="text-gray-400">Estimated monthly savings</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Built for Regulated & High-Velocity Work */}
        <section className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Built for Regulated & High-Velocity Work
              </h2>
              <p className="text-lg text-gray-300 max-w-4xl mx-auto">
                From HIPAA to safety audits to client memberships, Evilo adapts to your requirements while keeping 
                interfaces simple.
              </p>
            </div>
            
            <div className="mb-8">
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">HIPAA & BAAs</span>
                <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">EHR/CRM & CMMS</span>
                <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">POS & Inventory</span>
                <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">Role Permissions</span>
                <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">SLA & Reminders</span>
                <span className="px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium">Analytics API</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SoftwarePage;