import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

type PlayCountData = number;

const PlayCount: React.FC = () => {
  const { t } = useTranslation();
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    const fetchPlayCount = async () => {
      try {
        const response = await fetch("/.netlify/functions/getPlayCount", {
          method: "GET",
        });
        const data = (await response.json()) as PlayCountData;

        if (response.ok) {
          setCount(data);
        } else {
          console.error("Failed to fetch play count:", data);
        }
      } catch (error) {
        console.error("Error fetching play count:", error);
      }
    };

    fetchPlayCount().catch((error) => {
      console.error("Error fetching play count:", error);
    });
  }, []);

  return (
    <div>
      <h2>
        {t("playCount")}: {count}
      </h2>
    </div>
  );
};

export default PlayCount;
