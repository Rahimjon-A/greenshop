import React, { useState } from "react";
import { data } from "../data/data";
import Card from "./Card";
import { Pagination, Stack } from "@mui/material";



const MainContent = () => {
    const [sort, setSort] = useState(0);
    const [items, setItems] = useState(data);
    const [page, setPage] = useState(1);
    const itemsPerPage = 9; // Adjust this value based on your layout

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    return (
        <div>
            <div className="flex justify-between items-center mb-[31px] ">
                <ul className="flex gap-[37px] ">
                    <li
                        onClick={() => setSort(0)}
                        className={` text-[16px] border-[--primary] duration-300 transition-all cursor-pointer pb-[6px] ${
                            sort === 0
                                ? "text-[--primary] border-b-[3px]  font-semibold"
                                : "text-[second] "
                        } `}
                    >
                        All Plants
                    </li>
                    <li
                        onClick={() => setSort(1)}
                        className={` text-[16px] border-[--primary] duration-300 transition-all cursor-pointer pb-[6px] ${
                            sort === 1
                                ? "text-[--primary] border-b-[3px]  font-semibold"
                                : "text-[second] "
                        } `}
                    >
                        New Arrivals
                    </li>
                    <li
                        onClick={() => setSort(2)}
                        className={` text-[16px] border-[--primary] duration-300 transition-all cursor-pointer pb-[6px] ${
                            sort === 2
                                ? "text-[--primary] border-b-[3px]  font-semibold"
                                : "text-[second] "
                        } `}
                    >
                        Sale
                    </li>
                </ul>
                <div className="flex gap-3 items-center">
                    <span className="text-[18px] ">Sort by:</span>
                    <select className="text-[18px] outline-none ">
                        <option value="default">Default Sorting</option>
                        <option value="price">By Price</option>
                        <option value="amount">By Amount</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-[33px] ">
                {currentItems.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>
            <div className="flex justify-end">
                <Stack spacing={2}>
                    <Pagination
                        count={Math.ceil(items.length / itemsPerPage)}
                        page={page}
                        onChange={handleChangePage}
                        variant="outlined"
                        shape="rounded"
                    />
                </Stack>
            </div>
        </div>
    );
};

export default MainContent;