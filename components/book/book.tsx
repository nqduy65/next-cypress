import Link from "next/link";
import { BookModel } from "@/types";

export default function Book(params: BookModel) {
  return (
    <tr>
      <td className="w-10 border-2 border-slate-300 text-center">
        {params.id}
      </td>
      <td className="border-2 border-slate-300">{params.bookName}</td>
      <td className="border-2 border-slate-300 text-center">
        {params.publishBy}
      </td>
      <td className="border-2 border-slate-300 text-center">
        {params.publishYear}
      </td>
      <td className="w-52 border-2 border-slate-300">
        <span
          //   onClick={() => {}}
          className="bg-red-500 p-2 inline-block text-white text-sm"
        >
          Delete
        </span>
        <Link
          href={`/dashboard/book/edit`}
          className="bg-yellow-500 p-2 inline-block ml-3 text-white text-sm"
        >
          Edit
        </Link>
        <Link
          href={``}
          className="bg-yellow-500 p-2 inline-block ml-3 text-white text-sm"
        >
          View
        </Link>
      </td>
    </tr>
  );
}
