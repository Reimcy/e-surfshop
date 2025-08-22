
export function RegisterPage() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-4xl font-bold mb-6">Register</h1>
            <form className="bg-white p-8 rounded shadow-md w-full max-w-md">
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="username">Username</label>
                    <input type="text" id="username" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
                    <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="password">Password</label>
                    <input type="password" id="password" className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">Register</button>
            </form>
        </div>
    );
}