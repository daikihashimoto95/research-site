import { replaceIconsInText } from "@/lib/icons";

export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  // HTMLエンティティをデコード
  const decodedTitle = title.replace(/(?:&nbsp;|\u00A0)+/g, ' ');
  
  return (
    <div className="mb-8 border-b border-border pb-6 sm:mb-10 sm:pb-8">
      <h1 className="text-[1.75rem]/9 font-medium tracking-normal text-balance">{replaceIconsInText(decodedTitle)}</h1>
      {subtitle && <p className="mt-2 text-base/7 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
