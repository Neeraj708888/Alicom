import React from 'react';
import { Link } from 'react-router-dom';
 
const styles = {
  title: {
    color: 'rgb(33, 33, 33)',
    backgroundColor: 'rgb(255, 255, 255)',
  },
  button: {
    margin: '0 0.5rem',
  },
};
 
const EditPrivacyPolicy = () => {
  return (
    <div className="app-main-inner">
      <div className="container-fluid">
        <div className="container-fluid mb-4">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
            <h4 className="m-0">Edit Privacy Policy</h4>
            <Link to="/admin/business/legel-privacy-policy" className="btn btn-sm btn-danger" style={styles.button}>
              <i className="fa fa-arrow-left"></i> Back
            </Link>
          </div>
 
          <form action="https://demo.alicom.app/admin/legalpage/privacy-policy" method="POST" enctype="multipart/form-data">
            <input type="hidden" name="_token" value="VsnjNcuYIhgr0QrbE3MB9thaEDRBTVX9xR3xtyW6" autoComplete="off" />
            <div className="card border-0 rounded-12">
              <div className="card-body">
                <div>
                  <div>
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" name="title" id="title" className="form-control" value="Privacy Policy" placeholder="Title" maxLength="255" />
                  </div>
                </div>
 
                <div className="mt-3">
                  <label htmlFor="editor" className="fw-bold">Content</label>
                  <textarea name="description" id="editor" style={{ display: 'none' }}>
                    &lt;p&gt;exdolorCommodi incidunt rerum.&lt;/p&gt;&lt;p&gt;Voluptatem occaecati velit iure accusantium aperiam facere iste vero autem dolores quidem illum libero.&lt;/p&gt;&lt;p&gt;&lt;a href="example.org" rel="noopener noreferrer" target="_blank"&gt;Qui est laudantium dolores autem.&lt;/a&gt;&lt;/p&gt;&lt;ol&gt;&lt;li data-list="bullet"&gt;&lt;span class="ql-ui" contenteditable="false"&gt;&lt;/span&gt;Ut sed.&lt;/li&gt;&lt;li data-list="bullet"&gt;&lt;span class="ql-ui" contenteditable="false"&gt;&lt;/span&gt;Vel aliquid exercitationem commodi.&lt;/li&gt;&lt;li data-list="bullet"&gt;&lt;span class="ql-ui" contenteditable="false"&gt;&lt;/span&gt;Eius velit delectus quibusdam.&lt;/li&gt;&lt;li data-list="bullet"&gt;&lt;span class="ql-ui" contenteditable="false"&gt;&lt;/span&gt;Accusamus fuga harum aperiam eos.&lt;/li&gt;&lt;li data-list="bullet"&gt;&lt;span class="ql-ui" contenteditable="false"&gt;&lt;/span&gt;Omnis modi dicta.&lt;/li&gt;&lt;li data-list="bullet"&gt;&lt;span class="ql-ui" contenteditable="false"&gt;&lt;/span&gt;Velit.&lt;/li&gt;&lt;li data-list="bullet"&gt;&lt;span class="ql-ui" contenteditable="false"&gt;&lt;/span&gt;Autem ipsa.&lt;/li&gt;&lt;li data-list="bullet"&gt;&lt;span class="ql-ui" contenteditable="false"&gt;&lt;/span&gt;Ea maxime modi.&lt;/li&gt;&lt;/ol&gt;&lt;p&gt;Et dolor.Voluptates alias quas laborum tenetur animi culpa doloribus.&lt;/p&gt;
                  </textarea>
                  <div className="ck ck-editor__main" role="presentation">
                    <div className="ck-blurred ck ck-content ck-editor__editable ck-rounded-corners ck-editor__editable_inline" lang="en" dir="ltr" role="textbox" aria-label="Rich Text Editor. Editing area: main. Press Alt+0 for help." contentEditable="true">
                      <p>exdolorCommodi incidunt rerum.</p>
                      <p>Voluptatem occaecati velit iure accusantium aperiam facere iste vero autem dolores quidem illum libero.</p>
                      <p><a href="example.org">Qui est laudantium dolores autem.</a></p>
                      <ol>
                        <li>Ut sed.</li>
                        <li>Vel aliquid exercitationem commodi.</li>
                        <li>Eius velit delectus quibusdam.</li>
                        <li>Accusamus fuga harum aperiam eos.</li>
                        <li>Omnis modi dicta.</li>
                        <li>Velit.</li>
                        <li>Autem ipsa.</li>
                        <li>Ea maxime modi.</li>
                      </ol>
                      <p>Et dolor. Voluptates alias quas laborum tenetur animi culpa doloribus.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer text-center">
                <button className="btn btn-primary px-4 py-2" type="submit">Save And Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
 
export default EditPrivacyPolicy;

 