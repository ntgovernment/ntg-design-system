import React, { useEffect, useRef, useState } from "react";
import { Button, type ButtonProps } from "../button/Button";
import "./floating-button.css";

export interface FloatingButtonProps extends ButtonProps {
  /**
   * The id of the source button to track. The floating button appears when this element leaves the viewport and the user scrolls up.
   */
  targetId: string;
}

/**
 * FloatingButton duplicates a primary action when the original scrolls out of view.
 * It stays fixed at the bottom, appearing only when the user scrolls up and the target is off-screen.
 * Only one FloatingButton should be used per page.
 */
export const FloatingButton = ({ targetId, className, ...buttonProps }: FloatingButtonProps) => {
    const [isTargetInView, setIsTargetInView] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const lastScrollYRef = useRef(typeof window !== "undefined" ? window.scrollY : 0);

    // Observe when the target button leaves the viewport
    useEffect(() => {
      const target = typeof document !== "undefined" ? document.getElementById(targetId) : null;
      if (!target || typeof IntersectionObserver === "undefined") {
        // If no target or observer unsupported, keep floating hidden
        return;
      }

      const observer = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          setIsTargetInView(entry.isIntersecting);
          // Immediately reveal if target starts outside viewport
          if (!entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        {
          root: null,
          threshold: 0.01,
        }
      );

      observer.observe(target);

      return () => {
        observer.disconnect();
      };
    }, [targetId]);

    // Track scroll direction to decide visibility (show only when scrolling up)
    useEffect(() => {
      const handleScroll = () => {
        const currentY = window.scrollY;
        const scrollingUp = currentY < lastScrollYRef.current - 1; // small threshold to reduce jitter
        lastScrollYRef.current = currentY;

        // Show whenever target is out of view; hide when it re-enters
        const shouldShow = !isTargetInView;
        setIsVisible(shouldShow);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => window.removeEventListener("scroll", handleScroll);
    }, [isTargetInView]);

    const baseClass = "ntgds-floating-button";
    const classes = [baseClass, isVisible && `${baseClass}--visible`, className]
      .filter(Boolean)
      .join(" ");

    const hiddenProps = !isVisible
      ? { tabIndex: -1 as const, disabled: true }
      : {};

    return (
      <div className={classes} aria-hidden={!isVisible}>
        <div className={`${baseClass}__inner`}>
          <Button {...buttonProps} {...hiddenProps} />
        </div>
      </div>
    );
  };

FloatingButton.displayName = "FloatingButton";
