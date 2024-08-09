import React from 'react';
import { Alert as AntdAlert, Space } from 'antd';
import { useSelector } from 'react-redux';

const CustomAlert = () => {
  const alerts = useSelector(state => state.alert); 

  return (
    <Space
      direction="vertical"
      style={{
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: '9999', 
      }}
    >
      {alerts.map(alert => (
        <AntdAlert
          key={alert.id}
          message={alert.title}
          description={alert.message}
          type={alert.type}
          showIcon
          closable={alert.type !== 'success'} 
        />
      ))}
    </Space>
  );
};

export default CustomAlert;
