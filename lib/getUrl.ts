import { storage } from "@/appwrite";
import { Image } from "@/typings";
import React from "react";

const getUrl = (image: Image) => {
  const url = storage.getFilePreview(image.bucketId, image.fileId);
  return url;
};

export default getUrl;
