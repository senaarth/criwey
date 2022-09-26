import React from "react";
import { Menu } from "@mui/material";
import { styled } from "@mui/material/styles";
import { MenuProps } from "@mui/material/Menu";

import { Button } from "./styles";

import imgChevronDown from "../../../assets/images/icon_chevron_down.svg";
import { ProjectItem } from "../ProjectItem";

type NavMenuItem = {
  mainColor: string;
  logo: string;
  description: string;
  link: string;
};

interface DropdownButtonProps {
  label: string;
  menuItems: NavMenuItem[];
}

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "left",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "left",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 0,
    ul: {
      padding: 0,
    },
  },
}));

export function DropdownButton({ label, menuItems }: DropdownButtonProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        type="button"
        className={`${open ? "open" : ""}`}
        onClick={handleClick}
      >
        {label}
        <img src={imgChevronDown} alt="" />
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          "aria-labelledby": "demo-customized-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems?.map((item) => {
          return (
            <ProjectItem
              key={item.link}
              {...item}
              onClick={() => {
                window.open(item.link);
                handleClose();
              }}
            />
          );
        })}
      </StyledMenu>
    </>
  );
}
