import { NextResponse } from "next/server";

const fakeData = {
  documentaries: [
    {
      id: 1,
      title: "The Wonders of the Desert",
      genre: "Nature",
      year: 2021,
      rating: 2.2,
      description:
        "An awe-inspiring journey through the diverse ecosystems of the world's deserts.",
      director: "Sarah Thompson",
      cast: ["Narrator: David Attenborough"],
      poster: "wonders-of-the-desert.jpg",
    },
    {
      id: 2,
      title: "Desert Wildlife",
      genre: "Wildlife",
      year: 2020,
      rating: 5.8,
      description:
        "Exploring the incredible adaptability and survival strategies of desert animals.",
      director: "Michael Green",
      cast: ["Narrator: Jane Goodall"],
      poster: "desert-wildlife.jpg",
    },
    {
      id: 3,
      title: "Human Stories of the Sahara",
      genre: "Human Interest",
      year: 2019,
      rating: 3.4,
      description:
        "Personal stories of resilience and adaptation from the people living in the Sahara desert.",
      director: "Alice Brown",
      cast: ["Narrator: Idris Elba"],
      poster: "stories-of-the-sahara.jpg",
    },
    {
      id: 4,
      title: "The Ancient Desert Civilizations",
      genre: "History",
      year: 2018,
      rating: 4.5,
      description:
        "A historical look at the ancient civilizations that thrived in desert regions.",
      director: "Robert Johnson",
      cast: ["Narrator: Morgan Freeman"],
      poster: "ancient-desert-civilizations.jpg",
    },
    {
      id: 5,
      title: "Desert Mysteries",
      genre: "Mystery",
      year: 2022,
      rating: 6.7,
      description:
        "Unraveling the mysteries and legends hidden in the world's deserts.",
      director: "Emily Wilson",
      cast: ["Narrator: Sigourney Weaver"],
      poster: "desert-mysteries.jpg",
    },
  ],
};

export async function GET() {
  return NextResponse.json(fakeData.documentaries, { status: 200 });
}
