import React from 'react';
import { FaPlusCircle, FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const languages = [
  {
    id: 7,
    title: 'ar',
    name: 'ar',
    editUrl: 'https://demo.alicom.app/admin/language/7/edit',
    deleteUrl: 'https://demo.alicom.app/admin/language/7/delete',
  },
  {
    id: 2,
    title: 'en',
    name: 'en',
    editUrl: 'https://demo.alicom.app/admin/language/2/edit',
    deleteUrl: null,
  },
];

const Language = () => {
  return (
      <div className="container-fluid">
        <div className="container-fluid my-4">
          <div className="row">
            <div className="col-xl-8 col-lg-9 mt-2 mx-auto">
              <div className="card border-0 rounded shadow-sm">
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h3 className="m-0">Languages</h3>
                  <Link className="btn btn-primary" to="/admin/language/create">
                    <FaPlusCircle className="me-1" />
                    Create New
                  </Link>
                </div>
              </div>

              {/* Languages List */}
              {languages.map((lang) => (
                <div key={lang.id} className="language-item shadow-sm d-flex justify-content-between align-items-center p-3 my-2 border rounded">
                  <div className="d-flex gap-3 flex-wrap">
                    <div style={{ minWidth: '160px' }}>
                      <small className="text-black-50 d-block fst-italic" style={{ lineHeight: '0.7' }}>
                        Title
                      </small>
                      <strong className="fs-6">{lang.title}</strong>
                    </div>

                    <div>
                      <small className="text-black-50 d-block fst-italic" style={{ lineHeight: '0.7' }}>
                        Name
                      </small>
                      <strong>{lang.name}</strong>
                    </div>
                  </div>

                  <div className="d-flex gap-2">
                    <Link to='/admin/language/edit' className="btn btn-primary btn-sm">
                      <FaEdit />
                    </Link>
                    {lang.deleteUrl && (
                      <Link to="#" className="btn btn-danger btn-sm">
                        <FaTrash />
                      </Link>
                    )}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
  );
};

export default Language;
