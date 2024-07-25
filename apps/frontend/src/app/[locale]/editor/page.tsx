import React from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("./components/Editor"));
const RenderTemplate = dynamic(() => import("./components/RenderTemplate"), { ssr: false });

type EditorPageProps = {
  params: {
    locale: string;
  };
};

const EditorPage: React.FC<EditorPageProps> = ({ params: { locale } }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-3">
      <Editor />
      <div className="h-[calc(100vh-32px)] overflow-auto">
        <RenderTemplate locale={locale} />
      </div>
    </div>
  );
};

EditorPage.propTypes = {};

export default EditorPage;
