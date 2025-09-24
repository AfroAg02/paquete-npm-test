"use client";

// #style-inject:#style-inject
function styleInject(css, { insertAt } = {}) {
  if (!css || typeof document === "undefined") return;
  const head = document.head || document.getElementsByTagName("head")[0];
  const style = document.createElement("style");
  style.type = "text/css";
  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

// src/components/NextCard/NextCard.css
styleInject(".nextcard-card {\n  border-radius: 12px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: all 0.2s ease-in-out;\n  background: white;\n  border: 1px solid #e5e7eb;\n  width: 100%;\n  max-width: 400px;\n}\n.nextcard-card.nextcard-clickable {\n  cursor: pointer;\n}\n.nextcard-card.nextcard-clickable:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n}\n.nextcard-card.nextcard-clickable:focus {\n  outline: 2px solid #3b82f6;\n  outline-offset: 2px;\n}\n.nextcard-card.nextcard-default {\n  background: white;\n  border-color: #e5e7eb;\n}\n.nextcard-card.nextcard-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n}\n.nextcard-card.nextcard-secondary {\n  background: #f8fafc;\n  border-color: #cbd5e1;\n}\n.nextcard-card.nextcard-outlined {\n  background: transparent;\n  border: 2px solid #3b82f6;\n}\n.nextcard-header {\n  margin-bottom: 16px;\n}\n.nextcard-title {\n  margin: 0 0 8px 0;\n  font-size: 1.25rem;\n  font-weight: 600;\n  line-height: 1.5;\n  color: inherit;\n}\n.nextcard-description {\n  margin: 0;\n  font-size: 0.875rem;\n  line-height: 1.5;\n  color: #6b7280;\n}\n.nextcard-card.nextcard-primary .nextcard-description {\n  color: rgba(255, 255, 255, 0.8);\n}\n.nextcard-content {\n  margin-top: 16px;\n}\n@media (max-width: 640px) {\n  .nextcard-card {\n    padding: 16px;\n    max-width: 100%;\n  }\n  .nextcard-title {\n    font-size: 1.125rem;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .nextcard-card.nextcard-default {\n    background: #1f2937;\n    border-color: #374151;\n    color: white;\n  }\n  .nextcard-card.nextcard-secondary {\n    background: #111827;\n    border-color: #4b5563;\n  }\n  .nextcard-description {\n    color: #9ca3af;\n  }\n}\n");

// src/components/NextCard/NextCard.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var styles = {
  card: "nextcard-card",
  clickable: "nextcard-clickable",
  default: "nextcard-default",
  primary: "nextcard-primary",
  secondary: "nextcard-secondary",
  outlined: "nextcard-outlined",
  header: "nextcard-header",
  title: "nextcard-title",
  description: "nextcard-description",
  content: "nextcard-content"
};
var NextCard = ({
  title,
  description,
  children,
  variant = "default",
  onClick,
  className = "",
  ...props
}) => {
  const cardClasses = [
    styles.card,
    styles[variant],
    onClick ? styles.clickable : "",
    className
  ].filter(Boolean).join(" ");
  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cardClasses,
      onClick: handleClick,
      role: onClick ? "button" : void 0,
      tabIndex: onClick ? 0 : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles.header, children: [
          /* @__PURE__ */ jsx("h3", { className: styles.title, children: title }),
          description && /* @__PURE__ */ jsx("p", { className: styles.description, children: description })
        ] }),
        children && /* @__PURE__ */ jsx("div", { className: styles.content, children })
      ]
    }
  );
};
NextCard.displayName = "NextCard";

// src/components/NextButton/NextButton.css
styleInject(".nextbutton-button {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  border-radius: 8px;\n  font-weight: 500;\n  transition: all 0.2s ease-in-out;\n  cursor: pointer;\n  border: 1px solid transparent;\n  font-family: inherit;\n  text-decoration: none;\n  position: relative;\n  overflow: hidden;\n}\n.nextbutton-button:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n.nextbutton-button:focus {\n  outline: 2px solid #3b82f6;\n  outline-offset: 2px;\n}\n.nextbutton-button.nextbutton-sm {\n  padding: 8px 16px;\n  font-size: 0.875rem;\n  min-height: 32px;\n}\n.nextbutton-button.nextbutton-md {\n  padding: 12px 24px;\n  font-size: 0.875rem;\n  min-height: 40px;\n}\n.nextbutton-button.nextbutton-lg {\n  padding: 16px 32px;\n  font-size: 1rem;\n  min-height: 48px;\n}\n.nextbutton-button.nextbutton-default {\n  background: #f3f4f6;\n  color: #374151;\n  border-color: #d1d5db;\n}\n.nextbutton-button.nextbutton-default:hover:not(:disabled) {\n  background: #e5e7eb;\n  border-color: #9ca3af;\n}\n.nextbutton-button.nextbutton-primary {\n  background: #3b82f6;\n  color: white;\n}\n.nextbutton-button.nextbutton-primary:hover:not(:disabled) {\n  background: #2563eb;\n}\n.nextbutton-button.nextbutton-secondary {\n  background: #6b7280;\n  color: white;\n}\n.nextbutton-button.nextbutton-secondary:hover:not(:disabled) {\n  background: #4b5563;\n}\n.nextbutton-button.nextbutton-outline {\n  background: transparent;\n  color: #3b82f6;\n  border-color: #3b82f6;\n}\n.nextbutton-button.nextbutton-outline:hover:not(:disabled) {\n  background: #3b82f6;\n  color: white;\n}\n.nextbutton-button.nextbutton-ghost {\n  background: transparent;\n  color: #374151;\n  border-color: transparent;\n}\n.nextbutton-button.nextbutton-ghost:hover:not(:disabled) {\n  background: #f3f4f6;\n}\n.nextbutton-spinner {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.nextbutton-spinner-icon {\n  width: 16px;\n  height: 16px;\n  animation: nextbutton-spin 1s linear infinite;\n}\n.nextbutton-icon {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n.nextbutton-content {\n  display: inline-flex;\n  align-items: center;\n}\n.nextbutton-button.nextbutton-loading .nextbutton-content {\n  opacity: 0.7;\n}\n@keyframes nextbutton-spin {\n  from {\n    transform: rotate(0deg);\n    stroke-dashoffset: 32;\n  }\n  to {\n    transform: rotate(360deg);\n    stroke-dashoffset: 0;\n  }\n}\n@media (prefers-color-scheme: dark) {\n  .nextbutton-button.nextbutton-default {\n    background: #374151;\n    color: #f9fafb;\n    border-color: #4b5563;\n  }\n  .nextbutton-button.nextbutton-default:hover:not(:disabled) {\n    background: #4b5563;\n    border-color: #6b7280;\n  }\n  .nextbutton-button.nextbutton-ghost {\n    color: #f9fafb;\n  }\n  .nextbutton-button.nextbutton-ghost:hover:not(:disabled) {\n    background: #374151;\n  }\n}\n");

// src/components/NextButton/NextButton.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
var styles2 = {
  button: "nextbutton-button",
  sm: "nextbutton-sm",
  md: "nextbutton-md",
  lg: "nextbutton-lg",
  default: "nextbutton-default",
  primary: "nextbutton-primary",
  secondary: "nextbutton-secondary",
  outline: "nextbutton-outline",
  ghost: "nextbutton-ghost",
  loading: "nextbutton-loading",
  spinner: "nextbutton-spinner",
  spinnerIcon: "nextbutton-spinner-icon",
  icon: "nextbutton-icon",
  content: "nextbutton-content"
};
var NextButton = ({
  children,
  variant = "default",
  size = "md",
  loading = false,
  icon,
  disabled,
  className = "",
  ...props
}) => {
  const buttonClasses = [
    styles2.button,
    styles2[variant],
    styles2[size],
    loading ? styles2.loading : "",
    className
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsxs2("button", { className: buttonClasses, disabled: disabled || loading, ...props, children: [
    loading && /* @__PURE__ */ jsx2("span", { className: styles2.spinner, children: /* @__PURE__ */ jsx2("svg", { className: styles2.spinnerIcon, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx2(
      "circle",
      {
        cx: "12",
        cy: "12",
        r: "10",
        stroke: "currentColor",
        strokeWidth: "4",
        fill: "none",
        strokeLinecap: "round",
        strokeDasharray: "32",
        strokeDashoffset: "32"
      }
    ) }) }),
    icon && !loading && /* @__PURE__ */ jsx2("span", { className: styles2.icon, children: icon }),
    /* @__PURE__ */ jsx2("span", { className: styles2.content, children })
  ] });
};
NextButton.displayName = "NextButton";

// src/index.ts
var index_default = {
  NextCard,
  NextButton
};
export {
  NextButton,
  NextCard,
  index_default as default
};
