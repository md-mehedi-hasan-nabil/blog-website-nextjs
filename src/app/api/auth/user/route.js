import dbConnect from "@/utils/dbConnect";
import { NextResponse } from "next/server";
import UserModel from "@/models/User.model";
import bcrypt from "bcryptjs";

(async () => {
  await dbConnect();
})();

export async function GET(request) {
  return NextResponse.json({ data: "user" });
}

export async function POST(request) {
  const body = await request.json();
  const { username, email, password } = body;

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  const existUser = await UserModel.findOne({ email });

  if (existUser) {
    return NextResponse.json({
      error: true,
      message: "This email is already use.",
    });
  } else {
    const newUser = new UserModel({ username, email, password: hashPassword });

    await newUser.save();

    return NextResponse.json({
      success: true,
      message: "New account create successful.",
      data: newUser,
    });
  }
}
