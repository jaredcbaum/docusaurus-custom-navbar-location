import React from "react";
import clsx from "clsx";
import ErrorBoundary from "@docusaurus/ErrorBoundary";
import SkipToContent from "@theme/SkipToContent";
import AnnouncementBar from "@theme/AnnouncementBar";
import Footer from "@theme/Footer";
import LayoutProviders from "@theme/LayoutProviders";
import type { Props } from "@theme/Layout";
import {
  PageMetadata,
  ThemeClassNames,
  useKeyboardNavigation,
} from "@docusaurus/theme-common";
import ErrorPageContent from "@theme/ErrorPageContent";
import "./styles.css";

export default function Layout(props: Props): JSX.Element {
  const {
    children,
    noFooter,
    wrapperClassName,
    // Not really layout-related, but kept for convenience/retro-compatibility
    title,
    description,
  } = props;

  useKeyboardNavigation();

  return (
    <LayoutProviders>
      <PageMetadata title={title} description={description} />

      <SkipToContent />

      <AnnouncementBar />

      <div className={clsx(ThemeClassNames.wrapper.main, wrapperClassName)}>
        <ErrorBoundary fallback={ErrorPageContent}>{children}</ErrorBoundary>
      </div>

      {!noFooter && <Footer />}
    </LayoutProviders>
  );
}
