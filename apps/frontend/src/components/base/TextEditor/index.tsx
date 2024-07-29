import { forwardRef, HTMLAttributes, useEffect, useLayoutEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

import "./style.css";

export type TextEditorProps = HTMLAttributes<HTMLDivElement> & {
  defaultValue: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  id?: string;
};

const TextEditor = forwardRef<Quill, TextEditorProps>(({ defaultValue, onChange, ...rest }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const defaultValueRef = useRef(defaultValue);
  const onChangeRef = useRef(onChange);

  useLayoutEffect(() => {
    onChangeRef.current = onChange;
  });

  useEffect(() => {
    const container = containerRef.current;
    const editorContainer = container?.appendChild(container.ownerDocument.createElement("div"));
    let quill: Quill;
    if (editorContainer) {
      const icons = Quill.import("ui/icons") as Record<string, string>;
      icons["undo"] = `<svg viewbox="0 0 18 18">
            <polygon class="ql-fill ql-stroke" points="6 10 4 12 2 10 6 10"></polygon>
            <path class="ql-stroke" d="M8.09,13.91A4.6,4.6,0,0,0,9,14,5,5,0,1,0,4,9"></path>
          </svg>`;
      icons["redo"] = `<svg viewbox="0 0 18 18">
            <polygon class="ql-fill ql-stroke" points="12 10 14 12 16 10 12 10"></polygon>
            <path class="ql-stroke" d="M9.91,13.91A4.6,4.6,0,0,1,9,14a5,5,0,1,1,5-5"></path>
          </svg>`;
      quill = new Quill(editorContainer, {
        theme: "snow",
        modules: {
          history: {
            delay: 1000,
            maxStack: 500,
            userOnly: true,
          },
          toolbar: {
            container: [
              ["bold", "italic", "underline", "strike"],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link"],
              ["undo", "redo"],
            ],
            handlers: {
              undo: function () {
                quill.history.undo();
              },
              redo: function () {
                quill.history.redo();
              },
            },
          },
        },
      });

      quill.clipboard.addMatcher(Node.ELEMENT_NODE, function (node, delta) {
        let DeltaClass = Quill.import("delta");
        const newDelta = new DeltaClass();

        delta.ops.forEach((op) => {
          if (op.insert) {
            // Retain specific attributes
            let attributesToRetain: Record<string, string | boolean> = {};
            if (op.attributes) {
              if (op.attributes.link) {
                attributesToRetain.link = op.attributes.link as string;
              }
              if (op.attributes.list === "bullet" || op.attributes.list === "ordered") {
                attributesToRetain.list = op.attributes.list;
              }
              if (op.attributes.underline) {
                attributesToRetain.underline = true;
              }
              if (op.attributes.strike) {
                attributesToRetain.strike = true;
              }
              if (op.attributes.italic) {
                attributesToRetain.italic = true;
              }
              if (op.attributes.bold) {
                attributesToRetain.bold = true;
              }
            }
            newDelta.insert(op.insert, attributesToRetain);
          }
        });

        return newDelta;
      });

      quill.setContents(quill.clipboard.convert({ html: defaultValueRef.current }));

      quill.on(Quill.events.TEXT_CHANGE, () => {
        onChangeRef.current((quill.container.firstChild as HTMLElement)?.innerHTML);
      });
    }

    return () => {
      quill.off("text-change");
      quill.disable();
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return <div ref={containerRef} {...rest}></div>;
});

TextEditor.displayName = "TextEditor";

export default TextEditor;
