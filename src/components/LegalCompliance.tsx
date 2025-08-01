import { Shield, FileCheck, Lock, Users, CheckCircle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const LegalCompliance = () => {
  return (
    <section id="legal" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Legal & Compliance
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your practice's security and compliance are our top priorities. We maintain the highest standards 
            to protect your patients' sensitive information and ensure regulatory compliance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Shield className="text-primary" size={24} />
              </div>
              <CardTitle className="text-xl">HIPAA Compliant</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Full HIPAA compliance with encrypted data transmission, secure storage, 
                and comprehensive audit trails for all patient information.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="text-primary" size={24} />
              </div>
              <CardTitle className="text-xl">Data Encryption</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                End-to-end encryption using AES-256 standards for data at rest and in transit, 
                ensuring maximum security for sensitive patient information.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20 hover:border-primary/40 transition-colors">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <CardTitle className="text-xl">Access Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Role-based access controls and multi-factor authentication ensure only 
                authorized personnel can access patient data and system features.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Compliance Certifications</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-foreground">HIPAA Business Associate Agreement (BAA)</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-foreground">SOC 2 Type II Certification</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-foreground">GDPR Compliance</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-foreground">State-specific Privacy Regulations</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-500" size={20} />
                <span className="text-foreground">Regular Security Audits & Penetration Testing</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">Legal Documentation</h3>
            <Card className="border-primary/20">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <FileCheck className="text-primary" size={24} />
                </div>
                <CardTitle>Terms of Service & Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Our comprehensive terms of service and privacy policy outline how we 
                  protect your data and define our service commitments.
                </p>
                <div className="space-y-2">
                  <a 
                    href="#" 
                    className="block text-primary hover:text-primary/80 transition-colors underline"
                  >
                    View Terms of Service
                  </a>
                  <a 
                    href="#" 
                    className="block text-primary hover:text-primary/80 transition-colors underline"
                  >
                    View Privacy Policy
                  </a>
                  <a 
                    href="#" 
                    className="block text-primary hover:text-primary/80 transition-colors underline"
                  >
                    Business Associate Agreement
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegalCompliance;