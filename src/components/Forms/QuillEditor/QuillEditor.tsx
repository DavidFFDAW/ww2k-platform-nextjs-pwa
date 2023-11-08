'use client';
import React from 'react';
import { EditorStateInterface, QuillEditorProps, formats, modules } from './quill.editor.model';
import 'react-quill/dist/quill.snow.css';
import './quill.editor.css';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
export default function QuillEditor({ placeholder, value, name }: QuillEditorProps) {
    const [editor, setEditor] = React.useState<EditorStateInterface>({ editorHtml: value as string, theme: 'snow' });

    const handleChange = (html: string) => {
        setEditor(pr => ({ ...pr, editorHtml: html }));
    }

    return (
        <>
            <input type="hidden" name={name} value={editor.editorHtml} />
            <ReactQuill
                theme={editor.theme}
                onChange={handleChange}
                value={editor.editorHtml}
                modules={modules}
                formats={formats}
                placeholder={placeholder}
                defaultValue={value}
            />
        </>
    )
}
