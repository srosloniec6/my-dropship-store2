"use client";

import { useState } from "react";
import { Product } from "@/lib/catalog";

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState<Product[]>([]);

  const toggleDrawer = () => setIsOpen(!isOpen);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <>
      {/* 🛒 Floating cart button */}
      <button
        onClick={toggleDrawer}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-blue-700"
      >
        🛒 {cart.length}
      </button>

      {/* Side drawer */}
      {isOpen && (
        <div className="fixed inset-0 flex justify-end">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black bg-opacity-40"
            onClick={toggleDrawer}
          ></div>

          {/* Drawer content */}
          <div className="relative w-80 bg-white h-full shadow-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Your Cart</h2>

            {cart.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <ul className="space-y-4">
                {cart.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-between border-b pb-2"
                  >
                    <span>{item.name}</span>
                    <span className="font-medium">${item.price.toFixed(2)}</span>
                  </li>
                ))}
              </ul>
            )}

            <button
              className="mt-6 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
              onClick={() => alert("Checkout not implemented yet!")}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
