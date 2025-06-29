import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateLanguage = () => {
  const [formData, setFormData] = useState({
    title: '',
    name: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;
    
    // Only allow English letters for the short name
    if (name === 'name') {
      updatedValue = value.replace(/[^a-z]/gi, '');
    }

    setFormData({
      ...formData,
      [name]: updatedValue
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with your actual API call logic
    console.log('Submitting Language:', formData);

    // After submit, redirect or show success
    // Example: navigate('/admin/language');
  };

  return (
      <div className="container-fluid">
        <div className="container-fluid my-4">
          <div className="row">
            <div className="col-lg-7 mt-2 mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="card border-0 shadow-sm">
                  <div className="card-header">
                    <h3 className="m-0">Create New Language</h3>
                  </div>
                  <div className="card-body">
                    <div>
                      <label htmlFor="title" className="form-label">Title</label>
                      <input
                        type="text"
                        id="title"
                        name="title"
                        className="form-control"
                        placeholder="Title"
                        maxLength="255"
                        value={formData.title}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mt-3">
                      <label className="mb-0">
                        Short Name <small>(only English characters)</small>
                      </label>
                      <input
                        name="name"
                        className="form-control"
                        placeholder="Ex: en"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="card-footer d-flex justify-content-between flex-wrap gap-2">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => navigate('/admin/language')}
                    >
                      Back
                    </button>
                    <button type="submit" className="btn btn-primary py-2 px-4">
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
  );
};

export default CreateLanguage;
