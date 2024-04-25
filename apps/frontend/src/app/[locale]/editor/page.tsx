import React from "react";
import Editor from "./components/Editor";
import RenderTemplatePage from "../renderTemplate/page";
import RenderTemplate from "./components/RenderTemplate";

type EditorPageProps = {
  params: {
    locale: string;
  };
};

const EditorPage: React.FC<EditorPageProps> = ({ params: { locale } }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 p-3">
      <Editor />
      <RenderTemplate />
    </div>
  );
};

EditorPage.propTypes = {};

export default EditorPage;
