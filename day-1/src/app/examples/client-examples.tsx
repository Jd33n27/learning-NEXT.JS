"use client";

import { useState } from "react";

export default function ClientExample() {
  const [count, setCount] = useState(0);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Client Component Counter</h2>

      <button
        onClick={() => setCount(count + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Count: {count}
      </button>
    </div>
  );
}
