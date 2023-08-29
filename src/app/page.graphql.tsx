const PAGE_CONTENT_QUERY = `
  query Home {
    site: _site {
      favicon: faviconMetaTags {
        attributes
        content
        tag
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
    allProductCards {
      id
      image {
        id
        responsiveImage {
          alt
          base64
          bgColor
          title
        }
      }
      material
      materialProperty
      name
      peculiar
      price
      recommendations
      _seoMetaTags {
        attributes
        content
      }
      size
    }
    allSections {
      description
      buttonText
      id
      image {
        responsiveImage {
          alt
          base64
          bgColor
          title
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
  }
`;

export default PAGE_CONTENT_QUERY;
