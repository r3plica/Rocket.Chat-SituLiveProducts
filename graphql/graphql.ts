/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Any: any;
  /** The `Byte` scalar type represents non-fractional whole numeric values. Byte can represent values between 0 and 255. */
  Byte: any;
  /** The `DateTime` scalar represents an ISO-8601 compliant date time type. */
  DateTime: any;
  /** The built-in `Decimal` scalar type. */
  Decimal: any;
  /** The `Long` scalar type represents non-fractional signed whole 64-bit numeric values. Long can represent values between -(2^63) and 2^63 - 1. */
  Long: any;
  UUID: any;
};

export type Address = {
  __typename?: 'Address';
  brandId: Scalars['Int'];
  city?: Maybe<Scalars['String']>;
  country: Scalars['String'];
  county?: Maybe<Scalars['String']>;
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  id: Scalars['Int'];
  line1?: Maybe<Scalars['String']>;
  line2?: Maybe<Scalars['String']>;
  line3?: Maybe<Scalars['String']>;
  postCode: Scalars['String'];
  primary: Scalars['Boolean'];
  stateOrProvince?: Maybe<Scalars['String']>;
  updatedBy: Scalars['UUID'];
};

export type AnalyticsEvent = {
  __typename?: 'AnalyticsEvent';
  analyticsSourceId: Scalars['Int'];
  data: Scalars['String'];
  dateCreated: Scalars['DateTime'];
  id: Scalars['Int'];
  path?: Maybe<Scalars['String']>;
  sessionId?: Maybe<Scalars['UUID']>;
  source?: Maybe<AnalyticsSource>;
  synchronised: Scalars['Boolean'];
  type: AnalyticsEventType;
  userId?: Maybe<Scalars['UUID']>;
};

export type AnalyticsEventInput = {
  analyticsSourceId: Scalars['Int'];
  data?: InputMaybe<Scalars['String']>;
  path?: InputMaybe<Scalars['String']>;
  sessionId?: InputMaybe<Scalars['UUID']>;
  type: Scalars['Int'];
  userId?: InputMaybe<Scalars['UUID']>;
};

export enum AnalyticsEventType {
  Click = 'CLICK',
  FavouriteAdd = 'FAVOURITE_ADD',
  FavouriteRemove = 'FAVOURITE_REMOVE',
  List = 'LIST',
  NotSet = 'NOT_SET',
  Purchase = 'PURCHASE',
  QuickSearch = 'QUICK_SEARCH',
  Redirect = 'REDIRECT',
  Scan = 'SCAN',
  View = 'VIEW'
}

export type AnalyticsSource = {
  __typename?: 'AnalyticsSource';
  active: Scalars['Boolean'];
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  host: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedBy: Scalars['UUID'];
};

export type AnswerDemoUnit = {
  __typename?: 'AnswerDemoUnit';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  demoUnit?: Maybe<DemoUnit>;
  demoUnitId: Scalars['Int'];
  id: Scalars['Int'];
  number?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['Decimal']>;
  question?: Maybe<Question>;
  questionId: Scalars['Int'];
  questionOption?: Maybe<QuestionOption>;
  questionOptionId?: Maybe<Scalars['Int']>;
  sessionId: Scalars['UUID'];
  text?: Maybe<Scalars['String']>;
  updatedBy: Scalars['UUID'];
};

export type AnswerDemoUnitInput = {
  demoUnitId: Scalars['Int'];
  number?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['Decimal']>;
  questionId: Scalars['Int'];
  questionOptionId?: InputMaybe<Scalars['Int']>;
  sessionId: Scalars['UUID'];
  text?: InputMaybe<Scalars['String']>;
};

export enum ApplyPolicy {
  AfterResolver = 'AFTER_RESOLVER',
  BeforeResolver = 'BEFORE_RESOLVER'
}

export enum AssociationState {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Pending = 'PENDING',
  Unknown = 'UNKNOWN'
}

export type Attribute = {
  __typename?: 'Attribute';
  createdBy: Scalars['UUID'];
  criterionId: Scalars['Int'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  formulas?: Maybe<Array<Maybe<Formula>>>;
  id: Scalars['Int'];
  name: Scalars['String'];
  order: Scalars['Int'];
  orderByGroup: Scalars['Int'];
  priority: Scalars['Int'];
  updatedBy: Scalars['UUID'];
};

export type AuthorizeDirective = {
  __typename?: 'AuthorizeDirective';
  apply: ApplyPolicy;
  policy?: Maybe<Scalars['String']>;
  roles?: Maybe<Array<Scalars['String']>>;
};

export type Brand = {
  __typename?: 'Brand';
  addresses?: Maybe<Array<Maybe<Address>>>;
  authroizedDomains?: Maybe<Scalars['String']>;
  averageSalePrice?: Maybe<Scalars['Decimal']>;
  categories?: Maybe<Array<Maybe<BrandCategory>>>;
  children?: Maybe<Array<Maybe<Brand>>>;
  commercialCheckPassed: Scalars['Boolean'];
  confirmed: Scalars['Boolean'];
  contacts?: Maybe<Array<Maybe<Contact>>>;
  createdBy: Scalars['UUID'];
  crmId: Scalars['Long'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  displayReturnOnInvestment: Scalars['Boolean'];
  exploreImage?: Maybe<Scalars['String']>;
  exploreVideo?: Maybe<Scalars['String']>;
  folderName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  images?: Maybe<Scalars['String']>;
  innovationGuide: Scalars['Boolean'];
  innovationName?: Maybe<Scalars['String']>;
  logoImage?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  notes?: Maybe<Scalars['String']>;
  parentBrand?: Maybe<Brand>;
  parentId?: Maybe<Scalars['Int']>;
  primaryImage?: Maybe<Scalars['String']>;
  promotions?: Maybe<Array<Maybe<Promotion>>>;
  purchasePredictionPercent?: Maybe<Scalars['Float']>;
  redirectProductsScans: Scalars['Boolean'];
  sentimentQuestions?: Maybe<Array<Maybe<Question>>>;
  slug?: Maybe<Scalars['String']>;
  socialLinks?: Maybe<Array<Maybe<SocialLink>>>;
  subscriptions?: Maybe<Array<Maybe<Subscription>>>;
  updatedBy: Scalars['UUID'];
  url?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<BrandUser>>>;
  videos?: Maybe<Scalars['String']>;
};

export type BrandCategory = {
  __typename?: 'BrandCategory';
  brand?: Maybe<Brand>;
  brandId: Scalars['Int'];
  category?: Maybe<Category>;
  categoryId: Scalars['Int'];
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  id: Scalars['Int'];
  updatedBy: Scalars['UUID'];
};

export type BrandSearchRequestModelInput = {
  applyDefaultFilters: Scalars['Boolean'];
  facets?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filters?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  getAllResults: Scalars['Boolean'];
  identifier?: InputMaybe<Scalars['String']>;
  includePartialMatches: Scalars['Boolean'];
  itemsToShow: Scalars['Int'];
  mustFindResults?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  page: Scalars['Int'];
  searchTerm?: InputMaybe<Scalars['String']>;
};

export type BrandSearchResponseModel = {
  __typename?: 'BrandSearchResponseModel';
  facets?: Maybe<Array<KeyValuePairOfStringAndListOfFacetModel>>;
  hasMoreResults: Scalars['Boolean'];
  identifier?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<SimpleBrandViewModel>>>;
  total: Scalars['Long'];
};

export type BrandUser = {
  __typename?: 'BrandUser';
  brand?: Maybe<Brand>;
  brandId: Scalars['Int'];
  confirmed: Scalars['Boolean'];
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  id: Scalars['Int'];
  updatedBy: Scalars['UUID'];
  userId: Scalars['UUID'];
};

export type Category = {
  __typename?: 'Category';
  active: Scalars['Boolean'];
  brands?: Maybe<Array<Maybe<BrandCategory>>>;
  contextDataActive: Scalars['Boolean'];
  createdBy: Scalars['UUID'];
  criteria?: Maybe<Array<Maybe<Criterion>>>;
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  feeds?: Maybe<Array<Maybe<Feed>>>;
  fields?: Maybe<Array<Maybe<Field>>>;
  folderName?: Maybe<Scalars['String']>;
  groups?: Maybe<Array<Maybe<CategoryGroup>>>;
  id: Scalars['Int'];
  images?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  recommendationActive: Scalars['Boolean'];
  recommendationQuestions?: Maybe<Array<Maybe<RecommendationQuestion>>>;
  scenarios?: Maybe<Array<Maybe<Scenario>>>;
  slug?: Maybe<Scalars['String']>;
  sortations?: Maybe<Array<Maybe<Sortation>>>;
  titleText?: Maybe<Array<Maybe<TitleText>>>;
  updatedBy: Scalars['UUID'];
};

export type CategoryGroup = {
  __typename?: 'CategoryGroup';
  categoryId: Scalars['Int'];
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  groupId: Scalars['Int'];
  id: Scalars['Int'];
  updatedBy: Scalars['UUID'];
};

export type CategorySearchRequestModelInput = {
  applyDefaultFilters: Scalars['Boolean'];
  facets?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filters?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  getAllResults: Scalars['Boolean'];
  identifier?: InputMaybe<Scalars['String']>;
  includePartialMatches: Scalars['Boolean'];
  itemsToShow: Scalars['Int'];
  mustFindResults?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  page: Scalars['Int'];
  searchTerm?: InputMaybe<Scalars['String']>;
};

export type CategorySearchResponseModel = {
  __typename?: 'CategorySearchResponseModel';
  facets?: Maybe<Array<KeyValuePairOfStringAndListOfFacetModel>>;
  hasMoreResults: Scalars['Boolean'];
  identifier?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<SimpleCategoryViewModel>>>;
  total: Scalars['Long'];
};

export type CategoryViewModel = {
  __typename?: 'CategoryViewModel';
  active: Scalars['Boolean'];
  brands?: Maybe<Array<Maybe<Brand>>>;
  contextDataActive: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  images?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  recommendationActive: Scalars['Boolean'];
  slug?: Maybe<Scalars['String']>;
};

export type CollectionInput = {
  favourites?: InputMaybe<Array<InputMaybe<FavouriteInput>>>;
  name?: InputMaybe<Scalars['String']>;
  shareable?: InputMaybe<Scalars['Boolean']>;
};

export type Competition = {
  __typename?: 'Competition';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  end: Scalars['DateTime'];
  entryFrequency: CompetitionEntryFrequency;
  extraDataItems?: Maybe<Array<Maybe<CompetitionExtraData>>>;
  favouriteCollection?: Maybe<FavouriteCollection>;
  favouriteCollectionId?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  instantWinDailyEndHour?: Maybe<Scalars['Int']>;
  instantWinDailyEndOddsDenominator?: Maybe<Scalars['Int']>;
  instantWinDailyPrizeInterrupt?: Maybe<Scalars['Int']>;
  instantWinDailyPrizes?: Maybe<Scalars['Int']>;
  instantWinDailyStartHour?: Maybe<Scalars['Int']>;
  instantWinDailyStartOddsDenominator?: Maybe<Scalars['Int']>;
  instantWinGrandPrizeInterrupt?: Maybe<Scalars['Int']>;
  instantWinGrandPrizeOddsDenominator?: Maybe<Scalars['Int']>;
  instantWinGrandPrizeStartDate?: Maybe<Scalars['DateTime']>;
  minimumScore: Scalars['Int'];
  name: Scalars['String'];
  start: Scalars['DateTime'];
  state: CompetitionState;
  type: CompetitionType;
  updatedBy: Scalars['UUID'];
};

export enum CompetitionDataType {
  Boolean = 'BOOLEAN',
  Numeric = 'NUMERIC',
  Text = 'TEXT',
  Undefined = 'UNDEFINED'
}

export enum CompetitionEntryFrequency {
  Daily = 'DAILY',
  NotSet = 'NOT_SET',
  Once = 'ONCE'
}

export type CompetitionEntryInput = {
  competitionExtraDataId: Scalars['Int'];
  value?: InputMaybe<Scalars['String']>;
};

export type CompetitionExtraData = {
  __typename?: 'CompetitionExtraData';
  answer?: Maybe<Scalars['String']>;
  competition?: Maybe<Competition>;
  competitionId: Scalars['Int'];
  createdBy: Scalars['UUID'];
  dataType: CompetitionDataType;
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  entries?: Maybe<Array<Maybe<CompetitionUserExtraData>>>;
  id: Scalars['Int'];
  include: Scalars['Boolean'];
  name: Scalars['String'];
  updatedBy: Scalars['UUID'];
};

export type CompetitionInstantWinSettingsInput = {
  dailyPrizes?: InputMaybe<Scalars['Int']>;
  endHour?: InputMaybe<Scalars['Int']>;
  endOddsDenominator?: InputMaybe<Scalars['Int']>;
  id: Scalars['Int'];
  startHour?: InputMaybe<Scalars['Int']>;
  startOddsDenominator?: InputMaybe<Scalars['Int']>;
};

export type CompetitionQueueEntryViewModel = {
  __typename?: 'CompetitionQueueEntryViewModel';
  dateCreated: Scalars['DateTime'];
  id: Scalars['Int'];
  userId: Scalars['UUID'];
  userName?: Maybe<Scalars['String']>;
};

export enum CompetitionState {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Pending = 'PENDING',
  Unknown = 'UNKNOWN'
}

export enum CompetitionType {
  Draw = 'DRAW',
  InstantWin = 'INSTANT_WIN',
  NotSet = 'NOT_SET'
}

export type CompetitionUserEntrySubscriptionViewModel = {
  __typename?: 'CompetitionUserEntrySubscriptionViewModel';
  id: Scalars['Int'];
  state: CompetitionUserExtraDataState;
};

export type CompetitionUserExtraData = {
  __typename?: 'CompetitionUserExtraData';
  competitionExtraData?: Maybe<CompetitionExtraData>;
  competitionExtraDataId: Scalars['Int'];
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  id: Scalars['Int'];
  state: CompetitionUserExtraDataState;
  updatedBy: Scalars['UUID'];
  userId: Scalars['UUID'];
  value?: Maybe<Scalars['String']>;
};

export enum CompetitionUserExtraDataState {
  InstantWinClaimed = 'INSTANT_WIN_CLAIMED',
  InstantWinPending = 'INSTANT_WIN_PENDING',
  Lose = 'LOSE',
  Pending = 'PENDING',
  Unknown = 'UNKNOWN',
  Win = 'WIN'
}

export type Contact = {
  __typename?: 'Contact';
  brandId: Scalars['Int'];
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['Int'];
  lastName: Scalars['String'];
  type: ContactType;
  updatedBy: Scalars['UUID'];
};

export enum ContactType {
  CustomerOrSupporter = 'CUSTOMER_OR_SUPPORTER',
  FounderOrEmployee = 'FOUNDER_OR_EMPLOYEE',
  Other = 'OTHER'
}

export type Conversion = {
  __typename?: 'Conversion';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  expression: Scalars['String'];
  feedId: Scalars['Int'];
  fieldName: Scalars['String'];
  filterOperator: FilterOperator;
  id: Scalars['Int'];
  mathOperator: MathOperator;
  name: Scalars['String'];
  target?: Maybe<Scalars['String']>;
  updatedBy: Scalars['UUID'];
  value: Scalars['Float'];
};

export type Criterion = {
  __typename?: 'Criterion';
  attributes?: Maybe<Array<Maybe<Attribute>>>;
  categoryId: Scalars['Int'];
  comparable: Scalars['Boolean'];
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  highlight: Scalars['Boolean'];
  id: Scalars['Int'];
  isRecommendationQuestion: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  orderByGroup: Scalars['Int'];
  priority: Scalars['Int'];
  recommendationTitle?: Maybe<Scalars['String']>;
  updatedBy: Scalars['UUID'];
};

export type DailyCrewStatisticsViewModel = {
  __typename?: 'DailyCrewStatisticsViewModel';
  date: Scalars['DateTime'];
  demoRecipientsCount: Scalars['Int'];
  demosCount: Scalars['Int'];
  userId: Scalars['UUID'];
};

export enum DataType {
  Csv = 'CSV',
  Json = 'JSON',
  Xml = 'XML'
}

export type Demo = {
  __typename?: 'Demo';
  demoUnit?: Maybe<DemoUnit>;
  demoUnitId: Scalars['Int'];
  id: Scalars['Int'];
  numberOfRecipients: Scalars['Int'];
  presentedTime: Scalars['DateTime'];
  presenterId: Scalars['UUID'];
};

export type DemoInput = {
  demoUnitId: Scalars['Int'];
  numberOfRecipients: Scalars['Int'];
};

export type DemoUnit = {
  __typename?: 'DemoUnit';
  accessories?: Maybe<Scalars['String']>;
  addressId?: Maybe<Scalars['Int']>;
  brand?: Maybe<Brand>;
  brandId: Scalars['Int'];
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  demo?: Maybe<Scalars['String']>;
  demoUnitLocations?: Maybe<Array<Maybe<DemoUnitLocation>>>;
  descriptor?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  item?: Maybe<Item>;
  itemId: Scalars['Int'];
  merchandiseName?: Maybe<Scalars['String']>;
  portableApplianceTestingNotes?: Maybe<Scalars['String']>;
  productId?: Maybe<Scalars['String']>;
  productName: Scalars['String'];
  productUrl?: Maybe<Scalars['String']>;
  referenceNumber?: Maybe<Scalars['String']>;
  returnAddress?: Maybe<Address>;
  serialNumber?: Maybe<Scalars['String']>;
  spare: Scalars['Boolean'];
  subscription?: Maybe<Subscription>;
  subscriptionId: Scalars['Int'];
  updatedBy: Scalars['UUID'];
  warehouse?: Maybe<Warehouse>;
  warehouseId?: Maybe<Scalars['Int']>;
};

export type DemoUnitLocation = {
  __typename?: 'DemoUnitLocation';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  demoUnit?: Maybe<DemoUnit>;
  demoUnitId: Scalars['Int'];
  endDate: Scalars['DateTime'];
  id: Scalars['Int'];
  location?: Maybe<Location>;
  locationId: Scalars['Int'];
  returned: Scalars['Boolean'];
  startDate: Scalars['DateTime'];
  state: DemoUnitLocationState;
  updatedBy: Scalars['UUID'];
};

export enum DemoUnitLocationState {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  Pending = 'PENDING',
  Returned = 'RETURNED'
}

export type DemoUnitQuestionsViewModel = {
  __typename?: 'DemoUnitQuestionsViewModel';
  id: Scalars['Int'];
  questions?: Maybe<Array<Maybe<Question>>>;
};

export enum DiscountType {
  Fixed = 'FIXED',
  Percent = 'PERCENT'
}

export type EntrantInput = {
  email?: InputMaybe<Scalars['String']>;
  instagramUserName?: InputMaybe<Scalars['String']>;
  leaderBoardId: Scalars['Int'];
  name?: InputMaybe<Scalars['String']>;
  score: Scalars['Float'];
};

export type Exclusion = {
  __typename?: 'Exclusion';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  expression: Scalars['String'];
  feedId: Scalars['Int'];
  fieldName: Scalars['String'];
  filterOperator: FilterOperator;
  id: Scalars['Int'];
  name: Scalars['String'];
  target?: Maybe<Scalars['String']>;
  updatedBy: Scalars['UUID'];
};

export type FacetModel = {
  __typename?: 'FacetModel';
  count?: Maybe<Scalars['Long']>;
  from?: Maybe<Scalars['Any']>;
  to?: Maybe<Scalars['Any']>;
  value?: Maybe<Scalars['Any']>;
};

export type Favourite = {
  __typename?: 'Favourite';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  favouriteCollectionId: Scalars['Int'];
  followedUp: Scalars['Boolean'];
  id: Scalars['Int'];
  promotions?: Maybe<Array<Maybe<FavouritePromotion>>>;
  type: FavouriteType;
  updatedBy: Scalars['UUID'];
  url: Scalars['String'];
};

export type FavouriteCollection = {
  __typename?: 'FavouriteCollection';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  favourites?: Maybe<Array<Maybe<Favourite>>>;
  id: Scalars['Int'];
  name: Scalars['String'];
  public: Scalars['Boolean'];
  shareable: Scalars['Boolean'];
  slug: Scalars['String'];
  updatedBy: Scalars['UUID'];
};

export type FavouriteInput = {
  favouriteCollectionId: Scalars['Int'];
  followedUp?: InputMaybe<Scalars['Boolean']>;
  type: FavouriteType;
  url?: InputMaybe<Scalars['String']>;
};

export type FavouritePromotion = {
  __typename?: 'FavouritePromotion';
  dateSent: Scalars['DateTime'];
  favourite?: Maybe<Favourite>;
  favouriteId: Scalars['Int'];
  id: Scalars['Int'];
  promotion?: Maybe<Promotion>;
  promotionId: Scalars['Int'];
};

export enum FavouriteType {
  Brand = 'BRAND',
  Cms = 'CMS',
  Product = 'PRODUCT',
  Staff = 'STAFF'
}

export type Feed = {
  __typename?: 'Feed';
  active: Scalars['Boolean'];
  category?: Maybe<Category>;
  categoryId: Scalars['Int'];
  connector?: Maybe<FeedConnector>;
  conversions?: Maybe<Array<Maybe<Conversion>>>;
  createdBy: Scalars['UUID'];
  dataType: DataType;
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  exclusions?: Maybe<Array<Maybe<Exclusion>>>;
  fieldMaps?: Maybe<Array<Maybe<FieldMap>>>;
  fieldsForCurrentFeedType?: Maybe<Array<Maybe<Field>>>;
  frequency: FeedFrequency;
  id: Scalars['Int'];
  inclusions?: Maybe<Array<Maybe<Inclusion>>>;
  interval?: Maybe<Scalars['Int']>;
  lastRunTime?: Maybe<Scalars['DateTime']>;
  name?: Maybe<Scalars['String']>;
  rules?: Maybe<Array<Maybe<Rule>>>;
  startTime?: Maybe<Scalars['DateTime']>;
  token?: Maybe<Scalars['String']>;
  transformations?: Maybe<Array<Maybe<Transformation>>>;
  type: FeedType;
  updatedBy: Scalars['UUID'];
  url: Scalars['String'];
};

export enum FeedConnector {
  Squirrel = 'SQUIRREL'
}

export enum FeedFrequency {
  Days = 'DAYS',
  Manual = 'MANUAL',
  Minutes = 'MINUTES',
  Unknown = 'UNKNOWN'
}

export enum FeedType {
  Backup = 'BACKUP',
  Catalogue = 'CATALOGUE',
  Connector = 'CONNECTOR',
  Specification = 'SPECIFICATION'
}

export type Field = {
  __typename?: 'Field';
  canCopy: Scalars['Boolean'];
  categoryId: Scalars['Int'];
  createdBy: Scalars['UUID'];
  dataType: FieldDataType;
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  display: Scalars['Boolean'];
  displayTitle?: Maybe<Scalars['String']>;
  fieldMaps?: Maybe<Array<Maybe<FieldMap>>>;
  id: Scalars['Int'];
  isSpecification: Scalars['Boolean'];
  mapped: Scalars['Boolean'];
  name: Scalars['String'];
  order: Scalars['Int'];
  orderByGroup: Scalars['Int'];
  required: Scalars['Boolean'];
  updatedBy: Scalars['UUID'];
};

export enum FieldDataType {
  BigInteger = 'BIG_INTEGER',
  Boolean = 'BOOLEAN',
  Double = 'DOUBLE',
  Integer = 'INTEGER',
  Text = 'TEXT',
  TextArray = 'TEXT_ARRAY'
}

export type FieldMap = {
  __typename?: 'FieldMap';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  feedId: Scalars['Int'];
  field?: Maybe<Field>;
  fieldId: Scalars['Int'];
  id: Scalars['Int'];
  order: Scalars['Int'];
  orderByGroup: Scalars['Int'];
  path: Scalars['String'];
  updatedBy: Scalars['UUID'];
};

export enum FilterOperator {
  All = 'ALL',
  Between = 'BETWEEN',
  Boolean = 'BOOLEAN',
  Equal = 'EQUAL',
  GreaterThan = 'GREATER_THAN',
  LessThan = 'LESS_THAN',
  Like = 'LIKE',
  NotBetween = 'NOT_BETWEEN',
  NotEqual = 'NOT_EQUAL',
  NotGreaterThan = 'NOT_GREATER_THAN',
  NotLessThan = 'NOT_LESS_THAN',
  NotLike = 'NOT_LIKE',
  RegularExpression = 'REGULAR_EXPRESSION'
}

export type Formula = INestedFormula & {
  __typename?: 'Formula';
  answerId?: Maybe<Scalars['Int']>;
  attributeId?: Maybe<Scalars['Int']>;
  childFormulas?: Maybe<Array<Maybe<INestedFormula>>>;
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  expression: Scalars['String'];
  fieldName: Scalars['String'];
  filterOperator: FilterOperator;
  id: Scalars['Int'];
  parentFormula?: Maybe<Formula>;
  parentFormulaId?: Maybe<Scalars['Int']>;
  scenarioId?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['String']>;
  updatedBy: Scalars['UUID'];
};

export type FormulaViewModel = {
  __typename?: 'FormulaViewModel';
  answerId?: Maybe<Scalars['Int']>;
  attributeId?: Maybe<Scalars['Int']>;
  checkSum?: Maybe<Scalars['String']>;
  expression?: Maybe<Scalars['String']>;
  fieldName?: Maybe<Scalars['String']>;
  filterOperator: FilterOperator;
  hashValues?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  scenarioId?: Maybe<Scalars['Int']>;
  target?: Maybe<Scalars['String']>;
};

export type FormulaViewModelInput = {
  answerId?: InputMaybe<Scalars['Int']>;
  attributeId?: InputMaybe<Scalars['Int']>;
  checkSum?: InputMaybe<Scalars['String']>;
  expression?: InputMaybe<Scalars['String']>;
  fieldName?: InputMaybe<Scalars['String']>;
  filterOperator: FilterOperator;
  id: Scalars['Int'];
  scenarioId?: InputMaybe<Scalars['Int']>;
  target?: InputMaybe<Scalars['String']>;
};

export type GraphQlSubscription = {
  __typename?: 'GraphQLSubscription';
  queueChanged?: Maybe<Array<Maybe<CompetitionUserEntrySubscriptionViewModel>>>;
  userEntryProcessed?: Maybe<CompetitionUserEntrySubscriptionViewModel>;
};


export type GraphQlSubscriptionQueueChangedArgs = {
  competitionId: Scalars['Int'];
};


export type GraphQlSubscriptionUserEntryProcessedArgs = {
  userEntryId: Scalars['Int'];
};

export type GroupViewModel = {
  __typename?: 'GroupViewModel';
  categories?: Maybe<Array<Maybe<Category>>>;
  id: Scalars['Int'];
  images?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type INestedFormula = {
  childFormulas?: Maybe<Array<Maybe<INestedFormula>>>;
  parentFormulaId?: Maybe<Scalars['Int']>;
};

export type IdentityUser = {
  __typename?: 'IdentityUser';
  dateCreated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  email?: Maybe<Scalars['String']>;
  emailConfirmed: Scalars['Boolean'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  jobTitle?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  optIn: Scalars['Boolean'];
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberConfirmed: Scalars['Boolean'];
  userName?: Maybe<Scalars['String']>;
};

export type Inclusion = {
  __typename?: 'Inclusion';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  expression: Scalars['String'];
  feedId: Scalars['Int'];
  fieldName: Scalars['String'];
  filterOperator: FilterOperator;
  id: Scalars['Int'];
  name: Scalars['String'];
  target?: Maybe<Scalars['String']>;
  updatedBy: Scalars['UUID'];
};

export type Item = {
  __typename?: 'Item';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Decimal'];
  updatedBy: Scalars['UUID'];
};

export type KeyValuePairOfStringAndListOfFacetModel = {
  __typename?: 'KeyValuePairOfStringAndListOfFacetModel';
  key: Scalars['String'];
  value: Array<FacetModel>;
};

export type KeyValuePairOfStringAndString = {
  __typename?: 'KeyValuePairOfStringAndString';
  key: Scalars['String'];
  value: Scalars['String'];
};

export type KeyValuePairOfStringAndStringInput = {
  key: Scalars['String'];
  value: Scalars['String'];
};

export type LeaderBoard = {
  __typename?: 'LeaderBoard';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  entrants?: Maybe<Array<Maybe<LeaderBoardEntrant>>>;
  id: Scalars['Int'];
  maxScore: Scalars['Float'];
  name: Scalars['String'];
  sortDirection: LeaderBoardSortDirection;
  updatedBy: Scalars['UUID'];
};

export type LeaderBoardEntrant = {
  __typename?: 'LeaderBoardEntrant';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  email?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  instagramUserName?: Maybe<Scalars['String']>;
  leaderBoardId: Scalars['Int'];
  name: Scalars['String'];
  score: Scalars['Float'];
  updatedBy: Scalars['UUID'];
};

export enum LeaderBoardSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export enum LinkType {
  Facebook = 'FACEBOOK',
  Instagram = 'INSTAGRAM',
  LinkedIn = 'LINKED_IN',
  Snapchat = 'SNAPCHAT',
  TikTok = 'TIK_TOK',
  Twitter = 'TWITTER',
  WhatsApp = 'WHATS_APP',
  Youtube = 'YOUTUBE'
}

export enum LiveStreamOutcome {
  Delay = 'DELAY',
  Error = 'ERROR',
  Fail = 'FAIL',
  Success = 'SUCCESS',
  Timeout = 'TIMEOUT',
  Unknown = 'UNKNOWN'
}

export type Location = {
  __typename?: 'Location';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  demoUnitLocations?: Maybe<Array<Maybe<DemoUnitLocation>>>;
  exploreQrCodeImage?: Maybe<Scalars['String']>;
  folderName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  images?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  planogram?: Maybe<Scalars['String']>;
  qrCode?: Maybe<Array<Scalars['Byte']>>;
  targetUrl?: Maybe<Scalars['String']>;
  theatre?: Maybe<Theatre>;
  theatreId: Scalars['Int'];
  updatedBy: Scalars['UUID'];
  x: Scalars['Int'];
  y: Scalars['Int'];
  zone?: Maybe<Zone>;
  zoneId?: Maybe<Scalars['Int']>;
};

export type LocationFavouriteViewModel = {
  __typename?: 'LocationFavouriteViewModel';
  scanRedirectUrl?: Maybe<Scalars['String']>;
  type: FavouriteType;
  url?: Maybe<Scalars['String']>;
};

export type LocationSearchRequestModelInput = {
  applyDefaultFilters: Scalars['Boolean'];
  facets?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filters?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  getAllResults: Scalars['Boolean'];
  identifier?: InputMaybe<Scalars['String']>;
  includePartialMatches: Scalars['Boolean'];
  itemsToShow: Scalars['Int'];
  mustFindResults?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  page: Scalars['Int'];
  searchTerm?: InputMaybe<Scalars['String']>;
};

export type LocationSearchResponseModel = {
  __typename?: 'LocationSearchResponseModel';
  facets?: Maybe<Array<KeyValuePairOfStringAndListOfFacetModel>>;
  hasMoreResults: Scalars['Boolean'];
  identifier?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<SimpleLocationViewModel>>>;
  total: Scalars['Long'];
};

export enum MathOperator {
  Add = 'ADD',
  Divide = 'DIVIDE',
  Multiply = 'MULTIPLY',
  Subtract = 'SUBTRACT'
}

export type Mutation = {
  __typename?: 'Mutation';
  addEntries?: Maybe<Array<Maybe<CompetitionUserExtraData>>>;
  addFavourite?: Maybe<Favourite>;
  addShareableFavourite?: Maybe<Favourite>;
  claimInstantWinPrize?: Maybe<CompetitionUserExtraData>;
  closeCompetition?: Maybe<Competition>;
  createAnalyticsEvent?: Maybe<AnalyticsEvent>;
  createCollection?: Maybe<FavouriteCollection>;
  createCollectionForUser?: Maybe<FavouriteCollection>;
  createDemo?: Maybe<Demo>;
  createDemoUnitAnswers?: Maybe<Array<Maybe<AnswerDemoUnit>>>;
  createDemoUnitAnswersForUser?: Maybe<Array<Maybe<AnswerDemoUnit>>>;
  createDemos?: Maybe<Array<Maybe<Demo>>>;
  createEntrant?: Maybe<LeaderBoardEntrant>;
  createShareableCollection?: Maybe<FavouriteCollection>;
  deleteFavourite?: Maybe<Favourite>;
  deleteShareableFavourite?: Maybe<Favourite>;
  filterProducts?: Maybe<Array<Maybe<SimpleProductViewModel>>>;
  interruptForInstantWin?: Maybe<Competition>;
  processNextEntryInQueue?: Maybe<CompetitionUserExtraData>;
  recommendProducts?: Maybe<Array<Maybe<SimpleProductViewModel>>>;
  scoreProducts?: Maybe<Array<Maybe<SimpleProductViewModel>>>;
  triggerStory?: Maybe<TriggeredStory>;
  updateInstantWinSettings?: Maybe<Competition>;
};


export type MutationAddEntriesArgs = {
  emailAddress?: InputMaybe<Scalars['String']>;
  entries?: InputMaybe<Array<InputMaybe<CompetitionEntryInput>>>;
};


export type MutationAddFavouriteArgs = {
  favourite?: InputMaybe<FavouriteInput>;
};


export type MutationAddShareableFavouriteArgs = {
  favourite?: InputMaybe<FavouriteInput>;
  userId: Scalars['UUID'];
};


export type MutationClaimInstantWinPrizeArgs = {
  userEntryId: Scalars['Int'];
};


export type MutationCloseCompetitionArgs = {
  competitionId: Scalars['Int'];
  key?: InputMaybe<Scalars['String']>;
  sourceId: Scalars['Int'];
};


export type MutationCreateAnalyticsEventArgs = {
  analyticsEvent?: InputMaybe<AnalyticsEventInput>;
};


export type MutationCreateCollectionArgs = {
  collection?: InputMaybe<CollectionInput>;
};


export type MutationCreateCollectionForUserArgs = {
  collection?: InputMaybe<CollectionInput>;
  user?: InputMaybe<UserInput>;
};


export type MutationCreateDemoArgs = {
  demo?: InputMaybe<DemoInput>;
};


export type MutationCreateDemoUnitAnswersArgs = {
  answers?: InputMaybe<Array<InputMaybe<AnswerDemoUnitInput>>>;
  emailAddress?: InputMaybe<Scalars['String']>;
};


export type MutationCreateDemoUnitAnswersForUserArgs = {
  answers?: InputMaybe<Array<InputMaybe<AnswerDemoUnitInput>>>;
  user?: InputMaybe<UserInput>;
};


export type MutationCreateDemosArgs = {
  demos?: InputMaybe<Array<InputMaybe<DemoInput>>>;
};


export type MutationCreateEntrantArgs = {
  entrant?: InputMaybe<EntrantInput>;
};


export type MutationCreateShareableCollectionArgs = {
  collection?: InputMaybe<CollectionInput>;
  userId: Scalars['UUID'];
};


export type MutationDeleteFavouriteArgs = {
  favourite?: InputMaybe<FavouriteInput>;
};


export type MutationDeleteShareableFavouriteArgs = {
  favourite?: InputMaybe<FavouriteInput>;
  userId: Scalars['UUID'];
};


export type MutationFilterProductsArgs = {
  recommendationRequest?: InputMaybe<RecommendationRequestInput>;
};


export type MutationInterruptForInstantWinArgs = {
  competitionId: Scalars['Int'];
  key?: InputMaybe<Scalars['String']>;
  sourceId: Scalars['Int'];
};


export type MutationProcessNextEntryInQueueArgs = {
  competitionId: Scalars['Int'];
  key?: InputMaybe<Scalars['String']>;
  sourceId: Scalars['Int'];
};


export type MutationRecommendProductsArgs = {
  recommendationRequest?: InputMaybe<RecommendationRequestInput>;
};


export type MutationScoreProductsArgs = {
  recommendationRequest?: InputMaybe<RecommendationRequestInput>;
};


export type MutationTriggerStoryArgs = {
  triggeredStory?: InputMaybe<TriggeredStoryInput>;
};


export type MutationUpdateInstantWinSettingsArgs = {
  competitionInstantWinSettings?: InputMaybe<CompetitionInstantWinSettingsInput>;
};

export type Plan = {
  __typename?: 'Plan';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lines?: Maybe<Array<Maybe<PlanLine>>>;
  name: Scalars['String'];
  promoted: Scalars['Boolean'];
  updatedBy: Scalars['UUID'];
};

export type PlanLine = {
  __typename?: 'PlanLine';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  discountAmount: Scalars['Decimal'];
  discountPercent: Scalars['Float'];
  discountType: DiscountType;
  id: Scalars['Int'];
  item?: Maybe<Item>;
  itemId: Scalars['Int'];
  planId: Scalars['Int'];
  price: Scalars['Decimal'];
  quantity: Scalars['Int'];
  updatedBy: Scalars['UUID'];
};

export type ProductRetailer = {
  __typename?: 'ProductRetailer';
  available: Scalars['Boolean'];
  endOfLine: Scalars['Boolean'];
  feedId: Scalars['Int'];
  feedName?: Maybe<Scalars['String']>;
  feedType: FeedType;
  hashValues?: Maybe<Scalars['String']>;
  indirect: Scalars['Boolean'];
  price: Scalars['Float'];
  productUrl?: Maybe<Scalars['String']>;
  retailer?: Maybe<Scalars['String']>;
};

export type ProductSearchRequestModelInput = {
  applyDefaultFilters: Scalars['Boolean'];
  facets?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filters?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  getAllResults: Scalars['Boolean'];
  identifier?: InputMaybe<Scalars['String']>;
  includePartialMatches: Scalars['Boolean'];
  itemsToShow: Scalars['Int'];
  mustFindResults?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  page: Scalars['Int'];
  searchTerm?: InputMaybe<Scalars['String']>;
};

export type ProductSearchResponseModel = {
  __typename?: 'ProductSearchResponseModel';
  facets?: Maybe<Array<KeyValuePairOfStringAndListOfFacetModel>>;
  hasMoreResults: Scalars['Boolean'];
  identifier?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<SimpleProductViewModel>>>;
  total: Scalars['Long'];
};

export type ProductViewModel = {
  __typename?: 'ProductViewModel';
  brand?: Maybe<Scalars['String']>;
  categorySlug?: Maybe<Scalars['String']>;
  colour?: Maybe<Scalars['String']>;
  contextData?: Maybe<Array<KeyValuePairOfStringAndString>>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  modelAlias?: Maybe<Scalars['String']>;
  modelGroup?: Maybe<Scalars['String']>;
  modelSubGroup?: Maybe<Scalars['String']>;
  retailers?: Maybe<Array<Maybe<ProductRetailer>>>;
  scenarios?: Maybe<Array<Maybe<SimpleProductScenarioViewModel>>>;
  specificationFeedId: Scalars['Int'];
  state?: Maybe<Scalars['String']>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
};

export type Promotion = {
  __typename?: 'Promotion';
  brand?: Maybe<Brand>;
  brandId: Scalars['Int'];
  collections?: Maybe<Array<Maybe<PromotionCollectionItem>>>;
  createdBy: Scalars['UUID'];
  ctaColour?: Maybe<Scalars['String']>;
  ctaText?: Maybe<Scalars['String']>;
  ctaUrl?: Maybe<Scalars['String']>;
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  enabled: Scalars['Boolean'];
  endDate?: Maybe<Scalars['DateTime']>;
  exclusive: Scalars['Boolean'];
  folderName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  images?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<PromotionItem>>>;
  membersOnly: Scalars['Boolean'];
  permanent: Scalars['Boolean'];
  productId?: Maybe<Scalars['String']>;
  sendEmails: Scalars['Boolean'];
  shortTitle?: Maybe<Scalars['String']>;
  startDate?: Maybe<Scalars['DateTime']>;
  state: PromotionState;
  staticCtaUrl: Scalars['Boolean'];
  title: Scalars['String'];
  type: PromotionType;
  updatedBy: Scalars['UUID'];
  value?: Maybe<Scalars['Float']>;
  valueType?: Maybe<PromotionValueType>;
  voucherCode?: Maybe<Scalars['String']>;
};

export type PromotionCollection = {
  __typename?: 'PromotionCollection';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  id: Scalars['Int'];
  name: Scalars['String'];
  promotions?: Maybe<Array<Maybe<PromotionCollectionItem>>>;
  slug?: Maybe<Scalars['String']>;
  updatedBy: Scalars['UUID'];
};

export type PromotionCollectionItem = {
  __typename?: 'PromotionCollectionItem';
  collection?: Maybe<PromotionCollection>;
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  id: Scalars['Int'];
  promotion?: Maybe<Promotion>;
  promotionCollectionId: Scalars['Int'];
  promotionId: Scalars['Int'];
  updatedBy: Scalars['UUID'];
};

export type PromotionItem = {
  __typename?: 'PromotionItem';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  id: Scalars['Int'];
  promotion?: Maybe<Promotion>;
  promotionId: Scalars['Int'];
  text: Scalars['String'];
  updatedBy: Scalars['UUID'];
};

export enum PromotionState {
  Active = 'ACTIVE',
  Disabled = 'DISABLED',
  Expired = 'EXPIRED',
  Pending = 'PENDING'
}

export enum PromotionType {
  Advert = 'ADVERT',
  Benefits = 'BENEFITS',
  Offer = 'OFFER',
  Voucher = 'VOUCHER'
}

export enum PromotionValueType {
  Amount = 'AMOUNT',
  Percent = 'PERCENT'
}

export type Query = {
  __typename?: 'Query';
  brandBySlug?: Maybe<Brand>;
  categoryBySlug?: Maybe<CategoryViewModel>;
  collectionById?: Maybe<FavouriteCollection>;
  collectionBySlug?: Maybe<FavouriteCollection>;
  competition?: Maybe<Competition>;
  favouriteFromLocation?: Maybe<LocationFavouriteViewModel>;
  leaderBoard?: Maybe<LeaderBoard>;
  listBrandActiveDemoUnits?: Maybe<Array<Maybe<DemoUnit>>>;
  listBrandPromotions?: Maybe<Array<Maybe<Promotion>>>;
  listBrands?: Maybe<Array<Maybe<Brand>>>;
  listCategories?: Maybe<Array<Maybe<CategoryViewModel>>>;
  listCategoryGroups?: Maybe<Array<Maybe<GroupViewModel>>>;
  listCollections?: Maybe<Array<Maybe<FavouriteCollection>>>;
  listCompetitions?: Maybe<Array<Maybe<Competition>>>;
  listCrew?: Maybe<Array<Maybe<IdentityUser>>>;
  listCrewStatistics?: Maybe<Array<Maybe<DailyCrewStatisticsViewModel>>>;
  listCriteria?: Maybe<Array<Maybe<Criterion>>>;
  listDemoUnitQuestions?: Maybe<Array<Maybe<DemoUnitQuestionsViewModel>>>;
  listInstantWinQueue?: Maybe<Array<Maybe<CompetitionQueueEntryViewModel>>>;
  listLeaderBoardEntrants?: Maybe<Array<Maybe<LeaderBoardEntrant>>>;
  listLeaderBoards?: Maybe<Array<Maybe<LeaderBoard>>>;
  listPlans?: Maybe<Array<Maybe<Plan>>>;
  listProducts?: Maybe<Array<Maybe<ProductViewModel>>>;
  listPromotionsByCollectionSlug?: Maybe<Array<Maybe<Promotion>>>;
  listQuestions?: Maybe<Array<Maybe<RecommendationQuestionViewModel>>>;
  listQueue?: Maybe<Array<Maybe<CompetitionUserExtraData>>>;
  listScenarios?: Maybe<Array<Maybe<Scenario>>>;
  listStories?: Maybe<Array<Maybe<StoryViewModel>>>;
  listStorySchedule?: Maybe<Array<Maybe<ScheduleViewModel>>>;
  listSubscriptions?: Maybe<Array<Maybe<Subscription>>>;
  listTheatreActiveDemoUnits?: Maybe<Array<Maybe<DemoUnit>>>;
  listTheatreStorySchedule?: Maybe<Array<Maybe<ScheduleViewModel>>>;
  listTheatres?: Maybe<Array<Maybe<Theatre>>>;
  listUserDemos?: Maybe<Array<Maybe<Demo>>>;
  listUserTriggeredStories?: Maybe<Array<Maybe<TriggeredStory>>>;
  listVenues?: Maybe<Array<Maybe<Venue>>>;
  location?: Maybe<Location>;
  randomPromotionForCollection?: Maybe<Promotion>;
  search?: Maybe<SearchResponseModel>;
  searchBrands?: Maybe<BrandSearchResponseModel>;
  searchCategories?: Maybe<CategorySearchResponseModel>;
  searchLocations?: Maybe<LocationSearchResponseModel>;
  searchProducts?: Maybe<ProductSearchResponseModel>;
  shareableCollectionBySlug?: Maybe<FavouriteCollection>;
  theatreBySlug?: Maybe<Theatre>;
  userEntry?: Maybe<CompetitionUserExtraData>;
  venueBySlug?: Maybe<Venue>;
};


export type QueryBrandBySlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryCategoryBySlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryCollectionByIdArgs = {
  id: Scalars['Int'];
};


export type QueryCollectionBySlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryCompetitionArgs = {
  id: Scalars['Int'];
};


export type QueryFavouriteFromLocationArgs = {
  locationId: Scalars['Int'];
};


export type QueryLeaderBoardArgs = {
  id: Scalars['Int'];
};


export type QueryListBrandActiveDemoUnitsArgs = {
  brandId: Scalars['Int'];
};


export type QueryListBrandPromotionsArgs = {
  id: Scalars['Int'];
};


export type QueryListCrewStatisticsArgs = {
  endDate: Scalars['DateTime'];
  startDate: Scalars['DateTime'];
};


export type QueryListCriteriaArgs = {
  id: Scalars['Int'];
};


export type QueryListDemoUnitQuestionsArgs = {
  demoUnitIds?: InputMaybe<Array<Scalars['Int']>>;
  emailAddress?: InputMaybe<Scalars['String']>;
  sessionId?: InputMaybe<Scalars['String']>;
};


export type QueryListInstantWinQueueArgs = {
  competitionId: Scalars['Int'];
};


export type QueryListLeaderBoardEntrantsArgs = {
  id: Scalars['Int'];
};


export type QueryListProductsArgs = {
  categoryId: Scalars['Int'];
};


export type QueryListPromotionsByCollectionSlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryListQuestionsArgs = {
  categorySlug?: InputMaybe<Scalars['String']>;
};


export type QueryListQueueArgs = {
  competitionId: Scalars['Int'];
};


export type QueryListScenariosArgs = {
  id: Scalars['Int'];
};


export type QueryListStoryScheduleArgs = {
  date: Scalars['DateTime'];
  storyId: Scalars['Int'];
};


export type QueryListTheatreActiveDemoUnitsArgs = {
  theatreId: Scalars['Int'];
};


export type QueryListTheatreStoryScheduleArgs = {
  date: Scalars['DateTime'];
  theatreId: Scalars['Int'];
};


export type QueryListUserDemosArgs = {
  endDate: Scalars['DateTime'];
  startDate: Scalars['DateTime'];
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryListUserTriggeredStoriesArgs = {
  date: Scalars['DateTime'];
  userId?: InputMaybe<Scalars['String']>;
};


export type QueryLocationArgs = {
  id: Scalars['Int'];
};


export type QueryRandomPromotionForCollectionArgs = {
  promotionCollectionSlug?: InputMaybe<Scalars['String']>;
};


export type QuerySearchArgs = {
  model?: InputMaybe<SearchRequestModelInput>;
};


export type QuerySearchBrandsArgs = {
  model?: InputMaybe<BrandSearchRequestModelInput>;
};


export type QuerySearchCategoriesArgs = {
  model?: InputMaybe<CategorySearchRequestModelInput>;
};


export type QuerySearchLocationsArgs = {
  model?: InputMaybe<LocationSearchRequestModelInput>;
};


export type QuerySearchProductsArgs = {
  model?: InputMaybe<ProductSearchRequestModelInput>;
};


export type QueryShareableCollectionBySlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
  userId: Scalars['UUID'];
};


export type QueryTheatreBySlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryUserEntryArgs = {
  userEntryId: Scalars['Int'];
};


export type QueryVenueBySlugArgs = {
  slug?: InputMaybe<Scalars['String']>;
};

export type Question = {
  __typename?: 'Question';
  active: Scalars['Boolean'];
  brand?: Maybe<Brand>;
  brandId?: Maybe<Scalars['Int']>;
  context: QuestionContext;
  createdBy: Scalars['UUID'];
  dataType: QuestionDataType;
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  id: Scalars['Int'];
  options?: Maybe<Array<Maybe<QuestionOption>>>;
  priority: QuestionPriority;
  productId?: Maybe<Scalars['String']>;
  updatedBy: Scalars['UUID'];
};

export enum QuestionContext {
  Brand = 'BRAND',
  None = 'NONE',
  Product = 'PRODUCT'
}

export enum QuestionDataType {
  None = 'NONE',
  Number = 'NUMBER',
  Option = 'OPTION',
  Price = 'PRICE',
  Text = 'TEXT'
}

export type QuestionOption = {
  __typename?: 'QuestionOption';
  active: Scalars['Boolean'];
  allowAdditionalText: Scalars['Boolean'];
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  displayName: Scalars['String'];
  id: Scalars['Int'];
  order: Scalars['Int'];
  orderByGroup: Scalars['Int'];
  question?: Maybe<Question>;
  questionId: Scalars['Int'];
  updatedBy: Scalars['UUID'];
};

export enum QuestionPriority {
  Custom = 'CUSTOM',
  None = 'NONE',
  Primary = 'PRIMARY',
  Secondary = 'SECONDARY'
}

export type RecommendationAnswer = {
  __typename?: 'RecommendationAnswer';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  formulas?: Maybe<Array<Maybe<Formula>>>;
  id: Scalars['Int'];
  order: Scalars['Int'];
  orderByGroup: Scalars['Int'];
  priority: Scalars['Int'];
  recommendationQuestion?: Maybe<RecommendationQuestion>;
  recommendationQuestionId: Scalars['Int'];
  title: Scalars['String'];
  updatedBy: Scalars['UUID'];
};

export type RecommendationAnswerViewModel = {
  __typename?: 'RecommendationAnswerViewModel';
  formulas?: Maybe<Array<Maybe<FormulaViewModel>>>;
  id: Scalars['Int'];
  order: Scalars['Int'];
  orderByGroup: Scalars['Int'];
  priority: Scalars['Int'];
  questionId: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
};

export type RecommendationQuestion = {
  __typename?: 'RecommendationQuestion';
  category?: Maybe<Category>;
  categoryId: Scalars['Int'];
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  id: Scalars['Int'];
  order: Scalars['Int'];
  orderByGroup: Scalars['Int'];
  priority: Scalars['Int'];
  recommendationAnswers?: Maybe<Array<Maybe<RecommendationAnswer>>>;
  shortTitle?: Maybe<Scalars['String']>;
  step: RecommendationQuestionStep;
  title: Scalars['String'];
  updatedBy: Scalars['UUID'];
};

export enum RecommendationQuestionStep {
  Criteria = 'CRITERIA',
  Scenarios = 'SCENARIOS'
}

export type RecommendationQuestionViewModel = {
  __typename?: 'RecommendationQuestionViewModel';
  answers?: Maybe<Array<Maybe<RecommendationAnswerViewModel>>>;
  categoryId: Scalars['Int'];
  id: Scalars['Int'];
  order: Scalars['Int'];
  orderByGroup: Scalars['Int'];
  priority: Scalars['Int'];
  shortTitle?: Maybe<Scalars['String']>;
  step: Scalars['Int'];
  title?: Maybe<Scalars['String']>;
  type: Scalars['Int'];
};

export type RecommendationRequestInput = {
  categorySlug?: InputMaybe<Scalars['String']>;
  formulas?: InputMaybe<Array<InputMaybe<FormulaViewModelInput>>>;
};

export enum RepeatBy {
  Daily = 'DAILY',
  Monthly = 'MONTHLY',
  Undefined = 'UNDEFINED',
  Weekly = 'WEEKLY'
}

export type Rule = {
  __typename?: 'Rule';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  expression: Scalars['String'];
  feedId: Scalars['Int'];
  fieldName: Scalars['String'];
  filterOperator: FilterOperator;
  id: Scalars['Int'];
  name: Scalars['String'];
  target?: Maybe<Scalars['String']>;
  updatedBy: Scalars['UUID'];
};

export type Scenario = {
  __typename?: 'Scenario';
  category?: Maybe<Category>;
  categoryId: Scalars['Int'];
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  description: Scalars['String'];
  folderName?: Maybe<Scalars['String']>;
  formulas?: Maybe<Array<Maybe<Formula>>>;
  id: Scalars['Int'];
  images?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  order: Scalars['Int'];
  orderByGroup: Scalars['Int'];
  updatedBy: Scalars['UUID'];
};

export type ScheduleViewModel = {
  __typename?: 'ScheduleViewModel';
  end: Scalars['DateTime'];
  scheduledStory?: Maybe<ScheduledStory>;
  start: Scalars['DateTime'];
};

export type ScheduledStory = {
  __typename?: 'ScheduledStory';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  end: Scalars['DateTime'];
  id: Scalars['Int'];
  repeatBy: RepeatBy;
  repeatUntil?: Maybe<Scalars['DateTime']>;
  repeated: Scalars['Boolean'];
  start: Scalars['DateTime'];
  story?: Maybe<Story>;
  storyId: Scalars['Int'];
  triggeredStories?: Maybe<Array<Maybe<TriggeredStory>>>;
  updatedBy: Scalars['UUID'];
};

export type SearchRequestModelInput = {
  applyDefaultFilters: Scalars['Boolean'];
  facets?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  filters?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  getAllResults: Scalars['Boolean'];
  identifier?: InputMaybe<Scalars['String']>;
  includePartialMatches: Scalars['Boolean'];
  itemsToShow: Scalars['Int'];
  mustFindResults?: InputMaybe<Scalars['Boolean']>;
  orderBy?: InputMaybe<Array<KeyValuePairOfStringAndStringInput>>;
  page: Scalars['Int'];
  searchTerm?: InputMaybe<Scalars['String']>;
};

export type SearchResponseModel = {
  __typename?: 'SearchResponseModel';
  brands?: Maybe<Array<Maybe<SimpleBrandViewModel>>>;
  categories?: Maybe<Array<Maybe<SimpleCategoryViewModel>>>;
  pages?: Maybe<Array<Maybe<SimplePageViewModel>>>;
  products?: Maybe<Array<Maybe<SimpleProductViewModel>>>;
};

export type SimpleBrandCategoryViewModel = {
  __typename?: 'SimpleBrandCategoryViewModel';
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type SimpleBrandDemoUnitViewModel = {
  __typename?: 'SimpleBrandDemoUnitViewModel';
  assigned: Scalars['Boolean'];
  demoUnitId: Scalars['Int'];
  endDate: Scalars['DateTime'];
  locationId: Scalars['Int'];
  startDate: Scalars['DateTime'];
};

export type SimpleBrandSocialLinkViewModel = {
  __typename?: 'SimpleBrandSocialLinkViewModel';
  brandId: Scalars['Int'];
  id: Scalars['Int'];
  order: Scalars['Int'];
  type: Scalars['Int'];
  url?: Maybe<Scalars['String']>;
};

export type SimpleBrandUserViewModel = {
  __typename?: 'SimpleBrandUserViewModel';
  confirmed: Scalars['Boolean'];
  id: Scalars['Int'];
  userId?: Maybe<Scalars['String']>;
};

export type SimpleBrandViewModel = {
  __typename?: 'SimpleBrandViewModel';
  added: Scalars['DateTime'];
  categories?: Maybe<Array<Maybe<SimpleBrandCategoryViewModel>>>;
  confirmed: Scalars['Boolean'];
  demoUnits?: Maybe<Array<Maybe<SimpleBrandDemoUnitViewModel>>>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['String']>;
  inVenue: Scalars['Boolean'];
  indexUrl?: Maybe<Scalars['String']>;
  innovationGuide: Scalars['Boolean'];
  live: Scalars['Boolean'];
  logoImage?: Maybe<Scalars['String']>;
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  normalisedName?: Maybe<Scalars['String']>;
  promoted: Scalars['Boolean'];
  redirectProductsScans: Scalars['Boolean'];
  slug?: Maybe<Scalars['String']>;
  socialLinks?: Maybe<Array<Maybe<SimpleBrandSocialLinkViewModel>>>;
  url?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<SimpleBrandUserViewModel>>>;
};

export type SimpleCategoryBrandViewModel = {
  __typename?: 'SimpleCategoryBrandViewModel';
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['String']>;
  live: Scalars['Boolean'];
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
};

export type SimpleCategoryViewModel = {
  __typename?: 'SimpleCategoryViewModel';
  active: Scalars['Boolean'];
  brands?: Maybe<Array<Maybe<SimpleCategoryBrandViewModel>>>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['String']>;
  indexUrl?: Maybe<Scalars['String']>;
  liveProductsCount: Scalars['Long'];
  metaDescription?: Maybe<Scalars['String']>;
  metaKeywords?: Maybe<Scalars['String']>;
  metaTitle?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  normalisedName?: Maybe<Scalars['String']>;
  recommendationActive: Scalars['Boolean'];
  slug?: Maybe<Scalars['String']>;
};

export type SimpleContentViewModel = {
  __typename?: 'SimpleContentViewModel';
  body?: Maybe<Scalars['String']>;
  subHeading?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  title?: Maybe<Scalars['String']>;
};

export type SimpleLocationBrandViewModel = {
  __typename?: 'SimpleLocationBrandViewModel';
  added: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['String']>;
  inVenue: Scalars['Boolean'];
  indexUrl?: Maybe<Scalars['String']>;
  logoImage?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  promoted: Scalars['Boolean'];
  slug?: Maybe<Scalars['String']>;
};

export type SimpleLocationProductViewModel = {
  __typename?: 'SimpleLocationProductViewModel';
  added: Scalars['DateTime'];
  brand?: Maybe<Scalars['String']>;
  brandId: Scalars['Int'];
  categoryName?: Maybe<Scalars['String']>;
  categorySlug?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  inVenue: Scalars['Boolean'];
  indexUrl?: Maybe<Scalars['String']>;
  promoted: Scalars['Boolean'];
  retailers?: Maybe<Array<Maybe<SimpleProductRetailerViewModel>>>;
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SimpleLocationViewModel = {
  __typename?: 'SimpleLocationViewModel';
  added: Scalars['DateTime'];
  brand?: Maybe<SimpleLocationBrandViewModel>;
  id?: Maybe<Scalars['String']>;
  inVenue: Scalars['Boolean'];
  indexUrl?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  normalisedName?: Maybe<Scalars['String']>;
  product?: Maybe<SimpleLocationProductViewModel>;
  promoted: Scalars['Boolean'];
  theatreId: Scalars['Int'];
  theatreSlug?: Maybe<Scalars['String']>;
};

export type SimplePageViewModel = {
  __typename?: 'SimplePageViewModel';
  content?: Maybe<Array<Maybe<SimpleContentViewModel>>>;
  description?: Maybe<Scalars['String']>;
  idSlug?: Maybe<Scalars['String']>;
  indexUrl?: Maybe<Scalars['String']>;
  normalisedTitle?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type SimpleProductBrandStoreRetailerViewModel = {
  __typename?: 'SimpleProductBrandStoreRetailerViewModel';
  available: Scalars['Boolean'];
  endOfLine: Scalars['Boolean'];
  feedId: Scalars['Int'];
  feedName?: Maybe<Scalars['String']>;
  feedType: Scalars['Int'];
  indirect: Scalars['Boolean'];
  normalisedRetailer?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  priceWas?: Maybe<Scalars['Float']>;
  productUrl?: Maybe<Scalars['String']>;
  promotionId?: Maybe<Scalars['Int']>;
  retailer?: Maybe<Scalars['String']>;
};

export type SimpleProductCriterionViewModel = {
  __typename?: 'SimpleProductCriterionViewModel';
  attribute?: Maybe<Scalars['String']>;
};

export type SimpleProductDemoUnitViewModel = {
  __typename?: 'SimpleProductDemoUnitViewModel';
  assigned: Scalars['Boolean'];
  demoUnitId: Scalars['Int'];
  endDate: Scalars['DateTime'];
  locationId: Scalars['Int'];
  promoted: Scalars['Boolean'];
  startDate: Scalars['DateTime'];
  theatreId: Scalars['Int'];
  theatreSlug?: Maybe<Scalars['String']>;
};

export type SimpleProductHistoryViewModel = {
  __typename?: 'SimpleProductHistoryViewModel';
  indexUrls?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SimpleProductIdentifiersViewModel = {
  __typename?: 'SimpleProductIdentifiersViewModel';
  asins?: Maybe<Array<Maybe<Scalars['String']>>>;
  eans?: Maybe<Array<Maybe<Scalars['String']>>>;
  gtins?: Maybe<Array<Maybe<Scalars['String']>>>;
  mpns?: Maybe<Array<Maybe<Scalars['String']>>>;
  skus?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SimpleProductPromotionItemViewModel = {
  __typename?: 'SimpleProductPromotionItemViewModel';
  text?: Maybe<Scalars['String']>;
};

export type SimpleProductPromotionViewModel = {
  __typename?: 'SimpleProductPromotionViewModel';
  ctaText?: Maybe<Scalars['String']>;
  ctaUrl?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  images?: Maybe<Scalars['String']>;
  items?: Maybe<Array<Maybe<SimpleProductPromotionItemViewModel>>>;
  productId?: Maybe<Scalars['String']>;
  shortTitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type: Scalars['Int'];
  voucherCode?: Maybe<Scalars['String']>;
};

export type SimpleProductRetailerViewModel = {
  __typename?: 'SimpleProductRetailerViewModel';
  available: Scalars['Boolean'];
  endOfLine: Scalars['Boolean'];
  feedId: Scalars['Int'];
  feedName?: Maybe<Scalars['String']>;
  feedType: Scalars['Int'];
  indirect: Scalars['Boolean'];
  normalisedRetailer?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  productUrl?: Maybe<Scalars['String']>;
  retailer?: Maybe<Scalars['String']>;
};

export type SimpleProductScenarioViewModel = {
  __typename?: 'SimpleProductScenarioViewModel';
  description?: Maybe<Scalars['String']>;
  hashValues?: Maybe<Scalars['String']>;
  images?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  order: Scalars['Int'];
};

export type SimpleProductViewModel = {
  __typename?: 'SimpleProductViewModel';
  added: Scalars['DateTime'];
  brand?: Maybe<Scalars['String']>;
  brandId: Scalars['Int'];
  brandProductPageUrl?: Maybe<Scalars['String']>;
  brandStoreRetailer?: Maybe<SimpleProductBrandStoreRetailerViewModel>;
  categoryName?: Maybe<Scalars['String']>;
  categorySlug?: Maybe<Scalars['String']>;
  criteria?: Maybe<Array<Maybe<SimpleProductCriterionViewModel>>>;
  demoUnits?: Maybe<Array<Maybe<SimpleProductDemoUnitViewModel>>>;
  description?: Maybe<Scalars['String']>;
  endOfLine: Scalars['Boolean'];
  history?: Maybe<SimpleProductHistoryViewModel>;
  id?: Maybe<Scalars['String']>;
  identifiers?: Maybe<SimpleProductIdentifiersViewModel>;
  imageUrl?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  importance: Scalars['Int'];
  inVenue: Scalars['Boolean'];
  indexUrl?: Maybe<Scalars['String']>;
  normalisedTitle?: Maybe<Scalars['String']>;
  price: Scalars['Float'];
  priority?: Maybe<Scalars['String']>;
  promoted: Scalars['Boolean'];
  promotions?: Maybe<Array<Maybe<SimpleProductPromotionViewModel>>>;
  recommended: Scalars['Boolean'];
  retailers?: Maybe<Array<Maybe<SimpleProductRetailerViewModel>>>;
  scenarios?: Maybe<Array<Maybe<SimpleProductScenarioViewModel>>>;
  state?: Maybe<Scalars['String']>;
  subImportance: Scalars['Int'];
  summary?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  variant?: Maybe<Scalars['String']>;
};

export type SocialLink = {
  __typename?: 'SocialLink';
  brandId: Scalars['Int'];
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  id: Scalars['Int'];
  order: Scalars['Int'];
  orderByGroup: Scalars['Int'];
  type: LinkType;
  updatedBy: Scalars['UUID'];
  url: Scalars['String'];
};

export type Sortation = {
  __typename?: 'Sortation';
  category?: Maybe<Category>;
  categoryId: Scalars['Int'];
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  direction: Scalars['Boolean'];
  expression: Scalars['String'];
  fieldName: Scalars['String'];
  filterOperator: FilterOperator;
  id: Scalars['Int'];
  order: Scalars['Int'];
  orderByGroup: Scalars['Int'];
  target?: Maybe<Scalars['String']>;
  updatedBy: Scalars['UUID'];
};

export type Story = {
  __typename?: 'Story';
  brands?: Maybe<Array<Maybe<StoryBrand>>>;
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  demoUnits?: Maybe<Array<Maybe<StoryDemoUnit>>>;
  duration: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  scheduledStories?: Maybe<Array<Maybe<ScheduledStory>>>;
  theatre?: Maybe<Theatre>;
  theatreId: Scalars['Int'];
  triggeredStories?: Maybe<Array<Maybe<TriggeredStory>>>;
  updatedBy: Scalars['UUID'];
};

export type StoryBrand = {
  __typename?: 'StoryBrand';
  brandId: Scalars['Int'];
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  end?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  start: Scalars['DateTime'];
  state: AssociationState;
  storyId: Scalars['Int'];
  updatedBy: Scalars['UUID'];
};

export type StoryDemoUnit = {
  __typename?: 'StoryDemoUnit';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  demoUnitId: Scalars['Int'];
  end?: Maybe<Scalars['DateTime']>;
  id: Scalars['Int'];
  start: Scalars['DateTime'];
  state: AssociationState;
  storyId: Scalars['Int'];
  updatedBy: Scalars['UUID'];
};

export type StoryViewModel = {
  __typename?: 'StoryViewModel';
  brands?: Maybe<Array<Maybe<Brand>>>;
  demoUnits?: Maybe<Array<Maybe<DemoUnit>>>;
  duration: Scalars['Int'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  scheduledStories?: Maybe<Array<Maybe<ScheduledStory>>>;
  theatre?: Maybe<Theatre>;
  theatreId: Scalars['Int'];
  triggeredStories?: Maybe<Array<Maybe<TriggeredStory>>>;
};

export type Subscription = {
  __typename?: 'Subscription';
  billingPeriod: SubscriptionBillingPeriod;
  brand?: Maybe<Brand>;
  brandId: Scalars['Int'];
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  endDate: Scalars['DateTime'];
  expectedDailyClicks?: Maybe<Scalars['Int']>;
  expectedDailyDemos?: Maybe<Scalars['Int']>;
  expectedDailyScans?: Maybe<Scalars['Int']>;
  expectedDailyStories?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  isBillable: Scalars['Boolean'];
  lines?: Maybe<Array<Maybe<SubscriptionLine>>>;
  live: Scalars['Boolean'];
  plan?: Maybe<Plan>;
  planId: Scalars['Int'];
  price: Scalars['Decimal'];
  startDate: Scalars['DateTime'];
  state: SubscriptionState;
  termsAgreed: Scalars['Boolean'];
  updatedBy: Scalars['UUID'];
  venue?: Maybe<Venue>;
  venueId: Scalars['Int'];
  visibleToBrand: Scalars['Boolean'];
};

export enum SubscriptionBillingPeriod {
  Monthly = 'MONTHLY',
  Other = 'OTHER'
}

export type SubscriptionLine = {
  __typename?: 'SubscriptionLine';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  discountAmount: Scalars['Decimal'];
  discountPercent: Scalars['Float'];
  discountType: DiscountType;
  id: Scalars['Int'];
  item?: Maybe<Item>;
  itemId: Scalars['Int'];
  name: Scalars['String'];
  price: Scalars['Decimal'];
  quantity: Scalars['Int'];
  subscriptionId: Scalars['Int'];
  updatedBy: Scalars['UUID'];
};

export enum SubscriptionState {
  Active = 'ACTIVE',
  Cancelled = 'CANCELLED',
  Expired = 'EXPIRED',
  Pending = 'PENDING',
  Reserved = 'RESERVED'
}

export type Theatre = {
  __typename?: 'Theatre';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  folderName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  images?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  parentTheatre?: Maybe<Theatre>;
  parentTheatreId?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  updatedBy: Scalars['UUID'];
  venue?: Maybe<Venue>;
  venueId: Scalars['Int'];
  visionAreaId?: Maybe<Scalars['String']>;
};

export type TitleText = {
  __typename?: 'TitleText';
  categoryId: Scalars['Int'];
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  expression: Scalars['String'];
  id: Scalars['Int'];
  order: Scalars['Int'];
  orderByGroup: Scalars['Int'];
  prefix?: Maybe<Scalars['String']>;
  suffix?: Maybe<Scalars['String']>;
  suppressSpaces: Scalars['Boolean'];
  updatedBy: Scalars['UUID'];
  usePath: Scalars['Boolean'];
};

export type Transformation = {
  __typename?: 'Transformation';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  expression: Scalars['String'];
  feedId: Scalars['Int'];
  fieldName: Scalars['String'];
  filterOperator: FilterOperator;
  id: Scalars['Int'];
  name: Scalars['String'];
  replacement?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  updatedBy: Scalars['UUID'];
};

export type TriggeredStory = {
  __typename?: 'TriggeredStory';
  end: Scalars['DateTime'];
  id: Scalars['Int'];
  liveStreamActive?: Maybe<Scalars['Boolean']>;
  liveStreamId?: Maybe<Scalars['String']>;
  liveStreamOutcome?: Maybe<LiveStreamOutcome>;
  presenterId: Scalars['UUID'];
  scheduledStoryId?: Maybe<Scalars['Int']>;
  start: Scalars['DateTime'];
  story?: Maybe<Story>;
  storyId?: Maybe<Scalars['Int']>;
};

export type TriggeredStoryInput = {
  liveStreamActive?: InputMaybe<Scalars['Boolean']>;
  liveStreamId?: InputMaybe<Scalars['String']>;
  storyId: Scalars['Int'];
};

export type UserInput = {
  callbackUrl?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
};

export type Venue = {
  __typename?: 'Venue';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  description?: Maybe<Scalars['String']>;
  folderName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  images?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  openingDate: Scalars['DateTime'];
  slug: Scalars['String'];
  updatedBy: Scalars['UUID'];
  visionLocationId?: Maybe<Scalars['String']>;
};

export type Warehouse = {
  __typename?: 'Warehouse';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updatedBy: Scalars['UUID'];
  venueId: Scalars['Int'];
};

export type Zone = {
  __typename?: 'Zone';
  createdBy: Scalars['UUID'];
  dateCreated: Scalars['DateTime'];
  dateUpdated: Scalars['DateTime'];
  deleted: Scalars['Boolean'];
  id: Scalars['Int'];
  images?: Maybe<Scalars['String']>;
  locations?: Maybe<Array<Maybe<Location>>>;
  name: Scalars['String'];
  theatre?: Maybe<Theatre>;
  theatreId?: Maybe<Scalars['Int']>;
  updatedBy: Scalars['UUID'];
  venue?: Maybe<Venue>;
  venueId: Scalars['Int'];
  visionAreaId?: Maybe<Scalars['String']>;
  wholeTheatre: Scalars['Boolean'];
};
