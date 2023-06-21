import styled from "styled-components";

interface Props {
  keyword: string;
  onChange: (keyword: string) => void;
}

export default function SearchBar({ keyword, onChange }: Props) {
  return (
    <SearchInput
      onChange={(e) => onChange(e.target.value)}
      placeholder={"search"}
      key="search-bar"
    />
  );
}

const SearchInput = styled.input`
  background-color: pink;
  position: absolute;
  display: flex;
  align-items: center;
  right: 6rem;
  transition: 0.3s 0.6s ease;
`;
