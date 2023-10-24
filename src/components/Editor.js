import React, { useEffect, useRef, useState } from "react";
import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import Image from "@editorjs/image";
import InlineCode from "@editorjs/inline-code";
import Link from "@editorjs/link";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import EditorJS, { OutputData } from "@editorjs/editorjs";

export const EDITOR_TOOLS = {
  code: Code,
  header: {
    class: Header,
    config: {
      placeholder: "Enter a Header",
      levels: [1, 2, 3, 4, 5, 6],
      defaultLevel: 2,
    },
  },
  paragraph: Paragraph,
  checklist: CheckList,
  embed: Embed,
  image: Image,
  inlineCode: InlineCode,
  link: Link,
  list: List,
  quote: Quote,
  simpleImage: SimpleImage,
  delimiter: Delimiter,
};

export default function Editor({ holder }) {
  const ref = useRef(null);
  const [data, setData] = useState("");

  console.log(data);

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        holder: holder,
        tools: EDITOR_TOOLS,
        placeholder: "Let`s write an awesome story!",
        // autofocus: true,
        async onChange(api, event) {
          const data = await api.saver.save();
          // setData(data)
          // console.log(data);
        },
      });
      ref.current = editor;
    }

    return () => {
      if (ref.current && ref.current.destroy) {
        ref.current.destroy();
      }
    };
  }, [data, holder]);

  return (
    <div className="container">
      <div className="my-4 max-w-[650px] mx-auto">
        <input className="font-semibold text-3xl border-none outline-none" autoFocus="true" name="title" placeholder="Title" />
      </div>
      <div id={holder} className="mt-2" />
    </div>
  );
}
