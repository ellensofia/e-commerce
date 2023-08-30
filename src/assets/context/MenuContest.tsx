import {
  MouseEvent,
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

interface MenuContextProps {
  menuOpen: boolean;
  toggleMenuOpen: () => void;
  handleLinkClick: () => void;
  //   handleClickOutside: (
  //     event: MouseEvent<HTMLElement, globalThis.MouseEvent>
  //   ) => void;
  burgerMenuClicked: boolean;
  menuRef: React.RefObject<HTMLElement> | undefined;
  burgerRef: React.RefObject<HTMLElement> | undefined;
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
  const [burgerMenuClicked, setBurgerMenuClicked] = useState(false); // Track burger menu click
  const menuRef = useRef<HTMLElement | null>(null);
  const burgerRef = useRef<null | HTMLElement>(null);

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
    toggleMenuOpen();
  };

  // handle click outside
  const handleClickOutside = (event: MouseEvent) => {
    if (menuOpen === true) {
      if (
        !burgerRef.current?.contains(event.target as Node) &&
        !menuRef.current?.contains(event.target as Node)
      ) {
        console.log(event.target);
        console.log(burgerRef);
        console.log(menuRef);
        toggleMenuOpen();

        console.log("first if statement true");
      } else if (
        !menuRef.current?.contains(event.target as Node) &&
        burgerRef.current?.contains(event.target as Node)
      ) {
        console.log("second if statement true");
        setMenuOpen(false);
      }
      //   toggleMenuOpen();
      setBurgerMenuClicked(false); // reset burgerMenyClicked
    }
  };

  useEffect(() => {
    document.addEventListener(
      "mousedown",
      handleClickOutside as unknown as EventListener
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside as unknown as EventListener
      );
    };
  }, [menuOpen]);

  const contextValue: MenuContextProps = {
    menuOpen,
    toggleMenuOpen,
    menuRef: undefined,
    handleLinkClick,
    burgerMenuClicked,
    setMenuOpen,
    burgerRef: undefined,
    // handleClickOutside,
    // setBurgerMenuClicked,
  };

  // handle link click

  return (
    <MenuContext.Provider value={contextValue}>{children}</MenuContext.Provider>
  );
};
