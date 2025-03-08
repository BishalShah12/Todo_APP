const Loading = () => {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="text-center space-y-8">
          {/* Spinner */}
          <div className="relative inline-block">
            <div className="w-16 h-16 rounded-full border-4 border-gray-200"></div>
            <div className="absolute top-0 left-0 w-16 h-16 rounded-full border-4 border-indigo-500 border-t-transparent animate-spin"></div>
          </div>
  
          {/* Text */}
          <div className="space-y-2">
            <h1 className="text-2xl font-medium text-gray-100 animate-pulse">
              Loading...
            </h1>
          </div>
        </div>
      </div>
    );
  };
  
  export default Loading;