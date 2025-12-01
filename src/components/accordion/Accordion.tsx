import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  type ReactNode,
} from "react";
import { Button } from "../button/Button";
import "./accordion.css";

interface AccordionContextType {
  openItems: Set<string>;
  toggleItem: (id: string) => void;
  mode: "single" | "multiple";
}

const AccordionContext = createContext<AccordionContextType | null>(null);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error(
      "Accordion compound components must be used within an Accordion"
    );
  }
  return context;
};

interface AccordionProps {
  children: ReactNode;
  mode?: "single" | "multiple";
  defaultOpenIndices?: number[];
  showToggleAll?: boolean;
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({
  children,
  mode = "multiple",
  defaultOpenIndices = [],
  showToggleAll = false,
  className = "",
}) => {
  const [openItems, setOpenItems] = useState<Set<string>>(() => {
    return new Set(defaultOpenIndices.map(String));
  });

  const toggleItem = useCallback(
    (id: string) => {
      setOpenItems((prev) => {
        const next = new Set(prev);
        if (next.has(id)) {
          next.delete(id);
        } else {
          if (mode === "single") {
            next.clear();
          }
          next.add(id);
        }
        return next;
      });
    },
    [mode]
  );

  const handleToggleAll = useCallback(() => {
    const childArray = React.Children.toArray(children);
    const allIndices = childArray.map((_, index) => String(index));

    setOpenItems((prev) => {
      if (prev.size === allIndices.length) {
        return new Set();
      } else {
        return new Set(allIndices);
      }
    });
  }, [children]);

  const childArray = React.Children.toArray(children);
  const allOpen = openItems.size === childArray.length && childArray.length > 0;

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, mode }}>
      <div className={`ntgds-accordion ${className}`.trim()}>
        {showToggleAll && childArray.length > 0 && (
          <div className="ntgds-accordion__header">
            <Button variant="tertiary" onClick={handleToggleAll}>
              {allOpen ? "Close all" : "Open all"}
            </Button>
          </div>
        )}
        <div className="ntgds-accordion__items">
          {React.Children.map(children, (child, index) => {
            if (React.isValidElement(child) && child.type === AccordionItem) {
              return React.cloneElement(
                child as React.ReactElement<AccordionItemProps>,
                {
                  index: String(index),
                }
              );
            }
            return child;
          })}
        </div>
      </div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  index?: string;
  className?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  index = "0",
  className = "",
}) => {
  const { openItems, toggleItem } = useAccordionContext();
  const isOpen = openItems.has(index);

  const panelId = `accordion-panel-${index}`;
  const triggerId = `accordion-trigger-${index}`;

  return (
    <div className={`ntgds-accordion-item ${className}`.trim()}>
      <button
        id={triggerId}
        className="ntgds-accordion-item__trigger"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => toggleItem(index)}
        type="button"
      >
        <span className="ntgds-accordion-item__title">{title}</span>
        <span className="ntgds-accordion-item__icon" aria-hidden="true">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 10L12 15L17 10"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
      <div
        id={panelId}
        className="ntgds-accordion-item__panel"
        role="region"
        aria-labelledby={triggerId}
        hidden={!isOpen}
      >
        <div className="ntgds-accordion-item__content">{children}</div>
      </div>
    </div>
  );
};
