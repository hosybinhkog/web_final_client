import React, { useState, useEffect } from 'react'
import Quill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
const QuillEditor = () => {
  const [contentText, setContentText] = useState('')
  const handleChangeContentText = (value) => {
    setContentText(value)
  }

  const toolbarOptions = [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    ['bold', 'italic', 'underline', 'strike'],

    ['code-block', 'image', 'link'],

    [{ list: 'ordered' }, { list: 'bullet' }],

    [{ color: [] }, { background: [] }],
    [{ align: [] }],

    ['clean'],
  ]

  const modules = {
    toolbar: toolbarOptions,
  }

  return (
    <QuillEditor
      value={contentText}
      modules={modules}
      onChange={handleChangeContentText}
      theme="snow"
    />
  )
}

export default QuillEditor
