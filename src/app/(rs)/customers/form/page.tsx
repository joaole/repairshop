import { BackButton } from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";

export default async function CustomerFormPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  try {
    const { customerId } = await searchParams;

    // Edit custmorForm
    if (customerId) {
      const customer = await getCustomer(parseInt(customerId));
      if (!customer) {
        return (
          <>
            <h2 className="text-2xl mb-2">
              Customer ID #{customerId} not found
            </h2>
            <BackButton title="Back" variant="default" />
          </>
        );
      }
      console.log(customer);
      // put the customer form component here
    } else {
      // new customer form component here
    }
  } catch (e) {
    if (e instanceof Error) {
      throw e;
    }
  }
}
