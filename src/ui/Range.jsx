import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value) {
    return `$${value}`;
}

export default function RangeSlider() {
    const [value, setValue] = React.useState([20, 37]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="flex pl-[12px] gap-4 flex-col mb-[30px] w-[80%] ">
            <Box>
                <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    sx={{
                        color: "#46a358",
                        "& .MuiSlider-thumb": {
                            color: "#46a358",
                        },
                        "& .MuiSlider-rail": {
                            color: "#46a358",
                        },
                    }}
                />
            </Box>
            <p className="text-[18px]">
                Price: <span className="text-[--primary] ">$39 - $1230</span>
            </p>

            <p>
                <span className="bg-[--primary]  rounded-md text-white text-[18px] py-2 px-7 hover:opacity-70 ">
                    FIlter
                </span>
            </p>
        </div>
    );
}
