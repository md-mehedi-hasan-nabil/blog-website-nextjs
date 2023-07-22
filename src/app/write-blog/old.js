"use client"

import React, { useEffect, useState } from 'react'
import { useQuill } from 'react-quilljs';

export default function WriteBlog() {
    const { quill, quillRef } = useQuill();
    const [content, setContent] = useState("")

    useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => {
                console.log('Text change!');
                // console.log(quill.getText()); // Get text only
                // console.log(quill.getContents()); // Get delta contents
                console.log(quill.root.innerHTML); // Get innerHTML using quill
                setContent(quill.root.innerHTML)
                // console.log(quillRef.current.firstChild.innerHTML); // Get innerHTML using quillRef
            });
        }
    }, [quill, quillRef])

    return (
        <div className='container'>
            <div className='min-h-32 py-4'>
                <div ref={quillRef} />
            </div>
            <div className='mtext-lg quilljs' dangerouslySetInnerHTML={{ __html: content }}></div>
        </div >
    )
}
