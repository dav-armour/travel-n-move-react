import React, { Component } from "react";
import ReactQuill from "react-quill";
import "./../../../css/QuillEditor.css";

class QuillEditor extends Component {
  render() {
    let { input } = this.props;
    return (
      <ReactQuill
        {...input}
        theme="snow"
        onChange={(newValue, delta, source) => {
          if (source === "user") {
            input.onChange(newValue);
          }
        }}
        onBlur={(range, source, quill) => {
          input.onBlur(quill.getHTML());
        }}
        modules={QuillEditor.modules}
        formats={QuillEditor.formats}
        className="QuillEditor"
      />
    );
  }
}

QuillEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" }
    ],
    ["link", "image", "video"],
    ["clean"]
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false
  }
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
QuillEditor.formats = [
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video"
];

export default QuillEditor;
