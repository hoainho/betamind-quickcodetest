import { ApiResponse, fetchData } from "@/actions/fetchViewSeconds";
import UniqueViewSecond from "@/components/Home/UniqueViewSecond";
import { NextApiResponse } from "next";
import Image from "next/image";
import { Suspense } from "react";

type Props = {};

const DefaultPage = async (props: Props) => {
  try {
    const data: ApiResponse = await fetchData();
    return (
      <Suspense
        fallback={
          <div className="flex-center">
            <h1 className="clr-white">Betamind</h1>
          </div>
        }
      >
        <UniqueViewSecond data={data.numbers} />
      </Suspense>
    );
  } catch (error) {
    if (error instanceof Error)
      return (
        <div className="w-full h-full flex-center">
          <h2 className="clr-primary">Something went wrong!</h2>
        </div>
      );
  }
};

export default DefaultPage;
