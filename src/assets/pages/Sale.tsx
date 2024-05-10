import { useEffect, useState } from "react";
import styled from "styled-components";

export default function Sale() {
  const [futureDate, setFutureDate] = useState<Date>(new Date());
  const [currentSeason, setCurrentSeason] = useState<number>(0);

  useEffect(() => {
    const aWeekFromToday = new Date();
    aWeekFromToday.setDate(aWeekFromToday.getDate() + 7);
    setFutureDate(aWeekFromToday);
    setCurrentSeason(getSeason(aWeekFromToday.getMonth()));
  }, []);

  const season = ["Spring", "Summer", "Autumn", "Winter"];

  const getSeason = (month: number) => {
    if (month >= 2 && month <= 4) return 0; // Spring
    else if (month >= 5 && month <= 7) return 1; // Summer
    else if (month >= 8 && month <= 10) return 2; // Autumn
    else return 3; // Winter
  };

  return (
    <Container>
      <SeasonText> {season[currentSeason]} sale</SeasonText>
      <h2>starts {futureDate.toLocaleDateString()}</h2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: calc(var(--margin-xxxlg) + var(--header-height)) 0;
  margin-bottom: var(--margin-xxxlg);

  h2 {
    font-size: var(--font-size-lg);
  }
`;

const SeasonText = styled.h1`
  font-size: var(--font-size-xxxl);
  font-weight: bold;
  font-family: var(--font-primary);
  text-align: center;
  margin-bottom: 1rem;
  color: #ff6f61;
`;
