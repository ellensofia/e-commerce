import { useEffect, useState } from "react";
import styled from "styled-components";
import Categories from "./assets/components/Categories";
import CustomerPick from "./assets/components/CustomerPick";
import Footer from "./assets/components/Footer";
import Header from "./assets/components/Header";
import Hero from "./assets/components/Hero";
import ProductCarousel from "./assets/components/ProductCarousel";
interface Story {
  points: number;
  title: string;
  author: string;
  // Add other properties if needed
}

export default function App() {
  const [stories, setStories] = useState<Story[]>([]);
  const [allStories, setAllStories] = useState<Story[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState("");

  const fetchStories = async () => {
    try {
      const data = await (
        await fetch(
          "https://hn.algolia.com/api/v1/search_by_date?tags=front_page&hitsPerPage=20"
        )
      ).json();
      const stortedStories = data.hits.sort((story: Story, nextStory: Story) =>
        story.points < nextStory.points ? 1 : -1
      );
      setAllStories(stortedStories);
      setStories(stortedStories);
      setError(null);
    } catch (err: any) {
      setError(err?.message ?? "Unknown error");
      setStories([]);
    } finally {
      setLoading(false);
    }
  };

  const updateKeyword = (keyword: string) => {
    const filtered = allStories.filter((story) => {
      return `${story.title.toLowerCase()} ${story.author.toLowerCase()}`.includes(
        keyword.toLowerCase()
      );
    });
    setKeyword(keyword);
    setStories(filtered);
  };

  useEffect(() => {
    fetchStories();
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <StyledLayout>
        <ProductCarousel />
      </StyledLayout>
      <CustomerPick />
      <Categories />
      <Footer />
    </>
  );
}

const StyledLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StoryList = styled.div`
  /* Add styling for the story list */
`;

const StoryItem = styled.div`
  /* Add styling for each story item */
`;
