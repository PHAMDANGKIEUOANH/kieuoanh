/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Story(props) {
  const { postModel, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="998px"
      height="961px"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="12px"
      padding="32px 32px 3px 32px"
      backgroundColor="rgba(54,94,61,1)"
      {...getOverrideProps(overrides, "Story")}
      {...rest}
    >
      <Image
        width="unset"
        height="128px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        opacity="0.699999988079071"
        objectFit="cover"
        src="https://i.pinimg.com/736x/b1/ac/32/b1ac32a148aa572495ba37b8397e6093.jpg"
        {...getOverrideProps(overrides, "Banner")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="25px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={postModel?.title}
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(194,202,209,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="934px"
        height="54px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={postModel?.description}
        {...getOverrideProps(overrides, "Description")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(194,202,209,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="662px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={postModel?.body}
        {...getOverrideProps(overrides, "Body")}
      ></Text>
      <View
        width="unset"
        height="0.2px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        border="0.2px SOLID rgba(235,244,241,1)"
        padding="0px 0px 0px 0px"
        opacity="0.20000000298023224"
        {...getOverrideProps(overrides, "Divider")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(194,202,209,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="102px"
        height="30px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={`${postModel?.readTime}${"mins read"}`}
        {...getOverrideProps(overrides, "ReadTime")}
      ></Text>
    </Flex>
  );
}
