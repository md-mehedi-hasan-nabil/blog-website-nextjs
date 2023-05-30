import { NextResponse } from "next/server";

export async function GET(request) {
    return NextResponse.json([
        {
            "id": 1,
            "title": "Introduction to Machine Learning",
            "author": "John Doe",
            "date": "2022-07-15",
            "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
            "tags": ["machine learning", "artificial intelligence"],
            "views": 1250,
            "likes": 78,
            "image": "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
            "comments": [
                {
                    "id": 1,
                    "user": "Jane Smith",
                    "comment": "Great introduction! Looking forward to more.",
                    "date": "2022-07-16"
                },
                {
                    "id": 2,
                    "user": "Michael Brown",
                    "comment": "Very informative. Thanks for sharing!",
                    "date": "2022-07-17"
                }
            ]
        },
        {
            "id": 2,
            "title": "The Power of Data Visualization",
            "author": "Jane Smith",
            "date": "2022-09-03",
            "content": "Nulla facilisi. Nam vitae dapibus metus...",
            "tags": ["data visualization", "analytics"],
            "views": 820,
            "likes": 42,
            "image": "",
            "comments": [
                {
                    "id": 1,
                    "user": "John Doe",
                    "comment": "Amazing visuals! Thanks for sharing the insights.",
                    "date": "2022-09-04"
                },
                {
                    "id": 2,
                    "user": "Sarah Davis",
                    "comment": "I learned a lot from this article. Great job!",
                    "date": "2022-09-05"
                }
            ]
        },
        {
            "id": 3,
            "title": "Beginner's Guide to Python Programming",
            "author": "David Johnson",
            "date": "2022-11-20",
            "content": "Etiam auctor urna magna, ac tristique velit...",
            "tags": ["python", "programming", "beginner"],
            "views": 1530,
            "likes": 92,
            "image": "",
            "comments": [
                {
                    "id": 1,
                    "user": "Emily Wilson",
                    "comment": "Clear and concise guide. Thanks for sharing!",
                    "date": "2022-11-21"
                },
                {
                    "id": 2,
                    "user": "Michael Brown",
                    "comment": "This helped me get started with Python. Great work!",
                    "date": "2022-11-22"
                }
            ]
        },
        {
            "id": 4,
            "title": "Deep Dive into Neural Networks",
            "author": "Emily Wilson",
            "date": "2023-01-10",
            "content": "Praesent ullamcorper nisl nec tortor...",
            "tags": ["neural networks", "deep learning"],
            "views": 980,
            "likes": 67,
            "image": "",
            "comments": [
                {
                    "id": 1,
                    "user": "John Doe",
                    "comment": "Fascinating read. Can't wait for the next part!",
                    "date": "2023-01-11"
                },
                {
                    "id": 2,
                    "user": "Sarah Davis",
                    "comment": "In-depth explanation. Thanks for sharing your knowledge!",
                    "date": "2023-01-12"
                }
            ]
        }, {
            "id": 5,
            "title": "Building Web Applications with React",
            "author": "Michael Brown",
            "date": "2023-03-05",
            "content": "Vestibulum maximus nunc ac neque...",
            "tags": ["web development", "react", "javascript"],
            "views": 1160,
            "likes": 53,
            "image": "",
            "comments": [
                {
                    "id": 1,
                    "user": "Jane Smith",
                    "comment": "Great tutorial! Helped me get started with React.",
                    "date": "2023-03-06"
                },
                {
                    "id": 2,
                    "user": "David Johnson",
                    "comment": "Informative article. Thanks for sharing!",
                    "date": "2023-03-07"
                }
            ]
        },
        {
            "id": 6,
            "title": "Introduction to Cloud Computing",
            "author": "Sarah Davis",
            "date": "2023-04-12",
            "content": "Sed vehicula dolor id malesuada...",
            "tags": ["cloud computing", "technology"],
            "views": 1350,
            "likes": 82,
            "image": "",
            "comments": [
                {
                    "id": 1,
                    "user": "John Doe",
                    "comment": "Great overview of cloud computing. Looking forward to more!",
                    "date": "2023-04-13"
                },
                {
                    "id": 2,
                    "user": "Emily Wilson",
                    "comment": "This article clarified a lot of my doubts. Thank you!",
                    "date": "2023-04-14"
                }
            ]
        },
        {
            "id": 7,
            "title": "Mastering Data Structures in Java",
            "author": "Jane Smith",
            "date": "2023-05-01",
            "content": "Integer vitae elit at leo finibus sagittis...",
            "tags": ["data structures", "java", "programming"],
            "views": 980,
            "likes": 45,
            "image": "",
            "comments": [
                {
                    "id": 1,
                    "user": "Michael Brown",
                    "comment": "Invaluable resource for Java developers. Thank you!",
                    "date": "2023-05-02"
                },
                {
                    "id": 2,
                    "user": "David Johnson",
                    "comment": "This helped me improve my understanding of data structures. Great work!",
                    "date": "2023-05-03"
                }
            ]
        },
        {
            "id": 8,
            "title": "Introduction to Cybersecurity",
            "author": "David Johnson",
            "date": "2023-06-18",
            "content": "Curabitur at magna id velit luctus lacinia...",
            "tags": ["cybersecurity", "information security"],
            "views": 750,
            "likes": 32,
            "image": "",
            "comments": [
                {
                    "id": 1,
                    "user": "Sarah Davis",
                    "comment": "Great introduction to cybersecurity. Looking forward to more topics!",
                    "date": "2023-06-19"
                },
                {
                    "id": 2,
                    "user": "John Doe",
                    "comment": "Informative and well-explained. Thanks for sharing!",
                    "date": "2023-06-20"
                }
            ]
        }
    ]);
}