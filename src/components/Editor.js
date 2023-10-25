import React, { useEffect, useRef, useState } from "react";
import EditorJS, { OutputData } from "@editorjs/editorjs";
import CheckList from "@editorjs/checklist";
import Code from "@editorjs/code";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
// import Image from "@editorjs/image";
import InlineImage from "editorjs-inline-image";
import InlineCode from "@editorjs/inline-code";
import Link from "@editorjs/link";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import SimpleImage from "@editorjs/simple-image";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
import Table from "@editorjs/table";

export const EDITOR_TOOLS = {
  code: Code,
  header: {
    class: Header,
    shortcut: "CMD+SHIFT+H",
    config: {
      placeholder: "Enter a Header",
      levels: [1, 2, 3, 4, 5, 6],
      defaultLevel: 2,
    },
  },
  paragraph: Paragraph,
  checklist: CheckList,
  embed: Embed,
  image: {
    class: InlineImage,
    config: {
      embed: {
        display: true,
      },
      unsplash: {
        appName: process.env.NEXT_PUBLIC_UNSPLASH_APP_NAME,
        clientId: process.env.NEXT_PUBLIC_UNSPLASH_CLIENT_ID,
      },
    },
  },
  inlineCode: InlineCode,
  link: Link,
  list: List,
  quote: Quote,
  simpleImage: SimpleImage,
  delimiter: Delimiter,
  table: Table,
};

export default function Editor({ holder }) {
  const ref = useRef(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!ref.current) {
      const editor = new EditorJS({
        data,
        holder: holder,
        tools: EDITOR_TOOLS,
        placeholder: "Let`s write an awesome story!",
        async onChange(api, event) {
          const result = await api.saver.save();
          setData(result);
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
  }, [holder]);

  return (
    <div className="container">
      <div className="my-4 max-w-[650px] mx-auto">
        <input
          className="font-semibold text-3xl border-none outline-none"
          autoFocus="true"
          name="title"
          placeholder="Title 🔥"
        />
      </div>
      <div id={holder} className="mt-2" />
    </div>
  );
}
