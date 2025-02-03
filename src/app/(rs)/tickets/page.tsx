import TicketSearch from "./TicketSearch";
import { getOpenTickets } from "@/lib/queries/getOpenTickets";
import { getTicketsSearchResults } from "@/lib/queries/getTicketsSearchResults";
import TicketTable from "@/app/(rs)/tickets/TicketTable";

export const metadata = {
  title: "Tickets Search",
};

export default async function Tickets({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
  const { searchText } = await searchParams;

  if (!searchText) {
    const results = await getOpenTickets();
    return (
      <>
        <TicketSearch />
        {results.length ? (
          <TicketTable data={results} />
        ) : (
          <p className="mt-4">No open tickets found</p>
        )}
      </>
    );
  }

  const results = await getTicketsSearchResults(searchText);

  return (
    <>
      <TicketSearch />
      {results.length ? <TicketTable data={results} /> : null}
    </>
  );
}
