"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

// import PreviewEditor from "@/components/PreviewEditor";
const Editor = dynamic(() => import("../../components/Editor"), {
  ssr: false,
});

export default function EditorPage() {
  const [data, setData] = useState();

  return (
    <Editor data={data} setData={setData} holder="editorjs-container" />
    // <div className="grid grid-cols-2 gap-2 m-2">
    //   <div className="col-span-1">
    //     <h1>Editor</h1>
    //     <div className="border rounded-md">
    //     </div>
    //   </div>
    //   <div className="col-span-1">
    //     <h1>Preview</h1>
    //     <div className="border rounded-md">
    //       <div className="p-16">{data && <PreviewEditor data={data} />}</div>
    //     </div>
    //   </div>
    // </div>
  );
}
