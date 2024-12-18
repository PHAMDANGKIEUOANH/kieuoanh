// components/Layout.js
import React from "react";
import { View } from "@aws-amplify/ui-react";
import Nav from "@/ui-components/Nav";

function Layout({ children, authText, handleClick, username }) {
  // Kiểm tra nếu username là chuỗi và không rỗng
  const avatar = username && username.length > 0 ? username.split("")[0].toUpperCase() : "";

  return (
    <View width="1200px" marginLeft="auto" marginRight="auto">
      <Nav
        marginTop={"20px"}
        handleAuth={handleClick}
        authText={authText}
        username={username}
        avatar={avatar}
      />
      {children}
    </View>
  );
}

export default Layout;
