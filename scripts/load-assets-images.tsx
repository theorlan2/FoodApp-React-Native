import { Asset } from "expo-asset";

const IMAGE_FOLDER = "@/assets/images/";

export async function loadImage(imageName: string) {
  const imageAsset = await Asset.loadAsync(
    require(`${IMAGE_FOLDER}${imageName}`),
  );
  if (!imageAsset)
    throw new Error(`Couldn't find an image with the name: ${imageName}`);

  return imageAsset;
}
