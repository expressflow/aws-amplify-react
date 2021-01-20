/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateType = /* GraphQL */ `
  subscription OnCreateType {
    onCreateType {
      id
      name
      products {
        items {
          id
          name
          typeID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateType = /* GraphQL */ `
  subscription OnUpdateType {
    onUpdateType {
      id
      name
      products {
        items {
          id
          name
          typeID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteType = /* GraphQL */ `
  subscription OnDeleteType {
    onDeleteType {
      id
      name
      products {
        items {
          id
          name
          typeID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
      id
      name
      typeID
      type {
        id
        name
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      articles {
        items {
          id
          productID
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
      id
      name
      typeID
      type {
        id
        name
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      articles {
        items {
          id
          productID
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
      id
      name
      typeID
      type {
        id
        name
        products {
          nextToken
        }
        createdAt
        updatedAt
      }
      articles {
        items {
          id
          productID
          description
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateArticle = /* GraphQL */ `
  subscription OnCreateArticle {
    onCreateArticle {
      id
      productID
      product {
        id
        name
        typeID
        type {
          id
          name
          createdAt
          updatedAt
        }
        articles {
          nextToken
        }
        createdAt
        updatedAt
      }
      description
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateArticle = /* GraphQL */ `
  subscription OnUpdateArticle {
    onUpdateArticle {
      id
      productID
      product {
        id
        name
        typeID
        type {
          id
          name
          createdAt
          updatedAt
        }
        articles {
          nextToken
        }
        createdAt
        updatedAt
      }
      description
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteArticle = /* GraphQL */ `
  subscription OnDeleteArticle {
    onDeleteArticle {
      id
      productID
      product {
        id
        name
        typeID
        type {
          id
          name
          createdAt
          updatedAt
        }
        articles {
          nextToken
        }
        createdAt
        updatedAt
      }
      description
      createdAt
      updatedAt
    }
  }
`;
