import React from 'react'
import './regCss.css'
import {Card,
    Form, Icon, Input, Button,
  } from 'antd';
  function hasErrors(fieldsError) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
  }
 class VoluReg extends React.Component{
    componentDidMount() {
        // To disabled submit button at the beginning.
        this.props.form.validateFields();
      }
    
      handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            console.log('表单值： ', values);
          }
        });
      }
     render(){
        const {
            getFieldDecorator, getFieldsError, getFieldError, isFieldTouched,
          } = this.props.form;
      
          // Only show error after a field is touched.
          const userNameError = isFieldTouched('userName') && getFieldError('userName');
          const passwordError = isFieldTouched('password') && getFieldError('password');

        return(
         <div>
             <Card>
             <Form layout="inline" onSubmit={this.handleSubmit}>
        <Form.Item
          validateStatus={userNameError ? 'error' : ''}
          help={userNameError || ''}
        >
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: '请输入用户名!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
          )}
        </Form.Item>
        <Form.Item
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
          )}
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            注册
          </Button>
        </Form.Item>
      </Form></Card>
         </div>)
     }
     
 }
 export default Form.create()(VoluReg)