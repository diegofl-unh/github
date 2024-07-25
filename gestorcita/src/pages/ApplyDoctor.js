import { Col, Form, Input, Row } from 'antd'
import  Layout  from '../components/Layout'
import React from 'react'

function ApplyDoctor() {
  return (
    <Layout>
        <h1 className='page-title'>ApplyDoctor</h1>
        <Form>
            <Row gutter={16}>
                <Col span={8} xs={24} sm={24}>
                    <Form.Item label="Primer Nombre" name="firstName" rules={[{ required: true }]}>
                        <Input placeholder="Primer Nombre" />   
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24}>
                    <Form.Item label="Primer Nombre" name="firstName" rules={[{ required: true }]}>
                        <Input placeholder="Primer Nombre" />   
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24}>
                    <Form.Item label="Primer Nombre" name="firstName" rules={[{ required: true }]}>
                        <Input placeholder="Primer Nombre" />   
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24}>
                    <Form.Item label="Primer Nombre" name="firstName" rules={[{ required: true }]}>
                        <Input placeholder="Primer Nombre" />   
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24}>
                    <Form.Item label="Primer Nombre" name="firstName" rules={[{ required: true }]}>
                        <Input placeholder="Primer Nombre" />   
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24}>
                    <Form.Item label="Primer Nombre" name="firstName" rules={[{ required: true }]}>
                        <Input placeholder="Primer Nombre" />   
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24}>
                    <Form.Item label="Primer Nombre" name="firstName" rules={[{ required: true }]}>
                        <Input placeholder="Primer Nombre" />   
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    </Layout>
  )
}

export default ApplyDoctor