import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json([
        {
            "id": 1,
            "name": "Technology"
        },
        {
            "id": 2,
            "name": "Health"
        },
        {
            "id": 3,
            "name": "Travel"
        },
        {
            "id": 4,
            "name": "Recipes"
        },
        {
            "id": 5,
            "name": "Fashion"
        },
        {
            "id": 6,
            "name": "Productivity"
        },
        {
            "id": 7,
            "name": "Reviews"
        }
    ]);
}