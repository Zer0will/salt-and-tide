import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { Router } from "wouter";
import { InlineText } from "./InsightArticle";

describe("article links", () => {
  it("renders bold text inside a CTA link without exposing markdown", () => {
    const html = renderToStaticMarkup(<Router ssrPath="/"><InlineText text="[**Request an audit →**](/contact)" /></Router>);
    expect(html).toContain('href="/contact"');
    expect(html).toContain("<strong");
    expect(html).toContain("Request an audit →");
    expect(html).not.toContain("**");
  });

  it("keeps surrounding copy and safely escapes inline text", () => {
    const html = renderToStaticMarkup(<InlineText text="Before **<script>** and [details](https://example.com) after." />);
    expect(html).toContain("Before ");
    expect(html).toContain("&lt;script&gt;");
    expect(html).toContain('href="https://example.com"');
    expect(html).toContain(" after.");
  });
});
