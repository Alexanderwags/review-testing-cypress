import { AnyARecord } from "dns";
import React from "react";
import useSWR from "swr";
import LazyLoad from "react-lazyload";
const fetcher = async (args: any) => {
  let response = await fetch(args);
  return response.json();
};
export const Crimes = () => {
  const url =
    "https://data.police.uk/api/crimes-street/all-crime?lat=52.629729&lng=-1.131592&date=2019-10";
  const { error, data } = useSWR(url, fetcher, { revalidateOnFocus: false });
  if (error) return <>Error... oh my God</>;
  if (!data) return <>loading...</>;
  let obj: any = {};

  return (
    <LazyLoad>
      <pre>
        {JSON.stringify(data, null, 2)}
        {console.log(obj.first && obj.first.second)}
      </pre>
    </LazyLoad>
  );
};
