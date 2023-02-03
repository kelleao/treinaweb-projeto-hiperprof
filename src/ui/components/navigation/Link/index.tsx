import { PropsWithChildren } from "react";
import { Link as MuiLink, LinkProps as MuiLinkProps } from '@mui/material';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface LinkProps extends MuiLinkProps, NextLinkProps {
    href: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onTouchStart?: () => void;
}

export default function Link({ 
    children, 
    ...props 
} : PropsWithChildren<LinkProps>) {
    return (
        <MuiLink  component={NextLink} {...props}>
            {children}
        </MuiLink>
    )
}