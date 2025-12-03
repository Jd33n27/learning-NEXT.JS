import ServerExample from "../examples/server-examples";
import ClientExample from "../examples/client-examples";

export default function ExamplesPage() {
  return (
    <div className="space-y-10 p-6">
      <ServerExample />
      <ClientExample />
    </div>
  );
}
