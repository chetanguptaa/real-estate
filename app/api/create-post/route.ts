import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if(session === null || session.user === null) {
            return {
                statusCode: 401,
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    message: "Unauthorized",
                }),
            };
        } else {
            const userEmail = session.user!.email as string;
            if(!session) return NextResponse.json({
                error: "please authenticate"
            }) 
            const reqBody = await request.json();
            const {type, location, contact, description, pricePerSqFeet, pricePerMonth, images } = reqBody;
            if(type == "rent") {
                const postData: any = {
                    type,
                    location,
                    contact,
                    description,
                    pricePerMonth,
                    images,
                    user: {
                        connect: {
                            email: userEmail
                        }
                    }
                };
                const newPost = await prisma.post.create({
                    data: postData
                });
                return NextResponse.json({
                    message: "Post created successfully",
                    success: true,
                    newPost
                })
            } else {
                const postData: any = {
                    type,
                    location,
                    contact,
                    description,
                    pricePerSqFeet,
                    images,
                    user: {
                        connect: {
                            email: userEmail
                        }
                    }
                };
                const newPost = await prisma.post.create({
                    data: postData
                });
                return NextResponse.json({
                    message: "Post created successfully",
                    success: true,
                    newPost
                })
            }
        }
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}



/***
 * id             String   @id @default(dbgenerated("concat('pos_', replace(cast(gen_random_uuid() as text), '-', ''))")) @db.Text
  description    String
  userId         String
  createdAt      DateTime @default(now())
  updatedAt      DateTime @updatedAt
  user           User     @relation(fields: [userId], references: [id])
  type           PostType @default(RENT)
  location       String
  contact        String
  pricePerSqFeet Int?
  pricePerMonth  Int?
  images         Image[]
 */