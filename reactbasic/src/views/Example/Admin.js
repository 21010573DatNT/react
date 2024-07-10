// ./views/Example/Admin.js

import React, { useState, useEffect } from 'react';
import '../../styles/Admin.css';

const Admin = () => {
  const [items, setItems] = useState([]);

  // Đây là nơi bạn có thể lấy dữ liệu từ API hoặc mock data
  useEffect(() => {
    // Giả sử danh sách các mục đã được fetch từ API và set vào state items
    const mockItems = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' },
      { id: 3, name: 'Item 3' },
    ];
    setItems(mockItems);
  }, []);

  const handleEdit = (id) => {
    // Xử lý chức năng chỉnh sửa
    console.log('Chỉnh sửa mục có id:', id);
  };

  const handleDelete = (id) => {
    // Xử lý chức năng xóa
    console.log('Xóa mục có id:', id);
    // Sau khi xóa, cập nhật lại danh sách items
    setItems(items.filter(item => item.id !== id));
  };

  return (
    <div>
      <h2>Trang Admin</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <button onClick={() => handleEdit(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
