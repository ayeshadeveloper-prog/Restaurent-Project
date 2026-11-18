import { Form, Input, Button, message } from "antd";

import {
  InstagramOutlined,
  FacebookFilled,
  WhatsAppOutlined,
  TikTokOutlined,
  SendOutlined,
} from "@ant-design/icons";

import "./Connect.css";

const { TextArea } = Input;

const ConnectSection = () => {

  const [form] = Form.useForm();

  const onFinish = (values) => {
    const subject = `[Food Villa Contact] ${values.subject}`;
    const body = [
      `Name: ${values.name}`,
      `Email: ${values.email}`,
      `Phone: ${values.phone}`,
      "",
      values.message,
    ].join("\n");

    window.location.href = `mailto:hello@foodvilla.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    message.info("Your email app will open with your message. Send it there to complete delivery.");
  };

  return (
    <section className="connect-section">

      <div className="connect-container">

        {/* Left Side */}

        <div className="connect-info">

          <span className="connect-subtitle">
            STAY CONNECTED
          </span>

          <h2>
            Let's Stay <span>Connected</span>
          </h2>

          <p>
            Follow us on social media for delicious updates,
            special offers, new menu items and a little taste
            of happiness.
          </p>

          <div className="social-links">

            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <InstagramOutlined />
            </a>

            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <FacebookFilled />
            </a>

            <a href="https://www.whatsapp.com/" target="_blank" rel="noreferrer" aria-label="WhatsApp">
              <WhatsAppOutlined />
            </a>

            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" aria-label="TikTok">
              <TikTokOutlined />
            </a>

          </div>

          <div className="connect-note">
            <SendOutlined />
            <span>
              Your feedback makes our food journey better!
            </span>
          </div>

        </div>

        {/* Right Side Form */}

        <div className="contact-form-wrapper">

          <span className="connect-subtitle">
            SEND US A MESSAGE
          </span>

          <h2>We'd Love to Hear From You</h2>

          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
          >

            <Form.Item
              label="Full Name"
              name="name"
              rules={[
                { required: true, message: "Please enter your name" }
              ]}
            >
              <Input placeholder="Enter your full name" />
            </Form.Item>

            <Form.Item
              label="Email Address"
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Enter a valid email" }
              ]}
            >
              <Input placeholder="Enter your email address" />
            </Form.Item>

            <Form.Item
              label="Phone Number"
              name="phone"
              rules={[
                { required: true, message: "Please enter your phone number" }
              ]}
            >
              <Input placeholder="Enter your phone number" />
            </Form.Item>

            <Form.Item
              label="Subject"
              name="subject"
              rules={[
                { required: true, message: "Please enter subject" }
              ]}
            >
              <Input placeholder="What's this about?" />
            </Form.Item>

            <Form.Item
              label="Your Message"
              name="message"
              rules={[
                { required: true, message: "Please write your message" }
              ]}
            >
              <TextArea
                rows={4}
                placeholder="Write your message here..."
              />
            </Form.Item>

            <Form.Item>
              <Button
                htmlType="submit"
                className="contact-submit-btn"
                block
              >
                Send Message <SendOutlined />
              </Button>
            </Form.Item>

          </Form>

        </div>

      </div>

    </section>
  );
};

export default ConnectSection;

