import React, { useState } from "react";
 
const LegalContactUs = () => {
  const [formData, setFormData] = useState({
    phone: "",
    whatsapp: "",
    messenger: "",
    email: ""
  });
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    let updatedValue = value;
 
    // Restrict phone and whatsapp fields to numbers and dots
    if (name === "phone" || name === "whatsapp") {
      updatedValue = value.replace(/[^0-9.]/g, "").replace(/(\..*?)\..*/g, "$1");
    }
 
    setFormData({ ...formData, [name]: updatedValue });
  };
 
  // const handleSubmit = (e) => {
  //   e.preventDefault();
 
  //   // You can replace the fetch URL with your actual backend endpoint
  //   fetch("https://demo.alicom.app/admin/contact-us", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData)
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log("Success:", data);
  //     // Add success message handling here
  //   })
  //   .catch(error => {
  //     console.error("Error:", error);
  //     // Add error message handling here
  //   });
  // };
 
  return (
    <div className="app-main-inner">
      <div className="container-fluid my-4">
        <div className="row">
          <div className="col-xl-8 col-lg-9 m-auto">
            <form>
              <div className="card">
                <div className="card-header py-3">
                  <h4 className="m-0">Contact Us</h4>
                </div>
                <div className="card-body pb-4">
                  <div className="mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      className="form-control"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleChange}
                      maxLength="255"
                    />
                  </div>
 
                  <div className="mb-4">
                    <label htmlFor="whatsapp" className="form-label">Whatsapp Number</label>
                    <input
                      type="text"
                      name="whatsapp"
                      id="whatsapp"
                      className="form-control"
                      placeholder="Whatsapp Number"
                      value={formData.whatsapp}
                      onChange={handleChange}
                      maxLength="255"
                    />
                  </div>
 
                  <div className="mb-4">
                    <label htmlFor="messenger" className="form-label">Messenger Link</label>
                    <input
                      type="text"
                      name="messenger"
                      id="messenger"
                      className="form-control"
                      placeholder="Messenger link"
                      value={formData.messenger}
                      onChange={handleChange}
                      maxLength="255"
                    />
                  </div>
 
                  <div>
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      className="form-control"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      maxLength="255"
                    />
                  </div>
                </div>
 
                <div className="card-footer py-3">
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-primary py-2" type="submit">
                      Save And Update
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default LegalContactUs;
 
 