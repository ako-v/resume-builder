import initTranslations from "@/lib/i18n";
import RenderTemplatePage from "./renderTemplate/page";

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main className="flex items-center justify-center">
      <RenderTemplatePage />
    </main>
  );
}
