import React, { useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const DescriptionEditor = () => {
  const [description, setDescription] = useState('');

  return (
    <div className="mt-3">
      <label htmlFor="description">
        Description <span className="text-danger">*</span>
      </label>

      {/* CKEditor */}
      <div className="ck ck-reset ck-editor ck-rounded-corners" role="application">
        <CKEditor
          editor={ClassicEditor}
          data={description}
          onChange={(event, editor) => {
            const data = editor.getData();
            setDescription(data);
          }}
          config={{
            placeholder: "Enter description...",
          }}
        />
      </div>

      {/* Hidden textarea for form submission */}
      <textarea
        name="description"
        id="description"
        value={description}
        style={{ display: 'none' }}
        readOnly
      />
    </div>
  );
};

export default DescriptionEditor;
