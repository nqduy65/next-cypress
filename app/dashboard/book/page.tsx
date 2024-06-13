import Link from "next/link";
import Book from "@/components/book/book";

export default function BookPage() {
  const books = [
    {
      id: 1,
      bookName: "bookA",
      publishBy: "pubA",
      publishYear: 1998,
      author: "author A",
    },
    {
      id: 2,
      bookName: "bookB",
      publishBy: "pubB",
      publishYear: 1998,
      author: "author B",
    },
    {
      id: 3,
      bookName: "bookC",
      publishBy: "pubC",
      publishYear: 1998,
      author: "author C",
    },
  ];
  return (
    <div className="flex flex-col w-full max-w-7xl m-auto">
      <div className="flex w-full caption-top py-5 font-bold text-2xl">
        List Book - Counter:
        <span className="text-blue-400 font-bold">&nbsp;{books?.length}</span>
      </div>
      <Link
        href={`/dashboard/book/create`}
        className="w-fit bg-blue-500 p-2 inline-block text-white mb-5 mt-5 rounded-sm hover:bg-blue-900"
      >
        Create
      </Link>
      <table className="w-full border-collapse border-2 border-slate-400">
        <thead className="w-full">
          <tr className="w-full text-center">
            <th className="border-2 border-slate-300">ID</th>
            <th className="border-2 border-slate-300">Book Name</th>
            <th className="border-2 border-slate-300">Publisher</th>
            <th className="border-2 border-slate-300">Publish Year</th>
            <th className="border-2 border-slate-300">Author</th>
          </tr>
        </thead>
        <tbody>
          {books && books.map((book: any) => <Book key={book.id} {...book} />)}
        </tbody>
      </table>
    </div>
  );
}
