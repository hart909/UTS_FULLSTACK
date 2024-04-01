import React from "react";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import GlobalLoading from "../common/GlobalLoading";
import Topbar from "../common/Topbar";
import Footer from "../common/Footer";
import AuthModal from "../common/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import userApi from "../../api/modules/user.api";
import favoriteApi from "../../api/modules/favorite.api"
import { setListFavorites, setUser } from "../../redux/features/userSlice";
const MainLayout = () => {
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.user)

  useEffect(() =>{
    const authUser = async () => {
      const { response, err} = await userApi.getInfo();

      if (response) setUser(response)
      if (err) setUser (null)
    }
  })
  return (
    <>
      {/* globalloading */}
      <GlobalLoading />
      {/* globalloading */}
      
      {/* login modal */}
      <AuthModal />
      {/* login modal */}

      <Box display="flex" minHeight="100vh">
        {/* header */}
        <Topbar />
        {/* header */}

        {/* main */}
        <Box component="main" flexGrow={1} overflow="hidden" minHeight="100vh">
          <Outlet />
        </Box>
        {/* main */}
      </Box>

      {/* footer */}
      <Footer />
      {/* footer */}
    </>
  );
};

export default MainLayout;
