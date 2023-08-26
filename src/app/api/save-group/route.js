import { NextResponse } from "next/server";
import { v4 as uuidv4 } from "uuid";
import { Upload } from "@aws-sdk/lib-storage";
import { S3Client } from "@aws-sdk/client-s3";
import { decodeToken } from "@/helper/sessionHelper";
import { updateOne } from "@/helper/dynamoDb";

const s3Client = new S3Client({
  region: "ap-southeast-1",
  credentials: {
    accessKeyId: process.env.ACCESS_KEY_ID,
    secretAccessKey: process.env.ACCESS_KEY_SECRET,
  },
});

export async function POST(request) {
  const { newGroup, image } = await request.json();

  try {
    const user = decodeToken(request) || {};
    const { base64 } = image
    console.log(base64)
    const base64Data = base64.replace(/^data:image\/\w+;base64,/, "");
    const imageBuffer = Buffer.from(base64Data, "base64");
    const fileType = base64
      .substring("data:".length, base64.indexOf(";base64"))
      .split("/")[1];

    const fileName = `${uuidv4()}.${fileType}`;

    console.log({
      Bucket: process.env.BUCKET_ISSUER_DOCUMENTS,
      Key: fileName,
      Body: imageBuffer,
    })
    
    const checkUpload = new Upload({
      client: s3Client,
      params: {
        Bucket: process.env.BUCKET_ISSUER_DOCUMENTS,
        Key: fileName,
        Body: imageBuffer,
      },
    });

    await checkUpload.done();

    const documentItem = {
      pk: "groups",
      sk: new Date().toISOString(),
      author: user.name,
      gsi1: user.email,
      name: newGroup.name,
      description: newGroup.description,
      image: `${process.env.BUCKET_ISSUER_URL}/${fileName}`,
      url: newGroup.url,
      members: [{ name: user.name, email: user.email }],
    };

    await updateOne({ tableName: "Nitalogy", item: documentItem });
    return NextResponse.json({ success: true, documentItem });
  } catch (err) {
    console.error("++++++");
    console.error(err);
    console.error("++++++");
  }
}
