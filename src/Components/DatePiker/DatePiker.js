import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "./DatePiker.css";
import { Link } from "react-router-dom";
import useReluxContex from "./../../Hooks/useReluxContex";

function DatePiker({ data }) {
  const { user } = useReluxContex();

  const [dateValue, setDateValue] = useState({
    checkInDate: new Date(),
    checkOutDate: new Date(),
  });


  const handleClick = () => {
    const formattedCheckInDate = dayjs(dateValue.checkInDate).format(
      "DD-MM-YYYY"
    );
    const formattedCheckOutDate = dayjs(dateValue.checkOutDate).format(
      "DD-MM-YYYY"
    );

    const allData = {
      image: data.img,
      type: data.text,
      checkInDate: formattedCheckInDate,
      checkOutDate: formattedCheckOutDate,
      userName: user.name,
      userPhoto: user.photo,
      userEmail: user.email,
    };

    fetch("http://localhost:5050/addData", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(allData)
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  };

  return (
    <div className="date-piker-wrap">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <DatePicker
            label="Check In"
            format="DD-MM-YYYY"
            defaultValue={dayjs(dateValue.checkInDate)}
            onChange={(newDate) =>
              setDateValue({ ...dateValue, checkInDate: newDate })
            }
          />
          <DatePicker
            label="Cheak Out"
            defaultValue={dayjs(dateValue.checkInDate)}
            format="DD-MM-YYYY"
            onChange={(newDate) =>
              setDateValue({ ...dateValue, checkOutDate: newDate })
            }
          />
        </DemoContainer>
      </LocalizationProvider>

      <div className="book-btn">
        <p>
          Chouse another bed <Link to="/"> Click Here</Link>
        </p>
        <Link
          to="/profile"
          state={{ date: dateValue, data }}
          className="link btn"
          onClick={handleClick}
        >
          Book Now
        </Link>
      </div>
    </div>
  );
}

export default DatePiker;
