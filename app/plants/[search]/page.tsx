/* eslint-disable @next/next/no-async-client-component */
"use client";
import getPerenualPlants from "@/lib/getPerenualPlants";
import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Image,
} from "@nextui-org/react";
import Link from "next/link";

type Params = {
  params: {
    search: string;
  };
};

export default async function PlantSearchPage({ params: { search } }: Params) {
  const PerenualData: Promise<PerenualPlant[]> = getPerenualPlants(search);
  const plants = await PerenualData;
  console.log(plants);
  const PlantCard = (
    <section>
      <h2>Perenual Plants</h2>
      <br></br>
      <div>
        {plants.map((plant) => (
          <Link
            key={plant.id}
            href={`/plant/${plant.id}`}
            className="col-span-1 m-1"
          >
            <Card className="p-0 h-full w-[200px]" isPressable>
              <CardBody className="overflow-visible p-5"></CardBody>
              <CardFooter className="flex-col text-small justify-between">
                <b>{plant.common_name}</b>
                <p className="text-default-500">{plant.scientific_name}</p>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
  return PlantCard;
}
