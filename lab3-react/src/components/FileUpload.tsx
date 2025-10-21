export default function FileUpload() {
  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-md text-center">
      <h2 className="text-xl font-semibold mb-4 text-blue-300">
        Крок 1 — Завантаж текстовий файл
      </h2>
      <input
        type="file"
        accept=".txt"
        className="file-input w-full max-w-xs text-sm text-gray-300 bg-gray-900 border border-gray-700 rounded-lg p-2 cursor-pointer hover:bg-gray-700 transition"
      />
      <p className="text-gray-500 mt-2 text-sm">
        Підтримуються лише файли .txt
      </p>
    </div>
  );
}
