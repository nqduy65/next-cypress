import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import DATA from "@/lib/data";

const columns = [
  {
    accessorKey: "task",
    header: "Task",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "due",
    header: "Due",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "notes",
    header: "Notes",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

const BookTable = () => {
  const [data, setData] = useState(DATA);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return <div></div>;
};
export default BookTable;
