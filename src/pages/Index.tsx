import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="flex flex-col items-center justify-center min-h-screen space-y-8">
        <h1 className="text-6xl font-bold">Evilo Software™</h1>
        <p className="text-xl text-muted-foreground">Business Automation</p>
        <div className="flex gap-4">
          <Button>Book Demo</Button>
          <Link to="/software">
            <Button variant="outline">View Software</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;