const stripe = require("stripe")("sk_test_51OoTquSAtmHNt30iK1bOy8YsI65hhcoeAJNoC0hnO5SDrJwF1mq3wLfn47WiErcSPJb6F8zljSJQJu0cVyBfskks00pjbuKCk5");

const PaymentController = {
    makepayment: async (req, res) => {
        const { products } = req.body;
        // Create a coupon with 20% off
        let total = 0;
        products.map((elem) => {
            total += elem.quantity * elem.price
        })

        let couponId
        try {
            if (total > 2500) {
                const coupon = await stripe.coupons.create({
                    percent_off: 20,
                    duration: 'once',
                });
                couponId = coupon.id;
            } else {
                const coupon = await stripe.coupons.create({
                    percent_off: 15,
                    duration: 'once',
                });
                couponId = coupon.id;
            }
        }
        catch (error) {
            console.error("Error creating coupon:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }

        // console.log(products);
        const lineitems = products.map((ele) => ({
            price_data: {
                currency: "usd",
                product_data: {
                    name: ele.slug,
                    images: [ele.image],  // Add images array with the product image
                },
                unit_amount: ele.price * 100,
            },
            quantity: ele.quantity
        }));
        try {
            const session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                line_items: lineitems,
                discounts: [
                    {
                        coupon: couponId, // Use the ID of the created coupon
                    },
                ],
                mode: "payment",
                success_url: "http://localhost:5173/success",
                cancel_url: "http://localhost:5173/cancel"
            });

            res.status(200).json({
                id: session.id
            });
        } catch (error) {
            console.error("Error creating Stripe Checkout session:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    },
    getpayment: async (req, res) => {
        try {
            const payments = await stripe.paymentIntents.list();
            res.status(200).json({
                message: payments.data
            });
        } catch (error) {
            console.error('Error fetching payments:', error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
};

module.exports = PaymentController;
