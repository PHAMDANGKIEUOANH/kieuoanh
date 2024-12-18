import React from "react";
import Hero from "@/ui-components/Hero";
import Footer from "@/ui-components/Footer";
import Persuade from "@/ui-components/Persuade"
import Testimonies from "@/ui-components/Testimonies"
import { View } from "@aws-amplify/ui-react";
import { Flex } from "@aws-amplify/ui-react";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import { loadStripe } from "@stripe/stripe-js";

function index() {
  const router = useRouter();
  async function handleClick() {
    const stripe = await loadStripe(
      "pk_test_51Mb4GWLlAS7xYcxE7QymmdAW1AVXkt1Pj3uFoEzNdHEuWLlsOqgTcmQJWpkVt6Svd9iL8gqFKuiGoweUtzjBJQS200aUJKytva"
    );
    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: "price_1QLjnmLlAS7xYcxEmUcTmcs8", quantity: 1 }],
      mode: "subscription",
      successUrl: "http://localhost:3000/post",
      cancelUrl: "http://localhost:3000/cancel",
    });
  }
  return (
    <Layout handleClick={() => {router.push("/post");}} authText="Sign Up" username="none">
      <View marginBottom="135px">
      <Hero handleClick={handleClick} /> 
      </View>
      <View>
        <Testimonies />
      </View>
      <Flex justifyContent={"center"}>
        <Persuade banner="https://i.pinimg.com/736x/43/35/e8/4335e88aa5fa108db9b003ccdbb677ac.jpg" />
      </Flex>
      <View marginTop="50px" marginBottom="50px">
        <Footer />
      </View>
    </Layout>
  );
}
export default index;
