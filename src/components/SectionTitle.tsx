import { HeadingText } from "@/components/HeadingText";

export function SectionTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-8 border-b border-border pb-6 sm:mb-10 sm:pb-8">
      <h1 className="text-[1.75rem]/9 font-medium tracking-normal text-balance"><HeadingText>{title}</HeadingText></h1>
      {subtitle && <p className="mt-2 text-base/7 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
