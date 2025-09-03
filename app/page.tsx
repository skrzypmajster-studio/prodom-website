import { MaintenanceModePage } from "./_pages/maintenance/MaintenanceModePage";

export default function Home() {
  if (!!process.env.MAINTENANCE_MODE_ENABLED) {
    return <MaintenanceModePage />;
  }

  return (
    <main className="p-4">
      <h1 className="text-5xl font-bold text-center">Welcome on PRODOM page</h1>
    </main> 
  );
}
