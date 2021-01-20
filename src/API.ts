/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateTypeInput = {
  id?: string | null,
  name: string,
};

export type ModelTypeConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelTypeConditionInput | null > | null,
  or?: Array< ModelTypeConditionInput | null > | null,
  not?: ModelTypeConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateTypeInput = {
  id: string,
  name?: string | null,
};

export type DeleteTypeInput = {
  id?: string | null,
};

export type CreateProductInput = {
  id?: string | null,
  name: string,
  typeID: string,
};

export type ModelProductConditionInput = {
  name?: ModelStringInput | null,
  typeID?: ModelIDInput | null,
  and?: Array< ModelProductConditionInput | null > | null,
  or?: Array< ModelProductConditionInput | null > | null,
  not?: ModelProductConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateProductInput = {
  id: string,
  name?: string | null,
  typeID?: string | null,
};

export type DeleteProductInput = {
  id?: string | null,
};

export type CreateArticleInput = {
  id?: string | null,
  productID: string,
  description: string,
};

export type ModelArticleConditionInput = {
  productID?: ModelIDInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelArticleConditionInput | null > | null,
  or?: Array< ModelArticleConditionInput | null > | null,
  not?: ModelArticleConditionInput | null,
};

export type UpdateArticleInput = {
  id: string,
  productID?: string | null,
  description?: string | null,
};

export type DeleteArticleInput = {
  id?: string | null,
};

export type ModelTypeFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelTypeFilterInput | null > | null,
  or?: Array< ModelTypeFilterInput | null > | null,
  not?: ModelTypeFilterInput | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  typeID?: ModelIDInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type ModelArticleFilterInput = {
  id?: ModelIDInput | null,
  productID?: ModelIDInput | null,
  description?: ModelStringInput | null,
  and?: Array< ModelArticleFilterInput | null > | null,
  or?: Array< ModelArticleFilterInput | null > | null,
  not?: ModelArticleFilterInput | null,
};

export type CreateTypeMutationVariables = {
  input: CreateTypeInput,
  condition?: ModelTypeConditionInput | null,
};

export type CreateTypeMutation = {
  createType:  {
    __typename: "Type",
    id: string,
    name: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        typeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateTypeMutationVariables = {
  input: UpdateTypeInput,
  condition?: ModelTypeConditionInput | null,
};

export type UpdateTypeMutation = {
  updateType:  {
    __typename: "Type",
    id: string,
    name: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        typeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteTypeMutationVariables = {
  input: DeleteTypeInput,
  condition?: ModelTypeConditionInput | null,
};

export type DeleteTypeMutation = {
  deleteType:  {
    __typename: "Type",
    id: string,
    name: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        typeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type CreateProductMutation = {
  createProduct:  {
    __typename: "Product",
    id: string,
    name: string,
    typeID: string,
    type:  {
      __typename: "Type",
      id: string,
      name: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    articles:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        productID: string,
        description: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
  condition?: ModelProductConditionInput | null,
};

export type UpdateProductMutation = {
  updateProduct:  {
    __typename: "Product",
    id: string,
    name: string,
    typeID: string,
    type:  {
      __typename: "Type",
      id: string,
      name: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    articles:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        productID: string,
        description: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
  condition?: ModelProductConditionInput | null,
};

export type DeleteProductMutation = {
  deleteProduct:  {
    __typename: "Product",
    id: string,
    name: string,
    typeID: string,
    type:  {
      __typename: "Type",
      id: string,
      name: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    articles:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        productID: string,
        description: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateArticleMutationVariables = {
  input: CreateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type CreateArticleMutation = {
  createArticle:  {
    __typename: "Article",
    id: string,
    productID: string,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      typeID: string,
      type:  {
        __typename: "Type",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      articles:  {
        __typename: "ModelArticleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateArticleMutationVariables = {
  input: UpdateArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type UpdateArticleMutation = {
  updateArticle:  {
    __typename: "Article",
    id: string,
    productID: string,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      typeID: string,
      type:  {
        __typename: "Type",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      articles:  {
        __typename: "ModelArticleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteArticleMutationVariables = {
  input: DeleteArticleInput,
  condition?: ModelArticleConditionInput | null,
};

export type DeleteArticleMutation = {
  deleteArticle:  {
    __typename: "Article",
    id: string,
    productID: string,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      typeID: string,
      type:  {
        __typename: "Type",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      articles:  {
        __typename: "ModelArticleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetTypeQueryVariables = {
  id: string,
};

export type GetTypeQuery = {
  getType:  {
    __typename: "Type",
    id: string,
    name: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        typeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListTypesQueryVariables = {
  filter?: ModelTypeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTypesQuery = {
  listTypes:  {
    __typename: "ModelTypeConnection",
    items:  Array< {
      __typename: "Type",
      id: string,
      name: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct:  {
    __typename: "Product",
    id: string,
    name: string,
    typeID: string,
    type:  {
      __typename: "Type",
      id: string,
      name: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    articles:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        productID: string,
        description: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      name: string,
      typeID: string,
      type:  {
        __typename: "Type",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      articles:  {
        __typename: "ModelArticleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetArticleQueryVariables = {
  id: string,
};

export type GetArticleQuery = {
  getArticle:  {
    __typename: "Article",
    id: string,
    productID: string,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      typeID: string,
      type:  {
        __typename: "Type",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      articles:  {
        __typename: "ModelArticleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListArticlesQueryVariables = {
  filter?: ModelArticleFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListArticlesQuery = {
  listArticles:  {
    __typename: "ModelArticleConnection",
    items:  Array< {
      __typename: "Article",
      id: string,
      productID: string,
      product:  {
        __typename: "Product",
        id: string,
        name: string,
        typeID: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      description: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateTypeSubscription = {
  onCreateType:  {
    __typename: "Type",
    id: string,
    name: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        typeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTypeSubscription = {
  onUpdateType:  {
    __typename: "Type",
    id: string,
    name: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        typeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTypeSubscription = {
  onDeleteType:  {
    __typename: "Type",
    id: string,
    name: string,
    products:  {
      __typename: "ModelProductConnection",
      items:  Array< {
        __typename: "Product",
        id: string,
        name: string,
        typeID: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct:  {
    __typename: "Product",
    id: string,
    name: string,
    typeID: string,
    type:  {
      __typename: "Type",
      id: string,
      name: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    articles:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        productID: string,
        description: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct:  {
    __typename: "Product",
    id: string,
    name: string,
    typeID: string,
    type:  {
      __typename: "Type",
      id: string,
      name: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    articles:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        productID: string,
        description: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct:  {
    __typename: "Product",
    id: string,
    name: string,
    typeID: string,
    type:  {
      __typename: "Type",
      id: string,
      name: string,
      products:  {
        __typename: "ModelProductConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    articles:  {
      __typename: "ModelArticleConnection",
      items:  Array< {
        __typename: "Article",
        id: string,
        productID: string,
        description: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateArticleSubscription = {
  onCreateArticle:  {
    __typename: "Article",
    id: string,
    productID: string,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      typeID: string,
      type:  {
        __typename: "Type",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      articles:  {
        __typename: "ModelArticleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateArticleSubscription = {
  onUpdateArticle:  {
    __typename: "Article",
    id: string,
    productID: string,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      typeID: string,
      type:  {
        __typename: "Type",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      articles:  {
        __typename: "ModelArticleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteArticleSubscription = {
  onDeleteArticle:  {
    __typename: "Article",
    id: string,
    productID: string,
    product:  {
      __typename: "Product",
      id: string,
      name: string,
      typeID: string,
      type:  {
        __typename: "Type",
        id: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      articles:  {
        __typename: "ModelArticleConnection",
        nextToken: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    description: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
