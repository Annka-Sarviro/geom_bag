const PAGE_CONTENT_QUERY = `
query Home {
  site: _site {
    favicon: faviconMetaTags {
      attributes
      content
      tag
    }
  }
  allProductCards (filter: {availability: {eq: "true"}}) {
    id
    image {
      responsiveImage (imgixParams: { fit: crop, w: 400, h: 400, auto: format })  {
        sizes
        src
        width
        height
        alt
        title
        base64
        
      }
    }
    material
    name
    peculiar
    price
    recommendations
    _seoMetaTags {
      attributes
      content
    }
    size
    color
    description
    article
    isnew
    ispopular
    category
    availability
  }
  allSections {
    description
    buttonText
    id
    image {
       alt
      height
      id
      size
      url
      width
      responsiveImage  {
        sizes
        src
        width
        height
        alt
        title
        base64
      }
    }
    name
    subtitle
    title
    _seoMetaTags {
      attributes
      content
    }
  }
  homePage {
    id
    _seoMetaTags {
      attributes
      content
      tag
    }
  }
  allRewiers {
    id
    link
    name
    text
    product {
      name
    }
  }
  allContacts {
    _seoMetaTags {
      attributes
      content
    }
    address
    email
    id
    instagram
    tel(markdown: true)
    telegram
    telegramTitle
    viber
    viberTitle
    instagramTitle
  }
}
`;

export default PAGE_CONTENT_QUERY;
