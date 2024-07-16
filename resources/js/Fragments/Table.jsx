import TableCell from "@/Components/Table/TableCell";
import TableHeader from "@/Components/Table/TableHeader";
import TableRow from "@/Components/Table/TableRow";
import React from "react";

const Table = ({ headers, data, keyExtractor }) => {
    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <TableRow isHeader={true}>
                        {headers.map((header, index) => (
                            <TableHeader key={index}>{header}</TableHeader>
                        ))}
                    </TableRow>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {data.map((row, rowIndex) => (
                        <TableRow
                            key={keyExtractor ? keyExtractor(row) : rowIndex}
                        >
                            {Object.values(row).map((cell, cellIndex) => (
                                <TableCell key={cellIndex}>{cell}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
