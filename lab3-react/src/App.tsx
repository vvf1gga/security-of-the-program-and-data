import Header from "./components/Header";
import FileUpload from "./components/FileUpload";
import AnalysisResult from "./components/AnalysisResult";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center px-6">
      <Header />
      <main className="w-full max-w-2xl mt-8 space-y-8">
        <FileUpload />
        <AnalysisResult />
      </main>
      <Footer />
    </div>
  );
}
