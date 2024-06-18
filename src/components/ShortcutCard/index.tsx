import { Card, CardContent } from "../ui/Card";

type ShortcutCardProps = {
  text: string;
  icon: React.ElementType;
};

export function ShortcutCard({ text, icon: Icon }: ShortcutCardProps) {
  return (
    <Card className="min-w-40 flex-1 cursor-pointer pt-4">
      <CardContent>
        <Icon className="mb-2 text-primary" />
        <span className="font-semibold">{text}</span>
      </CardContent>
    </Card>
  );
}
