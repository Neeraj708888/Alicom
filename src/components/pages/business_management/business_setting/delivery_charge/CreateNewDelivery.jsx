import React, { useState } from 'react';
 
 
const CreateNewDelivery = () => {
  const [cityId, setCityId] = useState('');
  const [deliveryCharge, setDeliveryCharge] = useState('');
 
  const handleSubmit = (e) => {
    e.preventDefault();
 
    if (!cityId || !deliveryCharge) {
      alert('Please fill in all required fields.');
      return;
    }
 
    const formData = new FormData();
    formData.append('city_id', cityId);
    formData.append('delivery_charge', deliveryCharge);
    formData.append('_token', 'V1lfKO7PPCwiYrI5YbmOpS6mfgk4fAqWu73j7x2Z');
 
    fetch('https://demo.alicom.app/admin/delivery-charge/store', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert('Delivery charge submitted successfully!');
      })
      .catch((err) => {
        console.error(err);
        alert('Something went wrong!');
      });
  };
 
  return (
    <div className="app-main-inner">
      <div className="container-fluid">
        <div className="page-title mb-3">
          <div className="d-flex gap-2 align-items-center">
            <i className="fa-solid fa-plus-circle"></i>
            Add New Delivery Charge
          </div>
        </div>
 
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-xl-9 mx-auto">
              <div className="card mt-3">
                <div className="card-body">
                  <div className="row">
                    {/* City Select */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="city_id" className="form-label">
                        City <span className="text-danger">*</span>
                      </label>
                      <select
                        name="city_id"
                        id="city_id"
                        className="form-control"
                        value={cityId}
                        onChange={(e) => setCityId(e.target.value)}
                        required
                      >
                        <option value="">Select City</option>
                        <option value="11">Kerala</option>
                        <option value="14">Gggg</option>
                        <option value="15">RATUL BIN SALIM</option>
                        <option value="16">RATUL BIN SALIM</option>
                      </select>
                    </div>
 
                    {/* Delivery Charge Input */}
                    <div className="col-md-6 mb-3">
                      <label htmlFor="delivery_charge" className="form-label">
                        Delivery Charge <span className="text-danger">*</span>
                      </label>
                      <input
                        type="text"
                        name="delivery_charge"
                        id="delivery_charge"
                        className="form-control"
                        value={deliveryCharge}
                        placeholder="Enter Delivery Charge"
                        maxLength={255}
                        onChange={(e) =>
                          setDeliveryCharge(
                            e.target.value
                              .replace(/[^0-9.]/g, '')
                              .replace(/(\..*?)\..*/g, '$1')
                          )
                        }
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
 
export default CreateNewDelivery;
 
 