export default function Home() {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">
        Welcome To Amazon Seller Starter 🚀
      </h1>

      <p className="mt-4 text-gray-600">
        Find products you can sell without getting rejected.
      </p>

      <a 
        href="/login"
        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-xl"
      >
        Get Started Free
      </a>
    </div>
  )
}