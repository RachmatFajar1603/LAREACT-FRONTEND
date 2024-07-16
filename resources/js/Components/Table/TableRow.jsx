const TableRow = ({ children, isHeader = false }) => (
    <tr className={isHeader ? "bg-gray-50" : "bg-white"}>{children}</tr>
);
export default TableRow;
