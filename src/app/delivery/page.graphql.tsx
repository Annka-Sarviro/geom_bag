const PAGE_CONTENT_QUERY = `
query deliverypage {
  site: _site {
    favicon: faviconMetaTags {
      attributes
      content
      tag
    }
  }
  deliverypage {
    id
    _seoMetaTags {
      attributes
      content
      tag
    }
  }
  allSectionDeliverypages {
    id
    name
    subtitle
    description(markdown: true)
    title
  }
}
`;

export default PAGE_CONTENT_QUERY;
