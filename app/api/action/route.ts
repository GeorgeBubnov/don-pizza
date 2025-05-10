import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const token = req.cookies.get("cartToken")?.value;

    await prisma.userAction.create({
      data: {
        userId: null,
        cartToken: token,
        action: body.action,
        label: body.label,
        data: body.data,
        timestamp: new Date(body.timestamp ?? Date.now()),
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("[ACTION_POST] Server error", error);
    return NextResponse.json({ message: "Не удалось отследить действие" }, { status: 500 });
  }
}
