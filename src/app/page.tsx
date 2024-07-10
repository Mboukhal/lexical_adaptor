"use client";
import { Editor } from "@/components/lexical/Editor";
import React, { useEffect } from "react";

const Page = () => {
  const [text, setText] = React.useState<any>({});

  useEffect(() => {
    console.log(text);
  }, [text]);

  return (
    <div>
      <Editor text={text} onChange={setText} />
    </div>
  );
};

export default Page;
