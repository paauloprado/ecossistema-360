import { Card, CardBody, CardHeader } from "@heroui/react";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function InfoCard({ icon: Icon, title, description }: InfoCardProps) {
  return (
    <Card className="w-full max-w-sm text-center shadow-lg p-6 bg-gray-200">
      <div className="flex justify-center mb-4">
        <Icon size={64} className="text-orange-500"/>
      </div>
      <CardHeader>
        <h2 className="text-xl font-semibold mx-auto">{title}</h2>
      </CardHeader>
      <CardBody>
        <p className="text-md text-gray-800 text-center">{description}</p>
      </CardBody>
    </Card>
  );
}
