import { NextRequest, NextResponse } from "next/server";
import jwt from 'jsonwebtoken';
import { prisma } from '@/lib/prisma';
import bcrypt from 'bcryptjs';

export async function POST(request: NextRequest) {
    try {
        const reqBody = await request.json();
        const {email, password} = reqBody;
        console.log(reqBody);
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if(!user) {
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }
        console.log("user exists", user);
        const validPassword = await bcrypt.compare(password, user.password);
        if(!validPassword) {
            return NextResponse.json({
                error: "Invalid Password"
            }, {
                status: 400
            })
        }
        const tokenData = {
            id: user.id,
            email: user.email,
        }
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
            expiresIn: '1d'
        })
        const response = NextResponse.json({
            message: "Login successful",
            success: true,
        })
        response.cookies.set("token", token, {
            httpOnly: true,
        })
        return response;
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 500})
    }
}