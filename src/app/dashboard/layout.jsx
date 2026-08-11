import Sidebar from "@/components/dashboard/Sidebar";


export default function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#07090e] text-white">
      {/* Fixed Left Sidebar */}
      <Sidebar />

      {/* Dynamic Right Content Area */}
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {children}
        </div>
      </main>
    </div>
  );
}