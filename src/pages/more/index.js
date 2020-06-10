import React from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Form, Input, Button, Card, Table } from 'antd';
import { connect } from 'umi';
import styles from './index.css';
const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '住址',
    dataIndex: 'city',
    key: 'city',
  },
];
// UI层和数据层分开
class More extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    console.log('ceshi', this.props.getMoreData);

    this.props.getMoreData({ name: '' });
  }
  // 成功才会执⾏这个函数
  onFinish = values => {
    console.log('values', values); // sy-log
    this.props.getMoreDataBySearch(values);
    this.props.getMoreData(values);
  };
  // 失败才会执⾏这个函数
  onFinishFailed = err => {
    console.log('err', err); // sy-log
  };
  render() {
    const { data } = this.props.more;
    return (
      <PageHeaderWrapper className={styles.more}>
        <Card>
          <Form onFinish={this.onFinish} onFinishFailed={this.onFinishFailed}>
            <Form.Item
              label="姓名"
              name="name"
              rules={[{ required: true, message: '请输⼊姓名' }]}
            >
              <Input placeholder="请输⼊姓名" />
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                查询
              </Button>
            </Form.Item>
          </Form>
        </Card>
        <Card>
          <Table columns={columns} dataSource={data} rowKey="id" />
        </Card>
      </PageHeaderWrapper>
    );
  }
}
export default connect(
  // mapStateToProps
  ({ more }) => ({ more }),
  // mapDispatchToProps
  {
    getMoreData: values => ({ type: 'more/getMoreData', payload: values }),
    getMoreDataBySearch: values => ({
      type: 'more/getMoreDataBySearch',
      payload: values,
    }),
  },
)(More);
