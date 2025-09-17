import { useState, useEffect } from "react";
import { formatDate, formatTime } from "../utils/helpers";
import { DATE_TIME_CONFIG } from "../utils/constants";
import type { NavigationState } from "../types";

export function useDateTime(): NavigationState {
  const [dateTime, setDateTime] = useState<NavigationState>({
    currentDate: "",
    currentTime: "",
  });

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setDateTime({
        currentDate: formatDate(now),
        currentTime: formatTime(now),
      });
    };

    // Update immediately
    updateDateTime();

    // Update every minute
    const interval = setInterval(updateDateTime, DATE_TIME_CONFIG.UPDATE_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  return dateTime;
}