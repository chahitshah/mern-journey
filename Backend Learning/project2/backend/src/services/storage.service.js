import fs from 'fs';
import ImageKit, { toFile } from '@imagekit/nodejs';


const client = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY 
});


export async function uploadFile({buffer,filename,folder = ""})
{
    const file = await client.files.upload({
        file:await toFile(Buffer.from(buffer)),
        fileName:filename,
        folder
    })

    return file
}


