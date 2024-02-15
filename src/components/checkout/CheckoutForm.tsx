import React from "react";

const CheckoutForm = () => {
  return (
    <div className="bg-clr-light rounded-lg p-8 text-sm w-full">
      <h3 className="text-clr-dark text-2xl font-bold uppercase mb-8">
        Checkout
      </h3>

      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <h5 className="text-clr-accent uppercase font-bold text-base">
            Billing Details
          </h5>
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-2 font-bold">
              Name
            </label>
            <input
              required
              autoComplete="name"
              placeholder="Alexei Ward"
              id="name"
              type="text"
              className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-clr-lighter-accent font-bold"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-2 font-bold">
              Email Address
            </label>
            <input
              autoComplete="email"
              placeholder="alexei@gmail.com"
              id="email"
              type="email"
              className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-clr-lighter-accent font-bold"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="phone" className="mb-2 font-bold">
              Phone Number
            </label>
            <input
              autoComplete="tel"
              placeholder="+1 202-555-0136"
              id="phone"
              type="tel"
              className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-clr-lighter-accent font-bold"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h5 className="text-clr-accent uppercase font-bold text-base">
            Shipping Info
          </h5>
          <div className="flex flex-col">
            <label htmlFor="address" className="mb-2 font-bold">
              Your Address
            </label>
            <input
              autoComplete="street-address"
              placeholder="1137 Williams Avenue"
              id="address"
              type="text"
              className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-clr-lighter-accent font-bold"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="zip" className="mb-2 font-bold">
              ZIP Code
            </label>
            <input
              autoComplete="postal-code"
              placeholder="10001"
              id="zip"
              type="text"
              className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-clr-lighter-accent font-bold"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="city" className="mb-2 font-bold">
              City
            </label>
            <input
              autoComplete="address-level2"
              placeholder="New York"
              id="city"
              type="text"
              className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-clr-lighter-accent font-bold"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="country" className="mb-2 font-bold">
              Country
            </label>
            <input
              autoComplete="country"
              placeholder="United States"
              id="country"
              type="country"
              className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-clr-lighter-accent font-bold"
            />
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h5 className="text-clr-accent uppercase font-bold text-base">
            Payment Details
          </h5>
          <div className="flex justify-between items-center">
            <p className="mb-2 font-bold">Payment Method:</p>

            <div className="w-2/3">
              <label
                htmlFor="e-money"
                className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-clr-lighter-accent font-bold flex gap-4 mb-4 cursor-pointer"
              >
                <input id="e-money" type="radio" required />
                <span>e-Money</span>
              </label>

              <label
                htmlFor="cod"
                className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-clr-lighter-accent font-bold flex gap-4 cursor-pointer"
              >
                <input id="cod" type="radio" />
                <span>Cash on Delivery</span>
              </label>
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="em-num" className="mb-2 font-bold">
              e-Money Number
            </label>
            <input
              autoComplete="off"
              placeholder="123456789"
              id="em-num"
              type="number"
              className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-clr-lighter-accent font-bold"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="em-pin" className="mb-2 font-bold">
              e-Money PIN
            </label>
            <input
              autoComplete="off"
              placeholder="1234"
              id="em-pin"
              type="number"
              className="border border-gray-300 py-3 px-4 rounded-lg focus:outline-clr-lighter-accent font-bold"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
