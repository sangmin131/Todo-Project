import React, {
  Component,
  useState,
  useEffect,
  useMemo,
  useCallback,} from "react";
import Year from "react-live-clock";
import Month from "react-live-clock";



const Calendar = () => {
  return <div className="Year-Month">
  <p>🎈
    <span className="Year">
      <Year
        id="Year"
        format={"YYYY"}
        ticking={false}
        timezone={"KR/Pacific"}
      />
    </span>
    &nbsp;&nbsp;
    <span className="Month">
      <Month format={"MM"} ticking={false} timezone={"KR/Pacific"}/>
    </span>
  </p>
</div>;
};

export default Calendar;