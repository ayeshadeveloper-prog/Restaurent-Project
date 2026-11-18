
import React from "react";
import { Typography } from "antd";
import menuImage from "../../../assets/Menu-image.jpg";

const { Title, Text } = Typography;

const MenuHero = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center"
      style={{
        minHeight: "480px",
        backgroundImage: `linear-gradient(rgba(10, 31, 61, 0.72), rgba(10, 31, 61, 0.82)), url(${menuImage})`,
      }}
    >
      <div className="flex items-center justify-center px-4 py-10">
        <div className="max-w-2xl text-center text-white">
          <Text className="mb-4 block text-[10px] font-bold tracking-[0.38em] text-[#16a36a] uppercase">
            Fresh & Flavorful
          </Text>

          <Title level={1} className="m-0 text-4xl font-black tracking-tight text-[#f8fafc] md:text-6xl" style={{ fontWeight: 800 }}>
            Menu
          </Title>

          <div className="mx-auto my-6 h-0.5 w-20 bg-[#16a36a]" />

          <Text className="block text-sm leading-7 text-[#cbd5e1] md:text-base" style={{ fontWeight: 600 }}>
            Handpicked favorites, slow-cooked comfort, and bold flavors made to savor.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default MenuHero;




