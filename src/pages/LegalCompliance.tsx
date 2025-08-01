import { Shield, FileCheck, Lock, Users, CheckCircle, Upload } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

const LegalCompliancePage = () => {
  const [uploadedFile, setUploadedFile] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const { toast } = useToast();

  // Check if a file already exists
  useEffect(() => {
    const checkExistingFile = async () => {
      const { data } = await supabase.storage
        .from('compliance-docs')
        .list('', { limit: 1 });
      
      if (data && data.length > 0) {
        setUploadedFile(data[0].name);
      }
    };
    checkExistingFile();
  }, []);

  const handleFileUpload = async (file: File) => {
    if (!file || file.type !== 'application/pdf') {
      toast({
        title: "Error",
        description: "Please select a valid PDF file",
        variant: "destructive",
      });
      return;
    }

    setIsUploading(true);
    console.log('Starting file upload:', file.name);
    
    try {
      // Remove existing file if any
      if (uploadedFile) {
        console.log('Removing existing file:', uploadedFile);
        await supabase.storage.from('compliance-docs').remove([uploadedFile]);
      }

      const fileName = `hipaa-compliance-${Date.now()}.pdf`;
      console.log('Uploading new file:', fileName);
      
      const { data, error } = await supabase.storage
        .from('compliance-docs')
        .upload(fileName, file);

      console.log('Upload result:', { data, error });

      if (error) {
        console.error('Upload error:', error);
        throw error;
      }

      setUploadedFile(fileName);
      toast({
        title: "Success",
        description: "HIPAA compliance document uploaded successfully",
      });
    } catch (error) {
      console.error('Upload failed:', error);
      toast({
        title: "Error",
        description: `Failed to upload document: ${error.message}`,
        variant: "destructive",
      });
    } finally {
      setIsUploading(false);
    }
  };

  const handleDownload = async () => {
    if (!uploadedFile) return;

    try {
      const { data } = await supabase.storage
        .from('compliance-docs')
        .download(uploadedFile);

      if (data) {
        const url = URL.createObjectURL(data);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'HIPAA-Compliance-Document.pdf';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to download document. Please try again.",
        variant: "destructive",
      });
    }
  };
  return <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main className="pt-20">
        <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Legal & Compliance
              </h1>
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
                <h2 className="text-2xl font-bold text-foreground mb-6">Compliance Certifications</h2>
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
                    <span className="text-foreground">Province-specific Privacy Regulations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="text-green-500" size={20} />
                    <span className="text-foreground">Regular Security Audits & Penetration Testing</span>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">Legal Documentation</h2>
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
                    {!uploadedFile ? (
                      <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                        <input
                          type="file"
                          accept=".pdf"
                          className="hidden"
                          id="hipaa-pdf-upload"
                          onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) {
                              handleFileUpload(file);
                            }
                          }}
                        />
                        <label
                          htmlFor="hipaa-pdf-upload"
                          className="cursor-pointer flex flex-col items-center space-y-2"
                        >
                          {isUploading ? (
                            <Upload className="text-primary animate-pulse" size={24} />
                          ) : (
                            <FileCheck className="text-primary" size={24} />
                          )}
                          <span className="text-sm text-muted-foreground">
                            {isUploading ? "Uploading..." : "Drop your HIPAA Compliance PDF here or click to browse"}
                          </span>
                          <span className="text-xs text-muted-foreground">
                            PDF files only
                          </span>
                        </label>
                      </div>
                    ) : (
                      <div className="space-y-2">
                        <button
                          onClick={handleDownload}
                          className="block text-primary hover:text-primary/80 transition-colors underline text-left"
                        >
                          Download HIPAA Compliance Document
                        </button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>;
};
export default LegalCompliancePage;