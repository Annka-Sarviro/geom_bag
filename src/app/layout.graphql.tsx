const PAGE_CONTENT_QUERY = `
 query MyQuery {
  contact {
    _seoMetaTags {
      attributes
      content
    }
    address
    email
    id
    instagram
    instagramTitle
    tel
    telTitle
    telegram
    telegramTitle
    viber
    viberTitle
  }
  }
`;

export default PAGE_CONTENT_QUERY;
