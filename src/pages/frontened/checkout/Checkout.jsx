import { useState } from "react"
import { Button, Form, message } from "antd"
import { CheckCircleFilled } from "@ant-design/icons"
import { useCart } from "../../../context/CartContext.jsx"
import CheckoutHeader from "./CheckoutHeader"
import CustomerInformation from "./CustomerInformation"
import DeliverySection from "./DeliverySection"
import PaymentMethod from "./PaymentMethod"
import OrderConfirmation from "./OrderConfirmation"

const API_BASE_URL = (
    import.meta.env.VITE_API_BASE_URL || "http://localhost:5000"
).replace(/\/$/, "")

const Checkout = () => {
    const [customerForm] = Form.useForm()
    const { cartItems, clearCart } = useCart()
    const [paymentDetails, setPaymentDetails] = useState({
        method: "cod",
        accountNumber: "",
    })
    const [deliveryDetails, setDeliveryDetails] = useState({
        value: "standard",
    })
    const [orderId, setOrderId] = useState(null)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handlePlaceOrder = () => {
        if (cartItems.length === 0) {
            message.error("Your cart is empty.")
            return
        }

        if (
            paymentDetails.method !== "cod" &&
            !/^\d{11}$/.test(paymentDetails.accountNumber)
        ) {
            message.error("Please enter a valid 11-digit mobile wallet number.")
            return
        }

        customerForm.submit()
    }

    const handleOrderSubmit = async (customer) => {
        setIsSubmitting(true)

        try {
            const response = await fetch(`${API_BASE_URL}/api/orders`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    customer,
                    items: cartItems.map((item) => ({
                        productId: String(item.id),
                        name: item.name,
                        quantity: item.quantity,
                    })),
                    deliveryMethod: deliveryDetails.value,
                    paymentMethod: paymentDetails.method,
                }),
            })
            const responseText = await response.text()
            let result

            try {
                result = JSON.parse(responseText)
            } catch {
                throw new Error("The server returned an invalid response.")
            }

            if (!response.ok) {
                throw new Error(result.message || "Could not place your order.")
            }

            if (!result.orderNumber) {
                throw new Error("The server did not return an order number.")
            }

            clearCart()
            setOrderId(result.orderNumber)
        } catch (error) {
            message.error(
                error instanceof Error
                    ? error.message
                    : "Could not connect to the order server.",
            )
        } finally {
            setIsSubmitting(false)
        }
    }

    if (orderId) {
        return <OrderConfirmation orderId={orderId} />
    }

    return (
        <>
            <CheckoutHeader />
            <main className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
                <CustomerInformation
                    form={customerForm}
                    onSubmit={handleOrderSubmit}
                />
                <DeliverySection onDeliveryChange={setDeliveryDetails} />
                <PaymentMethod onPaymentChange={setPaymentDetails} />
                <div className="flex justify-end">
                    <Button
                        type="primary"
                        size="large"
                        icon={<CheckCircleFilled />}
                        onClick={handlePlaceOrder}
                        loading={isSubmitting}
                        className="h-12! rounded-xl! border-none! bg-[#16a36a]! px-8! font-semibold! hover:bg-[#128252]!"
                    >
                        Place Order
                    </Button>
                </div>
                <OrderConfirmation preview />
            </main>
        </>
    )
}

export default Checkout
