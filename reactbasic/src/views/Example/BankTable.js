// ./views/Example/BankTable.js

import React from 'react';
import { useTable } from 'react-table';

const BankTable = () => {
  const data = React.useMemo(
    () => [
      {
        logo: 'https://static.wixstatic.com/media/9d8ed5_c7ef97f22ded44eb8581373d639a5221~mv2.png/v1/fill/w_280,h_280,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9d8ed5_c7ef97f22ded44eb8581373d639a5221~mv2.png',
        stt: 1,
        ma: 'ACB',
        giaHienTai: '100,000',
        giaNgungMua: '90,000',
        giaCanNacBan: '110,000',
        coTuc: '5,000',
        suatCoTuc: '5%',
        tangTruongLN: '10%',
        mucTangTruong: '15%',
        ghiChu: '',
      },
      {
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtTUXrb6cPGovD_tO_pcl1-ZWZJrSLHPdF3Q&s',
        stt: 2,
        ma: 'BCM',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://image.bnews.vn/MediaUpload/Org/2022/04/26/logo-bidv-20220426071253.jpg',
        stt: 3,
        ma: 'BID',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://www.globalsafe.vn/noidung/uploads/2017/10/thiet-ke-logo-baoviet.png',
        stt: 4,
        ma: 'BVH',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://i.pinimg.com/564x/0e/33/49/0e3349ab85ae5ebf604df3cb380f9c8f.jpg',
        stt: 5,
        ma: 'CTG',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://inkythuatso.com/uploads/thumbnails/800/2021/11/logo-fpt-inkythuatso-1-01-01-14-33-35.jpg',
        stt: 6,
        ma: 'FPT',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAjUL2RKKvaqnubnEtQjONNI2RK8GeLLya_A&s',
        stt: 7,
        ma: 'GAS',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://i.pinimg.com/736x/36/b9/47/36b947921e3c815c3156442fc6d9bb67.jpg',
        stt: 8,
        ma: 'GVR',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://static.wixstatic.com/media/9d8ed5_0f9b1175f94f4ce4a6789d63a1540044~mv2.png/v1/fit/w_500,h_500,q_90/file.png',
        stt: 9,
        ma: 'HDB',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4wI3069BoYJzPDh_W00Q20n3yK3hTloF6mg&s',
        stt: 10,
        ma: 'HPG',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://static.wixstatic.com/media/9d8ed5_b92082f54b6143f6bacafff11d0c1d98~mv2.png/v1/fill/w_560,h_560,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/9d8ed5_b92082f54b6143f6bacafff11d0c1d98~mv2.png',
        stt: 11,
        ma: 'MBB',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://cdn.brvn.vn/news/480px/2014/Masan_1395457474.JPG',
        stt: 12,
        ma: 'MSN',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://forbes.vn/wp-content/uploads/2022/06/LogoTop50_TheGioiDiDong.jpg',
        stt: 13,
        ma: 'MWG',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtpryT9obhKNtP3zylZITXxYgbmvSAtB1Kig&s',
        stt: 14,
        ma: 'PLX',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://pvpower.vn/pow-media/logo/pvp.jpg',
        stt: 15,
        ma: 'POW',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://upload.wikimedia.org/wikipedia/vi/2/2c/Logo_Sabeco.png',
        stt: 16,
        ma: 'SAB',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/2/22/Logo_SHB.jpeg',
        stt: 17,
        ma: 'SHB',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://cdn.seabank.com.vn/sites/default/files/2021-05/Logo%20SB_1650x1275-01_1.png',
        stt: 18,
        ma: 'SSB',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://cdn.haitrieu.com/wp-content/uploads/2022/02/Logo-SSI.png',
        stt: 19,
        ma: 'SSI',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://cdn.haitrieu.com/wp-content/uploads/2022/02/Logo-SCB-V-Bl.png',
        stt: 20,
        ma: 'STB',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://inuvdp.com/wp-content/uploads/2022/08/file-vector-logo-techcombank-02.jpg',
        stt: 21,
        ma: 'TCB',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK9xgY7ItRW9O_Z6Lk0wofzR5wyn5NU0tqYjX2P-8C0vbFzO8ns3JGxOPMj0B_adZKdlc&usqp=CAU',
        stt: 22,
        ma: 'TPB',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://innhanhhcm.vn/wp-content/uploads/2023/11/logo-vietcombank-01-1024x774.jpg',
        stt: 23,
        ma: 'VCB',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://phucdienquan.vn/wp-content/uploads/2022/04/Logo-Vinhomes.jpg',
        stt: 24,
        ma: 'VHM',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://www.senviet.art/wp-content/uploads/edd/2017/08/logo-VIB.jpg',
        stt: 25,
        ma: 'VIB',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://p7.hiclipart.com/preview/44/299/781/hanoi-vingroup-business-organization-joint-stock-company-business.jpg',
        stt: 26,
        ma: 'VIC',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://brasol.vn/wp-content/uploads/2022/08/logo-vietjet-air.jpg',
        stt: 27,
        ma: 'VJC',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Logo_Vinamilk_%282023%29.png',
        stt: 28,
        ma: 'VNM',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://media.loveitopcdn.com/3807/logo-vpbank-moi.jpg',
        stt: 29,
        ma: 'VPB',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      {
        logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFu2IS45l7S7pAipLM_yiAWhBp53ZN-0ibGw&s',
        stt: 30,
        ma: 'VRE',
        giaHienTai: '200,000',
        giaNgungMua: '180,000',
        giaCanNacBan: '220,000',
        coTuc: '10,000',
        suatCoTuc: '5%',
        tangTruongLN: '12%',
        mucTangTruong: '18%',
        ghiChu: '',
      },
      
      // Thêm các ngân hàng khác ở đây
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: 'STT',
        accessor: 'stt',
      },
      {
        Header: 'Logo',
        accessor: 'logo',
        Cell: ({ cell: { value } }) => <img src={value} alt="logo" style={{ width: '50px', height: '50px' }} />,
      },
      {
        Header: 'Mã',
        accessor: 'ma',
      },
      {
        Header: 'Giá hiện tại',
        accessor: 'giaHienTai',
      },
      {
        Header: 'Giá ngừng mua',
        accessor: 'giaNgungMua',
      },
      {
        Header: 'Giá cân nhắc bán',
        accessor: 'giaCanNacBan',
      },
      {
        Header: 'Cổ tức (k/cp)',
        accessor: 'coTuc',
      },
      {
        Header: 'Suất cổ tức (cổ tức/giá)',
        accessor: 'suatCoTuc',
      },
      {
        Header: 'Tăng trưởng LN kỳ vọng 3-5 năm',
        accessor: 'tangTruongLN',
      },
      {
        Header: 'Mức tăng trưởng tổng hàng năm (kỳ vọng)',
        accessor: 'mucTangTruong',
      },
      {
        Header: 'Ghi chú',
        accessor: 'ghiChu',
      },
      {
        Header: 'Actions',
        accessor: 'actions',
        Cell: ({ row }) => (
          <div>
            <button onClick={() => handleEdit(row.original)}>Edit</button>
            <button onClick={() => handleDelete(row.original.stt)}>Delete</button>
          </div>
        ),
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  const handleEdit = (rowData) => {
    // Xử lý chức năng chỉnh sửa
    console.log('Chỉnh sửa dòng:', rowData);
    // Thực hiện các hành động chỉnh sửa dựa vào rowData
  };

  const handleDelete = (stt) => {
    // Xử lý chức năng xóa
    console.log('Xóa dòng có STT:', stt);
    // Sau khi xóa, cập nhật lại danh sách items
    // Đây là ví dụ, bạn cần thực hiện xóa dữ liệu từ API hoặc state
  };

  return (
    <table {...getTableProps()} style={{ borderCollapse: 'collapse', width: '100%', backgroundColor: '#f0f8ff' }}>
      <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th
                {...column.getHeaderProps()}
                style={{
                  borderBottom: 'solid 3px #ddd',
                  background: '#4CAF50',
                  color: 'white',
                  fontWeight: 'bold',
                  padding: '10px',
                  textAlign: 'left',
                }}
              >
                {column.render('Header')}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map(row => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map(cell => {
                return (
                  <td
                    {...cell.getCellProps()}
                    style={{
                      padding: '10px',
                      border: 'solid 1px #ddd',
                      background: '#fff',
                      color: '#333',
                    }}
                  >
                    {cell.render('Cell')}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default BankTable;
