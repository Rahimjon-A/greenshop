import React, { useState, useEffect } from "react";
import { data } from "../data/data";
import Card from "./Card";
import { Pagination, Stack } from "@mui/material";

const MainContent = () => {
    const [sort, setSort] = useState(0);
    const [items, setItems] = useState(data);
    const [page, setPage] = useState(1);
    const [sortType, setSortType] = useState("default");
    const itemsPerPage = 9;

    useEffect(() => {
        let sortedItems = [...data];

        if (sortType === "name" || sort == 1) {
            sortedItems.sort((a, b) =>
                a.common_name.localeCompare(b.common_name)
            );
        } else if (sortType === "price" || sort == 2) {
            sortedItems.sort((a, b) => a.price - b.price);
        } else if (sortType === "default" || sort == 0) {
            sortedItems = [...data];
        }
        setItems(sortedItems);
    }, [sortType, sort]);

    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = items.slice(startIndex, endIndex);

    const handleChangePage = (event, value) => {
        setPage(value);
    };

    const handleSortChange = (event) => {
        setSortType(event.target.value);
    };

    return (
        <div className="h-full flex flex-col justify-between">
            <div className="flex justify-between items-center mb-[31px]">
                <ul className="flex gap-[37px]">
                    <li
                        onClick={() => setSort(0)}
                        className={`text-[16px] border-[--primary] duration-300 transition-all cursor-pointer pb-[6px] ${
                            sort === 0
                                ? "text-[--primary] border-b-[3px] font-semibold"
                                : "text-[second]"
                        }`}
                    >
                        All Plants
                    </li>
                    <li
                        onClick={() => setSort(1)}
                        className={`text-[16px] border-[--primary] duration-300 transition-all cursor-pointer pb-[6px] ${
                            sort === 1
                                ? "text-[--primary] border-b-[3px] font-semibold"
                                : "text-[second]"
                        }`}
                    >
                        New Arrivals
                    </li>
                    <li
                        onClick={() => setSort(2)}
                        className={`text-[16px] border-[--primary] duration-300 transition-all cursor-pointer pb-[6px] ${
                            sort === 2
                                ? "text-[--primary] border-b-[3px] font-semibold"
                                : "text-[second]"
                        }`}
                    >
                        Sale
                    </li>
                </ul>

                <div className="flex gap-3 items-center">
                    <span className="text-[18px]">Sort by:</span>
                    <select
                        className="text-[18px] outline-none"
                        value={sortType}
                        onChange={handleSortChange}
                    >
                        <option value="default">Default Sorting</option>
                        <option value="name">By Name (A-Z)</option>
                        <option value="price">By Price</option>
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-3 h-full gap-[33px]">
                {currentItems.map((item) => (
                    <Card key={item.id} item={item} />
                ))}
            </div>

            <div className="flex mt-[30px] justify-end">
                <Stack spacing={2}>
                    <Pagination
                        count={Math.ceil(items.length / itemsPerPage)}
                        page={page}
                        onChange={handleChangePage}
                        variant="outlined"
                        shape="rounded"
                        sx={{
                            "& .MuiPaginationItem-root": {
                                bgcolor: "white",
                                color: "black",
                                "&:hover": {
                                    bgcolor: "#46a358",
                                    color: "white",
                                },
                                "&.Mui-selected": {
                                    bgcolor: "#46a358",
                                    color: "white",
                                },
                            },
                        }}
                    />
                </Stack>
            </div>
        </div>
    );
};

export default MainContent;
