import React from "react";
import Editor from "./components/Editor";

type EditorPageProps = {
  params: {
    locale: string;
  };
};

const EditorPage: React.FC<EditorPageProps> = ({ params: { locale } }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <Editor />
    </div>
  );
};

EditorPage.propTypes = {};

export default EditorPage;
