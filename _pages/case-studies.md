---
author_profile: false
permalink: /case-studies/
title: "Case studies"
layout: splash
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: /assets/images/header/blue-pen-short.jpg
scroll_images:
  - url: /assets/images/case-studies/wa-before.png
    alt: Before example
    caption: "Before"
    link: https://docs.opensearch.org/docs/2.18/aggregations/metric/weighted-avg/
  - url: /assets/images/case-studies/wa-after-2.png
    alt: After example
    caption: "After"
    link: https://docs.opensearch.org/docs/latest/aggregations/metric/weighted-avg/
scroll_images2:
  - url: /assets/images/case-studies/guardrails-before.png
    alt: Draft
    caption: "Initial draft"
    link: https://github.com/opensearch-project/documentation-website/pull/6750/commits/faea53e5557539851eeedaa9c8da142d37ad66fa
  - url: /assets/images/case-studies/guardrails-rendered-after.png
    alt: Complete documentation
    caption: "Final draft"
    link: https://github.com/opensearch-project/documentation-website/pull/6750/files#diff-10e039bf0cf35259401a322a99ad8fa61bff3789c41c50efe5604de93c9bf185
    caption2: "Final documentation"
    link2: https://docs.opensearch.org/docs/2.13/ml-commons-plugin/remote-models/guardrails/
---

## Clarifying and enriching technical content

This example shows how I turn underdeveloped documentation into documentation that users can trust. I refactored the content to improve accuracy, clarity, and usability. The revised version introduces a more user-friendly structure, adds explanations, and provides illustrative, comprehensive examples that helps users understand the feature.

{% include scrollable_image.html images=page.scroll_images synced_scroll=true %}

## Transforming technical drafts into user-focused documentation

This example shows how I create documentation from developer-provided drafts. The initial draft for model guardrails provided only a minimal API update. 

In addition to improving the submitted draft, I provided the following additional content:
- A clear introduction explaining what guardrails are and why they matter
- Prerequisites
- Complete step-by-step setup instructions
- Explanation of testing the feature

The final version guides users through the entire process, from initial setup to verification, transforming a basic feature description into a practical implementation guide.

{% include scrollable_image.html images=page.scroll_images2 synced_scroll=false %}

## Improving information architecture

This example shows a redesign of the vector search content information architecture.

The original vector-search-related documentation was scattered across unrelated sections, with key content buried deep under **Search features**. This made it hard for users to find relevant material and understand how to use vector search.

{% include image_text_split.html
  image="/assets/images/case-studies/vs-nav-before-after.png"
  alt="Before and after navigation restructure"
  paragraph="To improve discoverability, usability, and user onboarding, I reorganized and expanded the vector search documentation:"
  list="
- Created a dedicated top-level [**Vector search**](https://docs.opensearch.org/docs/latest/vector-search/) section to consolidate all related content.
- Organized topics in a logical progression from beginner to advanced.
- Added a [**Getting started**](https://docs.opensearch.org/docs/latest/vector-search/getting-started/index/) section for new users.
- Included a mix of conceptual guides, step-by-step tutorials, and reference docs.
- Made task-based content like **Creating a vector index** and **Searching data** easier to access.
- Cross-linked related topics and added 'Next steps' guidance at the end of each page.
"
%}

The redesign improved clarity, reduced onboarding time for new users, and made the advanced capabilities of vector search more approachable. It also strengthened SEO by exposing key terms and common entry points.

[Browse vector search documentation](https://docs.opensearch.org/docs/latest/vector-search/)<i class="fas fa-arrow-up-right-from-square external-link-icon" aria-hidden="true"></i>
{: .text-center}