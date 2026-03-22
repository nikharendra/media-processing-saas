import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import { auth } from "@clerk/nextjs/server";
import {prisma} from "@/lib/prisma";

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  const { userId } = await auth();

  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { publicId, id } = await req.json();

    // 🔥 1. Delete from Cloudinary
    await cloudinary.uploader.destroy(publicId, {
      resource_type: "video",
    });

    // 🔥 2. Delete from Database
    await prisma.video.delete({
      where: { id },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("Delete failed", error);
    return NextResponse.json({ error: "Delete failed" }, { status: 500 });
  }
}