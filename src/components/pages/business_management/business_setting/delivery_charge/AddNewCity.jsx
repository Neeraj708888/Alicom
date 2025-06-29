import React, { useState } from 'react';
 
 
const AddNewCity = () => {
  const [countryId, setCountryId] = useState('41'); // India
  const [cityName, setCityName] = useState('Kerala');
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    const formData = new FormData();
    formData.append('_token', 'V1lfKO7PPCwiYrI5YbmOpS6mfgk4fAqWu73j7x2Z');
    formData.append('_method', 'PUT');
    formData.append('country_id', countryId);
    formData.append('name', cityName);
 
    fetch('https://demo.alicom.app/admin/cities/11/update', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        alert('City updated successfully!');
        console.log(data);
      })
      .catch((err) => {
        console.error(err);
        alert('Update failed!');
      });
  };
 
  return (
    <div className="app-main-inner">
      <div className="container-fluid">
        <div className="page-title mb-3">
          <div className="d-flex gap-2 align-items-center">
            <i className="fa-solid fa-pencil-square"></i>
            Add New City
          </div>
        </div>
 
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="card mt-3">
                <div className="card-body">
                  <div className="row">
                    {/* Country Dropdown */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="country_id" className="form-label">
                        Country <span className="text-danger">*</span>
                      </label>
                      <select
                        name="country_id"
                        id="country_id"
                        className="form-control"
                        value={countryId}
                        onChange={(e) => setCountryId(e.target.value)}
                        required
                      >
                        <option value="">Select Country</option>
                        <option value="1">Afghanistan</option>
                        <option value="2">Antigua and Barbuda</option>
                        <option value="3">Argentina</option>
                        <option value="4">Armenia</option>
                        <option value="5">Aruba</option>
                        <option value="6">Australia</option>
                        <option value="7">Austria</option>
                        <option value="8">Azerbaijan</option>
                        <option value="9">Bahrain</option>
                        <option value="10">Bangladesh</option>
                        <option value="11">Barbados</option>
                        <option value="12">Belarus</option>
                        <option value="13">Belgium</option>
                        <option value="14">Belize</option>
                        <option value="15">Benin</option>
                        <option value="16">Bermuda</option>
                        <option value="17">Bhutan</option>
                        <option value="18">Bolivia</option>
                        <option value="19">British Indian Ocean Territory</option>
                        <option value="20">Cape Verde</option>
                        <option value="21">China</option>
                        <option value="22">Christmas Island</option>
                        <option value="23">Cocos (Keeling) Islands</option>
                        <option value="24">Colombia</option>
                        <option value="25">Comoros</option>
                        <option value="26">Congo</option>
                        <option value="27">Cook Islands</option>
                        <option value="28">Costa Rica</option>
                        <option value="29">Cote D'Ivoire (Ivory Coast)</option>
                        <option value="30">Croatia</option>
                        <option value="31">Cuba</option>
                        <option value="32">Curaçao</option>
                        <option value="33">Cyprus</option>
                        <option value="34">Czech Republic</option>
                        <option value="35">Democratic Republic of the Congo</option>
                        <option value="36">Denmark</option>
                        <option value="37">Djibouti</option>
                        <option value="38">Dominica</option>
                        <option value="39">Dominican Republic</option>
                        <option value="40">Ecuador</option>
                        <option value="41">India</option>
                      </select>
                    </div>
 
                    {/* City Name Input */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">
                        Name <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        placeholder="Enter City Name"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}
                        maxLength="255"
                        required
                      />
                    </div>
                  </div>
 
                  {/* Submit Button */}
                  <div className="col-12 d-flex justify-content-end mt-4">
                    <button className="btn btn-primary py-2 px-5" type="submit">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
 
export default AddNewCity;
 
 