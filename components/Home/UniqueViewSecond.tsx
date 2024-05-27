"use client";

import React, { useEffect } from "react";

import useUniqViewSeconds from "@/hooks/useUniqViewSeconds";
import Image from "next/image";
type ViewSecondProps = {
  data: number[][];
};

const UniqueViewSecond = ({ data }: ViewSecondProps) => {
  const { uniqueViewSeconds } = useUniqViewSeconds(data);

  return (
    <div className="wrap">
      <div className="flex-center gap-2">
        <h1 className="clr-white">Betamind - Quick Coding Test</h1>
      </div>

      <h2 className="clr-primary">Original Data</h2>
      <div className="original">Data: {JSON.stringify(data)}</div>

      <div className="divider"></div>

      <h2 className="clr-primary">Formatted Data</h2>
      <div className="formatted bold">
        Data: {JSON.stringify(uniqueViewSeconds)}
      </div>
    </div>
  );
};

export default UniqueViewSecond;
