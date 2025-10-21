export default function AnalysisResult() {
  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-md">
      <h2 className="text-xl font-semibold mb-4 text-blue-300">
        Крок 2 — Результати аналізу
      </h2>
      <div className="space-y-3 text-gray-300">
        <p>
          <span className="font-semibold text-blue-400">
            Найчастіший символ:
          </span>{" "}
          —
        </p>
        <p>
          <span className="font-semibold text-blue-400">Його частота:</span> —
        </p>
        <p>
          <span className="font-semibold text-blue-400">
            Визначений ключ шифрування:
          </span>{" "}
          —
        </p>
        <p>
          <span className="font-semibold text-blue-400">
            Розшифрований текст:
          </span>
        </p>
        <div className="bg-gray-900 p-4 rounded-lg text-gray-400 text-sm min-h-[100px] whitespace-pre-wrap">
          (тут буде розшифрований текст)
        </div>
      </div>
    </div>
  );
}
