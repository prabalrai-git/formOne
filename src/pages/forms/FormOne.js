import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Switch,

} from 'antd';
import React, { useState } from 'react';


function FormOne(){


  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      onSubmit={handleSubmit}
      
    >
     
      <Form.Item label="UId" name='UId'>
        <InputNumber />
      </Form.Item>
      <Form.Item label="UserFullName" name="UserFullName"   >
        <Input/>
      </Form.Item>
      <Form.Item label="Password" name="Password"   >
        <Input.Password></Input.Password>
      </Form.Item>
      <Form.Item label="UserContactNumber" name="UserContactNumber"   >
      <Input type={"number"}/>
      </Form.Item>
      <Form.Item label="UserEmail" name="UserEmail" >
        <Input/>
      </Form.Item>
      <Form.Item label="RoleId" name="RoleId" >
        <InputNumber />
      </Form.Item>
      <Form.Item label="EnrtyDate" name="EntryDate" >
        <DatePicker/>
      </Form.Item>
      <Form.Item label="UserId" name="UserId" >
        <InputNumber />
      </Form.Item>
      <Form.Item label="IsActive" name="IsActive">
        <Switch/>
      </Form.Item>
      <Form.Item label="CompanyId" name="CompanyId" >
        <InputNumber />
      </Form.Item>
      <Form.Item>
      <Button style={{marginLeft:250}} htmlType="submit">Submit</Button>

      </Form.Item>
        
     
    </Form>
  );
};

export default FormOne;