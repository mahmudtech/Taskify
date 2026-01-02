import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import TaskBoard from "./components/tasks/TaskBoard";

export default function App() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <TaskBoard />
        </div>
      </main>
      <Footer />
    </div>
  );
}
