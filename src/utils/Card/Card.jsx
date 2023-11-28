import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import "./style.css"
import image from "../../web-development 1.png"
import { Avatar } from "@mui/material";
import { faker } from "@faker-js/faker";
export default function CardComponent({courseName , courseDescription , }) {
  return (
    <div className="max-w-[900px] px-8">

 

    <Card  className="w-full h-[300px] col-span-12 sm:col-span-7">
     
      <Image
        removeWrapper
        alt="Relaxing app background"
        className="z-0 w-full h-full object-cover bg-White"
        src={image}
       
      />
      <CardFooter className="absolute bg bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
        <div className="flex flex-grow gap-2 items-center ">
         
         
          
           <Avatar alt={faker.name.fullName()} src={faker.image.avatar()} />
          
          <div className="flex flex-col ">
            <p className="text-xl text-white">{courseName}</p>
            <p className="text-tiny text-white/60">{courseDescription}</p>
          </div>
        </div>
        <Button  className="bg-white text-[#57007B] " radius="full" size="sm">Get Course</Button>
      </CardFooter>
    </Card>

  </div>
  );
}
