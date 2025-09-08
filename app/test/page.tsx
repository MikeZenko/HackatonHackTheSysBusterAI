export default function TestPage() {
  return (
    <div className="min-h-screen bg-blue-500 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-4">CSS Test Page</h1>
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">If you can see this styled content, CSS is working!</h2>
          <p className="text-gray-600">This page uses Tailwind CSS classes for styling.</p>
          <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Test Button
          </button>
        </div>
      </div>
    </div>
  )
}