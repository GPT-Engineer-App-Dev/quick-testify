import React from 'react';
import { Button } from "@/components/ui/button";

const TestPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Test Page</h1>
      <p className="mb-4">This is a simple test page to demonstrate React and Shadcn UI components.</p>
      <Button variant="default">Click me!</Button>
    </div>
  );
};

export default TestPage;