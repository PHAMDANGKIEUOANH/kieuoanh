/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Icon, Text } from "@aws-amplify/ui-react";
export default function Hero(props) {
  const { handleClick, overrides, ...rest } = props;
  return (
    <Flex
      gap="72px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="24px 24px 24px 24px"
      backgroundColor="rgba(54,94,61,1)"
      {...getOverrideProps(overrides, "Hero")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="48px"
        fontWeight="600"
        color="rgba(255,255,255,1)"
        lineHeight="60px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="530px"
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
        gap="25px"
        direction="row"
        width="363px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Button Area")}
      >
        <Button
          width="219px"
          height="40px"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Become a Reader"
          onClick={handleClick}
          {...getOverrideProps(overrides, "Button")}
        ></Button>
        <Flex
          gap="4px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 5588")}
        >
          <Icon
            width="24px"
            height="24px"
            viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
            paths={[
              {
                d: "M2.57143 0C1.88944 6.24125e-16 1.23539 0.273358 0.753154 0.759939C0.270918 1.24652 7.13715e-16 1.90647 0 2.59459L3.33067e-16 12.973C9.04039e-16 13.6611 0.270918 14.321 0.753154 14.8076C1.23539 15.2942 1.88944 15.5676 2.57143 15.5676L21.4286 15.5676C22.1106 15.5676 22.7646 15.2942 23.2468 14.8076C23.7291 14.321 24 13.6611 24 12.973L24 2.59459C24 1.90647 23.7291 1.24652 23.2468 0.759939C22.7646 0.273358 22.1106 5.52111e-16 21.4286 1.44029e-16L2.57143 0ZM13.0714 2.51503C13.0714 2.22831 12.9585 1.95333 12.7576 1.75059C12.5567 1.54785 12.2842 1.43395 12 1.43395C11.7158 1.43395 11.4433 1.54785 11.2424 1.75059C11.0415 1.95333 10.9286 2.22831 10.9286 2.51503L10.9286 3.20692C10.3116 3.27986 9.74029 3.57108 9.31602 4.02886C8.89174 4.48664 8.64201 5.08133 8.61118 5.70731C8.58034 6.3333 8.7704 6.95005 9.14759 7.44801C9.52479 7.94598 10.0647 8.29293 10.6714 8.42724L12.7234 8.8787C12.8886 8.91033 13.036 9.00361 13.136 9.13995C13.2361 9.27629 13.2816 9.44568 13.2635 9.61435C13.2453 9.78302 13.1648 9.9386 13.038 10.0501C12.9113 10.1615 12.7475 10.2207 12.5794 10.2158L11.4206 10.2158C11.2819 10.2163 11.1466 10.1732 11.0332 10.0926C10.9199 10.0121 10.8342 9.89794 10.788 9.76605C10.6867 9.5049 10.4888 9.29369 10.2361 9.177C9.98334 9.06031 9.69556 9.04728 9.43349 9.14067C9.17141 9.23405 8.95556 9.42653 8.8315 9.67748C8.70743 9.92843 8.68487 10.2182 8.76857 10.4856C9.10114 11.437 9.92229 12.1548 10.9286 12.3347L10.9286 13.0525C10.9286 13.3393 11.0415 13.6142 11.2424 13.817C11.4433 14.0197 11.7158 14.1336 12 14.1336C12.2842 14.1336 12.5567 14.0197 12.7576 13.817C12.9585 13.6142 13.0714 13.3393 13.0714 13.0525L13.0714 12.333C13.7128 12.2183 14.2949 11.8826 14.7183 11.3832C15.1417 10.8838 15.3802 10.2516 15.3932 9.59445C15.4061 8.93735 15.1927 8.29607 14.7893 7.78006C14.3859 7.26405 13.8175 6.90528 13.1811 6.76497L11.1291 6.31351C11.0122 6.28875 10.9086 6.22102 10.8383 6.12348C10.7681 6.02593 10.7363 5.90554 10.7491 5.78567C10.762 5.66581 10.8185 5.55503 10.9077 5.47484C10.9969 5.39466 11.1125 5.3508 11.232 5.35178L12.5794 5.35178C12.7181 5.35132 12.8534 5.39435 12.9668 5.47492C13.0801 5.5555 13.1658 5.66963 13.212 5.80151C13.2553 5.93981 13.3257 6.06789 13.4191 6.17816C13.5124 6.28842 13.6268 6.37861 13.7554 6.44334C13.884 6.50808 14.0243 6.54604 14.1677 6.55497C14.3112 6.5639 14.4549 6.54362 14.5905 6.49533C14.726 6.44704 14.8505 6.37173 14.9566 6.27388C15.0627 6.17603 15.1482 6.05765 15.208 5.92577C15.2678 5.7939 15.3007 5.65123 15.3047 5.50627C15.3087 5.3613 15.2838 5.217 15.2314 5.08195C15.0658 4.60842 14.7786 4.18773 14.3991 3.86286C14.0196 3.538 13.5614 3.3206 13.0714 3.23286L13.0714 2.51503ZM4.71429 6.48649C5.05528 6.48649 5.38231 6.62317 5.62342 6.86646C5.86454 7.10975 6 7.43972 6 7.78378C6 8.12785 5.86454 8.45782 5.62342 8.70111C5.38231 8.9444 5.05528 9.08108 4.71429 9.08108C4.37329 9.08108 4.04627 8.9444 3.80515 8.70111C3.56403 8.45782 3.42857 8.12785 3.42857 7.78378C3.42857 7.43972 3.56403 7.10975 3.80515 6.86646C4.04627 6.62317 4.37329 6.48649 4.71429 6.48649ZM19.2857 6.48649C19.6267 6.48649 19.9537 6.62317 20.1949 6.86646C20.436 7.10975 20.5714 7.43972 20.5714 7.78378C20.5714 8.12785 20.436 8.45782 20.1949 8.70111C19.9537 8.9444 19.6267 9.08108 19.2857 9.08108C18.9447 9.08108 18.6177 8.9444 18.3766 8.70111C18.1355 8.45782 18 8.12785 18 7.78378C18 7.43972 18.1355 7.10975 18.3766 6.86646C18.6177 6.62317 18.9447 6.48649 19.2857 6.48649ZM7.71429 17.0811C8.30571 17.0811 8.78571 17.5654 8.78571 18.1622L8.78571 21.6216C8.78571 21.9083 8.67283 22.1833 8.4719 22.3861C8.27097 22.5888 7.99845 22.7027 7.71429 22.7027C7.43013 22.7027 7.1576 22.5888 6.95667 22.3861C6.75574 22.1833 6.64286 21.9083 6.64286 21.6216L6.64286 18.1622C6.64286 17.5654 7.12286 17.0811 7.71429 17.0811ZM17.3571 18.1622C17.3571 18.0202 17.3294 17.8796 17.2756 17.7485C17.2217 17.6173 17.1428 17.4981 17.0433 17.3977C16.9438 17.2973 16.8257 17.2177 16.6957 17.1634C16.5657 17.109 16.4264 17.0811 16.2857 17.0811C16.145 17.0811 16.0057 17.109 15.8757 17.1634C15.7457 17.2177 15.6276 17.2973 15.5281 17.3977C15.4286 17.4981 15.3497 17.6173 15.2958 17.7485C15.242 17.8796 15.2143 18.0202 15.2143 18.1622L15.2143 21.6216C15.2143 21.7636 15.242 21.9042 15.2958 22.0353C15.3497 22.1665 15.4286 22.2857 15.5281 22.3861C15.6276 22.4865 15.7457 22.5661 15.8757 22.6204C16.0057 22.6747 16.145 22.7027 16.2857 22.7027C16.4264 22.7027 16.5657 22.6747 16.6957 22.6204C16.8257 22.5661 16.9438 22.4865 17.0433 22.3861C17.1428 22.2857 17.2217 22.1665 17.2756 22.0353C17.3294 21.9042 17.3571 21.7636 17.3571 21.6216L17.3571 18.1622ZM13.0714 19.4595C13.0714 19.1727 12.9585 18.8978 12.7576 18.695C12.5567 18.4923 12.2842 18.3784 12 18.3784C11.7158 18.3784 11.4433 18.4923 11.2424 18.695C11.0415 18.8978 10.9286 19.1727 10.9286 19.4595L10.9286 22.9189C10.9286 23.2056 11.0415 23.4806 11.2424 23.6834C11.4433 23.8861 11.7158 24 12 24C12.2842 24 12.5567 23.8861 12.7576 23.6834C12.9585 23.4806 13.0714 23.2056 13.0714 22.9189L13.0714 19.4595Z",
                fill: "rgba(255,241,0,1)",
                fillRule: "evenodd",
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            {...getOverrideProps(overrides, "Vector")}
          ></Icon>
          <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(255,255,255,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="0.01px"
            width="99px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children=" For just $99"
            {...getOverrideProps(overrides, "For just $99")}
          ></Text>
        </Flex>
      </Flex>
    </Flex>
  );
}