import Templates from "./components/Templates";

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main className="flex items-center justify-center">
      <Templates />
    </main>
  );
}
