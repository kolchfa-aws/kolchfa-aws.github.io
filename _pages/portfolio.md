---
author_profile: false
permalink: /portfolio/
title: "My portfolio"
layout: splash
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/header/blue-pen-short.jpg
card_row1:
  - title: "API documentation"
    excerpt: "**Force Merge API**: This complex API required explaining the underlying technical concepts and guiding users through critical decisions."
    url: "https://docs.opensearch.org/docs/latest/api-reference/index-apis/force-merge/"
    icon: /assets/images/portfolio/logos/api.png
    image: /assets/images/portfolio/cards/api-doc.png
    color: "#C7F0DB"
  - title: "SDK documentation"
    excerpt: "**OpenSearch SDK for Java**: An end-to-end SDK documentation for developers, created using Jekyll and hosted on GitHub Pages."
    url: "https://opensearch-project.github.io/opensearch-sdk-java/DESIGN.html"
    icon: /assets/images/portfolio/logos/sdk.png
    image: /assets/images/portfolio/cards/sdk-docs.png
    color: "#D6D2F2"
  - title: "Code samples"
    excerpt: "**Low-level .NET client**: Explains complex technical concepts through meticulously designed, practical code samples."
    url: "https://docs.opensearch.org/docs/latest/clients/OpenSearch-dot-net/"
    icon: /assets/images/portfolio/logos/code-samples.png
    image: /assets/images/portfolio/cards/dotnet-doc.png
    color: "#C4D6E5"
card_row2:
  - title: "Explanation"
    excerpt: "**Intro to OpenSearch**: Aimed at new users getting started with the product, providing an overview and related concepts."
    url: "https://docs.opensearch.org/docs/latest/getting-started/intro/"
    icon: /assets/images/portfolio/logos/explanation.png
    image: /assets/images/portfolio/cards/getting-started.png
    color: "#4C8C9B"
  - title: "Tutorial"
    excerpt: "**Getting started with semantic and hybrid search**: Provides beginner and advanced workflows in one tutorial and showcases AI search types."
    url: "https://docs.opensearch.org/docs/latest/tutorials/vector-search/neural-search-tutorial/"
    icon: /assets/images/portfolio/logos/tutorials.png
    image: /assets/images/portfolio/cards/semantic-tutorial.png
    color: "#7A8CA3"
  - title: "Reference"
    excerpt: "**Dashboards Query Language**: A complete reference of a query language, reverse engineered from code."
    url: "https://docs.opensearch.org/docs/latest/dashboards/dql/"
    icon: /assets/images/portfolio/logos/reference.png
    image: /assets/images/portfolio/cards/dql.png
    color: "#A3989D"
card_row:
  - title: "Technical blog"
    icon: /assets/images/portfolio/logos/blogs.png
    excerpt: "**Snapshot Management blog**: A new feature introduction written in a friendly, conversational tone."
    url: "https://opensearch.org/blog/snapshot-management/"
    image: /assets/images/portfolio/cards/snapshot-blog.png
    color: "#DADCE0"
  - title: "UI navigation instructions"
    excerpt: "**Using maps**: Uses screenshots and step-by-step instructions to present using maps in OpenSearch Dashboards."
    url: "https://docs.opensearch.org/docs/latest/dashboards/visualize/maps/"
    icon: /assets/images/portfolio/logos/ui-instructions.png
    image: /assets/images/portfolio/cards/map-doc.png
    color: "#E4D7C5"
  - title: "UI copy"
    excerpt: "**Index template creation page**: Action-oriented UI copy for the index creation workflow in OpenSearch Dashboards with contextual explanations."
    url: "https://playground.opensearch.org/app/opensearch_index_management_dashboards#/create-template"
    icon: /assets/images/portfolio/logos/ui-copy.png
    image: /assets/images/portfolio/cards/create-template.png
    color: "#C4C3D0"
carousel_images:
  - url: /assets/images/portfolio/carousel/vector-search.png
    alt: AI/ML tutorial
    link: https://docs.opensearch.org/docs/latest/vector-search/getting-started/index/
  - url: /assets/images/portfolio/carousel/controller-api.png
    alt: API documentation
    link: https://docs.opensearch.org/docs/latest/ml-commons-plugin/api/controller-apis/create-controller/
  - url: /assets/images/portfolio/carousel/text-analysis.png
    alt: Explanation documentation
    link: https://docs.opensearch.org/docs/latest/analyzers/
  - url: /assets/images/portfolio/carousel/regex.png
    alt: Reference documentation
    link: https://docs.opensearch.org/docs/latest/query-dsl/regex-syntax/
  - url: /assets/images/portfolio/carousel/agent-blog.png
    alt: Technical blog
    link: https://opensearch.org/blog/intelligent-troubleshooting-using-opensearch-3-0s-plan-execute-reflect-agent/
---

## Documentation at a glance
{: .text-center}

{% include carousel.html images=page.carousel_images %}

---

## Documentation by category
{: .text-center}

{% include card_row.html card_row=page.card_row1 %}

{% include card_row.html card_row=page.card_row2 %}

{% include card_row.html card_row=page.card_row %}

---

## Templates and style guides
{: .text-center}

- [Documentation formatting guide](https://github.com/opensearch-project/documentation-website/blob/main/FORMATTING_GUIDE.md)
- [API template](https://github.com/opensearch-project/documentation-website/blob/main/templates/API_TEMPLATE.md)
- [Blog guide](https://github.com/opensearch-project/project-website/blob/main/BLOG_GUIDE.md)

---

[View case studies](/case-studies/){: .btn .btn--primary .btn--large}
{: .text-center}