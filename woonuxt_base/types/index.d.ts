interface ProductAttributeInput {
  attributeName: string;
  attributeValue: string;
}

interface ProductAddonInput {
  fieldName: string;
  value?: Array<string>;
}

interface AddToCartInput {
  addons?: InputMaybe<Array<InputMaybe<ProductAddonInput>>>;
  clientMutationId?: string;
  extraData?: string;
  productId: number;
  quantity: number;
  variation?: ProductAttributeInput[];
  variationId?: number | null | undefined;
  optionId?: number | null | undefined;
  selectedOptions?: selectedOptions[];
}

interface MetaDataInput {
  key: string;
  value: string;
  id?: string;
}

interface CreateAccountInput {
  password: string;
  username: string;
  email: string;
}

interface Customer {
  lastName?: string | null;
  email?: string | null;
  firstName?: string | null;
  username?: string | null;
  databaseId?: number | null;
  sessionToken?: string | null;
  billing?: Address | null;
  shipping?: Address | null;
}

interface Address {
  address1?: string | null;
  address2?: string | null;
  city?: string | null;
  country?: CountriesEnum | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  postcode?: string | null;
  state?: string | null;
  company?: string | null;
}

interface Viewer {
  lastName?: string | null;
  email?: string | null;
  databaseId: number;
  id: string;
  firstName?: string | null;
  username?: string | null;
  nicename?: string | null;
  wooSessionToken?: string | null;
}

interface ProductCategory {
  databaseId: number;
  slug: string;
  name: string;
  count: number;
  image?: ProductImage | null;
}

interface Attribute {
  value?: string | null;
  name?: string | null;
}


interface ProductAttribute {
  name?: string | null;
  options?: Array<string | null> | null;
  variation?: boolean | null;
  visible?: boolean | null;
}


interface ProductTerm {
  taxonomyName?: string | null;
  slug?: string | null;
}

interface Product {
  addons?: Maybe<Array<Maybe<ProductAddonField>>>;
  name?: string | null;
  databaseId?: number | null;
  id?: string | null;
  slug?: string | null;
  sku?: string | null;
  onSale?: boolean | null;
  type?: ProductTypesEnum | null;
  price?: string | null;
  date?: string | null;
  regularPrice?: string | null;
  salePrice?: string | null;
  stockStatus?: StockStatusEnum | null;
  stockQuantity?: number | null;
  description?: string | null;
  rawDescription?: string | null;
  shortDescription?: string | null;
  averageRating?: number | null;
  weight?: string | null;
  length?: string | null;
  width?: string | null;
  height?: string | null;
  reviewCount?: number | null;
  rawPrice?: string | null;
  rawRegularPrice?: string | null;
  rawSalePrice?: string | null;
  image?: ProductImage | null;
  terms?: { nodes: Array<ProductTerm> } | null;
  galleryImages?: Array<{ sourceUrl?: string | null }> | null;
  attributes?: { nodes: Array<Attribute> } | null;
  productCategories?: { nodes: Array<ProductCategory> } | null;
  defaultAttributes?: Array<{ name?: string | null; attributeId?: number | null }> | null;
  variations?: { nodes: Variation[] } | null;
  node: SimpleProduct | VariableProduct;
  related?: { nodes: Array<Product> } | null;
}

interface SimpleProduct {
  addons?: Maybe<Array<Maybe<ProductAddonField>>>;
  name?: string | null;
  price?: string | null;
  regularPrice?: string | null;
  salePrice?: string | null;
  stockStatus?: StockStatusEnum | null;
  stockQuantity?: number | null;
  description?: string | null;
  shortDescription?: string | null;
  averageRating?: number | null;
  weight?: string | null;
  length?: string | null;
  width?: string | null;
  height?: string | null;
  reviewCount?: number | null;
  rawPrice?: string | null;
  rawRegularPrice?: string | null;
  rawSalePrice?: string | null;
  image?: ProductImage | null;
  galleryImages?: { nodes: Array<{ sourceUrl?: string | null }> } | null;
}

interface VariableProduct {
  name?: string | null;
  description?: string | null;
  shortDescription?: string | null;
  weight?: string | null;
  length?: string | null;
  width?: string | null;
  height?: string | null;
  averageRating?: number | null;
  reviewCount?: number | null;
  regularPrice?: string | null;
  salePrice?: string | null;
  stockStatus?: StockStatusEnum | null;
  totalSales?: number | null;
  stockQuantity?: number | null;
  rawPrice?: string | null;
  rawRegularPrice?: string | null;
  rawSalePrice?: string | null;
  image?: ProductImage | null;
  attributes?: { nodes: Array<ProductAttribute> } | null;
  defaultAttributes?: { nodes: Array<Attribute> } | null;
  variations?: {
    nodes: Variation[];
  } | null;
  galleryImages?: { nodes: Array<{ sourceUrl?: string | null }> } | null;
}

interface Variation {
  name?: string | null;
  databaseId?: number;
  price?: string | null;
  regularPrice?: string | null;
  salePrice?: string | null;
  slug?: string | null;
  stockQuantity?: number | null;
  stockStatus?: StockStatusEnum | null;
  hasAttributes?: boolean | null;
  image?: ProductImage | null;
  attributes?: { nodes: Attribute[] } | null;
  node?: SimpleProduct | VariableProduct;
}

interface ProductAddonOption {
  __typename?: 'ProductAddonOption';
  /** Option image. */
  image?: Maybe<MediaItem>;
  /** Option label */
  label?: Maybe<Scalars['String']['output']>;
  /** Option pricing */
  price?: Maybe<Scalars['Float']['output']>;
  /** Option pricing type */
  priceType?: Maybe<ProductAddonPriceAdjustEnum>;
  databaseId?: number;
  value?: string | null;
}

interface ProductAddonPriceAdjustEnum {
  append?: InputMaybe<Scalars['Boolean']['input']>;
  /** The input list of items to set. */
  nodes?: InputMaybe<Array<InputMaybe<ProductAddonProductCategoriesNodeInput>>>;
}

interface ProductAddonIdType {
  /** Identify a resource by the Database ID. */
  DatabaseId: 'DATABASE_ID';
  /** Identify a resource by the (hashed) Global ID. */
  Id: 'ID';
  /** Identify a resource by the slug. Available to non-hierarchcial Types where the slug is a unique identifier. */
  Slug: 'SLUG';
  /** Identify a resource by the URI. */
  Uri: 'URI';
}

interface ProductAddon {
  __typename?: 'ProductAddon';
  /** Connection between the ContentNode type and the ContentType type */
  contentType?: Maybe<ContentNodeToContentTypeConnectionEdge>;
  /** The name of the Content Type the node belongs to */
  contentTypeName: Scalars['String']['output'];
  /** The unique identifier stored in the database */
  databaseId: Scalars['Int']['output'];
  /** Post publishing date. */
  date?: Maybe<Scalars['String']['output']>;
  /** The publishing date set in GMT. */
  dateGmt?: Maybe<Scalars['String']['output']>;
  /** The desired slug of the post */
  desiredSlug?: Maybe<Scalars['String']['output']>;
  /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
  editingLockedBy?: Maybe<ContentNodeToEditLockConnectionEdge>;
  /** The RSS enclosure for the object */
  enclosure?: Maybe<Scalars['String']['output']>;
  /** Connection between the ContentNode type and the EnqueuedScript type */
  enqueuedScripts?: Maybe<ContentNodeToEnqueuedScriptConnection>;
  /** Connection between the ContentNode type and the EnqueuedStylesheet type */
  enqueuedStylesheets?: Maybe<ContentNodeToEnqueuedStylesheetConnection>;
  /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
  guid?: Maybe<Scalars['String']['output']>;
  /** The globally unique identifier of the global_product_addon object. */
  id: Scalars['ID']['output'];
  /** Whether the node is a Content Node */
  isContentNode: Scalars['Boolean']['output'];
  /** Whether the object is a node in the preview state */
  isPreview?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the object is restricted from the current viewer */
  isRestricted?: Maybe<Scalars['Boolean']['output']>;
  /** Whether the node is a Term */
  isTermNode: Scalars['Boolean']['output'];
  /** The user that most recently edited the node */
  lastEditedBy?: Maybe<ContentNodeToEditLastConnectionEdge>;
  /** The permalink of the post */
  link?: Maybe<Scalars['String']['output']>;
  /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
  modified?: Maybe<Scalars['String']['output']>;
  /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
  modifiedGmt?: Maybe<Scalars['String']['output']>;
  /**
   * Connection between the ProductAddon type and the ProductAddon type
   * @deprecated The &quot;ProductAddon&quot; Type is not publicly queryable and does not support previews. This field will be removed in the future.
   */
  preview?: Maybe<ProductAddonToPreviewConnectionEdge>;
  /** The database id of the preview node */
  previewRevisionDatabaseId?: Maybe<Scalars['Int']['output']>;
  /** Whether the object is a node in the preview state */
  previewRevisionId?: Maybe<Scalars['ID']['output']>;
  /**
   * The id field matches the WP_Post-&gt;ID field.
   * @deprecated Deprecated in favor of the databaseId field
   */
  productAddonId: Scalars['Int']['output'];
  /** Connection between the ProductAddon type and the productCategory type */
  productCategories?: Maybe<ProductAddonToProductCategoryConnection>;
  /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
  slug?: Maybe<Scalars['String']['output']>;
  /** The current status of the object */
  status?: Maybe<Scalars['String']['output']>;
  /** The template assigned to the node */
  template?: Maybe<ContentTemplate>;
  /** Connection between the ProductAddon type and the TermNode type */
  terms?: Maybe<ProductAddonToTermNodeConnection>;
  /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
  title?: Maybe<Scalars['String']['output']>;
  /** The unique resource identifier path */
  uri?: Maybe<Scalars['String']['output']>;
};

interface ProductAddonField {
  /** Field description */
  description?: Maybe<Scalars['String']['output']>;
  /** Field unique name */
  fieldName: Scalars['String']['output'];
  /** Field name */
  name?: Maybe<Scalars['String']['output']>;
  /** Addon's price */
  price?: Maybe<Scalars['Float']['output']>;
  /** Addon's method of price adjustment */
  priceType?: Maybe<ProductAddonPriceAdjustEnum>;
  /** Is this field required? */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The way the title should be displayed. */
  titleFormat?: Maybe<ProductAddonTitleFormatEnum>;
  /** Field type */
  type?: Maybe<ProductAddonFieldEnum>;
}

/** UI types for Multiple choice add-on. */
interface ProductAddonFieldEnum {
  Checkbox: 'CHECKBOX';
  CustomerDefinedPrice: 'CUSTOMER_DEFINED_PRICE';
  FileUpload: 'FILE_UPLOAD';
  Heading: 'HEADING';
  LongText: 'LONG_TEXT';
  MultipleChoice: 'MULTIPLE_CHOICE';
  Quantity: 'QUANTITY';
  ShortText: 'SHORT_TEXT';
}

interface AddonFileUpload extends ProductAddonField {
  __typename?: 'AddonFileUpload';
  /** Field description */
  description?: Maybe<Scalars['String']['output']>;
  /** Field unique name */
  fieldName: Scalars['String']['output'];
  /** Field name */
  name?: Maybe<Scalars['String']['output']>;
  /** Addon's price */
  price?: Maybe<Scalars['Float']['output']>;
  /** Addon's method of price adjustment */
  priceType?: Maybe<ProductAddonPriceAdjustEnum>;
  /** Is this field required? */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The way the title should be displayed. */
  titleFormat?: Maybe<ProductAddonTitleFormatEnum>;
  /** Field type */
  type?: Maybe<ProductAddonFieldEnum>;
}

interface AddonCheckbox extends ProductAddonField {
  __typename?: 'AddonCheckbox';
  /** Field description */
  description?: Maybe<Scalars['String']['output']>;
  /** Field unique name */
  fieldName: Scalars['String']['output'];
  /** Field name */
  name?: Maybe<Scalars['String']['output']>;
  /** Addon options. */
  options?: Maybe<Array<Maybe<ProductAddonOption>>>;
  /** Addon's price */
  price?: Maybe<Scalars['Float']['output']>;
  /** Addon's method of price adjustment */
  priceType?: Maybe<ProductAddonPriceAdjustEnum>;
  /** Is this field required? */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The way the title should be displayed. */
  titleFormat?: Maybe<ProductAddonTitleFormatEnum>;
  /** Field type */
  type?: Maybe<ProductAddonFieldEnum>;
}

interface AddonMultipleChoice extends ProductAddonField {
  __typename?: 'AddonMultipleChoice';
  /** Method of selection for the addon. */
  choiceType?: Maybe<ProductAddonDisplayAsEnum>;
  /** Field description */
  description?: Maybe<Scalars['String']['output']>;
  /** Field unique name */
  fieldName: Scalars['String']['output'];
  /** Field name */
  name?: Maybe<Scalars['String']['output']>;
  /** Addon options. */
  options?: Maybe<Array<Maybe<ProductAddonOption>>>;
  /** Addon's price */
  price?: Maybe<Scalars['Float']['output']>;
  /** Addon's method of price adjustment */
  priceType?: Maybe<ProductAddonPriceAdjustEnum>;
  /** Is this field required? */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The way the title should be displayed. */
  titleFormat?: Maybe<ProductAddonTitleFormatEnum>;
  /** Field type */
  type?: Maybe<ProductAddonFieldEnum>;
}

interface AddonQuantity extends ProductAddonField {
  __typename?: 'AddonQuantity';
  /** Field description */
  description?: Maybe<Scalars['String']['output']>;
  /** Field unique name */
  fieldName: Scalars['String']['output'];
  /** Field name */
  name?: Maybe<Scalars['String']['output']>;
  /** Addon's price */
  price?: Maybe<Scalars['Float']['output']>;
  /** Addon's method of price adjustment */
  priceType?: Maybe<ProductAddonPriceAdjustEnum>;
  /** Mininum and maximum amounts that must be purchase upon application of this addon. */
  quantityLimit?: Maybe<ProductAddonIntegerRange>;
  /** Is this field required? */
  required?: Maybe<Scalars['Boolean']['output']>;
  /** The way the title should be displayed. */
  titleFormat?: Maybe<ProductAddonTitleFormatEnum>;
  /** Field type */
  type?: Maybe<ProductAddonFieldEnum>;
}

interface ProductImage {
  sourceUrl?: string | null;
  altText?: string | null;
  title?: string | null;
  cartSourceUrl?: string | null;
}

interface CartItem {
  quantity?: number | null;
  key: string;
  product?: Product | null;
  variation?: { node: Variation } | null;
}

interface CartItemInput {
  /** Product addons */
  addons?: Maybe<Array<Maybe<ProductAddonInput>>>;
  /** JSON string representation of extra cart item data */
  extraData?: Maybe<Scalars['String']['input']>;
  /** Cart item product database ID or global ID */
  productId: Scalars['Int']['input'];
  /** Cart item quantity */
  quantity?: Maybe<Scalars['Int']['input']>;
  /** Cart item product variation attributes */
  variation?: Maybe<Array<Maybe<ProductAttributeInput>>>;
  /** Cart item product variation database ID or global ID */
  variationId?: Maybe<Scalars['Int']['input']>;
}

interface CartContents {
  itemCount?: number | null;
  productCount?: number | null;
  nodes?: CartItem[];
}

interface PaymentGateway {
  title?: string | null;
  id?: string | null;
}

interface AppliedCoupon {
  description?: string | null;
  discountTax: string;
  discountAmount: string;
  code: string;
}

interface ShippingMethodRate {
  cost?: string | null;
  id: string;
  label?: string | null;
}

interface Cart {
  total?: string | null;
  subtotal?: string | null;
  totalTax?: string | null;
  discountTotal?: string | null;
  shippingTotal?: string | null;
  chosenShippingMethods?: Array<string | null> | null;
  isEmpty?: boolean | null;
  appliedCoupons?: Array<AppliedCoupon | null> | null;
  availableShippingMethods?: Array<{ rates?: Array<ShippingMethodRate | null> | null } | null> | null;
  contents?: CartContents | null;
}

interface LineItem {
  quantity?: number | null;
  total?: string | null;
  product?: Product | null;
  variation?: Variation | null;
}

interface Order {
  needsPayment?: boolean | null;
  needsProcessing?: boolean | null;
  status?: OrderStatusEnum | null;
  databaseId?: number | null;
  orderKey?: string | null;
  subtotal?: string | null;
  total?: string | null;
  totalTax?: string | null;
  shippingTotal?: string | null;
  paymentMethodTitle?: string | null;
  paymentMethod?: string | null;
  date?: string | null;
  customer?: Customer | null;
  lineItems?: { nodes?: LineItem[] } | null;
}
