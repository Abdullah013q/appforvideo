export default function AdminLayout({ children }) {
    return (
      <section className="p-4">
        <h2 className="text-xl font-semibold mb-4">Admin Dashboard</h2>
        {children}
      </section>
    );
  }