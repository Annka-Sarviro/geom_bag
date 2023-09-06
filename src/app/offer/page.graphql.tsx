const PAGE_CONTENT_QUERY = `
query Offertpage {
  site: _site {
    favicon: faviconMetaTags {
      attributes
      content
      tag
    }
  }
  offertpage {
    id
    _seoMetaTags {
      attributes
      content
      tag
    }
  }
  allSectionOffertpages {
    description
    buttonText
    descriptionstruct {
      blocks
      links
      value
    }
    id
    name
    title
  }
}
`;

export default PAGE_CONTENT_QUERY;
