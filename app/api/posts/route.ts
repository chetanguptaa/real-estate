import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(request: Request) {
    const posts = await prisma.post.findMany();
    return new NextResponse(JSON.stringify(posts));
}