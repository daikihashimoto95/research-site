import { Separator } from "@/components/ui/separator";
import { replaceIconsInText } from "@/lib/icons";

export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  // HTMLエンティティをデコード
  const decodedTitle = title.replace(/&nbsp;/g, '\u00A0');
  
  return (
    <div className="mb-8">
      <h1 className="text-4xl font-bold tracking-tight">{replaceIconsInText(decodedTitle)}</h1>
      {subtitle && <p className="mt-2 text-muted-foreground">{subtitle}</p>}
      <Separator className="mt-4" />
    </div>
  );
}
