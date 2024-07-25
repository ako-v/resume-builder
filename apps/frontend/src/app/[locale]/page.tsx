import dynamic from "next/dynamic";

const RenderTemplate = dynamic(() => import("./editor/components/RenderTemplate"), { ssr: false });

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main className="flex items-center justify-center">
      <RenderTemplate locale={locale} />
    </main>
  );
}
