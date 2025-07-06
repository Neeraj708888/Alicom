import React from 'react';
import { Link } from 'react-router-dom';

const BannerList = () => {
  const banners = [
    {
      id: 6,
      title: 'B1',
      image: 'https://demo.alicom.app/storage/banners/XaZDa8XOpdPzVNkqe1fjsS9hAYz2ZlaI9AzhyDNf.jpg',
    },
    {
      id: 7,
      title: 'B2',
      image: 'https://demo.alicom.app/storage/banners/rq3kaoE9viBAirZmsGH8xejbET44aq6eYxf8tT4y.jpg',
    },
    {
      id: 8,
      title: 'B3',
      image: 'https://demo.alicom.app/storage/banners/8IwIWy0Fq6NuOShbihwnmry9iQtfG8FKsN0HGIXE.jpg',
    },
    {
      id: 9,
      title: 'B4',
      image: 'https://demo.alicom.app/storage/banners/HhhWQyJsDNqFUyB980y0nFIDuISGhlKZXCvvCNbX.jpg',
    },
    {
      id: 10,
      title: 'B5',
      image: 'https://demo.alicom.app/storage/banners/LUBn4r5AUi7w1OtqylGq61cOC6gybozezzTqJ2OA.jpg',
    },
  ];

  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center flex-wrap gap-3 justify-content-between px-3">
        <h4>Banner List</h4>
        <a href="/admin/banners/edit" className="btn py-2 btn-primary">
          <i className="fa fa-plus-circle"></i> Create New
        </a>
      </div>

      <div className="container-fluid mt-3">
        <div className="my-3 card">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table border table-responsive-lg" style={{ overflow: 'auto' }}>
                <thead>
                  <tr>
                    <th>Thumbnail</th>
                    <th>Title</th>
                    <th className="text-center">Status</th>
                    <th className="text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {banners.map((banner, index) => (
                    <tr key={banner.id} style={{ animationDelay: `${index * 0.1}s` }}>
                      <td>
                        <img src={banner.image} height="76" alt={`Banner ${banner.title}`} />
                      </td>
                      <td>{banner.title}</td>
                      <td className="text-center">
                        <label
                          className="switch mb-0"
                          data-bs-toggle="tooltip"
                          data-bs-placement="left"
                          title="Status Toggle"
                        >
                          <input type="checkbox" defaultChecked />
                          <span className="slider round"></span>
                        </label>
                      </td>

                      <td className="text-center">
                        <div className="d-flex gap-2 justify-content-center">
                          <Link
                            to='/admin/banners/edit'
                            className="btn btn-outline-info btn-sm circleIcon"
                          >
                            <i className="fa-solid fa-pen"></i>
                          </Link>
                          <Link
                            to='#'
                            className="btn btn-outline-danger btn-sm deleteConfirm circleIcon"
                          >
                            <i className="fa-solid fa-trash"></i>
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

        {/* <div className="my-3">Additional content if needed</div> */}
      </div>
    </div>
  );
};

export default BannerList;