import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="px=2 w-full">
      <div className="flex flex-col items-center justify-center space-y-4">
        <h2 className="text-2xl">Page Not Found</h2>
        <Image
          src="/images/not-found-1024x1024.png"
          alt="Page Not Found"
          width={300}
          height={300}
          sizes="300px"
          priority={true}
          title="Page Not Found"
        />
      </div>
      <Link
        href="/tickets"
        className="text-center hover:underline mt-4 bg-primary p-2 rounded-md"
      >
        <h3>Go Home</h3>
      </Link>
    </div>
  );
}
