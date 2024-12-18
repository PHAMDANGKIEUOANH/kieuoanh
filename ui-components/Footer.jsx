/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
import Logo from "./Logo";
export default function Footer(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1170px"
      height="32px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(46,72,50,1)"
      {...getOverrideProps(overrides, "Footer")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(239,240,240,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="12.5%"
        bottom="12.5%"
        left="84.1%"
        right="2.05%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="@ Đồ án, HCM, 2024"
        {...getOverrideProps(overrides, "@ \u0110\u1ED3 \u00E1n, HCM, 2024")}
      ></Text>
      <Logo
        width="171px"
        height="32px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="85.38%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      ></Logo>
    </View>
  );
}
