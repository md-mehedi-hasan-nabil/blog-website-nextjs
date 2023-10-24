"use client";

import React, { useEffect, useRef, useState } from "react";
import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import ImageTool from "@editorjs/image";

export default function BlogEditor() {
  const ejInstance = useRef();

  const initEditor = () => {
    const editor = new EditorJS({
      holder: "editorjs",
      onReady: () => {
        ejInstance.current = editor;
      },
      autofocus: true,
      onChange: async () => {
        let content = await editor.saver.save();
        console.log(content);
      },
      tools: {
        header: {
          class: Header,
          shortcut: "CMD+SHIFT+H",
        },
        list: {
          class: List,
          inlineToolbar: true,
          config: {
            defaultStyle: "unordered",
          },
        },
      },
    });
  };

  useEffect(() => {
    if (ejInstance.current === null) {
      initEditor();
    }

    return () => {
      ejInstance?.current?.destroy();
      ejInstance.current = null;
    };
  }, []);

  return (
    <div className="container">
      <div
        className="max-w-5xl mx-auto h-full border rounded-md pt-5"
        id="editorjs"
      ></div>
    </div>
  );
}
