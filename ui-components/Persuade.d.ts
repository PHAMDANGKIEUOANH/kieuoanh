/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type PersuadeOverridesProps = {
    Persuade?: PrimitiveOverrideProps<FlexProps>;
    "Join me behind the scenes for unlimited access to how I solve data challenges and optimize solutions."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    Banner?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type PersuadeProps = React.PropsWithChildren<Partial<FlexProps> & {
    banner?: String;
    handleClick?: (event: SyntheticEvent) => void;
} & {
    overrides?: PersuadeOverridesProps | undefined | null;
}>;
export default function Persuade(props: PersuadeProps): React.ReactElement;
