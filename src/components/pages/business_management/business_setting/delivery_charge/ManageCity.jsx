import React from 'react';
import { FaPlusCircle, FaUpload, FaSearch } from 'react-icons/fa';
import { FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
 
const ManageCity = () => {
  const cityData = [
    { id: 1, country: 'India', name: 'Kerala' },
    { id: 2, country: 'India', name: 'Tamilnadu' },
    { id: 3, country: 'Argentina', name: 'Gggg' },
    { id: 4, country: 'Bangladesh', name: 'RATUL BIN SALIM' },
    { id: 5, country: 'Bangladesh', name: 'RATUL BIN SALIM' },
  ];
 
  return (
    <div className="app-main-inner">
      <div className="container-fluid">
        <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
          <h4>Manage Cities</h4>
        </div>
 
        <div className="container-fluid mt-3">
          <div className="my-3 card">
            <div className="card-body">
              <div className="d-flex align-items-center justify-content-between gap-3 mb-3 flex-wrap">
                <form>
                  <div className="input-group" style={{ maxWidth: '400px' }}>
                    <input
                      type="text"
                      name="search"
                      className="form-control"
                      placeholder="Search by name"
                    />
                    <button type="submit" className="input-group-text btn btn-primary">
                      <FaSearch className="me-1" /> Search
                    </button>
                  </div>
                </form>
 
                <div className="d-flex align-items-center flex-wrap gap-2">
                  <Link to="/admin/business/delivery-charges/cities/add-new-city" className="btn py-2 btn-primary">
                    <FaPlusCircle className="me-1" />
                    Add New
                  </Link>
                  <Link to="/admin/business/delivery-charges/cities/import" className="btn py-2 btn-primary">
                    <FaUpload className="me-1" />
                    Import
                  </Link>
                </div>
              </div>
 
              <div className="table-responsive">
                <table className="table border table-responsive-lg">
                  <thead>
                    <tr>
                      <th>SL</th>
                      <th className="text-center">Country</th>
                      <th className="text-center">Name</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cityData.map((city, index) => (
                      <tr key={city.id}>
                        <td>{index + 1}.</td>
                        <td className="text-center">{city.country}</td>
                        <td className="text-center">{city.name}</td>
                        <td className="text-center">
                          <div className="d-flex gap-2 justify-content-center">
                            <Link
                              to='/admin/business/delivery-charges/cities/edit-city'
                              className="btn btn-outline-info btn-sm circleIcon"
                            >
                              <FaPen />
                            </Link>
                            <Link
                              href="#"
                              className="btn btn-outline-danger btn-sm circleIcon deleteConfirm"
                            >
                              <FaTrash />
                            </Link>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default ManageCity;
 
 