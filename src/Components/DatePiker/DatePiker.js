import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import "./DatePiker.css"
import { Link, useLocation } from "react-router-dom";

function DatePiker({data}) {
  const [dateValue,setDateValue] = useState({
    checkInDate : new Date(),
    checkOutDate : new Date()
  })
  console.log(data)
  return (
    <div className="date-piker-wrap">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DatePicker", "DatePicker"]}>
          <DatePicker
            label="Check In"
            format="DD-MM-YYYY"
            defaultValue={dayjs(dateValue.checkInDate)}
            onChange={(newDate) => setDateValue({...dateValue,checkInDate : newDate})}
          />
          <DatePicker  label="Cheak Out"
           defaultValue={dayjs(dateValue.checkInDate)}
           format= "DD-MM-YYYY"
           onChange={(newDate) => setDateValue({...dateValue,checkOutDate : newDate})}
          />
        </DemoContainer>
      </LocalizationProvider>

      <div className="book-btn">
        <p>Chouse another bed <Link to="/"> Click Here</Link></p>
        <Link to="/profile" state={{date:dateValue,data}} className="link btn">Book Now</Link>
      </div>
    </div>
  );
}

export default DatePiker;
