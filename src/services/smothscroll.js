import Link from "next/link"
import { FC, HTMLProps, useCallback } from "react";

const SmothScroll = ({
    children,
    href,
    as,
    replace,
    scroll,
    shallow,
    passHref,
    prefetch,
    locale,
    target,
    ...anchorProps
}) => {
    const handleClick = useCallback(
        (e) => {
            if (href.startsWith("#")) {
                e.preventDefault();
                const destination = document.querySelector(href);
                if (destination) {
                    destination.scrollIntoView({
                        behavior: "smooth",
                    });
                }
            }
        },
        [href]
    );
    return (
        <Link href={href} as={as} replace={replace} scroll={scroll} shallow={shallow} passHref={passHref} prefetch={prefetch} locale={locale} >
            <a
                tabIndex={0}
                target={target}
                role="link"
                onClick={handleClick}
                onKeyDown={handleClick}
                {...anchorProps}
            >
                {children}
            </a>
        </Link>
    );
};



export default SmothScroll;
