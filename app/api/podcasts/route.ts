import { NextResponse } from "next/server";

const fakeData = {
  podcasts: [
    {
      id: 1,
      title: "Desert Diaries",
      genre: "Travel",
      year: 2023,
      rating: 4.8,
      description:
        "Exploring the hidden gems and stories from the world's most intriguing deserts.",
      host: "Anna Sanderson",
      episodes: 12,
      coverImage: "desert-diaries.jpg",
    },
    {
      id: 2,
      title: "Wildlife Wonders",
      genre: "Nature",
      year: 2022,
      rating: 4.7,
      description:
        "A deep dive into the lives and habitats of desert wildlife.",
      host: "David Attenborough",
      episodes: 20,
      coverImage: "wildlife-wonders.jpg",
    },
    {
      id: 3,
      title: "Sahara Stories",
      genre: "Culture",
      year: 2021,
      rating: 4.9,
      description:
        "Captivating tales and interviews with the people living in and around the Sahara desert.",
      host: "Idris Elba",
      episodes: 15,
      coverImage: "sahara-stories.jpg",
    },
    {
      id: 4,
      title: "Desert Mysteries",
      genre: "Mystery",
      year: 2020,
      rating: 4.6,
      description:
        "Uncovering the mysteries and legends hidden in the deserts around the globe.",
      host: "Sigourney Weaver",
      episodes: 10,
      coverImage: "desert-mysteries-podcast.jpg",
    },
    {
      id: 5,
      title: "Ancient Desert Civilizations",
      genre: "History",
      year: 2019,
      rating: 4.8,
      description:
        "Exploring the ancient civilizations that thrived in desert regions.",
      host: "Morgan Freeman",
      episodes: 18,
      coverImage: "ancient-desert-civilizations-podcast.jpg",
    },
  ],
};

export async function GET() {
  return NextResponse.json(fakeData.podcasts, { status: 200 });
}
