import React from "react";
import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Image,
} from "@nextui-org/react";

interface PlantCardProps {
  plant: {
    default_image: {
      original_url: string;
    };
    common_name: string;
    scientific_name: string;
    id: any;
    // Add other properties as needed
  };
}
import Link from "next/link";
const PlantCard: React.FC<PlantCardProps> = ({ plant }) => {
  const regularUrl = plant.default_image && plant.default_image.original_url;
  console.log(regularUrl);
  return (
    <Link href={`/plant/${plant.id}`} className="col-span-1 m-1">
      <Card className="p-0 h-full w-[200px]" isPressable>
        <CardBody className="overflow-visible p-5">
          {regularUrl !== null &&
          regularUrl !==
            "https://perenual.com/storage/image/upgrade_access.jpg" ? (
            <Image
              shadow="sm"
              radius="lg"
              alt={plant.common_name}
              className="object-cover h-[140px] w-[200px]"
              src={regularUrl}
              isZoomed
              isBlurred
            />
          ) : (
            <Image
              shadow="sm"
              radius="lg"
              alt={plant.common_name}
              className="object-cover h-[140px] w-[200px]"
              src="https://st4.depositphotos.com/32990740/41533/v/450/depositphotos_415335606-stock-illustration-gardening-concept-plant-in-a.jpg"
              isZoomed
              isBlurred
            />
          )}
        </CardBody>
        <CardFooter className="flex-col text-small justify-between">
          <b>{plant.common_name}</b>
          <p className="text-default-500">{plant.scientific_name}</p>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PlantCard;
