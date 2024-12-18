/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, IconProps, TextProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroOverridesProps = {
    Hero?: PrimitiveOverrideProps<FlexProps>;
    "Join me behind the scenes for unlimited access to how I solve data challenges and optimize solutions."?: PrimitiveOverrideProps<TextProps>;
    "Button Area"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 5588"?: PrimitiveOverrideProps<FlexProps>;
    Vector?: PrimitiveOverrideProps<IconProps>;
    "For just $99"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HeroProps = React.PropsWithChildren<Partial<FlexProps> & {
    handleClick?: (event: SyntheticEvent) => void;
} & {
    overrides?: HeroOverridesProps | undefined | null;
}>;
export default function Hero(props: HeroProps): React.ReactElement;
