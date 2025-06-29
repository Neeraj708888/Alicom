import React, { useState } from 'react'

const CreateEmployee = () => {

  const [previewImage, setPreviewImage] = useState('https://placehold.co/500x500/png');
 
  const handleImagePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };
 
  return (
      <div className="container-fluid">
        <div className="page-title">
          <div className="d-flex gap-2 align-items-center">
            <i className="fa-solid fa-user"></i> Create New
          </div>
        </div>
 
        <div className="row">
          <div className="col-xxl-10 mx-auto">
            <form
              action="https://demo.alicom.app/admin/employee/store"
              method="POST"
              encType="multipart/form-data"
            >
              <input type="hidden" name="_token" value="demo_token_here" autoComplete="off" />
 
              <div className="card mt-3">
                <div className="card-body">
                  <div className="d-flex gap-2 border-bottom pb-2">
                    <i className="fa-solid fa-user"></i>
                    <h5>User Information</h5>
                  </div>
 
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-md-6 mt-3">
                          <label htmlFor="name" className="form-label">First Name <span className="text-danger">*</span></label>
                          <input type="text" name="name" id="name" className="form-control" placeholder="Enter Name" required maxLength={255} />
                        </div>
                        <div className="col-md-6 mt-3">
                          <label htmlFor="last_name" className="form-label">Last Name</label>
                          <input type="text" name="last_name" id="last_name" className="form-control" placeholder="Enter Last Name" maxLength={255} />
                        </div>
                      </div>
 
                      <div className="mt-3">
                        <label htmlFor="phone" className="form-label">Phone Number <span className="text-danger">*</span></label>
                        <input type="number" name="phone" id="phone" className="form-control" placeholder="Enter phone number" required maxLength={255} />
                      </div>
 
                      <div className="mt-3">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <select name="gender" id="gender" className="form-control">
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                        </select>
                      </div>
 
                      <div className="mt-3">
                        <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                        <input type="email" name="email" id="email" className="form-control" placeholder="Enter Email Address" required maxLength={255} />
                      </div>
                    </div>
 
                    <div className="col-lg-6">
                      <div className="mt-3 d-flex align-items-center justify-content-center">
                        <div className="ratio1x1" style={{ width: '200px' }}>
                          <img id="previewProfile" src={previewImage} alt="Preview" width="100%" />
                        </div>
                      </div>
 
                      <div className="mt-2">
                        <label htmlFor="profile_photo" className="form-label">User Profile (Ratio 1:1)</label>
                        <input type="file" name="profile_photo" id="profile_photo" className="form-control" onChange={handleImagePreview} />
                      </div>
 
                      <div className="mt-3">
                        <label htmlFor="role" className="form-label">Role <span className="text-danger">*</span></label>
                        <select name="role" id="role" className="form-control">
                          <option value="root">root</option>
                          <option value="visitor">visitor</option>
                          <option value="cashier">cashier</option>
                          <option value="account">account</option>
                          <option value="sale">sale</option>
                          <option value="admin">admin</option>
                          <option value="test">test</option>
                        </select>
                      </div>
                    </div>
 
                    <div className="col-lg-6 mt-3">
                      <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                      <input type="text" name="password" id="password" className="form-control" placeholder="Enter Password" required maxLength={255} />
                    </div>
 
                    <div className="col-lg-6 mt-3">
                      <label htmlFor="password_confirmation" className="form-label">Confirm Password <span className="text-danger">*</span></label>
                      <input type="text" name="password_confirmation" id="password_confirmation" className="form-control" placeholder="Enter Confirm Password" required maxLength={255} />
                    </div>
                  </div>
                </div>
 
                <div className="card-footer py-3">
                  <button className="btn btn-primary px-5 py-2.5" type="submit">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
 
      </div>
 
 
  )
}

export default CreateEmployee
