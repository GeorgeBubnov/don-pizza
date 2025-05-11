import { prisma } from "@/prisma/prisma-client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    let token = req.cookies.get("cartToken")?.value;

    if (!token) {
      return NextResponse.json({ error: "No cart token found" }, { status: 400 });
    }

    const userCart = await prisma.cart.findFirst({
      where: {
        token,
        paid: false,
      },
    });

    await prisma.cart.update({
      where: {
        id: userCart?.id,
      },
      data: {
        paid: true,
      },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.log("[Checkout] Error:", error);
    return NextResponse.json({ error: "Server error" });
  }
}
