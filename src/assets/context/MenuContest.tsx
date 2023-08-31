import { createContext, useContext, useEffect, useState } from "react";

interface MenuContextProps {
  menuOpen: boolean;
  toggleMenuOpen: () => void;
  handleLinkClick: () => void;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MenuProviderProps {
  children: React.ReactNode;
}

// create context
const MenuContext = createContext<MenuContextProps | undefined>(undefined);

// useContext
export const useMenuContext = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }
  return context;
};

export const MenuProvider: React.FC<MenuProviderProps> = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenuOpen = () => {
    setMenuOpen((prevMenuOpen) => (prevMenuOpen === true ? false : true));
  };

  // close menu by default on bigger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  const contextValue: MenuContextProps = {
    menuOpen,
    toggleMenuOpen,
    handleLinkClick,
    setMenuOpen,
  };

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};
