import React from "react";
import { Authenticator, Flex, Heading, Text, useTheme, View } from "@aws-amplify/ui-react";
import Layout from "@/components/Layout";
import Footer from "@/ui-components/Footer";
import Stories from "@/ui-components/Stories";
import Logo from "@/ui-components/Logo";
import { useRouter } from "next/router";  // Import useRouter để điều hướng

function Post() {
  const router = useRouter(); // Khởi tạo useRouter

  const authComponents = {
    Header() {
      const { tokens } = useTheme();
      return (
        <Flex
          justifyContent={"center"}
          direction="column"
          paddingTop={tokens.space.xxxl}
          paddingBottom={tokens.space.xxl}
        >
          <Logo />
        </Flex>
      );
    },
  };

  // Hàm để xử lý Sign Out và điều hướng
  const handleSignOut = (signOut) => {
    signOut(); // Thực hiện đăng xuất
    router.push("http://localhost:3000"); // Chuyển hướng về trang chủ
  };

  return (
    <Authenticator components={authComponents} hideSignUp={true}>
      {({ signOut, user }) => (
        <Layout
          handleClick={() => handleSignOut(signOut)} // Gọi hàm handleSignOut khi nhấn nút
          authText="Sign Out"
          username={"oanh1905nk@gmail.com".split("@")[0]}
        >
          <View marginTop="50px" marginBottom="30px">
            <Heading level={2}>Welcome to our backstage</Heading>
            <Text marginTop="20px">
              Discover stories, thinking, and expertise from writers on any top{" "}
            </Text>
          </View>
          <Stories />
          <View marginTop="50px" marginBottom="50px">
            <Footer />
          </View>
        </Layout>
      )}
    </Authenticator>
  );
}

export default Post;
