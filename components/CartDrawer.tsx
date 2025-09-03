"use client";

import { useState } from "react";

export default function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg"
      >
        {isOpen ? "Close Cart" : "Open Cart"}
      </button>

      {isOpen && (
        <div className="fixed bottom-20 right-6 w-64 bg-white border rounded-lg shadow-xl p-4">
          <h2 className="text-lg font-bold mb-2">Your Cart</h2>
          <p className="text-sm text-gray-500">Cart is empty</p>
        </div>
      )}
    </div>
  );
}
