import TicketSearch from "./TicketSearch";
import { getOpenTickets } from "@/lib/queries/getOpenTickets";
import { getTicketsSearchResults } from "@/lib/queries/getTicketsSearchResults";

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
    const result = await getOpenTickets();
    return (
      <>
        <TicketSearch />
        <p>{JSON.stringify(result)}</p>
      </>
    );
  }

  const result = await getTicketsSearchResults(searchText);

  return (
    <>
      <TicketSearch />
      <p>{JSON.stringify(result)}</p>
    </>
  );
}
