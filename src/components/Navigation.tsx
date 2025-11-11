import { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputBase from "@mui/material/InputBase";
import { useLanguage } from "../hooks/useContextLanguage";

const drawerWidth = 240;

function Navigation({ parentToChild, modeChange }: any) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

 

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.getElementById("navigation");
      if (navbar) {
        const isScrolled = window.scrollY > navbar.clientHeight;
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (section: string) => {
    console.log(section)
    const el = document.getElementById(section);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const drawer = (
    <Box
      className="navigation-bar-responsive"
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center" }}
    >
      <p className="mobile-menu-top">
        <ListIcon />
        {language === "en" ? "Menu" : "Menú"}
      </p>
      <Divider />
      <List>
        {Object.entries(t.nav).map(([key, value]) =>  {
          return (
            <ListItem key={key} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                onClick={() => scrollToSection(key)}
              >
                <ListItemText primary={value} />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        id="navigation"
        className={`navbar-fixed-top${scrolled ? " scrolled" : ""}`}
      >
        <Toolbar
          className="navigation-bar"
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          {/* Menú móvil */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          {/* Navegación principal */}
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {Object.entries(t.nav).map(([key, value]) =>  (
              <Button
                key={key}
                onClick={() => scrollToSection(key)}
                sx={{ color: "#fff" }}
              >
                {value}
              </Button>
            ))}
          </Box>

          {/* 🌐 Selector de idioma */}
          <Select
            value={language}
            onChange={(e) => setLanguage(e.target.value as "en" | "es")}
            input={<InputBase />}
            sx={{
              ml: 2,
              color: "#fff",
              backgroundColor: "transparent",
              "& .MuiSelect-icon": { color: "#fff" },
              "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            }}
          >
            <MenuItem value="en">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img
                  src="https://flagcdn.com/w20/us.png"
                  alt="English"
                  style={{ width: 20, height: 14, borderRadius: 2 }}
                />
                EN
              </Box>
            </MenuItem>
            <MenuItem value="es">
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <img
                  src="https://flagcdn.com/w20/es.png"
                  alt="Español"
                  style={{ width: 20, height: 14, borderRadius: 2 }}
                />
                ES
              </Box>
            </MenuItem>
          </Select>
        </Toolbar>
      </AppBar>

      {/* Drawer móvil */}
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

export default Navigation;
