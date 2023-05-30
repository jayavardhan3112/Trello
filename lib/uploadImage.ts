import { ID, storage } from "@/appwrite";
const uploadImage = async (file: File) => {
  if (!file) return;
  const fileUploaded = await storage.createFile(
    "", //storage Bucket ID
    ID.unique(),
    file
  );
  return fileUploaded;
};

export default uploadImage;
