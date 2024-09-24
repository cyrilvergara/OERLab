import { useState } from "react";

export default function TabComponent() {
  const [activeTab, setActiveTab] = useState(0);

  const htmlCode = `
    <div class="image-container">
      <
      img src="https://via.placeholder.com/300" 
      alt="Placeholder Image" 
      class="image-preview" 
      />
    </div>
  `;

  const cssCode = `
    .image-container {
      display: flex;
      justify-content: center;
      margin-top: 20px;
    }
    .image-preview {
      width: 100%;
      max-width: 300px;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  `;

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert("Code copied to clipboard!");
  };

  return (
    <div className="container mx-auto p-4">
      <div className="tabs">
        <button
          className={`px-4 py-2 text-sm font-medium ${
            activeTab === 0 ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab(0)}
        >
          Preview
        </button>
        <button
          className={`ml-4 px-4 py-2 text-sm font-medium ${
            activeTab === 1 ? "border-b-2 border-blue-500" : ""
          }`}
          onClick={() => setActiveTab(1)}
        >
          HTML & CSS Code
        </button>
      </div>

      <div className="tab-content mt-4">
        {activeTab === 0 && (
          <div className="image-container flex justify-center">
            <img
              src="https://via.placeholder.com/300"
              alt="Preview"
              className="image-preview rounded-lg shadow-lg w-full max-w-xs md:max-w-s lg:max-w-lg"
            />
          </div>
        )}
        {activeTab === 1 && (
          <div className="code-block">
            {/* HTML Section */}
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">HTML Code:</h3>
              <button
                className="text-sm text-blue-500 hover:underline"
                onClick={() => copyToClipboard(htmlCode)}
              >
                Copy Code
              </button>
            </div>
            <pre className="bg-gray-100 p-2 rounded text-xs sm:text-sm md:text-base">
              <code>{htmlCode}</code>
            </pre>

            {/* CSS Section */}
            <div className="flex justify-between items-center mt-4 mb-2">
              <h3 className="text-lg font-semibold">CSS Code:</h3>
              <button
                className="text-sm text-blue-500 hover:underline"
                onClick={() => copyToClipboard(cssCode)}
              >
                Copy Code
              </button>
            </div>
            <pre className="bg-gray-100 p-2 rounded text-xs sm:text-sm md:text-base">
              <code>{cssCode}</code>
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
