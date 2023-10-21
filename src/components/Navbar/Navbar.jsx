import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "#FACBEA" }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-around" }}>
        <Link to="/">
          <Typography variant="h6" component="div">
            Home/Categorias
          </Typography>
        </Link>
        <NavLink className="navbar-link" to="/products">
          <Typography variant="h6" component="div">
            Productos
          </Typography>
        </NavLink>
        <NavLink className="navbar-link" to="/cart"> {/* Agregado enlace al carrito */}
          <AddShoppingCartIcon />
        </NavLink>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;