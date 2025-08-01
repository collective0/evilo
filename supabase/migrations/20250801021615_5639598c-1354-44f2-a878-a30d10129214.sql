-- Create storage bucket for compliance documents
INSERT INTO storage.buckets (id, name, public) VALUES ('compliance-docs', 'compliance-docs', true);

-- Create policies for compliance document uploads
CREATE POLICY "Compliance documents are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'compliance-docs');

CREATE POLICY "Anyone can upload compliance documents" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'compliance-docs');

CREATE POLICY "Anyone can update compliance documents" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'compliance-docs');