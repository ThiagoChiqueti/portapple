"use client";
import api from "@/services/api";
import { useEffect, useState } from "react";
import numeral from "numeral";

const BitcoinAPI = () => {
  const [bitData, setBitData] = useState();

  useEffect(() => {
    const coinData = () => {
      api
        .get(`BTC-BRL`)
        .then((response) => {
          setBitData(response.data);
          console.log(response.data);
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    };

    coinData();

    const interval = setInterval(() => {
      coinData();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const bitPrice = numeral(bitData?.['BTCBRL']['bid']).format("($0,0[.]00)");

  return bitData?.['BTCBRL']['varBid']! < 0 ? (
    <p className="text-red-400">BTC-BRL {bitPrice}</p>
  ) : (
    <p className="text-emerald-400">BTC-BRL {bitPrice}</p>
  );
};

export default BitcoinAPI;
