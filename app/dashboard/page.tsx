"use client"

import { useState } from "react"

const products = [
  { name: "Phone Charging Cable", category: "Electronics Accessories", gated: false, cost: 4, price: 12 },
  { name: "Kitchen Measuring Cups", category: "Kitchen", gated: false, cost: 6, price: 18 },
  { name: "Resistance Bands", category: "Fitness", gated: false, cost: 5, price: 20 },
  { name: "Desk Organizer", category: "Office", gated: false, cost: 7, price: 22 },
  { name: "LED Light Strips", category: "Electronics", gated: true, cost: 10, price: 30 },
  { name: "Bluetooth Headphones", category: "Electronics", gated: true, cost: 18, price: 45 },
]

export default function Dashboard() {

  const [isBeginner, setIsBeginner] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Electronics", "Kitchen", "Fitness", "Office"]

  const visibleProducts = products.filter(product => {

    if (isBeginner && product.gated) return false

    if (selectedCategory === "All") return true

    return product.category.includes(selectedCategory)
  })

  return (
    <div className="p-10 max-w-4xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        Amazon Seller Product Finder 🚀
      </h1>

      <div className="flex gap-6 mb-6">

        <div>
          <label className="mr-2 font-medium">
            Beginner Mode
          </label>
          <input
            type="checkbox"
            checked={isBeginner}
            onChange={() => setIsBeginner(!isBeginner)}
          />
        </div>

        <div>
          <label className="mr-2 font-medium">
            Category
          </label>

          <select
            className="border rounded px-2 py-1"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

      </div>

      <div className="space-y-4">

        {visibleProducts.map((product, index) => {

          const profit = product.price - product.cost
          const roi = Math.round((profit / product.cost) * 100)

          return (

            <div
              key={index}
              className="border rounded-lg p-4 shadow-sm"
            >

              <h2 className="font-semibold text-lg">
                {product.name}
              </h2>

              <p className="text-sm text-gray-500">
                Category: {product.category}
              </p>

              <div className="mt-2 text-sm">
                Buy Cost: ${product.cost} <br />
                Sell Price: ${product.price} <br />

                <strong>
                  Profit: ${profit} | ROI: {roi}%
                </strong>
              </div>

              {product.gated && (
                <span className="text-red-500 text-sm">
                  Approval Required
                </span>
              )}

            </div>

          )
        })}

      </div>

    </div>
  )
}