import initTranslations from "@/lib/i18n";
import RenderTemplatePage from "./RenderTemplate/page";

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  const { t } = await initTranslations(locale);
  return (
    <main className="flex items-center justify-center">
      <RenderTemplatePage />
    </main>
  );
}
