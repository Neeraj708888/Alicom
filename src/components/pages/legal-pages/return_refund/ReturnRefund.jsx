import React from 'react';
import { Link } from 'react-router-dom';
 
const ReturnRefundPolicy = () => {
  return (
    <div className="app-main-inner">
      <div className="container-fluid">
        <div className="container-fluid mb-3">
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2 mb-3">
            <h4 className="m-0">Return and Refund Policy</h4>
            <Link
              to="/admin/business/return-refund-policy/edit"
              className="btn btn-sm btn-primary px-3 py-2"
            >
              <i className="fa-solid fa-pen me-1"></i> Edit
            </Link>
          </div>
 
          <div className="card rounded-12 border-0">
            <div className="card-header py-3">
              <h5 className="m-0">Content</h5>
            </div>
            <div className="card-body">
              <form action="example.net" method="POST">
                <label htmlFor="username">facilis</label>
                <input type="text" id="username" />
                <label htmlFor="password">voluptatibus</label>
                <input type="password" id="password" />
              </form>
 
              <div className="eaque">
                <table style={{ overflow: 'auto' }}>
                  <thead>
                    <tr>
                      <th>Numquam commodi debitis inventore ipsum.</th>
                      <th>Sed eos.</th>
                      <th>Aut ea dolor.</th>
                      <th>Velit rem.</th>
                      <th>Saepe vero qui.</th>
                      <th>Recusandae.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Dolorem a eos aliquid voluptate dolor sint dolore.</td>
                      <td>Assumenda quasi nesciunt consequuntur dolores sed sint quis exercitationem vel et.</td>
                      <td>Qui et aut dolorem mollitia consequatur molestiae consequuntur distinctio.</td>
                      <td>Repellat quaerat qui et culpa officiis accusantium illum velit sunt fugiat.</td>
                      <td>Qui accusamus deleniti praesentium facere dignissimos doloremque temporibus quibusdam quia in.</td>
                      <td>Soluta delectus sint magnam impedit consequatur laborum laudantium magnam.</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
 
                <b>Aliquam laborum tempore quo recusandae modi molestias harum occaecati reiciendis.</b>
                Quo eius aut.
 
                <table style={{ overflow: 'auto' }}>
                  <thead>
                    <tr>
                      <th>Ratione non quis nostrum.</th>
                      <th>Dicta.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Quos molestias nemo et ab odio quisquam debitis deleniti.</td>
                      <td>Eaque perferendis impedit dicta sunt magnam quia.</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
              </div>
 
              <div id="11138">
                <table style={{ overflow: 'auto' }}>
                  <thead>
                    <tr>
                      <th>Deleniti temporibus consequuntur asperiores molestiae molestiae.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Explicabo at quo autem maxime.</td>
                    </tr>
                    {/* Add more rows as needed */}
                  </tbody>
                </table>
                Architecto nobis et recusandae.
                <p>Quis veritatis autem.</p>
              </div>
 
              <div className="commodi"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default ReturnRefundPolicy;
 
 