import CustomerSearch from "./CustomerSearch";
import { getCustomerSearchResults } from "@/lib/queries/getCustomerSearchResults";

import * as Sentry from "@sentry/nextjs";

export const metadata = {
  title: "Customers Search",
};

export default async function Customers({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { searchText } = await searchParams;

  if (!searchText) {
    return <CustomerSearch />;
  }

  const span = Sentry.startInactiveSpan({
    name: "getCustomerSearchResults-1",
  });

  // quert the database
  const results = await getCustomerSearchResults(searchText);
  span.end();

  // return results
  return (
    <>
      <CustomerSearch />
      <p>{JSON.stringify(results)}</p>
    </>
  );
}
