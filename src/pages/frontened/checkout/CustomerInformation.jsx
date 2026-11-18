
import { Form, Input, Typography } from "antd";

import {
  UserOutlined,
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
const { Title, Text } = Typography;

const CustomerInformation = ({ form, onSubmit }) => {
  return (
    <section className="customer-information w-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:p-10 lg:p-12">
      <div className="mb-9 flex items-center gap-5 border-b border-gray-100 pb-7">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#e9f8ef] text-2xl text-[#16a36a]">
          <UserOutlined />
        </div>
        <div>
          <Title level={3} className="m-0 text-xl font-bold text-[#0a1f3d] sm:text-2xl">
            Customer Information
          </Title>
          <Text className="mt-1 block text-sm text-[#64748b]">
            Please enter your personal details below.
          </Text>
        </div>
      </div>

      <Form
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        requiredMark={false}
        autoComplete="on"
        className="customer-information__form"
      >
        <div className="grid grid-cols-1 gap-x-7 md:grid-cols-2">
          <Form.Item
            label={<Text strong className="text-[#334155]">Full Name</Text>}
            name="fullName"
            rules={[
              {
                required: true,
                message: "Please enter your full name",
              },
              {
                min: 3,
                message: "Name must be at least 3 characters",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="mr-1 text-[#94a3b8]" />}
              placeholder="Enter your full name"
              className="customer-information__input"
            />
          </Form.Item>

          <Form.Item
            label={<Text strong className="text-[#334155]">Email Address</Text>}
            name="email"
            rules={[
              {
                required: true,
                message: "Please enter your email address",
              },
              {
                type: "email",
                message: "Please enter a valid email address",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<MailOutlined className="mr-1 text-[#94a3b8]" />}
              placeholder="example@email.com"
              className="customer-information__input"
            />
          </Form.Item>

          <Form.Item
            label={<Text strong className="text-[#334155]">Phone Number</Text>}
            name="phone"
            rules={[
              {
                required: true,
                message: "Please enter your phone number",
              },
              {
                pattern: /^\+?[0-9\s-]{10,15}$/,
                message: "Please enter a valid phone number",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<PhoneOutlined className="mr-1 text-[#94a3b8]" />}
              placeholder="+92 300 1234567"
              className="customer-information__input"
            />
          </Form.Item>

          <Form.Item
            label={<Text strong className="text-[#334155]">Delivery Address</Text>}
            name="address"
            rules={[
              {
                required: true,
                message: "Please enter your delivery address",
              },
              {
                min: 5,
                message: "Please enter a complete address",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<EnvironmentOutlined className="mr-1 text-[#94a3b8]" />}
              placeholder="House no, street, area"
              className="customer-information__input"
            />
          </Form.Item>
        </div>

        <div className="mt-4 rounded-xl bg-[#e9f8ef] p-5">
          <div className="flex items-start gap-3">
            <IdcardOutlined className="mt-1 text-lg text-[#16a36a]" />
            <div>
              <Title level={5} className="m-0 text-sm font-bold text-[#0a1f3d]">
                Your Information is Safe
              </Title>
              <Text className="mt-1 block text-xs leading-5 text-[#475569]">
                Your personal details will only be used to process
                and deliver your restaurant order.
              </Text>
            </div>
          </div>
        </div>
      </Form>
    </section>
  );
};

export default CustomerInformation;



