import Form from "@/features/invoices/create-form";
import Breadcrumbs from "@/features/invoices/breadcrumbs";
import { fetchCustomers } from "@/shared/lib/queries/data";

export default async function Page() {
  const customers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: "Invoices", href: "/dashboard/invoices" },
          {
            label: "Create Invoice",
            href: "/dashboard/invoices/create",
            active: true,
          },
        ]}
      />
      <Form customers={customers} />
    </main>
  );
}
