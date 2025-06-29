import React, { useState } from 'react';

const Notification = () => {
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [selectAll, setSelectAll] = useState(false);

    const users = [
        { id: 3, name: "Demo User", email: "user@alicom.com", phone: "01601643808" },
        { id: 4, name: "Mehedi Hasan", email: "-", phone: "01725115085" },
        { id: 5, name: "Tarik", email: "-", phone: "017251150852" },
        { id: 8, name: "ashraful alam akif", email: "-", phone: "1234567890" },
        { id: 9, name: "t", email: "-", phone: "01909121213" },
        { id: 12, name: "masud", email: "itskaysar@gmail.com", phone: "01672886562" },
        { id: 57, name: "mj", email: "gg@gg.com", phone: "9836883366" },
        { id: 58, name: "zia", email: "zia.rehman1010p@gmail.com", phone: "03149501784" },
        { id: 59, name: "gh", email: "vasiyanigm@gmail.com", phone: "9659696594" },
        { id: 60, name: "ACH AHC", email: "GT@GM.COM", phone: "786667766" },
        { id: 61, name: "suneet", email: "suneet@lds-international.in", phone: "9999999999" },
    ];

    const handleSelectAll = (e) => {
        const checked = e.target.checked;
        setSelectAll(checked);
        if (checked) {
            setSelectedUsers(users.map((user) => user.id));
        } else {
            setSelectedUsers([]);
        }
    };

    const handleCheckboxChange = (id) => {
        const updated = selectedUsers.includes(id)
            ? selectedUsers.filter((uid) => uid !== id)
            : [...selectedUsers, id];

        setSelectedUsers(updated);
        setSelectAll(updated.length === users.length);
    };

    return (
            
                <div className="container-fluid mt-4">
                    <form>
                        <div className="card">
                            <div className="card-header bg-custom">
                                <h4 className="card-title m-0 py-2">
                                    <i className="bi bi-bell"></i> Send Notification
                                </h4>
                            </div>
                            <div className="card-body">
                                <div>
                                    <label htmlFor="title" className="form-label">
                                        Title <span className="text-danger">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="title"
                                        id="title"
                                        className="form-control"
                                        placeholder="Notification Title"
                                        required
                                        maxLength="255"
                                    />
                                </div>
                                <div className="mt-3">
                                    <label className="mb-1">
                                        Message <span className="text-danger">*</span>
                                    </label>
                                    <textarea
                                        name="message"
                                        className="form-control"
                                        rows="4"
                                        placeholder="Notification Message..."
                                        required
                                    ></textarea>
                                </div>
                                <div className="d-flex justify-content-end mt-3">
                                    <button type="submit" className="btn btn-primary py-2 px-4">
                                        Send Message
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="card mt-3">
                            <div className="card-body">
                                <div className="d-flex justify-content-start align-items-end flex-wrap mb-3" style={{ gap: "10px" }}>
                                    <div style={{ width: "200px" }}>
                                        <label className="font-weight-normal font-14 m-0">
                                            Filter by Device Type
                                        </label>
                                        <select id="deviceType" className="form-control">
                                            <option value="all">All</option>
                                            <option value="android">Android</option>
                                            <option value="ios">IOS</option>
                                        </select>
                                    </div>
                                </div>

                                <div className='table-responsive-md maxScroll mt-2'>
                                    <table className="table table-bordered table-striped" style={{overflow: 'auto'}}>
                                        <thead>
                                            <tr>
                                                <th className="text-center" style={{ width: "42px" }}>
                                                    <input
                                                        type="checkbox"
                                                        checked={selectAll}
                                                        onChange={handleSelectAll}
                                                    />
                                                </th>
                                                <th>Thumbnail</th>
                                                <th>Name</th>
                                                <th>Email Address</th>
                                                <th>Phone Number</th>
                                            </tr>
                                        </thead>
                                        <tbody id='notificationUsers'>
                                            {users.map((user) => (
                                                <tr key={user.id}>
                                                    <td className="text-center">
                                                        <input
                                                            type="checkbox"
                                                            name="user[]"
                                                            value={user.id}
                                                            checked={selectedUsers.includes(user.id)}
                                                            onChange={() => handleCheckboxChange(user.id)}
                                                        />
                                                    </td>
                                                    <td>
                                                        <img
                                                            src="https://demo.alicom.app/defualt/profile.jpg"
                                                            alt="profile"
                                                            width="40"
                                                            height="40"
                                                            loading="lazy"
                                                            className="rounded"
                                                        />
                                                    </td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.phone}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
    );
};

export default Notification;
