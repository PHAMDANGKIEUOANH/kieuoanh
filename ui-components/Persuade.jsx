/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Persuade(props) {
  const { banner, handleClick, overrides, ...rest } = props;
  return (
    <Flex
      gap="33px"
      direction="column"
      width="1110px"
      height="864px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="24px"
      padding="70px 0px 70px 0px"
      backgroundColor="rgba(54,94,61,1)"
      {...getOverrideProps(overrides, "Persuade")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="40px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="50px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="801px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Join me behind the scenes for unlimited access to how I solve data challenges and optimize solutions."
        {...getOverrideProps(
          overrides,
          "Join me behind the scenes for unlimited access to how I solve data challenges and optimize solutions."
        )}
      ></Text>
      <Flex
        gap="0"
        direction="row"
        width="219px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(0,0,0,0)"
        borderRadius="4px"
        padding="7px 15px 7px 15px"
        backgroundColor="rgba(226,98,24,1)"
        {...getOverrideProps(overrides, "Button")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Become a Reader"
          {...getOverrideProps(overrides, "label")}
        ></Text>
      </Flex>
      <Image
        width="930px"
        height="455px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        border="1px SOLID rgba(126,128,131,0.38)"
        borderRadius="16px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={banner}
        {...getOverrideProps(overrides, "Banner")}
      ></Image>
    </Flex>
  );
}
