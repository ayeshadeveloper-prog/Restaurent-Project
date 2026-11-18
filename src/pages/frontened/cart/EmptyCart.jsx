import { Link } from "react-router-dom";
import {
  ArrowRightOutlined,
  ShoppingCartOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";

const EmptyCart = ({ closeToast }) => (
  <div className="flex items-start gap-4">
    <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#365f52]/10 text-[#365f52]">
      <ShoppingCartOutlined className="text-3xl" />
      <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-[#f4a340] text-white">
        <ShoppingOutlined className="text-xs" />
      </span>
    </div>

    <div className="min-w-0 flex-1">
      <p className="text-xs font-bold uppercase tracking-wider text-[#365f52]">
        Nothing Here Yet
      </p>
      <h2 className="mt-1 text-base font-extrabold text-[#0a1f3d]">
        Your Cart is Empty!
      </h2>
      <p className="mt-1 text-sm leading-5 text-gray-500">
        Explore our menu and find something delicious to enjoy.
      </p>
      <Link
        to="/menu"
        onClick={closeToast}
        className="mt-3 inline-flex items-center gap-2 rounded-lg bg-[#365f52] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#243c34]"
      >
        Explore Menu
        <ArrowRightOutlined />
      </Link>
    </div>
  </div>
);

export default EmptyCart;
