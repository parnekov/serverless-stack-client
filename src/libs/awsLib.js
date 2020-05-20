import { Storage } from "aws-amplify";

export async function s3Upload(file) {
  const filename = `${Date.now()}-${file.name}`;

  console.log("file", file);

  const stored = await Storage.vault.put(filename, file, {
    contentType: file.type,
  });
  console.log("stored", stored);

  return stored.key;
}
