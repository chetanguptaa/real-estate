import { NextRequest, NextResponse } from "next/server";
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if(user){
            return NextResponse.json({error: "User already exists"}, {status: 400})
        }
        const salt: string = await bcrypt.genSalt(10);
        const hashedPassword: string = await bcrypt.hash(password, salt);
        const newUser = await prisma.user.create({
            data: {
                email: email,
                password: hashedPassword
            }
        });
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            newUser
        })
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}