/* eslint-disable */
import type { GraphQLClient, RequestOptions } from 'graphql-request';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
  Decimal: number;
  JSON: Record<string, unknown>;
  ZonedDateTime: string;
};

export type ZonosAchievementCategory =
  | 'BILLING'
  | 'GO_LIVE'
  | 'INTEGRATION'
  | 'LABELS'
  | 'SETUP'
  | 'SHIPPING';

export type ZonosAchievementPlatform =
  | 'ADD_ON'
  | 'ALL'
  | 'API'
  | 'BIGCOMMERCE'
  | 'CART_COM'
  | 'CUSTOM'
  | 'ETSY'
  | 'MAGENTO'
  | 'MIVA'
  | 'SALESFORCE'
  | 'SHOPIFY'
  | 'VOLUSION'
  | 'WIX'
  | 'WOOCOMMERCE'
  | 'XCART'
  | 'ZONOS_JS';

export type ZonosAchievementStatusValue =
  | 'COMPLETE'
  | 'INCOMPLETE'
  | 'IN_PROGRESS';

export type ZonosAddressMatchThreshold =
  | 'EXACT_ADMINISTRATIVE_AREA'
  | 'EXACT_COUNTRY'
  | 'EXACT_HOUSE'
  | 'EXACT_LOCALITY'
  | 'EXACT_POSTAL_CODE'
  | 'EXACT_ROAD'
  | 'EXACT_UNIT';

export type ZonosAdjustmentSource =
  | 'API_REQUEST'
  | 'PROMO_CODE';

export type ZonosAgency =
  /** U.S. Consumer Product Safety Commission. */
  | 'CPSC';

export type ZonosAlcoholRecipientType =
  | 'CONSUMER'
  | 'LICENSEE';

export type ZonosAllOptIn =
  /** Opt in to all. */
  | 'ALL';

export type ZonosAmountDetail = {
  __typename?: 'AmountDetail';
  amount: Scalars['Decimal'];
  amountUnrounded: Scalars['Decimal'];
  createdAt: Scalars['DateTime'];
  currencyCode: ZonosCurrencyCode;
  exchangeRateIds: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  orderChargeId: Maybe<Scalars['ID']>;
  targets: Array<ZonosAmountDetailTarget>;
  type: Maybe<ZonosAmountDetailSourceType>;
};

export type ZonosAmountDetailRefundSourceType =
  | 'DISCOUNT'
  | 'DUTY_TAX_FEE'
  | 'ITEM'
  | 'SHIPPING';

export type ZonosAmountDetailSourceType =
  | 'DISCOUNT'
  | 'DUTY'
  | 'DUTY_TAX_FEE'
  | 'FEE'
  | 'ITEM'
  | 'SHIPPING'
  | 'STORE_CREDIT'
  | 'TAX';

export type ZonosAmountDetailSubtotalType =
  | 'DISCOUNT'
  | 'DUTY'
  | 'FEE'
  | 'ITEM'
  | 'SHIPPING'
  | 'TAX';

export type ZonosAmountDetailTarget =
  | 'BILLING_COMPANY'
  | 'MERCHANT_BASE'
  | 'MERCHANT_PROVIDED'
  | 'MERCHANT_SETTLED'
  | 'SHOPPER_PRESENTED'
  | 'ZONOS_BASE';

export type ZonosAmountRange = {
  max?: InputMaybe<Scalars['Decimal']>;
  min?: InputMaybe<Scalars['Decimal']>;
};

export type ZonosAmountSubtotalDetailFilter = {
  target?: InputMaybe<Array<ZonosAmountDetailTarget>>;
  type?: InputMaybe<Array<ZonosAmountDetailSubtotalType>>;
  use?: InputMaybe<Array<ZonosAmountDetailTarget>>;
};

export type ZonosAmountSubtotalRefundDetailFilter = {
  type?: InputMaybe<Array<ZonosAmountDetailRefundSourceType>>;
};

/** A breakdown of the monetary amounts included in the `Order`. */
export type ZonosAmountSubtotals = {
  __typename?: 'AmountSubtotals';
  /** The discounts of duties in an order. */
  discounts: Maybe<Scalars['Decimal']>;
  /** The subtotal of duties in an order. */
  duties: Scalars['Decimal'];
  /** The subtotal of fees in an order. */
  fees: Scalars['Decimal'];
  /** The subtotal for all the `Item`s in an order. */
  items: Scalars['Decimal'];
  /** The subtotal for the shipping fee in an order. */
  shipping: Scalars['Decimal'];
  /** The subtotal for taxes in an order. */
  taxes: Scalars['Decimal'];
  /** Variance between provided grand total and calculation. */
  variance: Scalars['Decimal'];
};

/** Possible statuses for the AnalyticsProvider object */
export type ZonosAnalyticsProviderStatus =
  | 'DISABLED'
  | 'ENABLED';

/** Represents an organization's shared theme settings which get used across Zonos Checkout, Zonos Hello, and other shopper-facing experiences. */
export type ZonosAppearanceSettings = {
  __typename?: 'AppearanceSettings';
  /** A hex color code used for providing brand accent colors across the UI */
  colorPrimary: Scalars['String'];
  /** A hex color code used for providing brand accent colors across the UI */
  colorSecondary: Scalars['String'];
  /** When the AppearanceSettings was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the AppearanceSettings */
  createdBy: Scalars['ID'];
  /** The font family used for display. Comes from Google Fonts */
  fontFamily: Scalars['String'];
  /** A unique identifier for the AppearanceSettings */
  id: Scalars['ID'];
  /** Specifies a link to your organization's logo as an external URL. If not specified, a placeholder image will be used. */
  logoUrl: Scalars['String'];
  /** Whether this AppearanceSettings is in live or test mode */
  mode: ZonosMode;
  /** The organization this AppearanceSettings belongs to */
  organization: Scalars['ID'];
  /** Specifies what `ElementsUIStyle` should be used */
  style: ZonosElementsUiStyle;
  /** Specifies whether to display in dark or light mode */
  theme: ZonosElementsUiTheme;
  /** When the AppearanceSettings was most recently updated */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the AppearanceSettings */
  updatedBy: Scalars['ID'];
  /** Indicates whether to display a 'Powered by Zonos' badge on Checkout and Hello */
  zonosAttribution: Maybe<ZonosZonosAttribution>;
};

/** Input type for updating an existing AppearanceSettings object. */
export type ZonosAppearanceSettingsUpdateInput = {
  /** A hex color code used for providing brand accent colors across the UI */
  colorPrimary?: InputMaybe<Scalars['String']>;
  /** A hex color code used for providing brand accent colors across the UI */
  colorSecondary?: InputMaybe<Scalars['String']>;
  /** The font family used for display. Comes from Google Fonts */
  fontFamily?: InputMaybe<Scalars['String']>;
  /** Specifies a link to your organization's logo as an external URL. If not specified, a placeholder image will be used. */
  logoUrl?: InputMaybe<Scalars['String']>;
  /** Specifies what `ElementsUIStyle` should be used */
  style?: InputMaybe<ZonosElementsUiStyle>;
  /** Specifies whether to display in dark or light mode */
  theme?: InputMaybe<ZonosElementsUiTheme>;
  /** Indicates whether to display a 'Powered by Zonos' badge on Checkout and Hello */
  zonosAttribution?: InputMaybe<ZonosZonosAttribution>;
};

export type ZonosAppliedDisclaim = {
  __typename?: 'AppliedDisclaim';
  /** AI confidence score (0-1) for the disclaim determination. */
  confidenceScore: Maybe<Scalars['Decimal']>;
  /** Intended use code for the disclaim (e.g. "130.XXX"). */
  intendedUseCode: Scalars['String'];
  /** Type of disclaim (A or B). */
  type: ZonosDisclaimType;
};

export type ZonosAppliedExemption = {
  __typename?: 'AppliedExemption';
  /** Exemption code (e.g. "1630.2(b)"). */
  code: Maybe<Scalars['String']>;
  /** AI confidence score (0-1) that this exemption applies. */
  confidenceScore: Maybe<Scalars['Decimal']>;
  /** Summary of the exemption. */
  summary: Maybe<Scalars['String']>;
};

export type ZonosAppliedItemRestrictions = {
  __typename?: 'AppliedItemRestrictions';
  /** Denotes the highest level of restriction matched */
  action: Maybe<ZonosItemRestrictionAction>;
  /** Country in which the item originates. */
  countryOfOrigin: Maybe<ZonosCountryCode>;
  id: Scalars['ID'];
  /** Human readable item description */
  itemDescription: Maybe<Scalars['String']>;
  /** HS code for this item. */
  itemHsCode: Scalars['String'];
  /** External id for consumers mapping if desired */
  itemId: Maybe<Scalars['String']>;
  /** list of applicable item restrictions */
  itemRestrictions: Maybe<Array<Maybe<ZonosItemRestriction>>>;
};

export type ZonosAppliedRegulation = {
  __typename?: 'AppliedRegulation';
  /** The regulatory agency this regulation comes from. */
  agency: ZonosAgency;
  /** AI confidence score (0-1) that this regulation applies. */
  confidenceScore: Maybe<Scalars['Decimal']>;
  /** Exemption if one applies to this regulation. */
  exemption: Maybe<ZonosAppliedExemption>;
  /** The regulation ID. */
  id: Scalars['ID'];
  /** The CFR reference (e.g. "16 CFR 1420"). */
  referenceId: Scalars['String'];
  /** Compliance requirements for this regulation (testing, labeling, etc.). */
  requirements: Maybe<ZonosRegulatoryRequirements>;
  /** Summary of the regulation. */
  summary: Maybe<Scalars['String']>;
};

export type ZonosAppliedRegulationsCpsc = {
  __typename?: 'AppliedRegulationsCPSC';
  /** The regulatory agency this result is for. */
  agency: ZonosAgency;
  /** Mutually exclusive regulations where one must be chosen based on product attributes (size, age, etc.). */
  alternates: Maybe<Array<ZonosRegulationAlternate>>;
  /** AI-generated audit trail explaining the regulation determination (markdown format). */
  auditTrail: Maybe<Scalars['String']>;
  /** Certificate type required (GCC or CPC). Null if disclaim applies or no regulations match. */
  certificateType: Maybe<Scalars['String']>;
  /** Disclaim information if applicable (takes priority over certificate filing). */
  disclaim: Maybe<ZonosAppliedDisclaim>;
  /** Applied regulations ID. */
  id: Scalars['ID'];
  /** Product attributes that were used to determine which regulations apply. */
  itemAttributes: Maybe<ZonosItemAttributes>;
  /** The category hierarchy associated with the item. */
  itemCategories: Maybe<Array<Scalars['String']>>;
  /** Human readable item description. */
  itemDescription: Maybe<Scalars['String']>;
  /** HTS code for this item (validated/classified). */
  itemHtsCode: Scalars['String'];
  /** External id for consumer mapping. */
  itemId: Maybe<Scalars['String']>;
  /** The material composition of the item. */
  itemMaterial: Maybe<Scalars['String']>;
  /** Human readable item name. */
  itemName: Maybe<Scalars['String']>;
  /** List of regulations (CFR codes) that apply to this item, with any applicable exemptions. */
  regulations: Array<ZonosAppliedRegulation>;
};

export type ZonosAppliedRestrictions = {
  __typename?: 'AppliedRestrictions';
  /** Applied restrictions ID. */
  id: Scalars['ID'];
  /** Item brand. */
  itemBrand: Maybe<Scalars['String']>;
  /** Item category. */
  itemCategory: Maybe<Scalars['String']>;
  /** Human readable item description. */
  itemDescription: Maybe<Scalars['String']>;
  /** HS code for this item. */
  itemHsCode: Scalars['String'];
  /** External id for consumer mapping. */
  itemId: Maybe<Scalars['String']>;
  /** Item materials. */
  itemMaterials: Maybe<Scalars['String']>;
  /** Human readable item name. */
  itemName: Maybe<Scalars['String']>;
  /** List of restrictions that apply to this item. */
  restrictions: Maybe<Array<Maybe<ZonosMatchedRestriction>>>;
};

export type ZonosBatteryDetail = {
  __typename?: 'BatteryDetail';
  /** Indicates what material the battery is made of. */
  material: ZonosBatteryMaterialType;
  /** Indicates how the battery is arranged in the package. */
  packingType: ZonosBatteryPackingType;
};

export type ZonosBatteryDetailInput = {
  /** Indicates what material the battery is made of. */
  material: ZonosBatteryMaterialType;
  /** Indicates how the battery is arranged in the package. */
  packingType: ZonosBatteryPackingType;
};

export type ZonosBatteryMaterialType =
  | 'LITHIUM_ION'
  | 'LITHIUM_METAL';

export type ZonosBatteryPackingType =
  /** Battery is contained inside an item in the package */
  | 'BATTERY_INSIDE_EQUIPMENT'
  /** The package only contains a battery/batteries. */
  | 'BATTERY_ONLY'
  /** Battery is packaged with the equipment and not contained in the item */
  | 'BATTERY_PACKAGED_WITH_EQUIPMENT';

export type ZonosBillingOptionCode =
  | 'DDP_AND_DDU'
  | 'SHIPPER_ONLY'
  | 'THIRD_PARTY'
  | 'UNAVAILABLE';

/** End use of the imported goods, determines filing treatment. */
export type ZonosBrokerageNatureOfTransaction =
  /** Documents or correspondence only. */
  | 'DOCUMENTS'
  /** Goods purchased for commercial resale. */
  | 'FOR_RESALE'
  /** Gift — no commercial transaction. */
  | 'GIFT'
  /** Personal purchase, not for commercial resale. */
  | 'NOT_FOR_RESALE'
  /** Returned goods. */
  | 'RETURN';

/** Partner Government Agencies recognized by Brokerage. Country-prefixed so non-US PGAs (UK, EU, CA, ...) slot in alongside US ones without renames. OTHER is a transitional fallback — when ItemDgs's catalog grows beyond this list, the resolver maps unknown strings to OTHER and warn-logs them so coverage gaps surface in operational logs. */
export type ZonosBrokeragePgaAgency =
  /** Fallback for agency strings from upstream catalogs that have no enum mapping yet. Always paired with a warn-log in the resolver so unknown agencies are visible operationally. */
  | 'OTHER'
  /** US Bureau of Alcohol, Tobacco, Firearms and Explosives. */
  | 'US_ATF'
  /** US Centers for Disease Control and Prevention. */
  | 'US_CDC'
  /** US Consumer Product Safety Commission. */
  | 'US_CPSC'
  /** US Drug Enforcement Administration. */
  | 'US_DEA'
  /** US Environmental Protection Agency (general). */
  | 'US_EPA'
  /** US EPA — Toxic Substances Control Act. */
  | 'US_EPA_TSCA'
  /** US Federal Communications Commission. */
  | 'US_FCC'
  /** US Food and Drug Administration. */
  | 'US_FDA'
  /** US National Highway Traffic Safety Administration. */
  | 'US_NHTSA'
  /** US Office of Foreign Assets Control. */
  | 'US_OFAC'
  /** US Alcohol and Tobacco Tax and Trade Bureau. */
  | 'US_TTB'
  /** US Department of Agriculture — Agricultural Marketing Service. */
  | 'US_USDA_AMS'
  /** US Department of Agriculture — Animal and Plant Health Inspection Service. */
  | 'US_USDA_APHIS'
  /** US Department of Agriculture — Food Safety and Inspection Service. */
  | 'US_USDA_FSIS'
  /** US Fish and Wildlife Service. */
  | 'US_USFWS';

/** Mirror of ItemDgs's @inaccessible PgaRequirementStrictness, brought into the brokerage subgraph. */
export type ZonosBrokeragePgaRequirementStrictness =
  /** Filing may be required depending on shipment specifics; resolve via RestrictedItemDgs. */
  | 'CONDITIONAL'
  /** Filing is required. */
  | 'REQUIRED';

/** CBP mode of transport (ACE Appendix T). */
export type ZonosBrokerageTransportationMode =
  /** Air, containerized. */
  | 'AIR_CONTAINER'
  /** Air, non-containerized. */
  | 'AIR_NON_CONTAINER'
  /** Auto. */
  | 'AUTO'
  /** Border water-borne (Mexico/Canada only). */
  | 'BORDER_WATERBORNE'
  /** Fixed transport installations (pipeline, powerhouse). */
  | 'FIXED_TRANSPORT'
  /** Mail. */
  | 'MAIL'
  /** Passenger, hand-carried. */
  | 'PASSENGER_HAND_CARRIED'
  /** Pedestrian. */
  | 'PEDESTRIAN'
  /** Rail, containerized. */
  | 'RAIL_CONTAINER'
  /** Rail, non-containerized. */
  | 'RAIL_NON_CONTAINER'
  /** Road, other (foot and animal-borne). */
  | 'ROAD_OTHER'
  /** Truck, containerized. */
  | 'TRUCK_CONTAINER'
  /** Truck, non-containerized. */
  | 'TRUCK_NON_CONTAINER'
  /** Vessel, containerized. */
  | 'VESSEL_CONTAINER'
  /** Vessel, non-containerized. */
  | 'VESSEL_NON_CONTAINER';

export type ZonosBulkJob = {
  __typename?: 'BulkJob';
  /** The number of rows that errored out during import */
  errorCount: Maybe<Scalars['Int']>;
  /** Unsuccessful rows and their error messages */
  errorMessages: Maybe<Array<Maybe<ZonosUploadErrors>>>;
  /** The ID of the BulkJob */
  id: Scalars['String'];
  /** The unique identifier associated with an organization. */
  organization: Scalars['ID'];
  /** Current status of the BulkJob */
  status: Maybe<ZonosBulkJobStatus>;
  /** The total number of rows in a CSV upload */
  totalCount: Maybe<Scalars['Int']>;
  /** The number of rows that successfully were saved */
  uploadCount: Maybe<Scalars['Int']>;
};

export type ZonosBulkJobStatus =
  | 'ERROR'
  | 'FILE_SAVED'
  | 'INITIALIZED'
  | 'PROCESSING';

/** Extends the Carrier type to include associated parties. */
export type ZonosCarrier = {
  __typename?: 'Carrier';
  /** A unique identifier tied to a Carrier. */
  code: Scalars['String'];
  /** A list of country-specific restrictions a `Carrier` should be aware of (e.g., weight, dimensions, pricing). */
  countryConstraints: Maybe<Array<ZonosCountryConstraint>>;
  /** When this Carrier was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Carrier. */
  createdBy: Scalars['ID'];
  /** The Carrier's API credentials. */
  credentials: Maybe<Array<ZonosCarrierCredential>>;
  /** The unique identifier for the carrier entity. */
  id: Scalars['ID'];
  /** The humanly-memorable display name for the Carrier. */
  name: Scalars['String'];
  /** A list of parties associated with the carrier entity. */
  parties: Maybe<Array<Maybe<ZonosParty>>>;
  /** Provides a list of `ServiceLevel`s that are supported by the Carrier. */
  serviceLevels: Maybe<Array<ZonosServiceLevel>>;
  /** When this Carrier was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Carrier. */
  updatedBy: Scalars['ID'];
};

/** A `CarrierAccount` is an account number that is associated with a carrier for a given customer or group of customers. Rates may vary across carrier accounts, depending on the customer and volume with the carrier. Shipments cannot be created without a `carrierAccount`. */
export type ZonosCarrierAccount = {
  __typename?: 'CarrierAccount';
  /** The `Carrier` associated with this CarrierAccount. */
  carrier: ZonosCarrier;
  /** When the CarrierAccount was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the CarrierAccount. */
  createdBy: Scalars['ID'];
  /** Where the credentials are stored. */
  credentialProvider: ZonosCredentialProvider;
  /** The `Carrier`'s API credentials. */
  credentials: Maybe<Array<Maybe<ZonosCarrierAccountCredential>>>;
  /** A unique identifier for the CarrierAccount. */
  id: Scalars['ID'];
  /** Indicates what type of integration this CarrierAccount supports either SOAP or REST. */
  integrationType: ZonosCarrierAccountIntegrationType;
  /** Specifies whether the CarrierAccount is in live or test mode. */
  mode: ZonosMode;
  /** The `Organization` associated with the CarrierAccount. */
  organization: Scalars['ID'];
  /** Rate type for the carrier account. Either `RETAIL` or `NEGOTIATED`. */
  rateType: Maybe<ZonosCarrierAccountRateType>;
  /** Indicates whether this CarrierAccount was registered through Zonos APIs or another source */
  registrationType: ZonosCarrierAccountRegistrationType;
  /** When the CarrierAccount was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the CarrierAccount. */
  updatedBy: Scalars['ID'];
};

/** Options to specify the API type to apply to the credentials. */
export type ZonosCarrierAccountApiUsage =
  /** Used when billing third party for duty and tax. */
  | 'BILL_DUTY_TAX'
  /** "Used when connecting to a Label API. */
  | 'LABEL'
  /** Used when connecting to a Rating API. */
  | 'RATING';

/** Enum value representing the list of carriers that are supported in the `carrierAccountConnect` mutation. */
export type ZonosCarrierAccountCode =
  | 'APC'
  | 'DHL'
  | 'FEDEX'
  | 'UPS';

export type ZonosCarrierAccountConnectCredentialInput = {
  /** The type of credential that applies to the value. */
  type: ZonosCarrierCredentialTypeCode;
  /** The value of the credential. */
  value: Scalars['String'];
};

export type ZonosCarrierAccountConnectInput = {
  /** Enum value representing the carrier the account is associated with. */
  carrierCode: ZonosCarrierAccountCode;
  /** The API credentials that will be used for the new account. */
  credentials: Array<ZonosCarrierAccountConnectCredentialInput>;
  /** Rate type for the carrier account. Either `RETAIL` or `NEGOTIATED`. If `RETAIL` is provided, a request to the carrier will be made and the presence of a discount will not be validated. If `NEGOTIATED` is provided, a request to the carrier will be made and a warning will be returned if there is no discounted rate in the response. */
  rateType?: InputMaybe<ZonosCarrierAccountRateType>;
  /** Boolean value indicating if the carrier account was registered through Zonos services */
  zonosRegistered?: InputMaybe<Scalars['Boolean']>;
};

export type ZonosCarrierAccountConnectResult = {
  __typename?: 'CarrierAccountConnectResult';
  /** The `CarrierAccount` that was created and validated. */
  carrierAccount: Maybe<ZonosCarrierAccount>;
  /** A list of errors that occurred during connection/validation. For example, if the rateType provided was NEGOTIATED and a discount was not returned, this list would contain an error. This field will be an empty array if no issues were found during validation. */
  errors: Array<Scalars['String']>;
};

/** The storage of the credential value for a specific type of credential used by a carrier. */
export type ZonosCarrierAccountCredential = {
  __typename?: 'CarrierAccountCredential';
  /** The type of credential that applies to the value. */
  type: ZonosCarrierCredentialTypeCode;
  /** The code used as the `Credential` token. */
  value: Scalars['String'];
};

export type ZonosCarrierAccountIntegrationType =
  | 'REST'
  | 'SOAP';

export type ZonosCarrierAccountRateType =
  | 'NEGOTIATED'
  | 'RETAIL';

export type ZonosCarrierAccountRegistrationType =
  | 'OTHER'
  | 'ZONOS';

export type ZonosCarrierAccountsFilter = {
  /** A carrier code to filter the list of accounts */
  carrierCode?: InputMaybe<Scalars['String']>;
  /** ID of the `Carrier` the account is associated with */
  carrierId?: InputMaybe<Scalars['ID']>;
};

/** Enum value indicating if Zonos supports the Carrier API for Rating and/or Labels */
export type ZonosCarrierApiSupportType =
  | 'SUPPORTED'
  | 'UNSUPPORTED';

export type ZonosCarrierBillingInvoice = {
  __typename?: 'CarrierBillingInvoice';
  /** The total amount due for this invoice */
  amount: Scalars['Decimal'];
  /** The carrier reference number for this invoice */
  carrierReferenceNumber: Scalars['String'];
  /** When the `CarrierBillingInvoice` was created in the system */
  createdAt: Scalars['DateTime'];
  /** User who added the invoice to the system */
  createdBy: Scalars['ID'];
  /** The currency the invoice amount is represented in */
  currencyCode: ZonosCurrencyCode;
  /** The date payment is due for this `CarrierBillingInvoice` */
  dueAt: Scalars['DateTime'];
  /** ID prefixed with carrier_billing_invoice_ */
  id: Scalars['ID'];
  /** The Invoice processor details */
  invoiceProcessorDetail: Maybe<ZonosInvoiceProcessorDetail>;
  /** Paginated individual line items represented on this `CarrierBillingInvoice` */
  lineItems: Array<ZonosCarrierBillingInvoiceLineItem>;
  /** Any metadata associated with this `CarrierBillingInvoice` */
  metadata: Maybe<Array<ZonosMetadata>>;
  /** Whether the object is in live or test */
  mode: ZonosMode;
  /** The `Organization` identifier associated with the CarrierBillingInvoice. */
  organizationId: Scalars['ID'];
  /** The status of the payment for this invoice */
  status: ZonosCarrierBillingInvoiceStatus;
  /** Timestamp for when status changed */
  statusTransitions: Array<ZonosCarrierBillingInvoiceStatusTransition>;
  /** When the `CarrierBillingInvoice` was updated */
  updatedAt: Scalars['DateTime'];
  /** The user that updated the `CarrierBillingInvoice` */
  updatedBy: Scalars['ID'];
};

export type ZonosCarrierBillingInvoiceCarrier =
  | 'BROAD_REACH';

export type ZonosCarrierBillingInvoiceConnection = {
  __typename?: 'CarrierBillingInvoiceConnection';
  /** Field edges */
  edges: Array<ZonosCarrierBillingInvoiceEdge>;
  /** Field pageInfo */
  pageInfo: ZonosPageInfo;
};

export type ZonosCarrierBillingInvoiceCreateInput = {
  /** The total amount due for this invoice */
  amount: Scalars['Decimal'];
  /** The currency the amounts of this invoice are represented in */
  currencyCode: ZonosCurrencyCode;
  /** The date the payment of this `CarrierBillingInvoice` is due. If null, the `CarrierBillingInvoice` will be due immediately */
  dueAt?: InputMaybe<Scalars['DateTime']>;
  /** The URL for the invoice if available */
  invoiceUrl?: InputMaybe<Scalars['String']>;
  /** The line items contained within this invoice */
  lineItems: Array<ZonosCarrierBillingInvoiceLineItemInput>;
  /** Any metadata associated with this `CarrierBillingInvoiceLineItem` */
  metadata?: InputMaybe<Array<ZonosMetadataInput>>;
  /** The payor carrier account number */
  payorAccountNumber: Scalars['String'];
  /** The reference number for this invoice */
  referenceNumber: Scalars['String'];
};

export type ZonosCarrierBillingInvoiceEdge = {
  __typename?: 'CarrierBillingInvoiceEdge';
  /** Cursor pointing to this edge for use in pagination */
  cursor: Scalars['String'];
  /** The `CarrierBillingInvoice` object located at this edge in the current pagination connection */
  node: ZonosCarrierBillingInvoice;
};

export type ZonosCarrierBillingInvoiceFilter = {
  /** Represents a range of dates, before, or after the creation date */
  createdAtBetween?: InputMaybe<ZonosDateTimeRange>;
  /** Represents a range of dates, before, or after the due date */
  dueAtBetween?: InputMaybe<ZonosDateTimeRange>;
  /** The payor carrier account number */
  payorAccountNumber?: InputMaybe<Scalars['String']>;
  /** The status of payment for a `CarrierBillingInvoice` */
  status?: InputMaybe<ZonosCarrierBillingInvoiceStatus>;
};

export type ZonosCarrierBillingInvoiceLineItem = {
  __typename?: 'CarrierBillingInvoiceLineItem';
  /** The amount due for this invoice line */
  amount: Scalars['Decimal'];
  /** The charge type for the this`CarrierBillingInvoiceLineItem` */
  chargeType: ZonosCarrierInvoiceLineItemChargeType;
  /** When the `CarrierBillingInvoice` was created in the system */
  createdAt: Scalars['DateTime'];
  /** User who added the invoice to the system */
  createdBy: Scalars['ID'];
  /** The currency the invoice line item amount is represented in */
  currencyCode: Maybe<ZonosCurrencyCode>;
  /** A description of the invoice line */
  description: Maybe<Scalars['String']>;
  /** ID prefixed with carrier_invoice_line_item_ */
  id: Scalars['ID'];
  /** Any metadata associated with this `CarrierBillingInvoiceLineItem` */
  metadata: Maybe<Array<ZonosMetadata>>;
  /** The carrier reference(s) for this invoice line */
  references: Maybe<Array<ZonosCarrierBillingInvoiceLineItemReference>>;
  /** The carrier service level code for this invoice line if applicable */
  serviceLevel: Maybe<Scalars['String']>;
  /** The carrier tracking number for this invoice line */
  trackingNumber: Scalars['String'];
  /** When the `CarrierBillingInvoice` was updated */
  updatedAt: Scalars['DateTime'];
  /** The user that updated the `CarrierBillingInvoice` */
  updatedBy: Scalars['ID'];
};

export type ZonosCarrierBillingInvoiceLineItemInput = {
  /** The amount due for this invoice line */
  amount: Scalars['Decimal'];
  /** The charge type for the this`CarrierBillingInvoiceLineItem` */
  chargeType: ZonosCarrierInvoiceLineItemChargeType;
  /** The currency the invoice line item amount is represented in */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** A description of the invoice line */
  description?: InputMaybe<Scalars['String']>;
  /** Any metadata associated with this `CarrierBillingInvoiceLineItem` */
  metadata?: InputMaybe<Array<ZonosMetadataInput>>;
  /** The carrier reference(s) for this invoice line */
  references?: InputMaybe<Array<ZonosCarrierBillingInvoiceLineItemReferenceInput>>;
  /** The carrier service level for this invoice line */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** The carrier tracking number for this invoice line */
  trackingNumber: Scalars['String'];
};

export type ZonosCarrierBillingInvoiceLineItemReference = {
  __typename?: 'CarrierBillingInvoiceLineItemReference';
  referenceType: ZonosCarrierBillingInvoiceLineItemReferenceType;
  value: Scalars['String'];
};

export type ZonosCarrierBillingInvoiceLineItemReferenceInput = {
  referenceType: ZonosCarrierBillingInvoiceLineItemReferenceType;
  value: Scalars['String'];
};

export type ZonosCarrierBillingInvoiceLineItemReferenceType =
  | 'ACCOUNT_ORDER_NUMBER'
  | 'SHIPMENT_REFERENCE_NUMBER'
  | 'ZONOS_ORDER_ID';

/** Statuses that a `CarrierBillingInvoice` can go through */
export type ZonosCarrierBillingInvoiceStatus =
  /** Invoice drafted pending finalize */
  | 'DRAFT'
  /** Invoice creation failed */
  | 'FAILED'
  /** Invoice created pending payment */
  | 'OPEN'
  /** Invoice paid */
  | 'PAID'
  /** Invoice pending creation */
  | 'PENDING'
  /** Invoice has not been paid and is uncollectable by the system. You may void the invoice and attempt collection another way */
  | 'UNCOLLECTIBLE'
  /** Invoice has been voided */
  | 'VOIDED';

export type ZonosCarrierBillingInvoiceStatusTransition = {
  __typename?: 'CarrierBillingInvoiceStatusTransition';
  /** DateTime indicating when this status change occurred */
  createdAt: Scalars['DateTime'];
  /** ID of the `User` who changed this status */
  createdBy: Scalars['ID'];
  /** Text describing this status change */
  note: Maybe<Scalars['String']>;
  /** Status of this `CarrierBillingInvoice` at the associated createdAt */
  status: ZonosCarrierBillingInvoiceStatus;
};

/** Carrier Connection */
export type ZonosCarrierConnection = {
  __typename?: 'CarrierConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<ZonosCarrierEdge>>>;
  /** Field pageInfo */
  pageInfo: ZonosPageInfo;
};

/** Specifies the components of the credential required to access a `Carrier`'s API. */
export type ZonosCarrierCredential = {
  __typename?: 'CarrierCredential';
  /** When this CarrierCredential was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the CarrierCredential. */
  createdBy: Scalars['ID'];
  /** Specifies whether the field is visible to a merchant. */
  display: ZonosVisibilityCode;
  /** A unique identifier for the CarrierCredential. */
  id: Scalars['ID'];
  /** The name of the CarrierCredential field as denoted by the `Carrier`. */
  label: Scalars['String'];
  /** The sequence that this credential will appear to the user. */
  sequence: Scalars['Int'];
  /** The credential type that is being updated for a `Carrier`. */
  type: ZonosCarrierCredentialTypeCode;
  /** The regex syntax that is required for the CarrierCredential field. */
  validationPattern: Maybe<Scalars['String']>;
};

export type ZonosCarrierCredentialTypeCode =
  | 'ACCESS_LICENSE_NUMBER'
  | 'ACCOUNT_NUMBER'
  | 'API_KEY'
  | 'API_PASSWORD'
  | 'API_TOKEN'
  | 'CUSTOMER_ID'
  | 'METER_NUMBER'
  | 'PAYMENT_COUNTRY_CODE'
  | 'SENDER_LOCATION'
  | 'SHIPPER_NUMBER'
  | 'SITE_ID'
  | 'USER_ID';

export type ZonosCarrierDocumentSubmission = {
  __typename?: 'CarrierDocumentSubmission';
  /** The carrier the `CustomsDocument` will be uploaded to. */
  carrier: ZonosCustomsDocumentCarrier;
  /** The date and time when the CarrierDocumentSubmission was created */
  createdAt: Scalars['DateTime'];
  /** External ID of the document provided by the carrier upon upload. */
  externalId: Scalars['String'];
  /** A unique ID associated with the CarrierDocumentSubmission */
  id: Scalars['ID'];
};

/** Carrier Edge */
export type ZonosCarrierEdge = {
  __typename?: 'CarrierEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<ZonosCarrier>;
};

export type ZonosCarrierInvoiceAccountNumberMapping = ZonosNode & {
  __typename?: 'CarrierInvoiceAccountNumberMapping';
  /** The account number given by the carrier of this CarrierInvoiceAccountNumberMapping. */
  accountNumber: Maybe<Scalars['String']>;
  /** The carrier of this CarrierInvoiceAccountNumberMapping. */
  carrier: ZonosInvoiceCarrier;
  /** The company name given by the carrier of this CarrierInvoiceAccountNumberMapping */
  companyName: Maybe<Scalars['String']>;
  /** When this CarrierInvoiceAccountNumberMapping was created. */
  createdAt: Scalars['DateTime'];
  /** User who added this CarrierInvoiceAccountNumberMapping. */
  createdBy: Scalars['ID'];
  /** The ID of this CarrierInvoiceAccountNumberMapping. */
  id: Scalars['ID'];
  /** The Zonos store ID of this CarrierInvoiceAccountNumberMapping. */
  legacyStoreId: Maybe<Scalars['Int']>;
  /** The organization ID associated to this mapping */
  organization: Scalars['ID'];
  /** When this CarrierInvoiceAccountNumberMapping was updated. */
  updatedAt: Scalars['DateTime'];
  /** The user that updated this CarrierInvoiceAccountNumberMapping. */
  updatedBy: Scalars['ID'];
};

/** CarrierInvoiceAccountNumberMapping Connection */
export type ZonosCarrierInvoiceAccountNumberMappingConnection = {
  __typename?: 'CarrierInvoiceAccountNumberMappingConnection';
  /** Field edges */
  edges: Array<ZonosCarrierInvoiceAccountNumberMappingEdge>;
  /** Field pageInfo */
  pageInfo: ZonosPageInfo;
  totalCount: Scalars['Int'];
};

export type ZonosCarrierInvoiceAccountNumberMappingCreateInput = {
  /** The account number given by the carrier of the `CarrierInvoiceAccountNumberMapping` to be created. */
  accountNumber?: InputMaybe<Scalars['String']>;
  /** The carrier of the `CarrierInvoiceAccountNumberMapping` to be created. */
  carrier: ZonosInvoiceCarrier;
  /** The company name given by the carrier of this `CarrierInvoiceAccountNumberMapping` to be created */
  companyName?: InputMaybe<Scalars['String']>;
  /** The Zonos store ID of the `CarrierInvoiceAccountNumberMapping` to be created. */
  legacyStoreId?: InputMaybe<Scalars['Int']>;
  /** The organization ID associated to this mapping */
  organization: Scalars['ID'];
};

/** CarrierInvoiceAccountNumberMapping Edge */
export type ZonosCarrierInvoiceAccountNumberMappingEdge = {
  __typename?: 'CarrierInvoiceAccountNumberMappingEdge';
  /** Field cursor */
  cursor: Scalars['String'];
  /** Field node */
  node: ZonosCarrierInvoiceAccountNumberMapping;
};

export type ZonosCarrierInvoiceAccountNumberMappingFilter = {
  /** The account number related to `CarrierInvoiceAccountNumberMapping`s. */
  accountNumber?: InputMaybe<Scalars['String']>;
  /** The carrier related to `CarrierInvoiceAccountNumberMapping`s. */
  carrier?: InputMaybe<ZonosInvoiceCarrier>;
  /** The company name given by the carrier of this CarrierInvoiceAccountNumberMapping`s */
  companyName?: InputMaybe<Scalars['String']>;
  /** The legacy store ID related to `CarrierInvoiceAccountNumberMapping`s. */
  legacyStoreId?: InputMaybe<Scalars['Int']>;
};

export type ZonosCarrierInvoiceAccountNumberMappingUpdateInput = {
  /** The account number given by the carrier of the `CarrierInvoiceAccountNumberMapping` to update. */
  accountNumber?: InputMaybe<Scalars['String']>;
  /** The carrier of the `CarrierInvoiceAccountNumberMapping` to update. */
  carrier?: InputMaybe<ZonosInvoiceCarrier>;
  /** The company name given by the carrier of this `CarrierInvoiceAccountNumberMapping` to update */
  companyName?: InputMaybe<Scalars['String']>;
  /** The ID of the `CarrierInvoiceAccountNumberMapping` object to update. */
  id: Scalars['ID'];
  /** The Zonos store ID of the `CarrierInvoiceAccountNumberMapping` to update. */
  legacyStoreId?: InputMaybe<Scalars['Int']>;
  /** The organization ID associated to this mapping */
  organization?: InputMaybe<Scalars['ID']>;
};

export type ZonosCarrierInvoiceLineItemBillingCreateInput = {
  /** The amount that needs to be billed to reconcile the line item */
  amount: Scalars['Decimal'];
  /** ID of the `CarrierInvoiceLineItem` this `Reconciliation` object is associated with */
  lineItemId: Scalars['ID'];
  /** Optional note about this `Reconciliation` object */
  note?: InputMaybe<Scalars['String']>;
  /** The ID of the `Order` this `Reconciliation` will apply to */
  orderId?: InputMaybe<Scalars['ID']>;
  /** The ID of the `Organization` being billed for this line item */
  organizationId: Scalars['ID'];
};

/** Enum value representing the type of charge for a line item */
export type ZonosCarrierInvoiceLineItemChargeType =
  | 'DEFERMENT_FEE'
  | 'DISBURSEMENT_FEE'
  | 'DUTY_TAX_FEE'
  | 'IMPORT_DUTY'
  | 'IMPORT_TAX'
  | 'OTHER'
  | 'PROCESSING_FEE'
  | 'SHIPPING';

export type ZonosCarrierInvoiceLineItemReconcileInput = {
  /** ID of the `CarrierInvoiceLineItem` this `Reconciliation` object will be associated with */
  lineItemId: Scalars['ID'];
  /** Optional ID of the `Order` to reference when looking for existing billing records or transactions */
  orderId?: InputMaybe<Scalars['ID']>;
};

export type ZonosCarrierInvoiceLocation = {
  __typename?: 'CarrierInvoiceLocation';
  /** The state or province full name */
  administrativeArea: Maybe<Scalars['String']>;
  /** Abbreviated code for the state or province */
  administrativeAreaCode: Maybe<Scalars['String']>;
  /** The two-letter ISO country code */
  countryCode: ZonosCountryCode;
  /** Latitude of this location */
  latitude: Maybe<Scalars['Decimal']>;
  /** Address line 1 */
  line1: Maybe<Scalars['String']>;
  /** Address line 2 */
  line2: Maybe<Scalars['String']>;
  /** Address line 3 */
  line3: Maybe<Scalars['String']>;
  /** Address line 4 */
  line4: Maybe<Scalars['String']>;
  /** Locality (city) of this location */
  locality: Maybe<Scalars['String']>;
  /** Longitude of the location */
  longitude: Maybe<Scalars['Decimal']>;
  /** Plus code associated with the location */
  plusCode: Maybe<Scalars['String']>;
  /** Postal code for the location */
  postalCode: Maybe<Scalars['String']>;
  /** The type of property; COMMERCIAL or RESIDENTIAL */
  propertyType: Maybe<ZonosPropertyType>;
};

export type ZonosCarrierInvoiceLocationCreateInput = {
  /** The state or province full name */
  administrativeArea?: InputMaybe<Scalars['String']>;
  /** Abbreviated code for the state or province */
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  /** The two-letter ISO country code */
  countryCode?: InputMaybe<ZonosCountryCode>;
  /** Latitude of the location */
  latitude?: InputMaybe<Scalars['Decimal']>;
  /** Address line 1 */
  line1?: InputMaybe<Scalars['String']>;
  /** Address line 2 */
  line2?: InputMaybe<Scalars['String']>;
  /** Address line 3 */
  line3?: InputMaybe<Scalars['String']>;
  /** Adress line 4 */
  line4?: InputMaybe<Scalars['String']>;
  /** Locality (city) of the location */
  locality?: InputMaybe<Scalars['String']>;
  /** Longitude of the location */
  longitude?: InputMaybe<Scalars['Decimal']>;
  /** Plus code associated with the location */
  plusCode?: InputMaybe<Scalars['String']>;
  /** Postal code for the location */
  postalCode?: InputMaybe<Scalars['String']>;
  /** The type of property i.e. COMMERCIAL or RESIDENTIAL */
  propertyType?: InputMaybe<ZonosPropertyType>;
};

export type ZonosCarrierInvoiceParty = {
  __typename?: 'CarrierInvoiceParty';
  /** Timestamp of when this `CarrierInvoiceParty` was created */
  createdAt: Scalars['DateTime'];
  /** ID of the `User` who created this `CarrierInvoiceParty` */
  createdBy: Scalars['ID'];
  /** Location object related to this `CarrierInvoiceParty` */
  location: Maybe<ZonosCarrierInvoiceLocation>;
  /** Object with details of the person related to this `CarrierInvoiceParty` */
  person: Maybe<ZonosCarrierInvoicePerson>;
  /** The type of party i.e. ORIGIN, DESTINATION */
  type: Maybe<ZonosInvoicePartyType>;
  /** Timestamp of when this `CarrierInvoiceParty` was most recently updated */
  updatedAt: Scalars['DateTime'];
  /** ID of the `User` who most recently updated this `CarrierInvoiceParty` */
  updatedBy: Scalars['ID'];
};

export type ZonosCarrierInvoicePartyCreateInput = {
  /** Input for location details */
  location?: InputMaybe<ZonosCarrierInvoiceLocationCreateInput>;
  /** Input for details of the person associated with the invoice */
  person?: InputMaybe<ZonosCarrierInvoicePersonCreateInput>;
  /** The type of party i.e. ORIGIN, DESTINATION */
  type: ZonosInvoicePartyType;
};

export type ZonosCarrierInvoicePerson = {
  __typename?: 'CarrierInvoicePerson';
  /** Name of the company this person is associated with */
  companyName: Maybe<Scalars['String']>;
  /** E-mail address for this person */
  email: Maybe<Scalars['String']>;
  /** First name of the person */
  firstName: Maybe<Scalars['String']>;
  /** Last name of the person */
  lastName: Maybe<Scalars['String']>;
  /** Phone number associated with this person */
  phone: Maybe<Scalars['String']>;
};

export type ZonosCarrierInvoicePersonCreateInput = {
  /** Name of the company this person is associated with */
  companyName?: InputMaybe<Scalars['String']>;
  /** E-mail address for this person */
  email?: InputMaybe<Scalars['String']>;
  /** First name of the person */
  firstName?: InputMaybe<Scalars['String']>;
  /** Last name of the person */
  lastName?: InputMaybe<Scalars['String']>;
  /** Phone number associated with this person */
  phone?: InputMaybe<Scalars['String']>;
};

/** Carrier packaging type with dimensions and weight limits. */
export type ZonosCarrierPackagingType = {
  __typename?: 'CarrierPackagingType';
  /** The packaging type code. */
  code: ZonosShipmentPackagingTypeCode;
  /** Height in inches. */
  height: Scalars['Decimal'];
  /** Human-readable label for the packaging type. */
  label: Scalars['String'];
  /** Length in inches. */
  length: Scalars['Decimal'];
  /** Maximum weight in pounds. */
  maxWeight: Scalars['Decimal'];
  /** Width in inches. */
  width: Scalars['Decimal'];
};

/** A search for a specific `Carrier` or group of carriers. */
export type ZonosCarriersFilter = {
  /** Enum value to filter by supported or unsupported API carrier accounts */
  apiSupport?: InputMaybe<ZonosCarrierApiSupportType>;
  /** A unique identifier tied to a `Carrier`. */
  code?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** The humanly memorable display name for the `Carrier`. */
  name?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
};

/** A `Cart` represents a collection of `Item`s. */
export type ZonosCart = {
  __typename?: 'Cart';
  /** A list of `CartAdjustment`s. */
  adjustments: Array<ZonosCartAdjustment>;
  /** When this `Cart` was created. */
  createdAt: Scalars['DateTime'];
  /** The user that created this `Cart`. */
  createdBy: Scalars['ID'];
  /** Cart Expiration to override the organization defaultCartExpiration */
  expiresAt: Maybe<Scalars['DateTime']>;
  /** The `Cart`'s unique identifier. */
  id: Scalars['ID'];
  /** The `Items` to add to the cart. */
  items: Array<ZonosItem>;
  /** metadata for the cart */
  metadata: Array<ZonosCartMetadata>;
  /** The organization that the cart belongs to */
  organization: Maybe<ZonosOrganization>;
  /** The organization's id that the cart belongs to */
  organizationId: Scalars['ID'];
  /** When this `Cart` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** User who most recently updated this `Cart`. */
  updatedBy: Scalars['ID'];
};

/** A `CartAdjustment` represents a change/discount to the `Cart`'s amounts. */
export type ZonosCartAdjustment = {
  __typename?: 'CartAdjustment';
  /** The amount of the adjustment */
  amount: Scalars['Decimal'];
  /** Currency the `Adjustment` amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** A description of the adjustment */
  description: Maybe<Scalars['String']>;
  /** the product id for an item specific adjustment */
  productId: Maybe<Scalars['String']>;
  /** The sku for an item specific adjustment */
  sku: Maybe<Scalars['String']>;
  /** The type of adjustment */
  type: ZonosCartAdjustmentType;
};

export type ZonosCartAdjustmentInput = {
  /** The amount of the adjustment */
  amount: Scalars['Decimal'];
  /** Currency the `Adjustment` amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** A description of the adjustment */
  description?: InputMaybe<Scalars['String']>;
  /** the product id for an item specific adjustment */
  productId?: InputMaybe<Scalars['String']>;
  /** The sku for an item specific adjustment */
  sku?: InputMaybe<Scalars['String']>;
  /** The type of adjustment */
  type: ZonosCartAdjustmentType;
};

export type ZonosCartAdjustmentType =
  | 'CART_TOTAL'
  | 'ITEM'
  | 'ORDER_TOTAL'
  | 'PROMO_CODE'
  | 'SHIPPING';

export type ZonosCartCheckoutWorkflowInput = {
  /** The id of the Cart */
  cartId: Scalars['ID'];
  /** The mode the credential needs to be in */
  mode: ZonosMode;
};

/** An auto-generated type for paginating through multiple `Cart`s. */
export type ZonosCartConnection = {
  __typename?: 'CartConnection';
  /** A list of `edges`. */
  edges: Array<ZonosCartEdge>;
  /** Pagination information about the connection. */
  pageInfo: ZonosPageInfo;
  /** The total count of the carts in the connection. */
  totalCount: Scalars['Int'];
};

/** Keep this in sync with CartUpsertInput, will deprecate */
export type ZonosCartCreateInput = {
  /** A list of `CartAdjustment`s. */
  adjustments?: InputMaybe<Array<ZonosCartAdjustmentInput>>;
  /** Cart Expiration to override the organization defaultCartExpiration. Format ex: 2025-01-27T15:00:00Z */
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  /** The `Item` to add to the cart. */
  items: Array<ZonosItemInput>;
  /** metadata for the cart */
  metadata?: InputMaybe<Array<ZonosCartMetadataInput>>;
};

/** An auto-generated type used in pagination. */
export type ZonosCartEdge = {
  __typename?: 'CartEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Scalars['String'];
  /** The object located at this `Edge`. */
  node: ZonosCart;
};

/** Metadata for the cart */
export type ZonosCartMetadata = {
  __typename?: 'CartMetadata';
  /** The key for the metadata */
  key: Scalars['String'];
  /** The value for the metadata */
  value: Scalars['String'];
};

export type ZonosCartMetadataInput = {
  /** The key for the metadata */
  key: Scalars['String'];
  /** The value for the metadata */
  value: Scalars['String'];
};

/** Type of cart */
export type ZonosCartType =
  /** The `Cart` is a standard checkout cart. */
  | 'CHECKOUT'
  /** The `Cart` is a collect cart. */
  | 'COLLECT'
  /** The `Cart` is an invoice cart. */
  | 'INVOICE'
  /** The `Cart` is a invoice collect cart. */
  | 'INVOICE_COLLECT'
  /** The `Cart` is a label collect cart. */
  | 'LABEL_COLLECT'
  /** The `Cart` is a prepay collect cart. */
  | 'PREPAY_COLLECT'
  /** The `Cart` is a quote cart for incremental landed cost calculations. */
  | 'QUOTE';

export type ZonosCartUpdateInput = {
  /** A list of `CartAdjustment`s. */
  adjustments?: InputMaybe<Array<ZonosCartAdjustmentInput>>;
  /** Cart Expiration to override the organization defaultCartExpiration. Format ex: 2025-01-27T15:00:00Z */
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  /** Token that can renew the expiration of a cart */
  expiresAtRenewalToken?: InputMaybe<Scalars['String']>;
  /** The id of the cart to update */
  id: Scalars['ID'];
  /** The `Item` to add to the cart. */
  itemsAdd?: InputMaybe<Array<ZonosItemInput>>;
  /** The `Item` to remove from the cart. */
  itemsRemove?: InputMaybe<Array<Scalars['ID']>>;
  /** metadata for the cart */
  metadata?: InputMaybe<Array<ZonosCartMetadataInput>>;
};

/** Keep this in sync with CartCreateInput */
export type ZonosCartUpsertInput = {
  /** A list of `CartAdjustment`s. */
  adjustments?: InputMaybe<Array<ZonosCartAdjustmentInput>>;
  /** CartId if it is upserting an existing `Cart` */
  id?: InputMaybe<Scalars['ID']>;
  /** The `Item` to add to the cart. */
  items: Array<ZonosItemInput>;
  /** metadata for the cart */
  metadata?: InputMaybe<Array<ZonosCartMetadataInput>>;
};

export type ZonosCarton = {
  __typename?: 'Carton';
  /** The monetary amount insured for the `packingCarton` */
  amountInsured: Maybe<Scalars['Decimal']>;
  /** When this `Carton` was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the `Carton` */
  createdBy: Scalars['ID'];
  /** The measurement units of the height, length and width */
  dimensionalUnit: ZonosDimensionalUnitCode;
  /** The numeric height of the `packingCarton` */
  height: Scalars['Decimal'];
  /** Carton ID, prefixed with `carton_` */
  id: Scalars['ID'];
  /** The items associated with the `packingCarton` */
  items: Maybe<Array<ZonosCartonItem>>;
  /** The numeric length of the `packingCarton` */
  length: Scalars['Decimal'];
  /** Whether the `Carton` is in test or live mode */
  mode: ZonosMode;
  /** The name of the packaging option on the carton */
  name: Maybe<Scalars['String']>;
  /** The organization that owns the `Carton` */
  organization: Scalars['ID'];
  /** The packaging option associated with the `packingCarton` */
  packagingOption: Maybe<ZonosPackagingOption>;
  /** The id of the `root` that will own the `Carton`. */
  rootId: Scalars['ID'];
  /** Where the item is shipping from */
  shipFrom: Maybe<ZonosLocation>;
  /** The order's destination (customer address) */
  shipTo: Maybe<ZonosLocation>;
  /** The source of the carton size */
  source: Maybe<ZonosPackagingOptionSource>;
  /** The packaging style (box, polybag, letter, etc) */
  type: ZonosPackagingType;
  /** When this `Carton` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `Carton`. */
  updatedBy: Scalars['ID'];
  /** The heaviness of the packingCarton, using a numeric value */
  weight: Scalars['Decimal'];
  /** The type of weight associated with the `packingCarton` */
  weightUnit: ZonosWeightUnitCode;
  /** The numeric width of the `packingCarton` */
  width: Scalars['Decimal'];
};

export type ZonosCartonCreateInput = {
  /** The measurement units of the height, length and width. */
  dimensionalUnit: ZonosDimensionalUnitCode;
  /** The numeric height of the `carton`. */
  height?: InputMaybe<Scalars['Decimal']>;
  /** The details of the `packingCarton` contents. */
  items: Array<ZonosCartonCreateItemInput>;
  /** The numeric length of the `carton`. */
  length?: InputMaybe<Scalars['Decimal']>;
  /** The id of the `root` that will own the `Carton`. */
  rootId: Scalars['ID'];
  /** The `fulfillmentCenter` shipping the `packingCarton`. */
  shipFrom?: InputMaybe<Scalars['ID']>;
  /** The `location` id for the end customer. */
  shipTo?: InputMaybe<Scalars['ID']>;
  /** The packaging style (box, polybag, letter, etc.). */
  type: ZonosPackagingType;
  /** The weight of the `carton`. */
  weight?: InputMaybe<Scalars['Decimal']>;
  /** The type of weight associated with the `carton`. */
  weightUnit: ZonosWeightUnitCode;
  /** The numeric width of the `carton`. */
  width?: InputMaybe<Scalars['Decimal']>;
};

export type ZonosCartonCreateItemInput = {
  /** The country of origin for the `cartonItem` */
  countryOfOrigin?: InputMaybe<ZonosCountryCode>;
  /** The HS code for the `cartonItem` */
  hsCode?: InputMaybe<Scalars['String']>;
  /** The `Item` id that will be associated with the `CartonItem`. */
  item: Scalars['ID'];
  /** The name of the `cartonItem` for use on label */
  labelName?: InputMaybe<Scalars['String']>;
  /** The quantity of the item that will be associated with the `cartonItem` */
  quantity: Scalars['Int'];
  /** The packaging style (box, polybag, letter, etc) */
  type: ZonosPackagingType;
};

export type ZonosCartonCreateWorkflowInput = {
  /** The measurement units of the height, length and width. */
  dimensionalUnit: ZonosDimensionalUnitCode;
  /** The numeric height of the `carton`. */
  height?: InputMaybe<Scalars['Decimal']>;
  /** The numeric length of the `carton`. */
  length?: InputMaybe<Scalars['Decimal']>;
  /** The packaging style (box, polybag, letter, etc.). */
  type?: InputMaybe<ZonosPackagingType>;
  /** The weight of the `carton`. */
  weight?: InputMaybe<Scalars['Decimal']>;
  /** The type of weight associated with the `carton`. */
  weightUnit?: InputMaybe<ZonosWeightUnitCode>;
  /** The numeric width of the `carton`. */
  width?: InputMaybe<Scalars['Decimal']>;
};

/** A `CartonItem` represents an item that has been assigned to be packed to a `Carton` */
export type ZonosCartonItem = {
  __typename?: 'CartonItem';
  /** The country of origin for the `cartonItem` */
  countryOfOrigin: Maybe<ZonosCountryCode>;
  /** The type of dimensional unit associated with the `cartonItem` */
  dimensionalUnit: ZonosDimensionalUnitCode;
  /** The numeric height of the `cartonItem` */
  height: Scalars['Decimal'];
  /** The HS code for the `cartonItem` */
  hsCode: Maybe<Scalars['String']>;
  /** The original item associated with `cartonItem` */
  item: ZonosItem;
  /** The name of the `cartonItem` for use on label */
  labelName: Maybe<Scalars['String']>;
  /** The numeric height of the `cartonItem` */
  length: Scalars['Decimal'];
  /** How many cartonItems are included in a given `packingCarton` */
  quantity: Scalars['Int'];
  /** The type of packaging required to pack the cartonItem */
  type: ZonosPackagingType;
  /** The numeric weight of the `cartonItem` */
  weight: Scalars['Decimal'];
  /** The type of weight associated with the `cartonItem` */
  weightUnit: ZonosWeightUnitCode;
  /** The numeric width of the `cartonItem` */
  width: Scalars['Decimal'];
};

export type ZonosCartonizationSettings = {
  __typename?: 'CartonizationSettings';
  /** Timestamp of when the CartonizationSettings were created */
  createdAt: Scalars['DateTime'];
  /** ID of the user who created the CartonizationSettings */
  createdBy: Scalars['ID'];
  /** Indicates if dynamic packaging is enabled/disabled during cartonization */
  dynamicPackaging: ZonosDynamicPackagingStatus;
  /** Unique identifier for the CartonizationSettings */
  id: Scalars['ID'];
  /** ID of the `Organization` these CartonizationSettings belong to */
  organizationId: Scalars['ID'];
  /** Timestamp of when the CartonizationSettings were most recently updated */
  updatedAt: Scalars['DateTime'];
  /** ID of the user who most recently updated the CartonizationSettings */
  updatedBy: Scalars['ID'];
};

export type ZonosCartonizationSettingsUpdateInput = {
  /** Indicates if dynamic packaging is enabled/disabled during cartonization */
  dynamicPackaging: ZonosDynamicPackagingStatus;
};

export type ZonosCartonizeFeeOptimizedWorkflowInput = {
  /** The id of the `landedCost` with the rating that will be attempted to optimize */
  landedCostId?: InputMaybe<Scalars['ID']>;
};

export type ZonosCartonizeInput = {
  /** The id of the `root` that will own the carton */
  rootId: Scalars['ID'];
};

export type ZonosCartonizeWorkflowInput = {
  /** The ids of packaging options to use */
  packagingOptionIds?: InputMaybe<Array<Scalars['ID']>>;
  /** The id of the `root` that will own the carton */
  rootId?: InputMaybe<Scalars['ID']>;
};

export type ZonosCartonsFilter = {
  /** Filter cartons by root id */
  rootId: Scalars['ID'];
};

/** A representation of a `CatalogItem`. */
export type ZonosCatalogItem = {
  __typename?: 'CatalogItem';
  /** The amount of a `CatalogItem`. */
  amount: Maybe<Scalars['Decimal']>;
  /** Other `CatalogItem` attributes. */
  attributes: Maybe<Array<Maybe<ZonosItemAttribute>>>;
  /** The marketing name associated with an item. */
  brand: Maybe<Scalars['String']>;
  /** Catalog Items that are referenced by this CatalogItem */
  catalogItemReferences: Array<ZonosCatalogItemReference>;
  /** The `CatalogItem` location. */
  catalogItemUrl: Maybe<Scalars['String']>;
  /** The categories that describes the `CatalogItem` */
  categories: Array<Scalars['String']>;
  /** The classificationId if a catalogItem was created through classification */
  classification: Maybe<Scalars['ID']>;
  /** Country configuration for the item. */
  configurations: Maybe<Array<Maybe<ZonosCatalogItemConfiguration>>>;
  /** Where a CatalogItem is manufactured. */
  countryOfOrigin: Maybe<ZonosCountryCode>;
  /** When this `CatalogItem` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CatalogItem`. */
  createdBy: Scalars['ID'];
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode: Maybe<ZonosCurrencyCode>;
  /** The description of the item for customs */
  customsDescription: Maybe<Scalars['String']>;
  /** The `CatalogItem` full description. */
  description: Maybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration: Maybe<ZonosDutyTaxFeeConfiguration>;
  /** Whether this `CatalogItem` is referenced as a child in any kit. */
  hasKitReferences: Scalars['Boolean'];
  /** The default hsCode for the product */
  hsCode: Maybe<Scalars['String']>;
  /** hsCodes overrides, country or attribute specific for the item */
  hsCodes: Maybe<Array<Maybe<ZonosCatalogItemHsCode>>>;
  /** The ID of the `CatalogItem`. */
  id: Scalars['ID'];
  /** The url of an image. */
  imageUrl: Maybe<Scalars['String']>;
  /** The item's key that is used to identify the catalog item. */
  itemKey: Scalars['String'];
  /** Determines whether or not an item can be physically shipped. */
  itemType: Maybe<ZonosItemType>;
  /**
   * The `CatalogItem` material composition.
   * @deprecated use productComposition instead
   */
  material: Maybe<Scalars['String']>;
  /** A `CatalogItem` physical measurements. */
  measurements: Maybe<Array<Maybe<ZonosItemMeasurement>>>;
  /** Other `CatalogItem` details ie: vendor_id. */
  metadata: Maybe<Array<Maybe<ZonosItemMetadata>>>;
  /** Whether this `Item` was created in live or test mode. */
  mode: ZonosMode;
  /** The primary name of a `CatalogItem`. */
  name: Maybe<Scalars['String']>;
  /** The unique identifier associated with an organization. */
  organization: Scalars['ID'];
  /** The stacking configuration of the `CatalogItem` */
  packingConfiguration: Maybe<ZonosPackingConfiguration>;
  /** How to pack the `CatalogItem` for shipment. */
  packingPreference: Maybe<ZonosPackingPreference>;
  /** the composition of your product */
  productComposition: Maybe<Array<ZonosItemComposition>>;
  /** Product ID of the `CatalogItem`. */
  productId: Maybe<Scalars['String']>;
  /** Optional administrative area where this item originates. Required by some countries. */
  provinceOfOrigin: Maybe<Scalars['String']>;
  /** A list of restricted country code */
  restrictedCountries: Maybe<Array<Maybe<ZonosCountryCode>>>;
  /** The suggested retail amount */
  retailAmount: Maybe<Scalars['Decimal']>;
  /** SKU of this `CatalogItem`. */
  sku: Maybe<Scalars['String']>;
  /** Source of `CatalogItem`. */
  source: ZonosCatalogItemSource;
  /** When this `CatalogItem` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `CatalogItem`. */
  updatedBy: Scalars['ID'];
};

export type ZonosCatalogItemBulkJobConnection = {
  __typename?: 'CatalogItemBulkJobConnection';
  edges: Array<ZonosCatalogItemBulkJobEdge>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Scalars['Int'];
};

export type ZonosCatalogItemBulkJobEdge = {
  __typename?: 'CatalogItemBulkJobEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosBulkJob>;
};

export type ZonosCatalogItemBulkJobsFilter = {
  /** itemType i.e. BUNDLE, PHYSICAL_GOOD etc... */
  itemType?: InputMaybe<ZonosItemType>;
  /** Current status of the BulkJob */
  status?: InputMaybe<ZonosBulkJobStatus>;
};

export type ZonosCatalogItemConfiguration = {
  __typename?: 'CatalogItemConfiguration';
  /** The amount of a `CatalogItem`. */
  amount: Maybe<Scalars['Decimal']>;
  /** When this `CatalogItem` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CatalogItem`. */
  createdBy: Scalars['ID'];
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode: Maybe<ZonosCurrencyCode>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration: Maybe<ZonosDutyTaxFeeConfiguration>;
  /** The id of the configuration catalog item */
  id: Scalars['ID'];
  /** Ship to country */
  shipToCountry: Maybe<ZonosCountryCode>;
  /** When this `CatalogItem` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `CatalogItem`. */
  updatedBy: Scalars['ID'];
};

export type ZonosCatalogItemConfigurationInput = {
  /** The amount of a `CatalogItem` for this shipToCountry. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<ZonosDutyTaxFeeConfiguration>;
  /** Product ID of the `CatalogItem`. */
  productId?: InputMaybe<Scalars['String']>;
  /** Ship to country */
  shipToCountry: ZonosCountryCode;
  /** SKU of this `CatalogItem`. */
  sku?: InputMaybe<Scalars['String']>;
};

export type ZonosCatalogItemConfigurationUpdateInput = {
  /** The amount of a `CatalogItem` for this shipToCountry. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** The classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<ZonosDutyTaxFeeConfiguration>;
  /** The id of the hsCode item */
  id: Scalars['ID'];
  /** Ship to country */
  shipToCountry: ZonosCountryCode;
};

export type ZonosCatalogItemConnection = {
  __typename?: 'CatalogItemConnection';
  edges: Maybe<Array<Maybe<ZonosCatalogItemEdge>>>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ZonosCatalogItemEdge = {
  __typename?: 'CatalogItemEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosCatalogItem>;
};

export type ZonosCatalogItemExportJobAction =
  | 'EMAIL'
  | 'NONE';

export type ZonosCatalogItemExportJobCreateInput = {
  /** The action that should be performed when the job is finished. */
  action: ZonosCatalogItemExportJobAction;
  /** itemType i.e. BUNDLE, PHYSICAL_GOOD etc... */
  itemType?: InputMaybe<ZonosItemType>;
};

export type ZonosCatalogItemFilter = {
  /** Filter to catalogItems with `amount` set. */
  hasAmount?: InputMaybe<Scalars['Boolean']>;
  /** Filter by the `CatalogItem` itemType. */
  itemType?: InputMaybe<ZonosItemType>;
  /** Filter by the metadata key and value. */
  metadata?: InputMaybe<Array<ZonosKeyValueFilterInput>>;
  /** Fuzzy search by the `CatalogItem` name. */
  name?: InputMaybe<Scalars['String']>;
  /** Filter by the `CatalogItem` productId. @deprecated use `productIds` instead. */
  productId?: InputMaybe<Scalars['String']>;
  /** Filter by productIds. */
  productIds?: InputMaybe<Array<Scalars['String']>>;
  /** Filter by the `CatalogItem` shipToCountry. @deprecated */
  shipToCountry?: InputMaybe<ZonosCountryCode>;
  /** Filter by the `CatalogItem` sku. @deprecated use `skus` instead. */
  sku?: InputMaybe<Scalars['String']>;
  /** Filter by skus. */
  skus?: InputMaybe<Array<Scalars['String']>>;
};

export type ZonosCatalogItemHsCode = {
  __typename?: 'CatalogItemHsCode';
  /** The classificationId if an catalogItem was created through classification */
  classification: Maybe<Scalars['ID']>;
  /** When this `CatalogItem` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CatalogItem`. */
  createdBy: Scalars['ID'];
  /** The HsCode of the item. */
  hsCode: Maybe<Scalars['String']>;
  /** The source of the hsCode for this HsCode */
  hsCodeSource: Maybe<ZonosHsCodeSource>;
  /** The id of the hsCode catalog item */
  id: Scalars['ID'];
  /** Ship to country */
  shipToCountry: Maybe<ZonosCountryCode>;
  /** When this `CatalogItem` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `CatalogItem`. */
  updatedBy: Scalars['ID'];
};

export type ZonosCatalogItemHsCodeInput = {
  /** The classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** The hsCode for this country */
  hsCode?: InputMaybe<Scalars['String']>;
  /** The source of the hsCode for this HsCode */
  hsCodeSource?: InputMaybe<ZonosHsCodeSource>;
  /** Product ID of the `CatalogItem`. */
  productId?: InputMaybe<Scalars['String']>;
  /** Ship to country */
  shipToCountry: ZonosCountryCode;
  /** SKU of this `CatalogItem`. */
  sku?: InputMaybe<Scalars['String']>;
};

export type ZonosCatalogItemHsCodeUpdateInput = {
  /** Other item attributes. */
  attributes?: InputMaybe<Array<InputMaybe<ZonosItemAttributeInput>>>;
  /** The classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** The hsCode for this country */
  hsCode?: InputMaybe<Scalars['String']>;
  /** The source of the hsCode for this HsCode */
  hsCodeSource?: InputMaybe<ZonosHsCodeSource>;
  /** The id of the hsCode item */
  id: Scalars['ID'];
  /** Ship to country */
  shipToCountry: ZonosCountryCode;
};

/** A representation of a `CatalogItem` to be created. */
export type ZonosCatalogItemInput = {
  /** The amount of a `CatalogItem`. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** Other item attributes. */
  attributes?: InputMaybe<Array<InputMaybe<ZonosItemAttributeInput>>>;
  /** The marketing name associated with an item. */
  brand?: InputMaybe<Scalars['String']>;
  /** Catalog items that are referenced by this CatalogItem */
  catalogItemReferences?: InputMaybe<Array<ZonosCatalogItemReferenceInput>>;
  /** The `CatalogItem` page url. */
  catalogItemUrl?: InputMaybe<Scalars['String']>;
  /** The categories that describes the `CatalogItem` */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** The classificationId if an catalogItem was created through classification */
  classification?: InputMaybe<Scalars['ID']>;
  /** Where a `CatalogItem` is created. */
  countryOfOrigin?: InputMaybe<ZonosCountryCode>;
  /** The currency that the amount of this `CatalogItem` is in. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** The description of the item for customs */
  customsDescription?: InputMaybe<Scalars['String']>;
  /** The primary description of a `CatalogItem`. */
  description?: InputMaybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<ZonosDutyTaxFeeConfiguration>;
  /** The default hsCode for the product */
  hsCode?: InputMaybe<Scalars['String']>;
  /** When providing a country-specific HS code the ship-to country is needed. @deprecated use `CatalogItemHsCodeInput` instead */
  hsCodeShipToCountry?: InputMaybe<ZonosCountryCode>;
  /** The url of an image. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** Determines whether or not an item can be physically shipped. */
  itemType?: InputMaybe<ZonosItemType>;
  /** The `CatalogItem` material composition. @deprecated(reason: "use productComposition instead") */
  material?: InputMaybe<Scalars['String']>;
  /** A `CatalogItem` physical measurements. */
  measurements?: InputMaybe<Array<InputMaybe<ZonosItemMeasurementInput>>>;
  /** Other `CatalogItem` details ie: vendor_id. */
  metadata?: InputMaybe<Array<InputMaybe<ZonosItemMetadataInput>>>;
  /** The name of a `CatalogItem`. */
  name?: InputMaybe<Scalars['String']>;
  /** The stacking configuration associated with this `CatalogItem` */
  packingConfiguration?: InputMaybe<ZonosPackingConfigurationInput>;
  /** How to pack the `CatalogItem` for shipment. */
  packingPreference?: InputMaybe<ZonosPackingPreference>;
  /** the composition of your product */
  productComposition?: InputMaybe<Array<ZonosItemCompositionInput>>;
  /** Product ID of this `CatalogItem`. */
  productId?: InputMaybe<Scalars['String']>;
  /** Optional administrative area where this `CatalogItem` originates. Required by some countries. */
  provinceOfOrigin?: InputMaybe<Scalars['String']>;
  /** A list of restricted country code */
  restrictedCountries?: InputMaybe<Array<InputMaybe<ZonosCountryCode>>>;
  /** The suggested retail amount */
  retailAmount?: InputMaybe<Scalars['Decimal']>;
  /** SKU of this `CatalogItem`. */
  sku?: InputMaybe<Scalars['String']>;
};

export type ZonosCatalogItemReference = {
  __typename?: 'CatalogItemReference';
  /** The reference catalog item */
  catalogItem: ZonosCatalogItem;
  /** The Kit Box this item is assigned to */
  packageOptionId: Maybe<Scalars['ID']>;
  /** Index identifying the specific package option instance within a kit (e.g. packageOptionId + instance index) */
  packageOptionIdIndex: Maybe<Scalars['String']>;
  /** Allows item to have it's own packing prefence NOTE: This is for backwards compatibility with old kit flow. */
  packingPreference: Maybe<ZonosPackingPreference>;
  /** The ratio of the parent item price that should be applied to this reference item */
  priceRatio: Maybe<Scalars['Decimal']>;
};

export type ZonosCatalogItemReferenceInput = {
  /** The reference catalog item */
  catalogItem: Scalars['ID'];
  /** The Kit Box this item is assigned to */
  packageOptionId?: InputMaybe<Scalars['ID']>;
  /** Groups items that share the same physical box instance (allows multiple cartons of the same box type) */
  packageOptionIdIndex?: InputMaybe<Scalars['String']>;
  /** Allows item to have it's own packing prefence NOTE: This is for backwards compatibility with old kit flow. */
  packingPreference?: InputMaybe<ZonosPackingPreference>;
  /** The ratio of the parent item price that should be applied to this reference item */
  priceRatio?: InputMaybe<Scalars['Decimal']>;
};

export type ZonosCatalogItemSource =
  | 'CLASSIFICATION'
  | 'LEGACY_MIGRATION'
  | 'USER_PROVIDED';

export type ZonosCatalogItemUpdateMethod =
  /** ALL: Updates all fields of the catalog item based on the input provided. This method sets fields to null if null values are provided in the input, ensuring the catalog item exactly mirrors the input. */
  | 'ALL'
  /** NON_NULL: Updates existing catalog item fields with non-null values provided in the input. Fields in the input that are null are ignored, and corresponding existing fields are not modified. */
  | 'NON_NULL';

export type ZonosCatalogSetting = {
  __typename?: 'CatalogSetting';
  /** The date and time the `CatalogSetting` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CatalogSetting`. */
  createdBy: Scalars['ID'];
  /** The id of the `CatalogSetting`. */
  id: Scalars['ID'];
  /**
   * determines whether inclusive price is active
   * @deprecated No longer supported
   */
  inclusivePriceStatus: Maybe<ZonosInclusivePriceStatus>;
  /** The unique key preference for finding a `CatalogItem`. */
  itemKeyPreference: ZonosItemKeyPreference;
  /** The default currency for an organization. */
  nativeCurrency: Maybe<ZonosCurrencyCode>;
  /** The organization id that the `CatalogSetting` belongs to. */
  organizationId: Scalars['ID'];
  /** The status of the `CatalogSetting`. */
  status: ZonosCatalogStatus;
  /** The date and time the `CatalogSetting` was last updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who last updated the `CatalogSetting`. */
  updatedBy: Scalars['ID'];
};

export type ZonosCatalogSettingCreateInput = {
  /** The inclusive price status. */
  inclusivePriceStatus?: InputMaybe<ZonosInclusivePriceStatus>;
  /** The unique key preference for finding a `CatalogItem`. */
  itemKeyPreference?: InputMaybe<ZonosItemKeyPreference>;
  /** The native currency for an organization. */
  nativeCurrency?: InputMaybe<ZonosCurrencyCode>;
  /** The Status of the `CatalogSetting`. */
  status: ZonosCatalogStatus;
};

export type ZonosCatalogSettingMigrateResponse = {
  __typename?: 'CatalogSettingMigrateResponse';
  catalogSetting: ZonosCatalogSetting;
  itemKeyPreferenceResult: ZonosItemKeyPreference;
};

export type ZonosCatalogSettingMigrationAction =
  | 'EVALUATE'
  | 'MIGRATE';

export type ZonosCatalogSettingMigrationInput = {
  /** The action to perform */
  action: ZonosCatalogSettingMigrationAction;
  organizationId: Scalars['ID'];
};

export type ZonosCatalogSettingUpdateInput = {
  /** The unique key preference for finding a `CatalogItem`. */
  itemKeyPreference?: InputMaybe<ZonosItemKeyPreference>;
  /** The native currency for an organization. */
  nativeCurrency?: InputMaybe<ZonosCurrencyCode>;
  /** The status of the `CatalogSetting`. */
  status?: InputMaybe<ZonosCatalogStatus>;
};

export type ZonosCatalogStatus =
  | 'DISABLED'
  | 'ENABLED';

export type ZonosCbpExchangeRateEx = {
  __typename?: 'CbpExchangeRateEX';
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['String'];
  currency: ZonosCurrencyCode;
  rate: Scalars['Decimal'];
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['String'];
};

export type ZonosCbpExchangeRateExUpdateInput = {
  currency: ZonosCurrencyCode;
  rate: Scalars['Decimal'];
};

export type ZonosCheckoutCustomerLocation = {
  __typename?: 'CheckoutCustomerLocation';
  administrativeArea: Scalars['String'];
  countryCode: ZonosCountryCode;
  createdAt: Scalars['DateTime'];
  email: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  line1: Scalars['String'];
  line2: Maybe<Scalars['String']>;
  locality: Scalars['String'];
  name: Maybe<Scalars['String']>;
  phone: Maybe<Scalars['String']>;
  postalCode: Scalars['String'];
};

export type ZonosCheckoutCustomerLocationInput = {
  administrativeArea: Scalars['String'];
  countryCode: ZonosCountryCode;
  email?: InputMaybe<Scalars['String']>;
  line1: Scalars['String'];
  line2?: InputMaybe<Scalars['String']>;
  locality: Scalars['String'];
  name: Scalars['String'];
  phone?: InputMaybe<Scalars['String']>;
  postalCode: Scalars['String'];
};

export type ZonosCheckoutCustomerProfile = {
  __typename?: 'CheckoutCustomerProfile';
  /** The time the CheckoutCustomerProfile was created */
  createdAt: Scalars['DateTime'];
  /** The merchant's customer ID */
  customerId: Scalars['String'];
  /** The email of the customer */
  email: Maybe<Scalars['String']>;
  /** The shipping addresses the customer has */
  locations: Maybe<Array<ZonosCheckoutCustomerLocation>>;
  /** The name of the customer */
  name: Maybe<Scalars['String']>;
  /** one time password oneTimePassword */
  oneTimePassword: Maybe<Scalars['String']>;
  /** The ID of the organization the CheckoutCustomer is associated with */
  organizationId: Scalars['String'];
  /** The phone of the customer */
  phone: Maybe<Scalars['String']>;
  /** The customer's available store credit balance in the checkout session's currency. Returns null if accessed outside of a checkout session context or if no store credit exists. */
  storeCreditBalance: Maybe<Scalars['Decimal']>;
};

export type ZonosCheckoutCustomerProfileAuthenticateInput = {
  /** The merchant's customer ID */
  customerId: Scalars['String'];
  /** The email of the customer */
  email: Scalars['String'];
  /** The locations of the customer */
  locations?: InputMaybe<Array<ZonosCheckoutCustomerLocationInput>>;
  /** The name of the customer */
  name?: InputMaybe<Scalars['String']>;
  /** The phone number of the customer */
  phone?: InputMaybe<Scalars['String']>;
};

export type ZonosCheckoutMerchantOfRecordType =
  | 'MERCHANT'
  | 'ZONOS';

export type ZonosCheckoutPaypalOrderIntent =
  | 'AUTHORIZE'
  | 'CAPTURE';

export type ZonosCheckoutSession = {
  __typename?: 'CheckoutSession';
  /** The id for the cart used in the session. */
  cartId: Maybe<Scalars['ID']>;
  /** A unique identifier for the CheckoutSession. */
  id: Scalars['ID'];
  /** The merchant of record of the CheckoutSession. */
  merchantOfRecord: ZonosCheckoutMerchantOfRecordType;
  /** The `Order` associated with the CheckoutSession. */
  order: Maybe<ZonosOrder>;
};

export type ZonosCheckoutSessionCreationModeType =
  | 'WITHOUT_PAYMENT_INTENT'
  | 'WITH_PAYMENT_INTENT';

export type ZonosCheckoutSessionPartyReferenceType =
  /** Represents the destination party. */
  | 'DESTINATION'
  /** Represents the payor party. */
  | 'PAYOR';

export type ZonosClassification = {
  __typename?: 'Classification';
  /** Alternate HS codes that could apply to the item. */
  alternates: Array<ZonosClassificationAlternate>;
  /** Justification for why the item was classified under the determined HS code. */
  auditTrail: Maybe<Scalars['String']>;
  /** The category hierarchy associated with an item for classification. */
  categories: Array<Scalars['String']>;
  /** The `ClassificationLevel` provided to the request on input. */
  classificationLevel: Maybe<ZonosClassificationLevel>;
  /** Measures the confidence in accuracy of an HS code generated by Classify. 1.0=100%. */
  confidenceScore: Maybe<Scalars['Decimal']>;
  /** Configuration used in creating the `Classification`. */
  configuration: ZonosClassificationConfiguration;
  /** The ISO 3166 code to indicate which country the `CatalogItem` was manufactured in to generate an accurate `Classification`. */
  countryOfOrigin: Maybe<ZonosCountryCode>;
  /** When this `Classification` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Classification. */
  createdBy: Scalars['ID'];
  /** The calculated description for customs. */
  customsDescription: Maybe<Scalars['String']>;
  /** This is the full description associated with an item. */
  description: Maybe<Scalars['String']>;
  /** The HsCode object. */
  hsCode: Maybe<ZonosHsCode>;
  /** This is the status of the customer or third party provided hsCode. */
  hsCodeProvidedValidation: Array<ZonosHsCodeProvidedValidation>;
  /** A score (0-1) indicating how confident the model is that the provided HS code is correct. Only populated when `hsCodeProvided` is set and `hsCodeProvidedTreatment` is `CHECK_COHERENCE`. */
  hsCodeProvidedValidationScore: Maybe<Scalars['Decimal']>;
  /** A unique identifier for the Classification. */
  id: Scalars['ID'];
  /** The location of an image related to an item. */
  imageUrl: Maybe<Scalars['String']>;
  /** The manual classification associated with the classification. */
  manualClassification: Maybe<ZonosManualClassification>;
  /** The material composition of an item for classification. */
  material: Maybe<Scalars['String']>;
  /** Whether this `Item` was created in live or test mode. */
  mode: ZonosMode;
  /** The product name or short description. */
  name: Scalars['String'];
  /** The `Organization` associated with the CatalogItem. */
  organization: Scalars['ID'];
  /** The id provided at time of classification input. */
  productId: Maybe<Scalars['String']>;
  /** The URL of the product page. */
  productUrl: Maybe<Scalars['String']>;
  /** Data scraped from the productUrl, if provided. */
  productUrlScrapedData: Maybe<ZonosProductUrlScrapedData>;
  /** The country goods are shipping from, for export code classification. */
  shipFromCountry: Maybe<ZonosCountryCode>;
  /** When this `Classification` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Classification. */
  updatedBy: Scalars['ID'];
};

export type ZonosClassificationAlternate = {
  __typename?: 'ClassificationAlternate';
  /** The probability mass associated with this subheading */
  probabilityMass: Scalars['Decimal'];
  /** The alternate subheading */
  subheadingAlternate: ZonosHsCode;
  /** The list of tariff alternates within that particular subheading */
  tariffAlternates: Array<ZonosHsCode>;
};

export type ZonosClassificationBulkExportJob = {
  __typename?: 'ClassificationBulkExportJob';
  /** Creation date of the job. */
  createdAt: Scalars['DateTime'];
  /** ID of the user who created the job. */
  createdBy: Scalars['ID'];
  /** The url where the csv has been uploaded to */
  exportUrl: Scalars['String'];
  /** Unique identifier of the job. */
  id: Scalars['ID'];
  /** ID of the associated organization. */
  organizationId: Scalars['ID'];
  /** Count of processed items in the job. */
  processedCount: Scalars['Int'];
  /** Current status of the job. */
  status: ZonosClassificationBulkExportJobStatus;
  /** Total count of items to process in the job. */
  totalCount: Scalars['Int'];
};

export type ZonosClassificationBulkExportJobConnection = {
  __typename?: 'ClassificationBulkExportJobConnection';
  edges: Array<ZonosClassificationBulkExportJobEdge>;
  pageInfo: ZonosPageInfo;
  totalCount: Scalars['Int'];
};

export type ZonosClassificationBulkExportJobEdge = {
  __typename?: 'ClassificationBulkExportJobEdge';
  cursor: Scalars['String'];
  node: ZonosClassificationBulkExportJob;
};

export type ZonosClassificationBulkExportJobStatus =
  | 'COMPLETED'
  | 'ERROR'
  | 'INITIALIZED'
  | 'PROCESSING';

export type ZonosClassificationBulkExportJobsFilter = {
  /** Current status of the Bulk Export Job */
  status?: InputMaybe<ZonosClassificationBulkExportJobStatus>;
};

export type ZonosClassificationBulkJob = {
  __typename?: 'ClassificationBulkJob';
  /** The classifications associated with a bulk job */
  classifications: Maybe<ZonosClassificationConnection>;
  /** The list of Country Codes where we will make classifications */
  classifyToCountries: Array<ZonosCountryCode>;
  /**
   * The confidence score for each classification to be returned
   * @deprecated No longer supported
   */
  confidenceScoreDisplayStatus: Maybe<ZonosConfidenceScoreDisplayStatus>;
  /** When this `Bulk Classification` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Bulk Classification. */
  createdBy: Scalars['ID'];
  /** The number of rows that errored out during import */
  errorCount: Scalars['Int'];
  /** Unsuccessful rows and their error messages */
  errorMessages: Array<ZonosClassificationUploadError>;
  /** The S3 url where classifications are stashed */
  exportUrl: Maybe<Scalars['String']>;
  /** The ID of the BulkJob */
  id: Scalars['ID'];
  /** The pre-signed url provided by AWS */
  importUrl: Maybe<Scalars['String']>;
  /** The method of the classification bulk job */
  method: Maybe<ZonosClassificationMethod>;
  /** The uploaded customer created name of the bulk job usually the filename */
  name: Scalars['String'];
  /** The unique identifier associated with an organization. */
  organization: Scalars['ID'];
  /** The number of rows that have been successfully classified */
  processedCount: Scalars['Int'];
  /** Current status of the BulkJob */
  status: ZonosClassificationBulkJobStatus;
  /** The total number of rows in a CSV upload multiplied by the number of countries in the request */
  totalCount: Scalars['Int'];
  /** When this `Bulk Classification` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Bulk Classification. */
  updatedBy: Scalars['ID'];
  /** The number of rows that successfully were saved */
  uploadCount: Scalars['Int'];
};


export type ZonosClassificationBulkJobClassificationsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

export type ZonosClassificationBulkJobConnection = {
  __typename?: 'ClassificationBulkJobConnection';
  edges: Array<ZonosClassificationBulkJobEdge>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Scalars['Int'];
};

export type ZonosClassificationBulkJobEdge = {
  __typename?: 'ClassificationBulkJobEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosClassificationBulkJob>;
};

export type ZonosClassificationBulkJobExportCreateInput = {
  confidenceScoreDisplayStatus?: InputMaybe<ZonosConfidenceScoreDisplayStatus>;
  id: Scalars['ID'];
};

export type ZonosClassificationBulkJobExportInput = {
  confidenceScoreDisplayStatus?: InputMaybe<ZonosConfidenceScoreDisplayStatus>;
};

export type ZonosClassificationBulkJobStatus =
  | 'CLASSIFIED'
  | 'COMPLETED'
  | 'ERROR'
  | 'INITIALIZED'
  | 'PROCESSING';

export type ZonosClassificationBulkJobUpdateInput = {
  /** The ID of the BulkJob */
  id: Scalars['ID'];
  /** The list of Country Codes where we will make classifications */
  status: ZonosClassificationBulkJobStatus;
};

export type ZonosClassificationBulkJobUrlResponse = {
  __typename?: 'ClassificationBulkJobUrlResponse';
  bulkJob: ZonosClassificationBulkJob;
  url: Scalars['String'];
};

export type ZonosClassificationBulkJobsFilter = {
  /** Current status of the BulkJob */
  status: ZonosClassificationBulkJobStatus;
};

export type ZonosClassificationCalculateInput = {
  /** The category hierarchy associated with an item for classification. */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** Configurations relating to how the item should be classified. */
  configuration?: InputMaybe<ZonosClassificationConfigurationInput>;
  /** The ISO 3166 code to indicate which country the `CatalogItem` was manufactured in to generate an accurate `Classification`. */
  countryOfOrigin?: InputMaybe<ZonosCountryCode>;
  /** The currency code for the unitPrice (e.g., USD). If not provided, USD is assumed. */
  currencyCode?: InputMaybe<Scalars['String']>;
  /** This is the full description associated with an item. */
  description?: InputMaybe<Scalars['String']>;
  /** The location of an image related to an item. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** The items physical age */
  itemAge?: InputMaybe<Scalars['String']>;
  /** The material composition of an item for classification. */
  material?: InputMaybe<Scalars['String']>;
  /** The product name or short description. */
  name: Scalars['String'];
  /** The product id provided at time of classification input */
  productId?: InputMaybe<Scalars['String']>;
  /** The URL of the product page for enrichment */
  productUrl?: InputMaybe<Scalars['String']>;
  /** The per-unit price of the item. Used to improve tariff code accuracy for price-dependent tariff branches. */
  unitPrice?: InputMaybe<Scalars['Float']>;
};

export type ZonosClassificationCalculateOrigin =
  /** Get all classifications this is the default. */
  | 'ALL'
  /** The classification was created by a batch request. */
  | 'BULK'
  /** The classification was created by an individual request. */
  | 'SINGLE';

export type ZonosClassificationCalculateSource =
  /** The bulk method of the classification of the external source. */
  | 'BULK'
  /** The requesting source of the classification is external. */
  | 'EXTERNAL'
  /** The requesting source of the classification is internal. */
  | 'INTERNAL'
  /** The requesting source of the classification is legacy. */
  | 'LEGACY'
  /** The single method of the classification of the external source. */
  | 'SINGLE';

export type ZonosClassificationConfiguration = {
  __typename?: 'ClassificationConfiguration';
  /** The group id that links a set of classifications */
  groupId: Maybe<Scalars['String']>;
  /** This is the customer or third party provided hsCode it represents some knowledge of how an item is to be classified. */
  hsCodeProvided: Maybe<Scalars['String']>;
  /** How the hsCodeProvided ought to be used. */
  hsCodeProvidedTreatment: Maybe<ZonosHsCodeProvidedTreatment>;
  /** The unique key identifying the item to be classified. */
  itemKey: Maybe<Scalars['String']>;
  /** The product profile for an organization, this profile will help us to understand what types of goods a merchant specializes in. */
  marketProfile: Maybe<Scalars['String']>;
  /** The product id provided at time of classification input */
  productId: Maybe<Scalars['String']>;
  /** The country goods are shipping from. */
  shipFromCountry: Maybe<ZonosCountryCode>;
  /** The ship to countries for this `Classification`. */
  shipToCountry: Maybe<ZonosCountryCode>;
  /** The stock keeping unit of the input item this can help us connect to a catalog item */
  sku: Maybe<Scalars['String']>;
};

export type ZonosClassificationConfigurationInput = {
  /** This is the customer or third party provided hsCode it represents some knowledge of how an item is to be classified. Classifications are limited to its guidance. */
  hsCodeProvided?: InputMaybe<Scalars['String']>;
  /** How the hsCodeProvided ought to be used. */
  hsCodeProvidedTreatment?: InputMaybe<ZonosHsCodeProvidedTreatment>;
  /** Specification for which type of hsCode response is being requested */
  hsCodeType?: InputMaybe<ZonosHsCodeType>;
  /** The unique key identifying the item to be classified. */
  itemKey?: InputMaybe<Scalars['String']>;
  /** The product profile for an organization, this profile will help us to understand what types of goods a merchant specializes in. */
  marketProfile?: InputMaybe<Scalars['String']>;
  /** A user provided Id to link the the classification output */
  productId?: InputMaybe<Scalars['String']>;
  /** The country goods are shipping from, for export code classification. */
  shipFromCountry?: InputMaybe<ZonosCountryCode>;
  /** The ship to countries for this `Classification`. */
  shipToCountries?: InputMaybe<Array<ZonosCountryCode>>;
  /** The stock keeping unit of the input item this can help us connect to a catalog item */
  sku?: InputMaybe<Scalars['String']>;
};

/** An auto-generated type for paginating through multiple `Classification`. */
export type ZonosClassificationConnection = {
  __typename?: 'ClassificationConnection';
  /** A list of `ClassificationEdge`. */
  edges: Array<ZonosClassificationEdge>;
  /** Pagination information about the connection. */
  pageInfo: Maybe<ZonosPageInfo>;
  /** The total number of `Classification` items. */
  totalCount: Maybe<Scalars['Int']>;
};

/** An auto-generated type used in pagination. */
export type ZonosClassificationEdge = {
  __typename?: 'ClassificationEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Maybe<Scalars['String']>;
  /** The object located at this `ClassificationEdge`. */
  node: Maybe<ZonosClassification>;
};

/** Filters for `Classification` resources. */
export type ZonosClassificationFilter = {
  /** Include results created after this date (inclusive). */
  createdAtAfter?: InputMaybe<Scalars['DateTime']>;
  /** Include results created before this date (inclusive). */
  createdAtBefore?: InputMaybe<Scalars['DateTime']>;
  /** Filter results by hsCode this property requires an exact match on the provided value. */
  hsCode?: InputMaybe<Scalars['String']>;
  /** Filter results by product id. */
  productId?: InputMaybe<Scalars['String']>;
  /** Filter results by CountryCode */
  shipToCountry?: InputMaybe<ZonosCountryCode>;
  /** Filter by classification job origin */
  source?: InputMaybe<ZonosClassificationCalculateOrigin>;
};

export type ZonosClassificationJobLink = {
  __typename?: 'ClassificationJobLink';
  bulkJob: ZonosClassificationBulkJob;
  classification: ZonosClassification;
};

/** this is the user-facing enum that is both input and returned */
export type ZonosClassificationLevel =
  /** Prioritize quality over speed */
  | 'ADVANCED'
  /** Fast results, accurate for most use cases */
  | 'BASE'
  /** Deep research for the most accurate results possible */
  | 'ULTRA';

export type ZonosClassificationMarketProfileCalculateInput = {
  /** Whether the market profile will be used in the context of classifications */
  context?: InputMaybe<ZonosMarketProfileContext>;
  /** The organization id to create the market profile for. */
  organizationId: Scalars['String'];
  /** The url of the organizations website. */
  url: Scalars['String'];
};

/** this is the internal-facing enum that we send to classify-gpt3 */
export type ZonosClassificationMethod =
  /** Classification enriched with web search results for additional context. */
  | 'AUGMENTED'
  /** Classification without web search augmentation. */
  | 'CALCULATED'
  /** Classification enriched extensively results for additional context. */
  | 'ULTRA';

export type ZonosClassificationRequestField =
  | 'CATEGORY'
  | 'DESCRIPTION'
  | 'NAME';

export type ZonosClassificationSetting = {
  __typename?: 'ClassificationSetting';
  /** The date and time when the setting was created. */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created the setting. */
  createdBy: Scalars['ID'];
  /** The level of trust for HS code classifications provided by the organization. */
  hsCodeTrustLevel: Maybe<ZonosHsCodeTrustLevel>;
  /** The unique identifier of the ManualClassificationSetting. */
  id: Scalars['ID'];
  /** The product profile for an organization, this profile will help us to understand what types of goods a merchant specializes in. */
  marketProfile: Scalars['String'];
  /** The ID of the organization this setting applies to. */
  organizationId: Scalars['ID'];
  /** The date and time when the setting was last updated. */
  updatedAt: Scalars['DateTime'];
  /** The ID of the user who last updated the setting. */
  updatedBy: Scalars['ID'];
};

export type ZonosClassificationSettingCreateInput = {
  /** The product profile for an organization, this profile will help us to understand what types of goods a merchant specializes in. */
  marketProfile: Scalars['String'];
};

export type ZonosClassificationSettingUpdateInput = {
  /** The product profile for an organization, this profile will help us to understand what types of goods a merchant specializes in. */
  marketProfile: Scalars['String'];
};

export type ZonosClassificationStageUploadInput = {
  /** The list of Country Codes where we will make classifications */
  classifyToCountries?: InputMaybe<Array<ZonosCountryCode>>;
  /** The confidence score for each classification to be returned */
  confidenceScoreDisplayStatus?: InputMaybe<ZonosConfidenceScoreDisplayStatus>;
  /** The fileName of the Bulk Job */
  fileName?: InputMaybe<Scalars['String']>;
  /** The method of the classification bulk job */
  method?: InputMaybe<ZonosClassificationMethod>;
};

export type ZonosClassificationUploadError = {
  __typename?: 'ClassificationUploadError';
  message: Maybe<Scalars['String']>;
  productId: Maybe<Scalars['String']>;
  rowId: Maybe<Scalars['Int']>;
  sku: Maybe<Scalars['String']>;
};

export type ZonosClassifySetting = {
  __typename?: 'ClassifySetting';
  boostedProductCategories: Array<Maybe<Scalars['String']>>;
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['String'];
  id: Scalars['String'];
  minimumConfidenceThreshold: Scalars['Decimal'];
  mode: ZonosMode;
  organization: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['String'];
};

export type ZonosClassifySupportedData = {
  __typename?: 'ClassifySupportedData';
  /** A list of countries supported by Classify. */
  countries: Array<ZonosCountryCode>;
};

/** Enum value describing the type of CollectInvoiceFee */
export type ZonosCollectFeeCalculationType =
  /** Indicates a 'flat' fee amount i.e. $1.00 per invoice */
  | 'FLAT'
  /** Indicates a 'percent' based fee amount i.e. 5% of invoice amount */
  | 'PERCENT';

export type ZonosCollectInvoice = {
  __typename?: 'CollectInvoice';
  /** The total amount due for this `CollectInvoice` */
  amountDue: Scalars['Decimal'];
  /** The currency the `CollectInvoice` amount is represented in */
  currencyCode: ZonosCurrencyCode;
  /** The date payment is due for this `CollectInvoice` */
  dueDate: Scalars['DateTime'];
  /** ID from the Node interface */
  id: Scalars['ID'];
  /** The creation date of this `CollectInvoice`. */
  invoiceDate: Scalars['DateTime'];
  /** The external invoice number associated with this `CollectInvoice` */
  invoiceNumber: Scalars['String'];
  /** The customer facing URL where we pull the external invoice from */
  invoiceUrl: Maybe<Scalars['String']>;
  /** The line items associated with this `CollectInvoice`. */
  lineItems: Array<ZonosCollectInvoiceLineItem>;
  /** Whether the object is in live or test */
  mode: ZonosMode;
  /** The payor `Party` associated with this `CollectInvoice`. */
  party: ZonosParty;
  /** The status of the payment for this `CollectInvoice`. */
  status: ZonosInvoiceStatus;
  /** Timestamp for when the status changed. */
  statusTransitions: Array<ZonosCollectInvoiceStatusTransition>;
  /** The tracking number associated with this `CollectInvoice`. */
  trackingNumber: Scalars['String'];
};

export type ZonosCollectInvoiceCreateInput = {
  /** The currency that the amounts of this `CollectInvoice` are represented in. */
  currencyCode: ZonosCurrencyCode;
  /** The line items contained within this `CollectInvoice`. */
  lineItems: Array<ZonosCollectInvoiceLineItemCreateInput>;
  /** The destination PartyID for he payor of the invoice. */
  partyId: Scalars['String'];
  /** The status of payment for this `CollectInvoice`. */
  status: ZonosInvoiceStatus;
  /** The tracking number associated with this `CollectInvoice`. */
  trackingNumber: Scalars['String'];
};

export type ZonosCollectInvoiceCustomField = {
  __typename?: 'CollectInvoiceCustomField';
  /** The name of the custom field that will appear on the invoice */
  name: Scalars['String'];
  /** The value of the custom field that will appear on the invoice` */
  value: Scalars['String'];
};

export type ZonosCollectInvoiceCustomFieldInput = {
  /** The name of the custom field that will appear on the invoice */
  name: Scalars['String'];
  /** The value of the custom field that will appear on the invoice` */
  value: Scalars['String'];
};

export type ZonosCollectInvoiceError = {
  __typename?: 'CollectInvoiceError';
  errorType: ZonosErrorType;
  invoiceId: Maybe<Scalars['ID']>;
  message: Scalars['String'];
  trackingNumber: Scalars['String'];
};

export type ZonosCollectInvoiceFee = {
  __typename?: 'CollectInvoiceFee';
  /** The amount to be used when applying this CollectInvoiceFee */
  amount: Scalars['Decimal'];
  /** The type of calculation to use when applying this CollectInvoiceFee */
  calculationType: ZonosCollectFeeCalculationType;
  /** The currency the amount of this fee will be represented in (or converted if necessary) */
  currencyCode: ZonosCurrencyCode;
  /** Description of the fee being applied, and will display on the invoice */
  description: Scalars['String'];
  /** DateTime representing when collection for this fee will discontinue. If null, the fee will remain active indefinitely. */
  endsAt: Maybe<Scalars['DateTime']>;
  /** Unique ID associated with this CollectInvoiceFee */
  id: Scalars['ID'];
  /** DateTime representing when collection for this fee will begin on invoices. */
  startsAt: Scalars['DateTime'];
};

export type ZonosCollectInvoiceFeeConfiguration = {
  __typename?: 'CollectInvoiceFeeConfiguration';
  /** A custom fee specified by the account holder that will be added to invoices created by Collect */
  accountHolderFees: Array<ZonosCollectInvoiceFee>;
  /** Timestamp of when this CollectInvoiceFeeConfiguration was created */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created this CollectInvoiceFeeConfiguration */
  createdBy: Scalars['ID'];
  /** A unique identifier for this CollectInvoiceFeeConfiguration */
  id: Scalars['ID'];
  /** Timestamp of when this CollectInvoiceFeeConfiguration was last updated */
  updatedAt: Scalars['DateTime'];
  /** The ID of the user who last updated this CollectInvoiceFeeConfiguration */
  updatedBy: Scalars['ID'];
  /** A fee from Zonos that will be added to invoices created by Collect */
  zonosFees: Array<ZonosCollectInvoiceFee>;
};

export type ZonosCollectInvoiceFeeConfigurationInput = {
  /** Custom fee(s) specified by the account holder that will be added to invoices created by Collect */
  accountHolderFees?: InputMaybe<Array<ZonosCollectInvoiceFeeInput>>;
  /** Fee(s) from Zonos that will be added to invoices created by Collect */
  zonosFees: Array<ZonosCollectInvoiceFeeInput>;
};

export type ZonosCollectInvoiceFeeInput = {
  /** The amount to be used when applying this CollectInvoiceFee */
  amount: Scalars['Decimal'];
  /** The type of calculation to use when applying this CollectInvoiceFee */
  calculationType?: InputMaybe<ZonosCollectFeeCalculationType>;
  /** The currency the amount of this fee will be represented in (or converted if necessary) */
  currencyCode: ZonosCurrencyCode;
  /** Description of the fee being applied, and will display on the invoice */
  description: Scalars['String'];
  /** DateTime representing when collection for this fee will discontinue. If null, the fee will remain active indefinitely. */
  endsAt?: InputMaybe<Scalars['DateTime']>;
  /** Optional ID of the CollectInvoiceFee to update. If null, a new CollectInvoiceFee will be created */
  id?: InputMaybe<Scalars['ID']>;
  /** DateTime representing when collection for this fee will begin on invoices. If null, the current time will be set. */
  startsAt?: InputMaybe<Scalars['DateTime']>;
};

export type ZonosCollectInvoiceFeeUpdateInput = {
  /** New DateTime representing when collection for this fee will discontinue. Cannot be updated if existing endsAt has passed. */
  endsAt?: InputMaybe<Scalars['DateTime']>;
  /** ID of the CollectInvoiceFee to update */
  id: Scalars['ID'];
};

export type ZonosCollectInvoiceLineItem = {
  __typename?: 'CollectInvoiceLineItem';
  /** The amount due for this `CollectInvoiceLineItem`. */
  amount: Scalars['Decimal'];
  /** The line item charge description for the `CollectInvoiceLineItem`. */
  chargeType: Maybe<ZonosCollectInvoiceLineItemChargeType>;
  /** The currency the `CollectInvoiceLineItem` amount is represented in. */
  currencyCode: Maybe<ZonosCurrencyCode>;
  /** A description of the invoice line item. */
  description: Scalars['String'];
  /** Unique identifier for the `CollectInvoiceLineItem`. */
  id: Scalars['ID'];
  /** Any metadata associated with this `CollectInvoiceLineItem`. */
  metadata: Maybe<Array<ZonosMetadata>>;
};

/** Assigned type of `CollectInvoiceLineItemCharge` */
export type ZonosCollectInvoiceLineItemChargeType =
  | 'DUTY'
  | 'DUTY_TAX'
  | 'FEE'
  | 'OTHER'
  | 'TAX';

export type ZonosCollectInvoiceLineItemCreateInput = {
  /** The amount due for this `CollectInvoiceLineItem`. */
  amount: Scalars['Decimal'];
  /** The line item charge description for the `CollectInvoiceLineItem`. */
  chargeType: ZonosCollectInvoiceLineItemChargeType;
  /** The currency the `CollectInvoiceLineItem` amount is represented in. */
  currencyCode: ZonosCurrencyCode;
  /** A description of the invoice line item. */
  description?: InputMaybe<Scalars['String']>;
  /** Any metadata associated with this `CollectInvoiceLineItem`. */
  metadata?: InputMaybe<Array<ZonosMetadataInput>>;
};

export type ZonosCollectInvoiceResult = ZonosCollectInvoice | ZonosCollectInvoiceError;

export type ZonosCollectInvoiceSettings = {
  __typename?: 'CollectInvoiceSettings';
  /** A hex color code used for secondary brand colors on invoices */
  accentColor: Maybe<Scalars['String']>;
  /** A hex color code used for primary brand colors on invoices */
  brandColor: Maybe<Scalars['String']>;
  /** A list of up to four `CustomField` to be displayed on invoices sent to customers */
  customFields: Array<ZonosCollectInvoiceCustomField>;
  /** A block of text to display in the footer of created invoices */
  defaultFooter: Maybe<Scalars['String']>;
  /** An enum value representing the language to use when generating invoice PDFs */
  defaultLanguage: Maybe<ZonosInvoiceLanguageCode>;
  /** A block of text to be used as the default memo for created invoices. Commonly used as a notes or thank you section */
  defaultMemo: Maybe<Scalars['String']>;
  /** The ID of the `Organization` these settings are associated with */
  organizationId: Scalars['ID'];
};

export type ZonosCollectInvoiceSettingsUpdateInput = {
  /** A hex color code used for secondary brand colors on invoices */
  accentColor?: InputMaybe<Scalars['String']>;
  /** A hex color code used for primary brand colors on invoices */
  brandColor?: InputMaybe<Scalars['String']>;
  /** A list of up to four `CustomField` to be displayed on invoices sent to customers */
  customFields?: InputMaybe<Array<ZonosCollectInvoiceCustomFieldInput>>;
  /** A block of text to display in the footer of created invoices */
  defaultFooter?: InputMaybe<Scalars['String']>;
  /** An enum value representing the language invoice PDFs will be generated in */
  defaultLanguage?: InputMaybe<ZonosInvoiceLanguageCode>;
  /** A block of text to be used as the default memo for created invoices. Commonly used as a notes or thank you section */
  defaultMemo?: InputMaybe<Scalars['String']>;
};

export type ZonosCollectInvoiceStatusTransition = {
  __typename?: 'CollectInvoiceStatusTransition';
  /** When this status transition was created. */
  createdAt: Scalars['DateTime'];
  /** Who updated the status */
  createdBy: Scalars['ID'];
  /** Any additional information required for this status transition. */
  note: Maybe<Scalars['String']>;
  /** The status of this status transition. */
  status: ZonosInvoiceStatus;
};

export type ZonosCollectInvoiceUpdateInput = {
  /** The ID of the `CollectInvoice` to update */
  id: Scalars['ID'];
  /** A note regarding the status change */
  note?: InputMaybe<Scalars['String']>;
  /** The status of the payment for this invoice */
  status: ZonosInvoiceStatus;
};

/** `CollectSubmission` type representing a CollectSubmission notice to collect Duty & Taxes. */
export type ZonosCollectSubmission = {
  __typename?: 'CollectSubmission';
  /** The amount that the `CollectSubmission` was billed for. */
  amount: Scalars['Decimal'];
  /** The creation date of the `CollectSubmission`. */
  createdAt: Scalars['DateTime'];
  /** A unique identifier of who generated the `CollectSubmission` record. */
  createdBy: Scalars['ID'];
  /** The currency code that the `CollectSubmission` was billed in. */
  currencyCode: ZonosCurrencyCode;
  /** The url to the file used to create the `CollectSubmission`. */
  fileUrl: Maybe<Scalars['String']>;
  /** The `CollectSubmission`'s unique identifier. */
  id: Scalars['ID'];
  /** The internal invoice number of the `CollectSubmission`. */
  invoice: Maybe<ZonosCollectInvoice>;
  /** A list of `CollectSubmissionLineItem`s that belong to this CollectSubmission */
  lineItems: Array<ZonosCollectSubmissionLineItem>;
  /** The billing information of the `CollectSubmission`'s payor. */
  parties: Array<ZonosParty>;
  /** The carrier's invoice number that the `CollectSubmission` was generated from. */
  referenceNumber: Maybe<Scalars['String']>;
  /** The `CollectSubmission`'s current status. */
  status: ZonosCollectSubmissionStatusCode;
  /** A record of a `CollectSubmission`'s status transition history. */
  statusTransitions: Array<ZonosCollectSubmissionStatusTransition>;
  /** The tracking number of the package associated with the `CollectSubmission`. */
  trackingNumber: Scalars['String'];
};

/** An auto-generated type for paginating through multiple `CollectSubmission`s. */
export type ZonosCollectSubmissionConnection = {
  __typename?: 'CollectSubmissionConnection';
  /** A list of `Edges` */
  edges: Array<ZonosCollectSubmissionEdge>;
  /** Pagination information about the connection */
  pageInfo: ZonosPageInfo;
  /** The total number of `CollectSubmission` objects in the connection */
  totalCount: Scalars['Int'];
};

export type ZonosCollectSubmissionCreateWorkflowInput = {
  /** The currency code that the `CollectSubmission` was billed in. */
  currencyCode: ZonosCurrencyCode;
  /** A list of line items for the `CollectInvoice` object associated with this `CollectSubmission`. */
  lineItems: Array<ZonosCollectSubmissionLineItemInput>;
  /** The carrier's invoice number that the `CollectSubmission` was generated from. */
  referenceNumber?: InputMaybe<Scalars['String']>;
  /** The tracking number of the package associated with the `CollectSubmission`. */
  trackingNumber: Scalars['String'];
};

/** An auto-generated type used in pagination. */
export type ZonosCollectSubmissionEdge = {
  __typename?: 'CollectSubmissionEdge';
  /** A string used to identify this object in the current pagination connection */
  cursor: Maybe<Scalars['String']>;
  /** The object located at this `Edge` */
  node: Maybe<ZonosCollectSubmission>;
};

export type ZonosCollectSubmissionFileInfoInput = {
  contentType: ZonosContentType;
  fileName: Scalars['String'];
};

export type ZonosCollectSubmissionFilter = {
  /** The minimum and maximum value of the amounts to search for `CollectSubmission`s. */
  amountBetween?: InputMaybe<ZonosAmountRange>;
  /** Represents a range of dates, before, or after the creation date */
  createdAtBetween?: InputMaybe<ZonosDateTimeRange>;
  /** The currency that the amount is represented in. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** The internal invoice number of the `CollectSubmission`. */
  invoice?: InputMaybe<Scalars['ID']>;
  /** The billing information for the `Party` responsible for paying the `CollectSubmission`. */
  party?: InputMaybe<Scalars['ID']>;
  /** The carrier's invoice number that the `CollectSubmission` was generated from. */
  referenceNumber?: InputMaybe<Scalars['String']>;
  /** The `CollectSubmission`'s current status. */
  status?: InputMaybe<ZonosCollectSubmissionStatusCode>;
  /** The tracking number of the package associated with the `CollectSubmission`. */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type ZonosCollectSubmissionLineItem = {
  __typename?: 'CollectSubmissionLineItem';
  /** The amount due for this `CollectSubmissionLineItem`. */
  amount: Scalars['Decimal'];
  /** The line item charge type for the `CollectInvoiceLineItem`. */
  chargeType: ZonosCollectSubmissionLineItemChargeType;
  /** Timestamp of when this CollectSubmissionLineItem was created */
  createdAt: Scalars['DateTime'];
  /** The currency the `CollectInvoiceLineItem` amount is represented in. */
  currencyCode: ZonosCurrencyCode;
  /** A dynamic description of the line item charge. */
  description: Scalars['String'];
  /** A unique ID associated with this CollectSubmissionLineItem */
  id: Scalars['ID'];
};

export type ZonosCollectSubmissionLineItemChargeType =
  | 'DUTY'
  | 'DUTY_TAX'
  | 'FEE'
  | 'OTHER'
  | 'TAX';

export type ZonosCollectSubmissionLineItemInput = {
  /** The amount due for this `CollectSubmissionLineItem`. */
  amount: Scalars['Decimal'];
  /** The line item charge type for the `CollectInvoiceLineItem`. */
  chargeType: ZonosCollectSubmissionLineItemChargeType;
  /** The currency the `CollectInvoiceLineItem` amount is represented in. */
  currencyCode: ZonosCurrencyCode;
  /** A dynamic description of the line item charge. */
  description?: InputMaybe<Scalars['String']>;
};

export type ZonosCollectSubmissionProcessInput = {
  /** The filename of the object to process */
  fileName: Scalars['String'];
  /** The prefix of the object(s) to process */
  prefix: Scalars['String'];
};

/** Input type used to re-try invoice creation for `CollectSubmission`s that already exist */
export type ZonosCollectSubmissionRetryInput = {
  id: Scalars['ID'];
};

export type ZonosCollectSubmissionStatusCode =
  /** Indicates the shipment for the CollectSubmission has been abandoned. Collect Invoice will be voided. */
  | 'ABANDONED'
  /** Indicates the shipment for the CollectSubmission is being held. */
  | 'HELD'
  /** Indicates the a Collect Invoice has not been created for this CollectSubmission. */
  | 'INVOICE_PENDING'
  /** Indicates the CollectSubmission has an open invoice and is awaiting payment. */
  | 'OPENED'
  /** Indicates the CollectSubmission invoice has been paid. */
  | 'PAID'
  /** Indicates the shipment for the CollectSubmission has been returned to the origin. Collect Invoice will be voided. */
  | 'RETURNED'
  /** Indicates the CollectSubmission is voided. Collect Invoice will be voided. */
  | 'VOIDED';

/** `CollectSubmissionStatusTransition` type that records the history of a `CollectSubmission`s status transitions. */
export type ZonosCollectSubmissionStatusTransition = {
  __typename?: 'CollectSubmissionStatusTransition';
  /** DateTime indicating when this status change occurred */
  createdAt: Scalars['DateTime'];
  /** The identifier of who triggered the status change. */
  createdBy: Scalars['ID'];
  /** Text describing this status change */
  note: Maybe<Scalars['String']>;
  /** Status of this `CollectSubmission` at the associated DateTime */
  status: ZonosCollectSubmissionStatusCode;
};

export type ZonosCollectSubmissionUpdateInput = {
  /** The ID of the `CollectSubmission` to update */
  id: Scalars['ID'];
  /** The `CollectSubmission`'s current status. */
  status?: InputMaybe<ZonosCollectSubmissionStatusCode>;
};

export type ZonosCollectSubmissionUploadUrl = {
  __typename?: 'CollectSubmissionUploadUrl';
  /** The name to give the `CollectSubmission` object */
  fileName: Scalars['String'];
  /** The shared prefix to give the `CollectSubmission` object key */
  prefix: Scalars['String'];
  /** The pre-signed upload URL used to store the `CollectSubmission` object */
  url: Scalars['String'];
};

export type ZonosCollectSubmissionUploadUrlInput = {
  fileInfo: Array<ZonosCollectSubmissionFileInfoInput>;
  uploadEventId?: InputMaybe<Scalars['ID']>;
};

export type ZonosCollectUploadError = {
  __typename?: 'CollectUploadError';
  /** The line number of the uploaded file where the error occurred during processing */
  lineNumber: Maybe<Scalars['Int']>;
  /** A message describing the error that occurred */
  message: Scalars['String'];
  /** The tracking number of the `CollectSubmission` that was being processed when the error occurred */
  trackingNumber: Maybe<Scalars['String']>;
};

export type ZonosCollectUploadEvent = {
  __typename?: 'CollectUploadEvent';
  /** A list of `CollectSubmission` objects that are a result of processing the uploaded file */
  collectSubmissions: Array<ZonosCollectSubmission>;
  /** Creation date and time of this `CollectUploadEvent` */
  createdAt: Scalars['DateTime'];
  /** A list of errors that occurred while processing this `CollectUploadEvent` */
  errors: Array<ZonosCollectUploadError>;
  /** Unique ID associated with this `CollectUploadEvent` */
  id: Scalars['ID'];
  /** Enum value representing the status of this `CollectUploadEvent` */
  status: ZonosCollectUploadStatus;
  /** A `CollectSubmissionUploadUrl` associated with this `CollectUploadEvent` */
  url: ZonosCollectSubmissionUploadUrl;
};

export type ZonosCollectUploadEventConnection = {
  __typename?: 'CollectUploadEventConnection';
  /** A list of edges */
  edges: Array<ZonosCollectUploadEventEdge>;
  /** Pagination information about this connection */
  pageInfo: ZonosPageInfo;
  /** Total number of `CollectUploadEvent` objects available given the current filter */
  totalCount: Scalars['Int'];
};

export type ZonosCollectUploadEventEdge = {
  __typename?: 'CollectUploadEventEdge';
  /** A string cursor used to identify this object in the current connection */
  cursor: Maybe<Scalars['String']>;
  /** The `CollectUploadEvent` located at this edge */
  node: Maybe<ZonosCollectUploadEvent>;
};

export type ZonosCollectUploadEventFilter = {
  /** A `DateTimeRange` to filter `CollectUploadEvent` objects by their createdAt field */
  createdAtBetween?: InputMaybe<ZonosDateTimeRange>;
  /** The name of the file used in the upload */
  fileName?: InputMaybe<Scalars['String']>;
  /** The folder prefix generated during URL creation */
  prefix?: InputMaybe<Scalars['String']>;
  /** The status of the `CollectUploadEvent` */
  status?: InputMaybe<ZonosCollectUploadStatus>;
};

export type ZonosCollectUploadStatus =
  | 'FAILED'
  | 'PENDING'
  | 'PROCESSING'
  | 'SUCCEEDED'
  | 'SUCCEEDED_WITH_ERRORS';

export type ZonosConfidenceScoreDisplayStatus =
  | 'DISABLED'
  | 'ENABLED';

/** The origin of the transfer. Enum shared with BillingDgs */
export type ZonosConnectTransferOriginType =
  /** Transfer originated from a Connect account to the Platform. */
  | 'CONNECT'
  /** Transfer originated from the Platform to a Connect account. */
  | 'PLATFORM';

export type ZonosConsignment = {
  __typename?: 'Consignment';
  /** CBP assessed landed cost (duty, tax, fees). Resolved via federation. */
  assessedLandedCost: Maybe<ZonosLandedCost>;
  /** The consolidation this consignment belongs to. */
  consolidation: Maybe<ZonosConsolidation>;
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  /** Currency of declared value. */
  currencyCode: ZonosCurrencyCode;
  /** Declared commercial value. */
  declaredValue: Scalars['Decimal'];
  /** Last country the goods were exported from. May differ from shipFromCountry (e.g., goods made in CN, exported from AU). */
  exportingCountry: ZonosCountryCode;
  /** Handling units in this consignment. */
  handlingUnits: Array<ZonosHandlingUnit>;
  id: Scalars['ID'];
  /** Items in this consignment. Resolved via federation. */
  items: Array<ZonosItem>;
  /** Zonos LandedCost estimate (pre-filing quote). Resolved via federation. */
  landedCost: Maybe<ZonosLandedCost>;
  /** Nature of the import transaction. */
  natureOfTransaction: Maybe<ZonosBrokerageNatureOfTransaction>;
  /** Parties on this consignment. Resolved via federation. */
  parties: Array<ZonosParty>;
  /** Partner Government Agency requirements applicable to this consignment. Derived from item HTS codes and ship-to country at create time. REQUIRED entries always trigger a filing data gather; CONDITIONAL entries are routed through RestrictedItemDgs to resolve maybe→yes/no. Nullable during the deprecation window for requiredPgaAgencies; will be tightened to non-null in a follow-up cleanup. */
  pgaAgencies: Maybe<Array<ZonosConsignmentPgaAgency>>;
  /** External identifier used for de-duping. */
  referenceNumber: Maybe<Scalars['String']>;
  /**
   * Partner Government Agency codes requiring clearance (e.g. FDA, AMS, EPA). Derived from item HTS codes.
   * @deprecated Use pgaAgencies for structured (agency, code, strictness) records. This flat string list is removed in a follow-up cleanup once Java consumers migrate.
   */
  requiredPgaAgencies: Maybe<Array<Scalars['String']>>;
  /** Ship-from country (country of origin). */
  shipFromCountry: ZonosCountryCode;
  /** Current status of this consignment. */
  status: ZonosConsignmentStatus;
  /** Append-only history of status changes for this consignment. */
  statusTransitions: Array<ZonosStatusTransition>;
  /** Package tracking number. Not renamed to houseBillOfLading because for Type 11 postal/express entries this is a parcel tracking number, not a bill of lading. */
  trackingNumber: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
};

export type ZonosConsignmentConnection = {
  __typename?: 'ConsignmentConnection';
  edges: Array<ZonosConsignmentEdge>;
  pageInfo: ZonosPageInfo;
  totalCount: Scalars['Int'];
};

export type ZonosConsignmentCreateWorkflowInput = {
  /** Existing consolidation to assign to. Null if transport context is not yet known. */
  consolidationId?: InputMaybe<Scalars['ID']>;
  /** Currency of declared value. */
  currencyCode: ZonosCurrencyCode;
  /** Declared commercial value. */
  declaredValue: Scalars['Decimal'];
  /** Last country the goods were exported from. May differ from shipFromCountry (e.g., goods made in CN, exported from AU). */
  exportingCountry: ZonosCountryCode;
  /** Physical packages in the consignment. Optional — handling units can also be added later. */
  handlingUnits?: InputMaybe<Array<ZonosHandlingUnitInput>>;
  /** Nature of the import transaction. */
  natureOfTransaction: ZonosBrokerageNatureOfTransaction;
  /** Postal operator code (e.g., 'J1CAEA'). */
  postalOperatorCode?: InputMaybe<ZonosPostalOperatorCode>;
  /** External identifier used for de-duping. */
  referenceNumber?: InputMaybe<Scalars['String']>;
  /** Ship-from country (country of origin). */
  shipFromCountry: ZonosCountryCode;
  /** Shipper account code. Used to resolve the owning organization via partner lookup or shipper_organization mapping. */
  shipperAccountId?: InputMaybe<Scalars['String']>;
  /** Initial lifecycle status. Defaults to CANDIDATE. Pass DRAFT to keep this consignment out of the filing pipeline. */
  status?: InputMaybe<ZonosConsignmentStatus>;
  /** Primary tracking number for the consignment. */
  trackingNumber: Scalars['String'];
};

export type ZonosConsignmentEdge = {
  __typename?: 'ConsignmentEdge';
  cursor: Scalars['String'];
  node: ZonosConsignment;
};

/** Filters for querying consignments. All fields are optional and combined with AND. */
export type ZonosConsignmentFilter = {
  /** Only return consignments assigned to this consolidation. */
  consolidationId?: InputMaybe<Scalars['ID']>;
  /** Only return consignments whose createdAt falls within this range. */
  createdAt?: InputMaybe<ZonosDateTimeRange>;
  /** Only return consignments assigned to this entry. */
  entryId?: InputMaybe<Scalars['ID']>;
  /** Only return consignments in this lifecycle status. */
  status?: InputMaybe<ZonosConsignmentStatus>;
  /** Exact match on tracking number. */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

/** PGA requirement applicable to a consignment. Aggregated from per-item pgaRequirements with strictest-wins semantics per (agency, code) pair. */
export type ZonosConsignmentPgaAgency = {
  __typename?: 'ConsignmentPgaAgency';
  /** Partner Government Agency. Country-prefixed (e.g. US_FDA) so non-US PGAs slot in cleanly later (UK_FSA, EU_ECHA, ...). */
  agency: ZonosBrokeragePgaAgency;
  /** PGA section code, e.g. "FD2", "AM7". Distinct codes within an agency represent distinct CBP filings (e.g. FDA cosmetics FD2 vs. food FD1). */
  code: Scalars['String'];
  /** Whether filing is unconditionally required, or only conditionally required pending downstream evaluation (RestrictedItemDgs). */
  strictness: ZonosBrokeragePgaRequirementStrictness;
};

/** Lifecycle status of a consignment. */
export type ZonosConsignmentStatus =
  /** Parent Entry was accepted by CBP (cascade from Entry.ACCEPTED). */
  | 'ACCEPTED'
  /** Soft-deleted. */
  | 'ARCHIVED'
  /** Initial state on create. Validated; awaiting readiness checks (landed-cost quote, green-light, …) before filing. */
  | 'CANDIDATE'
  /** On hold — held back from the readiness pipeline. Requires manual intervention to advance to CANDIDATE. */
  | 'DRAFT'
  /** Parent Entry has been filed with CBP (cascade from Entry.FILED). */
  | 'FILED'
  /** Claimed by the scheduled filing job; submission to the ABI provider is in flight. */
  | 'FILING'
  /** Submitted to ABI provider; awaiting entry grouping response. */
  | 'PROCESSING'
  /** Passed all readiness checks. Eligible to be claimed by the scheduled filing job. */
  | 'READY'
  /** Parent Entry was rejected by CBP (cascade from Entry.REJECTED). */
  | 'REJECTED';

/** A carrier-level shipment (Master Air Waybill / MAWB) holding one or more Consignments. Cross-org — a consolidation may contain consignments from multiple organizations. Filing happens at this level. */
export type ZonosConsolidation = {
  __typename?: 'Consolidation';
  /** Carrier arrival at US port. */
  arrivalDate: Scalars['DateTime'];
  /** SCAC / IATA carrier code. */
  carrierCode: Scalars['String'];
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  /** Departure from exporting country. */
  exportDate: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  /** FIRMS code or exam site for the auto-filing scheduler. */
  locationOfGoods: Maybe<Scalars['String']>;
  /** Master bill of lading number (MAWB / MBL). */
  masterBillNumber: Scalars['String'];
  /** Port of entry — Schedule D code where CBP processes the entry (Block 6). */
  portOfEntryCode: Scalars['String'];
  /** Port of lading — Schedule D code of the foreign port where goods were loaded for export (Block 13). */
  portOfLading: Maybe<Scalars['String']>;
  /** Port of unlading — Schedule D code of the US port where goods arrive (Block 5b). */
  portOfUnlading: Scalars['String'];
  /** Scheduled departure — filing cannot happen until wheels-up. */
  scheduledDeparture: Scalars['DateTime'];
  /** Voyage, flight, or trip number. */
  serviceNumber: Scalars['String'];
  /** Current status of this consolidation. */
  status: ZonosConsolidationStatus;
  /** Append-only history of status changes for this consolidation. */
  statusTransitions: Array<ZonosStatusTransition>;
  /** CBP mode of transport. */
  transportationMode: ZonosBrokerageTransportationMode;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
};

export type ZonosConsolidationConnection = {
  __typename?: 'ConsolidationConnection';
  edges: Array<ZonosConsolidationEdge>;
  pageInfo: ZonosPageInfo;
  totalCount: Scalars['Int'];
};

export type ZonosConsolidationCreateInput = {
  /** Carrier arrival at US port. */
  arrivalDate: Scalars['DateTime'];
  /** SCAC / IATA carrier code. */
  carrierCode: Scalars['String'];
  /** Existing consignment IDs to assign to this consolidation. */
  consignmentIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Departure from exporting country. */
  exportDate?: InputMaybe<Scalars['DateTime']>;
  /** FIRMS code or exam site for the auto-filing scheduler. */
  locationOfGoods?: InputMaybe<Scalars['String']>;
  /** Master bill of lading number (MAWB / MBL). */
  masterBillNumber: Scalars['String'];
  /** Port of entry — Schedule D code where CBP processes the entry (Block 6). */
  portOfEntryCode: Scalars['String'];
  /** Foreign port of lading (Schedule D code). */
  portOfLading?: InputMaybe<Scalars['String']>;
  /** Port of unlading (Schedule D code). */
  portOfUnlading: Scalars['String'];
  /** Scheduled departure — filing cannot happen until wheels-up. */
  scheduledDeparture: Scalars['DateTime'];
  /** Voyage, flight, or trip number. */
  serviceNumber: Scalars['String'];
  /** CBP mode of transport. */
  transportationMode: ZonosBrokerageTransportationMode;
};

export type ZonosConsolidationEdge = {
  __typename?: 'ConsolidationEdge';
  cursor: Scalars['String'];
  node: ZonosConsolidation;
};

/** Entry-level fields required when filing a consolidation. Transport fields come from the consolidation itself. */
export type ZonosConsolidationFileInput = {
  /** FIRMS code or exam site. */
  locationOfGoods?: InputMaybe<Scalars['String']>;
  /** Schedule D port code where CBP processes the entry (Block 6). */
  portOfEntryCode: Scalars['String'];
};

/** Filters for querying consolidations. All fields are optional and combined with AND. */
export type ZonosConsolidationFilter = {
  /** Exact match on SCAC / IATA carrier code. */
  carrierCode?: InputMaybe<Scalars['String']>;
  /** Only return consolidations whose createdAt falls within this range. */
  createdAt?: InputMaybe<ZonosDateTimeRange>;
  /** Exact match on master bill of lading number. */
  masterBillNumber?: InputMaybe<Scalars['String']>;
  /** Only return consolidations in this lifecycle status. */
  status?: InputMaybe<ZonosConsolidationStatus>;
};

/** Lifecycle status of a consolidation. */
export type ZonosConsolidationStatus =
  /** Soft-deleted. */
  | 'ARCHIVED'
  /** Arrived at US port of unlading. */
  | 'ARRIVED'
  /** Consolidation complete, no further action. */
  | 'CLOSED'
  /** Carrier has reported shipment in transit. */
  | 'IN_TRANSIT'
  /** Consolidation registered, awaiting consignments or carrier updates. */
  | 'PENDING'
  /** All entries for this consolidation cleared by CBP. */
  | 'RELEASED';

/** Fields that can be updated on an existing consolidation. All fields are optional — only provided values are changed. */
export type ZonosConsolidationUpdateInput = {
  /** Carrier arrival at US port. */
  arrivalDate?: InputMaybe<Scalars['DateTime']>;
  /** SCAC / IATA carrier code. */
  carrierCode?: InputMaybe<Scalars['String']>;
  /** Departure from exporting country. */
  exportDate?: InputMaybe<Scalars['DateTime']>;
  /** FIRMS code or exam site for the auto-filing scheduler. */
  locationOfGoods?: InputMaybe<Scalars['String']>;
  /** Master bill of lading number (MAWB / MBL). */
  masterBillNumber?: InputMaybe<Scalars['String']>;
  /** Port of entry — Schedule D code where CBP processes the entry. Required for auto-filing. */
  portOfEntryCode?: InputMaybe<Scalars['String']>;
  /** Foreign port of lading (Schedule D code). */
  portOfLading?: InputMaybe<Scalars['String']>;
  /** Port of unlading — Schedule D code of the US port where goods arrive (Block 5b). */
  portOfUnlading?: InputMaybe<Scalars['String']>;
  /** Scheduled departure — filing cannot happen until wheels-up. */
  scheduledDeparture?: InputMaybe<Scalars['DateTime']>;
  /** Voyage, flight, or trip number. */
  serviceNumber?: InputMaybe<Scalars['String']>;
  /** CBP mode of transport. */
  transportationMode?: InputMaybe<ZonosBrokerageTransportationMode>;
};

/** A constraint is an object that is required when applying a `countryConstraint` to a `serviceLevel`. These constraints are typically based on price, quantity, volume, or weight. */
export type ZonosConstraint = {
  __typename?: 'Constraint';
  /** When this Constraint was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Constraint. */
  createdBy: Scalars['ID'];
  /** A unique identifier for the Constraint. */
  id: Scalars['ID'];
  /** The maximum amount that applies to the Constraint. */
  max: Maybe<Scalars['Decimal']>;
  /** The minimum amount that applies to the Constraint. */
  min: Maybe<Scalars['Decimal']>;
  /** Indicates what type of value the min and max fields represent. */
  type: ZonosConstraintType;
  /** Represents the unit based on the type that applies to the Constraint. */
  unitOfMeasure: ZonosConstraintUnitCode;
  /** When this Constraint was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Constraint. */
  updatedBy: Scalars['ID'];
};

export type ZonosConstraintType =
  | 'GIRTH'
  | 'GIRTH_AND_LENGTH'
  | 'HEIGHT'
  | 'LENGTH'
  | 'PRICE'
  | 'QUANTITY'
  | 'VOLUME'
  | 'WEIGHT'
  | 'WIDTH';

/** Any CurrencyCode, WeightUnitCode, DimensionalUnitCode or VolumeUnitCode */
export type ZonosConstraintUnitCode =
  /** United Arab Emirates Dirham */
  | 'AED'
  /** Afghan Afghani (؋) */
  | 'AFN'
  /** Albanian Lek (Lek) */
  | 'ALL'
  /** Armenian Dram (֏) */
  | 'AMD'
  /** NL Antillian Guilder (ƒ) */
  | 'ANG'
  /** Angolan Kwanza (Kz) */
  | 'AOA'
  /** Argentine Peso */
  | 'ARS'
  /** Australian Dollar ($) */
  | 'AUD'
  /** Aruban Florin (ƒ) */
  | 'AWG'
  /** Azerbaijani Manat (ман) */
  | 'AZN'
  /** Bosnia and Herzegovina Convertible Mark (KM) */
  | 'BAM'
  | 'BARREL_PETROLEUM'
  /** Barbadian Dollar ($) */
  | 'BBD'
  /** Bangladeshi Taka (৳) */
  | 'BDT'
  /** Bulgarian Lev (лв) */
  | 'BGN'
  /** Bahraini Dinar */
  | 'BHD'
  /** Burundian franc (FBu) */
  | 'BIF'
  /** Bermudian Dollar ($) */
  | 'BMD'
  /** Brunei Dollar */
  | 'BND'
  /** Bolivian Boliviano ($b) */
  | 'BOB'
  /** Brazilian Real (R$) */
  | 'BRL'
  /** Bahamian Dollar ($) */
  | 'BSD'
  /** Bitcoin */
  | 'BTC'
  /** Bhutanese Ngultrum */
  | 'BTN'
  | 'BUSHEL_UK'
  | 'BUSHEL_US_DRY'
  /** Botswana Pula (P) */
  | 'BWP'
  /** New Belarusian Ruble */
  | 'BYN'
  /** Belarusian ruble (Br) */
  | 'BYR'
  /** Belize Dollar (BZ$) */
  | 'BZD'
  /** Canadian Dollar ($) */
  | 'CAD'
  | 'CARAT'
  /** Congolese Franc (FC) */
  | 'CDF'
  | 'CENTIGRAM'
  | 'CENTILITER_CL'
  | 'CENTIMETER'
  /** Swiss Franc (CHF) */
  | 'CHF'
  /** Unidad de Fomento (UF) */
  | 'CLF'
  /** Chilean Peso */
  | 'CLP'
  /** Chinese Yuan Renminbi (¥) */
  | 'CNY'
  /** Colombian Peso */
  | 'COP'
  /** Costa Rican Colón (₡) */
  | 'CRC'
  | 'CUBIC_CENTIMETER'
  | 'CUBIC_DECIMETER'
  | 'CUBIC_FOOT'
  | 'CUBIC_INCH'
  | 'CUBIC_METER'
  | 'CUBIC_MILLIMETER'
  | 'CUBIC_YARD'
  /** Cuban Convertible Peso */
  | 'CUC'
  /** Cuban Peso */
  | 'CUP'
  /** Cape Verdean escudo */
  | 'CVE'
  /** Czech Koruna (Kč) */
  | 'CZK'
  | 'DECALITER_DAL'
  | 'DECILITER'
  | 'DECIMETER'
  /** Djiboutian franc (Fdj) */
  | 'DJF'
  /** Danish Krone (kr) */
  | 'DKK'
  /** Dominican Peso (RD$) */
  | 'DOP'
  /** Algerian Dinar (دج) */
  | 'DZD'
  /** Egyptian Pound (£) */
  | 'EGP'
  /** Eritrean Nakfa */
  | 'ERN'
  /** Ethiopian Birr (Br) */
  | 'ETB'
  /** Euro (€) */
  | 'EUR'
  /** Fiji Dollar */
  | 'FJD'
  /** Falkland Islands Pound (£) */
  | 'FKP'
  | 'FLUID_DRAM_FL_DR'
  | 'FLUID_OUNCE_FL_OZ'
  | 'FLUID_OUNCE_UK'
  | 'FOOT'
  | 'GALLON_FLUID'
  | 'GALLON_UK'
  /** British Pound (£) */
  | 'GBP'
  /** Georgian Lari (ლ) */
  | 'GEL'
  /** Guernsey Pound */
  | 'GGP'
  /** Ghanaian Cedi */
  | 'GHS'
  | 'GILL_GI'
  /** Gibraltar Pound (£) */
  | 'GIP'
  /** Gambian Dalasi (D) */
  | 'GMD'
  /** Guinean franc (FG) */
  | 'GNF'
  | 'GRAM'
  /** Guatemalan Quetzal (Q) */
  | 'GTQ'
  /** Guyanese Dollar ($) */
  | 'GYD'
  | 'HECTOLITER'
  /** Hong Kong Dollar */
  | 'HKD'
  /** Honduran Lempira (L) */
  | 'HNL'
  /** Croatian Kuna (kn) */
  | 'HRK'
  /** Haitian Gourde */
  | 'HTG'
  /** Hungarian Forint (Ft) */
  | 'HUF'
  /** Indonesian rupiah (Rp) */
  | 'IDR'
  /** Isreali New Shekel (₪) */
  | 'ILS'
  /** Manx pound */
  | 'IMP'
  | 'INCH'
  /** Indian Rupee (Rs) */
  | 'INR'
  /** Iraqi Dinar */
  | 'IQD'
  /** Iranian Rial */
  | 'IRR'
  /** Iceland Krona (kr) */
  | 'ISK'
  /** Jersey Pound */
  | 'JEP'
  /** Jamaican Dollar (J$) */
  | 'JMD'
  /** Jordanian Dinar */
  | 'JOD'
  /** Japanese Yen (¥) */
  | 'JPY'
  /** Kenyan Shilling (KSh) */
  | 'KES'
  /** Kyrgyzstani Som (лв) */
  | 'KGS'
  /** Cambodian Riel (៛) */
  | 'KHR'
  | 'KILOGRAM'
  | 'KILOLITER'
  /** Comorian franc (CF) */
  | 'KMF'
  /** North Korean Won */
  | 'KPW'
  /** South-Korean Won (₩) */
  | 'KRW'
  /** Kuwaiti Dinar */
  | 'KWD'
  /** Cayman Islands Dollar ($) */
  | 'KYD'
  /** Kazakhastan Tenge (лв) */
  | 'KZT'
  /** Lao Kip (₭) */
  | 'LAK'
  /** Lebanese Pound (£) */
  | 'LBP'
  | 'LITER'
  /** Sri Lanka Rupee (Rs) */
  | 'LKR'
  /** Liberian Dollar ($) */
  | 'LRD'
  /** Lesotho Loti (L) */
  | 'LSL'
  /** Lithuanian Litas (Lt) */
  | 'LTL'
  /** Latvian Lats */
  | 'LVL'
  /** Libyan Dinar */
  | 'LYD'
  /** Moroccan Dirham */
  | 'MAD'
  /** Moldovan Leu */
  | 'MDL'
  | 'METER'
  /** Malagasy ariary (Ar) */
  | 'MGA'
  | 'MICROLITER'
  | 'MILLIGRAM'
  | 'MILLILITER_ML'
  | 'MILLIMETER'
  | 'MINIM_MIN'
  /** Macedonian Denar (ден) */
  | 'MKD'
  /** Myanmar Kyat (K) */
  | 'MMK'
  /** Mongolian Tögrög (₮) */
  | 'MNT'
  /** Macanese Pataca */
  | 'MOP'
  /** Mauritanian ouguiya (UM) */
  | 'MRO'
  /** Mauritius Rupee (Rs) */
  | 'MUR'
  /** Maldive Rufiyaa */
  | 'MVR'
  /** Malawian Kwacha (MK) */
  | 'MWK'
  /** Mexican Peso ($) */
  | 'MXN'
  /** Malaysian Ringgit (RM) */
  | 'MYR'
  /** Mozambican Metical (MT) */
  | 'MZN'
  /** Namibian Dollar ($) */
  | 'NAD'
  /** Nigerian Naira (₦) */
  | 'NGN'
  /** Nicaraguan Córdoba (C$) */
  | 'NIO'
  /** Norwegian Kroner (kr) */
  | 'NOK'
  /** Nepalese Rupee (Rs) */
  | 'NPR'
  /** New Zealand Dollar ($) */
  | 'NZD'
  /** Omani Rial (﷼) */
  | 'OMR'
  | 'OUNCE'
  /** Panamanian Balboa (B/.) */
  | 'PAB'
  | 'PECK_US_DRY'
  /** Peruvian Nuevo Sol (S/.) */
  | 'PEN'
  /** Papua New Guinean Kina (K) */
  | 'PGK'
  /** Philippine Peso (Php) */
  | 'PHP'
  | 'PINT_FLUID'
  | 'PINT_UK'
  | 'PINT_US_DRY'
  /** Pakistani Rupee (₨) */
  | 'PKR'
  /** Polish Zloty (zł) */
  | 'PLN'
  | 'POUND'
  /** Paraguayan guaraní (₲) */
  | 'PYG'
  /** Qatari Rial (﷼) */
  | 'QAR'
  | 'QUART_FLUID'
  | 'QUART_UK'
  | 'QUART_US_DRY'
  /** Romanian Leu (lei) */
  | 'RON'
  /** Serbian Dinar (Дин.) */
  | 'RSD'
  /** Russian Rouble (руб) */
  | 'RUB'
  /** Rwandan franc (FRw) */
  | 'RWF'
  /** Saudi Riyal (﷼) */
  | 'SAR'
  /** Solomon Islands Dollar ($) */
  | 'SBD'
  /** Seychellois Rupee (₨) */
  | 'SCR'
  /** Sudanese Pound */
  | 'SDG'
  /** Swedish Krona (kr) */
  | 'SEK'
  /** Singapore Dollar */
  | 'SGD'
  /** Saint Helenian Pound (£) */
  | 'SHP'
  /** Sierra Leonean Leone */
  | 'SLL'
  /** Somali Shilling (S) */
  | 'SOS'
  /** Surinamese Dollar ($) */
  | 'SRD'
  /** São Tomé and Príncipe Dobra (Db) */
  | 'STD'
  /** Salvadoran Colón ($) */
  | 'SVC'
  /** Syrian Pound */
  | 'SYP'
  /** Swazi Lilangeni (L) */
  | 'SZL'
  /** Thai Baht (฿) */
  | 'THB'
  /** Tajikistani Somoni */
  | 'TJS'
  /** Turkmenistani Manat */
  | 'TMT'
  /** Tunisian Dinar */
  | 'TND'
  | 'TON'
  /** Tongan Paʻanga (T$ ) */
  | 'TOP'
  /** Turkish Lira (TL) */
  | 'TRY'
  /** Trinidad/Tobago Dollar (TT$) */
  | 'TTD'
  /** Taiwan Dollar (NT$) */
  | 'TWD'
  /** Tanzanian Shilling (TSh) */
  | 'TZS'
  /** Ukraine Hryvnia (₴) */
  | 'UAH'
  /** Ugandan shilling (USh) */
  | 'UGX'
  /** US Dollar ($) */
  | 'USD'
  /** Uruguayan Peso ($U) */
  | 'UYU'
  /** Uzbekistani Som (лв) */
  | 'UZS'
  /** Venezuelan Bolívar Fuerte */
  | 'VEF'
  /** Vietnamese dong (₫) */
  | 'VND'
  /** Vanuatu vatu (VT) */
  | 'VUV'
  /** Samoan Tala */
  | 'WST'
  /** Central African CFA franc (FCFA) */
  | 'XAF'
  /** Silver (troy ounce) */
  | 'XAG'
  /** Gold (troy ounce) */
  | 'XAU'
  /** East Caribbean Dollar ($) */
  | 'XCD'
  /** Special Drawing Rights */
  | 'XDR'
  /** West African CFA franc (CFA) */
  | 'XOF'
  /** CFP franc (F) */
  | 'XPF'
  | 'YARD'
  /** Yemeni Rial (﷼) */
  | 'YER'
  /** South African Rand (R) */
  | 'ZAR'
  /** Zambian Kwacha (K) */
  | 'ZMK'
  /** Zambian Kwacha (ZK) */
  | 'ZMW'
  /** Zimbabwean Dollar */
  | 'ZWL';

export type ZonosContentType =
  | 'CSV';

export type ZonosControlType =
  | 'CARRIER'
  | 'EXPORT'
  | 'IMPORT';

export type ZonosCountryCode =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AO'
  | 'AQ'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BQ'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BV'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CU'
  | 'CV'
  | 'CW'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FM'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GP'
  | 'GQ'
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GU'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HM'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'IC'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MQ'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PW'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SY'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TF'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW';

/** A `CountryConstraint` can be assigned to a `ServiceLevel` to limit countries that are supported by a given `ServiceLevel`. These can also be used to limit shipments supported by the `serviceLevel` and origin/destination based on value, weight, quantity, or volume of given items in a shipment. */
export type ZonosCountryConstraint = {
  __typename?: 'CountryConstraint';
  /** Represents a constraint around a specific attribute that applies to all countries. */
  constraints: Maybe<Array<Maybe<ZonosConstraint>>>;
  /** When this CountryConstraint was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the CountryConstraint. */
  createdBy: Scalars['ID'];
  /** Indicates the type of billing option that is supported. */
  dutyTaxBilling: Maybe<ZonosBillingOptionCode>;
  /** A unique identifier for the CountryConstraint. */
  id: Scalars['ID'];
  /** List of incoterms supported by the CountryConstraint. */
  incoterm: Maybe<Array<ZonosIncotermCode>>;
  /** List of ISO 3166 country codes that apply in the ship from location. */
  shipFromCountryCodes: Array<ZonosCountryCode>;
  /** List of ISO 3166 country codes that apply in the ship to location. */
  shipToCountryCodes: Array<ZonosCountryCode>;
  /** `TransitTime` breakdown that applies to the CountryConstraint. */
  transitTime: Maybe<ZonosTransitTime>;
  /** When this CountryConstraint was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the CountryConstraint. */
  updatedBy: Scalars['ID'];
  /** The `WeightUnitCode` required by the CountryConstraint. */
  weightUnit: Maybe<ZonosWeightUnitCode>;
};

export type ZonosCountryFieldLabel = {
  __typename?: 'CountryFieldLabel';
  /** The country code */
  countryCode: ZonosCountryCode;
  /** The field labels for the location */
  location: ZonosCountryLocationFieldLabel;
  /** The field labels for the person */
  person: ZonosCountryPersonFieldLabel;
};

export type ZonosCountryFieldLabelCreateInput = {
  /** The country code */
  countryCode: ZonosCountryCode;
  /** The field labels for the location */
  location: ZonosCountryLocationFieldLabelCreateInput;
  /** The field labels for the person */
  person: ZonosCountryPersonFieldLabelCreateInput;
};

export type ZonosCountryLocationFieldLabel = {
  __typename?: 'CountryLocationFieldLabel';
  /** The administrative area field label */
  administrativeArea: ZonosFieldFormat;
  /** The administrative area code field label */
  administrativeAreaCode: ZonosFieldFormat;
  /** The country code field label */
  countryCode: ZonosFieldFormat;
  /** The first line field label */
  line1: ZonosFieldFormat;
  /** The second line field label */
  line2: ZonosFieldFormat;
  /** The third line field label */
  line3: ZonosFieldFormat;
  /** The fourth line field label */
  line4: ZonosFieldFormat;
  /** The locality field label */
  locality: ZonosFieldFormat;
  /** The postal code field label */
  postalCode: ZonosFieldFormat;
};

export type ZonosCountryLocationFieldLabelCreateInput = {
  /** The administrative area field label */
  administrativeArea: ZonosFieldFormatCreateInput;
  /** The administrative area code field label */
  administrativeAreaCode: ZonosFieldFormatCreateInput;
  /** The country code field label */
  countryCode: ZonosFieldFormatCreateInput;
  /** The first line field label */
  line1: ZonosFieldFormatCreateInput;
  /** The second line field label */
  line2: ZonosFieldFormatCreateInput;
  /** The third line field label */
  line3: ZonosFieldFormatCreateInput;
  /** The fourth line field label */
  line4: ZonosFieldFormatCreateInput;
  /** The locality field label */
  locality: ZonosFieldFormatCreateInput;
  /** The postal code field label */
  postalCode: ZonosFieldFormatCreateInput;
};

export type ZonosCountryOfOriginAlternate = {
  __typename?: 'CountryOfOriginAlternate';
  /** The alternate country of origin */
  countryOfOrigin: ZonosCountryCode;
  /** The probability mass associated with this country */
  probabilityMass: Scalars['Decimal'];
};

export type ZonosCountryOfOriginInference = {
  __typename?: 'CountryOfOriginInference';
  /** Alternate country of origin that could apply to the item */
  alternates: Array<ZonosCountryOfOriginAlternate>;
  /** The price of the product */
  amount: Maybe<Scalars['Decimal']>;
  /** The brand of the item. */
  brand: Scalars['String'];
  /** The category hierarchy associated with an item for country of origin inference. */
  categories: Array<Scalars['String']>;
  /** Measures the confidence in the inferred country of origin. 1.0=100%. */
  confidenceScore: Scalars['Decimal'];
  /** The inferred country of origin based on the provided information. */
  countryOfOrigin: ZonosCountryCode;
  /** When this `CountryOfOriginInference` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CountryOfOriginInference`. */
  createdBy: Scalars['ID'];
  /** The currency the amount is in */
  currencyCode: Maybe<ZonosCurrencyCode>;
  /** This is the full description associated with an item. */
  description: Scalars['String'];
  /** A Global Trade Item Number (GTIN) of the product, such as UPC, EAN, GTIN-8, or GTIN-14 */
  globalTradeItemNumber: Scalars['String'];
  /** A unique identifier for the `CountryOfOriginInference`. */
  id: Scalars['ID'];
  /** The location of an image related to an item. */
  imageUrl: Scalars['String'];
  /** The material composition of an item for country of origin inference. */
  material: Scalars['String'];
  /** The mode of the inference (LIVE or TEST). */
  mode: Scalars['String'];
  /** The model ID used to generate the `CountryOfOriginInference`. */
  modelId: Scalars['String'];
  /** The model version used for inference (CURRENT or BETA). */
  modelVersion: ZonosModelVersion;
  /** The product name or short description. */
  name: Scalars['String'];
  /** The `Organization` associated with the CatalogItem. */
  organization: Scalars['ID'];
  /** The two letter ISO-3166 code of the primary target country for this product */
  primaryTargetCountryCode: Maybe<ZonosCountryCode>;
  /** The two letter ISO-3166 country code from which this item is being shipped. */
  shipFromCountry: Maybe<ZonosCountryCode>;
  /** When this `CountryOfOriginInference` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `CountryOfOriginInference`. */
  updatedBy: Scalars['ID'];
};

/** An auto-generated type for paginating through multiple `CountryOfOriginInference`. */
export type ZonosCountryOfOriginInferenceConnection = {
  __typename?: 'CountryOfOriginInferenceConnection';
  /** A list of `CountryOfOriginInferenceEdge`. */
  edges: Array<ZonosCountryOfOriginInferenceEdge>;
  /** Pagination information about the connection. */
  pageInfo: Maybe<ZonosPageInfo>;
  /** The total number of `CountryOfOriginInference` items. */
  totalCount: Maybe<Scalars['Int']>;
};

/** An auto-generated type used in pagination. */
export type ZonosCountryOfOriginInferenceEdge = {
  __typename?: 'CountryOfOriginInferenceEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Scalars['String'];
  /** The object located at this `CountryOfOriginInference`. */
  node: ZonosCountryOfOriginInference;
};

export type ZonosCountryOfOriginInferenceInput = {
  /** The price of the product */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** The brand of the item. */
  brand?: InputMaybe<Scalars['String']>;
  /** The category hierarchy associated with an item for country of origin inference. */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** The currency the amount is in */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** This is the full description associated with an item. */
  description?: InputMaybe<Scalars['String']>;
  /** A Global Trade Item Number (GTIN) of the product, such as UPC, EAN, GTIN-8, or GTIN-14 */
  globalTradeItemNumber?: InputMaybe<Scalars['String']>;
  /** The location of an image related to an item. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** The material composition of an item for country of origin inference. */
  material?: InputMaybe<Scalars['String']>;
  /** The AI model version to use for inference. Defaults to CURRENT if not specified. */
  modelVersion?: InputMaybe<ZonosModelVersion>;
  /** The product name or short description. */
  name: Scalars['String'];
  /** The two letter ISO-3166 code of the primary target country for this product */
  primaryTargetCountryCode?: InputMaybe<ZonosCountryCode>;
  /** The two letter ISO-3166 country code from which this item is being shipped. */
  shipFromCountry?: InputMaybe<ZonosCountryCode>;
};

export type ZonosCountryOfOriginJob = {
  __typename?: 'CountryOfOriginJob';
  /** The unique identifier for the job. */
  jobId: Scalars['ID'];
  /** The location where the job output can be found. */
  outputLocation: Maybe<Scalars['String']>;
  /** The number of requests that have been processed. */
  processedRequests: Scalars['Int'];
  /** The current status of the job. */
  status: ZonosCountryOfOriginJobStatus;
  /** The total number of requests in the job. */
  totalRequests: Scalars['Int'];
  /** When this job was last updated. */
  updatedAt: Scalars['DateTime'];
};

/** An auto-generated type for paginating through multiple `CountryOfOriginJob`. */
export type ZonosCountryOfOriginJobConnection = {
  __typename?: 'CountryOfOriginJobConnection';
  /** A list of `CountryOfOriginJobEdge`. */
  edges: Array<ZonosCountryOfOriginJobEdge>;
  /** Pagination information about the connection. */
  pageInfo: Maybe<ZonosPageInfo>;
};

/** An auto-generated type used in pagination. */
export type ZonosCountryOfOriginJobEdge = {
  __typename?: 'CountryOfOriginJobEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Scalars['String'];
  /** The object located at this `CountryOfOriginJob`. */
  node: ZonosCountryOfOriginJob;
};

export type ZonosCountryOfOriginJobFilter = {
  /** The date range for when the job was created. */
  createdAt?: InputMaybe<ZonosDateTimeRange>;
  /** The statuses of the job. */
  status?: InputMaybe<Array<ZonosCountryOfOriginJobStatus>>;
  /** The date range for when the job was updated. */
  updatedAt?: InputMaybe<ZonosDateTimeRange>;
};

export type ZonosCountryOfOriginJobStatus =
  /** Job has completed successfully. */
  | 'COMPLETED'
  /** Job has failed with an error. */
  | 'FAILED'
  /** Job is being parsed and validated. */
  | 'PARSING'
  /** Job is currently being processed. */
  | 'PROCESSING'
  /** Job processing is complete and ready for export. */
  | 'READY_FOR_EXPORT'
  /** Job has been received and is queued for processing. */
  | 'RECEIVED';

/** Country-of-origin misrepresentation risk aggregated across items. */
export type ZonosCountryOfOriginRisk = {
  __typename?: 'CountryOfOriginRisk';
  /** Maximum probability of country-of-origin misrepresentation observed across items with a declared country of origin. Null if no item had a declared country of origin. */
  maxMisrepresentationProbability: Maybe<Scalars['Decimal']>;
};

export type ZonosCountryOfOriginValidateInput = {
  /** The price of the product */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** The brand of the product. */
  brand?: InputMaybe<Scalars['String']>;
  /** The category hierarchy associated with a product for `CountryOfOriginValidation`. */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** The provided country of origin to validate for the product. */
  countryOfOrigin: ZonosCountryCode;
  /** The currency the amount is in */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** This is the full description associated with a product. */
  description?: InputMaybe<Scalars['String']>;
  /** A Global Trade Item Number (GTIN) of the product, such as UPC, EAN, GTIN-8, or GTIN-14 */
  globalTradeItemNumber?: InputMaybe<Scalars['String']>;
  /** The location of an image related to a product. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** The material composition of a product for `CountryOfOriginValidation`. */
  material?: InputMaybe<Scalars['String']>;
  /** The AI model version to use for validation. Defaults to CURRENT if not specified. */
  modelVersion?: InputMaybe<ZonosModelVersion>;
  /** The product name or short description. */
  name: Scalars['String'];
  /** The two letter ISO-3166 code of the primary target country for this product */
  primaryTargetCountryCode?: InputMaybe<ZonosCountryCode>;
  /** The two letter ISO-3166 country code from which this product is being shipped. */
  shipFromCountry?: InputMaybe<ZonosCountryCode>;
};

export type ZonosCountryOfOriginValidation = {
  __typename?: 'CountryOfOriginValidation';
  /** Alternate country of origin that could apply to the product */
  alternates: Array<ZonosCountryOfOriginAlternate>;
  /** The price of the product */
  amount: Maybe<Scalars['Decimal']>;
  /** The brand of the product. */
  brand: Scalars['String'];
  /** The category hierarchy associated with a product for `CountryOfOriginValidation`. */
  categories: Array<Scalars['String']>;
  /** The provided country of origin for the product. */
  countryOfOrigin: ZonosCountryCode;
  /** When this `CountryOfOriginValidation` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `CountryOfOriginValidate`. */
  createdBy: Scalars['ID'];
  /** The currency the amount is in */
  currencyCode: Maybe<ZonosCurrencyCode>;
  /** This is the full description associated with a product. */
  description: Scalars['String'];
  /** A Global Trade Item Number (GTIN) of the product, such as UPC, EAN, GTIN-8, or GTIN-14 */
  globalTradeItemNumber: Scalars['String'];
  /** A unique identifier for the `CountryOfOriginValidation`. */
  id: Scalars['ID'];
  /** The location of an image related to a product. */
  imageUrl: Scalars['String'];
  /** The material composition of a product for `CountryOfOriginValidation`. */
  material: Scalars['String'];
  /** The mode of the validation (LIVE or TEST). */
  mode: Scalars['String'];
  /** The model ID used to generate the `CountryOfOriginValidation`. */
  modelId: Scalars['String'];
  /** The model version used for validation (CURRENT or BETA). */
  modelVersion: ZonosModelVersion;
  /** The product name or short description. */
  name: Scalars['String'];
  /** The `Organization` associated with the CatalogItem. */
  organization: Scalars['ID'];
  /** The two letter ISO-3166 code of the primary target country for this product */
  primaryTargetCountryCode: Maybe<ZonosCountryCode>;
  /** Probability that the provided country of origin is misrepresented (0-1). */
  probabilityOfMisrepresentation: Scalars['Decimal'];
  /** The two letter ISO-3166 country code from which this product is being shipped. */
  shipFromCountry: Maybe<ZonosCountryCode>;
  /** When this `CountryOfOriginValidation` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `CountryOfOriginValidation`. */
  updatedBy: Scalars['ID'];
};

export type ZonosCountryPersonFieldLabel = {
  __typename?: 'CountryPersonFieldLabel';
  /** The company name field label */
  companyName: ZonosFieldFormat;
  /** The email field label */
  email: ZonosFieldFormat;
  /** The first name field label */
  firstName: ZonosFieldFormat;
  /** The last name field label */
  lastName: ZonosFieldFormat;
  /** The phone field label */
  phone: ZonosFieldFormat;
};

export type ZonosCountryPersonFieldLabelCreateInput = {
  /** The company name field label */
  companyName: ZonosFieldFormatCreateInput;
  /** The email field label */
  email: ZonosFieldFormatCreateInput;
  /** The first name field label */
  firstName: ZonosFieldFormatCreateInput;
  /** The last name field label */
  lastName: ZonosFieldFormatCreateInput;
  /** The phone field label */
  phone: ZonosFieldFormatCreateInput;
};

export type ZonosCreateCartonInput = {
  /** The measurement units of the height, length and width. */
  dimensionalUnit: ZonosDimensionalUnitCode;
  /** The numeric height of the `carton`. */
  height?: InputMaybe<Scalars['Decimal']>;
  /** The details of the `packingCarton` contents. */
  items: Array<ZonosCreateCartonItemInput>;
  /** The numeric length of the `carton`. */
  length?: InputMaybe<Scalars['Decimal']>;
  /** The id of the `root` that will own the `Carton`. */
  rootId: Scalars['ID'];
  /** The `fulfillmentCenter` shipping the `packingCarton`. */
  shipFrom?: InputMaybe<Scalars['ID']>;
  /** The `location` id for the end customer. */
  shipTo?: InputMaybe<Scalars['ID']>;
  /** The packaging style (box, polybag, letter, etc.). */
  type: ZonosPackagingType;
  /** The weight of the `carton`. */
  weight?: InputMaybe<Scalars['Decimal']>;
  /** The type of weight associated with the `carton`. */
  weightUnit: ZonosWeightUnitCode;
  /** The numeric width of the `carton`. */
  width?: InputMaybe<Scalars['Decimal']>;
};

export type ZonosCreateCartonItemInput = {
  /** The item id that will be associated with the CartonItem */
  item: Scalars['ID'];
  /** The quantity of the item that will be associated with the `cartonItem` */
  quantity: Scalars['Int'];
  /** The packaging style (box, polybag, letter, etc) */
  type: ZonosPackagingType;
};

export type ZonosCreateClassifySettingInput = {
  boostedProductCategories: Array<InputMaybe<Scalars['String']>>;
  minimumConfidenceThreshold: Scalars['Decimal'];
};

export type ZonosCreateDashboardSettingsInput = {
  defaultDisplayCurrency: Scalars['String'];
  defaultDisplayLanguage: Scalars['String'];
  defaultDisplayLocal: Scalars['String'];
  defaultDisplayTimezone: Scalars['String'];
  defaultUnit: ZonosDashboardUnit;
  displayName: Scalars['String'];
  multiFactorAuth: ZonosMultiFactorAuthSetting;
};

export type ZonosCreateExchangeRateInput = {
  referenceId?: InputMaybe<Scalars['ID']>;
  sourceCurrencyCode: ZonosCurrencyCode;
  targetCurrencyCode: ZonosCurrencyCode;
  type: ZonosExchangeRateType;
};

/** Input type for creating a location (deprecated). */
export type ZonosCreateLocationInput = {
  /** The name of the administrative area (e.g., state, province, region) where the location resides. */
  administrativeArea?: InputMaybe<Scalars['String']>;
  /** The code representing the administrative area (e.g., a state or province code). */
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  /** The ISO 3166-1 alpha-2 code of the country where the location is situated. */
  countryCode: ZonosCountryCode;
  /** The latitude of the location in decimal degrees. */
  latitude?: InputMaybe<Scalars['Decimal']>;
  /** The first line of the location's address. */
  line1?: InputMaybe<Scalars['String']>;
  /** The second line of the location's address, if applicable. */
  line2?: InputMaybe<Scalars['String']>;
  /** The third line of the location's address, if applicable. */
  line3?: InputMaybe<Scalars['String']>;
  /** The fourth line of the location's address, if applicable. */
  line4?: InputMaybe<Scalars['String']>;
  /** The locality of the location (e.g., city, town, village). */
  locality?: InputMaybe<Scalars['String']>;
  /** The longitude of the location in decimal degrees. */
  longitude?: InputMaybe<Scalars['Decimal']>;
  /** Additional metadata associated with the location. */
  metadata?: InputMaybe<Array<InputMaybe<ZonosPartyMetadataInput>>>;
  /** The Plus Code (Open Location Code) for the location, providing a compact representation of geographic coordinates. */
  plusCode?: InputMaybe<Scalars['String']>;
  /** The postal or ZIP code of the location. */
  postalCode?: InputMaybe<Scalars['String']>;
  /** The type of property associated with the location (e.g., RESIDENTIAL, COMMERCIAL). */
  propertyType?: InputMaybe<ZonosPropertyType>;
};

/** Input type for creating a party (deprecated). */
export type ZonosCreatePartyInput = {
  /** The location associated with the party. */
  location?: InputMaybe<ZonosCreateLocationInput>;
  /** The person associated with the party. */
  person?: InputMaybe<ZonosCreatePersonInput>;
  /** The reference ID for the party. */
  referenceId?: InputMaybe<Scalars['ID']>;
  /** The type of the party (e.g., ORIGIN, DESTINATION). */
  type: ZonosPartyType;
};

export type ZonosCreatePaymentsSettingsInput = {
  /** The day of the week payouts occur. */
  dayOfWeek: ZonosDay;
  /** Whether orders should be considered "end of day" for payout. */
  endOfDayBehavior: ZonosEndOfDayBehavior;
  /** How often payouts occur, in days. */
  frequencyDays: Scalars['Int'];
  /** Specifies which system to use for billing Lcg Fees */
  lcgBillingMethod: ZonosLcgBillingMethod;
  /** The minimum balance required to trigger a payout, in USD. */
  minimum: Scalars['Int'];
  /** Specifies which system to use for billing order complete fees */
  orderCompleteBillingMethod: ZonosOrderCompleteBillingMethod;
  /** Specifies which system to use for billing order transaction fees */
  orderTransactionBillingMethod: ZonosOrderTransactionBillingMethod;
};

/** Input type for creating a person (deprecated). */
export type ZonosCreatePersonInput = {
  /** The company name associated with the person. */
  companyName?: InputMaybe<Scalars['String']>;
  /** The customs-assigned number for the person. */
  customsAssignedNumber?: InputMaybe<Scalars['String']>;
  /** The email address of the person. */
  email?: InputMaybe<Scalars['String']>;
  /** The first name of the person. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The last name of the person. */
  lastName?: InputMaybe<Scalars['String']>;
  /** Additional metadata associated with the person. */
  metadata?: InputMaybe<Array<InputMaybe<ZonosPartyMetadataInput>>>;
  /** The phone number of the person. */
  phone?: InputMaybe<Scalars['String']>;
  /** The tax identifier for the person. */
  taxIdentifier?: InputMaybe<ZonosPersonTaxIdentifierInput>;
};

export type ZonosCreateShippingSettingsInput = {
  /** A rough estimate of item weight when calculating shipping, if no per-item weights are provided. */
  defaultWeightMultiplier: Scalars['Decimal'];
  /** ID of the `Preferred Packaging Option` for this `Organization`. */
  preferredPackagingOptionId?: InputMaybe<Scalars['ID']>;
};

/** Options for where the credentials are stored. */
export type ZonosCredentialProvider =
  /** General use retail/published rates. */
  | 'GENERAL'
  /** Organization-specific credentials. */
  | 'ORGANIZATION'
  /** Partner accounts are accounts provided by a partner with many sellers. These give sellers access to an approved account from a third party rating provider */
  | 'PARTNER';

export type ZonosCurrencyCode =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BRL'
  | 'BSD'
  | 'BTC'
  | 'BTN'
  | 'BWP'
  | 'BYN'
  | 'BYR'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHF'
  | 'CLF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'CRC'
  | 'CUC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GGP'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HRK'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'IMP'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JEP'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LTL'
  | 'LVL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRO'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLE'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'STD'
  | 'SVC'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'UYU'
  | 'UZS'
  | 'VEF'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XAG'
  | 'XAU'
  | 'XCD'
  | 'XDR'
  | 'XOF'
  | 'XPF'
  | 'YER'
  | 'ZAR'
  | 'ZMK'
  | 'ZMW'
  | 'ZWL';

export type ZonosCurrencyConversion = {
  __typename?: 'CurrencyConversion';
  /** The exchange rate used to convert the amount. */
  exchangeRate: ZonosExchangeRate;
  /** The currency you want converted in the target currency (if no amount was provided the new amount will be whatever would be derived if one was provided.) */
  newAmount: Scalars['Decimal'];
};

/** Determines which currency is used on commercial invoices and customs documents */
export type ZonosCurrencyDisplayMode =
  /** Use the order currency (buyer's transaction currency). Default. */
  | 'ORDER'
  /** Use the origin/merchant currency */
  | 'ORIGIN';

export type ZonosCurrencyFormat = {
  __typename?: 'CurrencyFormat';
  /** The currency code that applies to the `currencyFormat` */
  currencyCode: ZonosCurrencyCode;
  /** The character used to separate the whole units from the fractional units */
  decimalDelimiter: Scalars['String'];
  /** The number of decimal places to display for the currency */
  scale: Scalars['Int'];
  /** The characters used as a symbol of the currency */
  symbol: Scalars['String'];
  /** The location of where the symbol is displayed */
  symbolLocation: Maybe<ZonosCurrencySymbolLocation>;
  /** The character used as the thousands separate */
  thousandsDelimiter: Scalars['String'];
};

export type ZonosCurrencySymbolLocation =
  /** display after the currency amount */
  | 'AFTER'
  /** display before the currency amount */
  | 'BEFORE';

export type ZonosCustomDeclarationInput = {
  /** The custom declaration text to be used when creating labels */
  customDeclarationStatement?: InputMaybe<Scalars['String']>;
  /** The Id of the custom declaration */
  id?: InputMaybe<Scalars['ID']>;
  /** The origin country code for which the declaration applies */
  shipFromCountry?: InputMaybe<Array<ZonosCountryCode>>;
  /** The destination country code(s) for which the declaration applies */
  shipToCountry?: InputMaybe<Array<ZonosCountryCode>>;
};

export type ZonosCustomDeclarationStatement = {
  __typename?: 'CustomDeclarationStatement';
  /** The custom declaration text to be used when creating labels */
  createdAt: Scalars['DateTime'];
  /** The user who created the custom declaration */
  createdBy: Scalars['ID'];
  /** The custom declaration text to be used when creating labels */
  customDeclarationStatement: Scalars['String'];
  /** The Id of the custom declaration */
  id: Scalars['ID'];
  /** The origin country code(s) for which the declaration applies */
  shipFromCountry: Array<ZonosCountryCode>;
  /** The distination country code(s) for which the declaration applies */
  shipToCountry: Array<ZonosCountryCode>;
  /** The timestamp when the custom declaration was updated */
  updatedAt: Scalars['DateTime'];
  /** The user who updated the custom declaration */
  updatedBy: Scalars['ID'];
};

export type ZonosCustomerInvoiceFile = {
  __typename?: 'CustomerInvoiceFile';
  fileUrl: Scalars['String'];
  invoiceReferenceId: Scalars['String'];
};

export type ZonosCustomerInvoiceFileCreateInput = {
  invoiceAmount?: InputMaybe<Scalars['Decimal']>;
  invoiceReferenceId: Scalars['String'];
  invoiceReferenceNumber?: InputMaybe<Scalars['String']>;
  memo?: InputMaybe<Scalars['String']>;
  organizationId?: InputMaybe<Scalars['String']>;
  zonosUrl: Scalars['String'];
};

export type ZonosCustomsDescription = {
  __typename?: 'CustomsDescription';
  categories: Array<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  createdBy: Maybe<Scalars['String']>;
  customsDescription: Maybe<Scalars['String']>;
  description: Maybe<Scalars['String']>;
  hsCode: Scalars['String'];
  id: Scalars['String'];
  imageUrl: Maybe<Scalars['String']>;
  itemId: Maybe<Scalars['String']>;
  material: Maybe<Scalars['String']>;
  mode: ZonosMode;
  name: Scalars['String'];
  organization: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Maybe<Scalars['String']>;
};

export type ZonosCustomsDescriptionCombineAndCreateInput = {
  /** The items on the shipment. */
  items: Array<ZonosCustomsDescriptionCombineAndCreateItemInput>;
  /** The ship to countries for this shipment. */
  shipToCountry?: InputMaybe<ZonosCountryCode>;
};

export type ZonosCustomsDescriptionCombineAndCreateItemInput = {
  /** The category hierarchy associated with an item for classification. */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** This is the full description associated with an item. */
  description?: InputMaybe<Scalars['String']>;
  /** This is the hsCode to be used on the commercial invoice. */
  hsCode: Scalars['String'];
  /** The location of an image related to an item. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** The items physical age */
  itemAge?: InputMaybe<Scalars['String']>;
  /** The id of the item. */
  itemId?: InputMaybe<Scalars['String']>;
  /** The material composition of an item for classification. */
  material?: InputMaybe<Scalars['String']>;
  /** The product name or short description. */
  name: Scalars['String'];
  /** The product id provided at time of classification input */
  productId?: InputMaybe<Scalars['String']>;
};

export type ZonosCustomsDescriptionsCreateInput = {
  categories?: InputMaybe<Array<Scalars['String']>>;
  description?: InputMaybe<Scalars['String']>;
  hsCodeProvided?: InputMaybe<Scalars['String']>;
  imageUrl?: InputMaybe<Scalars['String']>;
  itemAge?: InputMaybe<Scalars['String']>;
  itemId?: InputMaybe<Scalars['String']>;
  material?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  productId?: InputMaybe<Scalars['String']>;
};

export type ZonosCustomsDocument = {
  __typename?: 'CustomsDocument';
  /** Contains details about what carrier this document was submitted to. */
  carrierSubmission: Maybe<ZonosCarrierDocumentSubmission>;
  /** The date and time when the CustomsDocument was created */
  createdAt: Scalars['DateTime'];
  /** The type of CustomsDocument i.e. CERTIFICATE_OF_ORIGIN, COMMERCIAL_INVOICE */
  documentType: ZonosCustomsDocumentType;
  /** External ID of the CustomsDocument. Only applicable if this document was uploaded to a carrier. */
  externalId: Maybe<Scalars['String']>;
  /** Name of the file */
  fileName: Maybe<Scalars['String']>;
  /** Indicates the file type of the CustomsDocument i.e. PDF, TXT */
  fileType: ZonosCustomsDocumentFileType;
  /** The URL of where the CustomsDocument file is stored */
  fileUrl: Scalars['String'];
  /** A unique ID associated with the CustomsDocument */
  id: Scalars['ID'];
  /** The origin country code(s) this document applies to. Null means all origins. */
  shipFromCountry: Maybe<Array<ZonosCountryCode>>;
  /** The destination country code(s) this document applies to. Null means all destinations. */
  shipToCountry: Maybe<Array<ZonosCountryCode>>;
};

export type ZonosCustomsDocumentCarrier =
  | 'DHL'
  | 'FEDEX'
  | 'UPS';

export type ZonosCustomsDocumentConnection = {
  __typename?: 'CustomsDocumentConnection';
  /** A list of `CustomsDocumentEdge` objects */
  edges: Array<ZonosCustomsDocumentEdge>;
  /** `PageInfo` about the connection */
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ZonosCustomsDocumentCreateInput = {
  /** ID of the `CustomsSpec` the `CustomsDocument` will be associated with */
  customsSpecId?: InputMaybe<Scalars['ID']>;
  /** The type of CustomsDocument i.e. CERTIFICATE_OF_ORIGIN, COMMERCIAL_INVOICE */
  documentType: ZonosCustomsDocumentType;
  /** Indicates the file type of the CustomsDocument i.e. PDF, TXT */
  fileType: ZonosCustomsDocumentFileType;
  /** URL to the location of the file */
  fileUrl: Scalars['String'];
  /** The origin country code(s) this document applies to */
  shipFromCountry?: InputMaybe<Array<ZonosCountryCode>>;
  /** The destination country code(s) this document applies to */
  shipToCountry?: InputMaybe<Array<ZonosCountryCode>>;
  /** ID of the `Shipment` the `CustomsDocument` will be associated with */
  shipmentId?: InputMaybe<Scalars['ID']>;
};

export type ZonosCustomsDocumentEdge = {
  __typename?: 'CustomsDocumentEdge';
  /** A cursor for use in pagination */
  cursor: Scalars['String'];
  /** The `CustomsDocument` at the end of the edge */
  node: ZonosCustomsDocument;
};

export type ZonosCustomsDocumentFileType =
  | 'CSV'
  | 'HTML'
  | 'JPG'
  | 'PDF'
  | 'PNG'
  | 'TXT'
  | 'XLSX';

export type ZonosCustomsDocumentFilter = {
  /** Filter by the createdAt within a `DateTimeRange` */
  createdAt?: InputMaybe<ZonosDateTimeRange>;
  /** Filter by the `CustomsSpec` ID */
  customsSpecId?: InputMaybe<Scalars['ID']>;
  /** Filter by the type of CustomsDocument i.e. CERTIFICATE_OF_ORIGIN, COMMERCIAL_INVOICE */
  documentType?: InputMaybe<ZonosCustomsDocumentType>;
};

export type ZonosCustomsDocumentGenerateInput = {
  /** The ID of the `CustomsSpec` that the CustomsDocument is associated with */
  customsSpecId?: InputMaybe<Scalars['ID']>;
  /** The type of CustomsDocument i.e. CERTIFICATE_OF_ORIGIN, COMMERCIAL_INVOICE */
  documentType: ZonosCustomsDocumentType;
  /** Indicates the file type of the CustomsDocument i.e. PDF, TXT */
  fileType: ZonosCustomsDocumentFileType;
};

export type ZonosCustomsDocumentType =
  | 'AUTHORIZATION_FORM'
  | 'CERTIFICATE_OF_ORIGIN'
  | 'CE_CONFORMITY_CERTIFICATE'
  | 'COMMERCIAL_INVOICE'
  | 'CONTROL_LOG_RECEIPT'
  | 'CUSTOMS_DECLARATION'
  | 'EXPORT_ACCOMPANYING_DOCUMENT'
  | 'EXPORT_LICENSE'
  | 'IMPORT_PERMIT'
  | 'MANIFEST_DOCUMENT'
  | 'OTHER'
  | 'PACKING_LIST'
  | 'POWER_OF_ATTORNEY'
  | 'PRO_FORMA_INVOICE'
  | 'SED_DOCUMENT'
  | 'SHIPPERS_LETTER_OF_INSTRUCTION'
  | 'USMCA_CERTIFICATE';

/** A `CustomsItem` is the product of a `CustomsSpec` and includes improved item data */
export type ZonosCustomsItem = {
  __typename?: 'CustomsItem';
  /** The total price amount for this item */
  amount: Scalars['Decimal'];
  /** The country that this item originates from */
  countryOfOrigin: ZonosCountryCode;
  /** Where this origin information came from */
  countryOfOriginSource: ZonosCustomsItemValueSource;
  /** The description of this item for the purpose of clearance */
  description: Scalars['String'];
  /** The HS code that describes this item */
  hsCode: Scalars['String'];
  /** The source of the HS code classification */
  hsCodeSource: ZonosCustomsItemValueSource;
  /** Unique identifier for the `CustomsItem` */
  id: Scalars['ID'];
  /** The items associated with the `CustomsItem` */
  items: Array<ZonosItem>;
  /** The province that this item originates from */
  provinceOfOrigin: Maybe<Scalars['String']>;
  /** Where this province information came from */
  provinceOfOriginSource: Maybe<ZonosCustomsItemValueSource>;
  /** The total number of this item */
  quantity: Scalars['Int'];
  /** Customs data fields required for this item's HS code. */
  requirements: Array<ZonosCustomsRequirement>;
};

export type ZonosCustomsItemValueSource =
  | 'API_REQUEST'
  | 'CATALOG'
  | 'CLASSIFY'
  | 'CLASSIFY_ON_THE_FLY'
  | 'FALLBACK'
  | 'HYBRID'
  | 'ORGANIZATION_SETTING'
  | 'USER_PROVIDED';

export type ZonosCustomsMetadata = {
  __typename?: 'CustomsMetadata';
  /** A key to identify what the value represents */
  key: Scalars['String'];
  /** The value specified */
  value: Maybe<Scalars['String']>;
};

export type ZonosCustomsMetadataInput = {
  /** A key to identify what the value represents */
  key: Scalars['String'];
  /** The value specified */
  value?: InputMaybe<Scalars['String']>;
};

/** A regulatory data field requirement for a given lane and HS code set. Carrier-agnostic. */
export type ZonosCustomsRequirement = ZonosNode & {
  __typename?: 'CustomsRequirement';
  /** Carrier-specific implementation details for collecting this field. */
  carrierDetails: Array<ZonosCustomsRequirementCarrierDetail>;
  /** Export country this requirement applies to. */
  exportCountry: Maybe<ZonosCountryCode>;
  /** HS codes that activate this requirement on this lane. */
  hsCodes: Array<Scalars['String']>;
  id: Scalars['ID'];
  /** Import country this requirement applies to. */
  importCountry: Maybe<ZonosCountryCode>;
  /** Whether the field must be provided. */
  isRequired: ZonosCustomsRequirementRequiredness;
  /** Human-readable label (Zonos-owned, not carrier-specific). */
  label: Scalars['String'];
  /** When this requirement was last refreshed. */
  refreshedAt: Scalars['DateTime'];
  /** Regulating agency (e.g., "FDA", "232"). */
  regulation: Scalars['String'];
  /** Regulation sub-categories this field applies to (e.g., "COSMETICS", "BIOLOGICS"). */
  regulationSections: Array<Scalars['String']>;
  /** Whether the field is collected once per shipment or per product. */
  scope: ZonosCustomsRequirementScope;
};

/** A single permitted value option for a list-typed field. */
export type ZonosCustomsRequirementAllowedValue = {
  __typename?: 'CustomsRequirementAllowedValue';
  /** Value shown to the user. */
  displayValue: Scalars['String'];
  /** Value stored and sent on submission. */
  storedValue: Scalars['String'];
};

/** Carrier-specific implementation detail for collecting a customs requirement field. */
export type ZonosCustomsRequirementCarrierDetail = {
  __typename?: 'CustomsRequirementCarrierDetail';
  /** Carrier identifier (e.g., "UPS"). */
  carrier: Scalars['String'];
  /** Carrier's raw regulation section codes (e.g., "COS", "BIO"). */
  carrierRegulationSections: Array<Scalars['String']>;
  /** Carrier-specific boolean condition logic for CONDITIONAL requirements. */
  conditions: Maybe<Array<ZonosCustomsRequirementCondition>>;
  /** Carrier's display order for the field. */
  displayOrder: Maybe<Scalars['Int']>;
  /** Carrier's human-friendly alias for the field. */
  fieldAlias: Maybe<Scalars['String']>;
  /** Carrier's internal field identifier. */
  fieldKey: Scalars['String'];
  /** Input type the carrier expects. */
  fieldType: ZonosCustomsRequirementFieldType;
  /** Carrier's field group identifier. */
  groupKey: Scalars['String'];
  /** Carrier-provided tooltip / help text. */
  tooltip: Maybe<Scalars['String']>;
  /** Carrier-specific validation rules. */
  validation: Maybe<ZonosCustomsRequirementValidation>;
};

/** A single condition rule for determining whether a CONDITIONAL requirement applies. */
export type ZonosCustomsRequirementCondition = {
  __typename?: 'CustomsRequirementCondition';
  /** The field whose value this condition evaluates. */
  fieldKey: Scalars['String'];
  /** Joins this condition to the previous one. null for the first rule, otherwise AND or OR. */
  logicalOperator: Maybe<Scalars['String']>;
  /** Comparison operator (=, !=, >, <, etc.). */
  operator: Scalars['String'];
  /** The value used for the comparison. */
  value: Scalars['String'];
};

/** UI/input type for a customs requirement field. */
export type ZonosCustomsRequirementFieldType =
  | 'CHECKBOX'
  | 'DATE'
  | 'LIST'
  | 'RADIO'
  | 'TEXTAREA'
  | 'TEXTBOX';

/** Whether a customs requirement must have a value. */
export type ZonosCustomsRequirementRequiredness =
  | 'CONDITIONAL'
  | 'NO'
  | 'YES';

/** Scope at which a customs requirement is collected. */
export type ZonosCustomsRequirementScope =
  | 'PRODUCT'
  | 'SHIPMENT';

/** Validation rules for a customs requirement field value. */
export type ZonosCustomsRequirementValidation = {
  __typename?: 'CustomsRequirementValidation';
  /** Permitted values for list-typed fields. */
  allowedValues: Maybe<Array<ZonosCustomsRequirementAllowedValue>>;
  /** Data type expected (e.g., "Text", "Number", "Date", "List"). */
  dataType: Maybe<Scalars['String']>;
  maxLength: Maybe<Scalars['Int']>;
  minLength: Maybe<Scalars['Int']>;
  /** Regular expression the value must match. */
  regex: Maybe<Scalars['String']>;
};

export type ZonosCustomsRequirementsFilter = {
  exportCountry?: InputMaybe<ZonosCountryCode>;
  hsCodes?: InputMaybe<Array<Scalars['String']>>;
  importCountry?: InputMaybe<ZonosCountryCode>;
  regulation?: InputMaybe<Scalars['String']>;
};

export type ZonosCustomsRequirementsRefreshInput = {
  /** At least one of importCountry or exportCountry must be provided. */
  exportCountry?: InputMaybe<ZonosCountryCode>;
  hsCodes: Array<Scalars['String']>;
  /** At least one of importCountry or exportCountry must be provided. */
  importCountry?: InputMaybe<ZonosCountryCode>;
};

export type ZonosCustomsSpec = ZonosNode & {
  __typename?: 'CustomsSpec';
  /** Subtotal amounts of how the `Order` amount was calculated. */
  amountSubtotals: ZonosCustomsSpecAmountSubtotals;
  /** Objects including other details about the `CustomsSpec` */
  attributes: Array<ZonosCustomsSpecAttribute>;
  /** The timestamp of when this `CustomsSpec` was created */
  createdAt: Scalars['DateTime'];
  /** The two letter currency code that the totals for this `CustomsSpec` will be represented in */
  currencyCode: ZonosCurrencyCode;
  /** A list of `CustomsDocument` objects that are associated with this `CustomsSpec` */
  customsDocuments: Array<ZonosCustomsDocument>;
  /** The `CustomsItem` objects that are a result of generating this `CustomsSpec` */
  customsItems: Array<ZonosCustomsItem>;
  /** Declaration statement to be used for this `CustomsSpec` */
  declarationStatement: Maybe<Scalars['String']>;
  /** A unique identifier for the CustomsSpec. */
  id: Scalars['ID'];
  /** Applicable Incoterm for this `CustomsSpec` */
  incoterm: ZonosIncotermCode;
  /** Optional metadata key/value pairs */
  metadata: Array<ZonosCustomsMetadata>;
  /** Specifies whether the CustomsSpec is in live or test mode. */
  mode: ZonosMode;
  /** The `Organization` associated with the CustomsSpec. */
  organization: Scalars['ID'];
  /** A list of parties associated with the `CustomsSpec` */
  parties: Array<ZonosParty>;
  /** The customs term for the end use of this export */
  reasonForExport: ZonosCustomsSpecEndUseType;
  /** Customs data fields required for this shipment's lane and HS codes. */
  requirements: Array<ZonosCustomsRequirement>;
  /** The service level that was used by the carrier for this `CustomsSpec` */
  serviceLevel: Maybe<ZonosServiceLevel>;
  /** The tracking number provided by the carrier who is handling this shipment */
  trackingNumber: Maybe<Scalars['String']>;
  /** The timestamp of when this `CustomsSpec` was updated */
  updatedAt: Scalars['DateTime'];
};

/** Subtotal amounts of how the `Order` amount was calculated. */
export type ZonosCustomsSpecAmountSubtotals = {
  __typename?: 'CustomsSpecAmountSubtotals';
  /** The total cost of insurance */
  insurance: Maybe<Scalars['Decimal']>;
  /** The total cost of the items */
  items: Maybe<Scalars['Decimal']>;
  /** The total cost of shipping */
  shipping: Maybe<Scalars['Decimal']>;
};

/** Subtotal amounts of how the `Order` amount was calculated. */
export type ZonosCustomsSpecAmountSubtotalsInput = {
  /** The total cost of insurance */
  insurance?: InputMaybe<Scalars['Decimal']>;
  /** The total cost of the items */
  items?: InputMaybe<Scalars['Decimal']>;
  /** The total cost of shipping */
  shipping?: InputMaybe<Scalars['Decimal']>;
};

export type ZonosCustomsSpecAttribute = {
  __typename?: 'CustomsSpecAttribute';
  /** Where this `CustomsSpec` is originating from */
  source: ZonosCustomsSpecSourceType;
  /** The ID of the source */
  sourceId: Scalars['String'];
  /** The type of attribute this is representing */
  type: ZonosCustomsSpecAttributeType;
  /** The value of the attribute */
  value: Scalars['String'];
};

export type ZonosCustomsSpecAttributeInput = {
  /** Where this `CustomsSpec` is originating from */
  source: ZonosCustomsSpecSourceType;
  /** The ID of the source */
  sourceId: Scalars['String'];
  /** The type of attribute this is representing */
  type: ZonosCustomsSpecAttributeType;
  /** The value of the attribute */
  value: Scalars['String'];
};

export type ZonosCustomsSpecAttributeType =
  | 'ACCOUNT_NUMBER'
  | 'B13A'
  | 'DUTY_TAX_BILLING_ACCOUNT_NUMBER'
  | 'ECCN'
  | 'EORI'
  | 'GST'
  | 'IOSS'
  | 'ITN'
  | 'ORDER_NUMBER'
  | 'PURCHASE_ORDER_NUMBER'
  | 'SHIPPING_BILLING_ACCOUNT_NUMBER'
  | 'VAT'
  | 'VOEC';

export type ZonosCustomsSpecConnectInput = {
  customsSpecId: Scalars['ID'];
  orderId: Scalars['ID'];
};

/** An auto-generated type for paginating through multiple CustomsSpecs */
export type ZonosCustomsSpecConnection = {
  __typename?: 'CustomsSpecConnection';
  /** A list of edges. */
  edges: Array<ZonosCustomsSpecEdge>;
  /** Pagination information about the connection */
  pageInfo: Maybe<ZonosPageInfo>;
  /** Total number of results matching the given criteria */
  totalCount: Maybe<Scalars['Int']>;
};

export type ZonosCustomsSpecCreateInput = {
  /** Subtotal amounts of how the `Order` amount was calculated. */
  amountSubtotals: ZonosCustomsSpecAmountSubtotalsInput;
  /** Objects including other details about the `CustomsSpec` */
  attributes?: InputMaybe<Array<ZonosCustomsSpecAttributeInput>>;
  /** The two letter currency code that the totals for this `CustomsSpec` will be represented in */
  currencyCode: ZonosCurrencyCode;
  /** Declaration statement to be used for this `CustomsSpec` */
  declarationStatement?: InputMaybe<Scalars['String']>;
  /** Applicable Incoterm for this `CustomsSpec` */
  incoterm: ZonosIncotermCode;
  /** Optional metadata key/value pairs */
  metadata?: InputMaybe<Array<ZonosCustomsMetadataInput>>;
  /** The `Organization` associated with the CustomsSpec. */
  organization?: InputMaybe<Scalars['ID']>;
  /** The customs term for the end use of this export */
  reasonForExport: ZonosCustomsSpecEndUseType;
  /** ID of the object this `CustomsSpec` will reference. Can be either an `Order`.id or `Shipment`.id */
  referenceId?: InputMaybe<Scalars['ID']>;
  /** The service level that was used by the carrier for this `CustomsSpec` */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** The tracking number provided by the carrier who is handling this shipment */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

/** An auto-generated type used in pagination */
export type ZonosCustomsSpecEdge = {
  __typename?: 'CustomsSpecEdge';
  /** A string used to identify this object in the current pagination connection */
  cursor: Maybe<Scalars['String']>;
  /** The object located at this Edge */
  node: Maybe<ZonosCustomsSpec>;
};

export type ZonosCustomsSpecEndUseType =
  | 'FOR_RESALE'
  | 'NOT_FOR_RESALE';

export type ZonosCustomsSpecFilter = {
  /** Represents a date range to filter CustomsSpec objects creation date. */
  between?: InputMaybe<ZonosDateTimeRange>;
  /** The tracking number associated with a CustomsSpec. */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type ZonosCustomsSpecGenerateInput = {
  /** Subtotal amounts of how the `Order` amount was calculated. */
  amountSubtotals: ZonosCustomsSpecAmountSubtotalsInput;
  /** The two letter currency code that the totals for this `CustomsSpec` will be represented in */
  currencyCode: ZonosCurrencyCode;
  /** CustomsSpec is now related to a `Shipment`. Use `shipmentId` instead. */
  root?: InputMaybe<Scalars['ID']>;
  /** The ID of the `Shipment` this CustomsSpec belongs to */
  shipmentId: Scalars['ID'];
  /** The tracking number provided by the carrier who is handling this shipment */
  trackingNumber: Scalars['String'];
};

export type ZonosCustomsSpecSourceType =
  | 'API_REQUEST'
  | 'CATALOG'
  | 'CLASSIFY'
  | 'ORGANIZATION_SETTING';

export type ZonosCustomsSpecUpdateInput = {
  /** Subtotal amounts of how the `Order` amount was calculated. */
  amountSubtotals: ZonosCustomsSpecAmountSubtotalsInput;
  /** Objects including other details about the `CustomsSpec` */
  attributes?: InputMaybe<Array<ZonosCustomsSpecAttributeInput>>;
  /** The currency the totals for this `CustomsSpec` are represented in */
  currencyCode: ZonosCurrencyCode;
  /** Declaration statement to be used for this `CustomsSpec` */
  declarationStatement?: InputMaybe<Scalars['String']>;
  /** A unique identifier for the CustomsSpec. */
  id: Scalars['ID'];
  /** Applicable Incoterm for this `CustomsSpec` */
  incoterm: ZonosIncotermCode;
  /** Optional metadata key/value pairs */
  metadata?: InputMaybe<Array<ZonosCustomsMetadataInput>>;
  /** The `Organization` associated with the CustomsSpec. */
  organization?: InputMaybe<Scalars['ID']>;
  /** Indicator about the parties involved in this transaction */
  partiesToTransaction?: InputMaybe<ZonosPartiesToTransaction>;
  /** The customs term for the end use of this export */
  reasonForExport: ZonosCustomsSpecEndUseType;
  /** The tracking number provided by the carrier who is handling this shipment */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

/** Regulatory categories for dangerous goods declared on a `ShipmentCarton`. Drives carrier-specific service-code mapping in downstream services (e.g., LabelDgs). */
export type ZonosDangerousGoodsCategory =
  /** Biological substance (UN3373). */
  | 'BIOLOGICAL_SUBSTANCE'
  /** Consumer commodity ID8000. */
  | 'CONSUMER_COMMODITY'
  /** Excepted Quantity per IATA. */
  | 'EXCEPTED_QUANTITY'
  /** Limited Quantity per ADR. */
  | 'LIMITED_QUANTITY'
  /** Magnetized material (UN2807). */
  | 'MAGNETIZED_MATERIAL'
  /** Not Restricted per IATA Special Provision A02 (ADR load exemption). */
  | 'NOT_RESTRICTED_A02'
  /** Not Restricted per IATA Special Provision A67 (engines / machinery, flammable-liquid powered, UN3528). */
  | 'NOT_RESTRICTED_A67'
  /** Not Restricted per IATA Special Provision A70 (pressurized articles, UN3164). */
  | 'NOT_RESTRICTED_A70';

export type ZonosDangerousGoodsDetail = {
  __typename?: 'DangerousGoodsDetail';
  /** The regulatory category of the dangerous goods in this package. */
  category: ZonosDangerousGoodsCategory;
};

export type ZonosDangerousGoodsDetailInput = {
  /** The regulatory category of the dangerous goods in this package. */
  category: ZonosDangerousGoodsCategory;
};

export type ZonosDashboardSettings = {
  __typename?: 'DashboardSettings';
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['String'];
  defaultDisplayCurrency: Maybe<Scalars['String']>;
  defaultDisplayLanguage: Maybe<Scalars['String']>;
  defaultDisplayLocal: Maybe<Scalars['String']>;
  defaultDisplayTimezone: Maybe<Scalars['String']>;
  defaultUnit: Maybe<ZonosDashboardUnit>;
  displayName: Maybe<Scalars['String']>;
  id: Scalars['String'];
  mode: ZonosMode;
  multiFactorAuth: Maybe<ZonosMultiFactorAuthSetting>;
  organization: Maybe<Scalars['String']>;
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['String'];
};

export type ZonosDashboardUnit =
  | 'IMPERIAL'
  | 'METRIC';

export type ZonosDateTimeRange = {
  after?: InputMaybe<Scalars['DateTime']>;
  before?: InputMaybe<Scalars['DateTime']>;
};

export type ZonosDay =
  | 'FRIDAY'
  | 'MONDAY'
  | 'SATURDAY'
  | 'SUNDAY'
  | 'THURSDAY'
  | 'TUESDAY'
  | 'WEDNESDAY';

/** Represents a de minimis amount on a `LandedCost` quote, what it applies to, and how it was assessed */
export type ZonosDeMinimis = {
  __typename?: 'DeMinimis';
  /** Human readable formula indicating how this de minimis was calculated */
  formula: Scalars['String'];
  /** INCOTERM used to assess the de minimis value */
  method: ZonosIncotermCode;
  /** Additional note */
  note: Scalars['String'];
  /** Indicates whether the de mimimis is above or below the threshold */
  threshold: ZonosDeMinimisThreshold;
  /** What this de minimis applies to */
  type: ZonosDeMinimisType;
};

export type ZonosDeMinimisInput = {
  /** Human-readable formula indicating how this `DeMinimis` was calculated. */
  formula: Scalars['String'];
  /** INCOTERM used to assess the `DeMinimis` value. */
  method: ZonosIncotermCode;
  /** Human-readable description of the `DeMinimis`. */
  note: Scalars['String'];
  /** Whether the `DeMimimis` is above or below the threshold. */
  threshold: ZonosDeMinimisThreshold;
  /** What this `DeMinimis` applies to. */
  type: ZonosDeMinimisType;
};

export type ZonosDeMinimisThreshold =
  /** De minimis was above threshold */
  | 'ABOVE'
  /** De minimis was below threshold */
  | 'BELOW';

export type ZonosDeMinimisType =
  /** De minimis applies to duty */
  | 'DUTY'
  /** De minimis applies to fees */
  | 'FEE'
  /** De minimis applies to tax */
  | 'TAX';

export type ZonosDeclaration = {
  __typename?: 'Declaration';
  /** Timestamp of when this Declaration was created */
  createdAt: Scalars['DateTime'];
  /** ID of the User or Organization that created this Declaration */
  createdBy: Scalars['ID'];
  /** Unique identifier for this Declaration */
  id: Scalars['ID'];
  /** List of items that are part of this Declaration */
  items: Array<ZonosItem>;
  /** `LandedCost` object associated with this Declaration */
  landedCost: Maybe<ZonosLandedCost>;
  /** `Order` object associated with this Declaration */
  order: Maybe<ZonosOrder>;
  /** The ID of the `Organization` that is associated with this Declaration */
  organizationId: Scalars['ID'];
  /** List of parties associated with the Declaration */
  parties: Array<ZonosParty>;
  /** The status of payment for this Declaration */
  paymentStatus: ZonosDeclarationPaymentStatus;
  /** Shipment associated with this Declaration */
  shipments: Array<ZonosShipment>;
  /** The source of the Declaration i.e. ZONOS, POST, PREPAY */
  source: ZonosDeclarationSource;
  /** The current status for this Declaration */
  status: ZonosDeclarationStatus;
  /** List of status transitions for this Declaration */
  statusTransitions: Array<ZonosDeclarationStatusTransition>;
  /** The timestamp of when this Declaration was last updated */
  updatedAt: Scalars['DateTime'];
  /** The ID of the User or Organization that last updated this Declaration */
  updatedBy: Scalars['ID'];
};

export type ZonosDeclarationCancelInput = {
  /** Boolean indicating whether or not to force the cancellation */
  force?: InputMaybe<Scalars['Boolean']>;
  /** The ID of the Declaration to cancel */
  id: Scalars['ID'];
  /** Note with details about the reason for cancelling the declaration */
  note?: InputMaybe<Scalars['String']>;
};

export type ZonosDeclarationCancelResult = {
  __typename?: 'DeclarationCancelResult';
  /** A list of errors that occurred while attempting to cancel the Declaration */
  errors: Array<ZonosDeclarationError>;
  /** Enum value indicating SUCCESS or FAILURE */
  result: ZonosResult;
};

/** An auto-generated type for paginating through multiple Declaration */
export type ZonosDeclarationConnection = {
  __typename?: 'DeclarationConnection';
  /** A list of edges. */
  edges: Array<ZonosDeclarationEdge>;
  /** Pagination information about the connection */
  pageInfo: Maybe<ZonosPageInfo>;
  /** Total number of results matching the given criteria */
  totalCount: Maybe<Scalars['Int']>;
};

export type ZonosDeclarationCreateInput = {
  /** The source of the `Declaration`. One of: POST, PREPAY, ZONOS, DIRECT */
  source: ZonosDeclarationSource;
};

export type ZonosDeclarationCreateWorkflowInput = {
  /** List of `LandedCost` IDs to create Declarations for */
  landedCostIds?: InputMaybe<Array<Scalars['ID']>>;
  /** The source of the `Declaration`. One of: POST, PREPAY, ZONOS, DIRECT */
  source: ZonosDeclarationSource;
};

export type ZonosDeclarationEdge = {
  __typename?: 'DeclarationEdge';
  /** A string used to identify this object in the current pagination connection */
  cursor: Maybe<Scalars['String']>;
  /** The object located at this Edge */
  node: Maybe<ZonosDeclaration>;
};

export type ZonosDeclarationError = {
  __typename?: 'DeclarationError';
  /** Error code */
  code: Scalars['String'];
  /** Error message */
  message: Scalars['String'];
};

export type ZonosDeclarationFilter = {
  createdAt?: InputMaybe<ZonosDateTimeRange>;
  /** ID of the landed cost to filter by */
  landedCostId?: InputMaybe<Scalars['ID']>;
  /** Status of the declaration */
  status?: InputMaybe<ZonosDeclarationStatus>;
  /** Tracking number to find a Declaration by */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type ZonosDeclarationPaymentStatus =
  | 'AUTHORIZED'
  | 'OPEN'
  | 'PAID';

export type ZonosDeclarationResult = {
  __typename?: 'DeclarationResult';
  /** The Declaration object that was created */
  declaration: Maybe<ZonosDeclaration>;
  /** List of errors including reasons why a Declaration failed to create */
  errors: Array<ZonosDeclarationError>;
};

export type ZonosDeclarationShipmentCreateInput = {
  /** The ID of the `Declaration` this shipment is being created for. */
  declarationId: Scalars['ID'];
  /** Optional shipment carton details containing dimensions, items, and tracking. */
  shipmentCartons?: InputMaybe<Array<ZonosShipmentCartonInput>>;
  /** A list of tracking numbers associated with the shipment. */
  trackingNumbers?: InputMaybe<Array<Scalars['String']>>;
};

export type ZonosDeclarationSource =
  | 'DIRECT'
  | 'POST'
  | 'PREPAY'
  | 'ZONOS';

export type ZonosDeclarationStatus =
  | 'AUTHORIZED'
  | 'ITMATT_RECEIVED'
  | 'OPEN'
  | 'PARTIALLY_SHIPPED'
  | 'SHIPPED'
  | 'VOIDED';

export type ZonosDeclarationStatusTransition = {
  __typename?: 'DeclarationStatusTransition';
  /** Timestamp of the status change */
  createdAt: Scalars['DateTime'];
  /** ID of the User or Organization that created this DeclarationStatusTransition */
  createdBy: Scalars['ID'];
  /** Optional note containing details about the status transition */
  note: Maybe<Scalars['String']>;
  /** The status value as of the `createdAt` timestamp */
  status: ZonosDeclarationStatus;
};

/** Content declared by the user for validation */
export type ZonosDeclaredItemContent = {
  __typename?: 'DeclaredItemContent';
  categories: Maybe<Array<Scalars['String']>>;
  declaredCountryOfOrigin: Maybe<ZonosCountryCode>;
  declaredHsCode: Maybe<Scalars['String']>;
  declaredValue: Maybe<Scalars['Decimal']>;
  description: Scalars['String'];
  materials: Maybe<Scalars['String']>;
  name: Scalars['String'];
  quantity: Scalars['Int'];
};

/** A declared item that was not found in the image */
export type ZonosDeclaredUnmatchedItem = {
  __typename?: 'DeclaredUnmatchedItem';
  /** The declared content provided by the user */
  declaredContent: ZonosDeclaredItemContent;
  /** Unique identifier */
  id: Scalars['ID'];
};

export type ZonosDeleteJob = {
  __typename?: 'DeleteJob';
  /** Creation date of the job. */
  createdAt: Scalars['DateTime'];
  /** ID of the user who created the job. */
  createdBy: Scalars['ID'];
  /** Unique identifier of the delete job. */
  id: Scalars['String'];
  /** ID of the associated organization. */
  organization: Scalars['ID'];
  /** Count of catalog items that have been deleted. */
  processedCount: Scalars['Int'];
  /** Current status of the job. */
  status: ZonosDeleteJobStatus;
  /** Total count of catalog items that will be deleted. */
  totalCount: Scalars['Int'];
  /** Last update date of the job. */
  updatedAt: Scalars['DateTime'];
  /** ID of the user who last updated the job. */
  updatedBy: Scalars['ID'];
};

export type ZonosDeleteJobEdge = {
  __typename?: 'DeleteJobEdge';
  /** Cursor for pagination. */
  cursor: Scalars['String'];
  /** The delete job at the end of the edge. */
  node: ZonosDeleteJob;
};

export type ZonosDeleteJobStatus =
  | 'COMPLETED'
  | 'ERROR'
  | 'INITIALIZED'
  | 'PROCESSING';

export type ZonosDeleteJobsConnection = {
  __typename?: 'DeleteJobsConnection';
  /** A list of delete job edges. */
  edges: Array<ZonosDeleteJobEdge>;
  /** Information for pagination. */
  pageInfo: Maybe<ZonosPageInfo>;
  /** Total count of delete jobs. */
  totalCount: Scalars['Int'];
};

export type ZonosDeleteJobsFilter = {
  /** Filters delete jobs by their status. */
  status?: InputMaybe<ZonosDeleteJobStatus>;
};

export type ZonosDeliveryType =
  | 'CONSOLIDATED'
  | 'COURIER'
  | 'POSTAL';

export type ZonosDeniedParty = {
  __typename?: 'DeniedParty';
  administrativeAreaCode: Maybe<Scalars['String']>;
  /** Known aliases for the denied party */
  aliases: Maybe<Array<Maybe<Scalars['String']>>>;
  companyName: Maybe<Scalars['String']>;
  countryCode: Maybe<ZonosCountryCode>;
  /** When this `DeniedParty` was created */
  createdAt: Scalars['DateTime'];
  /** When this `DeniedParty` stops applying. */
  endsAt: Maybe<Scalars['DateTime']>;
  /** DeniedParty ID, prefixed with `denied_party_` */
  id: Scalars['ID'];
  line1: Maybe<Scalars['String']>;
  line2: Maybe<Scalars['String']>;
  locality: Maybe<Scalars['String']>;
  name: Maybe<Scalars['String']>;
  postalCode: Maybe<Scalars['String']>;
  /** The source of the denied party. */
  source: Maybe<Scalars['String']>;
  /** Link to the source information. */
  sourceUrls: Maybe<Array<Maybe<Scalars['String']>>>;
  /** When this `DeniedParty` begins to take affect. */
  startsAt: Maybe<Scalars['DateTime']>;
};

/** Suggested action following a denied-party screening. Owned by PartyDgs. */
export type ZonosDeniedPartyAction =
  /** No action required — no matches found. */
  | 'NO_MATCHES'
  /** Review `PartyScreening.matches` to adjudicate potential matches. */
  | 'REVIEW';

/** DeniedParty Connection */
export type ZonosDeniedPartyConnection = {
  __typename?: 'DeniedPartyConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<ZonosDeniedPartyEdge>>>;
  /** Field pageInfo */
  pageInfo: ZonosPageInfo;
};

/** DeniedParty Edge */
export type ZonosDeniedPartyEdge = {
  __typename?: 'DeniedPartyEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<ZonosDeniedParty>;
};

export type ZonosDeniedPartyLocationInput = {
  administrativeArea?: InputMaybe<Scalars['String']>;
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  countryCode: ZonosCountryCode;
  latitude?: InputMaybe<Scalars['Decimal']>;
  line1?: InputMaybe<Scalars['String']>;
  line2?: InputMaybe<Scalars['String']>;
  line3?: InputMaybe<Scalars['String']>;
  line4?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  longitude?: InputMaybe<Scalars['Decimal']>;
  metadata?: InputMaybe<Array<InputMaybe<ZonosPartyMetadataInput>>>;
  plusCode?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  propertyType?: InputMaybe<ZonosPropertyType>;
};

export type ZonosDeniedPartyPersonInput = {
  companyName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Array<InputMaybe<ZonosPartyMetadataInput>>>;
  phone?: InputMaybe<Scalars['String']>;
};

export type ZonosDescriptionOverride = {
  __typename?: 'DescriptionOverride';
  /** A string value to be used to override item descriptions */
  overrideValue: Scalars['String'];
  /** Describes the scope of description overrides */
  scope: ZonosDescriptionOverrideScope;
};

export type ZonosDescriptionOverrideInput = {
  /** Describes the scope of description overrides */
  overrideValue: Scalars['String'];
  /** Describes the scope of description overrides */
  scope: ZonosDescriptionOverrideScope;
};

/** Enum value describing the scope of description overrides. */
export type ZonosDescriptionOverrideScope =
  /** Only override the item descriptions on customs documents */
  | 'CUSTOMS'
  /** Override the item descriptions on customs documents and labels */
  | 'CUSTOMS_AND_LABELS'
  /** Only override the item descriptions on labels */
  | 'LABELS';

export type ZonosDimensionalUnitCode =
  | 'CENTIMETER'
  | 'DECIMETER'
  | 'FOOT'
  | 'INCH'
  | 'METER'
  | 'MILLIMETER'
  | 'YARD';

export type ZonosDisclaimType =
  | 'A'
  | 'B';

export type ZonosDocumentFilingType =
  /** The documents associated with the label were sent electronically */
  | 'ELECTRONIC'
  /** The documents associated with the label are available to be downloaded */
  | 'HARD_COPY';

/** Represents a duty amount on a `LandedCost` quote */
export type ZonosDuty = {
  __typename?: 'Duty';
  /** `Duty` amount in the currency specified by the `Root` object which owns this `LandedCost` */
  amount: Scalars['Decimal'];
  /** Details associated with the `LandedCostDuty` */
  amountDetails: Maybe<Array<ZonosLandedCostDutyAmountDetail>>;
  /** Currency the `Duty` amount is in. @deprecated use currencyCode instead. */
  currency: ZonosCurrencyCode;
  /** Currency the `Duty` amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** Human-readable description of this `Duty`. */
  description: Maybe<Scalars['String']>;
  /** Exchange rate information for foreign currency `Duty` amounts */
  exchangeRate: Maybe<ZonosExchangeRate>;
  /** Human readable formula indicating how this duty was calculated */
  formula: Scalars['String'];
  /** `Item` that this duty amount applies to */
  item: Maybe<ZonosItem>;
  /** Additional note for this `Duty`. */
  note: Maybe<Scalars['String']>;
  /** `Party` responsible for receiving payment on this duty amount */
  payee: Maybe<ZonosParty>;
  /** `Party` responsible for rendering payment on this duty amount */
  payor: Maybe<ZonosParty>;
  /** Type of `Duty`. */
  type: ZonosLandedCostFeeType;
};

export type ZonosDutyInput = {
  /** `Duty` price amount. */
  amount: Scalars['Decimal'];
  /** Currency the `Duty` amount is in. '@deprecated' use currencyCode instead. */
  currency?: InputMaybe<ZonosCurrencyCode>;
  /** Currency the `Duty` amount is in. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** Human-readable description of this `Duty`. */
  description?: InputMaybe<Scalars['String']>;
  /** Exchange rate information for foreign currency `Duty` amounts. */
  exchangeRate?: InputMaybe<Scalars['ID']>;
  /** Human-readable formula indicating how this `Duty` was calculated. */
  formula: Scalars['String'];
  /** `Item` this `Duty` amount applies to. */
  item?: InputMaybe<Scalars['ID']>;
  /** Additional note for this `Duty`. */
  note?: InputMaybe<Scalars['String']>;
  /** `Party` responsible for receiving payment on this `Duty` amount. */
  payee?: InputMaybe<Scalars['ID']>;
  /** `Party` responsible for rendering payment on this `Duty` amount. */
  payor?: InputMaybe<Scalars['ID']>;
  /** Type of `Duty`. */
  type?: InputMaybe<ZonosLandedCostFeeType>;
};

export type ZonosDutyRate = {
  __typename?: 'DutyRate';
  items: Array<ZonosDutyRateItem>;
  shipFromCountry: ZonosCountryCode;
  shipToCountry: ZonosCountryCode;
};

export type ZonosDutyRateInput = {
  items: Array<ZonosDutyRateItemInput>;
  shipFromCountry: ZonosCountryCode;
  shipToCountry: ZonosCountryCode;
  targetCurrency?: InputMaybe<ZonosCurrencyCode>;
};

export type ZonosDutyRateItem = {
  __typename?: 'DutyRateItem';
  amount: Scalars['Decimal'];
  formula: Maybe<Scalars['String']>;
  /** External id used for referencing */
  itemId: Maybe<Scalars['String']>;
  rate: Scalars['Decimal'];
};

export type ZonosDutyRateItemInput = {
  amount: Scalars['Decimal'];
  countryOfOrigin: ZonosCountryCode;
  currencyCode: ZonosCurrencyCode;
  hsCode: Scalars['String'];
  /** External id used for referencing */
  itemId?: InputMaybe<Scalars['String']>;
  shippingAmount: Scalars['Decimal'];
  weightAmount: Scalars['Decimal'];
  weightUnit: ZonosLandedCostWeightUnit;
};

export type ZonosDutyTaxFeeConfiguration =
  | 'EXCLUDE_ALL'
  | 'EXCLUDE_DUTY'
  | 'EXCLUDE_FEE'
  | 'EXCLUDE_TAX'
  | 'INCLUDE_ALL'
  | 'INCLUDE_TAX';

export type ZonosDynamicPackagingStatus =
  | 'DISABLED'
  | 'ENABLED';

/** Determines the base visual style for an AppearanceSettings object. */
export type ZonosElementsUiStyle =
  | 'ROUNDED'
  | 'SHARP';

/** Determines the base color theme for an AppearanceSettings object. */
export type ZonosElementsUiTheme =
  | 'DARK'
  | 'LIGHT'
  | 'SYSTEM';

export type ZonosEndOfDayBehavior =
  | 'EXEMPT'
  | 'REQUIRED';

export type ZonosErrorDetail =
  /** The deadline expired before the operation could complete. For operations that change the state of the system, this error may be returned even if the operation has completed successfully. For example, a successful response from a server could have been delayed long enough for the deadline to expire. HTTP Mapping: 504 Gateway Timeout Error Type: UNAVAILABLE */
  | 'DEADLINE_EXCEEDED'
  /** The server detected that the client is exhibiting a behavior that might be generating excessive load. HTTP Mapping: 420 Enhance Your Calm Error Type: UNAVAILABLE */
  | 'ENHANCE_YOUR_CALM'
  /** The requested field is not found in the schema. This differs from `NOT_FOUND` in that `NOT_FOUND` should be used when a query is valid, but is unable to return a result (if, for example, a specific video id doesn't exist). `FIELD_NOT_FOUND` is intended to be returned by the server to signify that the requested field is not known to exist. This may be returned in lieu of failing the entire query. See also `PERMISSION_DENIED` for cases where the requested field is invalid only for the given user or class of users. HTTP Mapping: 404 Not Found Error Type: BAD_REQUEST */
  | 'FIELD_NOT_FOUND'
  /** The client specified an invalid argument. Note that this differs from `FAILED_PRECONDITION`. `INVALID_ARGUMENT` indicates arguments that are problematic regardless of the state of the system (e.g., a malformed file name). HTTP Mapping: 400 Bad Request Error Type: BAD_REQUEST */
  | 'INVALID_ARGUMENT'
  /** The provided cursor is not valid. The most common usage for this error is when a client is paginating through a list that uses stateful cursors. In that case, the provided cursor may be expired. HTTP Mapping: 404 Not Found Error Type: NOT_FOUND */
  | 'INVALID_CURSOR'
  /** Unable to perform operation because a required resource is missing. Example: Client is attempting to refresh a list, but the specified list is expired. This requires an action by the client to get a new list. If the user is simply trying GET a resource that is not found, use the NOT_FOUND error type. FAILED_PRECONDITION.MISSING_RESOURCE is to be used particularly when the user is performing an operation that requires a particular resource to exist. HTTP Mapping: 400 Bad Request or 500 Internal Server Error Error Type: FAILED_PRECONDITION */
  | 'MISSING_RESOURCE'
  /** Service Error. There is a problem with an upstream service. This may be returned if a gateway receives an unknown error from a service or if a service is unreachable. If a request times out which waiting on a response from a service, `DEADLINE_EXCEEDED` may be returned instead. If a service returns a more specific error Type, the specific error Type may be returned instead. HTTP Mapping: 502 Bad Gateway Error Type: UNAVAILABLE */
  | 'SERVICE_ERROR'
  /** Request failed due to network errors. HTTP Mapping: 503 Unavailable Error Type: UNAVAILABLE */
  | 'TCP_FAILURE'
  /** Request throttled based on server concurrency limits. HTTP Mapping: 503 Unavailable Error Type: UNAVAILABLE */
  | 'THROTTLED_CONCURRENCY'
  /** Request throttled based on server CPU limits HTTP Mapping: 503 Unavailable. Error Type: UNAVAILABLE */
  | 'THROTTLED_CPU'
  /** The server detected that the client is exhibiting a behavior that might be generating excessive load. HTTP Mapping: 429 Too Many Requests Error Type: UNAVAILABLE */
  | 'TOO_MANY_REQUESTS'
  /** The operation is not implemented or is not currently supported/enabled. HTTP Mapping: 501 Not Implemented Error Type: BAD_REQUEST */
  | 'UNIMPLEMENTED'
  /** Unknown error. This error should only be returned when no other error detail applies. If a client sees an unknown errorDetail, it will be interpreted as UNKNOWN. HTTP Mapping: 500 Internal Server Error */
  | 'UNKNOWN';

export type ZonosErrorType =
  /** Bad Request. There is a problem with the request. Retrying the same request is not likely to succeed. An example would be a query or argument that cannot be deserialized. HTTP Mapping: 400 Bad Request */
  | 'BAD_REQUEST'
  /** The operation was rejected because the system is not in a state required for the operation's execution. For example, the directory to be deleted is non-empty, an rmdir operation is applied to a non-directory, etc. Service implementers can use the following guidelines to decide between `FAILED_PRECONDITION` and `UNAVAILABLE`: - Use `UNAVAILABLE` if the client can retry just the failing call. - Use `FAILED_PRECONDITION` if the client should not retry until the system state has been explicitly fixed. E.g., if an "rmdir" fails because the directory is non-empty, `FAILED_PRECONDITION` should be returned since the client should not retry unless the files are deleted from the directory. HTTP Mapping: 400 Bad Request or 500 Internal Server Error */
  | 'FAILED_PRECONDITION'
  /** Internal error. An unexpected internal error was encountered. This means that some invariants expected by the underlying system have been broken. This error code is reserved for serious errors. HTTP Mapping: 500 Internal Server Error */
  | 'INTERNAL'
  /** The requested entity was not found. This could apply to a resource that has never existed (e.g. bad resource id), or a resource that no longer exists (e.g. cache expired.) Note to server developers: if a request is denied for an entire class of users, such as gradual feature rollout or undocumented allowlist, `NOT_FOUND` may be used. If a request is denied for some users within a class of users, such as user-based access control, `PERMISSION_DENIED` must be used. HTTP Mapping: 404 Not Found */
  | 'NOT_FOUND'
  /** The caller does not have permission to execute the specified operation. `PERMISSION_DENIED` must not be used for rejections caused by exhausting some resource or quota. `PERMISSION_DENIED` must not be used if the caller cannot be identified (use `UNAUTHENTICATED` instead for those errors). This error Type does not imply the request is valid or the requested entity exists or satisfies other pre-conditions. HTTP Mapping: 403 Forbidden */
  | 'PERMISSION_DENIED'
  /** The request does not have valid authentication credentials. This is intended to be returned only for routes that require authentication. HTTP Mapping: 401 Unauthorized */
  | 'UNAUTHENTICATED'
  /** Currently Unavailable. The service is currently unavailable. This is most likely a transient condition, which can be corrected by retrying with a backoff. HTTP Mapping: 503 Unavailable */
  | 'UNAVAILABLE'
  /** Unknown error. For example, this error may be returned when an error code received from another address space belongs to an error space that is not known in this address space. Also errors raised by APIs that do not return enough error information may be converted to this error. If a client sees an unknown errorType, it will be interpreted as UNKNOWN. Unknown errors MUST NOT trigger any special behavior. These MAY be treated by an implementation as being equivalent to INTERNAL. When possible, a more specific error should be provided. HTTP Mapping: 520 Unknown Error */
  | 'UNKNOWN';

export type ZonosExchangeRate = {
  __typename?: 'ExchangeRate';
  /** When this `ExchangeRate` was created. */
  createdAt: Scalars['DateTime'];
  /** The unique identifier for the authorized user or API token that created the ExchangeRate. */
  createdBy: Scalars['ID'];
  /** When this `ExchangeRate` should stop being evaluated. */
  expiresAt: Scalars['DateTime'];
  /** A unique identifier for the ExchangeRate. */
  id: Scalars['ID'];
  /** Specifies whether the ExchangeRate is in live or test mode. */
  mode: ZonosMode;
  rate: Scalars['Decimal'];
  source: Maybe<ZonosExchangeRateSource>;
  sourceCurrencyCode: ZonosCurrencyCode;
  targetCurrencyCode: ZonosCurrencyCode;
  targetFormat: Maybe<ZonosCurrencyFormat>;
  type: ZonosExchangeRateType;
};

export type ZonosExchangeRateCreateInput = {
  referenceId?: InputMaybe<Scalars['ID']>;
  source?: InputMaybe<ZonosExchangeRateSource>;
  sourceCurrencyCode: ZonosCurrencyCode;
  targetCurrencyCode: ZonosCurrencyCode;
  type: ZonosExchangeRateType;
};

export type ZonosExchangeRateLinkInput = {
  exchangeRateIds: Array<Scalars['ID']>;
  referenceId: Scalars['String'];
};

export type ZonosExchangeRateSource =
  | 'CBP'
  | 'FIXER'
  | 'STATIC';

export type ZonosExchangeRateTargetType =
  | 'BILLING_COMPANY'
  | 'MERCHANT_BASE'
  | 'MERCHANT_PROVIDED'
  | 'MERCHANT_SETTLED'
  | 'SHOPPER_PRESENTED'
  | 'ZONOS_BASE';

export type ZonosExchangeRateType =
  /** Zonos guaranteed rate */
  | 'GUARANTEED'
  /** Average rate for that day - NOT GUARANTEED */
  | 'MID_MARKET'
  /** This is the rate that the processor quoted */
  | 'PROCESSOR_QUOTED'
  /** This is the rate that the payment processor used */
  | 'SETTLED';

export type ZonosExpireCartType =
  | 'EXPIRED'
  | 'NOT_EXPIRED';

export type ZonosExportJob = {
  __typename?: 'ExportJob';
  /** Creation date of the job. */
  createdAt: Scalars['DateTime'];
  /** ID of the user who created the job. */
  createdBy: Scalars['ID'];
  /** Expiration date of the job. */
  expiresAt: Scalars['DateTime'];
  /** Unique identifier of the job. */
  id: Scalars['ID'];
  /** ID of the associated organization. */
  organization: Scalars['ID'];
  /** Count of processed items in the job. */
  processedCount: Scalars['Int'];
  /** Current status of the job. */
  status: ZonosExportJobStatus;
  /** Total count of items to process in the job. */
  totalCount: Scalars['Int'];
  /** Last update date of the job. */
  updatedAt: Scalars['DateTime'];
  /** ID of the user who last updated the job. */
  updatedBy: Scalars['ID'];
  /** URL to access the export job results. */
  url: Scalars['String'];
};

export type ZonosExportJobConnection = {
  __typename?: 'ExportJobConnection';
  /** A list of export job edges. */
  edges: Array<ZonosExportJobEdge>;
  /** Information for pagination. */
  pageInfo: Maybe<ZonosPageInfo>;
  /** Total count of export jobs. */
  totalCount: Scalars['Int'];
};

export type ZonosExportJobEdge = {
  __typename?: 'ExportJobEdge';
  /** Cursor for pagination. */
  cursor: Maybe<Scalars['String']>;
  /** The export job at the end of the edge. */
  node: ZonosExportJob;
};

export type ZonosExportJobStatus =
  | 'COMPLETED'
  | 'ERROR'
  | 'INITIALIZED'
  | 'PROCESSING';

export type ZonosExportJobsFilter = {
  /** Filters export jobs by their status. */
  status?: InputMaybe<ZonosExportJobStatus>;
};

/** Determines whether an external payment method is enabled or not */
export type ZonosExternalPaymentMethodStatus =
  | 'DISABLED'
  | 'ENABLED';

export type ZonosExtractedItem = {
  __typename?: 'ExtractedItem';
  /** The classification of the item */
  classification: Maybe<ZonosClassification>;
  /** A list containing the localized extracted item information */
  content: Array<ZonosLocalizedItemContent>;
  /** The country of origin inference for the item */
  countryOfOriginInference: Maybe<ZonosCountryOfOriginInference>;
  /** Unique identifier for the extracted item */
  id: Scalars['ID'];
  /** Pre-signed URL to the extracted item image (valid for 15 minutes) */
  imageUrl: Maybe<Scalars['String']>;
  /** Quantity of the extracted item */
  quantity: Scalars['Int'];
  /** The value estimation for the item */
  valueEstimation: Maybe<ZonosValueEstimation>;
};

/** Content extracted from the image by AI */
export type ZonosExtractedItemContent = {
  __typename?: 'ExtractedItemContent';
  categories: Maybe<Array<Scalars['String']>>;
  description: Maybe<Scalars['String']>;
  language: ZonosLanguageCode;
  materials: Maybe<Scalars['String']>;
  name: Scalars['String'];
  quantity: Scalars['Int'];
};

/** Represents a fee amount on a `LandedCost` quote */
export type ZonosFee = {
  __typename?: 'Fee';
  /** `Fee` amount in the currency specified by the `Root` object which owns this `LandedCost` */
  amount: Scalars['Decimal'];
  /** The amount details relating to the landed cost fee */
  amountDetails: Maybe<Array<ZonosLandedCostFeeAmountDetail>>;
  /** Currency the `Fee` amount is in. @deprecated use currencyCode instead. */
  currency: ZonosCurrencyCode;
  /** Currency the `Fee` amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** Human readable description of this `Fee`. */
  description: Maybe<Scalars['String']>;
  /** Exchange rate information for foreign currency `Fee` amounts */
  exchangeRate: Maybe<ZonosExchangeRate>;
  /** Human readable formula indicating how this fee was calculated */
  formula: Scalars['String'];
  /** `Item` this `Fee` amount applies to */
  item: Maybe<ZonosItem>;
  /** Additional note for this `Fee`. */
  note: Maybe<Scalars['String']>;
  /** Party responsible for receving payment on this `Fee` */
  payee: Maybe<ZonosParty>;
  /** Party responsible for rendering payment on this `Fee` */
  payor: Maybe<ZonosParty>;
  /** Type of fee */
  type: ZonosLandedCostFeeType;
};

export type ZonosFeeInput = {
  /** `Fee` price amount. */
  amount: Scalars['Decimal'];
  /** Currency the `Fee` amount is in. @deprecated Use currencyCode instead. */
  currency?: InputMaybe<ZonosCurrencyCode>;
  /** Currency the `Fee` amount is in. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** Human-readable description of this `Fee`. */
  description?: InputMaybe<Scalars['String']>;
  /** Exchange rate information for foreign currency `Fee` amounts. */
  exchangeRate?: InputMaybe<Scalars['ID']>;
  /** Human-readable formula indicating how this `Fee` was calculated. */
  formula: Scalars['String'];
  /** `Item` this `Fee` amount applies to. */
  item?: InputMaybe<Scalars['ID']>;
  /** Human-readable description of the `Fee`. */
  note?: InputMaybe<Scalars['String']>;
  /** `Party` responsible for receiving payment on this `Fee`. */
  payee?: InputMaybe<Scalars['ID']>;
  /** `Party` responsible for rendering payment on this `Fee`. */
  payor?: InputMaybe<Scalars['ID']>;
  /** Type of fee. @deprecated Use feeType instead */
  type?: InputMaybe<ZonosLandedCostFeeType>;
};

/** Indicates whether a fee rule applies to domestic, international, or either context. */
export type ZonosFeeRuleLocaleType =
  | 'DOMESTIC'
  | 'EITHER'
  | 'INTERNATIONAL';

export type ZonosFieldFormat = {
  __typename?: 'FieldFormat';
  /** The field label */
  label: Scalars['String'];
  /** The field pattern */
  pattern: Scalars['String'];
  /** The field status */
  status: ZonosFieldStatus;
};

export type ZonosFieldFormatCreateInput = {
  /** The field label */
  label: Scalars['String'];
  /** The field pattern */
  pattern: Scalars['String'];
  /** The field status */
  status: ZonosFieldStatus;
};

export type ZonosFieldStatus =
  | 'HIDDEN'
  | 'REQUIRED'
  | 'VISIBLE';

export type ZonosFulfilledShipment = {
  __typename?: 'FulfilledShipment';
  /** List of `FulfillmentItem` objects with references to the original items from the `Order` that were present in the `Shipment` */
  items: Array<ZonosFulfillmentItem>;
  /** The `Shipment` object */
  shipment: ZonosShipment;
};

/** A `FulfillmentCenter` services a specified organization and is responsible for receiving/managing inventory and shipping orders to customers. A `fulfillmentCenter` may support specific carriers and will service specified `shippingZones`. */
export type ZonosFulfillmentCenter = {
  __typename?: 'FulfillmentCenter';
  /** When this FulfillmentCenter was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the FulfillmentCenter */
  createdBy: Scalars['ID'];
  /** A unique identifier for the FulfillmentCenter. */
  id: Scalars['ID'];
  /** Specifies whether the FulfillmentCenter is in live or test mode. */
  mode: ZonosMode;
  /** The humanly-memorable display name for the FulfillmentCenter. */
  name: Scalars['String'];
  /** The `Organization` associated with the FulfillmentCenter. */
  organization: Scalars['ID'];
  /** The `Party` to use for the FulfillmentCenter */
  party: ZonosParty;
  /** the type of fulfillmentCenter. you can have only ONE PRIMARY fulfillmentCenter */
  type: ZonosFulfillmentCenterType;
  /** When this FulfillmentCenter was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the FulfillmentCenter. */
  updatedBy: Scalars['ID'];
};

export type ZonosFulfillmentCenterFilter = {
  /** Type of FulfillmentCenter. You can have only one PRIMARY FulfillmentCenter. */
  type?: InputMaybe<ZonosFulfillmentCenterType>;
};

export type ZonosFulfillmentCenterType =
  | 'CONSOLIDATION_CENTER'
  | 'PRIMARY'
  | 'STANDARD';

export type ZonosFulfillmentItem = {
  __typename?: 'FulfillmentItem';
  /** `Item` from the original `Order`. */
  item: ZonosItem;
  /** The quantity of the `Item`. */
  quantity: Scalars['Int'];
};

export type ZonosGeneralCarrierAccountFilter = {
  /** The `CarrierAccountApiUsage` for the account */
  apiUsage?: InputMaybe<ZonosCarrierAccountApiUsage>;
  /** The `code` associated with the `Carrier` of the account */
  carrierCode?: InputMaybe<Scalars['String']>;
};

/** The aggregated compliance risk audit produced by `greenLightWorkflow`. */
export type ZonosGreenLight = {
  __typename?: 'GreenLight';
  /** The set of checks that ran for this workflow. Useful for distinguishing 'check skipped' from 'check ran with no findings'. */
  checksRan: Array<ZonosGreenLightCheck>;
  /** When this `GreenLight` was computed. */
  createdAt: Scalars['DateTime'];
  /** User or organization that created this `GreenLight`. */
  createdBy: Scalars['ID'];
  /** Unique identifier for this `GreenLight`. */
  id: Scalars['ID'];
  /** Per-item sub-validation results. */
  itemResults: Array<ZonosGreenLightItemResult>;
  /** Aggregated per-item risk metrics. */
  itemRiskSummary: ZonosGreenLightItemRiskSummary;
  /** Owning organization. */
  organizationId: Scalars['ID'];
  /** Aggregated denied-party screening metrics. */
  partyScreeningSummary: Maybe<ZonosGreenLightPartyScreeningSummary>;
  /** Per-party denied-party screening results. */
  partyScreenings: Array<ZonosPartyScreening>;
};

/** A regulation result for a specific agency, resolved via federation to the owning service. */
export type ZonosGreenLightAppliedRegulation = {
  __typename?: 'GreenLightAppliedRegulation';
  /** The regulatory agency (e.g. CPSC). */
  agency: Scalars['String'];
  /** CPSC regulation result. Non-null when agency is CPSC. */
  cpsc: Maybe<ZonosAppliedRegulationsCpsc>;
};

/** A check that the GreenLight workflow can run. */
export type ZonosGreenLightCheck =
  | 'COUNTRY_OF_ORIGIN_VALIDATION'
  | 'DENIED_PARTY_SCREENING'
  | 'HS_CODE_COHERENCE'
  | 'REGULATION_CHECK'
  | 'RESTRICTION_CHECK'
  | 'VALUE_VALIDATION';

export type ZonosGreenLightConnection = {
  __typename?: 'GreenLightConnection';
  edges: Array<ZonosGreenLightEdge>;
  pageInfo: ZonosPageInfo;
  totalCount: Scalars['Int'];
};

export type ZonosGreenLightEdge = {
  __typename?: 'GreenLightEdge';
  cursor: Scalars['String'];
  node: ZonosGreenLight;
};

/** Filters for querying GreenLight audits. All fields are optional and combined with AND. */
export type ZonosGreenLightFilter = {
  /** Only return GreenLight audits whose createdAt falls within this range. */
  createdAt?: InputMaybe<ZonosDateTimeRange>;
};

/** The set of sub-validations run against a single item. */
export type ZonosGreenLightItemResult = {
  __typename?: 'GreenLightItemResult';
  /** Per-agency regulation findings for this item (RestrictedItemDgs). */
  appliedRegulations: Array<ZonosGreenLightAppliedRegulation>;
  /** Restricted-item findings for this item (RestrictedItemDgs). */
  appliedRestrictions: Maybe<ZonosAppliedRestrictions>;
  /** HS-code classification for this item, including coherence check results on `hsCodeProvidedValidation` (ClassifyDgs). */
  classification: Maybe<ZonosClassification>;
  /** Country-of-origin validation result for this item (CountryInferenceDgs). */
  countryOfOriginValidation: Maybe<ZonosCountryOfOriginValidation>;
  /** The item these results apply to. */
  item: ZonosItem;
  /** Value validation result for this item (ValueInferenceDgs). */
  valueValidation: Maybe<ZonosValueValidation>;
};

/** Aggregated risk metrics across all items. Each sub-summary rolls up a single risk dimension. */
export type ZonosGreenLightItemRiskSummary = {
  __typename?: 'GreenLightItemRiskSummary';
  /** Country-of-origin misrepresentation risk aggregate. */
  countryOfOriginMisrepresentation: Maybe<ZonosCountryOfOriginRisk>;
  /** HS-code coherence risk aggregate. */
  hsCodeCoherence: Maybe<ZonosHsCodeCoherenceRisk>;
  /** Total number of items evaluated. */
  itemCount: Scalars['Int'];
  /** Regulation match aggregate. */
  regulation: Maybe<ZonosRegulationRiskSummary>;
  /** Restricted-item match aggregate. */
  restriction: Maybe<ZonosRestrictionRiskSummary>;
  /** Under-valuation risk aggregate. */
  underValuation: Maybe<ZonosUnderValuationRisk>;
};

/** Aggregated denied-party screening metrics across all parties. */
export type ZonosGreenLightPartyScreeningSummary = {
  __typename?: 'GreenLightPartyScreeningSummary';
  /** Overall suggested action for the shipment's parties. `NO_MATCHES` if every party screened clean, `REVIEW` if any party matched. */
  action: ZonosDeniedPartyAction;
  /** Maximum overall match score observed across all screenings. Null if no party produced a match. */
  maxDeniedPartyMatchScore: Maybe<Scalars['Decimal']>;
  /** Total number of parties screened. */
  partyCount: Scalars['Int'];
};

/** Severity category of a matched restriction. */
export type ZonosGreenLightRestrictionCategory =
  /** Additional fees, taxes, or duties beyond the standard tariff. */
  | 'COST'
  /** Item is classified as a UN dangerous good. Check regulationTitle for the specific class (e.g., CLASS_3_FLAMMABLE_LIQUID). */
  | 'DANGEROUS_GOODS'
  /** Certificates, tests, or inspections required to clear customs. */
  | 'DOCUMENTATION_REQUIRED'
  /** Informational only. No specific action required. */
  | 'INFORMATION'
  /** Authorization/license required BEFORE shipping. */
  | 'PERMIT_REQUIRED'
  /** Physical modification required (labeling, treatment, packaging). */
  | 'PRODUCT_COMPLIANCE'
  /** Item is banned. Cannot ship. */
  | 'PROHIBITED'
  /** Quantity limits apply. Check availability before shipping. */
  | 'QUOTA';

/** Input for `greenLightWorkflow`. Every sub-validation defaults to enabled; set the corresponding toggle to `false` to skip it. */
export type ZonosGreenLightWorkflowInput = {
  /** Regulatory agencies to check (e.g. ["CPSC"]). Passed through to RestrictedItemDgs. Only applies when regulationCheck is true. */
  agencies?: InputMaybe<Array<Scalars['String']>>;
  /** Whether to run country-of-origin validation (countryOfOriginValidate). */
  countryOfOriginValidation: Scalars['Boolean'];
  /** Whether to run denied-party screening (partyScreenExisting). */
  deniedPartyScreening: Scalars['Boolean'];
  /** Whether to run HS-code coherence check (classificationsCalculate with CHECK_COHERENCE). */
  hsCodeCoherence: Scalars['Boolean'];
  /** Items to audit. Defaults to all items on the current `Root` if omitted. */
  itemIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Parties to audit. Defaults to all parties on the current `Root` if omitted. */
  partyIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Whether to run per-item regulation check (regulationsApply). */
  regulationCheck: Scalars['Boolean'];
  /** Whether to run restricted-item check (restrictionApply). */
  restrictionCheck: Scalars['Boolean'];
  /** Whether to run value validation (valueValidate). */
  valueValidation: Scalars['Boolean'];
};

/** A physical package within a consignment (carton, pallet, parcel). Tenant-scoped. */
export type ZonosHandlingUnit = {
  __typename?: 'HandlingUnit';
  /** Parent consignment. */
  consignment: ZonosConsignment;
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  /** Unit of dimension measurement. */
  dimensionalUnit: Maybe<ZonosDimensionalUnitCode>;
  /** Package height. */
  height: Maybe<Scalars['Decimal']>;
  id: Scalars['ID'];
  /** Items packed in this physical package. Resolved via federation. */
  items: Array<ZonosItem>;
  /** Package length. */
  length: Maybe<Scalars['Decimal']>;
  /** Package tracking number. */
  trackingNumber: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  updatedBy: Scalars['ID'];
  /** Gross weight of the package. */
  weight: Scalars['Decimal'];
  /** Unit of weight measurement. */
  weightUnit: ZonosWeightUnitCode;
  /** Package width. */
  width: Maybe<Scalars['Decimal']>;
};

/** Inline handling unit creation input. */
export type ZonosHandlingUnitInput = {
  /** Unit of dimension measurement. */
  dimensionalUnit?: InputMaybe<ZonosDimensionalUnitCode>;
  /** Package height. */
  height?: InputMaybe<Scalars['Decimal']>;
  /** IDs of items packed in this handling unit. */
  itemIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Package length. */
  length?: InputMaybe<Scalars['Decimal']>;
  /** Package tracking number. */
  trackingNumber: Scalars['String'];
  /** Gross weight of the package. */
  weight: Scalars['Decimal'];
  /** Unit of weight measurement. */
  weightUnit: ZonosWeightUnitCode;
  /** Package width. */
  width?: InputMaybe<Scalars['Decimal']>;
};

/** Determines which countries a Hello country display rule applies to. */
export type ZonosHelloCountryDisplayBehavior =
  | 'ALL'
  | 'ONLY_SHIPPABLE';

/** A single country display rule (behavior + include/exclude list). */
export type ZonosHelloCountryDisplayConfig = {
  __typename?: 'HelloCountryDisplayConfig';
  /** Whether to apply to all countries or only shippable countries */
  behavior: ZonosHelloCountryDisplayBehavior;
  /** Countries to exclude */
  excludedCountries: Array<ZonosCountryCode>;
  /** Countries to include */
  includedCountries: Array<ZonosCountryCode>;
};

/** Input for a single country display rule. */
export type ZonosHelloCountryDisplayConfigInput = {
  /** Whether to apply to all countries or only shippable countries */
  behavior?: InputMaybe<ZonosHelloCountryDisplayBehavior>;
  /** Countries to exclude */
  excludedCountries?: InputMaybe<Array<ZonosCountryCode>>;
  /** Countries to include */
  includedCountries?: InputMaybe<Array<ZonosCountryCode>>;
};

/** Country-based display rules for the Hello widget. */
export type ZonosHelloCountryDisplayRules = {
  __typename?: 'HelloCountryDisplayRules';
  /** Which countries appear in the Hello widget's country selector dropdown */
  countrySelector: ZonosHelloCountryDisplayConfig;
  /** Which buyer countries the Hello widget renders for */
  widgetVisibility: ZonosHelloCountryDisplayConfig;
};

/** Input for country-based display rules of the Hello widget. */
export type ZonosHelloCountryDisplayRulesInput = {
  /** Which countries appear in the Hello widget's country selector dropdown */
  countrySelector?: InputMaybe<ZonosHelloCountryDisplayConfigInput>;
  /** Which buyer countries the Hello widget renders for */
  widgetVisibility?: InputMaybe<ZonosHelloCountryDisplayConfigInput>;
};

/** Determines how a buyer-selected country override is persisted across page loads in Hello. */
export type ZonosHelloCountryOverrideBehavior =
  /** The selected country is stored in the buyer's session */
  | 'SESSION'
  /** The selected country is carried across pages via a URL query parameter */
  | 'URL_PARAM';

/** Determines how Zonos Hello should handle currency conversion. */
export type ZonosHelloCurrencyBehavior =
  | 'DISABLED'
  | 'ENABLED';

/** Determines where Hello should display on desktop */
export type ZonosHelloDesktopLocation =
  | 'BOTTOM_LEFT'
  | 'BOTTOM_RIGHT'
  | 'TOP_LEFT'
  | 'TOP_RIGHT';

/** Determines how Zonos Hello should handle live duty/tax estimations. */
export type ZonosHelloEstimateBehavior =
  | 'DISABLED'
  | 'ENABLED';

/** Determines where Hello should display on mobile */
export type ZonosHelloMobileLocation =
  | 'BOTTOM_LEFT'
  | 'BOTTOM_RIGHT'
  | 'TOP_LEFT'
  | 'TOP_RIGHT';

/** Determines whether Hello should display peeks */
export type ZonosHelloPeekMessageBehavior =
  | 'DISABLED'
  | 'ENABLED';

/** Determines how Zonos Hello should handle restricted items. */
export type ZonosHelloRestrictionBehavior =
  | 'DISABLED'
  | 'RESTRICT_AND_BLOCK'
  | 'RESTRICT_AND_WARN';

/** Allows configuration of Zonos Hello. These settings can be overridden by the `zonos.init` function in the Zonos Elements SDK. */
export type ZonosHelloSettings = {
  __typename?: 'HelloSettings';
  /**
   * A list of domains to allow Hello to send frontend requests from. Hello will not function for domains not listed here.
   * @deprecated Use `allowedDomains` field on `OnlineStoreSetting` instead
   */
  allowedDomains: Array<Scalars['String']>;
  /** CSS selector for a DOM element for Hello to visually anchor to */
  anchorElementSelector: Scalars['String'];
  /** Regex pattern matching the URL of your site's cart page */
  cartUrlPattern: Maybe<Scalars['String']>;
  /** Country-based display rules for the Hello widget (which countries see the widget, and which appear in the country selector) */
  countryDisplayRules: ZonosHelloCountryDisplayRules;
  /** How the buyer's country override is propagated across page loads */
  countryOverrideBehavior: ZonosHelloCountryOverrideBehavior;
  /** When the HelloSettings was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the HelloSettings */
  createdBy: Scalars['ID'];
  /** How Hello should handle currency conversion */
  currencyBehavior: ZonosHelloCurrencyBehavior;
  /** CSS selector for your site's currency/money fields */
  currencyElementSelector: Scalars['String'];
  /** Where Hello should display on desktop */
  desktopLocation: ZonosHelloDesktopLocation;
  /** How Hello should handle on-the-fly duty/tax estimation */
  dutyTaxEstimationBehavior: ZonosHelloEstimateBehavior;
  /** Optional list of URL patterns to not display Hello on. Regex matching supported */
  excludedUrlPatterns: Array<Scalars['String']>;
  /** Regex pattern matching the URL of your site's homepage */
  homepageUrlPattern: Maybe<Scalars['String']>;
  /** A unique identifier for the HelloSettings */
  id: Scalars['ID'];
  /** Where Hello should display on mobile */
  mobileLocation: ZonosHelloMobileLocation;
  /** Whether this HelloSettings is in live or test mode */
  mode: ZonosMode;
  /** The organization this HelloSettings belongs to */
  organization: Scalars['ID'];
  /** Whether or not Hello should display peek messages in its collapsed view */
  peekMessageBehavior: ZonosHelloPeekMessageBehavior;
  /** If peek messages are enabled, how many seconds before they should appear after page load */
  peekMessageDelay: Scalars['Decimal'];
  /** Which element is used for the product add to cart buttons. Used to power the item restrictions feature */
  productAddToCartElementSelector: Maybe<Scalars['String']>;
  /** Which element is used for the product descriptions. Used to power the item restrictions feature */
  productDescriptionElementSelector: Maybe<Scalars['String']>;
  /** Regex pattern matching the URL of your site's product detail page */
  productDetailUrlPattern: Maybe<Scalars['String']>;
  /** Regex pattern matching the URL of your site's product list/category list pages */
  productListUrlPattern: Maybe<Scalars['String']>;
  /** Which element is used for the product prices. Used to power the item restrictions feature */
  productPriceElementSelector: Maybe<Scalars['String']>;
  /** Which element is used for the product name. Used to power the item restrictions feature */
  productTitleElementSelector: Maybe<Scalars['String']>;
  /** How Hello should handle item restrictions */
  restrictionBehavior: ZonosHelloRestrictionBehavior;
  /**
   * Deprecated. see visibilityStatus.
   * @deprecated Use `visibilityStatus` field on `HelloSettings` instead
   */
  status: Maybe<ZonosHelloStatus>;
  /** Determines billing status for Hello */
  subscriptionStatus: ZonosHelloSubscriptionStatus;
  /** When the HelloSettings was most recently updated */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the HelloSettings */
  updatedBy: Scalars['ID'];
  /** The current status of the HelloSettings */
  visibilityStatus: ZonosHelloVisibilityStatus;
  /** The size of the Hello widget in pixels */
  widgetSize: Maybe<Scalars['Decimal']>;
};

/** Deprecated: see HelloVisibilityStatus. */
export type ZonosHelloStatus =
  | 'DISABLED'
  | 'ENABLED';

/** Determines billing status for Hello */
export type ZonosHelloSubscriptionStatus =
  | 'ACTIVE'
  | 'INACTIVE';

/** Determines whether is enabled or not */
export type ZonosHelloVisibilityStatus =
  | 'DISABLED'
  | 'ENABLED';

export type ZonosHsCode = {
  __typename?: 'HsCode';
  /** The numerically formatted HS code. */
  code: Scalars['String'];
  /** The HS Code level, i.e. heading. */
  codeType: ZonosHsCodeType;
  /** The 2-digit ISO representation of a country. */
  countryCode: Maybe<ZonosCountryCode>;
  /** Combination of WCO and tariff schedule definitions. */
  description: ZonosHsCodeDescription;
  /** Date when an HS code becomes valid. */
  effectiveAt: Scalars['DateTime'];
  /** Date when an HS code is no longer valid. */
  expiresAt: Maybe<Scalars['DateTime']>;
  /** HS Code fragments */
  fragments: Array<ZonosHsCodeFragment>;
  /** The WCO version of the harmonized system, represented as a year. */
  majorVersion: ZonosWcoVersion;
  /** The country-specific version of the WCO core library. */
  minorVersion: Maybe<Scalars['String']>;
};

/** HS-code coherence risk aggregated across items. */
export type ZonosHsCodeCoherenceRisk = {
  __typename?: 'HsCodeCoherenceRisk';
  /** Maximum probability of HS-code miscoherence observed across items with a declared HS code. Null if no item had a declared HS code. */
  maxMiscoherenceProbability: Maybe<Scalars['Decimal']>;
  /** Worst HS-code coherence enum observed across items with a declared HS code, evaluated against the destination country. Null if no item had a declared HS code. */
  worstOutcome: Maybe<ZonosHsCodeValidation>;
};

export type ZonosHsCodeDescription = {
  __typename?: 'HsCodeDescription';
  /** A modified version of the description based on the official schedule but meant to be easily understood. */
  friendly: Maybe<Scalars['String']>;
  /** A description derived from parent descriptions. */
  full: Maybe<Scalars['String']>;
  /** A shortened description derived from parent descriptions. */
  fullTruncated: Maybe<Scalars['String']>;
  /** The description taken directly from the applicable schedule. */
  htsItem: Scalars['String'];
};

export type ZonosHsCodeFragment = {
  __typename?: 'HsCodeFragment';
  /** The numerically formatted HS code fragment. */
  code: Scalars['String'];
  /** The description of the Hs code level. */
  description: Scalars['String'];
  /** The HS Code level, i.e. heading. */
  type: ZonosHsCodeType;
};

export type ZonosHsCodeFragmentsFilter = {
  /** The country to filter by. */
  country?: InputMaybe<ZonosCountryCode>;
  /** The partial HS code to filter by. */
  partialCode: Scalars['String'];
};

export type ZonosHsCodeProvidedTreatment =
  /** Checks whether the hsCodeProvided exists and is in line with the description. If so, it will refine the classification, fixing all digits in hsCodeProvided. If not, it will classify from scratch */
  | 'CHECK_COHERENCE'
  /** Ignores the hsCodeProvided. */
  | 'IGNORE'
  /** Checks whether the hsCodeProvided exists. If so, it will refine the classification, fixing all digits in hsCodeProvided. If not, it will classify from scratch */
  | 'VALIDATE_ONLY';

export type ZonosHsCodeProvidedValidation = {
  __typename?: 'HsCodeProvidedValidation';
  /** The numerically formatted HS code fragment. */
  code: Scalars['String'];
  /** The description of the Hs code level. */
  result: ZonosHsCodeValidation;
  /** The HS Code level, i.e. heading. */
  type: ZonosHsCodeType;
};

export type ZonosHsCodeSource =
  /** HS code (all digits) sourced via the Zonos Classify API (includes Classify on the fly) */
  | 'CLASSIFY'
  /** Zonos fallback HS code, this is the default HS code used when no other HS code is available */
  | 'FALLBACK'
  /** HS code provided by the user or from a catalog was corrected or completed by Classify due to partial correctness or short length. */
  | 'HYBRID'
  /** HS code is user provided from Zonos Catalog, their own catalog, or directly by from the user & successfully validated by Classify */
  | 'USER_PROVIDED';

/** Determines the level of trust for HS code classifications provided by the organization. */
export type ZonosHsCodeTrustLevel =
  /** Complete deference to the provided HS code in all cases. Reserved for cases with a verified licensed broker involved */
  | 'CERTIFIED'
  /** Elevated trust for organizations with a track record of correct classifications. */
  | 'ELEVATED'
  /** Typical trust for most accounts. */
  | 'STANDARD'
  /** High trust for organizations with a substantial and proven track record of correct classifications. */
  | 'VERIFIED';

export type ZonosHsCodeType =
  | 'CHAPTER'
  | 'EXPORT'
  | 'HEADING'
  | 'SECTION'
  | 'SUBHEADING'
  | 'TARIFF';

export type ZonosHsCodeValidateInput = {
  /** The list of countries to validate the HS code against. */
  countries?: InputMaybe<Array<InputMaybe<ZonosCountryCode>>>;
  /** The HS code to validate. */
  hsCode: Scalars['String'];
};

/** HS-code validation outcome. Owned by ClassifyDgs. */
export type ZonosHsCodeValidation =
  /** HS code is valid and coherent. */
  | 'COHERENT'
  /** HS code is not currently valid. */
  | 'INVALID'
  /** HS code wasn't provided. */
  | 'NOT_APPLICABLE'
  /** HS code is valid but not coherent. */
  | 'NOT_COHERENT'
  /** HS code is valid but only somewhat coherent. */
  | 'SOMEWHAT_COHERENT'
  /** HS code is valid but not checked for coherence. */
  | 'VALID';

export type ZonosHsCodeValidationSummary = {
  __typename?: 'HsCodeValidationSummary';
  /** The 2-digit ISO representation of a country. */
  country: ZonosCountryCode;
  /** The Hs code provided by the user. */
  hsCode: ZonosHsCode;
  /** The validation for the provided hsCode. */
  hsCodeProvidedValidation: Array<ZonosHsCodeProvidedValidation>;
};

/** An item extracted from the image that wasn't declared in the manifest */
export type ZonosImageExtractedUnmatchedItem = {
  __typename?: 'ImageExtractedUnmatchedItem';
  /** The AI-extracted content from the image */
  extractedContent: ZonosExtractedItemContent;
  /** Unique identifier */
  id: Scalars['ID'];
};

export type ZonosInclusivePriceStatus =
  | 'ACTIVE'
  | 'INACTIVE';

/** International Commercial Terms */
export type ZonosIncotermCode =
  /** Cost, Insurance & Freight */
  | 'CIF'
  | 'CUSTOM'
  /** Delivered At Place */
  | 'DAP'
  /** Delivered Duty Paid */
  | 'DDP'
  /** Free On Board */
  | 'FOB';

export type ZonosInferenceStatus =
  | 'DISABLED'
  | 'ENABLED';

/** Tracks how integration data was captured. HEADER = From x-client-name/x-client-version headers (authoritative) URL_INFERRED = Inferred from organization_setting.url pattern (fallback) MANUAL = Manually entered via API */
export type ZonosIntegrationSource =
  | 'HEADER'
  | 'MANUAL'
  | 'URL_INFERRED';

export type ZonosIntegrationStatus =
  | 'ACTIVE'
  | 'ERROR'
  | 'INACTIVE';

export type ZonosIntendedAudience =
  | 'ADULT'
  | 'CHILD';

export type ZonosInvoiceCarrier =
  | 'DHL'
  | 'FEDEX'
  | 'UPS'
  | 'ZONOS';

/** Enum value representing all of languages that are supported for creating invoice PDFs */
export type ZonosInvoiceLanguageCode =
  /** Bulgarian */
  | 'BG'
  /** Czech */
  | 'CS'
  /** Danish */
  | 'DA'
  /** German */
  | 'DE'
  /** Greek */
  | 'EL'
  /** English */
  | 'EN'
  /** Spanish */
  | 'ES'
  /** Finnish */
  | 'FI'
  /** Filipino (Philipines) */
  | 'FIL'
  /** French (France) */
  | 'FR'
  /** French (Canada) */
  | 'FR_CA'
  /** Croatian */
  | 'HR'
  /** Hungarian */
  | 'HU'
  /** Indonesian */
  | 'ID'
  /** Italian */
  | 'IT'
  /** Japanese */
  | 'JA'
  /** Korean */
  | 'KO'
  /** Lithuanian */
  | 'LT'
  /** Latvian */
  | 'LV'
  /** Mongolian */
  | 'MN'
  /** Malay */
  | 'MS'
  /** Maltese */
  | 'MT'
  /** Dutch */
  | 'NL'
  /** Norwegian */
  | 'NO'
  /** Polish */
  | 'PL'
  /** Portuguese (Portugal) */
  | 'PT'
  /** Portuguese (Brazil) */
  | 'PT_BR'
  /** Romanian */
  | 'RO'
  /** Russian */
  | 'RU'
  /** Slovak */
  | 'SK'
  /** Slovenian */
  | 'SL'
  /** Swedish */
  | 'SV'
  /** Thai */
  | 'TH'
  /** Turkish */
  | 'TR'
  /** Vietnamese */
  | 'VI'
  /** Chinese Simplified (China) */
  | 'ZH'
  /** Chinese Traditional (Hong Kong) */
  | 'ZH_HK'
  /** Chinese Traditional (Taiwan) */
  | 'ZH_TW';

export type ZonosInvoicePartyType =
  | 'DESTINATION'
  | 'ORIGIN'
  | 'PAYEE'
  | 'PAYOR';

export type ZonosInvoiceProcessor =
  | 'STRIPE';

export type ZonosInvoiceProcessorDetail = {
  __typename?: 'InvoiceProcessorDetail';
  /** The URL of the processor hosted Invoice */
  hostedInvoiceUrl: Scalars['String'];
  /** The external processor invoice identifier */
  id: Scalars['String'];
  /** The external processor invoice reference number */
  referenceNumber: Scalars['String'];
};

/** Statuses that an `Invoice` can go through */
export type ZonosInvoiceStatus =
  | 'RECEIVED'
  | 'RECONCILED'
  | 'VOIDED';

/** Federated entity stubs and foreign enums redeclared for local use. Entities resolve at runtime via Apollo Router; enum values MUST match the owning service (do not drift). */
export type ZonosItem = {
  __typename?: 'Item';
  /** Advertised or marketing description of the `Item`, distinct from the customs or internal description. */
  advertisedDescription: Maybe<Scalars['String']>;
  /** `Item` price amount. */
  amount: Scalars['Decimal'];
  /** Details about the item amounts in different currencies */
  amountDetails: Array<ZonosItemAmountDetail>;
  /** `Item` price all inclusive amount if inclusive amount is enabled. */
  amountInclusive: Maybe<Scalars['Decimal']>;
  /** Free-form `Item` attributes. */
  attributes: Maybe<Array<Maybe<ZonosItemAttribute>>>;
  /** Link to an existing `CatalogItem` that contains more info about this `Item`. */
  catalogItem: Maybe<ZonosCatalogItem>;
  /** List of categories associated and describing the `Item` */
  categories: Maybe<Array<Scalars['String']>>;
  /** Classification of an `Item` if `ClassifyMissingHsCodesStatus` is ENABLED for an organization. */
  classification: Maybe<ZonosClassification>;
  /** Country where the `Item` originates. */
  countryOfOrigin: Maybe<ZonosCountryCode>;
  /** Indicates where the `CountryOfOrigin` was sourced from. */
  countryOfOriginSource: Maybe<ZonosItemValueSource>;
  /** When this `Item` was created. */
  createdAt: Scalars['DateTime'];
  /** The user that created this `Item`. */
  createdBy: Scalars['ID'];
  /** The currency this `Item` price amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** The description of the `Item` for customs. */
  customsDescription: Maybe<Scalars['String']>;
  customsSpecs: Array<ZonosCustomsSpec>;
  /** Human-readable `Item` description. */
  description: Maybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration: Maybe<ZonosDutyTaxFeeConfiguration>;
  /** Global Trade Item Number for the `Item`. */
  gtin: Maybe<Scalars['String']>;
  /** Item HS code. Owned by ItemDgs; pulled in via @requires for compliance lookup. */
  hsCode: Maybe<Scalars['String']>;
  /** Indicates where the HS code for this `Item` was acquired. */
  hsCodeSource: Maybe<ZonosItemValueSource>;
  /** `Item` ID, prefixed with `item_`. */
  id: Scalars['ID'];
  /** Optional URL to an image that represents this `Item`. */
  imageUrl: Maybe<Scalars['String']>;
  /** Determines whether or not an item can be physically shipped. */
  itemType: Maybe<ZonosItemType>;
  /** The manufacturer `Party` of this `Item`. */
  manufacturerParty: Maybe<ZonosParty>;
  /** Marketplace where this `Item` is sold. */
  marketplace: Maybe<ZonosItemMarketplace>;
  /** List of `Item` weights and dimensions. */
  measurements: Maybe<Array<Maybe<ZonosItemMeasurement>>>;
  /** User-accessible key/value metadata. */
  metadata: Maybe<Array<Maybe<ZonosItemMetadata>>>;
  /** Whether this `Item` was created in live or test mode. */
  mode: ZonosMode;
  /** Human readable item name. */
  name: Maybe<Scalars['String']>;
  /** The unique identifier associated with an organization. */
  organization: Scalars['ID'];
  /** The box in a kit this item is assigned to */
  packageOptionId: Maybe<Scalars['ID']>;
  /** Index identifying the specific package option instance within a kit (e.g. packageOptionId + instance index) */
  packageOptionIdIndex: Maybe<Scalars['String']>;
  /** The stacking configuration associated with this `Item` */
  packingConfiguration: Maybe<ZonosPackingConfiguration>;
  /** The packing options of the item */
  packingPreference: Maybe<ZonosPackingPreference>;
  /**
   * The product ID of the parent `Item` for multi-SKU situations.
   * @deprecated No longer supported
   */
  parentProductId: Maybe<Scalars['String']>;
  /** the composition of your product */
  productComposition: Maybe<Array<ZonosItemComposition>>;
  /** The `Item` product ID. */
  productId: Scalars['String'];
  /** URL where the product is listed for sale. */
  productListingUrl: Maybe<Scalars['String']>;
  /** Optional administrative area where this `Item` originates. Required by some countries. */
  provinceOfOrigin: Maybe<Scalars['String']>;
  /** Quantity of this specific `Item` being represented. */
  quantity: Scalars['Int'];
  /** when the item is restricted, this property will have some details as to why. */
  restriction: Maybe<ZonosRestrictedItem>;
  /** reverse amount details for this item */
  reverseAmountDetail: Maybe<Array<ZonosItemReverseAmountDetail>>;
  /** Security screening report number for this `Item`. */
  securityScreeningReportNumber: Maybe<Scalars['String']>;
  /** SKU of this Item. */
  sku: Maybe<Scalars['String']>;
  /** When this `Item` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** User who most recently updated this `Item`. */
  updatedBy: Scalars['ID'];
};

export type ZonosItemAmountDetail = {
  __typename?: 'ItemAmountDetail';
  amount: Scalars['Decimal'];
  amountUnrounded: Scalars['Decimal'];
  createdAt: Scalars['DateTime'];
  currencyCode: ZonosCurrencyCode;
  exchangeRateIds: Array<Scalars['ID']>;
  id: Scalars['ID'];
  targets: Maybe<Array<ZonosItemAmountTargetType>>;
  type: Scalars['String'];
};

export type ZonosItemAmountTargetType =
  | 'BILLING_COMPANY'
  | 'ITEM_PROVIDED'
  | 'MERCHANT_BASE'
  | 'MERCHANT_PROVIDED'
  | 'MERCHANT_SETTLED'
  | 'SHOPPER_PRESENTED'
  | 'ZONOS_BASE';

export type ZonosItemAttribute = {
  __typename?: 'ItemAttribute';
  key: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type ZonosItemAttributeInput = {
  /** Keys used in Zonos system. Approved keys are: category, color, customization, descriptionDetailed, fabricContent, ltlClass, pickingLocation, shipFromLocation, size, status */
  key?: InputMaybe<Scalars['String']>;
  /** The value of the attribute. */
  value?: InputMaybe<Scalars['String']>;
};

export type ZonosItemAttributes = {
  __typename?: 'ItemAttributes';
  /** Target audience for the product (ADULT or CHILD). */
  audience: Maybe<ZonosItemIntendedAudience>;
};

export type ZonosItemComposition = {
  __typename?: 'ItemComposition';
  /** Country where the metal was cast. */
  countryOfCast: Maybe<ZonosCountryCode>;
  /** Country where the metal was melted and poured. */
  countryOfMeltAndPour: Maybe<ZonosCountryCode>;
  material: Scalars['String'];
  percentage: Scalars['Decimal'];
  /** Primary country of smelting. */
  primaryCountryOfSmelt: Maybe<ZonosCountryCode>;
  /** Secondary country of smelting. */
  secondaryCountryOfSmelt: Maybe<ZonosCountryCode>;
  source: ZonosItemValueSource;
};

export type ZonosItemCompositionInput = {
  /** Country where the metal was cast. */
  countryOfCast?: InputMaybe<ZonosCountryCode>;
  /** Country where the metal was melted and poured. */
  countryOfMeltAndPour?: InputMaybe<ZonosCountryCode>;
  material: Scalars['String'];
  percentage: Scalars['Decimal'];
  /** Primary country of smelting. */
  primaryCountryOfSmelt?: InputMaybe<ZonosCountryCode>;
  /** Secondary country of smelting. */
  secondaryCountryOfSmelt?: InputMaybe<ZonosCountryCode>;
};

/** An auto-generated type for paginating through multiple `Items`. */
export type ZonosItemConnection = {
  __typename?: 'ItemConnection';
  /** A list of `Edges`. */
  edges: Maybe<Array<Maybe<ZonosItemEdge>>>;
  /** Pagination information about the connection. */
  pageInfo: Maybe<ZonosPageInfo>;
};

/** Input to create a new Item. */
export type ZonosItemCreateWorkflowInput = {
  /** Advertised or marketing description of the `Item`, distinct from the customs or internal description. */
  advertisedDescription?: InputMaybe<Scalars['String']>;
  /** `Item` unit price before multiplying by quantity. Example: if you have 2 items that cost $5 each, the amount is 5, not 10. If not provide the totalAmount is required. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** Free-form `Item` attributes. */
  attributes?: InputMaybe<Array<InputMaybe<ZonosItemAttributeInput>>>;
  /** List of categories associated and describing the `Item` */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** Country where the `Item` originates. */
  countryOfOrigin?: InputMaybe<ZonosCountryCode>;
  /** The currency this `Item` price amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** The catalog customs description override for the `Item`. */
  customsDescription?: InputMaybe<Scalars['String']>;
  /** Description of the `Item`. */
  description?: InputMaybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<ZonosDutyTaxFeeConfiguration>;
  /** Global Trade Item Number for the `Item`. */
  gtin?: InputMaybe<Scalars['String']>;
  /** HS code for this `Item`. */
  hsCode?: InputMaybe<Scalars['String']>;
  /** HS code source for this `Item`. */
  hsCodeSource?: InputMaybe<ZonosItemValueSource>;
  /** Optional URL to an image that represents this `Item`. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** Determines whether or not an item can be physically shipped. */
  itemType?: InputMaybe<ZonosItemType>;
  /** The manufacturer `Party` associated with this `Item`. */
  manufacturerParty?: InputMaybe<ZonosItemManufacturerPartyCreateInput>;
  /** Marketplace where this `Item` is sold. */
  marketplace?: InputMaybe<ZonosItemMarketplaceInput>;
  /** List of `Item` weights and dimensions. */
  measurements?: InputMaybe<Array<InputMaybe<ZonosItemMeasurementInput>>>;
  /** User-accessible key/value metadata. */
  metadata?: InputMaybe<Array<InputMaybe<ZonosItemMetadataInput>>>;
  /** Name of the `Item`. */
  name?: InputMaybe<Scalars['String']>;
  /** The stacking configuration associated with this `CatalogItem` */
  packingConfiguration?: InputMaybe<ZonosPackingConfigurationInput>;
  /** the composition of your product */
  productComposition?: InputMaybe<Array<ZonosItemCompositionInput>>;
  /** The `Item` product ID. */
  productId?: InputMaybe<Scalars['String']>;
  /** URL where the product is listed for sale. */
  productListingUrl?: InputMaybe<Scalars['String']>;
  /** Optional administrative area where this `Item` originates. Required by some countries. */
  provinceOfOrigin?: InputMaybe<Scalars['String']>;
  /** This value coordinates with the amount. Example: if you have 2 items that cost $5 each, then you would put a quantity of 2 and an amount of 5. amount: 5 quantity: 2 total = amount * quantity = 10 OR amount: 10 quantity: 1 total = amount * quantity = 10 */
  quantity: Scalars['Int'];
  /** The reverse amount details for this item. */
  reverseAmountDetail?: InputMaybe<ZonosItemReverseAmountDetailInput>;
  /** Security screening report number for this `Item`. */
  securityScreeningReportNumber?: InputMaybe<Scalars['String']>;
  /** SKU of the `Item`. */
  sku?: InputMaybe<Scalars['String']>;
  /** Optional: The line items total amount. If provided the `amount` will be computed from the totalAmount / quantity. */
  totalAmount?: InputMaybe<Scalars['Decimal']>;
};

/** An auto-generated type used in pagination. */
export type ZonosItemEdge = {
  __typename?: 'ItemEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Maybe<Scalars['String']>;
  /** The object located at this `Edge`. */
  node: Maybe<ZonosItem>;
};

export type ZonosItemExtractConfigurationInput = {
  /** Whether or not to classify the item */
  classify: ZonosInferenceStatus;
  /** Whether or not to estimate the value of the item */
  estimateValue: ZonosInferenceStatus;
  /** Whether or not to infer the country of origin of the item */
  inferCountryOfOrigin: ZonosInferenceStatus;
};

/** Input to create a new Item. */
export type ZonosItemInput = {
  /** `Item` price amount. */
  amount: Scalars['Decimal'];
  /** Free-form `Item` attributes. */
  attributes?: InputMaybe<Array<InputMaybe<ZonosItemAttributeInput>>>;
  /** List of categories associated and describing the `Item` */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** Country where the `Item` originates. */
  countryOfOrigin?: InputMaybe<ZonosCountryCode>;
  /** The currency this `Item` price amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** Description of the `Item`. */
  description?: InputMaybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<ZonosDutyTaxFeeConfiguration>;
  /** HS code for this `Item`. */
  hsCode?: InputMaybe<Scalars['String']>;
  /** HS code source for this `Item`. */
  hsCodeSource?: InputMaybe<ZonosItemValueSource>;
  /** Optional URL to an image that represents this `Item`. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** Determines whether or not an item can be physically shipped. */
  itemType?: InputMaybe<ZonosItemType>;
  /** List of `Item` weights and dimensions. */
  measurements?: InputMaybe<Array<InputMaybe<ZonosItemMeasurementInput>>>;
  /** User-accessible key/value metadata. */
  metadata?: InputMaybe<Array<InputMaybe<ZonosItemMetadataInput>>>;
  /** Name of the `Item`. */
  name?: InputMaybe<Scalars['String']>;
  /** The stacking configuration associated with this `Item` */
  packingConfiguration?: InputMaybe<ZonosPackingConfigurationInput>;
  /** the composition of your product */
  productComposition?: InputMaybe<Array<ZonosItemCompositionInput>>;
  /** The `Item` product ID. */
  productId?: InputMaybe<Scalars['String']>;
  /** Optional administrative area where this `Item` originates. Required by some countries. */
  provinceOfOrigin?: InputMaybe<Scalars['String']>;
  /** Quantity of this specific `Item` being represented. */
  quantity: Scalars['Int'];
  /** References any object that is joined with the item */
  referenceId?: InputMaybe<Scalars['ID']>;
  /** depricated: ID of the root with which this Item is associated. */
  rootId?: InputMaybe<Scalars['ID']>;
  /** SKU of the `Item`. */
  sku?: InputMaybe<Scalars['String']>;
};

export type ZonosItemIntendedAudience = {
  __typename?: 'ItemIntendedAudience';
  confidenceScore: Maybe<Scalars['Decimal']>;
  intendedAudience: Maybe<ZonosIntendedAudience>;
};

export type ZonosItemKeyPreference =
  | 'NONE'
  | 'PRODUCT_ID'
  | 'SKU';

/** Input to create a manufacturer `Party` for an `Item`. */
export type ZonosItemManufacturerPartyCreateInput = {
  /** The location of the manufacturer. */
  location?: InputMaybe<ZonosItemPartyLocationInput>;
  /** The person or company representing the manufacturer. */
  person?: InputMaybe<ZonosItemPartyPersonInput>;
};

export type ZonosItemMarketplace = {
  __typename?: 'ItemMarketplace';
  /** Name of the marketplace (e.g., AliExpress, Amazon). */
  name: Maybe<Scalars['String']>;
  /** URL of the marketplace. */
  url: Maybe<Scalars['String']>;
};

export type ZonosItemMarketplaceInput = {
  /** Name of the marketplace (e.g., AliExpress, Amazon). */
  name?: InputMaybe<Scalars['String']>;
  /** URL of the marketplace. */
  url?: InputMaybe<Scalars['String']>;
};

/** Represents `Item` weight, dimension, or other specific `Measurement`. */
export type ZonosItemMeasurement = {
  __typename?: 'ItemMeasurement';
  /** @deprecated No longer supported */
  alcoholByVolume: Maybe<Scalars['Int']>;
  /** Where the `Measurement` is sourced from. */
  source: ZonosItemValueSource;
  /** Indicates what type of `Measurement`, e.g. weight, specific dim unit. */
  type: ZonosItemMeasurementType;
  /** Indicates the `Measurement` units to be used. */
  unitOfMeasure: ZonosItemUnitOfMeasure;
  /** The `Measurement` value. */
  value: Scalars['Decimal'];
};

export type ZonosItemMeasurementInput = {
  /** Indicates what type of `Measurement`, e.g. weight, specific dim unit. */
  type: ZonosItemMeasurementType;
  /** Indicates the `Measurement` units to be used. */
  unitOfMeasure: ZonosItemUnitOfMeasure;
  /** The `Measurement` value. */
  value: Scalars['Decimal'];
};

export type ZonosItemMeasurementType =
  | 'ALCOHOL_BY_VOLUME'
  | 'HEIGHT'
  | 'LENGTH'
  | 'VOLUME'
  | 'WEIGHT'
  | 'WIDTH';

export type ZonosItemMeasurementsInput = {
  type: ZonosItemMeasurementType;
  unit: ZonosItemUnitOfMeasure;
  value: Scalars['Decimal'];
};

export type ZonosItemMetadata = {
  __typename?: 'ItemMetadata';
  key: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

export type ZonosItemMetadataInput = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** Location fields for a `Party`. */
export type ZonosItemPartyLocationInput = {
  /** The name of the administrative area (e.g., state, province, region) where the location resides. */
  administrativeArea?: InputMaybe<Scalars['String']>;
  /** The code representing the administrative area (e.g., a state or province code). */
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  /** The ISO 3166-1 alpha-2 code of the country where the location is situated. */
  countryCode: ZonosCountryCode;
  /** The latitude of the location in decimal degrees. */
  latitude?: InputMaybe<Scalars['Decimal']>;
  /** The first line of the location's address. */
  line1?: InputMaybe<Scalars['String']>;
  /** The second line of the location's address, if applicable. */
  line2?: InputMaybe<Scalars['String']>;
  /** The third line of the location's address, if applicable. */
  line3?: InputMaybe<Scalars['String']>;
  /** The fourth line of the location's address, if applicable. */
  line4?: InputMaybe<Scalars['String']>;
  /** The locality of the location (e.g., city, town, village). */
  locality?: InputMaybe<Scalars['String']>;
  /** The longitude of the location in decimal degrees. */
  longitude?: InputMaybe<Scalars['Decimal']>;
  /** Additional metadata associated with the location. */
  metadata?: InputMaybe<Array<InputMaybe<ZonosItemPartyMetadataInput>>>;
  /** The Plus Code (Open Location Code) for the location. */
  plusCode?: InputMaybe<Scalars['String']>;
  /** The postal or ZIP code of the location. */
  postalCode?: InputMaybe<Scalars['String']>;
};

/** Key/value metadata for a `Party`, `Location`, or `Person`. */
export type ZonosItemPartyMetadataInput = {
  /** Metadata key. */
  key: Scalars['String'];
  /** Metadata value. */
  value?: InputMaybe<Scalars['String']>;
};

/** Person or company fields for a `Party`. */
export type ZonosItemPartyPersonInput = {
  /** The company name associated with the person. */
  companyName?: InputMaybe<Scalars['String']>;
  /** The customs-assigned number for the person. */
  customsAssignedNumber?: InputMaybe<Scalars['String']>;
  /** The email address of the person. */
  email?: InputMaybe<Scalars['String']>;
  /** The first name of the person. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The last name of the person. */
  lastName?: InputMaybe<Scalars['String']>;
  /** Additional metadata associated with the person. */
  metadata?: InputMaybe<Array<InputMaybe<ZonosItemPartyMetadataInput>>>;
  /** The phone number of the person. */
  phone?: InputMaybe<Scalars['String']>;
};

export type ZonosItemRestriction = {
  __typename?: 'ItemRestriction';
  /** list of country codes controls apply to */
  applicableCountries: Maybe<Array<Maybe<ZonosCountryCode>>>;
  /** Human readable summary of the goods. */
  appliesTo: Maybe<Scalars['String']>;
  /** The carrier the item restriction applies to */
  carrier: Maybe<ZonosItemRestrictionCarrier>;
  /** Countries that implemented the control */
  controlCountries: Maybe<Array<Maybe<ZonosCountryCode>>>;
  /** Human readable summary of the control. */
  controlSummary: Maybe<Scalars['String']>;
  /** Denotes if the control is EXPORT or IMPORT */
  controlType: ZonosControlType;
  /** When this `Restriction` was created */
  createdAt: Scalars['DateTime'];
  /** When this `Restriction stops applying. */
  endsAt: Maybe<Scalars['DateTime']>;
  /**
   * Human readable summary of the goods.
   * @deprecated Use `appliesTo` instead.
   */
  goodsSummary: Maybe<Scalars['String']>;
  /** HS code for this item. */
  hsCode: Scalars['String'];
  /** Item Restriction ID, prefixed with `item_restriction_`. */
  id: Scalars['ID'];
  /** Human readable description of the Restriction. */
  note: Scalars['String'];
  /** The source of the restriction. */
  sources: Maybe<Array<Maybe<Scalars['String']>>>;
  /** When the restriction takes effect. */
  startsAt: Maybe<Scalars['DateTime']>;
  /** The category of restriction that applies to the item being sent. These will be categorized as OBSERVATION, PROHIBITION, or RESTRICTION. */
  type: ZonosItemRestrictionType;
};

/** Denotes if the user should continue to review the results further or not. Will be displayed as NO_MATCH or REVIEW. */
export type ZonosItemRestrictionAction =
  | 'NO_MATCH'
  | 'OBSERVATIONS_APPLY'
  | 'PROHIBITIONS_APPLY'
  | 'RESTRICTIONS_APPLY';

export type ZonosItemRestrictionApplyInput = {
  /** The carrier to check for restrictions. */
  carrier?: InputMaybe<ZonosItemRestrictionCarrier>;
  /** The items needing to be checked for restrictions. */
  items: Array<ZonosItemRestrictionInput>;
  /** Minimum restriction level to match on severity of restriction you want to match on, restriction level in descending order is: PROHIBITION, RESTRICTION, OBSERVATION. */
  restrictionTypeThreshold?: InputMaybe<ZonosItemRestrictionType>;
  /** Origin country. */
  shipFromCountry: ZonosCountryCode;
  /** Destination country. */
  shipToCountry: ZonosCountryCode;
};

export type ZonosItemRestrictionBulkJob = {
  __typename?: 'ItemRestrictionBulkJob';
  /** When this `Bulk Classification` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Bulk Classification. */
  createdBy: Scalars['ID'];
  /** Unsuccessful rows and their error messages */
  errorMessages: Array<ZonosItemRestrictionBulkJobErrorMessage>;
  /** The ID of the BulkJob */
  id: Scalars['ID'];
  /** The pre-signed url provided by AWS */
  importUrl: Maybe<Scalars['String']>;
  /** The total number of rows in a CSV upload multiplied by the number of countries in the request */
  totalCount: Scalars['Int'];
};

export type ZonosItemRestrictionBulkJobConnection = {
  __typename?: 'ItemRestrictionBulkJobConnection';
  edges: Maybe<Array<Maybe<ZonosItemRestrictionBulkJobEdge>>>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ZonosItemRestrictionBulkJobEdge = {
  __typename?: 'ItemRestrictionBulkJobEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosItemRestrictionBulkJob>;
};

export type ZonosItemRestrictionBulkJobErrorMessage = {
  __typename?: 'ItemRestrictionBulkJobErrorMessage';
  lineNumber: Scalars['Int'];
  message: Scalars['String'];
};

export type ZonosItemRestrictionCarrier =
  | 'AUSTRALIA_POST'
  | 'DHL'
  | 'FEDEX'
  | 'OTHER'
  | 'UPS';

export type ZonosItemRestrictionConnection = {
  __typename?: 'ItemRestrictionConnection';
  edges: Maybe<Array<Maybe<ZonosItemRestrictionEdge>>>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ZonosItemRestrictionCreateInput = {
  /** list of country codes controls apply to */
  applicableCountries?: InputMaybe<Array<InputMaybe<ZonosCountryCode>>>;
  /** Human readable summary of the goods. */
  appliesTo?: InputMaybe<Scalars['String']>;
  /** The carrier the item restriction applies to */
  carrier?: InputMaybe<ZonosItemRestrictionCarrier>;
  /** Countries that implemented the control */
  controlCountries?: InputMaybe<Array<InputMaybe<ZonosCountryCode>>>;
  /** Human readable summary of the control. */
  controlSummary?: InputMaybe<Scalars['String']>;
  /** Denotes if the control is EXPORT or IMPORT */
  controlType: ZonosControlType;
  /** When this `Restriction stops applying. */
  endsAt?: InputMaybe<Scalars['DateTime']>;
  /** list of excluded country codes controls don't apply to */
  excludedCountries?: InputMaybe<Array<InputMaybe<ZonosCountryCode>>>;
  /** HS code for this item. */
  hsCode: Scalars['String'];
  /** Human readable description of the Restriction. */
  note: Scalars['String'];
  /** The source of the restriction. */
  sources?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** When the restriction takes effect. */
  startsAt?: InputMaybe<Scalars['DateTime']>;
  /** The category of restriction that applies to the item being sent. These will be categorized as OBSERVATION, PROHIBITION, or RESTRICTION. */
  type: ZonosItemRestrictionType;
};

export type ZonosItemRestrictionEdge = {
  __typename?: 'ItemRestrictionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosItemRestriction>;
};

export type ZonosItemRestrictionInput = {
  /** Country in which the item originates. */
  countryOfOrigin: ZonosCountryCode;
  /** Human readable item description */
  description?: InputMaybe<Scalars['String']>;
  /** HS code for this item. */
  hsCode?: InputMaybe<Scalars['String']>;
  /** External id for consumers mapping if desired */
  itemId?: InputMaybe<Scalars['String']>;
};

/** The resulting of applying the restriction to a list of items. */
export type ZonosItemRestrictionResult = {
  __typename?: 'ItemRestrictionResult';
  /** When this RestrictionResult was created */
  createdAt: Scalars['DateTime'];
  /** The user that created this RestrictionResult */
  createdBy: Scalars['ID'];
  /** RestrictionResult ID, prefixed with `restriction_result_` */
  id: Scalars['ID'];
  items: Array<Maybe<ZonosAppliedItemRestrictions>>;
  /** Denotes if this is LIVE or TEST */
  mode: ZonosMode;
  /** Minimum restriction level to match on severity of restriction you want to match on, restriction level in descending order is: PROHIBITION, RESTRICTION, OBSERVATION. */
  restrictionTypeThreshold: ZonosItemRestrictionType;
  /** Origin country. */
  shipFromCountry: ZonosCountryCode;
  /** Destination country. */
  shipToCountry: ZonosCountryCode;
};

/** ItemRestrictionResult Connection */
export type ZonosItemRestrictionResultConnection = {
  __typename?: 'ItemRestrictionResultConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<ZonosItemRestrictionResultEdge>>>;
  /** Field pageInfo */
  pageInfo: ZonosPageInfo;
};

/** ItemRestrictionResult Edge */
export type ZonosItemRestrictionResultEdge = {
  __typename?: 'ItemRestrictionResultEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<ZonosItemRestrictionResult>;
};

export type ZonosItemRestrictionResultsDeleteInput = {
  /** List of ids of `ItemRestrictionResults` to delete */
  ids?: InputMaybe<Array<Scalars['ID']>>;
};

export type ZonosItemRestrictionType =
  | 'OBSERVATION'
  | 'PROHIBITION'
  | 'RESTRICTION';

export type ZonosItemRestrictionUpdateInput = {
  /** list of country codes controls apply to */
  applicableCountries?: InputMaybe<Array<InputMaybe<ZonosCountryCode>>>;
  /** Human readable summary of the goods. */
  appliesTo?: InputMaybe<Scalars['String']>;
  /** The carrier the item restriction applies to */
  carrier?: InputMaybe<ZonosItemRestrictionCarrier>;
  /** Countries that implemented the control */
  controlCountries?: InputMaybe<Array<InputMaybe<ZonosCountryCode>>>;
  /** Human readable summary of the control. */
  controlSummary?: InputMaybe<Scalars['String']>;
  /** Denotes if the control is EXPORT or IMPORT */
  controlType?: InputMaybe<ZonosControlType>;
  /** When this `Restriction stops applying. */
  endsAt?: InputMaybe<Scalars['DateTime']>;
  /** list of excluded country codes controls don't apply to */
  excludedCountries?: InputMaybe<Array<InputMaybe<ZonosCountryCode>>>;
  /** The id of the item restriction to update */
  id: Scalars['ID'];
  /** Human readable description of the Restriction. */
  note?: InputMaybe<Scalars['String']>;
  /** The source of the restriction. */
  sources?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  /** When the restriction takes effect. */
  startsAt?: InputMaybe<Scalars['DateTime']>;
  /** The category of restriction that applies to the item being sent. These will be categorized as OBSERVATION, PROHIBITION, or RESTRICTION. */
  type?: InputMaybe<ZonosItemRestrictionType>;
};

export type ZonosItemReverseAmountDetail = {
  __typename?: 'ItemReverseAmountDetail';
  /** The `ReverseAmount` amount. */
  amount: Scalars['Decimal'];
  /** The duty rate applied to the amount. */
  dutyRate: Maybe<Scalars['Decimal']>;
  /** The `CountryCode` of where the dutyRate was applied. Defaults to the destination country. */
  dutyRateCountry: Maybe<ZonosCountryCode>;
  /** The amount of the fee applied to the amount. */
  feeAmount: Maybe<Scalars['Decimal']>;
  /** The InclusivePriceConfiguration ID applied to the item */
  inclusivePriceConfigurationId: Maybe<Scalars['ID']>;
  /** The original amount proved to reverse amount. */
  originalAmount: Scalars['Decimal'];
  /** Required when requesting a type with `FEE` in the name. */
  serviceLevelCode: Maybe<Scalars['String']>;
  /** The `ReverseAmount` status. */
  status: ZonosItemReverseAmountStatus;
  /** The tax rate applied to the amount. */
  taxRate: Maybe<Scalars['Decimal']>;
  /** The `CountryCode` of where the taxRate was applied. Defaults to the destination country. */
  taxRateCountry: Maybe<ZonosCountryCode>;
  /** The type of `ReverseAmount` to calculate. */
  type: ZonosItemReverseAmountType;
};

export type ZonosItemReverseAmountDetailInput = {
  /** The `CountryCode` of where the dutyRate was applied. Defaults to the destination country. */
  dutyRateCountry?: InputMaybe<ZonosCountryCode>;
  /** The ID of the inclusive price configuration used to apply the inclusive price effective rate. */
  inclusivePriceConfigurationId?: InputMaybe<Scalars['ID']>;
  /** Required when requesting a type with `FEE` in the name. */
  serviceLevelCodes?: InputMaybe<Array<Scalars['String']>>;
  /** The `CountryCode` of where the taxRate was applied. Defaults to the destination country. */
  taxRateCountry?: InputMaybe<ZonosCountryCode>;
  /** The type of `ReverseAmount` to calculate. */
  type: ZonosItemReverseAmountType;
};

export type ZonosItemReverseAmountStatus =
  /** The `ReverseAmount` has been applied. */
  | 'APPLIED'
  /** The `ReverseAmount` has not been applied because the value or adjusted value resulted in a negative value. */
  | 'NOT_APPLIED_NEGATIVE_VALUE'
  /** The `ReverseAmount` has not been applied because the value or adjusted value is below the de minimis threshold. */
  | 'NOT_APPLIED_UNDER_DE_MINIMIS';

export type ZonosItemReverseAmountType =
  | 'DUTY'
  | 'DUTY_FEE'
  | 'DUTY_TAX'
  | 'DUTY_TAX_FEE'
  | 'NONE'
  | 'TAX'
  | 'TAX_FEE';

export type ZonosItemType =
  /** The item is a bundle of other items */
  | 'BUNDLE'
  /** The item is a digital good */
  | 'DIGITAL_GOOD'
  /** A part of an item */
  | 'PARTIAL_ITEM'
  /** The item is a physical good */
  | 'PHYSICAL_GOOD'
  /** The item is a service */
  | 'SERVICE'
  /** The item is a subscription */
  | 'SUBSCRIPTION';

export type ZonosItemUnitOfMeasure =
  | 'CENTIMETER'
  | 'FOOT'
  | 'GRAM'
  | 'INCH'
  | 'KILOGRAM'
  | 'LITER'
  | 'METER'
  | 'MILLILITER'
  | 'MILLIMETER'
  | 'OUNCE'
  | 'PERCENTAGE'
  | 'POUND'
  | 'YARD';

export type ZonosItemUpdateInput = {
  /** `Item` price amount. @deprecated */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** Free-form `Item` attributes. @deprecated */
  attributes?: InputMaybe<Array<InputMaybe<ZonosItemAttributeInput>>>;
  /** List of categories associated and describing the `Item` */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** Country where the `Item` originates. @deprecated */
  countryOfOrigin?: InputMaybe<ZonosCountryCode>;
  /** The currency this `Item` price amount is in. @deprecated */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** Human-readable `Item` description. @deprecated */
  description?: InputMaybe<Scalars['String']>;
  /** Allows user to remove items from duties, taxes, or fee calculations */
  dutyTaxFeeConfiguration?: InputMaybe<ZonosDutyTaxFeeConfiguration>;
  /** HS code for this `Item`. @deprecated */
  hsCode?: InputMaybe<Scalars['String']>;
  /** HS code source for this `Item`. */
  hsCodeSource?: InputMaybe<ZonosItemValueSource>;
  /** ID of `Item` to update. */
  id?: InputMaybe<Scalars['ID']>;
  /** Optional URL to an image that represents this `Item`. @deprecated */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** Data to update in `Item`. */
  item?: InputMaybe<ZonosItemInput>;
  /** Determines whether or not an item can be physically shipped. */
  itemType?: InputMaybe<ZonosItemType>;
  /** List of `Item` weights and dimensions. @deprecated */
  measurements?: InputMaybe<Array<InputMaybe<ZonosItemMeasurementInput>>>;
  /** User-accessible key/value metadata. @deprecated */
  metadata?: InputMaybe<Array<InputMaybe<ZonosItemMetadataInput>>>;
  /** Name of the `Item`. @deprecated */
  name?: InputMaybe<Scalars['String']>;
  /** The product ID of the parent `Item` for multi-SKU situations. @deprecated */
  parentProductId?: InputMaybe<Scalars['String']>;
  /** the composition of your product */
  productComposition?: InputMaybe<Array<ZonosItemCompositionInput>>;
  /** The `Item` product ID. @deprecated */
  productId?: InputMaybe<Scalars['String']>;
  /** Optional administrative area where this `Item` originates. Required by some countries. @deprecated */
  provinceOfOrigin?: InputMaybe<Scalars['String']>;
  /** Quantity of this specific `Item` being represented. @deprecated */
  quantity?: InputMaybe<Scalars['Int']>;
  /** ID of the root with which this Item is associated. @deprecated */
  rootId?: InputMaybe<Scalars['ID']>;
  /** SKU of this Item. @deprecated */
  sku?: InputMaybe<Scalars['String']>;
};

export type ZonosItemValidateInput = {
  /** List of categories associated and describing the item */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** Declared country of origin - if provided, triggers COO validation */
  declaredCountryOfOrigin?: InputMaybe<ZonosCountryCode>;
  /** Declared HS code - if provided, triggers HS code coherence validation */
  declaredHsCode?: InputMaybe<Scalars['String']>;
  /** Declared value - if provided, triggers value validation */
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  /** Product description */
  description: Scalars['String'];
  /** Material composition */
  materials?: InputMaybe<Scalars['String']>;
  /** Product name */
  name: Scalars['String'];
  /** Quantity of items */
  quantity: Scalars['Int'];
};

export type ZonosItemValueSource =
  | 'API_REQUEST'
  | 'CATALOG'
  | 'CLASSIFY'
  | 'CLASSIFY_ON_THE_FLY'
  | 'FALLBACK'
  | 'HYBRID'
  | 'ORGANIZATION_SETTING'
  | 'TARIFF_COMPLETED'
  | 'USER_PROVIDED';

export type ZonosItemsExtractInput = {
  /** The configuration of the request */
  configuration: ZonosItemExtractConfigurationInput;
  /** The currency of the desired value estimation */
  currency: ZonosCurrencyCode;
  /** Base64 encoded image. Max: 20 MB, 6 MP, 3072px per side. Min: 1 KB, 100px per side. Formats: JPEG, PNG, WebP, HEIC, HEIF. */
  imageBase64: Scalars['String'];
  /** English is always returned. Provide a language code to include a second language in the response. */
  localizedLanguageCode?: InputMaybe<ZonosLanguageCode>;
  /** The country to which this will be shipped */
  shipToCountry?: InputMaybe<ZonosCountryCode>;
};

export type ZonosItemsUpdateInput = {
  items: Array<ZonosItemUpdateInput>;
};

export type ZonosItemsValidateInput = {
  /** The currency for value validation */
  currency: ZonosCurrencyCode;
  /** Base64 encoded image for AI extraction and matching against provided items */
  imageBase64: Scalars['String'];
  /** The items to validate */
  items: Array<ZonosItemValidateInput>;
  /** Language code for localized content in AI extraction */
  localizedLanguageCode?: InputMaybe<ZonosLanguageCode>;
  /** The country from which items will be shipped. Used for country of origin validation. */
  shipFromCountry?: InputMaybe<ZonosCountryCode>;
  /** The country to which items will be shipped. If not provided, HS code validation will only validate the first 6 digits (subheading level). */
  shipToCountry?: InputMaybe<ZonosCountryCode>;
};

/** Response from itemsValidate mutation with explicit matching results */
export type ZonosItemsValidateResponse = {
  __typename?: 'ItemsValidateResponse';
  /** Items that were declared but not found in the image */
  declaredUnmatchedItems: Array<ZonosDeclaredUnmatchedItem>;
  /** Items extracted from the image that weren't declared in the manifest */
  imageExtractedUnmatchedItems: Array<ZonosImageExtractedUnmatchedItem>;
  /** Pre-signed URL to the validated image (valid for 15 minutes) */
  imageUrl: Maybe<Scalars['String']>;
  /** Items that were declared and successfully matched to an image extraction */
  matchedItems: Array<ZonosMatchedValidatedItem>;
  /** Summary statistics of the validation matching */
  summary: ZonosItemsValidateSummary;
};

/** Summary statistics of the itemsValidate matching process */
export type ZonosItemsValidateSummary = {
  __typename?: 'ItemsValidateSummary';
  /** Number of declared items not found in the image */
  declaredUnmatchedCount: Scalars['Int'];
  /** Number of extracted items not declared in the manifest */
  extractedUnmatchedCount: Scalars['Int'];
  /** Number of items successfully matched */
  matchedCount: Scalars['Int'];
  /** Total items declared in the input */
  totalDeclared: Scalars['Int'];
  /** Total items extracted from the image */
  totalExtracted: Scalars['Int'];
};

export type ZonosKeyValueFilterInput = {
  /** The key of the attribute. */
  key?: InputMaybe<Scalars['String']>;
  /** The value of the attribute. */
  value?: InputMaybe<Scalars['String']>;
};

export type ZonosLabel = {
  __typename?: 'Label';
  /** The carrier that the label was created for */
  carrier: ZonosCarrier;
  /** The date and time this Label was created */
  createdAt: Scalars['DateTime'];
  /** The user who created this Label */
  createdBy: Scalars['ID'];
  /** The way in which the documents were filed for the label */
  documentFiling: ZonosDocumentFilingType;
  /** A unique identifier for the label */
  id: Scalars['ID'];
  /** A list of amounts associated with the label */
  labelAmounts: Maybe<Array<ZonosLabelAmount>>;
  /** Indicates the desired type of file for the label */
  labelFileType: ZonosLabelFileType;
  /** Base64 encoded image of the label created by the carrier */
  labelImage: Scalars['String'];
  /** Indicates the desired size of the label */
  labelSize: ZonosLabelSize;
  /** The label request sent to the carrier */
  requestLog: Maybe<ZonosLabelRequestLog>;
  /** The carton that the label was created for */
  shipmentCarton: Scalars['ID'];
  /** The current status of the label */
  status: ZonosLabelStatusType;
  /** A list of changes to the status of the label */
  statusTransitions: Array<ZonosLabelStatusTransition>;
  /** The tracking number associated with the label */
  trackingNumber: Scalars['String'];
  /** The url where the label is stored */
  url: Scalars['String'];
};

/** ============================================================================= ALCOHOL DETAILS ============================================================================= */
export type ZonosLabelAlcoholDetailInput = {
  /** Type of alcohol recipient */
  recipientType: ZonosLabelAlcoholRecipientType;
};

export type ZonosLabelAlcoholRecipientType =
  /** Consumer (where legal for direct-to-consumer shipping) */
  | 'CONSUMER'
  /** Licensed alcohol retailer/distributor */
  | 'LICENSEE';

export type ZonosLabelAmount = {
  __typename?: 'LabelAmount';
  /** The value of the amount */
  amount: Scalars['Decimal'];
  /** The type of amount */
  amountType: ZonosLabelAmountType;
  /** The currency that the amount is in */
  currencyCode: ZonosCurrencyCode;
};

export type ZonosLabelAmountType =
  /** Discount on shipping costs */
  | 'DISCOUNT'
  /** Added fee to the cost of the label */
  | 'FEE'
  /** Insurance value on the label */
  | 'INSURANCE'
  /** The postage quote received from the Carrier */
  | 'QUOTE';

/** ============================================================================= BATTERY DETAILS ============================================================================= */
export type ZonosLabelBatteryDetailInput = {
  /** Indicates what material the battery is made of. */
  material: ZonosLabelBatteryMaterialType;
  /** Indicates how the battery is arranged in the package. */
  packingType: ZonosLabelBatteryPackingType;
  /** Regulatory classification for the battery */
  regulatorySubType?: InputMaybe<ZonosLabelBatteryRegulatorySubType>;
};

export type ZonosLabelBatteryMaterialType =
  | 'LITHIUM_ION'
  | 'LITHIUM_METAL';

export type ZonosLabelBatteryPackingType =
  /** Battery is contained inside an item in the package */
  | 'BATTERY_INSIDE_EQUIPMENT'
  /** The package only contains a battery/batteries. */
  | 'BATTERY_ONLY'
  /** Battery is packaged with the equipment and not contained in the item */
  | 'BATTERY_PACKAGED_WITH_EQUIPMENT';

export type ZonosLabelBatteryRegulatorySubType =
  /** IATA Section I - fully regulated */
  | 'IATA_SECTION_I'
  /** IATA Section II - partially regulated */
  | 'IATA_SECTION_II';

/** ============================================================================= CUSTOMS BROKER DETAILS ============================================================================= */
export type ZonosLabelBrokerInput = {
  /** Broker account number with carrier */
  accountNumber?: InputMaybe<Scalars['String']>;
  /** Broker address */
  address: ZonosLabelLocationInput;
  /** Broker contact information */
  contact: ZonosLabelContactInput;
  /** Broker tax identification */
  taxInfo?: InputMaybe<ZonosLabelContactTaxInfoInput>;
  /** Type of broker (import or export) */
  type: ZonosLabelBrokerType;
};

export type ZonosLabelBrokerType =
  /** Export broker */
  | 'EXPORT'
  /** Import broker */
  | 'IMPORT';

export type ZonosLabelCarrierCode =
  | 'APC'
  | 'CANADA_POST'
  | 'DHL'
  | 'DIRECT_LINK'
  | 'EHUB'
  | 'ENVIA'
  | 'FEDEX'
  | 'FEDEXXB'
  | 'JAPAN_POST'
  | 'UPS'
  | 'USPS';

export type ZonosLabelCodCollectionType =
  /** Any payment type accepted */
  | 'ANY'
  /** Cash only */
  | 'CASH'
  /** Company check accepted */
  | 'COMPANY_CHECK'
  /** Guaranteed funds only (cashier's check, money order) */
  | 'GUARANTEED_FUNDS'
  /** Personal check accepted */
  | 'PERSONAL_CHECK';

/** ============================================================================= COD (COLLECT ON DELIVERY) DETAILS ============================================================================= */
export type ZonosLabelCodDetailInput = {
  /** Amount to collect on delivery */
  amount: Scalars['Decimal'];
  /** Type of COD collection */
  collectionType: ZonosLabelCodCollectionType;
  /** Currency of the amount */
  currencyCode: ZonosCurrencyCode;
  /** Recipient of COD payment */
  recipient?: InputMaybe<ZonosLabelContactInput>;
};

export type ZonosLabelConnection = {
  __typename?: 'LabelConnection';
  /** A list of `LabelEdge` objects */
  edges: Array<ZonosLabelEdge>;
  /** Pagination info about the connection object */
  pageInfo: Maybe<ZonosPageInfo>;
  /** The total number of `Label` objects in the connection */
  totalCount: Scalars['Int'];
};

export type ZonosLabelContactInput = {
  /** Company name of the contact */
  companyName?: InputMaybe<Scalars['String']>;
  /** E-mail address of the contact */
  email?: InputMaybe<Scalars['String']>;
  /** First name of the contact */
  firstName: Scalars['String'];
  /** Last name of the contact */
  lastName: Scalars['String'];
  /** Phone number of the contact */
  phone?: InputMaybe<Scalars['String']>;
  /** All tax IDs for this party (e.g. CPF + CNPJ for Brazil, EORI + IOSS for EU). */
  taxInfoList?: InputMaybe<Array<ZonosLabelContactTaxInfoInput>>;
};

export type ZonosLabelContactTaxInfoInput = {
  /** The address' two-letter country ISO code. */
  countryCode: ZonosCountryCode;
  /** The tax ID number */
  taxIdNumber: Scalars['String'];
  /** The type of tax ID i.e. CNP, EIN */
  taxIdType: ZonosLabelTaxIdType;
};

export type ZonosLabelControlledExportType =
  | 'DEA_036'
  | 'DEA_236'
  | 'DEA_486'
  | 'DSP_05'
  | 'DSP_61'
  | 'DSP_73'
  | 'DSP_85'
  | 'DSP_94'
  | 'DSP_LICENSE_AGREEMENT'
  | 'FROM_FOREIGN_TRADE_ZONE'
  | 'ITAR_EXEMPTION'
  | 'LOW_VALUE'
  | 'WAREHOUSE_WITHDRAWAL';

export type ZonosLabelCreateDetailInput = {
  /** Optional carrier account number for the label. For Japan Post, this is the merchant's hyphen-formatted deferred-payment customer number (`NNNNNNNNNN-NNNNNN-NNNNNNNNNN-NNNNNN`), which the service splits into the four `laterPayNumber*` API slots on the Code 52 request. When omitted, the label is created without deferred-payment parameters. Format is carrier-specific. */
  accountNumber?: InputMaybe<Scalars['String']>;
  /** Customs broker information for international shipments */
  brokers?: InputMaybe<Array<ZonosLabelBrokerInput>>;
  /** Carrier being used to create the label i.e. FEDEX, UPS, USPS, APC, DIRECT_LINK */
  carrier: ZonosLabelCarrierCode;
  /** Certificate number for customs */
  certificateNumber?: InputMaybe<Scalars['String']>;
  /** Optional contents type of the shipment. If not provided, the landed cost endUse will be used. */
  contentsType?: InputMaybe<Scalars['String']>;
  /** Optional customer reference to apply on the label and CI */
  customerReference?: InputMaybe<Scalars['String']>;
  /** Customs option for international shipments. */
  customsOption?: InputMaybe<ZonosLabelCustomsOptionInput>;
  /** Customs or invoice remarks */
  customsRemarks?: InputMaybe<Scalars['String']>;
  /** ID of the `Declaration` to use to clear the shipment into the US. Not required for non-US destinations. */
  declarationId?: InputMaybe<Scalars['ID']>;
  /** The declared value (insurance) of the shipment */
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  /** Electronic Trade Documents configuration for paperless international shipping */
  etdDetail?: InputMaybe<ZonosLabelEtdDetailInput>;
  /** Freight shipment details for FedEx Freight services */
  freightDetail?: InputMaybe<ZonosLabelFreightDetailInput>;
  /** Indicates whether the duties and taxes for this shipment are guaranteed by Zonos. */
  guaranteeCode?: InputMaybe<ZonosLabelGuaranteeCode>;
  /** Importer of record information for international shipments */
  importerOfRecord?: InputMaybe<ZonosLabelImporterOfRecordInput>;
  /** Optional invoice number to apply on the label and CI. */
  invoiceNumber?: InputMaybe<Scalars['String']>;
  /** Whether the shipment contains non-commercial goods */
  isNonCommercial?: InputMaybe<Scalars['Boolean']>;
  /** Optional ITN exemption to apply to the label. Only one of itnExemption or itnNumber can be applied. */
  itnExemption?: InputMaybe<Scalars['String']>;
  /** Optional ITN number to apply to the label. Only one of itnExemption or itnNumber can be applied. */
  itnNumber?: InputMaybe<Scalars['String']>;
  /** Type of label file to be returned. PDF or ZPL */
  labelFileType?: InputMaybe<ZonosLabelFileType>;
  /** Size of the label to be returned. FOUR_BY_SIX or FOUR_BY_EIGHT */
  labelSize?: InputMaybe<ZonosLabelSize>;
  /** Export/import license number for customs */
  licenseNumber?: InputMaybe<Scalars['String']>;
  /** Master tracking information for MPS (Multiple Piece Shipment) child shipments */
  masterTracking?: InputMaybe<ZonosLabelMasterTrackingInput>;
  /** Instructions for handling non-deliverable shipments */
  nonDelivery?: InputMaybe<ZonosLabelNonDeliveryInput>;
  /** Optional ID of the `Order` the label is associated with. May be omitted when the upstream caller has populated all label-relevant fields directly on this input (declarationId, terms, guaranteeCode, items with currency/hsCode/COO, etc.). Carriers must opt in via `supportsOrderless()` — orderless requests for non-supporting carriers are rejected. */
  orderId?: InputMaybe<Scalars['ID']>;
  /** Packages to create labels for, dictates how many labels are returned. */
  packages: Array<ZonosLabelPackageInput>;
  /** Free-text payment conditions for customs invoice */
  paymentConditions?: InputMaybe<Scalars['String']>;
  /** Optional purchase order number to apply on the label and CI. */
  purchaseOrderNumber?: InputMaybe<Scalars['String']>;
  /** Optional reference fields for the shipment */
  references?: InputMaybe<Array<ZonosLabelReferenceInput>>;
  /** Sequence number for MPS packages */
  sequenceNumber?: InputMaybe<Scalars['Int']>;
  /** The service level code to be used to create the label. */
  serviceLevelDetail: ZonosServiceLevelDetailInput;
  /** Details about the origin location and contact */
  shipFrom: ZonosLabelLocationInput;
  /** Details about the destination location and contact */
  shipTo: ZonosLabelLocationInput;
  /** Optional ID of the shipment batch with the external carrier */
  shipmentConsolidationId?: InputMaybe<Scalars['String']>;
  /** Optional shipment date to be used for future-day shipping. */
  shipmentData?: InputMaybe<Scalars['DateTime']>;
  /** Optional shipment date to be used for future-day shipping. */
  shipmentDate?: InputMaybe<Scalars['DateTime']>;
  /** Custom declaration statement for this shipment, takes priority over org-level settings */
  shipmentDeclarationStatement?: InputMaybe<Scalars['String']>;
  /** Optional ID of the `Shipment` this Label will be associated with. */
  shipmentId?: InputMaybe<Scalars['ID']>;
  /** Optional special instructions to send to the carrier */
  specialInstructions?: InputMaybe<Scalars['String']>;
  /** Includes details about special services requested for the label. */
  specialServices?: InputMaybe<ZonosLabelSpecialServiceInput>;
  /** The terms this label is being created under i.e. DAP or DDP */
  terms: ZonosLabelTermType;
  /** Third party account number for billing */
  thirdPartyAccount?: InputMaybe<Scalars['String']>;
  /** Total package count for MPS shipments */
  totalPackageCount?: InputMaybe<Scalars['Int']>;
};

export type ZonosLabelCreateInput = {
  /** The freight booking number to be used for the label */
  bookingNumber?: InputMaybe<Scalars['String']>;
  /** Exemption code for shipments requiring an ITN */
  exemption?: InputMaybe<Scalars['String']>;
  /** ITN Number to apply on the label request */
  itnNumber?: InputMaybe<Scalars['String']>;
  /** Indicates the desired type of file for the label */
  labelFileType?: InputMaybe<ZonosLabelFileType>;
  /** Indicates the desired size of the label */
  labelSize?: InputMaybe<ZonosLabelSize>;
  /** The shipment for which the label is being generated */
  shipment: Scalars['ID'];
  /** Custom declaration statement for this shipment, takes priority over org-level settings */
  shipmentDeclarationStatement?: InputMaybe<Scalars['String']>;
  /** Any special instructions related to this Shipment */
  specialInstructions?: InputMaybe<Scalars['String']>;
};

export type ZonosLabelCreateWorkflowInput = {
  /** Indicates the desired type of file for the label */
  labelFileType?: InputMaybe<ZonosLabelFileType>;
  /** Indicates the desired size of the label */
  labelSize?: InputMaybe<ZonosLabelSize>;
};

/** ============================================================================= CUSTOMS OPTION TYPES ============================================================================= */
export type ZonosLabelCustomsOptionInput = {
  /** Description (required when type is OTHER). */
  description?: InputMaybe<Scalars['String']>;
  /** Type of customs option. */
  type: ZonosLabelCustomsOptionType;
};

export type ZonosLabelCustomsOptionType =
  /** Courtesy return label - applicable for outbound shipments */
  | 'COURTESY_RETURN_LABEL'
  /** Exhibition or trade show - outbound and inbound */
  | 'EXHIBITION_TRADE_SHOW'
  /** Faulty item being returned - inbound only */
  | 'FAULTY_ITEM'
  /** Repaired or processed item being sent - outbound only */
  | 'FOLLOWING_REPAIR'
  /** For repair or processing - outbound and inbound */
  | 'FOR_REPAIR'
  /** Loan item - outbound and inbound */
  | 'ITEM_FOR_LOAN'
  /** Other reason - requires description */
  | 'OTHER'
  /** Rejected merchandise being returned - inbound */
  | 'REJECTED'
  /** Replacement being sent - outbound only */
  | 'REPLACEMENT'
  /** For use in a trial - outbound and inbound */
  | 'TRIAL';

export type ZonosLabelDangerousGoodsAccessibility =
  /** Accessible during flight */
  | 'ACCESSIBLE'
  /** Inaccessible during flight (cargo hold) */
  | 'INACCESSIBLE';

/** Regulatory categories for dangerous goods declared on a shipment carton. Drives carrier-specific service-code mapping in downstream consumers. */
export type ZonosLabelDangerousGoodsCategory =
  /** Biological substance (UN3373). */
  | 'BIOLOGICAL_SUBSTANCE'
  /** Consumer commodity ID8000. */
  | 'CONSUMER_COMMODITY'
  /** Excepted Quantity per IATA. */
  | 'EXCEPTED_QUANTITY'
  /** Limited Quantity per ADR. */
  | 'LIMITED_QUANTITY'
  /** Magnetized material (UN2807). */
  | 'MAGNETIZED_MATERIAL'
  /** Not Restricted per IATA Special Provision A02 (ADR load exemption). */
  | 'NOT_RESTRICTED_A02'
  /** Not Restricted per IATA Special Provision A67 (engines / machinery, flammable-liquid powered, UN3528). */
  | 'NOT_RESTRICTED_A67'
  /** Not Restricted per IATA Special Provision A70 (pressurized articles, UN3164). */
  | 'NOT_RESTRICTED_A70';

export type ZonosLabelDangerousGoodsContainerInput = {
  /** Type of container (e.g., plastic jug, fiberboard box) */
  containerType: Scalars['String'];
  /** Hazardous commodities in container */
  hazardousCommodities: Array<ZonosLabelHazardousCommodityInput>;
  /** Number of containers */
  numberOfContainers: Scalars['Int'];
};

/** ============================================================================= DANGEROUS GOODS DETAILS ============================================================================= */
export type ZonosLabelDangerousGoodsDetailInput = {
  /** Accessibility of dangerous goods in aircraft (FedEx detailed DG). */
  accessibility?: InputMaybe<ZonosLabelDangerousGoodsAccessibility>;
  /** Cargo aircraft only flag */
  cargoAircraftOnly?: InputMaybe<Scalars['Boolean']>;
  /** High-level regulatory category for the dangerous goods (DHL Path 2). */
  category?: InputMaybe<ZonosLabelDangerousGoodsCategory>;
  /** Container information */
  containers?: InputMaybe<Array<ZonosLabelDangerousGoodsContainerInput>>;
  /** 24-hour emergency contact number */
  emergencyContactNumber?: InputMaybe<Scalars['String']>;
  /** DG shipping options */
  options?: InputMaybe<Array<ZonosLabelDangerousGoodsOption>>;
  /** Signatory for DG declaration */
  signatory?: InputMaybe<ZonosLabelDangerousGoodsSignatoryInput>;
};

export type ZonosLabelDangerousGoodsOption =
  /** Hazardous materials */
  | 'HAZARDOUS_MATERIALS'
  /** Limited quantities commodities */
  | 'LIMITED_QUANTITIES_COMMODITIES'
  /** ORM-D (Other Regulated Materials - Domestic) */
  | 'ORM_D'
  /** Reportable quantities */
  | 'REPORTABLE_QUANTITIES'
  /** Small quantity exception */
  | 'SMALL_QUANTITY_EXCEPTION';

export type ZonosLabelDangerousGoodsSignatoryInput = {
  /** Name of person signing DG declaration */
  contactName: Scalars['String'];
  /** 24-hour emergency contact number */
  emergencyContactNumber?: InputMaybe<Scalars['String']>;
  /** Place where declaration was signed */
  place: Scalars['String'];
  /** Title of signatory */
  title?: InputMaybe<Scalars['String']>;
};

export type ZonosLabelDocumentIdProducer =
  | 'CUSTOMER'
  | 'FEDEX';

export type ZonosLabelDocumentProducer =
  | 'CUSTOMER'
  | 'FEDEX_CLS'
  | 'FEDEX_GTM';

export type ZonosLabelDocumentReferenceInput = {
  /** Document ID from prior upload */
  documentId: Scalars['String'];
  /** Who produced the document ID */
  documentIdProducer: ZonosLabelDocumentIdProducer;
  /** Who produced the document */
  documentProducer?: InputMaybe<ZonosLabelDocumentProducer>;
  /** Document type being referenced */
  documentType: ZonosLabelEtdDocumentType;
  /** Line number for multi-document references */
  lineNumber?: InputMaybe<Scalars['Int']>;
};

/** ============================================================================= DRY ICE DETAILS ============================================================================= */
export type ZonosLabelDryIceDetailInput = {
  /** Weight of dry ice in the package */
  weight: Scalars['Decimal'];
  /** Unit of weight measurement */
  weightUnit: ZonosWeightUnitCode;
};

export type ZonosLabelEdge = {
  __typename?: 'LabelEdge';
  /** A string that represents a cursor for this object in the current pagination connection */
  cursor: Maybe<Scalars['String']>;
  /** The `Label` object located at this edge */
  node: Maybe<ZonosLabel>;
};

export type ZonosLabelEmailAggregationType =
  /** Send one notification per package */
  | 'PER_PACKAGE'
  /** Send one notification per shipment */
  | 'PER_SHIPMENT';

/** ============================================================================= EMAIL NOTIFICATION TYPES ============================================================================= */
export type ZonosLabelEmailNotificationDetailInput = {
  /** How notifications are aggregated. */
  aggregationType?: InputMaybe<ZonosLabelEmailAggregationType>;
  /** Personal message (max 120 chars TEXT, 500 chars HTML). */
  personalMessage?: InputMaybe<Scalars['String']>;
  /** List of email notification recipients. */
  recipients: Array<ZonosLabelEmailNotificationRecipientInput>;
};

export type ZonosLabelEmailNotificationEventType =
  /** Notification on delivery */
  | 'ON_DELIVERY'
  /** Notification on estimated delivery */
  | 'ON_ESTIMATED_DELIVERY'
  /** Notification on exception */
  | 'ON_EXCEPTION'
  /** Notification on shipment creation */
  | 'ON_SHIPMENT'
  /** Notification on tender */
  | 'ON_TENDER';

export type ZonosLabelEmailNotificationFormatType =
  /** HTML formatted email */
  | 'HTML'
  /** Plain text email */
  | 'TEXT';

export type ZonosLabelEmailNotificationRecipientInput = {
  /** Recipient email address (required). */
  emailAddress: Scalars['String'];
  /** Locale for the notification (e.g., en_US). */
  locale?: InputMaybe<Scalars['String']>;
  /** Recipient name (optional). */
  name?: InputMaybe<Scalars['String']>;
  /** List of events that trigger notifications. */
  notificationEventTypes?: InputMaybe<Array<ZonosLabelEmailNotificationEventType>>;
  /** Format of the notification email. */
  notificationFormat?: InputMaybe<ZonosLabelEmailNotificationFormatType>;
  /** Type of recipient. */
  recipientType: ZonosLabelEmailRecipientType;
};

export type ZonosLabelEmailRecipientType =
  /** Customs broker */
  | 'BROKER'
  /** Other recipient type */
  | 'OTHER'
  /** Package recipient */
  | 'RECIPIENT'
  /** Shipper */
  | 'SHIPPER'
  /** Third party */
  | 'THIRD_PARTY';

export type ZonosLabelError = {
  __typename?: 'LabelError';
  /** The carrier that returned the error. */
  carrier: Maybe<Scalars['String']>;
  /** Error code returned by the carrier. */
  code: Maybe<Scalars['String']>;
  /** Error message returned by the carrier. */
  message: Scalars['String'];
};

/** ============================================================================= ETD (ELECTRONIC TRADE DOCUMENTS) DETAILS ============================================================================= */
export type ZonosLabelEtdDetailInput = {
  /** References to previously uploaded documents */
  documentReferences?: InputMaybe<Array<ZonosLabelDocumentReferenceInput>>;
  /** Types of documents to generate electronically */
  requestedDocumentCopies: Array<ZonosLabelEtdDocumentType>;
};

export type ZonosLabelEtdDocumentType =
  /** Certificate of Origin */
  | 'CERTIFICATE_OF_ORIGIN'
  /** Commercial Invoice */
  | 'COMMERCIAL_INVOICE'
  /** NAFTA Certificate of Origin */
  | 'NAFTA_CERTIFICATE_OF_ORIGIN'
  /** Pro Forma Invoice */
  | 'PRO_FORMA_INVOICE'
  /** USMCA Certification of Origin */
  | 'USMCA_CERTIFICATION_OF_ORIGIN'
  /** USMCA Commercial Invoice and Certification of Origin */
  | 'USMCA_COMMERCIAL_INVOICE_CERTIFICATION_OF_ORIGIN';

export type ZonosLabelFileType =
  /** Label will be saved in a PDF format */
  | 'PDF'
  /** Label will be saved in a ZPL format */
  | 'ZPL';

export type ZonosLabelFilter = {
  /** The carrier for which the label was generated */
  carrier?: InputMaybe<Scalars['ID']>;
  /** A date range to filter Label objects by their created date */
  createdDate?: InputMaybe<ZonosDateTimeRange>;
  /** A status to filter Label objects by their current status */
  status?: InputMaybe<ZonosLabelStatusType>;
};

export type ZonosLabelFreightClass =
  | 'CLASS_050'
  | 'CLASS_055'
  | 'CLASS_060'
  | 'CLASS_065'
  | 'CLASS_070'
  | 'CLASS_077_5'
  | 'CLASS_085'
  | 'CLASS_092_5'
  | 'CLASS_100'
  | 'CLASS_110'
  | 'CLASS_125'
  | 'CLASS_150'
  | 'CLASS_175'
  | 'CLASS_200'
  | 'CLASS_250'
  | 'CLASS_300'
  | 'CLASS_400'
  | 'CLASS_500';

export type ZonosLabelFreightCollectTermsType =
  /** Non-recourse shipper signed */
  | 'NON_RECOURSE_SHIPPER_SIGNED'
  /** Standard collect terms */
  | 'STANDARD';

/** ============================================================================= FREIGHT DETAILS (for FedEx Freight certification) ============================================================================= */
export type ZonosLabelFreightDetailInput = {
  /** Billing address for freight charges */
  billingAddress?: InputMaybe<ZonosLabelLocationInput>;
  /** Billing contact for freight charges */
  billingContact?: InputMaybe<ZonosLabelContactInput>;
  /** FedEx booking confirmation number for express freight shipments (5-12 digits). Required for international priority/economy freight services. */
  bookingConfirmationNumber?: InputMaybe<Scalars['String']>;
  /** Collect terms type for third-party billing */
  collectTermsType?: InputMaybe<ZonosLabelFreightCollectTermsType>;
  /** FedEx Freight account number. Required for LTL freight shipments. */
  freightAccountNumber?: InputMaybe<Scalars['String']>;
  /** Freight class */
  freightClass?: InputMaybe<ZonosLabelFreightClass>;
  /** Line items for freight shipment. Required for LTL freight shipments. */
  lineItems?: InputMaybe<Array<ZonosLabelFreightLineItemInput>>;
  /** Whether packing list is enclosed with the freight shipment */
  packingListEnclosed?: InputMaybe<Scalars['Boolean']>;
  /** Role in the freight shipment. Required for LTL freight shipments. */
  role?: InputMaybe<ZonosLabelFreightRole>;
  /** Number of items loaded and counted by the shipper */
  shippersLoadAndCount?: InputMaybe<Scalars['Int']>;
  /** Total handling units */
  totalHandlingUnits?: InputMaybe<Scalars['Int']>;
};

export type ZonosLabelFreightDimensionsInput = {
  /** Height */
  height: Scalars['Decimal'];
  /** Length */
  length: Scalars['Decimal'];
  /** Dimensional unit */
  units: ZonosDimensionalUnitCode;
  /** Width */
  width: Scalars['Decimal'];
};

export type ZonosLabelFreightLineItemInput = {
  /** Whether class is provided by customer */
  classProvidedByCustomer?: InputMaybe<Scalars['Boolean']>;
  /** Description of the freight */
  description: Scalars['String'];
  /** Dimensions of the freight item */
  dimensions?: InputMaybe<ZonosLabelFreightDimensionsInput>;
  /** Freight class for this line item */
  freightClass: ZonosLabelFreightClass;
  /** Number of handling units */
  handlingUnits?: InputMaybe<Scalars['Int']>;
  /** Whether shipment contains hazardous materials */
  hazardousMaterials?: InputMaybe<Scalars['Boolean']>;
  /** Line item ID */
  id: Scalars['String'];
  /** Packaging type */
  packaging: ZonosLabelFreightPackaging;
  /** Number of pieces */
  pieces: Scalars['Int'];
  /** Purchase order number */
  purchaseOrderNumber?: InputMaybe<Scalars['String']>;
  /** Weight of the freight item */
  weight: Scalars['Decimal'];
  /** Weight unit */
  weightUnit: ZonosWeightUnitCode;
};

export type ZonosLabelFreightPackaging =
  | 'BAG'
  | 'BARREL'
  | 'BASKET'
  | 'BOX'
  | 'BUCKET'
  | 'BUNDLE'
  | 'CAGE'
  | 'CARTON'
  | 'CASE'
  | 'CHEST'
  | 'COIL'
  | 'CRATE'
  | 'CYLINDER'
  | 'DRUM'
  | 'ENVELOPE'
  | 'HAMPER'
  | 'PAIL'
  | 'PALLET'
  | 'PIECES'
  | 'REEL'
  | 'ROLL'
  | 'SKID'
  | 'TANK'
  | 'TOTE_BIN'
  | 'TUBE';

export type ZonosLabelFreightRole =
  /** Consignee (receiver) */
  | 'CONSIGNEE'
  /** Shipper (sender) */
  | 'SHIPPER'
  /** Third party */
  | 'THIRD_PARTY';

export type ZonosLabelGuaranteeCode =
  /** Zonos Guaranteed duties and taxes */
  | 'LCG'
  /** Zonos Guarantee does not apply */
  | 'NOT_APPLICABLE';

export type ZonosLabelHazardousCommodityInput = {
  /** Cargo aircraft only flag */
  cargoAircraftOnly?: InputMaybe<Scalars['Boolean']>;
  /** DOT hazard class (e.g., "3" for flammable liquids) */
  hazardClass: Scalars['String'];
  /** UN/NA ID number (e.g., "1090" for Acetone) */
  id: Scalars['String'];
  /** Packing group (I, II, or III) */
  packingGroup?: InputMaybe<ZonosLabelPackingGroup>;
  /** Packing instructions code */
  packingInstructions?: InputMaybe<Scalars['String']>;
  /** Proper shipping name */
  properShippingName: Scalars['String'];
  /** Quantity amount */
  quantityAmount: Scalars['Decimal'];
  /** Quantity units (e.g., "L", "KG") */
  quantityUnits: Scalars['String'];
  /** Sequence number for multiple commodities */
  sequenceNumber?: InputMaybe<Scalars['Int']>;
};

export type ZonosLabelHoldAddressInput = {
  /** City */
  city: Scalars['String'];
  /** ISO country code */
  countryCode: ZonosCountryCode;
  /** Postal code */
  postalCode: Scalars['String'];
  /** State or province code */
  stateOrProvinceCode?: InputMaybe<Scalars['String']>;
  /** Street address */
  streetLines: Scalars['String'];
};

/** ============================================================================= HOLD AT LOCATION DETAILS ============================================================================= */
export type ZonosLabelHoldAtLocationInput = {
  /** Address of hold location (if not using locationId) */
  address?: InputMaybe<ZonosLabelHoldAddressInput>;
  /** Contact at the hold location */
  contact?: InputMaybe<ZonosLabelContactInput>;
  /** FedEx location ID where package should be held */
  locationId?: InputMaybe<Scalars['String']>;
  /** Type of FedEx location */
  locationType?: InputMaybe<ZonosLabelHoldLocationType>;
  /** Phone number for notification */
  phoneNumber?: InputMaybe<Scalars['String']>;
};

export type ZonosLabelHoldLocationType =
  | 'FEDEX_AUTHORIZED_SHIP_CENTER'
  | 'FEDEX_EXPRESS_STATION'
  | 'FEDEX_FREIGHT_SERVICE_CENTER'
  | 'FEDEX_GROUND_TERMINAL'
  | 'FEDEX_HOME_DELIVERY_STATION'
  | 'FEDEX_OFFICE'
  | 'FEDEX_ONSITE'
  | 'FEDEX_SELF_SERVICE_LOCATION'
  | 'FEDEX_SHIP_AND_GET'
  | 'FEDEX_SMART_POST_HUB';

/** ============================================================================= HOME DELIVERY PREMIUM DETAILS ============================================================================= */
export type ZonosLabelHomeDeliveryPremiumInput = {
  /** Scheduled date for DATE_CERTAIN */
  date?: InputMaybe<Scalars['DateTime']>;
  /** Phone number for delivery coordination */
  phoneNumber?: InputMaybe<Scalars['String']>;
  /** Type of premium delivery service */
  type: ZonosLabelHomeDeliveryPremiumType;
};

export type ZonosLabelHomeDeliveryPremiumType =
  /** Scheduled delivery appointment */
  | 'APPOINTMENT'
  /** Specific delivery date guaranteed */
  | 'DATE_CERTAIN'
  /** Evening delivery (5-8 PM) */
  | 'EVENING';

/** ============================================================================= IMPORTER OF RECORD DETAILS ============================================================================= */
export type ZonosLabelImporterOfRecordInput = {
  /** Account number */
  accountNumber?: InputMaybe<Scalars['String']>;
  /** Address */
  address: ZonosLabelLocationInput;
  /** Contact information */
  contact: ZonosLabelContactInput;
  /** Tax identification */
  taxInfo?: InputMaybe<ZonosLabelContactTaxInfoInput>;
};

/** ============================================================================= INTERNATIONAL CONTROLLED EXPORT DETAILS ============================================================================= */
export type ZonosLabelInternationalControlledExportInput = {
  /** Entry number */
  entryNumber?: InputMaybe<Scalars['String']>;
  /** Foreign trade zone code */
  foreignTradeZoneCode?: InputMaybe<Scalars['String']>;
  /** License or permit expiration date */
  licenseOrPermitExpirationDate?: InputMaybe<Scalars['DateTime']>;
  /** License or permit number */
  licenseOrPermitNumber?: InputMaybe<Scalars['String']>;
  /** Type of controlled export */
  type: ZonosLabelControlledExportType;
};

export type ZonosLabelItemAttributeInput = {
  /** Attribute key (e.g., `DANGEROUS_GOODS`). */
  key: Scalars['String'];
  /** Attribute value (e.g., `NOT_RESTRICTED_A70`). */
  value?: InputMaybe<Scalars['String']>;
};

export type ZonosLabelLocationInput = {
  /** The full province or state name for this location. Carriers that need the human-readable name (e.g. Japan Post `from_pref`) read this; otherwise it's optional. */
  administrativeArea?: InputMaybe<Scalars['String']>;
  /** The province or state code for this location. */
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  /** Contact information for the location */
  contact: ZonosLabelContactInput;
  /** ISO country code */
  countryCode: ZonosCountryCode;
  /** Address line 1 */
  line1: Scalars['String'];
  /** Address line 2 */
  line2?: InputMaybe<Scalars['String']>;
  /** Address line 3 */
  line3?: InputMaybe<Scalars['String']>;
  /** City */
  locality: Scalars['String'];
  /** Postal code */
  postalCode?: InputMaybe<Scalars['String']>;
};

/** ============================================================================= MPS (MULTIPLE PIECE SHIPMENT) DETAILS ============================================================================= */
export type ZonosLabelMasterTrackingInput = {
  /** Form ID for the master shipment */
  formId?: InputMaybe<Scalars['String']>;
  /** Master tracking number for MPS */
  trackingNumber: Scalars['String'];
};

/** ============================================================================= NON-DELIVERY HANDLING ============================================================================= */
export type ZonosLabelNonDeliveryInput = {
  /** What to do if the shipment cannot be delivered */
  option: ZonosLabelNonDeliveryOptionType;
  /** Transport method for return/forwarding */
  transportMethod?: InputMaybe<ZonosLabelNonDeliveryTransportType>;
};

export type ZonosLabelNonDeliveryOptionType =
  | 'ABANDON'
  | 'FORWARD'
  | 'RETURN_AFTER_RETENTION'
  | 'RETURN_IMMEDIATELY';

export type ZonosLabelNonDeliveryTransportType =
  | 'AIR'
  | 'MOST_ECONOMICAL';

export type ZonosLabelPackageInput = {
  /** Unit of measurement for the dimensions of this LabelPackage. */
  dimensionalUnit?: InputMaybe<ZonosDimensionalUnitCode>;
  /** Height of the package. */
  height: Scalars['Decimal'];
  /** List of `LabelPackageItemInput` to describe the items contained in the package. For domestic shipments, this can be an empty list. */
  items: Array<ZonosLabelPackageItemInput>;
  /** Length of the package. */
  length: Scalars['Decimal'];
  /** Optional package-level special services to apply to the package */
  packageSpecialServices?: InputMaybe<ZonosLabelPackageSpecialServiceInput>;
  /** Optional packing type to use for the label package */
  packagingType?: InputMaybe<Scalars['String']>;
  /** Reference to the package. */
  reference: Scalars['String'];
  /** Optional special services to apply to the package */
  specialServices?: InputMaybe<ZonosLabelSpecialServiceInput>;
  /** Weight of the package. */
  weight: Scalars['Decimal'];
  /** Unit of measurement for the weight of this package. */
  weightUnit?: InputMaybe<ZonosWeightUnitCode>;
  /** Width of the package. */
  width: Scalars['Decimal'];
};

export type ZonosLabelPackageItemInput = {
  /** Per-item cost. */
  amount: Scalars['Decimal'];
  /** Free-form per-item attribute key/value pairs. Used for regulatory tagging (e.g., `DANGEROUS_GOODS`). */
  attributes?: InputMaybe<Array<ZonosLabelItemAttributeInput>>;
  /** Country where the item originates from. */
  countryOfOrigin?: InputMaybe<ZonosCountryCode>;
  /** The currency the item price is represented in. */
  currencyCode: ZonosCurrencyCode;
  /** Description of the item that will appear on the Commercial Invoice. Can be overridden using `LabelSettings`. */
  description?: InputMaybe<Scalars['String']>;
  /** The HS Code for this item. */
  hsCode: Scalars['String'];
  /** Optional identifier for this item. Can be a productId, sku, or `Item` ID. */
  id?: InputMaybe<Scalars['ID']>;
  /** Name of the item. */
  name?: InputMaybe<Scalars['String']>;
  /** Optional product ID associated with the item. One of either `productId` or `sku` is required. */
  productId?: InputMaybe<Scalars['String']>;
  /** The quantity of this item. */
  quantity: Scalars['Int'];
  /** Optional SKU associated with the item. One of either `productId` or `sku` is required. */
  sku?: InputMaybe<Scalars['String']>;
  /** The weight value of the item */
  weight?: InputMaybe<Scalars['Decimal']>;
  /** The unit of measurement for the weight of this item. */
  weightUnit?: InputMaybe<ZonosWeightUnitCode>;
};

/** ============================================================================= PACKAGE-LEVEL SPECIAL SERVICES ============================================================================= */
export type ZonosLabelPackageSpecialServiceInput = {
  /** Details for a package containing alcohol. Required if ALCOHOL is present in `serviceTypes`. */
  alcoholDetail?: InputMaybe<ZonosLabelAlcoholDetailInput>;
  /** Details for a package containing battery materials. Required if BATTERY is present in `serviceTypes`. */
  batteryDetail?: InputMaybe<ZonosLabelBatteryDetailInput>;
  /** Details for dangerous goods shipment. Required if DANGEROUS_GOODS is present in `serviceTypes`. */
  dangerousGoodsDetail?: InputMaybe<ZonosLabelDangerousGoodsDetailInput>;
  /** Details for dry ice in the package. Required if DRY_ICE is present in `serviceTypes`. */
  dryIceDetail?: InputMaybe<ZonosLabelDryIceDetailInput>;
  /** List of special service options to apply at the package level. */
  serviceTypes?: InputMaybe<Array<ZonosLabelPackageSpecialServiceType>>;
  /** Signature option type to apply at the package level. Required if SIGNATURE_OPTION is present in `serviceTypes`. */
  signatureOptionType?: InputMaybe<ZonosLabelSignatureOptionType>;
};

export type ZonosLabelPackageSpecialServiceType =
  /** Alcohol shipment */
  | 'ALCOHOL'
  /** Battery shipment */
  | 'BATTERY'
  /** Dangerous goods / hazardous materials */
  | 'DANGEROUS_GOODS'
  /** Dry ice shipment */
  | 'DRY_ICE'
  /** Non-standard container */
  | 'NON_STANDARD_CONTAINER'
  /** Priority alert */
  | 'PRIORITY_ALERT'
  /** Signature option */
  | 'SIGNATURE_OPTION';

export type ZonosLabelPackingGroup =
  /** High danger */
  | 'I'
  /** Medium danger */
  | 'II'
  /** Low danger */
  | 'III';

/** ============================================================================= REFERENCE FIELDS ============================================================================= */
export type ZonosLabelReferenceInput = {
  /** Reference type */
  type: ZonosLabelReferenceType;
  /** Reference value */
  value: Scalars['String'];
};

export type ZonosLabelReferenceType =
  /** Customer reference */
  | 'CUSTOMER_REFERENCE'
  /** Department number */
  | 'DEPARTMENT_NUMBER'
  /** Invoice number */
  | 'INVOICE_NUMBER'
  /** Purchase order number */
  | 'PURCHASE_ORDER'
  /** RMA number */
  | 'RMA_NUMBER'
  /** Shipment integrity */
  | 'SHIPMENT_INTEGRITY';

/** LabelRequestLog represents the carrier request and response used to retrieve a `Label` */
export type ZonosLabelRequestLog = {
  __typename?: 'LabelRequestLog';
  /** The carrier name associated with the LabelRequestLog */
  carrier: Maybe<Scalars['String']>;
  /** The date and time this LabelRequestLog was created */
  createdAt: Scalars['DateTime'];
  /** The ID of the organization that created the LabelRequestLog */
  createdBy: Scalars['ID'];
  /** A unique identifier for the LabelRequestLog */
  id: Scalars['ID'];
  /** An id of the `Label` associated with the LabelRequestLog */
  labelId: Maybe<Scalars['ID']>;
  /** The request body sent to the carrier */
  request: Maybe<Scalars['String']>;
  /** The response body returned by the carrier */
  response: Maybe<Scalars['String']>;
  /** An id of the `Shipment` associated with the LabelRequestLog */
  shipmentId: Maybe<Scalars['ID']>;
};

export type ZonosLabelRequestLogConnection = {
  __typename?: 'LabelRequestLogConnection';
  /** A list of `LabelRequestLogEdge` objects */
  edges: Array<ZonosLabelRequestLogEdge>;
  /** Pagination info about the connection object */
  pageInfo: Maybe<ZonosPageInfo>;
  /** The total number of `LabelRequestLog` objects in the connection */
  totalCount: Scalars['Int'];
};

export type ZonosLabelRequestLogEdge = {
  __typename?: 'LabelRequestLogEdge';
  /** A string that represents a cursor for this object in the current pagination connection */
  cursor: Maybe<Scalars['String']>;
  /** The `LabelRequestLog` object located at this edge */
  node: Maybe<ZonosLabelRequestLog>;
};

export type ZonosLabelRequestLogErrorFilter = {
  /** An id of the `Shipment` associated with the error LabelRequestLog. Required. */
  shipmentId: Scalars['ID'];
};

export type ZonosLabelRequestLogFilter = {
  /** Filter by carrier name to retrieve error logs. Must be used together with date. */
  carrier?: InputMaybe<Scalars['String']>;
  /** Filter by date (YYYY-MM-DD) to retrieve error logs. Must be used together with carrier. */
  date?: InputMaybe<Scalars['String']>;
  /** An id of the `Label` associated with the sucessful LabelRequestLog */
  labelId?: InputMaybe<Scalars['ID']>;
  /** An id of the `Shipment` associated with the successful LabelRequestLog */
  shipmentId?: InputMaybe<Scalars['ID']>;
};

export type ZonosLabelResult = {
  __typename?: 'LabelResult';
  /** Error object with details */
  error: Maybe<ZonosLabelError>;
  /** List of `Label` objects that were created. */
  labels: Array<ZonosLabel>;
};

/** ============================================================================= RETURN SHIPMENT DETAILS ============================================================================= */
export type ZonosLabelReturnDetailInput = {
  /** Type of return */
  returnType: ZonosLabelReturnType;
  /** RMA number if applicable */
  rmaNumber?: InputMaybe<Scalars['String']>;
};

export type ZonosLabelReturnType =
  /** FedEx Tag (driver pickup) */
  | 'FEDEX_TAG'
  /** Pending return */
  | 'PENDING'
  /** Print return label */
  | 'PRINT_RETURN_LABEL';

export type ZonosLabelSettings = {
  __typename?: 'LabelSettings';
  /** Timestamp of when the LabelSettings were created */
  createdAt: Scalars['DateTime'];
  /** The user who created the LabelSettings */
  createdBy: Scalars['ID'];
  /** Determines which currency is used on commercial invoices and customs documents. Defaults to ORDER. */
  currencyDisplayMode: ZonosCurrencyDisplayMode;
  /** A customDeclaration object to be used when creating labels */
  customDeclarationStatements: Array<ZonosCustomDeclarationStatement>;
  /** The default alternate return address to be used when creating labels */
  declaredValue: Scalars['Decimal'];
  /** `DescriptionOverride` gives the option to override descriptions displayed on labels, customs documents, or both */
  descriptionOverride: Maybe<ZonosDescriptionOverride>;
  /** Unique identifier for this `LabelSettings` object */
  id: Scalars['ID'];
  /** Indicates the default file type used when creating labels */
  labelFileType: Maybe<ZonosLabelFileType>;
  /** Indicates the default size to use when creating labels */
  labelSize: Maybe<ZonosLabelSize>;
  /** The ID of the `Organization` these LabelSettings belong to */
  organization: Scalars['ID'];
  /** Default `ServiceLevel` to use when creating labels. */
  serviceLevel: Maybe<ZonosServiceLevel>;
  /** Indicates who will be responsible for paying the shipping charges */
  shippingPayment: Maybe<ZonosShippingPaymentType>;
  /** Indicates whether this organization ships dangerous goods. When true, item attributes with key DANGEROUS_GOODS are scanned during label creation and matching cartons are flagged with the appropriate carrier-specific service code. */
  shipsDangerousGoods: Scalars['Boolean'];
  /** Indicates whether a signature is required for the label */
  signatureRequired: Scalars['Boolean'];
  /** When the LabelSettings were most recently updated */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the LabelSettings */
  updatedBy: Scalars['ID'];
};

export type ZonosLabelSettingsUpdateInput = {
  /** Determines which currency is used on commercial invoices and customs documents */
  currencyDisplayMode?: InputMaybe<ZonosCurrencyDisplayMode>;
  /** A customDeclaration object to be used when creating labels */
  customDeclarationStatements?: InputMaybe<Array<ZonosCustomDeclarationInput>>;
  /** The amount of the declared value to be used when creating labels */
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  /** `DescriptionOverride` gives the option to override descriptions displayed on labels, customs documents, or both */
  descriptionOverride?: InputMaybe<ZonosDescriptionOverrideInput>;
  /** Indicates the default file type used when creating labels */
  labelFileType?: InputMaybe<ZonosLabelFileType>;
  /** Indicates the default size to use when creating labels */
  labelSize?: InputMaybe<ZonosLabelSize>;
  /** ID of the `ServiceLevel` to use as the default */
  serviceLevel?: InputMaybe<Scalars['ID']>;
  /** Indicates who will be responsible for paying the shipping charges */
  shippingPayment?: InputMaybe<ZonosShippingPaymentType>;
  /** Indicates whether this organization ships dangerous goods. Omit to leave unchanged; the resolver only writes when the field is non-null. */
  shipsDangerousGoods?: InputMaybe<Scalars['Boolean']>;
  /** Indicates whether a signature is required for the label - default setting */
  signatureRequired?: InputMaybe<Scalars['Boolean']>;
};

export type ZonosLabelSignatureOptionType =
  /** An adult signature is required */
  | 'ADULT'
  /** Signature requirement based on the service level default */
  | 'DEFAULT'
  /** Direct signature required */
  | 'DIRECT'
  /** Indirect signature required */
  | 'INDIRECT'
  /** No signature required */
  | 'NONE';

export type ZonosLabelSize =
  /** 8x11 label size */
  | 'EIGHT_BY_ELEVEN'
  /** 4x8 label size */
  | 'FOUR_BY_EIGHT'
  /** 4x6 label size */
  | 'FOUR_BY_SIX';

export type ZonosLabelSpecInput = {
  /** Indicates the desired type of file for the label */
  labelFileType?: InputMaybe<ZonosLabelFileType>;
  /** Indicates the desired size of the label */
  labelSize?: InputMaybe<ZonosLabelSize>;
};

/** ============================================================================= SHIPMENT-LEVEL SPECIAL SERVICES ============================================================================= */
export type ZonosLabelSpecialServiceInput = {
  /** Details for a package containing alcohol. Required if ALCOHOL is present in `serviceTypes`. */
  alcoholRecipientType?: InputMaybe<ZonosLabelAlcoholRecipientType>;
  /** Details for a package containing battery materials. Required if BATTERY is present in `serviceTypes`. */
  batteryDetail?: InputMaybe<ZonosLabelBatteryDetailInput>;
  /** Details for COD (Collect on Delivery) service. Required if COD is present in `serviceTypes`. */
  codDetail?: InputMaybe<ZonosLabelCodDetailInput>;
  /** Details for a package containing dangerous goods. Required if DANGEROUS_GOODS is present in `serviceTypes`. */
  dangerousGoodsDetail?: InputMaybe<ZonosLabelDangerousGoodsDetailInput>;
  /** Details for email notification service. Required if EVENT_NOTIFICATION is present in serviceTypes. */
  emailNotificationDetail?: InputMaybe<ZonosLabelEmailNotificationDetailInput>;
  /** Details for hold at location service. Required if HOLD_AT_LOCATION is present in `serviceTypes`. */
  holdAtLocationDetail?: InputMaybe<ZonosLabelHoldAtLocationInput>;
  /** Details for home delivery premium service. Required if HOME_DELIVERY_PREMIUM is present in `serviceTypes`. */
  homeDeliveryPremiumDetail?: InputMaybe<ZonosLabelHomeDeliveryPremiumInput>;
  /** Details for international controlled export. Required if INTERNATIONAL_CONTROLLED_EXPORT is present in `serviceTypes`. */
  internationalControlledExportDetail?: InputMaybe<ZonosLabelInternationalControlledExportInput>;
  /** Details for return shipment service. Required if RETURN_SHIPMENT is present in `serviceTypes`. */
  returnDetail?: InputMaybe<ZonosLabelReturnDetailInput>;
  /** List of special service options to apply at the shipment level. */
  serviceTypes?: InputMaybe<Array<ZonosLabelSpecialServiceType>>;
  /** Signature option type to apply at the package level. Required if SIGNATURE_OPTION is present in `serviceTypes`. */
  signatureOptionType?: InputMaybe<ZonosLabelSignatureOptionType>;
};

export type ZonosLabelSpecialServiceType =
  /** Alcohol shipment - requires recipient type */
  | 'ALCOHOL'
  /** Battery shipment - lithium ion/metal batteries */
  | 'BATTERY'
  /** Broker select option - use specific customs broker */
  | 'BROKER_SELECT_OPTION'
  /** COD - Collect on Delivery */
  | 'COD'
  /** Dangerous goods / hazardous materials */
  | 'DANGEROUS_GOODS'
  /** Dry ice shipment */
  | 'DRY_ICE'
  /** Electronic Trade Documents - paperless international shipping */
  | 'ELECTRONIC_TRADE_DOCUMENTS'
  /** Event notification / tracking alerts */
  | 'EVENT_NOTIFICATION'
  /** Hold at FedEx location for pickup */
  | 'HOLD_AT_LOCATION'
  /** Home delivery premium options (appointment, date certain, evening) */
  | 'HOME_DELIVERY_PREMIUM'
  /** Inside delivery - carrier brings package inside */
  | 'INSIDE_DELIVERY'
  /** International controlled export - ITAR/EAR compliance */
  | 'INTERNATIONAL_CONTROLLED_EXPORT'
  /** Non-standard container */
  | 'NON_STANDARD_CONTAINER'
  /** Priority alert - enhanced tracking notifications */
  | 'PRIORITY_ALERT'
  /** Returns clearance - facilitates clearance for return shipments */
  | 'RETURNS_CLEARANCE'
  /** Return shipment - return label generation */
  | 'RETURN_SHIPMENT'
  /** Saturday delivery service */
  | 'SATURDAY_DELIVERY'
  /** Saturday pickup service */
  | 'SATURDAY_PICKUP'
  /** Signature option */
  | 'SIGNATURE_OPTION'
  /** Third party consignee */
  | 'THIRD_PARTY_CONSIGNEE';

/** ============================================================================= EXISTING TYPES (unchanged) ============================================================================= */
export type ZonosLabelStatusTransition = {
  __typename?: 'LabelStatusTransition';
  /** DateTime indicating when this status change occurred */
  changedAt: Scalars['DateTime'];
  /** Text describing this status change */
  note: Maybe<Scalars['String']>;
  /** Status of this `Label` at the associated DateTime */
  status: ZonosLabelStatusType;
};

export type ZonosLabelStatusType =
  | 'CREATED'
  | 'VOIDED';

export type ZonosLabelTaxIdType =
  /** Brazil CNPJ/CPF Federal Tax */
  | 'CNP'
  /** Brazil CPF (Individual Taxpayer Registry) */
  | 'CPF'
  /** Argentina Código Único de Identificación Laboral */
  | 'CUIL'
  /** Mexico Clave Única de Registro de Población */
  | 'CURP'
  /** Deferment account duties only */
  | 'DAN'
  /** Tax ID number used in Argentina, Spain, and Peru */
  | 'DNI'
  /** Deferment account duties, taxes, and fees only */
  | 'DTF'
  /** Data Universal Numbering System */
  | 'DUN'
  /** Employer Identification Number */
  | 'EIN'
  /** Economic Operator registration ID */
  | 'EORI'
  /** EU EORI Number */
  | 'EU_EORI'
  /** Federal Tax ID */
  | 'FED'
  /** France Custom VAT on low value quotes */
  | 'FTPC'
  /** Free Trade Zone ID */
  | 'FTZ'
  /** UK EORI Number */
  | 'GB_EORI'
  /** VAT registration */
  | 'GST'
  /** GB VAT (foreign) registration */
  | 'HMRC'
  /** Import One Stop Shop */
  | 'IOSS'
  /** Oversees Registered Supplier */
  | 'LVG'
  /** Indonesia Tax Identification Number */
  | 'NPWP'
  /** AUSid GST registration */
  | 'OSR'
  /** Tax Id for India */
  | 'PAN'
  /** South Korea Tax Number */
  | 'PCC'
  /** Same as PCC */
  | 'PCCC'
  /** Mexico Registro Federal de Contribuyentes */
  | 'RFC'
  /** Chile Rol Único Tributario */
  | 'RUN'
  /** Saudi Arabia VAT */
  | 'SA_VAT'
  /** Social Security Number */
  | 'SSN'
  /** State Tax ID */
  | 'STA'
  /** Deferment account tax only */
  | 'TAN'
  /** US Tax Identification Number */
  | 'TIN'
  /** South Africa Tax Reference Number */
  | 'TRN'
  /** UAE Tax Registration Number */
  | 'UAE_TRN'
  /** VAT on E-Commerce */
  | 'VOEC'
  /** Norwegian VAT Number */
  | 'VOEC_NO';

export type ZonosLabelTermType =
  /** Delivery duties unpaid */
  | 'DAP'
  /** Delivery duties paid */
  | 'DDP';

export type ZonosLabelVoidInput = {
  /** Label to be voided */
  id: Scalars['ID'];
  /** Optional note about reason to be voided */
  note?: InputMaybe<Scalars['String']>;
};

/** A single labeling requirement for regulatory compliance. */
export type ZonosLabelingRequirement = {
  __typename?: 'LabelingRequirement';
  /** Where the label must be placed (e.g. PRODUCT, PACKAGING, INSTRUCTIONS, HANGTAG, PERMANENT_LABEL). */
  placement: Array<Scalars['String']>;
  /** The required label text including any conditions. */
  text: Scalars['String'];
  /** Type of labeling requirement (e.g. CHOKING_HAZARD, FLAMMABILITY, TRACKING_LABEL). */
  type: Scalars['String'];
};

/** A `LandedCost` represents the result of a landed cost calculation. `LandedCost` quotes belong to a `Root` resource and additionally include a `ShipmentRating` resource with additional details about the shipping costs */
export type ZonosLandedCost = {
  __typename?: 'LandedCost';
  /** A list of additional HS codes applicable to items in this `LandedCost` */
  additionalHsCodes: Maybe<Array<ZonosLandedCostAdditionalHsCode>>;
  /** Amount totals for duties, taxes, fees */
  amountSubtotals: Maybe<ZonosLandedCostAmountSubtotals>;
  /** When this `LandedCost` was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the `LandedCost` */
  createdBy: Scalars['ID'];
  /** Currency code of the LandedCost. */
  currencyCode: ZonosCurrencyCode;
  /** A list of de minimis thresholds and what values they apply to */
  deMinimis: Array<ZonosDeMinimis>;
  /** The destination party email for this `LandedCost` */
  destinationPartyEmail: Maybe<Scalars['String']>;
  /** The destination party name for this `LandedCost` */
  destinationPartyName: Maybe<Scalars['String']>;
  /** A list of duties assessed for this `LandedCost` */
  duties: Array<ZonosDuty>;
  /** End use for items included in this quote */
  endUse: ZonosLandedCostEndUse;
  /** A list of fees assessed for this `LandedCost` */
  fees: Array<ZonosFee>;
  /** `LandedCost` resource ID, prefixed with `landed_cost_` */
  id: Scalars['ID'];
  /** Indicates if the landed cost is covered by the Zonos Landed Cost Guarantee */
  landedCostGuaranteeCode: ZonosLandedCostGuaranteeCode;
  /** Links associated with the landedCost */
  links: Maybe<Array<ZonosLandedCostLink>>;
  /** A list of key/value metadata associated with this `LandedCost` */
  metadata: Maybe<Array<ZonosLandedCostMetadata>>;
  /** INCOTERM used to perform calculations */
  method: ZonosIncotermCode;
  /** Indicates whether this `LandedCost` was created in live or test mode */
  mode: ZonosMode;
  /** `Organization` that this `LandedCost` belongs to */
  organization: Scalars['ID'];
  /** Payable Amount totals for duties, taxes, fees */
  payableAmountSubtotals: Maybe<ZonosLandedCostAmountSubtotals>;
  quoteType: Maybe<ZonosLandedCostQuoteType>;
  /** The taxes that should be remitted. */
  remittance: Array<ZonosLandedCostRemittance>;
  /** `Root` resource that this `LandedCost` belongs to */
  root: Maybe<ZonosRoot>;
  /** `Root` resource ID that this `LandedCost` belongs to */
  rootId: Scalars['ID'];
  /** The service level for this `LandedCost` */
  serviceLevel: Maybe<Scalars['String']>;
  /** The ship from country code for this `LandedCost` */
  shipFromCountry: Maybe<ZonosCountryCode>;
  /** The ship to country code for this `LandedCost` */
  shipToCountry: Maybe<ZonosCountryCode>;
  /** `ShipmentRating` that contains shipping cost and other related details for this `LandedCost` */
  shipmentRating: ZonosShipmentRating;
  /** A short ID for the `LandedCost` */
  shortId: Maybe<Scalars['ID']>;
  /** Indicates what method Zonos used to calculate the tariff rates for this `LandedCost` */
  tariffRate: ZonosLandedCostTariffRate;
  taxId: Maybe<ZonosTaxId>;
  taxIds: Maybe<Array<Maybe<ZonosTaxId>>>;
  /** A list of taxes assessed for this `LandedCost` */
  taxes: Array<ZonosTax>;
  /** When this `LandedCost` was most recently updated */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `LandedCost` */
  updatedBy: Scalars['ID'];
};

/** Represents an additional HS code applicable to an item in a `LandedCost` quote */
export type ZonosLandedCostAdditionalHsCode = {
  __typename?: 'LandedCostAdditionalHsCode';
  /** The additional HS code */
  additionalHsCode: Scalars['String'];
  /** The scheme this additional HS code belongs to */
  additionalScheme: Scalars['String'];
  /** The condition that was evaluated to determine applicability */
  condition: Maybe<Scalars['String']>;
  /** The customs description associated with this additional HS code */
  customsDescription: Scalars['String'];
  /** The formula used to calculate this additional HS code entry */
  formula: Scalars['String'];
  /** Unique identifier for this additional HS code entry */
  id: Scalars['ID'];
  /** `Item` this additional HS code applies to */
  item: Maybe<ZonosItem>;
  /** Additional note for this entry */
  note: Maybe<Scalars['String']>;
};

export type ZonosLandedCostAdjustmentInput = {
  /** The amount of the adjustment. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** Currency of the adjustment amount */
  currency?: InputMaybe<ZonosCurrencyCode>;
  /** Name of the adjustment */
  name?: InputMaybe<Scalars['String']>;
  /** The id of the adjustment object to which the adjustment is applied. */
  productId?: InputMaybe<Scalars['String']>;
  /** Promo code to trigger discount rules */
  promoCode?: InputMaybe<Scalars['String']>;
  /** The id of the adjustment object to which the adjustment is applied. */
  sku?: InputMaybe<Scalars['String']>;
  /** Source of the adjustment */
  source?: InputMaybe<ZonosAdjustmentSource>;
  /** The type of adjustment object to which the adjustment is applied. */
  type: ZonosLandedCostAdjustmentType;
};

export type ZonosLandedCostAdjustmentType =
  | 'CART_TOTAL'
  | 'ITEM'
  | 'ORDER_TOTAL'
  | 'PROMO_CODE'
  | 'SHIPPING';

/** The subtotals that make up a landed cost. */
export type ZonosLandedCostAmountSubtotals = {
  __typename?: 'LandedCostAmountSubtotals';
  /** Total amount of all discounts. */
  discounts: Maybe<Scalars['Decimal']>;
  /** Total amount of all duties. */
  duties: Scalars['Decimal'];
  /** Total amount of all fees. */
  fees: Scalars['Decimal'];
  /** Total amount of all items. */
  items: Scalars['Decimal'];
  /** Total amount of duties, taxes, and fees. */
  landedCostTotal: Scalars['Decimal'];
  /** Total amount of shipping. */
  shipping: Scalars['Decimal'];
  /** Total amount of all taxes. */
  taxes: Scalars['Decimal'];
};

export type ZonosLandedCostAmountTargetType =
  | 'BILLING_COMPANY'
  | 'ITEM_PROVIDED'
  | 'MERCHANT_BASE'
  | 'MERCHANT_PROVIDED'
  | 'MERCHANT_SETTLED'
  | 'SHOPPER_PRESENTED'
  | 'ZONOS_BASE';

export type ZonosLandedCostBillingFeeAmountDetail = {
  __typename?: 'LandedCostBillingFeeAmountDetail';
  amount: Scalars['Decimal'];
  amountUnrounded: Scalars['Decimal'];
  createdAt: Scalars['DateTime'];
  currencyCode: ZonosCurrencyCode;
  exchangeRateIds: Maybe<Array<Scalars['String']>>;
  id: Scalars['ID'];
  /** this is really a long, in the backend GQL has no Long compatible type */
  target: Maybe<ZonosAmountDetailTarget>;
  targets: Maybe<Array<ZonosAmountDetailTarget>>;
  type: ZonosLandedCostFeeType;
};

export type ZonosLandedCostBillingFeeContextInput = {
  /** The payment processor to use in the rule context. */
  paymentProcessor?: InputMaybe<ZonosLandedCostPaymentProcessor>;
};

export type ZonosLandedCostBillingPartyType =
  | 'CUSTOMER'
  | 'MERCHANT'
  | 'THIRD_PARTY'
  | 'ZONOS';

/** Detail categories for Landed Cost Billing Rule creation. */
export type ZonosLandedCostBillingRuleDetailCategoryIdCreateType =
  | 'ADJUSTMENT'
  | 'API_CROSS_DOCKING'
  | 'API_CURRENCY_CONVERSION_FEE_DISCOUNT'
  | 'API_GUARANTEE_ORDER'
  | 'API_GUARANTEE_ORDER_LEGACY'
  | 'API_GUARANTEE_PERCENT'
  | 'API_GUARANTEE_PERCENT_INCLUSIVE'
  | 'API_GUARANTEE_PERCENT_REVENUE_SHARE'
  | 'API_TRANSACTION_PERCENT'
  | 'CHECKOUT_CROSS_DOCKING'
  | 'CHECKOUT_DUTY_TAX_FEE_IGLOBAL'
  | 'CHECKOUT_FRAUD_COVERAGE'
  | 'CHECKOUT_GUARANTEE_ORDER'
  | 'CHECKOUT_GUARANTEE_ORDER_LEGACY'
  | 'CHECKOUT_GUARANTEE_PERCENT'
  | 'CHECKOUT_GUARANTEE_PERCENT_IGLOBAL'
  | 'CHECKOUT_ITEM_DISCOUNT_IGLOBAL'
  | 'CHECKOUT_MERCHANT_FEE_ADDITIONAL_INTERNATIONAL'
  | 'CHECKOUT_MERCHANT_FEE_AMOUNT'
  | 'CHECKOUT_MERCHANT_FEE_PAYPAL_PERCENT'
  | 'CHECKOUT_MERCHANT_FEE_PERCENT'
  | 'CHECKOUT_MERCHANT_PROCESSING'
  | 'CHECKOUT_SHIPPING_IGLOBAL'
  | 'CHECKOUT_TRANSACTION_PERCENT'
  | 'COLLECT_ORDER'
  | 'COLLECT_PERCENT'
  | 'ETSY_GUARANTEE_ORDER'
  | 'ETSY_GUARANTEE_PERCENT'
  | 'ETSY_MERCHANT_FEE_PERCENT'
  | 'FRANCE_CUSTOMS_TAX'
  | 'GUARANTEE_ORDER'
  | 'SHOPIFY_GUARANTEE_ORDER'
  | 'SHOPIFY_GUARANTEE_ORDER_LEGACY'
  | 'SHOPIFY_GUARANTEE_PERCENT'
  | 'SHOPIFY_GUARANTEE_PERCENT_INCLUSIVE'
  | 'SHOPIFY_TRANSACTION_PERCENT'
  | 'TAX'
  | 'TRANSACTION_ORDER'
  | 'ZONOS_SHIPPING';

export type ZonosLandedCostBillingRuleFilter = {
  /** Return `LandedCostBillingRule` resources by the associated organization Id. */
  organizationId?: InputMaybe<Scalars['String']>;
};

export type ZonosLandedCostBillingRulesApplyInput = {
  /** Context of the billingFees */
  initialContext?: InputMaybe<ZonosLandedCostBillingFeeContextInput>;
  /** `LandedCost` resource ID, prefixed with `landed_cost_` */
  landedCostId: Scalars['String'];
};

export type ZonosLandedCostCalculationMethod =
  /** Only provide a DAP quote. */
  | 'DAP'
  /** Only provide a DDP. */
  | 'DDP'
  /** Provide both a DDP and DAP quote. */
  | 'DDP_AND_DAP'
  /** provide a DDP quote but return a DAP quote if DDP is not allowed. */
  | 'DDP_PREFERRED'
  /** Use the Zonos configured profile settings to provide a DDP or DAP quote. */
  | 'ZONOS_CONFIGURED';

export type ZonosLandedCostConnection = {
  __typename?: 'LandedCostConnection';
  edges: Maybe<Array<Maybe<ZonosLandedCostEdge>>>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ZonosLandedCostCreateInput = {
  /** Currency to use for the landed cost subtotals. */
  currencyCode: ZonosCurrencyCode;
  /** A list of `DeMinimis` thresholds and what values they apply to. */
  deMinimis?: InputMaybe<Array<ZonosDeMinimisInput>>;
  /** A list of duties assessed for this `LandedCost`. */
  duties?: InputMaybe<Array<ZonosDutyInput>>;
  /** End use for `Items` included in this quote. */
  endUse: ZonosLandedCostEndUse;
  /** A list of `Fee`s assessed for this `LandedCost`. */
  fees?: InputMaybe<Array<ZonosFeeInput>>;
  /** A list of key/value metadata to associate with this `LandedCost`. */
  metadata?: InputMaybe<Array<ZonosLandedCostMetadataInput>>;
  /** quote type */
  quoteType?: InputMaybe<ZonosLandedCostQuoteType>;
  /** `Root` resource ID that this `LandedCost` belongs to. */
  rootId: Scalars['ID'];
  /** `ShipmentRating` that contains shipping cost and other related details for this `LandedCost`. */
  shipmentRating: Scalars['ID'];
  /** Indicates what method Zonos should use to calculate the `TariffRate`s for this quote. */
  tariffRate: ZonosLandedCostTariffRate;
  /** A list of taxes assessed for this `LandedCost`. */
  taxes?: InputMaybe<Array<ZonosTaxInput>>;
};

/** Represents the Detail associated with the `LandedCostDuty` */
export type ZonosLandedCostDutyAmountDetail = {
  __typename?: 'LandedCostDutyAmountDetail';
  /** Amount of the `LandedCostDutyAmountDetail` */
  amount: Maybe<Scalars['Decimal']>;
  /** The unrounded amount of the `LandedCostDutyAmountDetail` */
  amountUnrounded: Maybe<Scalars['Decimal']>;
  /** The date and time the `LandedCostDutyAmountDetail` was created */
  createdAt: Scalars['DateTime'];
  /** The currency the amount of the `LandedCostDutyAmountDetail` is in */
  currencyCode: Maybe<ZonosCurrencyCode>;
  /** The list of exchange rates ids associated with the `LandedCostDutyAmountDetail` */
  exchangeRateIds: Maybe<Array<Scalars['ID']>>;
  /** The id of the `LandedCostDutyAmountDetail` */
  id: Scalars['ID'];
  /** What the `LandedCostDutyAmountDetail` is for */
  targets: Maybe<Array<ZonosLandedCostAmountTargetType>>;
  /** The type of the `LandedCostDutyAmountDetail` */
  type: Maybe<Scalars['String']>;
};

export type ZonosLandedCostEdge = {
  __typename?: 'LandedCostEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosLandedCost>;
};

export type ZonosLandedCostEndUse =
  /** Items quoted are official documents */
  | 'DOCUMENTS'
  /** Item quoted will be resold upon import */
  | 'FOR_RESALE'
  /** Item quoted is a gift */
  | 'GIFT'
  /** Item quoted will not be resold upon import (e.g. personal use) */
  | 'NOT_FOR_RESALE'
  /** quote for return */
  | 'RETURN';

/** Represents the Detail associated with the `LandedCostFee` */
export type ZonosLandedCostFeeAmountDetail = {
  __typename?: 'LandedCostFeeAmountDetail';
  /** Amount of the `LandedCostFeeAmountDetail` */
  amount: Maybe<Scalars['Decimal']>;
  /** The unrounded amount of the `LandedCostFeeAmountDetail` */
  amountUnrounded: Maybe<Scalars['Decimal']>;
  /** The date and time the `LandedCostFeeAmountDetail` was created */
  createdAt: Scalars['DateTime'];
  /** The currency the amount of the `LandedCostFeeAmountDetail` is in */
  currencyCode: Maybe<ZonosCurrencyCode>;
  /** The list of exchange rates ids associated with the `LandedCostFeeAmountDetail` */
  exchangeRateIds: Maybe<Array<Scalars['ID']>>;
  /** The id of the `LandedCostFeeAmountDetail` */
  id: Scalars['ID'];
  /** What the `LandedCostDutyAmountDetail` is for */
  targets: Maybe<Array<ZonosLandedCostAmountTargetType>>;
  /** The type of the `LandedCostFeeAmountDetail` */
  type: Maybe<Scalars['String']>;
};

/** make sure to update the legacy orderService if you add new values here make sure inclusive pricing is aware if its an internal zonos fee */
export type ZonosLandedCostFeeType =
  | 'ADDITIONAL_TARIFF_LINES'
  | 'ADJUSTMENT'
  | 'ADVANCEMENT'
  | 'BOND_FEE'
  | 'BROKERAGE_FEE'
  | 'BUFFER'
  | 'COD'
  | 'COLLECT_ORDER'
  | 'COLLECT_PERCENT'
  | 'COUNTRY'
  | 'CURRENCY_CONVERSION_FEE'
  | 'DDP_SERVICE_FEE'
  | 'DISBURSEMENT'
  | 'DISBURSEMENT_FEE'
  | 'DISBURSEMENT_PROCESSING'
  | 'DISCOUNT'
  | 'DUTY'
  | 'DUTY_FX'
  /** Tax on item duty - use this type when the tax is calculated on the duty amount for items */
  | 'DUTY_ITEM'
  /** Tax on shipping duty - use this type when the tax is calculated on the duty amount for shipping */
  | 'DUTY_SHIPPING'
  | 'GUARANTEE_ORDER'
  | 'GUARANTEE_PERCENT'
  | 'INCLUSIVE_PRICE_ADJUSTMENT'
  | 'INCLUSIVE_PRICING'
  | 'ITEM'
  | 'LANDED_COST'
  | 'OTHER'
  | 'PARTNER_REV_SHARE'
  | 'PREPAY_DISBURSEMENT'
  | 'PREPAY_DISBURSEMENT_FEE'
  | 'PREPAY_FEE'
  | 'PREPAY_PERCENT'
  | 'PREPAY_PHOTO_DISCOUNT'
  | 'REMITTANCE_AMOUNT_REVENUE_SHARE'
  | 'REMITTANCE_FEE'
  | 'SHIPPING'
  | 'TAX'
  | 'TRANSACTION'
  | 'ZONOS_ACCESS_FEE'
  | 'ZONOS_LANDED_COST'
  | 'ZONOS_LANDED_COST_GUARANTEE'
  | 'ZONOS_MERCHANT_FEE'
  | 'ZONOS_MERCHANT_PROCESSING'
  | 'ZONOS_TRANSACTION';

export type ZonosLandedCostFilter = {
  /** Return `LandedCost` resources created after a given (inclusive) */
  createdAtAfter?: InputMaybe<Scalars['DateTime']>;
  /** Return `LandedCost` resources created before a given date (inclusive) */
  createdAtBefore?: InputMaybe<Scalars['DateTime']>;
  /** The currency code to filter by. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** The destination party name to filter by. */
  destinationPartyName?: InputMaybe<Scalars['String']>;
  /** Query string to search for landed cost ID or destination party name */
  q?: InputMaybe<Scalars['String']>;
  /** The quote type to filter by. */
  quoteType?: InputMaybe<ZonosLandedCostQuoteType>;
  /** The service levels to filter by. */
  serviceLevels?: InputMaybe<Array<Scalars['String']>>;
  /** The ship from country to filter by. */
  shipFromCountry?: InputMaybe<ZonosCountryCode>;
  /** The ship to country to filter by. */
  shipToCountry?: InputMaybe<ZonosCountryCode>;
};

/** any enum added here also needs to be added in orderService legacy. bounce orderDgs add logic to feeContext accordingly and landedCostBillingRuleContext */
export type ZonosLandedCostGuaranteeCode =
  | 'COLLECT_REMITTANCE'
  /** Zonos covers any landed cost discrepancies and this quote has inclusive price items in it. */
  | 'INCLUSIVE_PRICE'
  /** No guarantee */
  | 'NOT_APPLICABLE'
  | 'POSTAL_DDP'
  | 'POSTAL_DDP_INCLUSIVE_PRICE'
  /** Zonos covers any landed cost discrepancies */
  | 'ZONOS';

export type ZonosLandedCostInput = {
  /** The arrival date for the package. */
  arrivalDate?: InputMaybe<Scalars['DateTime']>;
  /** The method to use for the landed cost calculation. */
  calculationMethod?: InputMaybe<ZonosLandedCostCalculationMethod>;
  /** Currency to use for the landed cost subtotals. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** Indicates what use the goods being quoted for will have */
  endUse: ZonosLandedCostEndUse;
  /** @Deprecated use calculationMethod */
  method?: InputMaybe<ZonosIncotermCode>;
  /** `Root` resource that this `LandedCost` will belong to */
  rootId: Scalars['ID'];
  /** Indicates what method Zonos should use to calculate the tariff rates for this quote */
  tariffRate: ZonosLandedCostTariffRate;
};

/** Represents the links associated with the LandedCost */
export type ZonosLandedCostLink = {
  __typename?: 'LandedCostLink';
  key: Scalars['String'];
  /** Url of the link */
  url: Scalars['String'];
};

/** Represents a key/value metadata entry associated with a `LandedCost` */
export type ZonosLandedCostMetadata = {
  __typename?: 'LandedCostMetadata';
  /** The key used to identify this metadata entry. */
  key: Scalars['String'];
  /** The value of this metadata entry. */
  value: Scalars['String'];
};

export type ZonosLandedCostMetadataInput = {
  /** The key used to identify this metadata entry. */
  key: Scalars['String'];
  /** The value of this metadata entry. */
  value: Scalars['String'];
};

/** The method to use for the landed cost calculation. */
export type ZonosLandedCostMethod =
  /** Only provide a DAP quote */
  | 'DAP_FORCED'
  /** Provide both a DDP and DAP quote */
  | 'DDP_AND_DAP'
  /** Only provide a DDP */
  | 'DDP_FORCED'
  /** provide a DDP quote but return a DAP quote if DDP is not allowed */
  | 'DDP_PREFERRED';

export type ZonosLandedCostPaymentProcessor =
  | 'PAYPAL'
  | 'STRIPE';

export type ZonosLandedCostQuoteType =
  /** this is the default quote type */
  | 'API'
  /** quote generated to create a collect cart */
  | 'COLLECT'
  /** This is the landed cost associated with an invoice that can either be paid by a third party or joined with other to form a larger invoice */
  | 'INVOICE_COLLECT'
  /** This represents the type of quote where shipping, duty, tax and fees are possible collection items */
  | 'LABEL_COLLECT'
  /** quote generated to create a prepay collect cart */
  | 'PREPAY_COLLECT'
  /** This is used to create an invoice similar to API but it is for the collection of duties (Usually represents imports to the US) */
  | 'PREPAY_INVOICE';

/** Represents the tax remittance values required by specific entities. */
export type ZonosLandedCostRemittance = {
  __typename?: 'LandedCostRemittance';
  /** The price amount of the tax remittance. */
  amount: Scalars['Decimal'];
  /** The type of tax remittance. */
  description: Scalars['String'];
  /** A note on where to remit the tax remittance. */
  note: Scalars['String'];
  /** The taxId that will be used for tax remittance. */
  taxId: Maybe<Scalars['String']>;
};

/** Attributes for the LandedCostSettings */
export type ZonosLandedCostSettingsAttributes = {
  __typename?: 'LandedCostSettingsAttributes';
  /** The key for the attributes */
  key: Scalars['String'];
  /** The value for the attributes */
  value: Scalars['String'];
};

export type ZonosLandedCostSettingsAttributesInput = {
  /** The key for the attributes */
  key: Scalars['String'];
  /** The value for the attributes */
  value: Scalars['String'];
};

/** Metadata for the LandedCostSettings */
export type ZonosLandedCostSettingsMetadata = {
  __typename?: 'LandedCostSettingsMetadata';
  /** The key for the metadata */
  key: Scalars['String'];
  /** The value for the metadata */
  value: Scalars['String'];
};

export type ZonosLandedCostSettingsMetadataInput = {
  /** The key for the metadata */
  key: Scalars['String'];
  /** The value for the metadata */
  value: Scalars['String'];
};

export type ZonosLandedCostTariffRate =
  /** Exact tariff rate for provided HS code will be used. If not possible, an error will be returned */
  | 'EXACT'
  /** Maximum tariff rate for provided HS code will be used */
  | 'MAXIMUM'
  /** Median tariff rate for provided HS code will be used */
  | 'MEDIAN'
  /** Lowest tariff rate for provided HS code will be used */
  | 'MINIMUM'
  /** Zonos will attempt to calculate best tariff rate for provided HS code (recomended) */
  | 'ZONOS_PREFERRED';

/** Represents the Detail associated with the `LandedCostTax` */
export type ZonosLandedCostTaxAmountDetail = {
  __typename?: 'LandedCostTaxAmountDetail';
  /** Amount of the `LandedCostTaxAmountDetail` */
  amount: Maybe<Scalars['Decimal']>;
  /** The unrounded amount of the `LandedCostTaxAmountDetail` */
  amountUnrounded: Maybe<Scalars['Decimal']>;
  /** The date and time the `LandedCostTaxAmountDetail` was created */
  createdAt: Scalars['DateTime'];
  /** The currency the amount of the `LandedCostTaxAmountDetail` is in */
  currencyCode: Maybe<ZonosCurrencyCode>;
  /** The list of exchange rates ids associated with the `LandedCostTaxAmountDetail` */
  exchangeRateIds: Maybe<Array<Scalars['ID']>>;
  /** The id of the `LandedCostTaxAmountDetail` */
  id: Scalars['ID'];
  /** What the `LandedCostTaxAmountDetail` is for */
  targets: Maybe<Array<ZonosLandedCostAmountTargetType>>;
  /** The type of the `LandedCostTaxAmountDetail` */
  type: Maybe<Scalars['String']>;
};

export type ZonosLandedCostWeightUnit =
  | 'CG'
  | 'CT'
  | 'G'
  | 'KG'
  | 'LB'
  | 'MG'
  | 'OZ'
  | 'T';

export type ZonosLandedCostWorkFlowInput = {
  /** Object used to indicate adjustments from discounts, promo codes, etc. */
  adjustments?: InputMaybe<Array<InputMaybe<ZonosLandedCostAdjustmentInput>>>;
  /** The arrival date for the package. */
  arrivalDate?: InputMaybe<Scalars['DateTime']>;
  /** The method to use for the landed cost calculation. */
  calculationMethod?: InputMaybe<ZonosLandedCostCalculationMethod>;
  /** Currency to use for the landed cost subtotals. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** Indicates what use the goods being quoted for will have */
  endUse: ZonosLandedCostEndUse;
  /** A list of key/value metadata to associate with this `LandedCost`. */
  metadata?: InputMaybe<Array<ZonosLandedCostMetadataInput>>;
  /** @Deprecated use calculationMethod */
  method?: InputMaybe<ZonosIncotermCode>;
  /** The type of quote to generate. */
  quoteType?: InputMaybe<ZonosLandedCostQuoteType>;
  /** Id of the landed cost associated with a source LCG transaction. This is provided only when changes are required to an LCG transaction that would require a re-calculation of duties, taxes and fees. The source landed cost must fall within the guarantee window (default: 90 days) and have the same parties and currencies as the re-calculated landed cost. */
  sourceLandedCostId?: InputMaybe<Scalars['String']>;
  /** Indicates what method Zonos should use to calculate the tariff rates for this quote */
  tariffRate: ZonosLandedCostTariffRate;
};

export type ZonosLanguageCode =
  /** Afrikaans */
  | 'AF'
  /** Amharic */
  | 'AM'
  /** Arabic */
  | 'AR'
  /** Azerbaijani */
  | 'AZ'
  /** Belarusian */
  | 'BE'
  /** Bulgarian */
  | 'BG'
  /** Bengali */
  | 'BN'
  /** Bosnian */
  | 'BS'
  /** Catalan */
  | 'CA'
  /** Cebuano */
  | 'CEB'
  /** Corsican */
  | 'CO'
  /** Czech */
  | 'CS'
  /** Welsh */
  | 'CY'
  /** Danish */
  | 'DA'
  /** German */
  | 'DE'
  /** Greek */
  | 'EL'
  /** English */
  | 'EN'
  /** Esperanto */
  | 'EO'
  /** Spanish */
  | 'ES'
  /** Estonian */
  | 'ET'
  /** Basque */
  | 'EU'
  /** Persian */
  | 'FA'
  /** Finnish */
  | 'FI'
  /** French */
  | 'FR'
  /** Frisian */
  | 'FY'
  /** Irish */
  | 'GA'
  /** Scots Gaelic */
  | 'GD'
  /** Galician */
  | 'GL'
  /** Gujarati */
  | 'GU'
  /** Hausa */
  | 'HA'
  /** Hawaiian */
  | 'HAW'
  /** Hebrew (2 possible values) */
  | 'HE'
  /** Hindi */
  | 'HI'
  /** Hmong */
  | 'HMN'
  /** Croatian */
  | 'HR'
  /** Haitian Creole */
  | 'HT'
  /** Hungarian */
  | 'HU'
  /** Armenian */
  | 'HY'
  /** Indonesian */
  | 'ID'
  /** Igbo */
  | 'IG'
  /** Icelandic */
  | 'IS'
  /** Italian */
  | 'IT'
  | 'IW'
  /** Japanese */
  | 'JA'
  /** Javanese */
  | 'JV'
  /** Georgian */
  | 'KA'
  /** Kazakh */
  | 'KK'
  /** Khmer */
  | 'KM'
  /** Kannada */
  | 'KN'
  /** Korean */
  | 'KO'
  /** Kurdish */
  | 'KU'
  /** Kyrgyz */
  | 'KY'
  /** Luxembourgish */
  | 'LB'
  /** Lao */
  | 'LO'
  /** Lithuanian */
  | 'LT'
  /** Latvian */
  | 'LV'
  /** Malagasy */
  | 'MG'
  /** Maori */
  | 'MI'
  /** Macedonian */
  | 'MK'
  /** Malayalam */
  | 'ML'
  /** Mongolian */
  | 'MN'
  /** Marathi */
  | 'MR'
  /** Malay */
  | 'MS'
  /** Maltese */
  | 'MT'
  /** Myanmar (Burmese) */
  | 'MY'
  /** Napali */
  | 'NE'
  /** Dutch */
  | 'NL'
  /** Norwegian */
  | 'NO'
  /** Nyanja (Chichewa) */
  | 'NY'
  /** Odia (Oriya) */
  | 'OR'
  /** Punjabi */
  | 'PA'
  /** Polish */
  | 'PL'
  /** Pashto */
  | 'PS'
  /** Portuguese (Portugal, Brazil) */
  | 'PT'
  /** Romanian */
  | 'RO'
  /** Russian */
  | 'RU'
  /** Kinyarwanda */
  | 'RW'
  /** Sindhi */
  | 'SD'
  /** Sinhala (Sinhalese) */
  | 'SI'
  /** Slovak */
  | 'SK'
  /** Slovenian */
  | 'SL'
  /** Samoan */
  | 'SM'
  /** Shona */
  | 'SN'
  /** Somali */
  | 'SO'
  /** Albanian */
  | 'SQ'
  /** Serbian */
  | 'SR'
  /** Sesotho */
  | 'ST'
  /** Sundanese */
  | 'SU'
  /** Swedish */
  | 'SV'
  /** Swahili */
  | 'SW'
  /** Tamil */
  | 'TA'
  /** Telugu */
  | 'TE'
  /** Tajik */
  | 'TG'
  /** Thai */
  | 'TH'
  /** Turkmen */
  | 'TK'
  /** Tagalog (Filipino) */
  | 'TL'
  /** Turkish */
  | 'TR'
  /** Tatar */
  | 'TT'
  /** Uyghur */
  | 'UG'
  /** Ukrainian */
  | 'UK'
  /** Urdu */
  | 'UR'
  /** Uzbek */
  | 'UZ'
  /** Vietnamese */
  | 'VI'
  /** Xhosa */
  | 'XH'
  /** Yiddish */
  | 'YI'
  /** Yoruba */
  | 'YO'
  /** Chinese (Simplified) */
  | 'ZH_CN'
  /** Chinese (Traditional) */
  | 'ZH_TW'
  /** Zulu */
  | 'ZU';

export type ZonosLcgBillingMethod =
  | 'BILLING_DGS'
  | 'LEGACY';

/** An implementation of `ReconciliationCharge` that represents an `OrderTransaction` used in Legacy APIs */
export type ZonosLegacyOrderTransactionCharge = ZonosReconciliationCharge & {
  __typename?: 'LegacyOrderTransactionCharge';
  /** The sum of the transaction fees for this `LegacyOrderTransaction` */
  amount: Scalars['Decimal'];
  /** Date and time of when this `LegacyOrderTransactionCharge` object was created */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created this `LegacyOrderTransactionCharge` */
  createdBy: Scalars['ID'];
  /** The currency the amount is displayed in */
  currencyCode: ZonosCurrencyCode;
  /** A unique identifier for this `LegacyOrderTransactionCharge` */
  id: Scalars['ID'];
  /** The ID of the legacy order transaction this object represents */
  legacyOrderTransactionId: Scalars['Int'];
  /** An optional note about this `LegacyOrderTransactionCharge` */
  note: Maybe<Scalars['String']>;
  /** A list of `TransactionFee` objects to describe transaction amounts */
  transactionFees: Array<ZonosTransactionFee>;
};

export type ZonosLocalizedItemContent = {
  __typename?: 'LocalizedItemContent';
  /** Categories of the extracted item */
  categories: Maybe<Array<Scalars['String']>>;
  /** Description of the extracted item */
  description: Maybe<Scalars['String']>;
  /** Language of the localized item */
  language: ZonosLanguageCode;
  /** Materials of the extracted item */
  materials: Maybe<Scalars['String']>;
  /** Name of the extracted item */
  name: Scalars['String'];
};

/** Represents a geographical location, including administrative and geographical details. */
export type ZonosLocation = {
  __typename?: 'Location';
  /** The name of the administrative area (e.g., state, province, region) where the location resides. */
  administrativeArea: Maybe<Scalars['String']>;
  /** The code representing the administrative area (e.g., a state or province code). */
  administrativeAreaCode: Maybe<Scalars['String']>;
  /** The ISO 3166-1 alpha-2 code of the country where the location is situated. */
  countryCode: ZonosCountryCode;
  /** The timestamp when the location was created. */
  createdAt: Scalars['DateTime'];
  /** The ID of the user or system that created the location record. */
  createdBy: Scalars['ID'];
  /** The unique identifier for the location. */
  id: Scalars['ID'];
  /** The latitude of the location in decimal degrees. */
  latitude: Maybe<Scalars['Decimal']>;
  /** The first line of the location's address. */
  line1: Maybe<Scalars['String']>;
  /** The second line of the location's address, if applicable. */
  line2: Maybe<Scalars['String']>;
  /** The third line of the location's address, if applicable. */
  line3: Maybe<Scalars['String']>;
  /** The fourth line of the location's address, if applicable. */
  line4: Maybe<Scalars['String']>;
  /** The locality of the location (e.g., city, town, village). */
  locality: Maybe<Scalars['String']>;
  /** The longitude of the location in decimal degrees. */
  longitude: Maybe<Scalars['Decimal']>;
  /** Additional metadata associated with the location. */
  metadata: Maybe<Array<Maybe<ZonosPartyMetadata>>>;
  /** Specifies whether the Location is in live or test mode. */
  mode: ZonosMode;
  /** The unique identifier for the organization associated with the location. */
  organization: Scalars['ID'];
  /** The Plus Code (Open Location Code) for the location, providing a compact representation of geographic coordinates. */
  plusCode: Maybe<Scalars['String']>;
  /** The postal or ZIP code of the location. */
  postalCode: Maybe<Scalars['String']>;
  /** The type of property associated with the location (e.g., RESIDENTIAL, COMMERCIAL). */
  propertyType: Maybe<ZonosPropertyType>;
  /** The timestamp when the location record was last updated. */
  updatedAt: Scalars['DateTime'];
  /** The ID of the user or system that last updated the location record. */
  updatedBy: Scalars['ID'];
};

/** Input type for creating a location (preferred). */
export type ZonosLocationCreateInput = {
  /** The name of the administrative area (e.g., state, province, region) where the location resides. */
  administrativeArea?: InputMaybe<Scalars['String']>;
  /** The code representing the administrative area (e.g., a state or province code). */
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  /** The ISO 3166-1 alpha-2 code of the country where the location is situated. */
  countryCode: ZonosCountryCode;
  /** The latitude of the location in decimal degrees. */
  latitude?: InputMaybe<Scalars['Decimal']>;
  /** The first line of the location's address. */
  line1?: InputMaybe<Scalars['String']>;
  /** The second line of the location's address, if applicable. */
  line2?: InputMaybe<Scalars['String']>;
  /** The third line of the location's address, if applicable. */
  line3?: InputMaybe<Scalars['String']>;
  /** The fourth line of the location's address, if applicable. */
  line4?: InputMaybe<Scalars['String']>;
  /** The locality of the location (e.g., city, town, village). */
  locality?: InputMaybe<Scalars['String']>;
  /** The longitude of the location in decimal degrees. */
  longitude?: InputMaybe<Scalars['Decimal']>;
  /** Additional metadata associated with the location. */
  metadata?: InputMaybe<Array<InputMaybe<ZonosPartyMetadataInput>>>;
  /** The Plus Code (Open Location Code) for the location, providing a compact representation of geographic coordinates. */
  plusCode?: InputMaybe<Scalars['String']>;
  /** The postal or ZIP code of the location. */
  postalCode?: InputMaybe<Scalars['String']>;
  /** The type of property associated with the location (e.g., RESIDENTIAL, COMMERCIAL). */
  propertyType?: InputMaybe<ZonosPropertyType>;
};

export type ZonosMagentoInventory = {
  __typename?: 'MagentoInventory';
  quantity: Scalars['Int'];
  sku: Scalars['String'];
};

export type ZonosMagentoInventoryItemInput = {
  quantity: Scalars['Int'];
  sku: Scalars['String'];
};

export type ZonosMagentoInventoryUpdateInput = {
  items: Array<ZonosMagentoInventoryItemInput>;
};

export type ZonosMagentoScope = {
  __typename?: 'MagentoScope';
  organizationId: Maybe<Scalars['String']>;
  /** The `Organization` associated with the MagentoSetting. */
  scope: Maybe<ZonosScope>;
  scopeId: Maybe<Scalars['String']>;
  settings: Maybe<Array<Maybe<ZonosMagentoSetting>>>;
};

export type ZonosMagentoScopeFilterInput = {
  scope?: InputMaybe<ZonosScope>;
  scopeId?: InputMaybe<Scalars['String']>;
};

export type ZonosMagentoScopeUpdateInput = {
  scope: ZonosScope;
  scopeId: Scalars['Int'];
  settings?: InputMaybe<Array<ZonosMagentoSettingsUpdateInput>>;
};

export type ZonosMagentoScopesUpdateInput = {
  scopes?: InputMaybe<Array<ZonosMagentoScopeUpdateInput>>;
};

export type ZonosMagentoSetting = {
  __typename?: 'MagentoSetting';
  /** When this Setting was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the setting. */
  createdBy: Maybe<Scalars['ID']>;
  key: Maybe<Scalars['String']>;
  /** When this Setting was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Setting. */
  updatedBy: Scalars['ID'];
  value: Maybe<Scalars['String']>;
};

export type ZonosMagentoSettingsUpdateInput = {
  key: Scalars['String'];
  value?: InputMaybe<Scalars['String']>;
};

export type ZonosMagentoStockResult = {
  __typename?: 'MagentoStockResult';
  availableQuantity: Scalars['Int'];
  sku: Scalars['String'];
  status: ZonosMagentoStockStatus;
};

export type ZonosMagentoStockStatus =
  | 'IN_STOCK'
  | 'OUT_OF_STOCK'
  | 'PARTIALLY_ALLOCABLE';

export type ZonosManifest = {
  __typename?: 'Manifest';
  /** Total monetary amount for the `Manifest` */
  amount: Scalars['Decimal'];
  /** Arrival date for the `Manifest` */
  arrivalDate: Maybe<Scalars['DateTime']>;
  /** 8-digit AWB number for the `Manifest` */
  awbNumber: Scalars['String'];
  /** 3-digit airline prefix for the `Manifest` AWB */
  awbPrefix: Scalars['String'];
  /** IATA carrier code for the `Manifest` (ex: AA, UA, DL, etc.) */
  carrierCode: Scalars['String'];
  /** Timestamp when the `Manifest` was created */
  createdAt: Scalars['DateTime'];
  /** User or system that created the `Manifest` */
  createdBy: Scalars['ID'];
  /** Code for where the `Manifest` arrives at the destination. Could be an IATA airport code (ex: SLC), port code (ex: USLAX), etc. */
  destinationCode: Scalars['String'];
  /** Unique identifier for the manifest */
  id: Scalars['ID'];
  /** Lines of the `Manifest` */
  lines: ZonosManifestLineConnection;
  /** Destination operator information */
  operatorDestination: Scalars['String'];
  /** Origin operator information */
  operatorOrigin: Scalars['String'];
  /** Code for where the `Manifest` left the country at origin. Could be an IATA airport code (ex: NRT), port code (ex: CNSHA), etc. */
  originCode: Scalars['String'];
  /** Postal operator code for the `Manifest` */
  postalOperatorCode: ZonosPostalOperatorCode;
  /** Service number for the `Manifest` (e.g. flight number, train number, etc.) */
  serviceNumber: Scalars['String'];
  /** Status updates for the `Manifest` */
  statusTransitions: Array<ZonosManifestStatusUpdate>;
  /** Transportation mode for the `Manifest`. Defaults to `AIR` */
  transportationMode: ZonosTransportationMode;
  /** Timestamp when the `Manifest` was last updated */
  updatedAt: Scalars['DateTime'];
  /** User or system that last updated the `Manifest` */
  updatedBy: Scalars['ID'];
  /** Total weight of the `Manifest` */
  weight: Scalars['Decimal'];
  /** Unit of weight measurement for the `Manifest`. */
  weightUnit: ZonosWeightUnitCode;
};


export type ZonosManifestLinesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosManifestLineFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

/** Input type for creating a location (deprecated). */
export type ZonosManifestCreateLocationInput = {
  /** The name of the administrative area (e.g., state, province, region) where the location resides. */
  administrativeArea?: InputMaybe<Scalars['String']>;
  /** The code representing the administrative area (e.g., a state or province code). */
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  /** The ISO 3166-1 alpha-2 code of the country where the location is situated. */
  countryCode: ZonosCountryCode;
  /** The latitude of the location in decimal degrees. */
  latitude?: InputMaybe<Scalars['Decimal']>;
  /** The first line of the location's address. */
  line1?: InputMaybe<Scalars['String']>;
  /** The second line of the location's address, if applicable. */
  line2?: InputMaybe<Scalars['String']>;
  /** The third line of the location's address, if applicable. */
  line3?: InputMaybe<Scalars['String']>;
  /** The fourth line of the location's address, if applicable. */
  line4?: InputMaybe<Scalars['String']>;
  /** The locality of the location (e.g., city, town, village). */
  locality?: InputMaybe<Scalars['String']>;
  /** The longitude of the location in decimal degrees. */
  longitude?: InputMaybe<Scalars['Decimal']>;
  /** Additional metadata associated with the location. */
  metadata?: InputMaybe<Array<InputMaybe<ZonosPartyMetadataInput>>>;
  /** The Plus Code (Open Location Code) for the location, providing a compact representation of geographic coordinates. */
  plusCode?: InputMaybe<Scalars['String']>;
  /** The postal or ZIP code of the location. */
  postalCode?: InputMaybe<Scalars['String']>;
  /** The type of property associated with the location (e.g., RESIDENTIAL, COMMERCIAL). */
  propertyType?: InputMaybe<ZonosPropertyType>;
};

/** Input type for creating a person (deprecated). */
export type ZonosManifestCreatePersonInput = {
  /** The company name associated with the person. */
  companyName?: InputMaybe<Scalars['String']>;
  /** The email address of the person. */
  email?: InputMaybe<Scalars['String']>;
  /** The first name of the person. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The last name of the person. */
  lastName?: InputMaybe<Scalars['String']>;
  /** Additional metadata associated with the person. */
  metadata?: InputMaybe<Array<InputMaybe<ZonosPartyMetadataInput>>>;
  /** The phone number of the person. */
  phone?: InputMaybe<Scalars['String']>;
};

/** Enumeration for the different manifest data sources */
export type ZonosManifestDataSource =
  | 'CARDIT'
  | 'PRECON'
  | 'PREDES'
  | 'RESDIT';

export type ZonosManifestInput = {
  /** Optional total monetary amount for the `Manifest` */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** Arrival date for the `Manifest` */
  arrivalDate: Scalars['DateTime'];
  /** Optional 8-digit AWB number for the `Manifest` */
  awbNumber?: InputMaybe<Scalars['String']>;
  /** Optional 3-digit airline prefix for the `Manifest` AWB */
  awbPrefix?: InputMaybe<Scalars['String']>;
  /** Carrier code for the `Manifest` (ex: AA, UA, DL, etc.) */
  carrierCode: Scalars['String'];
  /** Code for where the `Manifest` arrives at the destination. Could be an IATA airport code (ex: SLC), port code (ex: USLAX), etc. */
  destinationCode: Scalars['String'];
  /** Data source of the initial `Manifest` creation. Defaults to `CARDIT` */
  initialSource?: InputMaybe<ZonosManifestDataSource>;
  /** Optional destination operator information */
  operatorDestination?: InputMaybe<Scalars['String']>;
  /** Optional origin operator information */
  operatorOrigin?: InputMaybe<Scalars['String']>;
  /** Optional code for where the `Manifest` left the country at origin. Could be an IATA airport code (ex: NRT), port code (ex: CNSHA), etc. */
  originCode?: InputMaybe<Scalars['String']>;
  /** Postal operator code for the `Manifest` */
  postalOperatorCode: ZonosPostalOperatorCode;
  /** Service number for the `Manifest` (e.g. flight number, train number, etc.) */
  serviceNumber: Scalars['String'];
  /** Optional transportation mode for the `Manifest`. Defaults to `AIR` */
  transportationMode?: InputMaybe<ZonosTransportationMode>;
  /** Optional total weight of the `Manifest` */
  weight?: InputMaybe<Scalars['Decimal']>;
  /** Unit of weight measurement for the `Manifest`. Must be provided if weight is provided */
  weightUnit?: InputMaybe<ZonosWeightUnitCode>;
};

export type ZonosManifestLine = {
  __typename?: 'ManifestLine';
  /** Arrival date for the `Manifest` */
  arrivalDate: Scalars['DateTime'];
  /** Timestamp when the `ManifestLine` was created */
  createdAt: Scalars['DateTime'];
  /** User or system that created the `ManifestLine` */
  createdBy: Scalars['ID'];
  /** Currency code for the `ManifestLine` */
  currencyCode: ZonosCurrencyCode;
  /** End use classification for the `ManifestLine` */
  endUse: ZonosManifestLineEndUse;
  /** Unique `ManifestLine` identifier */
  id: Scalars['ID'];
  /** `LandedCost` of the `ManifestLine` */
  landedCost: Maybe<ZonosLandedCost>;
  /** Reference to the `Manifest` containing this `ManifestLine` */
  manifestId: Scalars['ID'];
  /** Reference number for the `ManifestLine`. Must be unique, used for duplicate prevention. */
  referenceNumber: Maybe<Scalars['String']>;
  /** Tracking number for this `ManifestLine` */
  trackingNumber: Scalars['String'];
  /** Timestamp when the `ManifestLine` was last updated */
  updatedAt: Scalars['DateTime'];
  /** User or system that last updated the `ManifestLine` */
  updatedBy: Scalars['ID'];
};

export type ZonosManifestLineConnection = {
  __typename?: 'ManifestLineConnection';
  /** Field edges */
  edges: Array<ZonosManifestLineEdge>;
  /** Field pageInfo */
  pageInfo: ZonosPageInfo;
  /** Field totalCount */
  totalCount: Scalars['Int'];
};

export type ZonosManifestLineEdge = {
  __typename?: 'ManifestLineEdge';
  /** Field cursor */
  cursor: Scalars['String'];
  /** Field node */
  node: ZonosManifestLine;
};

export type ZonosManifestLineEndUse =
  | 'DOCUMENTS'
  | 'FOR_RESALE'
  | 'GIFT'
  | 'NOT_FOR_RESALE'
  | 'RETURN';

export type ZonosManifestLineFilter = {
  /** Filter matching `ManifestLine` records based on matching `trackingNumber` field */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type ZonosManifestLineInput = {
  /** Currency code for all items in the `ManifestLine` */
  currencyCode: ZonosCurrencyCode;
  /** End use classification for the `ManifestLine` */
  endUse: ZonosManifestLineEndUse;
  /** Items of the `ManifestLine` */
  items: Array<ZonosManifestLineItemInput>;
  /** Parties of the `ManifestLine` */
  parties: Array<ZonosManifestPartyCreateWorkflowInput>;
  /** Reference number for the `ManifestLine`. If provided, must be unique as it is used for duplicate prevention. */
  referenceNumber?: InputMaybe<Scalars['String']>;
  /** The organization or vendorExternalId of the partner org. */
  shipperAccountId?: InputMaybe<Scalars['String']>;
  /** Tracking number for the `ManifestLine` */
  trackingNumber: Scalars['String'];
};

export type ZonosManifestLineItemInput = {
  /** Declared value of the item. If not provide the totalAmount is required. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** 2-letter ISO country code of origin for the item */
  countryOfOrigin: ZonosCountryCode;
  /** Detailed description of the item */
  description?: InputMaybe<Scalars['String']>;
  /** Harmonized System commodity code */
  hsCode?: InputMaybe<Scalars['String']>;
  /** Name of the item */
  name?: InputMaybe<Scalars['String']>;
  /** Product ID for the item */
  productId?: InputMaybe<Scalars['String']>;
  /** Quantity of items */
  quantity: Scalars['Int'];
  /** External reference number for the item */
  referenceNumber?: InputMaybe<Scalars['String']>;
  /** SKU for the item */
  sku?: InputMaybe<Scalars['String']>;
  /** Optional: The line items total amount. If provided the `amount` will be computed from the totalAmount / quantity. */
  totalAmount?: InputMaybe<Scalars['Decimal']>;
};

/** Input type for creating multiple parties in a workflow. */
export type ZonosManifestPartyCreateWorkflowInput = {
  /** The location associated with the party. */
  location?: InputMaybe<ZonosManifestCreateLocationInput>;
  /** The person associated with the party. */
  person?: InputMaybe<ZonosManifestCreatePersonInput>;
  /** The type of the party (e.g., ORIGIN, DESTINATION). */
  type: ZonosManifestPartyType;
};

/** Enumeration for the different types of parties in a manifest */
export type ZonosManifestPartyType =
  /** Represents the destination party. */
  | 'DESTINATION'
  /** Represents the origin party. */
  | 'ORIGIN'
  /** Represents the payee party. */
  | 'PAYEE'
  /** Represents the payor party. */
  | 'PAYOR';

export type ZonosManifestStatusUpdate = {
  __typename?: 'ManifestStatusUpdate';
  /** Timestamp of the `Manifest` update */
  createdAt: Scalars['DateTime'];
  /** User or system that last updated the `Manifest` */
  createdBy: Scalars['ID'];
  /** Note of the `Manifest` update */
  note: Maybe<Scalars['String']>;
  /** Source of the data for the `Manifest` update */
  source: ZonosManifestDataSource;
};

export type ZonosManifestUpdateInput = {
  /** Optional new arrival date for the `Manifest` */
  arrivalDate?: InputMaybe<Scalars['DateTime']>;
  /** Optional new carrier code for the `Manifest` */
  carrierCode?: InputMaybe<Scalars['String']>;
  /** Note for the `Manifest` update */
  note?: InputMaybe<Scalars['String']>;
  /** Optional new service number for the `Manifest` */
  serviceNumber?: InputMaybe<Scalars['String']>;
  /** Data source for the `Manifest` update */
  source: ZonosManifestDataSource;
};

export type ZonosManualClassification = {
  __typename?: 'ManualClassification';
  /** The date and time when the classification was archived. */
  archivedAt: Maybe<Scalars['DateTime']>;
  /** The ID of the user who archived the classification. */
  archivedBy: Maybe<Scalars['ID']>;
  /** The date and time when the classification was created. */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created the classification. */
  createdBy: Scalars['ID'];
  /** The Harmonized System (HS) code assigned to the item. */
  hsCode: Scalars['String'];
  /** The unique identifier of the ManualClassification. */
  id: Scalars['ID'];
  /** The unique key identifying the item associated with this classification. */
  itemKey: Scalars['String'];
  /** The ManualClassificationRequest associated with this classification. */
  manualClassificationRequest: ZonosManualClassificationRequest;
  /** The ID of the organization associated with this classification. */
  organizationId: Scalars['ID'];
  /** The country code for which this classification is applicable. If null, it is treated as universal. */
  shipToCountry: Maybe<ZonosCountryCode>;
};

export type ZonosManualClassificationBulkJob = {
  __typename?: 'ManualClassificationBulkJob';
  /** The list of Country Codes where we will make manual classifications */
  classifyToCountries: Array<ZonosCountryCode>;
  /** When this `Manual Classification Request Bulk Job` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Manual Classification Request Bulk Job. */
  createdBy: Scalars['ID'];
  /** The number of rows that errored out during import */
  errorCount: Scalars['Int'];
  /** Unsuccessful rows and their error messages */
  errorMessages: Array<ZonosManualClassificationRequestUploadError>;
  /** The hour allotment for the manual classifications in the bulk job */
  hourAllotment: Maybe<Scalars['Int']>;
  /** The ID of the ManualClassificationRequest BulkJob */
  id: Scalars['ID'];
  /** The number of manual classification requests that have been invalidated */
  invalidatedCount: Scalars['Int'];
  /** The manual classification associated with a bulk job */
  manualClassifications: Maybe<ZonosManualClassificationConnection>;
  /** The uploaded customer created name of the manual classification request bulk job usually the filename */
  name: Scalars['String'];
  /** The unique identifier associated with an organization. */
  organizationId: Scalars['ID'];
  /** The number of rows that have been successfully manually classified */
  processedCount: Scalars['Int'];
  /** Current status of the BulkJob */
  status: ZonosManualClassificationBulkJobStatus;
  /** The total number of rows in a CSV upload */
  totalCount: Scalars['Int'];
};


export type ZonosManualClassificationBulkJobManualClassificationsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

export type ZonosManualClassificationBulkJobConnection = {
  __typename?: 'ManualClassificationBulkJobConnection';
  edges: Array<ZonosManualClassificationBulkJobEdge>;
  pageInfo: ZonosPageInfo;
  totalCount: Scalars['Int'];
};

export type ZonosManualClassificationBulkJobEdge = {
  __typename?: 'ManualClassificationBulkJobEdge';
  cursor: Maybe<Scalars['String']>;
  node: ZonosManualClassificationBulkJob;
};

export type ZonosManualClassificationBulkJobInitializeResponse = {
  __typename?: 'ManualClassificationBulkJobInitializeResponse';
  manualClassificationBulkJob: ZonosManualClassificationBulkJob;
  uploadUrl: Scalars['String'];
};

export type ZonosManualClassificationBulkJobStatus =
  | 'CANCELLED'
  | 'COMPLETED'
  | 'ERROR'
  | 'INITIALIZED'
  | 'MANUALLY_CLASSIFIED'
  | 'PROCESSING';

export type ZonosManualClassificationBulkJobUrlResponse = {
  __typename?: 'ManualClassificationBulkJobUrlResponse';
  exportUrl: Scalars['String'];
  manualClassificationBulkJob: ZonosManualClassificationBulkJob;
};

export type ZonosManualClassificationBulkJobsFilter = {
  /** Current status of the BulkJob */
  status: ZonosManualClassificationBulkJobStatus;
};

export type ZonosManualClassificationConnection = {
  __typename?: 'ManualClassificationConnection';
  edges: Array<ZonosManualClassificationEdge>;
  pageInfo: ZonosPageInfo;
  totalCount: Scalars['Int'];
};

export type ZonosManualClassificationCreateInput = {
  /** The HS code assigned to the item. */
  hsCode: Scalars['String'];
  /** The unique key identifying the item. */
  itemKey: Scalars['String'];
  organizationId: Scalars['ID'];
  /** The country code for which this classification is applicable. If null, it is treated as universal. */
  shipToCountry?: InputMaybe<ZonosCountryCode>;
  /** Visibility status of the provided HS code. */
  visibilityStatus?: InputMaybe<ZonosProvidedHsCodeVisibilityStatus>;
};

export type ZonosManualClassificationEdge = {
  __typename?: 'ManualClassificationEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosManualClassification>;
};

export type ZonosManualClassificationExportEdge = {
  __typename?: 'ManualClassificationExportEdge';
  cursor: Maybe<Scalars['String']>;
  node: ZonosManualClassificationExportJob;
};

export type ZonosManualClassificationExportInput = {
  /** Filters manual classifications created after a specific date. */
  createdAfter?: InputMaybe<Scalars['DateTime']>;
  /** Filters manual classifications created before a specific date. */
  createdBefore?: InputMaybe<Scalars['DateTime']>;
};

export type ZonosManualClassificationExportJob = {
  __typename?: 'ManualClassificationExportJob';
  /** Filters manual classifications created after a specific date. */
  createdAfter: Scalars['DateTime'];
  /** Creation date of the job. */
  createdAt: Scalars['DateTime'];
  /** Filters manual classifications created before a specific date. */
  createdBefore: Scalars['DateTime'];
  /** ID of the user who created the job. */
  createdBy: Scalars['ID'];
  /** The url where the csv has been uploaded to */
  exportUrl: Scalars['String'];
  /** Unique identifier of the job. */
  id: Scalars['ID'];
  /** ID of the associated organization. */
  organizationId: Scalars['ID'];
  /** Count of processed items in the job. */
  processedCount: Scalars['Int'];
  /** Current status of the job. */
  status: ZonosManualClassificationExportJobStatus;
  /** Total count of items to process in the job. */
  totalCount: Scalars['Int'];
};

export type ZonosManualClassificationExportJobConnection = {
  __typename?: 'ManualClassificationExportJobConnection';
  edges: Array<ZonosManualClassificationExportEdge>;
  pageInfo: ZonosPageInfo;
  totalCount: Scalars['Int'];
};

export type ZonosManualClassificationExportJobStatus =
  | 'COMPLETED'
  | 'ERROR'
  | 'INITIALIZED'
  | 'PROCESSING';

export type ZonosManualClassificationExportJobsFilter = {
  /** Current status of the ExportJob */
  status: ZonosManualClassificationExportJobStatus;
};

export type ZonosManualClassificationRequest = {
  __typename?: 'ManualClassificationRequest';
  /** The date and time when the request was archived. */
  archivedAt: Maybe<Scalars['DateTime']>;
  /** The ID of the user who archived the request. */
  archivedBy: Maybe<Scalars['ID']>;
  /** Categories associated with the item to be classified. */
  categories: Maybe<Array<Scalars['String']>>;
  /** The unique identifier of the classification associated with this request. */
  classification: Maybe<ZonosClassification>;
  /** The confidence score associated with the classification request. */
  confidenceScore: Maybe<Scalars['Decimal']>;
  /** The date and time when the request was created. */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created the request. */
  createdBy: Scalars['ID'];
  /** A description of the item to be classified. */
  description: Maybe<Scalars['String']>;
  /** The due date for completing the manual classification. */
  dueAt: Scalars['DateTime'];
  /** The probability that a classification hint will be displayed to the manual classifier. */
  hintDisplayProbability: Maybe<Scalars['Decimal']>;
  /** The unique identifier of the ManualClassificationRequest. */
  id: Scalars['ID'];
  /** The URL of an image of the item to be classified. */
  imageUrl: Maybe<Scalars['String']>;
  /** The unique key identifying the item to be classified. */
  itemKey: Scalars['String'];
  /** The material composition of the item, if applicable. */
  material: Maybe<Scalars['String']>;
  /** The name or title of the item to be classified. */
  name: Scalars['String'];
  /** The ID of the organization making the classification request. */
  organizationId: Scalars['ID'];
  /** The provided HS code for the item. */
  providedHsCode: Scalars['String'];
  /** The source of the provided HS code for the item. */
  providedHsCodeSource: ZonosProvidedHsCodeSource;
  /** The ID of the user who has reserved the request. */
  reservedBy: Maybe<Scalars['ID']>;
  /** The date and time when the request was reserved. */
  reservedUntil: Maybe<Scalars['DateTime']>;
  /** The country code for which this classification request is applicable. */
  shipToCountry: Maybe<ZonosCountryCode>;
  /** The status of the manual classification request. */
  status: ZonosManualClassificationRequestStatus;
};

export type ZonosManualClassificationRequestConnection = {
  __typename?: 'ManualClassificationRequestConnection';
  edges: Array<ZonosManualClassificationRequestEdge>;
  pageInfo: ZonosPageInfo;
  totalCount: Scalars['Int'];
};

export type ZonosManualClassificationRequestCreateInput = {
  /** Categories associated with the classification request. */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** Confidence score of the automatic classification, if any. */
  confidenceScore?: InputMaybe<Scalars['Decimal']>;
  /** Description of the item for manual classification. */
  description?: InputMaybe<Scalars['String']>;
  /** The probability that a classification hint will be displayed to the manual classifier. */
  hintDisplayProbability?: InputMaybe<Scalars['Decimal']>;
  /** URL of the item's image for reference. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** Unique key identifying the item to be classified. */
  itemKey: Scalars['String'];
  /** Material composition of the item, if known. */
  material?: InputMaybe<Scalars['String']>;
  /** Name or title of the item. */
  name: Scalars['String'];
  /** HS code provided by the requester, if any. */
  providedHsCode?: InputMaybe<Scalars['String']>;
  /** The source of the provided HS code for the item. */
  providedHsCodeSource?: InputMaybe<ZonosProvidedHsCodeSource>;
  /** Country code for the ship-to country. */
  shipToCountry?: InputMaybe<ZonosCountryCode>;
};

export type ZonosManualClassificationRequestCreateResponse = {
  __typename?: 'ManualClassificationRequestCreateResponse';
  manualClassificationRequest: ZonosManualClassificationRequest;
  result: ZonosManualClassificationRequestCreateStatus;
};

export type ZonosManualClassificationRequestCreateStatus =
  /** The request was created successfully. */
  | 'CREATED'
  /** The request was not created successfully. */
  | 'EXISTING';

export type ZonosManualClassificationRequestEdge = {
  __typename?: 'ManualClassificationRequestEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosManualClassificationRequest>;
};

export type ZonosManualClassificationRequestStatus =
  | 'COMPLETED'
  | 'INVALIDATED'
  | 'PENDING'
  | 'RESERVED';

export type ZonosManualClassificationRequestUploadError = {
  __typename?: 'ManualClassificationRequestUploadError';
  message: Scalars['String'];
  rowNumber: Scalars['Int'];
};

export type ZonosManualClassificationRequestsFilter = {
  /** Filters requests created after a specific date. */
  createdAfter?: InputMaybe<Scalars['DateTime']>;
  /** Filters requests created before a specific date. */
  createdBefore?: InputMaybe<Scalars['DateTime']>;
  /** Filters requests due after a specific date. */
  dueAfter?: InputMaybe<Scalars['DateTime']>;
  /** Filters requests due before a specific date. */
  dueBefore?: InputMaybe<Scalars['DateTime']>;
  /** Filters requests associated with a specific itemKey. */
  itemKey?: InputMaybe<Scalars['String']>;
  /** Filters requests associated with a specific organization ID. */
  organizationId?: InputMaybe<Scalars['ID']>;
  /** Filters requests that are due before the current time */
  overdue?: InputMaybe<Scalars['Boolean']>;
  /** Filters requests intended to ship to a specific country. */
  shipToCountry?: InputMaybe<ZonosCountryCode>;
  /** Determines the sorting order of the requests, defaults to priority. */
  sort?: InputMaybe<Array<InputMaybe<ZonosManualClassificationRequestsSorting>>>;
  /** Filters requests by their status, default is pending. */
  status?: InputMaybe<ZonosManualClassificationRequestStatus>;
};

export type ZonosManualClassificationRequestsReserveInput = {
  /** Defines the amount of `ManualClassificationRequest`s to reserve. Defaults to 50. */
  reservationAmount?: InputMaybe<Scalars['Int']>;
};

export type ZonosManualClassificationRequestsSorting =
  | 'HS_CODE'
  | 'PRIORITY';

export type ZonosManualClassificationSetting = {
  __typename?: 'ManualClassificationSetting';
  /** The date and time when the setting was created. */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created the setting. */
  createdBy: Scalars['ID'];
  /** The maximum amount of hours allotted for a manual classification request fullfillment */
  hourAllotment: Scalars['Int'];
  /** The unique identifier of the ManualClassificationSetting. */
  id: Scalars['ID'];
  /** The minimum amount of confidence in a classification before it is sent to the Manual Classification Queue. It cannot be higher than .50 */
  minConfidenceThreshold: Scalars['Decimal'];
  /** The ID of the organization this setting applies to. */
  organizationId: Scalars['ID'];
  /** The fields in a classification request that if changed, will trigger manual classification eligibility. */
  sensitiveFields: Array<ZonosClassificationRequestField>;
  /** The status of the manual classification setting. If disabled, manual classification will not be triggered. */
  status: ZonosManualClassificationSettingStatus;
  /** The date and time when the setting was last updated. */
  updatedAt: Scalars['DateTime'];
  /** The ID of the user who last updated the setting. */
  updatedBy: Scalars['ID'];
};

export type ZonosManualClassificationSettingCreateInput = {
  /** The maximum amount of hours allotted for a manual classification request fullfillment */
  hourAllotment: Scalars['Int'];
  /** The minimum confidence score a `Classification` can have before triggering a `ManualClassificationRequest`. */
  minConfidenceThreshold: Scalars['Decimal'];
  /** The fields in a classification request that if changed, will trigger manual classification eligibility. */
  sensitiveFields: Array<ZonosClassificationRequestField>;
  /** The status of the manual classification setting. If disabled, manual classification request will not be triggered. */
  status?: InputMaybe<ZonosManualClassificationSettingStatus>;
};

export type ZonosManualClassificationSettingStatus =
  | 'DISABLED'
  | 'ENABLED';

export type ZonosManualClassificationSettingUpdateInput = {
  /** The maximum amount of hours allotted for a manual classification request fullfillment */
  hourAllotment?: InputMaybe<Scalars['Int']>;
  /** The updated minimum confidence score threshold for manual classification. */
  minConfidenceThreshold?: InputMaybe<Scalars['Decimal']>;
  /** The fields in a classification request that if changed, will trigger manual classification eligibility. */
  sensitiveFields?: InputMaybe<Array<ZonosClassificationRequestField>>;
  /** The status of the manual classification setting. If disabled, manual classification request will not be triggered. */
  status?: InputMaybe<ZonosManualClassificationSettingStatus>;
};

export type ZonosManualClassificationStageUploadInput = {
  /** The list of Country Codes where we will make manual classifications */
  classifyToCountries?: InputMaybe<Array<ZonosCountryCode>>;
  /** The fileName of the Bulk Job */
  fileName: Scalars['String'];
  /** The hour allotment for the manual classifications in the bulk job */
  hourAllotment?: InputMaybe<Scalars['Int']>;
};

export type ZonosManualClassificationStatus =
  | 'ACTIVE'
  | 'ARCHIVED';

export type ZonosManualClassificationValidateInput = {
  /** Categories of the item. */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** The description of the item. */
  description?: InputMaybe<Scalars['String']>;
  /** Unique key identifying the item to be classified. */
  itemKey: Scalars['String'];
  /** The name or title of the item. */
  name?: InputMaybe<Scalars['String']>;
  /** The country code for which this classification is applicable. If null, it is treated as universal. */
  shipToCountry?: InputMaybe<ZonosCountryCode>;
};

export type ZonosManualClassificationValidateResponse = {
  __typename?: 'ManualClassificationValidateResponse';
  invalidManualClassificationRequests: Array<ZonosManualClassificationRequest>;
  invalidManualClassifications: Array<ZonosManualClassification>;
  validManualClassification: Maybe<ZonosManualClassification>;
};

export type ZonosManualClassificationsFilter = {
  /** Filters manual classifications created after a specific date. */
  createdAfter?: InputMaybe<Scalars['DateTime']>;
  /** Filters manual classifications created before a specific date. */
  createdBefore?: InputMaybe<Scalars['DateTime']>;
  /** Filters based on the user who performed the manual classification */
  createdBy?: InputMaybe<Scalars['ID']>;
  /** Filters classifications associated with a specific item key. */
  itemKey?: InputMaybe<Scalars['String']>;
  /** Filters classifications intended for a specific ship-to country. */
  shipToCountries?: InputMaybe<Array<ZonosCountryCode>>;
  /** Filters classifications by their status. */
  status?: InputMaybe<ZonosManualClassificationStatus>;
  /** Filters based on the visibility status of the providedHsCode at the time of manual classification. */
  visibilityStatus?: InputMaybe<ZonosProvidedHsCodeVisibilityStatus>;
};

export type ZonosMarketProfileContext =
  | 'DISABLED'
  | 'ENABLED';

/** They type of match found on the party screening. */
export type ZonosMatchType =
  /** The field matched exactly with the potential denied party. */
  | 'EXACT_MATCH'
  /** The field partially matched with the potential denied party. */
  | 'NO_MATCH'
  /** The field partially matched with the potential denied party. */
  | 'PARTIAL_MATCH';

export type ZonosMatchedExtraction = {
  __typename?: 'MatchedExtraction';
  /** The AI-extracted content that matched this item */
  extractedContent: ZonosLocalizedItemContent;
  /** Confidence score of the match (0-1) */
  matchConfidence: Maybe<Scalars['Decimal']>;
  /** Whether the quantities match */
  quantityMatched: Scalars['Boolean'];
};

export type ZonosMatchedRestriction = {
  __typename?: 'MatchedRestriction';
  /** The carrier this restriction applies to (null = general restriction). */
  carrierCode: Maybe<ZonosRestrictionCarrier>;
  /** The category determines what action the merchant needs to take. */
  category: Maybe<ZonosRestrictionCategory>;
  /** Confidence level: HIGH, MEDIUM, or LOW. */
  confidence: ZonosRestrictionConfidence;
  /** Model confidence score (0-1) indicating how confident the AI is that this restriction applies. */
  confidenceScore: Maybe<Scalars['Decimal']>;
  /** The HS code this restriction applies to. */
  hsCode: Scalars['String'];
  /** Restriction ID. */
  id: Scalars['ID'];
  /** Country or bloc (e.g. EU) imposing this restriction (null = applies everywhere). */
  imposingCountryCode: Maybe<Scalars['String']>;
  /** Whether this is an IMPORT or EXPORT measure. */
  measureDirection: Maybe<ZonosMeasureDirection>;
  /** Arbitrary metadata for this matched restriction (e.g. carrier-specific flags). */
  metadata: Maybe<Array<ZonosMatchedRestrictionMetadata>>;
  /** AI-generated summary of the restriction. */
  summary: Scalars['String'];
  /** URL to the source regulation or documentation. */
  url: Maybe<Scalars['String']>;
};

/** A key-value pair for arbitrary metadata. */
export type ZonosMatchedRestrictionMetadata = {
  __typename?: 'MatchedRestrictionMetadata';
  /** The key. */
  key: Scalars['String'];
  /** The value. */
  value: Scalars['String'];
};

/** A declared item that was successfully matched to an extracted image item */
export type ZonosMatchedValidatedItem = {
  __typename?: 'MatchedValidatedItem';
  /** Country of origin validation result (if declaredCountryOfOrigin provided) */
  countryOfOriginValidation: Maybe<ZonosCountryOfOriginValidation>;
  /** The declared content provided by the user */
  declaredContent: ZonosDeclaredItemContent;
  /** The AI-extracted content from the image */
  extractedContent: ZonosExtractedItemContent;
  /** HS code validation result (if declaredHsCode provided) */
  hsCodeValidation: Maybe<ZonosClassification>;
  /** Unique identifier */
  id: Scalars['ID'];
  /** Confidence score of the match (0-1) */
  matchConfidence: Scalars['Decimal'];
  /** Whether the declared and extracted quantities match */
  quantityMatched: Scalars['Boolean'];
  /** Value validation result (if declaredValue provided) */
  valueValidation: Maybe<ZonosValueValidation>;
};

export type ZonosMeasureDirection =
  | 'EXPORT'
  | 'IMPORT';

export type ZonosMerchantOfRecordType =
  /** Merchant is the merchant of record */
  | 'MERCHANT'
  /** Zonos is the merchant of record */
  | 'ZONOS';

/** A single merchant-configured policy entry. A policy is considered configured only when `link` is a non-empty URL. The wrapping object lets us extend the shape later (e.g., display name) without breaking existing consumers. */
export type ZonosMerchantPolicyLink = {
  __typename?: 'MerchantPolicyLink';
  /** The URL of the policy document. Null or empty when the merchant has not configured this policy. */
  link: Maybe<Scalars['String']>;
};

/** Input for a single merchant policy entry. Pass `link` as an empty string to clear the policy. */
export type ZonosMerchantPolicyLinkInput = {
  link?: InputMaybe<Scalars['String']>;
};

/** A set of merchant-configured policies the buyer must consent to before checkout completion. Any policy whose `link` is null or empty is hidden from the buyer. */
export type ZonosMerchantPolicyLinks = {
  __typename?: 'MerchantPolicyLinks';
  /** The merchant's Privacy Policy */
  privacyPolicy: Maybe<ZonosMerchantPolicyLink>;
  /** The merchant's Refund Policy */
  refundPolicy: Maybe<ZonosMerchantPolicyLink>;
  /** The merchant's Shipping Policy */
  shippingPolicy: Maybe<ZonosMerchantPolicyLink>;
  /** The merchant's Terms and Conditions */
  termsAndConditions: Maybe<ZonosMerchantPolicyLink>;
  /** The merchant's Warranty Policy */
  warrantyPolicy: Maybe<ZonosMerchantPolicyLink>;
};

/** Input for configuring merchant policies. For each policy: omit (or pass null) to leave unchanged, or pass a `MerchantPolicyLinkInput` to set or clear it. */
export type ZonosMerchantPolicyLinksInput = {
  privacyPolicy?: InputMaybe<ZonosMerchantPolicyLinkInput>;
  refundPolicy?: InputMaybe<ZonosMerchantPolicyLinkInput>;
  shippingPolicy?: InputMaybe<ZonosMerchantPolicyLinkInput>;
  termsAndConditions?: InputMaybe<ZonosMerchantPolicyLinkInput>;
  warrantyPolicy?: InputMaybe<ZonosMerchantPolicyLinkInput>;
};

export type ZonosMetadata = {
  __typename?: 'Metadata';
  /** The key used to identify this `Metadata` object */
  key: Scalars['String'];
  /** The value of this `Metadata` object */
  value: Scalars['String'];
};

export type ZonosMetadataInput = {
  /** The key used to identify this `Metadata` object */
  key: Scalars['String'];
  /** The value of this `Metadata` object */
  value: Scalars['String'];
};

export type ZonosMode =
  | 'LIVE'
  | 'TEST';

export type ZonosModelVersion =
  | 'BETA'
  | 'CURRENT';

export type ZonosMultiFactorAuthSetting =
  | 'DISABLED'
  | 'ENABLED';

export type ZonosMutation = {
  __typename?: 'Mutation';
  carrierAccountConnect: ZonosCarrierAccountConnectResult;
  /** Create a `CarrierBillingInvoice` */
  carrierBillingInvoiceCreate: Array<Maybe<ZonosCarrierBillingInvoice>>;
  /** Void an existing `CarrierBillingInvoice` */
  carrierBillingInvoiceVoid: Maybe<ZonosCarrierBillingInvoice>;
  /** Create a `CarrierInvoiceAccountNumberMapping` */
  carrierInvoiceAccountNumberMappingCreate: Array<Maybe<ZonosCarrierInvoiceAccountNumberMapping>>;
  /** Delete a `CarrierInvoiceAccountNumberMapping` */
  carrierInvoiceAccountNumberMappingDelete: ZonosResult;
  /** Update a `CarrierInvoiceAccountNumberMapping` */
  carrierInvoiceAccountNumberMappingUpdate: Array<Maybe<ZonosCarrierInvoiceAccountNumberMapping>>;
  /** Reconcile a `CarrierInvoiceLineItem` by manually billing a specified amount */
  carrierInvoiceLineItemBillingCreate: Array<ZonosReconciliation>;
  /** Reconcile a `CarrierInvoiceLineItem` by checking for existing billing records or transactions */
  carrierInvoiceLineItemReconcile: Array<ZonosReconciliation>;
  /** Create A new cart for a group of items */
  cartCreate: ZonosCart;
  /** Update a cart with new items or remove items */
  cartUpdate: ZonosCart;
  /** Upsert a cart */
  cartUpsert: ZonosCart;
  /** Use the current state of the cart in the workflow. */
  cartWorkflow: ZonosCart;
  /** Update the CartonizationSettings for the callers organization */
  cartonizationSettingsUpdate: ZonosCartonizationSettings;
  /** Creates a `Carton` from a workflow request */
  cartonizeWorkflow: Maybe<Array<Maybe<ZonosCarton>>>;
  /** Creates `Carton's` from a workflow request */
  cartonsCreateWorkflow: Maybe<Array<Maybe<ZonosCarton>>>;
  /** Create one or many `CatalogItem`. */
  catalogItemCreate: Array<ZonosCatalogItem>;
  /** Delete one or many `CatalogItem`. */
  catalogItemDelete: ZonosResult;
  /** Creates a new catalog item delete job. */
  catalogItemDeleteJobCreate: ZonosDeleteJob;
  /** Creates a new catalog item export job for the given catalog item IDs. */
  catalogItemExportByIds: ZonosExportJob;
  /** Creates a new catalog item export job and will send an email to the caller when complete. */
  catalogItemExportJobCreate: ZonosExportJob;
  /** Update one or many `CatalogItem`. */
  catalogItemUpdate: Array<ZonosCatalogItem>;
  /** Authenticates a Customer */
  checkoutCustomerProfileAuthenticate: ZonosCheckoutCustomerProfile;
  /** Allows an API consumer to calculate a new `Classification` using the provided inputs. */
  classificationsCalculate: Array<ZonosClassification>;
  classificationsCalculateWithAugmentation: Array<ZonosClassification>;
  /** Creates the `collectInvoiceFeeConfiguration` for the calling tokens `Organization` */
  collectInvoiceFeeConfigurationCreate: ZonosCollectInvoiceFeeConfiguration;
  /** Creates a fee for an existing CollectInvoiceFeeConfiguration */
  collectInvoiceFeeCreate: ZonosCollectInvoiceFee;
  /** Updates a fee on an existing CollectInvoiceFeeConfiguration */
  collectInvoiceFeeUpdate: ZonosCollectInvoiceFee;
  /** Adds a Zonos fee for an existing CollectInvoiceFeeConfiguration */
  collectInvoiceFeeZonosCreate: ZonosCollectInvoiceFee;
  /** Updates a Zonos fee on an existing CollectInvoiceFeeConfiguration */
  collectInvoiceFeeZonosUpdate: ZonosCollectInvoiceFee;
  collectInvoiceSettingsUpdate: ZonosCollectInvoiceSettings;
  /** Create a `CollectSubmission` object for manual invoicing. */
  collectSubmissionCreateWorkflow: ZonosCollectSubmission;
  /** Process `CollectSubmission` objects. Internal only */
  collectSubmissionProcess: Array<ZonosCollectSubmission>;
  /** Re-process existing CollectSubmission(s) in order to retry invoice creation in case of failure */
  collectSubmissionRetry: Array<ZonosCollectSubmission>;
  /** Update an existing `CollectSubmission` record with the input parameters. */
  collectSubmissionUpdate: Array<ZonosCollectSubmission>;
  /** Generate upload URLs for `CollectInvoice` objects that will share a common `Prefix` */
  collectSubmissionUploadUrlGenerate: Array<ZonosCollectSubmissionUploadUrl>;
  /** Assigns one or more consignments to a consolidation. Required before filing. */
  consignmentAssignToConsolidation: Array<ZonosConsignment>;
  /** Creates a consignment. Consolidation can be assigned inline via consolidationId, during consolidation creation via consignmentIds, or later via consignmentAssignToConsolidation. */
  consignmentCreateWorkflow: ZonosConsignment;
  /** Removes one or more consignments from their consolidation. Cannot remove consignments that have been filed. */
  consignmentRemoveFromConsolidation: Array<ZonosConsignment>;
  /** Creates a consolidation (carrier-level shipment grouping). */
  consolidationCreate: ZonosConsolidation;
  /** Files all consignments on a consolidation — submits to CBP via ABI provider. Entry creation is deferred to the entry-grouping poller. Requires at least one assigned consignment. */
  consolidationFile: ZonosConsolidation;
  /** Updates a consolidation. */
  consolidationUpdate: ZonosConsolidation;
  /** Allows an API consumer to calculate a new `CountryOfOriginInference` using the provided inputs. */
  countryOfOriginInfer: Array<ZonosCountryOfOriginInference>;
  /** Allows an API consumer to validate a new `CountryOfOriginInference` using the provided inputs. */
  countryOfOriginValidate: Array<ZonosCountryOfOriginValidation>;
  customerInvoiceFilesCreate: Array<Maybe<ZonosCustomerInvoiceFile>>;
  customsDescriptionsCreate: Array<ZonosCustomsDescription>;
  /** Creates `CustomsDocument`s from existing files and attaches them to a `Shipment` or `CustomsSpec` */
  customsDocumentCreate: Array<ZonosCustomsDocument>;
  /** Generates `CustomsDocument`s from the given inputs */
  customsDocumentGenerate: Array<ZonosCustomsDocument>;
  /** Force a refresh of the catalog for a specific lane and set of HS codes. */
  customsRequirementsRefresh: Array<ZonosCustomsRequirement>;
  /** Link an existing `CustomsSpec` to an existing `Order` */
  customsSpecConnect: Maybe<ZonosCustomsSpec>;
  /** Create a new `CustomsSpec` object */
  customsSpecCreate: Array<ZonosCustomsSpec>;
  customsSpecCreateFromOrder: Maybe<ZonosCustomsSpec>;
  /** Enhance existing customs data into a new `CustomsSpec` object */
  customsSpecGenerate: Array<ZonosCustomsSpec>;
  /** Update an existing `CustomsSpec` object */
  customsSpecUpdate: Array<ZonosCustomsSpec>;
  /** Create an 'empty' declaration to be used as a placeholder */
  declarationCreate: ZonosDeclaration;
  /** Creates a new `Declaration` */
  declarationCreateWorkflow: Array<ZonosDeclarationResult>;
  declarationShipmentCreate: ZonosResult;
  /** @deprecated use classificationSettingDelete */
  deleteClassifySetting: ZonosResult;
  /** Create a new `ExchangeRate` */
  exchangeRateCreate: Maybe<ZonosExchangeRate>;
  /** Computes Root-level compliance risk scores over the given items and parties. */
  greenLightWorkflow: ZonosGreenLight;
  /** Validates an HS code against a list of countries. */
  hsCodesValidate: Array<ZonosHsCodeValidationSummary>;
  /** Create new `Items` */
  itemCreateWorkflow: Array<ZonosItem>;
  itemRestrictionApply: ZonosItemRestrictionResult;
  itemRestrictionApplyAI: ZonosItemRestrictionResult;
  itemRestrictionApplyEphemeral: ZonosItemRestrictionResult;
  /** @deprecated use itemRestrictionResultsDelete */
  itemRestrictionResultDelete: ZonosResult;
  itemRestrictionResultsDelete: ZonosResult;
  /** Create new `Items`. */
  itemsCreate: Array<ZonosItem>;
  /** Extract Items from an Image */
  itemsExtract: Array<ZonosExtractedItem>;
  /** Validate items against HS code coherence, value, and country of origin services */
  itemsValidate: ZonosItemsValidateResponse;
  labelCreateWorkflow: Array<ZonosLabel>;
  /** Allows an API consumer to calculate a new `LandedCost` quote */
  landedCostCalculateWorkflow: Maybe<Array<Maybe<ZonosLandedCost>>>;
  /** Allows an API consumer to create a new `LandedCost` object. */
  landedCostCreate: Maybe<ZonosLandedCost>;
  /** Refunds inventory quantities for the specified items, restoring stock. */
  magentoInventoryRefund: ZonosResult;
  /** Reserves inventory quantities for the specified items. */
  magentoInventoryReserve: ZonosResult;
  /** Updates existing `MagentoScope` resources with new settings. */
  magentoScopeUpdate: Maybe<Array<Maybe<ZonosMagentoScope>>>;
  /** Creates a `Manifest`. */
  manifestCreate: ZonosManifest;
  /** Creates a new `ManifestLine` on an existing `Manifest`. */
  manifestLineCreate: ZonosManifestLine;
  /** Creates new `ManifestLine`s on an existing `Manifest`. */
  manifestLinesCreate: Array<ZonosManifestLine>;
  /** Updates an existing `Manifest`. */
  manifestUpdate: ZonosManifest;
  /** Add a note on an order */
  orderAddNote: Maybe<ZonosOrder>;
  /** Add a tracking number to an order */
  orderAddTrackingNumber: Maybe<ZonosOrder>;
  /** Cancel an order */
  orderCancel: ZonosOrder;
  /** Create an order from a landed cost quote */
  orderCreate: Maybe<ZonosOrder>;
  /** Delete a note on an order */
  orderDeleteNote: Maybe<ZonosOrder>;
  /**
   * Create an order from a legacy Zonos order
   * @deprecated Mutation no longer utilized
   */
  orderLink: Maybe<Array<Maybe<ZonosOrder>>>;
  /** Manually capture payment associated with an order */
  orderPaymentCapture: ZonosOrder;
  /** Create a new OrderRefund */
  orderRefundCreate: ZonosOrderRefund;
  /** Create a new OrderRefundQuote */
  orderRefundQuoteCreate: ZonosOrderRefundQuote;
  /** Remove a tracking number from an order */
  orderRemoveTrackingNumber: Maybe<ZonosOrder>;
  /** Update the accountOrderNumber of an order */
  orderUpdateAccountOrderNumber: ZonosOrder;
  /** Update the amount subtotals of an order */
  orderUpdateAmountSubtotalDetails: ZonosOrder;
  /** Update a note on an order */
  orderUpdateNote: Maybe<ZonosOrder>;
  /** Update the destination or payor party information on an order */
  orderUpdateParty: Maybe<ZonosOrder>;
  organizationVendorCreate: ZonosOrganizationVendor;
  /** Allows an API consumer to create a new `PackagingOption`s */
  packagingOptionCreate: Maybe<Array<Maybe<ZonosPackagingOption>>>;
  /** Allows an API consumer to delete an existing `PackagingOption` */
  packagingOptionDelete: Maybe<ZonosResult>;
  /** Allows an API consumer to update fields on an existing `PackagingOption`. Only fields supplied in the input are changed. */
  packagingOptionUpdate: Maybe<ZonosPackagingOption>;
  /** Generate packing slips for multiple shipments */
  packingSlipBulkCreate: ZonosPackingSlipBulkCreateResult;
  /** Generate a packing slip for a shipment carton */
  packingSlipCreate: Maybe<ZonosPackingSlip>;
  /** Regenerate an existing packing slip */
  packingSlipRegenerate: Maybe<ZonosPackingSlip>;
  /** Update the packing slip settings for the current organization */
  packingSlipSettingsUpdate: Maybe<ZonosPackingSlipSettings>;
  /** Creates a new party using the provided input. */
  partyCreate: ZonosParty;
  /** Creates multiple parties using the provided workflow input. */
  partyCreateWorkflow: Array<ZonosParty>;
  partyScreen: Maybe<ZonosPartyScreening>;
  /** Create a new `PddpCountrySpec` object */
  pddpCountrySpecCreate: Maybe<Array<ZonosPddpCountrySpec>>;
  /** Update an existing `PddpCountrySpec` object */
  pddpCountrySpecUpdate: Maybe<Array<ZonosPddpCountrySpec>>;
  /** Updates the `PddpSettings` associated with the calling `Organization`s token */
  pddpSettingsUpdate: ZonosPddpSettings;
  /** Create and submit a PDDP submission. */
  pddpSubmissionCreate: Array<ZonosPddpSubmission>;
  rerunRestrictionsFromTests: Scalars['String'];
  /** Apply restrictions to items. */
  restrictionApply: ZonosRestrictionResult;
  /** Creates a new `Root` */
  rootCreate: Maybe<ZonosRoot>;
  runRestrictTest: Scalars['String'];
  /** @deprecated Use `shipmentBatchJobCreate` instead. */
  shipmentBulkCreate: Array<ZonosShipmentBulkCreateResult>;
  /** Creates a new `ShipmentConsolidation` from the given input. */
  shipmentConsolidationCreate: ZonosShipmentConsolidation;
  /** Updates a `ShipmentConsolidation` by adding a shipment, changing the status, or both. */
  shipmentConsolidationUpdate: ZonosShipmentConsolidation;
  /** @deprecated Use `shipmentCreateWorkflow` instead. */
  shipmentCreate: Maybe<ZonosShipment>;
  shipmentCreateWithTracking: ZonosShipment;
  shipmentCreateWorkflow: Maybe<ZonosShipment>;
  /** Merge all documents of a given type for a shipment into a single file and return a pre-signed download URL */
  shipmentDocumentsMerge: Maybe<ZonosShipmentDocumentsMergeResult>;
  /** @deprecated Use `shipmentCreateWorkflow` instead. */
  shipmentLabelWorkflow: Maybe<ZonosShipment>;
  /**
   * Merge all labels for a shipment into a single file and return a pre-signed download URL
   * @deprecated Use `shipmentDocumentsMerge` instead.
   */
  shipmentLabelsMerge: ZonosShipmentLabelsMergeResult;
  /** Allows an API consumer to calculate possible `ShipmentRating`s based on the organization's configured settings. */
  shipmentRatingCalculateWorkflow: Array<ZonosShipmentRating>;
  /** Allows an API consumer to create a `shipmentRating`. */
  shipmentRatingCreateWorkflow: Maybe<ZonosShipmentRating>;
  shipmentStatusUpdate: Maybe<ZonosShipment>;
  shipmentsCreateFromOrder: Array<ZonosShipment>;
  shortUrlsCreate: Array<ZonosShortUrl>;
  shortUrlsDelete: Array<ZonosShortUrl>;
  /** Add credit to a customer's store credit account */
  storeCreditAddCredit: ZonosStoreCredit;
  /** Remove credit from a customer's store credit account */
  storeCreditRemoveCredit: ZonosStoreCredit;
  /** Reverse a store credit transaction (full or partial) */
  storeCreditReverseTransaction: ZonosStoreCreditTransaction;
  /** Allows an API consumer to calculate a new `ValueEstimation` using the provided inputs. */
  valueEstimate: Array<ZonosValueEstimation>;
  /** Allows an API consumer to calculate a new `ValueValidation` using the provided inputs. */
  valueValidate: Array<ZonosValueValidation>;
  /** Creates a new `Webhook`. */
  webhookCreate: Maybe<ZonosWebhook>;
  /** Deletes an existing `Webhook`. */
  webhookDelete: Maybe<ZonosResult>;
  /** Updates an existing `Webhook`. */
  webhookUpdate: Maybe<ZonosWebhook>;
};


export type ZonosMutationCarrierAccountConnectArgs = {
  input: ZonosCarrierAccountConnectInput;
};


export type ZonosMutationCarrierBillingInvoiceCreateArgs = {
  input: Array<ZonosCarrierBillingInvoiceCreateInput>;
};


export type ZonosMutationCarrierBillingInvoiceVoidArgs = {
  id: Scalars['ID'];
};


export type ZonosMutationCarrierInvoiceAccountNumberMappingCreateArgs = {
  input: Array<ZonosCarrierInvoiceAccountNumberMappingCreateInput>;
};


export type ZonosMutationCarrierInvoiceAccountNumberMappingDeleteArgs = {
  input: Scalars['ID'];
};


export type ZonosMutationCarrierInvoiceAccountNumberMappingUpdateArgs = {
  input: Array<ZonosCarrierInvoiceAccountNumberMappingUpdateInput>;
};


export type ZonosMutationCarrierInvoiceLineItemBillingCreateArgs = {
  input: Array<ZonosCarrierInvoiceLineItemBillingCreateInput>;
};


export type ZonosMutationCarrierInvoiceLineItemReconcileArgs = {
  input: Array<ZonosCarrierInvoiceLineItemReconcileInput>;
};


export type ZonosMutationCartCreateArgs = {
  input: ZonosCartCreateInput;
};


export type ZonosMutationCartUpdateArgs = {
  input: ZonosCartUpdateInput;
};


export type ZonosMutationCartUpsertArgs = {
  input: ZonosCartUpsertInput;
};


export type ZonosMutationCartWorkflowArgs = {
  id: Scalars['ID'];
};


export type ZonosMutationCartonizationSettingsUpdateArgs = {
  input: ZonosCartonizationSettingsUpdateInput;
};


export type ZonosMutationCartonizeWorkflowArgs = {
  input: InputMaybe<ZonosCartonizeWorkflowInput>;
};


export type ZonosMutationCartonsCreateWorkflowArgs = {
  input: Array<ZonosCartonCreateWorkflowInput>;
};


export type ZonosMutationCatalogItemCreateArgs = {
  input: Array<ZonosCatalogItemInput>;
};


export type ZonosMutationCatalogItemDeleteArgs = {
  input: Array<Scalars['ID']>;
};


export type ZonosMutationCatalogItemExportByIdsArgs = {
  ids: Array<Scalars['ID']>;
};


export type ZonosMutationCatalogItemExportJobCreateArgs = {
  input: InputMaybe<ZonosCatalogItemExportJobCreateInput>;
};


export type ZonosMutationCatalogItemUpdateArgs = {
  input: Array<ZonosCatalogItemInput>;
};


export type ZonosMutationCheckoutCustomerProfileAuthenticateArgs = {
  input: ZonosCheckoutCustomerProfileAuthenticateInput;
};


export type ZonosMutationClassificationsCalculateArgs = {
  input: Array<ZonosClassificationCalculateInput>;
  level: InputMaybe<ZonosClassificationLevel>;
};


export type ZonosMutationClassificationsCalculateWithAugmentationArgs = {
  input: Array<ZonosClassificationCalculateInput>;
};


export type ZonosMutationCollectInvoiceFeeConfigurationCreateArgs = {
  input: ZonosCollectInvoiceFeeConfigurationInput;
};


export type ZonosMutationCollectInvoiceFeeCreateArgs = {
  input: ZonosCollectInvoiceFeeInput;
};


export type ZonosMutationCollectInvoiceFeeUpdateArgs = {
  input: ZonosCollectInvoiceFeeUpdateInput;
};


export type ZonosMutationCollectInvoiceFeeZonosCreateArgs = {
  input: ZonosCollectInvoiceFeeInput;
};


export type ZonosMutationCollectInvoiceFeeZonosUpdateArgs = {
  input: ZonosCollectInvoiceFeeUpdateInput;
};


export type ZonosMutationCollectInvoiceSettingsUpdateArgs = {
  input: ZonosCollectInvoiceSettingsUpdateInput;
};


export type ZonosMutationCollectSubmissionCreateWorkflowArgs = {
  input: ZonosCollectSubmissionCreateWorkflowInput;
};


export type ZonosMutationCollectSubmissionProcessArgs = {
  input: Array<ZonosCollectSubmissionProcessInput>;
};


export type ZonosMutationCollectSubmissionRetryArgs = {
  input: Array<ZonosCollectSubmissionRetryInput>;
};


export type ZonosMutationCollectSubmissionUpdateArgs = {
  input: Array<ZonosCollectSubmissionUpdateInput>;
};


export type ZonosMutationCollectSubmissionUploadUrlGenerateArgs = {
  input: ZonosCollectSubmissionUploadUrlInput;
};


export type ZonosMutationConsignmentAssignToConsolidationArgs = {
  consolidationId: Scalars['ID'];
  ids: Array<Scalars['ID']>;
};


export type ZonosMutationConsignmentCreateWorkflowArgs = {
  input: ZonosConsignmentCreateWorkflowInput;
};


export type ZonosMutationConsignmentRemoveFromConsolidationArgs = {
  ids: Array<Scalars['ID']>;
};


export type ZonosMutationConsolidationCreateArgs = {
  input: ZonosConsolidationCreateInput;
};


export type ZonosMutationConsolidationFileArgs = {
  id: Scalars['ID'];
  input: ZonosConsolidationFileInput;
};


export type ZonosMutationConsolidationUpdateArgs = {
  id: Scalars['ID'];
  input: ZonosConsolidationUpdateInput;
};


export type ZonosMutationCountryOfOriginInferArgs = {
  input: Array<ZonosCountryOfOriginInferenceInput>;
};


export type ZonosMutationCountryOfOriginValidateArgs = {
  input: Array<ZonosCountryOfOriginValidateInput>;
};


export type ZonosMutationCustomerInvoiceFilesCreateArgs = {
  input: Array<ZonosCustomerInvoiceFileCreateInput>;
};


export type ZonosMutationCustomsDescriptionsCreateArgs = {
  input: Array<ZonosCustomsDescriptionsCreateInput>;
};


export type ZonosMutationCustomsDocumentCreateArgs = {
  input: Array<ZonosCustomsDocumentCreateInput>;
};


export type ZonosMutationCustomsDocumentGenerateArgs = {
  input: Array<ZonosCustomsDocumentGenerateInput>;
};


export type ZonosMutationCustomsRequirementsRefreshArgs = {
  input: ZonosCustomsRequirementsRefreshInput;
};


export type ZonosMutationCustomsSpecConnectArgs = {
  input: ZonosCustomsSpecConnectInput;
};


export type ZonosMutationCustomsSpecCreateArgs = {
  input: Array<ZonosCustomsSpecCreateInput>;
};


export type ZonosMutationCustomsSpecCreateFromOrderArgs = {
  id: InputMaybe<Scalars['ID']>;
};


export type ZonosMutationCustomsSpecGenerateArgs = {
  input: Array<ZonosCustomsSpecGenerateInput>;
};


export type ZonosMutationCustomsSpecUpdateArgs = {
  input: Array<ZonosCustomsSpecUpdateInput>;
};


export type ZonosMutationDeclarationCreateArgs = {
  input: InputMaybe<ZonosDeclarationCreateInput>;
};


export type ZonosMutationDeclarationCreateWorkflowArgs = {
  input: ZonosDeclarationCreateWorkflowInput;
};


export type ZonosMutationDeclarationShipmentCreateArgs = {
  input: ZonosDeclarationShipmentCreateInput;
};


export type ZonosMutationDeleteClassifySettingArgs = {
  id: Scalars['String'];
};


export type ZonosMutationExchangeRateCreateArgs = {
  input: ZonosExchangeRateCreateInput;
};


export type ZonosMutationGreenLightWorkflowArgs = {
  input: ZonosGreenLightWorkflowInput;
};


export type ZonosMutationHsCodesValidateArgs = {
  input: Array<ZonosHsCodeValidateInput>;
};


export type ZonosMutationItemCreateWorkflowArgs = {
  input: Array<ZonosItemCreateWorkflowInput>;
};


export type ZonosMutationItemRestrictionApplyArgs = {
  input: ZonosItemRestrictionApplyInput;
};


export type ZonosMutationItemRestrictionApplyAiArgs = {
  input: ZonosItemRestrictionApplyInput;
};


export type ZonosMutationItemRestrictionApplyEphemeralArgs = {
  input: ZonosItemRestrictionApplyInput;
};


export type ZonosMutationItemRestrictionResultDeleteArgs = {
  id: Scalars['ID'];
};


export type ZonosMutationItemRestrictionResultsDeleteArgs = {
  input: ZonosItemRestrictionResultsDeleteInput;
};


export type ZonosMutationItemsCreateArgs = {
  input: Array<ZonosItemInput>;
};


export type ZonosMutationItemsExtractArgs = {
  input: ZonosItemsExtractInput;
};


export type ZonosMutationItemsValidateArgs = {
  input: ZonosItemsValidateInput;
};


export type ZonosMutationLabelCreateWorkflowArgs = {
  input: InputMaybe<ZonosLabelCreateWorkflowInput>;
};


export type ZonosMutationLandedCostCalculateWorkflowArgs = {
  input: ZonosLandedCostWorkFlowInput;
};


export type ZonosMutationLandedCostCreateArgs = {
  input: ZonosLandedCostCreateInput;
};


export type ZonosMutationMagentoInventoryRefundArgs = {
  input: ZonosMagentoInventoryUpdateInput;
};


export type ZonosMutationMagentoInventoryReserveArgs = {
  input: ZonosMagentoInventoryUpdateInput;
};


export type ZonosMutationMagentoScopeUpdateArgs = {
  input: ZonosMagentoScopesUpdateInput;
};


export type ZonosMutationManifestCreateArgs = {
  input: ZonosManifestInput;
};


export type ZonosMutationManifestLineCreateArgs = {
  input: ZonosManifestLineInput;
  manifestId: Scalars['ID'];
};


export type ZonosMutationManifestLinesCreateArgs = {
  input: Array<ZonosManifestLineInput>;
  manifestId: Scalars['ID'];
};


export type ZonosMutationManifestUpdateArgs = {
  id: Scalars['ID'];
  input: ZonosManifestUpdateInput;
};


export type ZonosMutationOrderAddNoteArgs = {
  input: ZonosOrderNoteCreateInput;
};


export type ZonosMutationOrderAddTrackingNumberArgs = {
  input: InputMaybe<ZonosOrderAddTrackingNumberInput>;
};


export type ZonosMutationOrderCancelArgs = {
  id: InputMaybe<Scalars['ID']>;
  input: InputMaybe<ZonosOrderCancelInput>;
};


export type ZonosMutationOrderCreateArgs = {
  input: ZonosOrderCreateInput;
};


export type ZonosMutationOrderDeleteNoteArgs = {
  id: Scalars['ID'];
};


export type ZonosMutationOrderLinkArgs = {
  input: Array<ZonosOrderLinkInput>;
};


export type ZonosMutationOrderPaymentCaptureArgs = {
  input: ZonosOrderPaymentCaptureInput;
};


export type ZonosMutationOrderRefundCreateArgs = {
  input: ZonosOrderRefundInput;
};


export type ZonosMutationOrderRefundQuoteCreateArgs = {
  input: ZonosOrderRefundQuoteInput;
};


export type ZonosMutationOrderRemoveTrackingNumberArgs = {
  input: InputMaybe<ZonosOrderRemoveTrackingNumberInput>;
};


export type ZonosMutationOrderUpdateAccountOrderNumberArgs = {
  input: ZonosOrderUpdateAccountOrderNumberInput;
};


export type ZonosMutationOrderUpdateAmountSubtotalDetailsArgs = {
  input: ZonosOrderUpdateInput;
};


export type ZonosMutationOrderUpdateNoteArgs = {
  input: ZonosOrderNoteUpdateInput;
};


export type ZonosMutationOrderUpdatePartyArgs = {
  input: ZonosOrderUpdatePartyInput;
};


export type ZonosMutationOrganizationVendorCreateArgs = {
  input: ZonosOrganizationVendorCreateInput;
};


export type ZonosMutationPackagingOptionCreateArgs = {
  input: Array<ZonosPackagingOptionCreateInput>;
};


export type ZonosMutationPackagingOptionDeleteArgs = {
  input: InputMaybe<Scalars['ID']>;
};


export type ZonosMutationPackagingOptionUpdateArgs = {
  input: ZonosPackagingOptionUpdateInput;
};


export type ZonosMutationPackingSlipBulkCreateArgs = {
  input: ZonosPackingSlipBulkCreateInput;
};


export type ZonosMutationPackingSlipCreateArgs = {
  input: ZonosPackingSlipCreateInput;
};


export type ZonosMutationPackingSlipRegenerateArgs = {
  input: ZonosPackingSlipRegenerateInput;
};


export type ZonosMutationPackingSlipSettingsUpdateArgs = {
  input: ZonosPackingSlipSettingsUpdateInput;
};


export type ZonosMutationPartyCreateArgs = {
  input: ZonosPartyCreateInput;
};


export type ZonosMutationPartyCreateWorkflowArgs = {
  input: Array<ZonosPartyCreateWorkflowInput>;
};


export type ZonosMutationPartyScreenArgs = {
  input: ZonosPartyScreenInput;
};


export type ZonosMutationPddpCountrySpecCreateArgs = {
  input: Array<ZonosPddpCountrySpecCreateInput>;
};


export type ZonosMutationPddpCountrySpecUpdateArgs = {
  input: Array<ZonosPddpCountrySpecUpdateInput>;
};


export type ZonosMutationPddpSettingsUpdateArgs = {
  input: ZonosPddpSettingsUpdateInput;
};


export type ZonosMutationPddpSubmissionCreateArgs = {
  input: ZonosPddpSubmissionCreateInput;
};


export type ZonosMutationRerunRestrictionsFromTestsArgs = {
  input: ZonosRerunRestrictionsInput;
};


export type ZonosMutationRestrictionApplyArgs = {
  input: ZonosRestrictionApplyInput;
};


export type ZonosMutationRunRestrictTestArgs = {
  input: InputMaybe<ZonosRunRestrictTestInput>;
};


export type ZonosMutationShipmentBulkCreateArgs = {
  input: ZonosShipmentBulkCreateInput;
};


export type ZonosMutationShipmentConsolidationCreateArgs = {
  input: ZonosShipmentConsolidationCreateInput;
};


export type ZonosMutationShipmentConsolidationUpdateArgs = {
  input: ZonosShipmentConsolidationUpdateInput;
};


export type ZonosMutationShipmentCreateArgs = {
  input: ZonosShipmentCreateInput;
};


export type ZonosMutationShipmentCreateWithTrackingArgs = {
  input: ZonosShipmentCreateWithTrackingInput;
};


export type ZonosMutationShipmentCreateWorkflowArgs = {
  input: ZonosShipmentCreateWorkflowInput;
};


export type ZonosMutationShipmentDocumentsMergeArgs = {
  documentType: ZonosShipmentDocumentType;
  shipmentId: Scalars['ID'];
};


export type ZonosMutationShipmentLabelWorkflowArgs = {
  input: ZonosShipmentLabelWorkflowInput;
};


export type ZonosMutationShipmentLabelsMergeArgs = {
  includePackingSlips: InputMaybe<Scalars['Boolean']>;
  shipmentId: Scalars['ID'];
};


export type ZonosMutationShipmentRatingCalculateWorkflowArgs = {
  input: InputMaybe<ZonosShipmentRatingCalculateWorkflowInput>;
};


export type ZonosMutationShipmentRatingCreateWorkflowArgs = {
  input: ZonosShipmentRatingCreateWorkflowInput;
};


export type ZonosMutationShipmentStatusUpdateArgs = {
  input: ZonosShipmentStatusUpdateInput;
};


export type ZonosMutationShipmentsCreateFromOrderArgs = {
  input: ZonosShipmentsCreateFromOrderInput;
};


export type ZonosMutationShortUrlsCreateArgs = {
  input: Array<ZonosShortUrlCreateInput>;
};


export type ZonosMutationShortUrlsDeleteArgs = {
  input: Array<Scalars['ID']>;
};


export type ZonosMutationStoreCreditAddCreditArgs = {
  input: ZonosStoreCreditAddCreditInput;
};


export type ZonosMutationStoreCreditRemoveCreditArgs = {
  input: ZonosStoreCreditRemoveCreditInput;
};


export type ZonosMutationStoreCreditReverseTransactionArgs = {
  input: ZonosStoreCreditReverseTransactionInput;
};


export type ZonosMutationValueEstimateArgs = {
  input: Array<ZonosValueEstimateInput>;
};


export type ZonosMutationValueValidateArgs = {
  input: Array<ZonosValueValidateInput>;
};


export type ZonosMutationWebhookCreateArgs = {
  input: ZonosWebhookCreateInput;
};


export type ZonosMutationWebhookDeleteArgs = {
  id: Scalars['ID'];
};


export type ZonosMutationWebhookUpdateArgs = {
  input: ZonosWebhookUpdateInput;
};

export type ZonosNode = {
  id: Scalars['ID'];
};

/** Determines whether to send an email or not. */
export type ZonosNotificationActiveStatus =
  | 'DISABLED'
  | 'ENABLED';

export type ZonosOnlineStoreSettings = {
  __typename?: 'OnlineStoreSettings';
  /** A list of domains to allow Elements to send frontend requests from. Hello and Checkout will not function for domains not listed here. */
  allowedDomains: Array<Scalars['String']>;
  /** When these `onlineStoreSettings` were created. */
  createdAt: Scalars['DateTime'];
  /** The user who created these OnlineStoreSettings. */
  createdBy: Scalars['ID'];
  /** A unique identifier for the OnlineStoreSettings. */
  id: Scalars['ID'];
  /** Specifies whether the OnlineStoreSettings is in live or test mode. */
  mode: ZonosMode;
  /** The `Organization` associated with the OnlineStoreSettings. */
  organizationId: Scalars['ID'];
  /** Which shopping cart platform your ecommerce store uses. */
  platform: Scalars['String'];
  /** When these `OnlineStoreSettings` were most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the OnlineStoreSettings. */
  updatedBy: Scalars['ID'];
  /** The URL to your online storefront. */
  url: Scalars['String'];
};

export type ZonosOnlineStoreSettingsUpdateInput = {
  /** A list of domains to allow Elements to send frontend requests from. Hello and Checkout will not function for domains not listed here. */
  allowedDomains?: InputMaybe<Array<Scalars['String']>>;
  /** Which shopping cart platform your ecommerce store uses. */
  platform?: InputMaybe<Scalars['String']>;
  /** The URL to your online storefront. */
  url?: InputMaybe<Scalars['String']>;
};

export type ZonosOrder = {
  __typename?: 'Order';
  /** The order number from the `Organization`. */
  accountOrderNumber: Maybe<Scalars['String']>;
  /** Subtotal amounts of how the `Order` amount was calculated. */
  amountSubtotals: ZonosAmountSubtotals;
  /** Details around amount subtotals */
  amountSubtotalsDetails: Maybe<Array<ZonosAmountDetail>>;
  /** The `Cartons` that are included in the `Order`. */
  cartons: Maybe<Array<ZonosCarton>>;
  checkoutSession: Maybe<ZonosCheckoutSession>;
  /** When this `Order` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Order. */
  createdBy: Scalars['ID'];
  /** The currency this `Order` price amount is in. */
  currencyCode: ZonosCurrencyCode;
  customsSpec: Maybe<ZonosCustomsSpec>;
  declaration: Maybe<ZonosDeclaration>;
  /** The destination country code (denormalized for search performance). */
  destinationCountryCode: Maybe<Scalars['String']>;
  /** Optional merchant-supplied grouping identifiers (e.g. container, pallet, batch). Multiple orders may share the same value, allowing them to be retrieved together. */
  externalGroupIds: Maybe<Array<Scalars['String']>>;
  /** Whether the order has a pending modification payment that must be completed before fulfillment */
  hasPendingModificationPayment: Scalars['Boolean'];
  /** A unique identifier for the Order. */
  id: Scalars['ID'];
  /** The `Items` that are included in the `Order`. */
  items: Maybe<Array<ZonosItem>>;
  /** The `landedCost` calculations that are included in the `Order`. */
  landedCosts: Maybe<Array<ZonosLandedCost>>;
  /** Other `Order` details. */
  metadata: Maybe<Array<Maybe<ZonosOrderMetadata>>>;
  /** Specifies whether the Order is in live or test mode. */
  mode: ZonosMode;
  /** The notes associated with an order`. */
  notes: Maybe<Array<Maybe<ZonosOrderNote>>>;
  orderModifications: Array<ZonosOrderModification>;
  /** The `Organization` associated with the Order. */
  organization: Scalars['ID'];
  /** The relevant party contact information for the `Order`. */
  parties: Maybe<Array<ZonosParty>>;
  /** The reference information that is included in the `Order`. */
  references: Maybe<Array<ZonosOrderReference>>;
  /** A List of refunds on the order */
  refunds: Maybe<Array<ZonosOrderRefund>>;
  /** List of remittances */
  remittance: Maybe<Array<Maybe<ZonosRemittance>>>;
  root: Maybe<ZonosRoot>;
  /** The service level display name (denormalized for search performance). */
  serviceLevelDisplayName: Maybe<Scalars['String']>;
  /** The `shipmentRatings` that are included in the `Order`. */
  shipmentRatings: Maybe<Array<ZonosShipmentRating>>;
  shipments: Array<ZonosShipment>;
  /** The status of the `Order`. */
  status: ZonosOrderStatus;
  /** Timestamp for when the status changed. */
  statusTransitions: Array<ZonosOrderStatusTransition>;
  /** The main tracking number for the `order`. */
  trackingNumbers: Maybe<Array<Maybe<Scalars['String']>>>;
  /** When this `Order` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Order. */
  updatedBy: Scalars['ID'];
  /** The Zonos order id is an ID that is shorter and easier to use than the UUID */
  zonosOrderId: Maybe<Scalars['String']>;
};

export type ZonosOrderAddTrackingNumberInput = {
  /** The ID of the `Order` to update */
  id: Scalars['ID'];
  /** The main tracking number for the `order`. */
  trackingNumbers: Array<Scalars['String']>;
};

export type ZonosOrderAmountFilter = {
  /** Amount is between two values (inclusive) */
  between?: InputMaybe<ZonosOrderDecimalRange>;
  /** Exact amount match */
  equal?: InputMaybe<Scalars['Decimal']>;
  /** Amount is greater than this value */
  greaterThan?: InputMaybe<Scalars['Decimal']>;
  /** Amount is greater than or equal to this value */
  greaterThanOrEqual?: InputMaybe<Scalars['Decimal']>;
  /** Amount is less than this value */
  lessThan?: InputMaybe<Scalars['Decimal']>;
  /** Amount is less than or equal to this value */
  lessThanOrEqual?: InputMaybe<Scalars['Decimal']>;
};

export type ZonosOrderAmountSubtotalDetailsConnection = {
  __typename?: 'OrderAmountSubtotalDetailsConnection';
  edges: Array<ZonosOrderAmountSubtotalDetailsEdge>;
  pageInfo: ZonosPageInfo;
};

export type ZonosOrderAmountSubtotalDetailsEdge = {
  __typename?: 'OrderAmountSubtotalDetailsEdge';
  cursor: Maybe<Scalars['String']>;
  node: ZonosAmountDetail;
};

export type ZonosOrderCancelInput = {
  /** The ID of the `Order` to cancel */
  id: Scalars['ID'];
  /** Optional custom note for the cancellation */
  note?: InputMaybe<Scalars['String']>;
  /** Boolean to force the cancellation of the order without refund in cases where the merchant has already refunded outside of the dashboard */
  skipRefund?: InputMaybe<Scalars['Boolean']>;
};

export type ZonosOrderCompleteBillingMethod =
  | 'BILLING_DGS'
  | 'LEGACY';

/** Order Connection */
export type ZonosOrderConnection = {
  __typename?: 'OrderConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<ZonosOrderEdge>>>;
  /** Field pageInfo */
  pageInfo: ZonosPageInfo;
  totalCount: Scalars['Int'];
};

export type ZonosOrderCreateInput = {
  /** The order number from the `organization`. */
  accountOrderNumber?: InputMaybe<Scalars['String']>;
  /** The ID of the billing `party`. */
  billTo?: InputMaybe<Scalars['ID']>;
  currencyCode: ZonosCurrencyCode;
  /** Optional merchant-supplied grouping identifiers (e.g. container, pallet, batch). Multiple orders may share the same value, allowing them to be retrieved together. */
  externalGroupIds?: InputMaybe<Array<Scalars['String']>>;
  /** The grand total of the order. It will be rounded to the nearest penny. */
  grandTotal?: InputMaybe<Scalars['Decimal']>;
  /** The landedCost id that the order will be created from. */
  landedCostId: Scalars['ID'];
  /** Other `Order` details. */
  metadata?: InputMaybe<Array<InputMaybe<ZonosOrderMetadataInput>>>;
  /** The reference information associated to the order. */
  references?: InputMaybe<Array<InputMaybe<ZonosOrderReferenceInput>>>;
  /** The `id` of the destination `party` if different from the landedCost destination party. */
  shipTo?: InputMaybe<Scalars['ID']>;
  /** Optional field for details to create `Shipment` objects associated with this `Order`. */
  shipmentDetails?: InputMaybe<Array<ZonosOrderShipmentDetailInput>>;
  /** The source platform of the order. */
  source?: InputMaybe<Scalars['String']>;
};

export type ZonosOrderDateFilter = {
  /** Date is after this value */
  after?: InputMaybe<Scalars['DateTime']>;
  /** Date is before this value */
  before?: InputMaybe<Scalars['DateTime']>;
  /** Date is before or on this value */
  beforeOrOn?: InputMaybe<Scalars['DateTime']>;
  /** Date is between two values */
  between?: InputMaybe<ZonosDateTimeRange>;
  /** Exact date match */
  equal?: InputMaybe<Scalars['DateTime']>;
  /** Date is in the last N days */
  inLastDays?: InputMaybe<Scalars['Int']>;
  /** Date is on or after this value */
  onOrAfter?: InputMaybe<Scalars['DateTime']>;
};

export type ZonosOrderDecimalRange = {
  /** Lower bound */
  from: Scalars['Decimal'];
  /** Upper bound */
  to: Scalars['Decimal'];
};

/** Order Edge */
export type ZonosOrderEdge = {
  __typename?: 'OrderEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<ZonosOrder>;
};

export type ZonosOrderFulfillmentProgressResult = {
  __typename?: 'OrderFulfillmentProgressResult';
  /**
   * List of `Shipment` objects from an `Order` that were fulfilled. Only contains shipments that do not have a status = VOIDED.
   * @deprecated Use `fulfilledShipments` instead.
   */
  fulfilled: Array<ZonosShipment>;
  /** List of `FulfilledShipment` objects associated with an `Order` that were fulfilled. Only contains shipments that do not have a status = VOIDED. */
  fulfilledShipments: Array<ZonosFulfilledShipment>;
  /** List of `FulfillmentItem` objects that relate to an `Order`. Indicates the original `Item` and the quantity that has yet to be fulfilled. */
  notFulfilled: Array<ZonosFulfillmentItem>;
};

export type ZonosOrderItemDetail = {
  __typename?: 'OrderItemDetail';
  /** The id of the item refunded */
  id: Scalars['ID'];
  /** The quantity of the item refunded */
  quantity: Scalars['Int'];
  /** The subtotal amounts and types for the refund */
  subtotals: Array<ZonosOrderRefundSubtotal>;
};

export type ZonosOrderItemRefundInput = {
  /** The `ID` of the item to refund */
  id: Scalars['ID'];
  /** The quantity of the order items to refund */
  quantity: Scalars['Int'];
};

/** Filter for searching orders by item details (SKU, product ID) for bulk label processing */
export type ZonosOrderItemSearchFilter = {
  /** Filter by order created date */
  createdAt?: InputMaybe<ZonosOrderDateFilter>;
  /** Filter by who created the order */
  createdBy?: InputMaybe<Scalars['String']>;
  /** Exclude orders containing ANY of these product IDs */
  excludeProductIds?: InputMaybe<Array<Scalars['String']>>;
  /** Exclude orders containing ANY of these SKUs */
  excludeSkus?: InputMaybe<Array<Scalars['String']>>;
  /** Maximum item quantity */
  maxQuantity?: InputMaybe<Scalars['Int']>;
  /** Minimum item quantity */
  minQuantity?: InputMaybe<Scalars['Int']>;
  /** Include orders containing ANY of these product IDs (exact match) */
  productIds?: InputMaybe<Array<Scalars['String']>>;
  /** Exact match on item quantity */
  quantity?: InputMaybe<Scalars['Int']>;
  /** Include orders containing ANY of these SKUs (exact match) */
  skus?: InputMaybe<Array<Scalars['String']>>;
  /** Filter by order status */
  status?: InputMaybe<ZonosOrderStatus>;
  /** Include only orders that have any of these tags assigned (by tag external ID) */
  tagIds?: InputMaybe<Array<Scalars['String']>>;
};

export type ZonosOrderLabelCreateInput = {
  landedCostId: Scalars['ID'];
  orderId: Scalars['ID'];
};

export type ZonosOrderLinkInput = {
  /** The Zonos account id that the order belongs to */
  account?: InputMaybe<Scalars['String']>;
  /** The account's external order number */
  accountOrderNumber?: InputMaybe<Scalars['String']>;
  /** The Zonos order id */
  orderId?: InputMaybe<Scalars['String']>;
  /** Root Id */
  rootId?: InputMaybe<Scalars['String']>;
};

/** Defines who the MerchantOfRecord of the Order is */
export type ZonosOrderMerchantOfRecordType =
  | 'MERCHANT'
  | 'ZONOS';

export type ZonosOrderMetadata = {
  __typename?: 'OrderMetadata';
  /** The key used to identify this `Metadata` object */
  key: Scalars['String'];
  /** The value of this `Metadata` object */
  value: Scalars['String'];
};

export type ZonosOrderMetadataInput = {
  /** The key used to identify this `Metadata` object */
  key: Scalars['String'];
  /** The value of this `Metadata` object */
  value: Scalars['String'];
};

export type ZonosOrderModification = {
  __typename?: 'OrderModification';
  /** The payable delta amount for this modification (positive = additional charge, negative = refund). */
  amount: Maybe<Scalars['Decimal']>;
  createdAt: Scalars['DateTime'];
  createdBy: Scalars['ID'];
  /** The currency of the modification amount, in the order's currency. */
  currencyCode: Maybe<ZonosCurrencyCode>;
  id: Scalars['ID'];
  landedCostId: Scalars['ID'];
  orderId: Scalars['ID'];
  status: ZonosOrderModificationStatus;
};

export type ZonosOrderModificationInput = {
  landedCostId: Scalars['ID'];
  orderId: Scalars['ID'];
};

export type ZonosOrderModificationStatus =
  /** Negative or zero delta, no additional payment needed */
  | 'NO_PAYMENT_REQUIRED'
  /** Delta payment received, billing completed */
  | 'PAID'
  /** Modification applied, awaiting delta payment */
  | 'PENDING_PAYMENT';

export type ZonosOrderNote = {
  __typename?: 'OrderNote';
  /** When this `Order Note` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Order Note. */
  createdBy: Scalars['ID'];
  /** When this `Order Note` was deleted. */
  deletedAt: Maybe<Scalars['DateTime']>;
  /** The user who deleted the Order Note. */
  deletedBy: Maybe<Scalars['ID']>;
  /** The ID of the `Order Note`. */
  id: Scalars['ID'];
  /** Note text */
  note: Scalars['String'];
  /** The type of note */
  type: ZonosOrderNoteType;
  /** When this `Order Note` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Order Note. */
  updatedBy: Scalars['ID'];
};

export type ZonosOrderNoteCreateInput = {
  /** Note text */
  note: Scalars['String'];
  /** The ID of the `Order` to create a note for */
  orderId: Scalars['ID'];
  /** The type of note` */
  type: ZonosOrderNoteType;
};

/** the Type on an `Order Note` */
export type ZonosOrderNoteType =
  | 'COMMENT'
  | 'NOTIFICATION_SENT'
  | 'ORDER_CHANGE'
  | 'SHIPMENT'
  | 'STATUS';

export type ZonosOrderNoteUpdateInput = {
  /** The ID of the `Order Note` to update */
  id: Scalars['ID'];
  /** Note text */
  note: Scalars['String'];
};

/** Assigned behavior for the payment authorization upon nearing expiration */
export type ZonosOrderPaymentAuthorizationExpirationBehavior =
  | 'CAPTURE'
  | 'IGNORE'
  | 'VOID';

export type ZonosOrderPaymentCaptureInput = {
  orderId: Scalars['String'];
};

/** Assigned status for `Payment` */
export type ZonosOrderPaymentStatus =
  | 'PAID'
  | 'PARTIALLY_REFUNDED'
  | 'REFUNDED'
  | 'UNPAID'
  | 'VOIDED';

/** One line item from a `Payout`, mirroring the existing CSV export shape. */
export type ZonosOrderPayoutDetailItem = {
  __typename?: 'OrderPayoutDetailItem';
  /** The account name associated with the payout. */
  accountName: Maybe<Scalars['String']>;
  /** The amount of this transaction line. */
  amount: Maybe<Scalars['Decimal']>;
  /** The expected arrival date of the payout in the destination account, as an ISO-8601 date. */
  arrivalDate: Maybe<Scalars['String']>;
  /** The currency code of the payout amounts. */
  currency: Maybe<Scalars['String']>;
  /** The fine-grained type within the transaction category. */
  detailType: Maybe<Scalars['String']>;
  /** Free-form notes attached to the transaction. */
  memo: Maybe<Scalars['String']>;
  /** The date the associated order was placed, if any. */
  orderDate: Maybe<Scalars['String']>;
  /** The associated order number, if any. */
  orderNumber: Maybe<Scalars['String']>;
  /** The associated order reference, if any. */
  orderReference: Maybe<Scalars['String']>;
  /** The party receiving the funds. */
  payee: Maybe<Scalars['String']>;
  /** The party providing the funds. */
  payor: Maybe<Scalars['String']>;
  /** The date the payout was issued, as an ISO-8601 date. */
  payoutDate: Maybe<Scalars['String']>;
  /** The human-readable payout number. */
  payoutNumber: Maybe<Scalars['String']>;
  /** The date the transaction was recorded, as an ISO-8601 date. */
  transactionDate: Maybe<Scalars['String']>;
  /** The unique identifier of the transaction. */
  transactionId: Maybe<Scalars['String']>;
  /** The high-level category of the transaction. */
  transactionType: Maybe<Scalars['String']>;
};

/** OrderPayoutDetailItem Connection */
export type ZonosOrderPayoutDetailItemConnection = {
  __typename?: 'OrderPayoutDetailItemConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<ZonosOrderPayoutDetailItemEdge>>>;
  /** Field pageInfo */
  pageInfo: ZonosPageInfo;
  /** The sum of `amount` across the line items visible to the caller. */
  totalAmount: Maybe<Scalars['Decimal']>;
};

/** OrderPayoutDetailItem Edge */
export type ZonosOrderPayoutDetailItemEdge = {
  __typename?: 'OrderPayoutDetailItemEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<ZonosOrderPayoutDetailItem>;
};

/** Reference information provided by Zonos about the order. */
export type ZonosOrderReference = {
  __typename?: 'OrderReference';
  key: Maybe<Scalars['String']>;
  value: Maybe<Scalars['String']>;
};

/** Order reference Information input */
export type ZonosOrderReferenceInput = {
  key?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

export type ZonosOrderRefund = {
  __typename?: 'OrderRefund';
  /** The total amount of the refund subtotals */
  amount: Scalars['Decimal'];
  /** Details around amount subtotals */
  amountDetails: Array<ZonosAmountDetail>;
  /** When this `OrderRefund` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `OrderRefund`. */
  createdBy: Scalars['ID'];
  /** The currency of the refund amount and subtotals. */
  currencyCode: ZonosCurrencyCode;
  /** A unique identifier for the `OrderRefund`. */
  id: Scalars['ID'];
  /** A description for the refund */
  note: Maybe<Scalars['String']>;
  /** `Order` that this `OrderRefund` belongs to */
  order: ZonosOrder;
  /** The subtotal amounts and types for the refund */
  subtotals: Array<ZonosOrderRefundSubtotal>;
};

export type ZonosOrderRefundInput = {
  /** The currency the refund totals are in */
  currencyCode: ZonosCurrencyCode;
  /** The `ID` of the `Order` to refund */
  id: Scalars['ID'];
  /** A description for the refund */
  note?: InputMaybe<Scalars['String']>;
  /** The ID of the OrderCharge to refund from. Required if the order has multiple charges. */
  orderChargeId?: InputMaybe<Scalars['ID']>;
  /** The subtotal amounts and types for the refund */
  subtotals: Array<ZonosOrderRefundSubtotalInput>;
};

export type ZonosOrderRefundQuote = {
  __typename?: 'OrderRefundQuote';
  /** When this `OrderRefund` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `OrderRefund`. */
  createdBy: Scalars['ID'];
  /** The currency of the refund amount and subtotals. */
  currencyCode: ZonosCurrencyCode;
  /** A unique identifier for the `OrderRefundQuote`. */
  id: Scalars['ID'];
  /** The item refund details */
  itemDetails: Array<ZonosOrderItemDetail>;
  /** `Order` that this `OrderRefundQuote` belongs to */
  order: ZonosOrder;
  /** The subtotal amounts and types for the refund */
  subtotals: Array<ZonosOrderRefundSubtotal>;
};

export type ZonosOrderRefundQuoteInput = {
  /** The currency the refund totals are in */
  currencyCode: ZonosCurrencyCode;
  /** The `ID` of the `Order` to refund */
  id: Scalars['ID'];
  /** The list of order items to refund */
  items: Array<ZonosOrderItemRefundInput>;
};

export type ZonosOrderRefundSubtotal = {
  __typename?: 'OrderRefundSubtotal';
  /** Amount for this subtotal type for the refund */
  amount: Scalars['Decimal'];
  /** Refund subtotal type */
  type: ZonosOrderRefundSubtotalType;
};

export type ZonosOrderRefundSubtotalInput = {
  amount: Scalars['Decimal'];
  type: ZonosOrderRefundSubtotalType;
};

/** The type for the refund subtotal */
export type ZonosOrderRefundSubtotalType =
  /** Discounts can be positive/additive amounts in some cases */
  | 'DISCOUNT'
  | 'DUTY_TAX_FEE'
  | 'ITEM'
  | 'SHIPPING'
  | 'STORE_CREDIT';

export type ZonosOrderRemoveTrackingNumberInput = {
  /** The ID of the `Order` to update */
  id: Scalars['ID'];
  /** The main tracking number for the `order`. */
  trackingNumbers: Array<Scalars['String']>;
};

export type ZonosOrderSearchFilter = {
  /** Enhanced date filter for created_at with various comparison options */
  createdAt?: InputMaybe<ZonosOrderDateFilter>;
  /** Filter by currency code */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** Filter by destination country code */
  destinationCountryCode?: InputMaybe<Scalars['String']>;
  /** The type of Order */
  orderType?: InputMaybe<ZonosOrderType>;
  /** Filter by organization ID */
  organizationId?: InputMaybe<Scalars['String']>;
  /** Filter by payment charge ID */
  paymentChargeId?: InputMaybe<Scalars['String']>;
  /** Filter by payment intent ID */
  paymentIntentId?: InputMaybe<Scalars['String']>;
  /** Fuzzy search text query across searchable attributes using trigram similarity with dynamic threshold. Searchable attributes: - Order identifiers (indexed): accountOrderNumber, externalGroupIds, id, zonosOrderId, references.zonosOrderNumber - Payment IDs (indexed): paymentIntentId, paymentChargeId - Currency: currencyCode (indexed) - Tracking numbers: trackingNumbers (array, indexed) - Destination party (indexed, denormalized): * destination.person.name, destination.person.phone, destination.person.email, destination.location.line1, destination.location.line2, destination.location.line3, destination.location.line4, destination.location.locality, destination.location.postalCode, destination.location.administrativeArea, destination.location.administrativeAreaCode (stored as concatenated searchable text field; fuzzy-matched via word_similarity against the destination_search_text GIN trigram index) * destination.location.countryCode (stored as separate indexed column for better precision on short codes) - Service level (indexed, denormalized): serviceLevelCode, serviceLevelDisplayName - Party IDs (JSONB): party IDs stored in parties array - Shipment rating IDs (JSONB): shipment rating IDs stored in shipment_ratings array - Landed costs (JSONB): landedCostId, landedCostShortId (extracted from landed_costs array) - Amount fields: amount (total calculated), amountDetails.amount, amountDetails.currencyCode Note: Destination party and service level data are stored as denormalized columns on the order table when the order is created, enabling efficient fuzzy search without requiring federation joins. Similarity threshold is dynamic based on search text length: - 2 characters or less: 0.1 threshold (for country codes, short IDs) - 3-4 characters: 0.1 to 0.8 (linear interpolation) - 5+ characters: 0.8 threshold (for precise matching of longer strings) Results are ordered by similarity score (best matches first). */
  q?: InputMaybe<Scalars['String']>;
  /** A list of `ServiceLevel` codes or names that are used for an Order */
  serviceLevels?: InputMaybe<Array<Scalars['String']>>;
  /** Filter by order status */
  status?: InputMaybe<ZonosOrderStatus>;
  /** Enhanced amount filter for total amount with various comparison options */
  totalAmount?: InputMaybe<ZonosOrderAmountFilter>;
  /** Filter by tracking numbers */
  trackingNumbers?: InputMaybe<Array<Scalars['String']>>;
};

export type ZonosOrderShipmentCartonInput = {
  /** Unit of measurement for the dimensions of this carton. Default value is INCH. */
  dimensionalUnit?: InputMaybe<ZonosDimensionalUnitCode>;
  /** Height of the carton. */
  height: Scalars['Decimal'];
  /** Item details of the items packaged inside the carton. */
  items: Array<ZonosOrderShipmentCartonItemInput>;
  /** Length of the carton. */
  length: Scalars['Decimal'];
  /** Tracking number associated with this carton. */
  trackingNumber?: InputMaybe<Scalars['String']>;
  /** Weight of the carton. */
  weight: Scalars['Decimal'];
  /** Unit of measurement for the weight of this carton. Default value is POUND. */
  weightUnit?: InputMaybe<ZonosWeightUnitCode>;
  /** Width of this carton. */
  width: Scalars['Decimal'];
};

export type ZonosOrderShipmentCartonItemInput = {
  /** The country of origin for the `Item`. */
  countryOfOrigin?: InputMaybe<ZonosCountryCode>;
  /** HS code of the `Item`. */
  hsCode?: InputMaybe<Scalars['String']>;
  /** The reference to the item being included in the carton. Can be SKU, Product ID, or the `Item.id`. */
  itemReference: Scalars['String'];
  /** The quantity of the `Item` that is packaged inside this carton. Default value is 1. */
  quantity?: InputMaybe<Scalars['Int']>;
};

export type ZonosOrderShipmentCreateInput = {
  /** Optional `FulfillmentCenter` ID. If not provided, the ORIGIN `Party` on the `Order` will be used. */
  fulfillmentCenter?: InputMaybe<Scalars['ID']>;
  /** Optional `ServiceLevel` ID or code. If not provided, the `ServiceLevel` on the `Order.landedCost` will be used. */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** Details about the cartons included in this Shipment. */
  shipmentCartons: Array<ZonosShipmentCartonInput>;
  /** Optional master tracking number referring to the entire Shipment. */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type ZonosOrderShipmentDetailInput = {
  /** ID of the `FulfillmentCenter` the shipment is being shipped from. If not provided, the PRIMARY `FulfilmentCenter` will be used. */
  fulfillmentCenter?: InputMaybe<Scalars['ID']>;
  /** Identifier for the `ServiceLevel` to be used to create the `Shipment`. Can be the `id` or `code` and must be associated with a valid `ServiceLevel`. If not provided, the `ServiceLevel` on the `LandedCost.shipmentRating` for the Order will be used. */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** List of inputs with details about the packages inside the `Shipment` being created. */
  shipmentCartons: Array<ZonosOrderShipmentCartonInput>;
  /** Optional master tracking number for the `Shipment` being created. */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

/** Assigned status for `Order` */
export type ZonosOrderStatus =
  | 'CANCELED'
  | 'COMBINED'
  | 'COMPLETED'
  | 'FRAUD_HOLD'
  | 'HOLD'
  | 'IN_TRANSIT_TO_CONSOLIDATION_CENTER'
  | 'OPEN'
  | 'PARTIALLY_SHIPPED'
  | 'PAYMENT_FAILED'
  | 'PAYMENT_PENDING';

export type ZonosOrderStatusTransition = {
  __typename?: 'OrderStatusTransition';
  /** When this `Order` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Order. */
  createdBy: Scalars['ID'];
  /** Any additional information required for this status transition. */
  note: Maybe<Scalars['String']>;
  /** The status of this status transition. */
  status: ZonosOrderStatus;
};

export type ZonosOrderTransactionBillingMethod =
  | 'BILLING_DGS'
  | 'LEGACY';

export type ZonosOrderType =
  | 'API'
  | 'CHECKOUT'
  | 'COLLECT'
  | 'INVOICE_COLLECT'
  | 'LABEL_COLLECT'
  | 'PREPAY_COLLECT'
  | 'PREPAY_INVOICE';

export type ZonosOrderUpdateAccountOrderNumberInput = {
  /** The order number from the `Organization`. */
  accountOrderNumber: Scalars['String'];
  /** The ID of the `Order` to update */
  id: Scalars['ID'];
};

export type ZonosOrderUpdateAmountSubtotalDetailInput = {
  /** The amount of a subtotal detail in an order. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** The unrounded amount of a subtotal detail in an order. */
  amountUnrounded?: InputMaybe<Scalars['Decimal']>;
  /** The currency code of the subtotal detail in an order. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** The exchange rate ids of the subtotal detail in an order. */
  exchangeRateIds?: InputMaybe<Array<Scalars['String']>>;
  /** The ID of the `Order amount subtotal` to update */
  id: Scalars['ID'];
  /** The target type of the subtotal detail in an order. */
  targets?: InputMaybe<Array<ZonosAmountDetailTarget>>;
  /** The subtotal amounts of how the `Order` amount was calculated. */
  type?: InputMaybe<ZonosAmountDetailSourceType>;
};

export type ZonosOrderUpdateInput = {
  /** The order id of the subtotal detail in an order. */
  orderId: Scalars['ID'];
  /** Amount subtotal detail inputs */
  subtotalDetailInputs?: InputMaybe<Array<ZonosOrderUpdateAmountSubtotalDetailInput>>;
};

export type ZonosOrderUpdatePartyInput = {
  /** The ID of the `Order` to update */
  id: Scalars['ID'];
  /** The new `id` of the destination or payor `party` to use for the order. */
  partyId: Scalars['ID'];
};

export type ZonosOrdersFilter = {
  /** Return the `Order` resource with the given accountOrderNumber */
  accountOrderNumber?: InputMaybe<Scalars['String']>;
  /** Return the `Order`s resource with the given accountOrderNumbers in the range */
  accountOrderNumberRange?: InputMaybe<ZonosStringRange>;
  /** Return `Order` resources created within a given date range */
  between?: InputMaybe<ZonosDateTimeRange>;
  /** Return all `Order` resources whose `externalGroupIds` contains the given value (e.g. all orders in a given container/pallet/batch). */
  externalGroupId?: InputMaybe<Scalars['String']>;
  /** Return `Order` resources with the given IDs (maximum 100 IDs allowed) */
  ids?: InputMaybe<Array<Scalars['ID']>>;
  /** Return `Order` resources created within a given payment status */
  paymentChargeId?: InputMaybe<Scalars['String']>;
  /** Return `Order` resources created within a given status */
  status?: InputMaybe<ZonosOrderStatus>;
  /** Return `Order` resources created within a given store ID */
  storeId?: InputMaybe<Scalars['String']>;
};

export type ZonosOrganization = {
  __typename?: 'Organization';
  /** A unique identifier for the Organization. */
  id: Scalars['String'];
};

export type ZonosOrganizationIntegration = {
  __typename?: 'OrganizationIntegration';
  app: ZonosZonosApp;
  appVersion: Maybe<Scalars['String']>;
  /** Flexible configuration as a JSON string */
  config: Maybe<Scalars['String']>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  lastSeenAt: Maybe<Scalars['DateTime']>;
  organizationId: Scalars['ID'];
  platform: ZonosPlatformType;
  platformVersion: Maybe<Scalars['String']>;
  /** How the integration data was captured (HEADER, URL_INFERRED, MANUAL) */
  source: ZonosIntegrationSource;
  status: ZonosIntegrationStatus;
  updatedAt: Scalars['DateTime'];
};

export type ZonosOrganizationType =
  /** Partner or customer who is a customs broker. */
  | 'BROKER'
  /** Partner or customer who is a logistics consolidator */
  | 'CONSOLIDATOR'
  /** API-only customer, integrator, etc. */
  | 'DEVELOPER'
  /** Partner or customer who is an Evolve brokerage. */
  | 'EVOLVE_BROKERAGE'
  /** Partner or customer who is a government or other public association. */
  | 'GOVERNMENT'
  /** A partner who works on behalf of others to integrate our software, usually a dev shop of some type. */
  | 'INTEGRATOR'
  /** Partner or customer who is a shipping carrier, 3PL, etc. */
  | 'LOGISTICS'
  /** Partner or customer who is a logistics collect provider. */
  | 'LOGISTICS_COLLECT'
  /** Partner or customer who is an online marketplace. */
  | 'MARKETPLACE'
  /** customer who is a seller on an online marketplace. */
  | 'MARKETPLACE_SELLER'
  /** Typical e-commerce store. This is the type most analogous to a legacy Store object. */
  | 'ONLINE_STORE'
  /** General customer which doesn’t fall into any other type. */
  | 'OTHER'
  /** General partner which doesn’t fall into any other type. */
  | 'PARTNER'
  /** Partner or customer who is an online platform. */
  | 'PLATFORM'
  /** Customer who is a merchant of an online platform */
  | 'PLATFORM_MERCHANT'
  /** Customer who is a member of an online platform */
  | 'PLATFORM_VENDOR'
  /** Partner or customer who is a postal operator */
  | 'POSTAL_OPERATOR'
  /** customer who is a merchant of a postal operator */
  | 'POSTAL_OPERATOR_MERCHANT'
  /** Customer who is a retail center/franchisee branch of a retail HQ partner */
  | 'RETAIL_CENTER'
  /** Retail headquarters/country affiliate partner organization */
  | 'RETAIL_HQ';

export type ZonosOrganizationVendor = {
  __typename?: 'OrganizationVendor';
  /** Account key associated with the `OrganizationVendor`. */
  accountKey: Scalars['String'];
  /** Timestamp of when this `OrganizationVendor` was created. */
  createdAt: Scalars['DateTime'];
  /** ID of the `User` or `Organization` that created this `OrganizationVendor`. */
  createdBy: Scalars['String'];
  /** Unique identifier of the `OrganizationVendor`. */
  id: Scalars['ID'];
  /** Business name of the vendor. */
  name: Scalars['String'];
  /** Object containing address information for the vendors primary contact and address. */
  party: ZonosParty;
  /** Type of `Organization`. For `OrganizationVendor` this will be `PLATFORM_VENDOR` by default. */
  type: ZonosOrganizationType;
  /** Timestamp of when this `OrganizationVendor` was last updated. */
  updatedAt: Scalars['DateTime'];
  /** ID of the `User` or `Organization` that last updated this `OrganizationVendor`. */
  updatedBy: Scalars['String'];
  /** The external ID associated with the vendor. */
  vendorExternalId: Scalars['String'];
};

export type ZonosOrganizationVendorCreateInput = {
  /** The primary shipping address for the vendor. */
  accountAddress: ZonosVendorAddressInput;
  /** The primary users information for the vendor. */
  accountUser: ZonosVendorUserInput;
  /** Name of the vendor. */
  businessName: Scalars['String'];
  /** URL to the vendors website. */
  businessUrl: Scalars['String'];
  /** The default country of origin of the vendors items. */
  defaultCountryOfOrigin: ZonosCountryCode;
  /** Default Harmonized System code to be used in calculations. */
  defaultHsCode?: InputMaybe<Scalars['String']>;
  /** External ID associated with the vendor. */
  vendorExternalId: Scalars['String'];
};

/** A `packagingOption` represents a box that can be used to ship an item */
export type ZonosPackagingOption = {
  __typename?: 'PackagingOption';
  /** When the `packagingOption` was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the `PackagingOption` */
  createdBy: Scalars['ID'];
  /** The measurement units of the height, length and width */
  dimensionalUnit: ZonosDimensionalUnitCode;
  /** The numeric height of the `packagingOption` */
  height: Scalars['Decimal'];
  /** PackagingOption ID, prefixed with `packagingOption_` */
  id: Scalars['ID'];
  /** The inner height of the `packagingOption` (usable space after cushioning). When set, used for cartonization fit; falls back to `height` when null. */
  innerHeight: Maybe<Scalars['Decimal']>;
  /** The inner length of the `packagingOption` (usable space after cushioning). When set, used for cartonization fit; falls back to `length` when null. */
  innerLength: Maybe<Scalars['Decimal']>;
  /** The inner width of the `packagingOption` (usable space after cushioning). When set, used for cartonization fit; falls back to `width` when null. */
  innerWidth: Maybe<Scalars['Decimal']>;
  /** The numeric length of the `packagingOption` */
  length: Scalars['Decimal'];
  /** Whether the `packagingOption` is in test or live mode */
  mode: ZonosMode;
  /** The name the `organization` is using for a particular `packagingOption` */
  name: Scalars['String'];
  /** The `organization` associated with the `packagingOption` */
  organization: Scalars['ID'];
  /** The weight of the `packagingOption` */
  packageWeight: Scalars['Decimal'];
  /** The source from where the `PackagingOption` was generated */
  source: ZonosPackagingOptionSource;
  /** The status of the `packagingOption` */
  status: ZonosPackagingOptionStatus;
  /** The packaging style (box, polybag, letter, etc.) */
  type: ZonosPackagingType;
  /** When the `packagingOption` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `PackagingOption`. */
  updatedBy: Scalars['ID'];
  /** Whether the inner dimensions should be used for cartonization fit. When false, outer dimensions are used regardless of any stored inner dimension values. Lets merchants toggle inner-dim behavior without losing the inner dim values. */
  useInnerDims: Scalars['Boolean'];
  /** The maximum weight of the `packagingOption` */
  weightCapacity: Scalars['Decimal'];
  /** The type of weight associated with the `packingCarton` */
  weightUnit: ZonosWeightUnitCode;
  /** The numeric width of the `packagingOption` */
  width: Scalars['Decimal'];
};

export type ZonosPackagingOptionBulkExportJob = {
  __typename?: 'PackagingOptionBulkExportJob';
  /** When this `PackagingOptionBulkExportJob` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the PackagingOptionBulkExportJob. */
  createdBy: Scalars['ID'];
  /** The S3 url where packaging options are written to */
  exportUrl: Maybe<Scalars['String']>;
  /** The ID of the PackagingOptionBulkExportJob */
  id: Scalars['ID'];
  /** The unique identifier associated with an organization. */
  organization: Scalars['String'];
  /** Current status of the PackagingOptionBulkExportJob */
  status: ZonosPackagingOptionBulkExportJobStatus;
};

export type ZonosPackagingOptionBulkExportJobConnection = {
  __typename?: 'PackagingOptionBulkExportJobConnection';
  edges: Array<ZonosPackagingOptionBulkExportJobEdge>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Scalars['Int'];
};

export type ZonosPackagingOptionBulkExportJobEdge = {
  __typename?: 'PackagingOptionBulkExportJobEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosPackagingOptionBulkExportJob>;
};

export type ZonosPackagingOptionBulkExportJobFilter = {
  /** The status of the `PackagingOptionBulkExportJob` */
  status?: InputMaybe<ZonosPackagingOptionBulkExportJobStatus>;
};

export type ZonosPackagingOptionBulkExportJobStatus =
  | 'COMPLETED'
  | 'COMPLETED_WITH_ERRORS'
  | 'ERROR'
  | 'INITIALIZED';

export type ZonosPackagingOptionBulkJob = {
  __typename?: 'PackagingOptionBulkJob';
  /** When this `PackagingOptionBulkJob` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the PackagingOptionBulkJob. */
  createdBy: Scalars['ID'];
  /** Unsuccessful rows and their error messages */
  errorMessages: Array<ZonosPackagingOptionUploadError>;
  /** The ID of the BulkJob */
  id: Scalars['ID'];
  /** The pre-signed url provided by AWS */
  importUrl: Maybe<Scalars['String']>;
  /** The unique identifier associated with an organization. */
  organization: Scalars['String'];
  /** Current status of the BulkJob */
  status: ZonosPackagingOptionBulkJobStatus;
};

export type ZonosPackagingOptionBulkJobConnection = {
  __typename?: 'PackagingOptionBulkJobConnection';
  edges: Array<ZonosPackagingOptionBulkJobEdge>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Scalars['Int'];
};

export type ZonosPackagingOptionBulkJobEdge = {
  __typename?: 'PackagingOptionBulkJobEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosPackagingOptionBulkJob>;
};

export type ZonosPackagingOptionBulkJobFilter = {
  /** The status of the `PackagingOptionBulkJob` */
  status?: InputMaybe<ZonosPackagingOptionBulkJobStatus>;
};

export type ZonosPackagingOptionBulkJobStatus =
  | 'COMPLETED'
  | 'COMPLETED_WITH_ERRORS'
  | 'ERROR'
  | 'INITIALIZED';

/** A type for paginating through multiple packaging options. */
export type ZonosPackagingOptionConnection = {
  __typename?: 'PackagingOptionConnection';
  /** A list of `edges`. */
  edges: Maybe<Array<Maybe<ZonosPackagingOptionEdge>>>;
  /** Pagination information about the connection. */
  pageInfo: Maybe<ZonosPageInfo>;
  /** The total number of `PackagingOption` objects in the connection */
  totalCount: Scalars['Int'];
};

export type ZonosPackagingOptionCreateInput = {
  /** The measurement units of the height, length and width */
  dimensionalUnit: ZonosDimensionalUnitCode;
  /** The numeric height of the `packagingOption` */
  height: Scalars['Decimal'];
  /** Optional inner height (usable space after cushioning). Must be less than `height`. When set, used for cartonization fit while carrier rating still uses `height`. */
  innerHeight?: InputMaybe<Scalars['Decimal']>;
  /** Optional inner length (usable space after cushioning). Must be less than `length`. When set, used for cartonization fit while carrier rating still uses `length`. */
  innerLength?: InputMaybe<Scalars['Decimal']>;
  /** Optional inner width (usable space after cushioning). Must be less than `width`. When set, used for cartonization fit while carrier rating still uses `width`. */
  innerWidth?: InputMaybe<Scalars['Decimal']>;
  /** The numeric length of the `packagingOption` */
  length: Scalars['Decimal'];
  /** A memorable name for the package option. If one is not provided it will be named based on the length X width X height (ie. 10x8x4) */
  name?: InputMaybe<Scalars['String']>;
  /** The weight of the `packagingOption` */
  packageWeight?: InputMaybe<Scalars['Decimal']>;
  /** The packaging style (box, polybag, letter, etc) */
  type: ZonosPackagingType;
  /** Whether to use the inner dimensions for cartonization fit. Defaults to false. When true, inner dims (when set) gate item fit; carrier rating still uses outer dims. */
  useInnerDims?: InputMaybe<Scalars['Boolean']>;
  /** The weight capacity of the `packagingOption` */
  weightCapacity: Scalars['Decimal'];
  /** The type of weight associated with the `packagingOption` */
  weightUnit: ZonosWeightUnitCode;
  /** The numeric width of the `packagingOption` */
  width: Scalars['Decimal'];
};

export type ZonosPackagingOptionDeleteAction =
  | 'DELETE'
  | 'DISABLE';

/** A type used in pagination. */
export type ZonosPackagingOptionEdge = {
  __typename?: 'PackagingOptionEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Maybe<Scalars['String']>;
  /** The object located at this `Edge`. */
  node: Maybe<ZonosPackagingOption>;
};

export type ZonosPackagingOptionSource =
  | 'DEFAULT'
  | 'DYNAMIC'
  /** These packaging options are supported by most carriers */
  | 'GENERAL'
  /** This packging option is for kits */
  | 'KIT'
  | 'ORGANIZATION'
  /** These packaging options are to run through simulations */
  | 'SIMULATE';

export type ZonosPackagingOptionStatus =
  | 'DISABLED'
  | 'ENABLED';

export type ZonosPackagingOptionUpdateInput = {
  /** The measurement units of the height, length and width */
  dimensionalUnit?: InputMaybe<ZonosDimensionalUnitCode>;
  /** The numeric height of the `packagingOption` */
  height?: InputMaybe<Scalars['Decimal']>;
  /** The `PackagingOption` `ID` to update */
  id: Scalars['ID'];
  /** Optional inner height (usable space after cushioning). Must be less than `height`. */
  innerHeight?: InputMaybe<Scalars['Decimal']>;
  /** Optional inner length (usable space after cushioning). Must be less than `length`. */
  innerLength?: InputMaybe<Scalars['Decimal']>;
  /** Optional inner width (usable space after cushioning). Must be less than `width`. */
  innerWidth?: InputMaybe<Scalars['Decimal']>;
  /** The numeric length of the `packagingOption` */
  length?: InputMaybe<Scalars['Decimal']>;
  /** A memorable name for the package option */
  name?: InputMaybe<Scalars['String']>;
  /** The weight of the `packagingOption` */
  packageWeight?: InputMaybe<Scalars['Decimal']>;
  /** The status of the `packagingOption` */
  status?: InputMaybe<ZonosPackagingOptionStatus>;
  /** The packaging style (box, polybag, letter, etc) */
  type?: InputMaybe<ZonosPackagingType>;
  /** Whether to use the inner dimensions for cartonization fit. Toggle this without losing stored inner dim values. */
  useInnerDims?: InputMaybe<Scalars['Boolean']>;
  /** The weight capacity of the `packagingOption` */
  weightCapacity?: InputMaybe<Scalars['Decimal']>;
  /** The type of weight associated with the `packagingOption` */
  weightUnit?: InputMaybe<ZonosWeightUnitCode>;
  /** The numeric width of the `packagingOption` */
  width?: InputMaybe<Scalars['Decimal']>;
};

export type ZonosPackagingOptionUploadError = {
  __typename?: 'PackagingOptionUploadError';
  message: Maybe<Scalars['String']>;
  rowId: Maybe<Scalars['Int']>;
};

export type ZonosPackagingOptionsFilter = {
  /** The date the `packagingOption` had to be created after */
  createdAtFrom?: InputMaybe<Scalars['DateTime']>;
  /** The date the `packagingOption` had to be created before */
  createdAtTo?: InputMaybe<Scalars['DateTime']>;
  /** Filter by exact packaging option name */
  name?: InputMaybe<Scalars['String']>;
  /** The `PackagingOptionSource` you are filtering by. */
  source?: InputMaybe<ZonosPackagingOptionSource>;
  /** The status you are filtering by. */
  status?: InputMaybe<ZonosPackagingOptionStatus>;
  /** The `PackagingType` you are filtering by. */
  type?: InputMaybe<ZonosPackagingType>;
};

export type ZonosPackagingType =
  | 'ENVELOPE'
  | 'FLAT'
  | 'PACKAGE'
  | 'PAK'
  | 'PARCEL'
  | 'POLYBAG'
  | 'TUBE';

export type ZonosPackingConfiguration = {
  __typename?: 'PackingConfiguration';
  /** The unique identifier for this packing configuration */
  id: Scalars['ID'];
  /** how / why the item should be stacked */
  stackConfiguration: Maybe<ZonosStackConfiguration>;
};

export type ZonosPackingConfigurationInput = {
  /** How the item should be stacked */
  stackConfiguration?: InputMaybe<ZonosStackConfigurationInput>;
};

export type ZonosPackingPreference =
  /** This item is in a kit assigned to a box */
  | 'ASSIGNED_BOX'
  /** The item can be shipped with other items in a box */
  | 'CONSOLIDATED'
  /** The item is shipped alone */
  | 'SHIPS_ALONE';

export type ZonosPackingSlip = ZonosNode & {
  __typename?: 'PackingSlip';
  /** The date and time this packing slip was created */
  createdAt: Scalars['DateTime'];
  /** The user who created this packing slip */
  createdBy: Scalars['ID'];
  /** A unique identifier for the packing slip */
  id: Scalars['ID'];
  /** The `ShipmentCarton` associated with this packing slip */
  shipmentCarton: ZonosShipmentCarton;
  /** The current generation status of the packing slip */
  status: ZonosPackingSlipStatus;
  /** The date and time this packing slip was last updated */
  updatedAt: Scalars['DateTime'];
  /** Presigned S3 URL for the packing slip PDF */
  url: Maybe<Scalars['String']>;
};

export type ZonosPackingSlipBulkCreateInput = {
  /** A list of `Shipment` IDs to generate packing slips for */
  shipmentIds: Array<Scalars['ID']>;
};

export type ZonosPackingSlipBulkCreateResult = {
  __typename?: 'PackingSlipBulkCreateResult';
  /** Error messages for any packing slips that failed to generate */
  errors: Array<Scalars['String']>;
  /** The number of packing slips that failed to generate */
  failedCount: Scalars['Int'];
  /** The list of packing slips that were successfully created */
  packingSlips: Array<ZonosPackingSlip>;
  /** Presigned S3 URL for the combined PDF of all packing slips */
  url: Maybe<Scalars['String']>;
};

export type ZonosPackingSlipCreateInput = {
  /** The ID of the `ShipmentCarton` to generate a packing slip for */
  shipmentCartonId: Scalars['ID'];
};

export type ZonosPackingSlipPageSize =
  /** 4x8 inch page size */
  | 'FOUR_BY_EIGHT'
  /** 4x6 inch page size (standard label size) */
  | 'FOUR_BY_SIX'
  /** 8.5x11 inch page size (US Letter) */
  | 'LETTER';

export type ZonosPackingSlipRegenerateInput = {
  /** The ID of the packing slip to regenerate */
  packingSlipId: Scalars['ID'];
};

export type ZonosPackingSlipSettings = ZonosNode & {
  __typename?: 'PackingSlipSettings';
  /** Custom notes to display on packing slips */
  customNotes: Maybe<Scalars['String']>;
  /** Custom footer text to display on packing slips */
  footerText: Maybe<Scalars['String']>;
  /** Custom header text to display on packing slips */
  headerText: Maybe<Scalars['String']>;
  /** A unique identifier for the packing slip settings */
  id: Scalars['ID'];
  /** Whether to include a barcode of the order ID on the packing slip */
  includeBarcodeOrderId: Scalars['Boolean'];
  /** Whether to include a barcode of the shipment ID on the packing slip */
  includeBarcodeShipmentId: Scalars['Boolean'];
  /** Whether to include a barcode of the tracking number on the packing slip */
  includeBarcodeTracking: Scalars['Boolean'];
  /** URL for the organization's logo to display on packing slips */
  logoUrl: Maybe<Scalars['String']>;
  /** The page size for packing slips */
  pageSize: ZonosPackingSlipPageSize;
  /** Whether to show item images on packing slips */
  showItemImages: Scalars['Boolean'];
  /** Whether to show item prices on packing slips */
  showItemPrices: Scalars['Boolean'];
  /** Whether to show the order total on packing slips */
  showOrderTotal: Scalars['Boolean'];
};

export type ZonosPackingSlipSettingsUpdateInput = {
  /** Custom notes to display on packing slips */
  customNotes?: InputMaybe<Scalars['String']>;
  /** Custom footer text to display on packing slips */
  footerText?: InputMaybe<Scalars['String']>;
  /** Custom header text to display on packing slips */
  headerText?: InputMaybe<Scalars['String']>;
  /** Whether to include a barcode of the order ID on the packing slip */
  includeBarcodeOrderId?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include a barcode of the shipment ID on the packing slip */
  includeBarcodeShipmentId?: InputMaybe<Scalars['Boolean']>;
  /** Whether to include a barcode of the tracking number on the packing slip */
  includeBarcodeTracking?: InputMaybe<Scalars['Boolean']>;
  /** URL for the organization's logo to display on packing slips */
  logoUrl?: InputMaybe<Scalars['String']>;
  /** The page size for packing slips */
  pageSize?: InputMaybe<ZonosPackingSlipPageSize>;
  /** Whether to show item images on packing slips */
  showItemImages?: InputMaybe<Scalars['Boolean']>;
  /** Whether to show item prices on packing slips */
  showItemPrices?: InputMaybe<Scalars['Boolean']>;
  /** Whether to show the order total on packing slips */
  showOrderTotal?: InputMaybe<Scalars['Boolean']>;
};

export type ZonosPackingSlipStatus =
  /** Packing slip generation failed */
  | 'FAILED'
  /** Packing slip has been successfully generated */
  | 'GENERATED'
  /** Packing slip is currently being generated */
  | 'GENERATING';

export type ZonosPageInfo = {
  __typename?: 'PageInfo';
  /** Field endCursor */
  endCursor: Maybe<Scalars['String']>;
  /** Field hasNextPage */
  hasNextPage: Scalars['Boolean'];
  /** Field hasPreviousPage */
  hasPreviousPage: Scalars['Boolean'];
  /** Field startCursor */
  startCursor: Maybe<Scalars['String']>;
};

export type ZonosPartiesToTransaction =
  | 'NON_RELATED'
  | 'RELATED';

export type ZonosPartnerCarrierAccountFilter = {
  /** The ID of the `Carrier` the `PartnerCarrierAccount` is associated with. */
  carrierId?: InputMaybe<Scalars['ID']>;
  /** The ID of the partner `Organization` to query accounts for. */
  partnerOrganizationId?: InputMaybe<Scalars['ID']>;
};

/** An auto-generated type for paginating Objects. */
export type ZonosParty = {
  __typename?: 'Party';
  /** The timestamp when the party was created. */
  createdAt: Scalars['DateTime'];
  /** The ID of the user or system that created the party record. */
  createdBy: Scalars['ID'];
  /** The unique identifier for the party. */
  id: Scalars['ID'];
  /** The location associated with the party. */
  location: Maybe<ZonosLocation>;
  /** Specifies whether the Party is in live or test mode. */
  mode: ZonosMode;
  /** The unique identifier for the organization associated with the party. */
  organization: Scalars['ID'];
  /**
   * Deprecated: Use `organization` instead.
   * @deprecated Use `organization` instead
   */
  organizationId: Scalars['ID'];
  /** The person associated with the party. */
  person: Maybe<ZonosPerson>;
  /** The type of the party (e.g., ORIGIN, DESTINATION, PAYOR, PAYEE). */
  type: Maybe<ZonosPartyType>;
  /** The timestamp when the party record was last updated. */
  updatedAt: Scalars['DateTime'];
  /** The ID of the user or system that last updated the party record. */
  updatedBy: Scalars['ID'];
};

/** Input type for creating a party (preferred). */
export type ZonosPartyCreateInput = {
  /** If provided, all fields from the existing party will be copied to the new party, except for any non-null fields explicitly provided in the input. */
  existingPartyId?: InputMaybe<Scalars['ID']>;
  /** The location associated with the party. */
  location?: InputMaybe<ZonosLocationCreateInput>;
  /** The person associated with the party. */
  person?: InputMaybe<ZonosPersonCreateInput>;
  /** The reference ID for the party. */
  referenceId?: InputMaybe<Scalars['ID']>;
  /** The type of the party (e.g., ORIGIN, DESTINATION). */
  type: ZonosPartyType;
};

/** Input type for creating multiple parties in a workflow. */
export type ZonosPartyCreateWorkflowInput = {
  /** The location associated with the party. */
  location?: InputMaybe<ZonosCreateLocationInput>;
  /** The person associated with the party. */
  person?: InputMaybe<ZonosCreatePersonInput>;
  /** The type of the party (e.g., ORIGIN, DESTINATION). */
  type: ZonosPartyType;
};

/** Filter criteria for retrieving parties. */
export type ZonosPartyFilter = {
  /** The reference ID used to filter parties. */
  referenceId: Scalars['ID'];
};

/** Metadata associated with a person or party. */
export type ZonosPartyMetadata = {
  __typename?: 'PartyMetadata';
  /** The key of the metadata item. */
  key: Scalars['String'];
  /** The value of the metadata item. */
  value: Maybe<Scalars['String']>;
};

/** Input type for metadata associated with a person or party */
export type ZonosPartyMetadataInput = {
  /** The key of the metadata item. */
  key: Scalars['String'];
  /** The value of the metadata item. */
  value?: InputMaybe<Scalars['String']>;
};

export type ZonosPartyScreenInput = {
  location?: InputMaybe<ZonosDeniedPartyLocationInput>;
  person?: InputMaybe<ZonosDeniedPartyPersonInput>;
};

/** The match found on the party screening. */
export type ZonosPartyScreenMatch = {
  __typename?: 'PartyScreenMatch';
  /** The administrative area code match type. */
  administrativeAreaCode: Maybe<ZonosMatchType>;
  /** The company match type. */
  companyName: Maybe<ZonosMatchType>;
  /** The country code match type. */
  countryCode: Maybe<ZonosMatchType>;
  /** The denied party that was matched. */
  deniedParty: Maybe<ZonosDeniedParty>;
  /** The line1 match type. */
  line1: Maybe<ZonosMatchType>;
  /** The line2 match type. */
  line2: Maybe<ZonosMatchType>;
  /** The locality/city match type. */
  locality: Maybe<ZonosMatchType>;
  /** The contact name match type. */
  name: Maybe<ZonosMatchType>;
  /** The postal code match type. */
  postalCode: Maybe<ZonosMatchType>;
  /** The score of the matched denied party. */
  scores: Maybe<ZonosScreeningScores>;
};

/** The screening result for a party. */
export type ZonosPartyScreening = {
  __typename?: 'PartyScreening';
  /** Indicates the type of action required for the party screening */
  action: ZonosDeniedPartyAction;
  /** When this `deniedParty` was created */
  createdAt: Scalars['DateTime'];
  /** The user who created the `deniedParty` */
  createdBy: Scalars['ID'];
  /** Denied Party Screening ID, prefixed with `deniedParty_`. */
  id: Scalars['ID'];
  /** The fields that had an match with a potential denied party */
  matches: Array<ZonosPartyScreenMatch>;
  /** The mode of the party screening */
  mode: ZonosMode;
  /** Party that was used to query the API */
  party: ZonosParty;
};

export type ZonosPartyScreeningConnection = {
  __typename?: 'PartyScreeningConnection';
  edges: Maybe<Array<Maybe<ZonosPartyScreeningEdge>>>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ZonosPartyScreeningEdge = {
  __typename?: 'PartyScreeningEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosPartyScreening>;
};

export type ZonosPartyScreeningFilter = {
  action?: InputMaybe<ZonosDeniedPartyAction>;
  country?: InputMaybe<ZonosCountryCode>;
};

export type ZonosPartyScreeningSetting = {
  __typename?: 'PartyScreeningSetting';
  /** Default value is EXACT_LOCALITY */
  addressMatchThreshold: Maybe<ZonosAddressMatchThreshold>;
  id: Scalars['ID'];
  /** Default value is 0.8 */
  nameMatchDecisionThreshold: Maybe<Scalars['Decimal']>;
};

export type ZonosPartyScreeningSettingInput = {
  addressMatchThreshold?: InputMaybe<ZonosAddressMatchThreshold>;
  nameMatchDecisionThreshold?: InputMaybe<Scalars['Decimal']>;
};

/** Enumeration for the different types of parties. */
export type ZonosPartyType =
  /** Represents the consignee party. */
  | 'CONSIGNEE'
  /** Represents the destination party. */
  | 'DESTINATION'
  /** Represents the exporter party. */
  | 'EXPORTER'
  /** Represents the importer of record party. */
  | 'IMPORTER_OF_RECORD'
  /** Represents the manufacturer party. */
  | 'MANUFACTURER'
  /** Represents the origin party. */
  | 'ORIGIN'
  /** Represents the payee party. */
  | 'PAYEE'
  /** Represents the payor party. */
  | 'PAYOR'
  /** Represents the ultimate consignee party. */
  | 'ULTIMATE_CONSIGNEE';

export type ZonosPaymentsSettings = {
  __typename?: 'PaymentsSettings';
  /** When these `paymentsSettings` were created. */
  createdAt: Scalars['DateTime'];
  /** The user who created these `paymentsSettings`. */
  createdBy: Scalars['String'];
  /** The day of the week payouts occur. */
  dayOfWeek: Maybe<ZonosDay>;
  /** Whether orders should be considered "end of day" for payout. */
  endOfDayBehavior: Maybe<ZonosEndOfDayBehavior>;
  /** How often payouts occur, in days. */
  frequencyDays: Maybe<Scalars['Int']>;
  /**
   * A unique identifier for the PaymentsSettings.
   * @deprecated Not needed, we will find the object associated to the passed in credential's organization.
   */
  id: Maybe<Scalars['String']>;
  /** Specifies which system to use for billing Lcg Fees */
  lcgBillingMethod: Maybe<ZonosLcgBillingMethod>;
  /** The minimum balance required to trigger a payout, in USD. */
  minimum: Maybe<Scalars['Int']>;
  /** Specifies whether the PaymentsSettings is in live or test mode. */
  mode: ZonosMode;
  /** Specifies which system to use for billing order complete fees */
  orderCompleteBillingMethod: Maybe<ZonosOrderCompleteBillingMethod>;
  /** Specifies which system to use for billing order transaction fees */
  orderTransactionBillingMethod: Maybe<ZonosOrderTransactionBillingMethod>;
  /** The `Organization` associated with the PaymentsSettings. */
  organization: Maybe<Scalars['String']>;
  /** When these `PaymentsSettings` were most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the PaymentsSettings. */
  updatedBy: Scalars['String'];
};

export type ZonosPaypalMockResponse =
  /** Mock response for instrument declined */
  | 'INSTRUMENT_DECLINED'
  /** Mock response for a PayPal internal server error */
  | 'INTERNAL_SERVER_ERROR'
  /** Mock response for transaction refused */
  | 'TRANSACTION_REFUSED';

/** An amount type and value associated with a PDDP submission */
export type ZonosPddpAmount = {
  __typename?: 'PddpAmount';
  /** The monetary amount associated with the PDDP submission */
  amount: Scalars['Decimal'];
  /** The type of the amount associated with the PDDP submission */
  amountType: ZonosPddpAmountType;
  /** The currency used for the amount */
  currencyCode: ZonosCurrencyCode;
};

/** The type of an amount associated with a PDDP submission */
export type ZonosPddpAmountType =
  /** The total of all products, shipping, duties, and taxes. Does not include surcharges. */
  | 'FLC_TOTAL_COST'
  /** The monetary value of the products shipped */
  | 'INSURED_VALUE'
  /** The cost of shipping the products */
  | 'SHIPPING_COST'
  /** The duty associated with the products shipped */
  | 'SHOPPING_CART_DUTY'
  /** The tax associated with the products shipped */
  | 'SHOPPING_CART_TAX'
  /** The total monetary value of the products shipped */
  | 'SHOPPING_CART_VALUE'
  /** Any additional surcharges associated with the products shipped */
  | 'SURCHARGE_VALUE';

export type ZonosPddpCountrySpec = {
  __typename?: 'PddpCountrySpec';
  /** The `ID` of the PddpCountrySpec countrycode */
  countryCode: ZonosCountryCode;
  /** The dateTime of the PddpCountrySpec creation */
  createdAt: Scalars['DateTime'];
  /** The user who created the PddpCountrySpec */
  createdBy: Scalars['ID'];
  /** The unique identifier for the PddpCountrySpec */
  id: Scalars['ID'];
  /** Service levels available for the merchant to use */
  serviceLevels: Maybe<Array<ZonosServiceLevel>>;
  /** The status of the PddpCountrySpec (ACTIVE, DISABLED) */
  status: ZonosPddpCountrySpecStatus;
  /** The dateTime and info of the status transitions of the PddpCountrySpec */
  statusTransitions: Array<ZonosPddpCountrySpecStatusTransition>;
  /** The dateTime of the PddpCountrySpec last update */
  updatedAt: Maybe<Scalars['DateTime']>;
  /** The user who last updated the PddpCountrySpec */
  updatedBy: Maybe<Scalars['ID']>;
};

/** Auto-generated types for paginating through multiple `PddpCountrySpec` objects. */
export type ZonosPddpCountrySpecConnection = {
  __typename?: 'PddpCountrySpecConnection';
  /** A list of `PddpCountrySpecEdge` objects */
  edges: Array<ZonosPddpCountrySpecEdge>;
  /** `PageInfo` about the connection */
  pageInfo: Maybe<ZonosPageInfo>;
};

export type ZonosPddpCountrySpecCreateInput = {
  /** The `ID` of the PddpCountrySpec countrycode */
  countryCode: ZonosCountryCode;
  /** Service levels available for the merchant to use */
  serviceLevels: Array<Scalars['ID']>;
  /** The status of the PddpCountrySpec (ACTIVE, DISABLED) - default is DISABLED */
  status?: InputMaybe<ZonosPddpCountrySpecStatus>;
};

export type ZonosPddpCountrySpecEdge = {
  __typename?: 'PddpCountrySpecEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']>;
  /** The `PddpCountrySpec` at the end of the edge */
  node: Maybe<ZonosPddpCountrySpec>;
};

export type ZonosPddpCountrySpecStatus =
  /** The PddpCountrySpec is ACTIVE - default is DISABLED */
  | 'ACTIVE'
  | 'DISABLED';

export type ZonosPddpCountrySpecStatusTransition = {
  __typename?: 'PddpCountrySpecStatusTransition';
  /** The dateTime of the status transition */
  createdAt: Scalars['DateTime'];
  /** "The user who created the PddpCountrySpec */
  createdBy: Scalars['ID'];
  /** The notes for the status transition */
  note: Scalars['String'];
  /** The status of the PddpCountrySpec (ACTIVE, DISABLED) */
  status: ZonosPddpCountrySpecStatus;
};

export type ZonosPddpCountrySpecUpdateInput = {
  /** The `ID` of the PddpCountrySpec countrycode */
  countryCode?: InputMaybe<ZonosCountryCode>;
  /** The `ID` of the PddpCountrySpec */
  id: Scalars['ID'];
  /** The status transition note commenting the change */
  note?: InputMaybe<Scalars['String']>;
  /** Service levels available for the merchant to use */
  serviceLevels?: InputMaybe<Array<Scalars['String']>>;
  /** The status of the PddpCountrySpec (ACTIVE, DISABLED) */
  status?: InputMaybe<ZonosPddpCountrySpecStatus>;
};

export type ZonosPddpSettings = {
  __typename?: 'PddpSettings';
  /** Timestamp of when the PddpSettings were created */
  createdAt: Scalars['DateTime'];
  /** ID of the user who created the PddpSettings */
  createdBy: Scalars['ID'];
  /** List of `CountryCode`(s) PDDP is enabled for */
  enabledCountries: Array<ZonosCountryCode>;
  /** Unique identifier for this `PddpSettings` object */
  id: Scalars['ID'];
  /** ID of the `Organization` these PddpSettings belong to */
  organization: Scalars['ID'];
  /** The PddpStatus of the PddpSettings */
  status: ZonosPddpStatus;
  /** Timestamp of when the PddpSettings were updated most recently */
  updatedAt: Scalars['DateTime'];
  /** The ID of the user who most recently updated the PddpSettings */
  updatedBy: Scalars['ID'];
};

export type ZonosPddpSettingsUpdateInput = {
  /** List of `CountryCode`(s) PDDP is enabled for */
  enabledCountries?: InputMaybe<Array<ZonosCountryCode>>;
  /** The PddpStatus of the PddpSettings */
  status: ZonosPddpStatus;
};

export type ZonosPddpStatus =
  /** PDDP is enabled */
  | 'ACTIVE'
  /** PDDP is disabled */
  | 'DISABLED';

/** A PDDP submission and related information */
export type ZonosPddpSubmission = ZonosNode & {
  __typename?: 'PddpSubmission';
  /** An array of associated PDDP Amounts */
  amounts: Array<ZonosPddpAmount>;
  /** The timestamp of when the submission was created */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created the submission */
  createdBy: Scalars['ID'];
  /** The currency being used for the submission */
  destinationCurrency: ZonosCurrencyCode;
  /** The destination postal operator, UPU Code */
  destinationPost: Scalars['String'];
  /** The ID of the submission */
  id: Scalars['ID'];
  /** The ID of the `Order` this submission is associated with */
  orderId: Scalars['ID'];
  /** The origin postal operator, UPU Code */
  originPost: Maybe<Scalars['String']>;
  /** The PDDP transaction identifier */
  pddpTransactionIdentifier: Maybe<Scalars['String']>;
  /** The ID of the associated `Shipment` */
  shipmentId: Scalars['ID'];
  /** The tracking number of the submission */
  trackingNumber: Scalars['String'];
  /** Type of PDDP */
  type: Maybe<ZonosPddpType>;
};

/** A collection of PDDP submissions and related information to aid in pagination */
export type ZonosPddpSubmissionConnection = {
  __typename?: 'PddpSubmissionConnection';
  /** A list of edges which contains the PDDP Submissions */
  edges: Array<ZonosPddpSubmissionEdge>;
  /** Information to aid in pagination */
  pageInfo: Maybe<ZonosPageInfo>;
  /** The total number of PDDP Submissions in this connection */
  totalCount: Scalars['Int'];
};

/** The required information to create a PDDP submission */
export type ZonosPddpSubmissionCreateInput = {
  /** The ID of the associated IPC Retailer, if not given Zonos' ID will be used */
  ipcRetailerId?: InputMaybe<Scalars['String']>;
  /** The ID of the associated `Shipment` */
  shipmentId: Scalars['ID'];
};

/** An edge in a connection that contains a cursor and the PDDP submission */
export type ZonosPddpSubmissionEdge = {
  __typename?: 'PddpSubmissionEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']>;
  /** The actual PDDP Submission */
  node: Maybe<ZonosPddpSubmission>;
};

/** Set of filters to make a query for PDDP submissions. */
export type ZonosPddpSubmissionFilter = {
  /** A date range for wen the PDDP submission was created to filter by */
  createdDate?: InputMaybe<ZonosDateTimeRange>;
  /** The destination postal operator, UPU Code */
  destinationPost?: InputMaybe<Scalars['String']>;
  /** The ID of the `Order` the PDDP submission is associated with */
  orderId?: InputMaybe<Scalars['ID']>;
  /** The PDDP transaction identifier */
  pddpTransactionIdentifier?: InputMaybe<Scalars['String']>;
  /** The ID of the `Shipment` the PddpSubmission is tied to */
  shipmentId?: InputMaybe<Scalars['ID']>;
  /** The tracking number of the submission */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

/** A log for a PDDP submission and related information */
export type ZonosPddpSubmissionLog = {
  __typename?: 'PddpSubmissionLog';
  /** The timestamp when the log was created */
  createdAt: Scalars['DateTime'];
  /** The User ID of the person who created the log */
  createdBy: Scalars['ID'];
  /** The ID of the log */
  id: Scalars['ID'];
  /** The ID of the PDDP submission associated with the log */
  pddpSubmission: Maybe<Scalars['ID']>;
  /** The request from the PDDP submission */
  request: Scalars['String'];
  /** The response from the PDDP submission */
  response: Scalars['String'];
  /** ID of the associated `Shipment` */
  shipmentId: Scalars['ID'];
};

/** A collection of PDDP submission logs and related information to aid in pagination */
export type ZonosPddpSubmissionLogConnection = {
  __typename?: 'PddpSubmissionLogConnection';
  /** A list of edges which contains the PDDP Submission Logs */
  edges: Array<ZonosPddpSubmissionLogEdge>;
  /** Information to aid in pagination */
  pageInfo: Maybe<ZonosPageInfo>;
  /** The total number of PDDP Submission logs in this connection */
  totalCount: Scalars['Int'];
};

/** An edge in a connection that contains a cursor and the PDDP submission log */
export type ZonosPddpSubmissionLogEdge = {
  __typename?: 'PddpSubmissionLogEdge';
  /** A cursor for use in pagination */
  cursor: Maybe<Scalars['String']>;
  /** The actual PDDP Submission Log */
  node: Maybe<ZonosPddpSubmissionLog>;
};

/** Set of filters to make a query for PDDP submission logs. */
export type ZonosPddpSubmissionLogFilter = {
  /** A date range for when the PDDP submission was created to filter by */
  createdDate?: InputMaybe<ZonosDateTimeRange>;
  /** The ID of the associated `Order` */
  orderId?: InputMaybe<Scalars['String']>;
  /** The associated PDDP Submission */
  pddpSubmission?: InputMaybe<Scalars['String']>;
};

export type ZonosPddpType =
  | 'CANADA_POST'
  | 'IPC';

/** Represents a person, including their details and metadata. */
export type ZonosPerson = {
  __typename?: 'Person';
  /** The company name associated with the person. */
  companyName: Maybe<Scalars['String']>;
  /** The timestamp when the person record was created. */
  createdAt: Scalars['DateTime'];
  /** The ID of the user or system that created the person record. */
  createdBy: Scalars['ID'];
  /** The customs-assigned number for the person. */
  customsAssignedNumber: Maybe<Scalars['String']>;
  /** The email address of the person. */
  email: Maybe<Scalars['String']>;
  /** The first name of the person. */
  firstName: Maybe<Scalars['String']>;
  /** The unique identifier for the person. */
  id: Scalars['ID'];
  /** The last name of the person. */
  lastName: Maybe<Scalars['String']>;
  /** Additional metadata associated with the person. */
  metadata: Maybe<Array<Maybe<ZonosPartyMetadata>>>;
  /** Specifies whether the Person is in live or test mode. */
  mode: ZonosMode;
  /** The unique identifier for the organization associated with the person. */
  organization: Scalars['ID'];
  /** The phone number of the person. */
  phone: Maybe<Scalars['String']>;
  /** The tax identifier for the person. */
  taxIdentifier: Maybe<ZonosPersonTaxIdentifier>;
  /** The timestamp when the person record was last updated. */
  updatedAt: Scalars['DateTime'];
  /** The ID of the user or system that last updated the person record. */
  updatedBy: Scalars['ID'];
};

/** Input type for creating a person (preferred). */
export type ZonosPersonCreateInput = {
  /** The company name associated with the person. */
  companyName?: InputMaybe<Scalars['String']>;
  /** The customs-assigned number for the person. */
  customsAssignedNumber?: InputMaybe<Scalars['String']>;
  /** The email address of the person. */
  email?: InputMaybe<Scalars['String']>;
  /** The first name of the person. */
  firstName?: InputMaybe<Scalars['String']>;
  /** The last name of the person. */
  lastName?: InputMaybe<Scalars['String']>;
  /** Additional metadata associated with the person. */
  metadata?: InputMaybe<Array<InputMaybe<ZonosPartyMetadataInput>>>;
  /** The phone number of the person. */
  phone?: InputMaybe<Scalars['String']>;
  /** The tax identifier for the person. */
  taxIdentifier?: InputMaybe<ZonosPersonTaxIdentifierInput>;
};

/** A person's tax identifier, including its type and value. */
export type ZonosPersonTaxIdentifier = {
  __typename?: 'PersonTaxIdentifier';
  /** The classification of the tax identifier. */
  type: ZonosPersonTaxIdentifierType;
  /** The tax identifier value. */
  value: Scalars['String'];
};

/** Input for providing a person's tax identifier. */
export type ZonosPersonTaxIdentifierInput = {
  /** The classification of the tax identifier. Defaults to OTHER. */
  type: ZonosPersonTaxIdentifierType;
  /** The tax identifier value. */
  value: Scalars['String'];
};

/** The classification of a person's tax identifier. */
export type ZonosPersonTaxIdentifierType =
  /** A tax identifier type not covered by other enum values. */
  | 'OTHER';

export type ZonosPlatformType =
  | 'BIGCOMMERCE'
  | 'CUSTOM_API'
  | 'ETSY'
  | 'MAGENTO'
  | 'MAGENTO_2'
  | 'MIVA'
  | 'OPENCART'
  | 'OTHER'
  | 'PRESTASHOP'
  | 'SALESFORCE'
  | 'SHOPIFY'
  | 'THREE_D_CART'
  | 'VOLUSION'
  | 'WOOCOMMERCE'
  | 'XCART';

export type ZonosPluginCredential = {
  __typename?: 'PluginCredential';
  /** The `ID` of the plugin credential. */
  id: Scalars['ID'];
  /** The Mode of the plugin credential. */
  mode: ZonosMode;
  /** The type of credential. */
  type: ZonosPluginCredentialType;
};

export type ZonosPluginCredentialType =
  /** Private credential that should not be exposed to the frontend. */
  | 'PRIVATE'
  /** Public credential that can be used in a frontend script. */
  | 'PUBLIC';

export type ZonosPostalClearanceData = {
  __typename?: 'PostalClearanceData';
  arrivalDate: Maybe<Scalars['DateTime']>;
  arrivalPortCode: Maybe<Scalars['String']>;
  carrierCode: Maybe<Scalars['String']>;
  countryOfOrigin: Maybe<ZonosCountryCode>;
  createdAt: Maybe<Scalars['DateTime']>;
  currencyCode: Maybe<ZonosCurrencyCode>;
  declaredValue: Maybe<Scalars['Decimal']>;
  description: Maybe<Scalars['String']>;
  destinationCountry: Maybe<ZonosCountryCode>;
  flightTripNumber: Maybe<Scalars['String']>;
  hsCode: Maybe<Scalars['String']>;
  natureOfTransaction: Maybe<ZonosManifestLineEndUse>;
  natureOfTransactionOverride: Maybe<ZonosManifestLineEndUse>;
  shipperAccountId: Maybe<Scalars['String']>;
  trackingNumber: Maybe<Scalars['String']>;
};

/** Enumeration for the different postal operator codes */
export type ZonosPostalOperatorCode =
  | 'J1CA18'
  | 'J1CAEA'
  | 'J1CAFA'
  | 'J1CAGA'
  | 'J1CAIA'
  | 'J1CALA'
  | 'J1CAMA'
  | 'J1CANA'
  | 'J1CAOA'
  | 'J1CARA'
  | 'J1CASA'
  | 'J1CATA'
  | 'J1CATF'
  | 'J1CAUA'
  | 'J1CAWA'
  | 'J1CAXA'
  | 'J1CAZA'
  | 'J1CBAA'
  | 'J1CBAB'
  | 'J1CBAC'
  | 'J1CBAF'
  | 'J1CBBA'
  | 'J1CBDA'
  | 'J1CBEA'
  | 'J1CBEF'
  | 'J1CBFA'
  | 'J1CBGA'
  | 'J1CBHA'
  | 'J1CBIA'
  | 'J1CBJA'
  | 'J1CBMA'
  | 'J1CBNA'
  | 'J1CBOA'
  | 'J1CBQA'
  | 'J1CBRA'
  | 'J1CBRF'
  | 'J1CBSA'
  | 'J1CBTA'
  | 'J1CBWA'
  | 'J1CBYA'
  | 'J1CBZA'
  | 'J1CC20'
  | 'J1CC28'
  | 'J1CCAA'
  | 'J1CCAB'
  | 'J1CCAF'
  | 'J1CCDA'
  | 'J1CCFA'
  | 'J1CCGA'
  | 'J1CCHA'
  | 'J1CCHF'
  | 'J1CCIA'
  | 'J1CCKA'
  | 'J1CCLA'
  | 'J1CCMA'
  | 'J1CCNA'
  | 'J1CCNF'
  | 'J1CCOA'
  | 'J1CCRA'
  | 'J1CCSF'
  | 'J1CCUA'
  | 'J1CCVA'
  | 'J1CCVF'
  | 'J1CCWA'
  | 'J1CCYA'
  | 'J1CCZA'
  | 'J1CCZF'
  | 'J1CD00'
  | 'J1CD01'
  | 'J1CDEA'
  | 'J1CDEB'
  | 'J1CDEF'
  | 'J1CDJA'
  | 'J1CDKA'
  | 'J1CDKB'
  | 'J1CDKF'
  | 'J1CDMA'
  | 'J1CDOA'
  | 'J1CDZA'
  | 'J1CECA'
  | 'J1CEEA'
  | 'J1CEGA'
  | 'J1CEGF'
  | 'J1CERA'
  | 'J1CESA'
  | 'J1CESF'
  | 'J1CESI'
  | 'J1CETA'
  | 'J1CFIA'
  | 'J1CFIF'
  | 'J1CFJA'
  | 'J1CFOA'
  | 'J1CFRA'
  | 'J1CFRB'
  | 'J1CFRD'
  | 'J1CFRF'
  | 'J1CGAA'
  | 'J1CGBA'
  | 'J1CGBF'
  | 'J1CGBI'
  | 'J1CGDA'
  | 'J1CGEA'
  | 'J1CGGA'
  | 'J1CGHA'
  | 'J1CGIB'
  | 'J1CGLA'
  | 'J1CGMA'
  | 'J1CGNA'
  | 'J1CGQA'
  | 'J1CGRA'
  | 'J1CGRF'
  | 'J1CGTA'
  | 'J1CGWA'
  | 'J1CGYA'
  | 'J1CHKA'
  | 'J1CHNA'
  | 'J1CHRA'
  | 'J1CHRF'
  | 'J1CHTA'
  | 'J1CHUA'
  | 'J1CHUF'
  | 'J1CIDA'
  | 'J1CIEA'
  | 'J1CIEF'
  | 'J1CILA'
  | 'J1CILF'
  | 'J1CIMA'
  | 'J1CINA'
  | 'J1CIQA'
  | 'J1CIRA'
  | 'J1CISA'
  | 'J1CISF'
  | 'J1CITA'
  | 'J1CITF'
  | 'J1CJ1A'
  | 'J1CJEA'
  | 'J1CJMA'
  | 'J1CJOA'
  | 'J1CJPA'
  | 'J1CJPF'
  | 'J1CKEA'
  | 'J1CKGA'
  | 'J1CKGB'
  | 'J1CKGC'
  | 'J1CKHA'
  | 'J1CKIA'
  | 'J1CKMA'
  | 'J1CKNA'
  | 'J1CKPA'
  | 'J1CKRA'
  | 'J1CKWA'
  | 'J1CKYA'
  | 'J1CKZA'
  | 'J1CLAA'
  | 'J1CLBA'
  | 'J1CLCA'
  | 'J1CLIA'
  | 'J1CLKA'
  | 'J1CLRA'
  | 'J1CLSA'
  | 'J1CLTA'
  | 'J1CLUA'
  | 'J1CLUF'
  | 'J1CLVA'
  | 'J1CLVF'
  | 'J1CLYA'
  | 'J1CMAA'
  | 'J1CMAF'
  | 'J1CMCA'
  | 'J1CMDA'
  | 'J1CMEA'
  | 'J1CMGA'
  | 'J1CMKA'
  | 'J1CMLA'
  | 'J1CMMA'
  | 'J1CMNA'
  | 'J1CMOA'
  | 'J1CMRA'
  | 'J1CMSA'
  | 'J1CMTA'
  | 'J1CMUA'
  | 'J1CMVA'
  | 'J1CMWA'
  | 'J1CMXA'
  | 'J1CMYA'
  | 'J1CMZA'
  | 'J1CNAA'
  | 'J1CNCA'
  | 'J1CNEA'
  | 'J1CNGA'
  | 'J1CNIA'
  | 'J1CNLA'
  | 'J1CNLB'
  | 'J1CNLF'
  | 'J1CNOA'
  | 'J1CNOF'
  | 'J1CNPA'
  | 'J1CNRA'
  | 'J1CNUA'
  | 'J1CNZA'
  | 'J1COMA'
  | 'J1CP00'
  | 'J1CPAA'
  | 'J1CPEA'
  | 'J1CPFA'
  | 'J1CPGA'
  | 'J1CPHA'
  | 'J1CPKA'
  | 'J1CPLA'
  | 'J1CPLF'
  | 'J1CPSA'
  | 'J1CPTA'
  | 'J1CPTF'
  | 'J1CPYA'
  | 'J1CQAA'
  | 'J1CQMA'
  | 'J1CQNA'
  | 'J1CROA'
  | 'J1CROF'
  | 'J1CROI'
  | 'J1CRSA'
  | 'J1CRSF'
  | 'J1CRUA'
  | 'J1CRWA'
  | 'J1CSAA'
  | 'J1CSBA'
  | 'J1CSCA'
  | 'J1CSDA'
  | 'J1CSEA'
  | 'J1CSEB'
  | 'J1CSEF'
  | 'J1CSGA'
  | 'J1CSHA'
  | 'J1CSHB'
  | 'J1CSHC'
  | 'J1CSIA'
  | 'J1CSIF'
  | 'J1CSKA'
  | 'J1CSKF'
  | 'J1CSLA'
  | 'J1CSMA'
  | 'J1CSNA'
  | 'J1CSNF'
  | 'J1CSOA'
  | 'J1CSRA'
  | 'J1CSSA'
  | 'J1CSTA'
  | 'J1CSVA'
  | 'J1CSXA'
  | 'J1CSYA'
  | 'J1CSZA'
  | 'J1CT20'
  | 'J1CTCA'
  | 'J1CTDA'
  | 'J1CTGA'
  | 'J1CTGF'
  | 'J1CTHA'
  | 'J1CTHF'
  | 'J1CTJA'
  | 'J1CTKA'
  | 'J1CTLA'
  | 'J1CTMA'
  | 'J1CTMB'
  | 'J1CTNA'
  | 'J1CTNF'
  | 'J1CTOA'
  | 'J1CTPA'
  | 'J1CTRA'
  | 'J1CTRF'
  | 'J1CTTA'
  | 'J1CTVA'
  | 'J1CTZA'
  | 'J1CUAA'
  | 'J1CUAB'
  | 'J1CUGA'
  | 'J1CUPU'
  | 'J1CUSA'
  | 'J1CUSB'
  | 'J1CUSF'
  | 'J1CUYA'
  | 'J1CUZA'
  | 'J1CVAA'
  | 'J1CVCA'
  | 'J1CVEA'
  | 'J1CVGA'
  | 'J1CVNA'
  | 'J1CVUA'
  | 'J1CWFA'
  | 'J1CWOO'
  | 'J1CWOP'
  | 'J1CWOQ'
  | 'J1CWOR'
  | 'J1CWOS'
  | 'J1CWOT'
  | 'J1CWOU'
  | 'J1CWOV'
  | 'J1CWOW'
  | 'J1CWPN'
  | 'J1CWPO'
  | 'J1CWPP'
  | 'J1CWPQ'
  | 'J1CWPR'
  | 'J1CWPS'
  | 'J1CWPT'
  | 'J1CWPU'
  | 'J1CWPV'
  | 'J1CWPW'
  | 'J1CWQN'
  | 'J1CWQO'
  | 'J1CWQP'
  | 'J1CWQQ'
  | 'J1CWQR'
  | 'J1CWQS'
  | 'J1CWQT'
  | 'J1CWQU'
  | 'J1CWQV'
  | 'J1CWQW'
  | 'J1CWRN'
  | 'J1CWRO'
  | 'J1CWRP'
  | 'J1CWRQ'
  | 'J1CWRR'
  | 'J1CWRS'
  | 'J1CWRT'
  | 'J1CWRU'
  | 'J1CWRV'
  | 'J1CWRW'
  | 'J1CWSA'
  | 'J1CWSN'
  | 'J1CWSO'
  | 'J1CWSP'
  | 'J1CWSQ'
  | 'J1CWSR'
  | 'J1CWSS'
  | 'J1CWST'
  | 'J1CWSU'
  | 'J1CWSV'
  | 'J1CWSW'
  | 'J1CWTN'
  | 'J1CWTO'
  | 'J1CWTP'
  | 'J1CWTQ'
  | 'J1CWTR'
  | 'J1CWTS'
  | 'J1CWTT'
  | 'J1CWTU'
  | 'J1CWTV'
  | 'J1CWTW'
  | 'J1CWUN'
  | 'J1CWUO'
  | 'J1CWUP'
  | 'J1CWUQ'
  | 'J1CWUR'
  | 'J1CWUS'
  | 'J1CWUT'
  | 'J1CWUU'
  | 'J1CWUV'
  | 'J1CWUW'
  | 'J1CWVN'
  | 'J1CWVO'
  | 'J1CWVP'
  | 'J1CWVQ'
  | 'J1CWVR'
  | 'J1CWVS'
  | 'J1CWVT'
  | 'J1CWVU'
  | 'J1CWVV'
  | 'J1CWWN'
  | 'J1CWWP'
  | 'J1CWWT'
  | 'J1CWWV'
  | 'J1CXZA'
  | 'J1CYEA'
  | 'J1CYUA'
  | 'J1CZAA'
  | 'J1CZMA'
  | 'J1CZWA'
  | 'J2B'
  | 'J2C'
  | 'J3I'
  | 'J3M'
  | 'J4'
  | 'J7C'
  | 'J20'
  | 'J21'
  | 'J30'
  | 'J51'
  | 'J52'
  | 'JJ00C001'
  | 'JJ00C002'
  | 'JJ00C003'
  | 'JJ00C004'
  | 'JJ00C005'
  | 'JJ00C006'
  | 'JJ00C007'
  | 'JJ00C008'
  | 'JJ00C009'
  | 'JJ00C010'
  | 'JJ00C011'
  | 'JJ00C012'
  | 'JJ00C013'
  | 'JJ00C014'
  | 'JJ00C015'
  | 'JJ00C016'
  | 'JJ00C017'
  | 'JJ00C018'
  | 'JJ00C019'
  | 'JJ00C020'
  | 'JJ00C021'
  | 'JJ00C022'
  | 'JJ00C024'
  | 'JJ00C025'
  | 'JJ00C026'
  | 'JJ00C027'
  | 'JJ00C028'
  | 'JJ00C029'
  | 'JJ00C030'
  | 'JJ00C031'
  | 'JJ00C032'
  | 'JJ00C033'
  | 'JJ00C034'
  | 'JJ00C035'
  | 'JJ00C036'
  | 'JJ00C037'
  | 'JJ00C038'
  | 'JJ00C039'
  | 'JJ00CZ53'
  | 'OTHER';

export type ZonosProductUrlScrapedData = {
  __typename?: 'ProductUrlScrapedData';
  /** The category hierarchy scraped from the productUrl. */
  categories: Maybe<Array<Scalars['String']>>;
  /** The product description scraped from the productUrl. */
  description: Maybe<Scalars['String']>;
  /** The image URL scraped from the productUrl. */
  imageUrl: Maybe<Scalars['String']>;
  /** The material composition scraped from the productUrl. */
  material: Maybe<Scalars['String']>;
  /** The product name scraped from the productUrl. */
  name: Maybe<Scalars['String']>;
};

/** Contains proof of delivery information from the carrier if available, which may include signature images, recipient names, and/or proof of delivery documents. */
export type ZonosProofOfDelivery = {
  __typename?: 'ProofOfDelivery';
  /** Time when the proof was captured. */
  createdAt: Maybe<Scalars['DateTime']>;
  /** URL to download the proof of delivery document, if available. */
  documentUrl: Maybe<Scalars['String']>;
  /** Name of the person who signed for or received the package. */
  recipientName: Maybe<Scalars['String']>;
  /** Base64 encoded signature image, if available. */
  signatureImage: Maybe<Scalars['String']>;
  /** Type of proof provided. */
  type: ZonosProofOfDeliveryType;
};

/** Available types of proof of delivery */
export type ZonosProofOfDeliveryType =
  /** Electronic proof of delivery document. */
  | 'DOCUMENT'
  /** No signature required / contactless delivery. */
  | 'NO_SIGNATURE_REQUIRED'
  /** Physical signature captured. */
  | 'SIGNATURE';

/** Enumeration for property types associated with a location */
export type ZonosPropertyType =
  /** Represents a commercial property. */
  | 'COMMERCIAL'
  /** Deprecated: Use RESIDENTIAL instead. */
  | 'RESIDENTAL'
  /** Represents a residential property. */
  | 'RESIDENTIAL';

export type ZonosProvidedHsCodeSource =
  | 'CLASSIFY'
  | 'USER';

export type ZonosProvidedHsCodeVisibilityStatus =
  | 'NOT_VISIBLE'
  | 'VISIBLE';

/** interface Node { id: ID! } */
export type ZonosQuery = {
  __typename?: 'Query';
  /** Returns a `Carrier` resource by ID. */
  carrier: Maybe<ZonosCarrier>;
  /** Returns a `CarrierAccount` by ID */
  carrierAccount: Maybe<ZonosCarrierAccount>;
  /** Returns all the information tied to the `Carrier` that a specified organization uses. */
  carrierAccounts: Maybe<Array<Maybe<ZonosCarrierAccount>>>;
  /** Retrieve a `CarrierBillingInvoice` by ID */
  carrierBillingInvoice: Maybe<ZonosCarrierBillingInvoice>;
  /** Retrieve a `CarrierBillingInvoiceConnection` based on a `CarrierBillingInvoiceFilter` criteria */
  carrierBillingInvoices: ZonosCarrierBillingInvoiceConnection;
  /** Returns a `Carrier` based on a `string` code. */
  carrierByCode: Maybe<ZonosCarrier>;
  /** Retrieve a `CarrierInvoiceAccountNumberMapping` by ID */
  carrierInvoiceAccountNumberMapping: Maybe<ZonosCarrierInvoiceAccountNumberMapping>;
  /** Retrieve `CarrierInvoiceAccountNumberMappingConnection`s based on a `CarrierInvoiceAccountNumberMappingFilter` criteria */
  carrierInvoiceAccountNumberMappings: ZonosCarrierInvoiceAccountNumberMappingConnection;
  /** Returns available carrier packaging types with their dimensions and weight limits. */
  carrierPackagingTypes: Array<ZonosCarrierPackagingType>;
  /** Returns a list of `Carrier` resources by ID. */
  carriers: Maybe<Array<Maybe<ZonosCarrier>>>;
  /** Returns an `Cart` resource by ID. */
  cart: Maybe<ZonosCart>;
  /** Returns a `Carton` resource by `ID` */
  carton: Maybe<ZonosCarton>;
  /** Query for the CartonizationSettings associated with the callers organization */
  cartonizationSettings: ZonosCartonizationSettings;
  /** Returns a list of `Carton` objects that apply to a `root` */
  cartons: Maybe<Array<Maybe<ZonosCarton>>>;
  /** Returns a list of `Item` resources. */
  carts: ZonosCartConnection;
  /** Returns a `CatalogItem` by ID. */
  catalogItem: Maybe<ZonosCatalogItem>;
  /** Retrieves a catalog item delete job by its ID. */
  catalogItemDeleteJob: Maybe<ZonosDeleteJob>;
  /** Retrieves a list of catalog item delete jobs. */
  catalogItemDeleteJobs: Maybe<ZonosDeleteJobsConnection>;
  /** Retrieves a catalog item export job by its ID. */
  catalogItemExportJob: Maybe<ZonosExportJob>;
  /** Retrieves a list of catalog item export jobs. */
  catalogItemExportJobs: Maybe<ZonosExportJobConnection>;
  /** Returns a list of `CatalogItem`. */
  catalogItems: Maybe<ZonosCatalogItemConnection>;
  /** Returns a `CheckoutSession` by ID. */
  checkoutSession: ZonosCheckoutSession;
  /** Returns a `CheckoutSession` by LandedCost ID. */
  checkoutSessionByLandedCostId: ZonosCheckoutSession;
  /** Returns a `Classification` resource by ID. */
  classification: Maybe<ZonosClassification>;
  /** Returns a list of `Classification` resources. */
  classifications: Maybe<ZonosClassificationConnection>;
  /** Returns data about what Classify supports. */
  classifySupportedData: ZonosClassifySupportedData;
  /** Query a `CollectInvoice` by its internal ID. */
  collectInvoice: Maybe<ZonosCollectInvoice>;
  /** Returns the current `CollectInvoiceFeeConfiguration` for the calling tokens `Organization` */
  collectInvoiceFeeConfiguration: Maybe<ZonosCollectInvoiceFeeConfiguration>;
  collectInvoiceSettings: Maybe<ZonosCollectInvoiceSettings>;
  /** Query for a `CollectSubmission` based on ID. */
  collectSubmission: Maybe<ZonosCollectSubmission>;
  /** Query for a list of `CollectSubmission`s based on provided filter params. */
  collectSubmissions: ZonosCollectSubmissionConnection;
  /** Query a `CollectUploadEvent` object by ID */
  collectUploadEvent: ZonosCollectUploadEvent;
  collectUploadEvents: ZonosCollectUploadEventConnection;
  /** Returns a consignment by ID. */
  consignment: Maybe<ZonosConsignment>;
  /** Returns a paginated list of consignments. */
  consignments: ZonosConsignmentConnection;
  /** Returns a consolidation by ID. */
  consolidation: Maybe<ZonosConsolidation>;
  /** Returns a paginated list of consolidations. */
  consolidations: ZonosConsolidationConnection;
  /** Get the field labels for a country */
  countryFieldLabel: ZonosCountryFieldLabel;
  /** Returns a `CountryOfOriginInference` resource by ID. */
  countryOfOriginInference: Maybe<ZonosCountryOfOriginInference>;
  /** Returns a list of `CountryOfOriginInference` resources. */
  countryOfOriginInferences: ZonosCountryOfOriginInferenceConnection;
  /** Returns a country of origin bulk job by ID. */
  countryOfOriginJob: Maybe<ZonosCountryOfOriginJob>;
  /** Returns a list of country of origin bulk jobs. */
  countryOfOriginJobs: ZonosCountryOfOriginJobConnection;
  /** Returns a `CurrencyFormat` resource by CurrencyCode */
  currencyFormat: Maybe<ZonosCurrencyFormat>;
  /** Query for a CustomsDocument by ID */
  customsDocument: Maybe<ZonosCustomsDocument>;
  /** Query for a paginated connection of CustomsDocuments */
  customsDocuments: ZonosCustomsDocumentConnection;
  /** Query for any `CustomsDocument` objects associated with the given reference ID. */
  customsDocumentsByReferenceId: Array<ZonosCustomsDocument>;
  /** Look up customs requirement definitions from the catalog by lane and HS codes. */
  customsRequirements: Array<ZonosCustomsRequirement>;
  /** Retrieve a `CustomsSpec` by ID */
  customsSpec: Maybe<ZonosCustomsSpec>;
  /** Retrieve a `CustomsSpec` by a reference ID. Can be an order number, `Order`.id, or `Shipment.id. */
  customsSpecByReference: Maybe<ZonosCustomsSpec>;
  /** Retrieve a list of `CustomsSpec` objects */
  customsSpecs: Maybe<ZonosCustomsSpecConnection>;
  /** Query for a `Declaration` by ID or trackingNumber */
  declaration: Maybe<ZonosDeclaration>;
  /** Query for a `Declaration` by ID */
  declarationById: Maybe<ZonosDeclaration>;
  /** Query for a `Declaration` by a specified filter */
  declarationFiltered: Maybe<ZonosDeclaration>;
  /** Retrieve a list of `Declaration` objects */
  declarations: Maybe<ZonosDeclarationConnection>;
  /** Returns an `ExchangeRate` resource by ID. */
  exchangeRate: Maybe<ZonosExchangeRate>;
  /** Returns an `ExtractedItem` resource by ID. */
  extractedItem: Maybe<ZonosExtractedItem>;
  /** Returns a `FulfillmentCenter` object by ID. */
  fulfillmentCenter: Maybe<ZonosFulfillmentCenter>;
  /** Returns a list of `FulfillmentCenter` objects for an `Organization` */
  fulfillmentCenters: Maybe<Array<ZonosFulfillmentCenter>>;
  generateInsertableCsvs: Scalars['String'];
  generateSQLFilesForTesting: Scalars['String'];
  /** Retrieves a person by their unique identifier. */
  getPerson: Maybe<ZonosPerson>;
  /** Returns a previously computed `GreenLight` by ID. */
  greenLight: Maybe<ZonosGreenLight>;
  /** Returns a paginated list of previously computed `GreenLight` audits. */
  greenLights: ZonosGreenLightConnection;
  /** Returns a handling unit by ID. */
  handlingUnit: Maybe<ZonosHandlingUnit>;
  /** Returns `HelloSettings` associated with the current token's `Organization` */
  helloSettings: Maybe<ZonosHelloSettings>;
  /** Returns a list of matching HsCode fragments. */
  hsCodeFragments: Array<ZonosHsCodeFragment>;
  /** Returns an `Item` resource by ID. */
  item: Maybe<ZonosItem>;
  itemRestrictionResult: Maybe<ZonosItemRestrictionResult>;
  itemRestrictionResults: Maybe<ZonosItemRestrictionResultConnection>;
  /** Returns a list of `Item` resources. */
  items: Maybe<ZonosItemConnection>;
  label: Maybe<ZonosLabel>;
  labels: Maybe<ZonosLabelConnection>;
  /** Returns a `LandedCost` resource by `ID` */
  landedCost: Maybe<ZonosLandedCost>;
  /** Returns a list of `LandedCost` resources */
  landedCosts: Maybe<ZonosLandedCostConnection>;
  /** Retrieves a location by its unique identifier. */
  location: Maybe<ZonosLocation>;
  /** Retrieves inventory information for the specified SKUs. */
  magentoInventory: Maybe<Array<Maybe<ZonosMagentoInventory>>>;
  /** Checks the stock status and available quantity for the specified items, accounting for reservations. */
  magentoReservationStockStatus: Maybe<Array<Maybe<ZonosMagentoStockResult>>>;
  /** Retrieves a single `MagentoScope` by scope type and ID. */
  magentoScope: ZonosMagentoScope;
  /** Returns a list of `MagentoScope` resources matching the filter criteria. */
  magentoScopes: Array<Maybe<ZonosMagentoScope>>;
  /** Returns a manifest by its ID. */
  manifest: ZonosManifest;
  manifestLines: ZonosManifestLineConnection;
  order: Maybe<ZonosOrder>;
  /** Finds all items for an `Order` that are shipped and not yet shipped. */
  orderFulfillmentProgress: ZonosOrderFulfillmentProgressResult;
  /** Line items for a reconciled payout. */
  orderPayoutDetails: Maybe<ZonosOrderPayoutDetailItemConnection>;
  orders: Maybe<ZonosOrderConnection>;
  /** Find orders by a list of account order numbers (maximum 100) */
  ordersByAccountOrderNumbers: Array<ZonosOrder>;
  /** Search orders by item details (SKU, product ID) for bulk label processing. Returns orders containing items that match the filter criteria. */
  ordersByItemSearch: Maybe<ZonosOrderConnection>;
  /** List orders with search filters and fuzzy search support */
  ordersSearch: Maybe<ZonosOrderConnection>;
  organizationVendor: ZonosOrganizationVendor;
  /** Returns a `PackagingOption` resource by `ID` */
  packagingOption: Maybe<ZonosPackagingOption>;
  /**
   * Deprecated method to return a list of `PackagingOption` objects that apply to an `organization`, use packagingOptionsConnection instead
   * @deprecated use packagingOptionsConnection instead
   */
  packagingOptions: Maybe<Array<Maybe<ZonosPackagingOption>>>;
  /** Returns a list of `PackagingOption` objects that apply to an `organization` */
  packagingOptionsConnection: Maybe<ZonosPackagingOptionConnection>;
  /** Retrieve a packing slip by its ID */
  packingSlip: Maybe<ZonosPackingSlip>;
  /** Retrieve a packing slip by the associated shipment carton ID */
  packingSlipByShipmentCarton: Maybe<ZonosPackingSlip>;
  /** Retrieve the packing slip settings for the current organization */
  packingSlipSettings: Maybe<ZonosPackingSlipSettings>;
  /** Retrieve all packing slips for a shipment */
  packingSlipsByShipment: Array<ZonosPackingSlip>;
  /** Retrieves a list of parties that match the given filter criteria. Requires PARTY_READ permission. */
  parties: Maybe<Array<Maybe<ZonosParty>>>;
  /** Retrieves all parties by their unique identifiers. Requires PARTY_READ permission. */
  partiesFindAllById: Maybe<Array<Maybe<ZonosParty>>>;
  /** Retrieves a party by its unique identifier. Requires PARTY_READ permission. */
  party: Maybe<ZonosParty>;
  partyScreening: Maybe<ZonosPartyScreening>;
  partyScreenings: Maybe<ZonosPartyScreeningConnection>;
  /** Retrieve a `PddpCountrySpec` by ID */
  pddpCountrySpec: Maybe<ZonosPddpCountrySpec>;
  /** Retrieve a list of `PddpCountrySpec` objects */
  pddpCountrySpecs: Maybe<ZonosPddpCountrySpecConnection>;
  /** Returns the `PddpSettings` for the calling token's `Organization` */
  pddpSettings: ZonosPddpSettings;
  /** Return a PDDP submission by an ID. */
  pddpSubmission: Maybe<ZonosPddpSubmission>;
  /** Return a PDDP submission log by an ID. */
  pddpSubmissionLog: Maybe<ZonosPddpSubmissionLog>;
  /** Returns a paginated list of PDDP submissions logs. */
  pddpSubmissionLogs: Maybe<ZonosPddpSubmissionLogConnection>;
  /** Returns a paginated list of PDDP submissions. */
  pddpSubmissions: Maybe<ZonosPddpSubmissionConnection>;
  /** Get a plugin credential for a specific mode. Allows switching a credential between live and test mode. */
  pluginCredential: Maybe<ZonosPluginCredential>;
  /** Query for a `Reconciliation` by ID */
  reconciliation: Maybe<ZonosReconciliation>;
  /** Look up a single restriction result by ID. */
  restrictionResult: Maybe<ZonosRestrictionResult>;
  /** Paginated list of restriction results. */
  restrictionResults: ZonosRestrictionResultConnection;
  /** Returns a `ServiceLevel` resource by ID. */
  serviceLevel: Maybe<ZonosServiceLevel>;
  /** Returns a `ServiceLevelArea` resource by ID. */
  serviceLevelArea: Maybe<ZonosServiceLevelArea>;
  /** Retreive the ServiceLevelAreas for a giving ServiceLevel optionally filtering by a destination location */
  serviceLevelAreas: Maybe<Array<Maybe<ZonosServiceLevelArea>>>;
  /** Returns a `ServiceLevelRateChart` by ID. */
  serviceLevelRateChart: Maybe<ZonosServiceLevelRateChart>;
  /** Returns a list of `ServiceLevelRateChart` objects that apply to a `ServiceLevel` */
  serviceLevelRateCharts: Maybe<Array<Maybe<ZonosServiceLevelRateChart>>>;
  /** Returns a list of `ServiceLevel` resources for an organization. */
  serviceLevels: Maybe<Array<Maybe<ZonosServiceLevel>>>;
  shipment: Maybe<ZonosShipment>;
  /** Query for a `ShipmentConsolidation` by ID */
  shipmentConsolidation: Maybe<ZonosShipmentConsolidation>;
  /** Query for a paginated connection of `ShipmentConsolidation` objects */
  shipmentConsolidations: Maybe<ZonosShipmentConsolidationConnection>;
  /** Returns a `ShipmentRating` resource by ID. */
  shipmentRating: Maybe<ZonosShipmentRating>;
  /** Returns a `ShipmentRatingConnection` resource with the given filters and pagination parameters. */
  shipmentRatings: ZonosShipmentRatingConnection;
  shipments: Maybe<ZonosShipmentConnection>;
  /** Returns a `ShippingProfile` by ID. */
  shippingProfile: Maybe<ZonosShippingProfile>;
  /** Returns a list of `ShippingProfile` objects that apply to an `Organization`. */
  shippingProfiles: Maybe<Array<Maybe<ZonosShippingProfile>>>;
  /** Returns a Shipping Store Settings resource by store id. */
  shippingStoreSettings: Maybe<ZonosShippingStoreSettings>;
  /** Returns a `ShippingZone` resource by ID. */
  shippingZone: Maybe<ZonosShippingZone>;
  /** Returns a list of `ShippingZone` resources for an organization. */
  shippingZones: Maybe<Array<Maybe<ZonosShippingZone>>>;
  shortUrl: Maybe<ZonosShortUrl>;
  shortUrlClicks: Array<ZonosShortUrlClick>;
  shortUrls: Array<ZonosShortUrl>;
  /** Get store credit by ID */
  storeCredit: ZonosStoreCredit;
  /** Get store credit transaction groups (parent transactions only, with related child transactions) */
  storeCreditTransactionGroups: ZonosStoreCreditTransactionConnection;
  /** Get store credit transactions */
  storeCreditTransactions: ZonosStoreCreditTransactionConnection;
  /** Get all store credit for a customer */
  storeCreditsByCustomer: Array<ZonosStoreCredit>;
  taxIds: Maybe<Array<Maybe<ZonosTaxId>>>;
  usages: ZonosUsageConnection;
  /** Returns a ValidatedItem by ID */
  validatedItem: Maybe<ZonosValidatedItem>;
  /** Returns a `ValueEstimation` resource by ID. */
  valueEstimation: Maybe<ZonosValueEstimation>;
  /** Returns a list of `ValueEstimation` resources. */
  valueEstimations: ZonosValueEstimationConnection;
  /** Returns a `ValueValidation` resource by ID. */
  valueValidation: Maybe<ZonosValueValidation>;
  /** Returns a list of `ValueValidation` resources. */
  valueValidations: ZonosValueValidationConnection;
  /** Returns a `Webhook` resource by `ID`. */
  webhook: Maybe<ZonosWebhook>;
  /** Returns a `WebhookLog` resource by `ID`. */
  webhookLog: Maybe<ZonosWebhookLog>;
  /** Returns a list of `WebhookLog` resources. */
  webhookLogs: ZonosWebhookLogConnection;
  /** Returns a list of `Webhook` resources. */
  webhooks: ZonosWebhookConnection;
};


/** interface Node { id: ID! } */
export type ZonosQueryCarrierArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCarrierAccountArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCarrierAccountsArgs = {
  filter: InputMaybe<ZonosCarrierAccountsFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCarrierBillingInvoiceArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCarrierBillingInvoicesArgs = {
  after: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosCarrierBillingInvoiceFilter>;
  first: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCarrierByCodeArgs = {
  code: Scalars['String'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCarrierInvoiceAccountNumberMappingArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCarrierInvoiceAccountNumberMappingsArgs = {
  after: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosCarrierInvoiceAccountNumberMappingFilter>;
  first?: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCarrierPackagingTypesArgs = {
  carrier: Scalars['String'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCarriersArgs = {
  filter: InputMaybe<ZonosCarriersFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCartArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCartonArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCartonsArgs = {
  filter: InputMaybe<ZonosCartonsFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCartsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCatalogItemArgs = {
  id: InputMaybe<Scalars['ID']>;
  productId: InputMaybe<Scalars['String']>;
  sku: InputMaybe<Scalars['String']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCatalogItemDeleteJobArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCatalogItemDeleteJobsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosDeleteJobsFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCatalogItemExportJobArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCatalogItemExportJobsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosExportJobsFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCatalogItemsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosCatalogItemFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCheckoutSessionArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCheckoutSessionByLandedCostIdArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryClassificationArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryClassificationsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosClassificationFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCollectInvoiceArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCollectSubmissionArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCollectSubmissionsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosCollectSubmissionFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCollectUploadEventArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCollectUploadEventsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosCollectUploadEventFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryConsignmentArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryConsignmentsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosConsignmentFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryConsolidationArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryConsolidationsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosConsolidationFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCountryFieldLabelArgs = {
  countryCode: ZonosCountryCode;
};


/** interface Node { id: ID! } */
export type ZonosQueryCountryOfOriginInferenceArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCountryOfOriginInferencesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCountryOfOriginJobArgs = {
  jobId: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCountryOfOriginJobsArgs = {
  after: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosCountryOfOriginJobFilter>;
  first: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCurrencyFormatArgs = {
  input: ZonosCurrencyCode;
};


/** interface Node { id: ID! } */
export type ZonosQueryCustomsDocumentArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCustomsDocumentsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosCustomsDocumentFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryCustomsDocumentsByReferenceIdArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCustomsRequirementsArgs = {
  filter: ZonosCustomsRequirementsFilter;
};


/** interface Node { id: ID! } */
export type ZonosQueryCustomsSpecArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCustomsSpecByReferenceArgs = {
  referenceId: Scalars['String'];
};


/** interface Node { id: ID! } */
export type ZonosQueryCustomsSpecsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosCustomsSpecFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryDeclarationArgs = {
  id: InputMaybe<Scalars['ID']>;
  trackingNumber: InputMaybe<Scalars['String']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryDeclarationByIdArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryDeclarationFilteredArgs = {
  filter: ZonosDeclarationFilter;
};


/** interface Node { id: ID! } */
export type ZonosQueryDeclarationsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosDeclarationFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryExchangeRateArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryExtractedItemArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryFulfillmentCenterArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryFulfillmentCentersArgs = {
  filter: InputMaybe<ZonosFulfillmentCenterFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryGetPersonArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryGreenLightArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryGreenLightsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosGreenLightFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryHandlingUnitArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryHsCodeFragmentsArgs = {
  filter: ZonosHsCodeFragmentsFilter;
};


/** interface Node { id: ID! } */
export type ZonosQueryItemArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryItemRestrictionResultArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryItemRestrictionResultsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryLabelArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryLabelsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosLabelFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryLandedCostArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryLandedCostsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosLandedCostFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryLocationArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryMagentoInventoryArgs = {
  skus: Array<Scalars['String']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryMagentoReservationStockStatusArgs = {
  items: Array<ZonosMagentoInventoryItemInput>;
};


/** interface Node { id: ID! } */
export type ZonosQueryMagentoScopeArgs = {
  scope: ZonosScope;
  scopeId: Scalars['String'];
};


/** interface Node { id: ID! } */
export type ZonosQueryMagentoScopesArgs = {
  filter: ZonosMagentoScopeFilterInput;
};


/** interface Node { id: ID! } */
export type ZonosQueryManifestArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryManifestLinesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosManifestLineFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryOrderArgs = {
  orderId: Scalars['String'];
};


/** interface Node { id: ID! } */
export type ZonosQueryOrderFulfillmentProgressArgs = {
  orderId: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryOrderPayoutDetailsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
  payoutId: Scalars['String'];
};


/** interface Node { id: ID! } */
export type ZonosQueryOrdersArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosOrdersFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryOrdersByAccountOrderNumbersArgs = {
  accountOrderNumbers: Array<Scalars['String']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryOrdersByItemSearchArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosOrderItemSearchFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryOrdersSearchArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosOrderSearchFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryOrganizationVendorArgs = {
  externalId: InputMaybe<Scalars['String']>;
  id: InputMaybe<Scalars['ID']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryPackagingOptionArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryPackagingOptionsArgs = {
  filter: InputMaybe<ZonosPackagingOptionsFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryPackagingOptionsConnectionArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosPackagingOptionsFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryPackingSlipArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryPackingSlipByShipmentCartonArgs = {
  shipmentCartonId: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryPackingSlipsByShipmentArgs = {
  shipmentId: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryPartiesArgs = {
  input: InputMaybe<ZonosPartyFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryPartiesFindAllByIdArgs = {
  input: Array<Scalars['ID']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryPartyArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryPartyScreeningArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryPartyScreeningsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosPartyScreeningFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryPddpCountrySpecArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryPddpCountrySpecsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryPddpSubmissionArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryPddpSubmissionLogArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryPddpSubmissionLogsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosPddpSubmissionLogFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryPddpSubmissionsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosPddpSubmissionFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryPluginCredentialArgs = {
  mode?: InputMaybe<ZonosMode>;
  source: Scalars['String'];
  type: ZonosPluginCredentialType;
};


/** interface Node { id: ID! } */
export type ZonosQueryReconciliationArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryRestrictionResultArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryRestrictionResultsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosRestrictionResultsFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryServiceLevelArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryServiceLevelAreaArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryServiceLevelAreasArgs = {
  filter: InputMaybe<ZonosServiceLevelAreasFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryServiceLevelRateChartArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryServiceLevelRateChartsArgs = {
  filter: InputMaybe<ZonosServiceLevelRateChartsFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryServiceLevelsArgs = {
  carrier: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosServiceLevelFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryShipmentArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryShipmentConsolidationArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryShipmentConsolidationsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosShipmentConsolidationFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryShipmentRatingArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryShipmentRatingsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosShipmentRatingFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryShipmentsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosShipmentFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryShippingProfileArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryShippingProfilesArgs = {
  filter: InputMaybe<ZonosShippingProfilesFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryShippingStoreSettingsArgs = {
  storeId: Scalars['Int'];
};


/** interface Node { id: ID! } */
export type ZonosQueryShippingZoneArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryShippingZonesArgs = {
  filter: InputMaybe<ZonosShippingZonesFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryShortUrlArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryShortUrlClicksArgs = {
  code: Scalars['String'];
};


/** interface Node { id: ID! } */
export type ZonosQueryStoreCreditArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryStoreCreditTransactionGroupsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosStoreCreditTransactionFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryStoreCreditTransactionsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosStoreCreditTransactionFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryStoreCreditsByCustomerArgs = {
  checkoutCustomerId: Scalars['ID'];
  filter: InputMaybe<ZonosStoreCreditFilter>;
};


/** interface Node { id: ID! } */
export type ZonosQueryTaxIdsArgs = {
  filter: InputMaybe<ZonosTaxIdFilterInput>;
};


/** interface Node { id: ID! } */
export type ZonosQueryUsagesArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosUsageFilter>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryValidatedItemArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryValueEstimationArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryValueEstimationsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryValueValidationArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryValueValidationsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryWebhookArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryWebhookLogArgs = {
  id: Scalars['ID'];
};


/** interface Node { id: ID! } */
export type ZonosQueryWebhookLogsArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosWebhookLogsFilterInput>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};


/** interface Node { id: ID! } */
export type ZonosQueryWebhooksArgs = {
  after: InputMaybe<Scalars['String']>;
  before: InputMaybe<Scalars['String']>;
  filter: InputMaybe<ZonosWebhooksFilterInput>;
  first: InputMaybe<Scalars['Int']>;
  last: InputMaybe<Scalars['Int']>;
};

export type ZonosQueueDataMigrationInput = {
  /** The area of data to migrate, such as Shipping or Catalog. If no value is provided, all areas will be queued. */
  dataArea?: InputMaybe<Scalars['String']>;
  /** The 'storeId' to be migrated. */
  storeId: Scalars['Int'];
};

export type ZonosRecalculatorExchangeRateLogging =
  | 'DISABLED'
  | 'ENABLED';

export type ZonosReconciliation = {
  __typename?: 'Reconciliation';
  /** List of `ReconciliationCharge` objects associated with this Reconciliation */
  charges: Array<ZonosReconciliationCharge>;
  /** Date and time of when this `Reconciliation` object was created */
  createdAt: Scalars['DateTime'];
  /** The ID of the user who created this `Reconciliation` */
  createdBy: Scalars['ID'];
  /** The ID of this Reconciliation object */
  id: Scalars['ID'];
  /** Optional note about this `Reconciliation` object */
  note: Maybe<Scalars['String']>;
};

export type ZonosReconciliationCharge = {
  /** The amount of the `ReconciliationCharge` */
  amount: Scalars['Decimal'];
  /** Date and time of when this `StripeSubscriptionCharge` object was created */
  createdAt: Scalars['DateTime'];
  /** The currency the amount is displayed in */
  currencyCode: ZonosCurrencyCode;
  /** A unique identifier for this `ReconciliationCharge` */
  id: Scalars['ID'];
  /** An optional note about this `ReconciliationCharge` */
  note: Maybe<Scalars['String']>;
};

export type ZonosRegulationAlternate = {
  __typename?: 'RegulationAlternate';
  /** The CFR reference in the regulations list that this is an alternate for. */
  alternateForReferenceId: Maybe<Scalars['String']>;
  /** AI confidence score (0-1) that this regulation applies to the item. */
  confidenceScore: Maybe<Scalars['Decimal']>;
  /** The CFR reference. */
  referenceId: Scalars['String'];
  /** Summary of the regulation. */
  summary: Maybe<Scalars['String']>;
};

/** Regulation match summary aggregated across items. */
export type ZonosRegulationRiskSummary = {
  __typename?: 'RegulationRiskSummary';
  /** Number of items that matched at least one regulation. 0 if no regulation matched. */
  affectedItemCount: Scalars['Int'];
  /** Total number of regulation matches across all items. 0 if no regulation matched. */
  matchedCount: Scalars['Int'];
  /** Maximum confidence score (0-1) observed across all matched regulations. Null if no regulation matched. */
  maxConfidenceScore: Maybe<Scalars['Decimal']>;
};

/** Compliance requirements for a regulation. */
export type ZonosRegulatoryRequirements = {
  __typename?: 'RegulatoryRequirements';
  /** Labeling requirements (warning text, tracking labels, etc.). */
  labelingRequirements: Maybe<Array<ZonosLabelingRequirement>>;
  /** Required tests for compliance. */
  testingRequirements: Maybe<Array<ZonosTestingRequirement>>;
};

export type ZonosRemittance = {
  __typename?: 'Remittance';
  amount: Scalars['Decimal'];
  description: Scalars['String'];
  note: Scalars['String'];
  taxId: Maybe<Scalars['String']>;
};

export type ZonosRequestedCartonItem = {
  __typename?: 'RequestedCartonItem';
  amount: Scalars['Decimal'];
  countryOfOrigin: ZonosCountryCode;
  currencyCode: ZonosCurrencyCode;
  description: Scalars['String'];
  hsCode: Scalars['String'];
  quantity: Scalars['Int'];
};

export type ZonosRequestedCartonItemInput = {
  amount: Scalars['Decimal'];
  countryOfOrigin: ZonosCountryCode;
  currencyCode: ZonosCurrencyCode;
  description: Scalars['String'];
  hsCode: Scalars['String'];
  measurements: Array<ZonosItemMeasurementsInput>;
  productId?: InputMaybe<Scalars['String']>;
  quantity: Scalars['Int'];
  sku?: InputMaybe<Scalars['String']>;
};

export type ZonosRerunRestrictionsInput = {
  /** Whether to use AI mode for the rerun. */
  aiMode: Scalars['Boolean'];
  /** Optional rerun ID to group all results together. If null, generates a new UUID. */
  rerunId?: InputMaybe<Scalars['String']>;
  /** The test ID to rerun restrictions for. If null, reruns ALL order_ids from restriction_sample_test. */
  testId?: InputMaybe<Scalars['String']>;
};

/** A `RestrictedItem represent an item that has been restricted. 3 ways an item can be restricted: via catalog's restricted countries, a rule, or itemRestriction API. */
export type ZonosRestrictedItem = {
  __typename?: 'RestrictedItem';
  /** The action taken on the restricted item. */
  action: ZonosRestrictedItemAction;
  /** `CatalogItem` if the restriction was due to catalog */
  catalogItem: Maybe<ZonosCatalogItem>;
  /** `RestrictedItem` ID, prefixed with `restricted_item_`. */
  id: Scalars['ID'];
  /** `Item` that was restricted. */
  item: ZonosItem;
  /** `itemRestrictions` if the restriction was due to restricted item result */
  itemRestrictions: Maybe<ZonosItemRestrictionResult>;
  /** the reason this item was restricted */
  reason: Scalars['String'];
  /** `Rule` if the restriction was due to a rule */
  rule: Maybe<ZonosRule>;
};

export type ZonosRestrictedItemAction =
  /** Block the item from being included in the landed cost calculations. */
  | 'BLOCK'
  /** Block all items from being included in the landed cost calculations. */
  | 'BLOCK_ALL'
  /** Warn the user that the item is restricted. keep the item included in the landed cost calculations. */
  | 'WARN';

/** ============================================================ Restriction type ============================================================ */
export type ZonosRestriction = {
  __typename?: 'Restriction';
  /** Countries this restriction applies to (null = all). */
  appliesToCountries: Maybe<Array<Maybe<Scalars['String']>>>;
  /** The carrier this restriction applies to (null = general restriction). */
  carrierCode: Maybe<ZonosRestrictionCarrier>;
  /** The category determines what action the merchant needs to take. */
  category: Maybe<ZonosRestrictionCategory>;
  /** TRUE = certain match (skip AI), FALSE = needs AI binary classification. */
  certainMatch: Scalars['Boolean'];
  /** Confidence level: HIGH, MEDIUM, or LOW. */
  confidence: ZonosRestrictionConfidence;
  /** When this restriction was created. */
  createdAt: Scalars['DateTime'];
  /** When the restriction expires (null = no expiry). */
  endsAt: Maybe<Scalars['DateTime']>;
  /** The HS code this restriction applies to. */
  hsCode: Scalars['String'];
  /** Description of the HS code. */
  hsDescription: Maybe<Scalars['String']>;
  /** Restriction ID, prefixed with `restriction_`. */
  id: Scalars['ID'];
  /** Country or bloc (e.g. EU) imposing this restriction (null = applies everywhere). */
  imposingCountryCode: Maybe<Scalars['String']>;
  /** Whether this is an IMPORT or EXPORT measure. */
  measureDirection: Maybe<ZonosMeasureDirection>;
  /** NTM (Non-Tariff Measure) code. */
  ntmCode: Maybe<Scalars['String']>;
  /** Description of the NTM code. */
  ntmDescription: Maybe<Scalars['String']>;
  /** Title of the regulation. */
  regulationTitle: Maybe<Scalars['String']>;
  /** Source regulation UUID. */
  sourceId: Maybe<Scalars['String']>;
  /** When the restriction takes effect (null = always active). */
  startsAt: Maybe<Scalars['DateTime']>;
  /** AI-generated summary of the restriction. */
  summary: Scalars['String'];
  /** When this restriction was last updated. */
  updatedAt: Maybe<Scalars['DateTime']>;
  /** URL to the source regulation or documentation. */
  url: Maybe<Scalars['String']>;
};

/** ============================================================ Inputs — Apply ============================================================ */
export type ZonosRestrictionApplyInput = {
  /** Carrier codes to include carrier-specific restrictions. When provided, returns both general restrictions AND carrier-specific ones. */
  carrierCodes?: InputMaybe<Array<ZonosRestrictionCarrier>>;
  /** The items needing to be checked for restrictions. */
  items: Array<ZonosRestrictionApplyItemInput>;
  /** Whether to check IMPORT or EXPORT restrictions. If omitted, checks both. */
  measureDirection?: InputMaybe<ZonosMeasureDirection>;
  /** Origin country. */
  shipFromCountry: ZonosCountryCode;
  /** Destination country. */
  shipToCountry: ZonosCountryCode;
};

export type ZonosRestrictionApplyItemInput = {
  /** Item brand. */
  brand?: InputMaybe<Scalars['String']>;
  /** Item category (e.g. "Electronics", "Clothing"). */
  category?: InputMaybe<Scalars['String']>;
  /** Human readable item description. */
  description: Scalars['String'];
  /** HS code for this item. */
  hsCode: Scalars['String'];
  /** External id for consumer mapping. */
  itemId?: InputMaybe<Scalars['String']>;
  /** Item materials (e.g. "cotton", "lithium-ion"). */
  materials?: InputMaybe<Scalars['String']>;
  /** Human readable item name. */
  name: Scalars['String'];
  /** Filter to only return restrictions matching these categories. If omitted, returns all categories. */
  restrictionCategories?: InputMaybe<Array<ZonosRestrictionCategory>>;
};

/** ============================================================ Bulk Job ============================================================ */
export type ZonosRestrictionBulkJob = {
  __typename?: 'RestrictionBulkJob';
  /** When the job completed or failed. */
  completedAt: Maybe<Scalars['DateTime']>;
  /** When the job was created. */
  createdAt: Scalars['DateTime'];
  /** Error messages for failed rows. */
  errors: Maybe<Array<Scalars['String']>>;
  /** Rows that failed processing. */
  failureCount: Maybe<Scalars['Int']>;
  /** Bulk job ID. */
  id: Scalars['ID'];
  /** The operation to perform. */
  operation: ZonosRestrictionBulkJobOperation;
  /** S3 key of the CSV or Parquet file. */
  s3Key: Scalars['String'];
  /** Current status of the job. */
  status: ZonosRestrictionBulkJobStatus;
  /** Rows successfully processed. */
  successCount: Maybe<Scalars['Int']>;
  /** Which table this job targets. */
  target: ZonosRestrictionBulkJobTarget;
  /** Total rows processed. */
  totalCount: Maybe<Scalars['Int']>;
};

export type ZonosRestrictionBulkJobCreateInput = {
  /** The bulk operation to perform. */
  operation: ZonosRestrictionBulkJobOperation;
  /** S3 key of the CSV or Parquet file to ingest. */
  s3Key: Scalars['String'];
  /** Which table to target. Defaults to RESTRICTION. */
  target?: InputMaybe<ZonosRestrictionBulkJobTarget>;
};

export type ZonosRestrictionBulkJobOperation =
  | 'UPSERT';

export type ZonosRestrictionBulkJobStatus =
  | 'CANCELLED'
  | 'COMPLETED'
  | 'FAILED'
  | 'PENDING'
  | 'PROCESSING';

/** Which table the bulk job targets. */
export type ZonosRestrictionBulkJobTarget =
  | 'RESTRICTION'
  | 'RESTRICTION_EMBEDDING';

/** ============================================================ Enums ============================================================ */
export type ZonosRestrictionCarrier =
  | 'AUSTRALIA_POST';

/** The category of restriction - determines what action the merchant needs to take. - COST: Additional fees, taxes, or duties beyond standard tariff. - DANGEROUS_GOODS: Item is classified as a UN dangerous good. Check regulationTitle for the specific class (e.g., CLASS_3_FLAMMABLE_LIQUID). - DOCUMENTATION_REQUIRED: Must obtain certificates, tests, inspections to clear customs. - INFORMATION: Standards to be aware of. No specific action required. - PERMIT_REQUIRED: Must obtain authorization/license BEFORE shipping. - PRODUCT_COMPLIANCE: Product must be physically modified (labeled, treated, packaged). - PROHIBITED: Cannot ship. Item is banned. - QUOTA: Quantity limits exist. Check availability before shipping. */
export type ZonosRestrictionCategory =
  | 'COST'
  | 'DANGEROUS_GOODS'
  | 'DOCUMENTATION_REQUIRED'
  | 'INFORMATION'
  | 'PERMIT_REQUIRED'
  | 'PRODUCT_COMPLIANCE'
  | 'PROHIBITED'
  | 'QUOTA';

/** Confidence level of a restriction match. Owned by RestrictedItemDgs. */
export type ZonosRestrictionConfidence =
  /** High confidence. */
  | 'HIGH'
  /** Low confidence. */
  | 'LOW'
  /** Medium confidence. */
  | 'MEDIUM';

export type ZonosRestrictionConnection = {
  __typename?: 'RestrictionConnection';
  edges: Maybe<Array<Maybe<ZonosRestrictionEdge>>>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

/** ============================================================ Inputs — CRUD ============================================================ */
export type ZonosRestrictionCreateInput = {
  /** Countries this restriction applies to (null = all). */
  appliesToCountries?: InputMaybe<Array<InputMaybe<ZonosCountryCode>>>;
  /** The carrier this restriction applies to (null = general restriction). */
  carrierCode?: InputMaybe<ZonosRestrictionCarrier>;
  /** TRUE = certain match (skip AI), FALSE = needs AI. */
  certainMatch?: InputMaybe<Scalars['Boolean']>;
  /** Confidence level. */
  confidence: ZonosRestrictionConfidence;
  /** When the restriction expires. */
  endsAt?: InputMaybe<Scalars['DateTime']>;
  /** The HS code (dot-stripped, e.g. "010101"). */
  hsCode: Scalars['String'];
  /** Description of the HS code. */
  hsDescription?: InputMaybe<Scalars['String']>;
  /** Country imposing this restriction (null = applies everywhere). */
  imposingCountryCode?: InputMaybe<ZonosCountryCode>;
  /** IMPORT or EXPORT. */
  measureDirection?: InputMaybe<ZonosMeasureDirection>;
  /** NTM code. */
  ntmCode?: InputMaybe<Scalars['String']>;
  /** Description of the NTM code. */
  ntmDescription?: InputMaybe<Scalars['String']>;
  /** Title of the regulation. */
  regulationTitle?: InputMaybe<Scalars['String']>;
  /** Source regulation UUID. */
  sourceId?: InputMaybe<Scalars['String']>;
  /** When the restriction takes effect. */
  startsAt?: InputMaybe<Scalars['DateTime']>;
  /** AI-generated summary. */
  summary: Scalars['String'];
  /** URL to the source regulation or documentation. */
  url?: InputMaybe<Scalars['String']>;
};

export type ZonosRestrictionDeleteInput = {
  /** List of restriction IDs to delete. */
  ids: Array<Scalars['ID']>;
};

export type ZonosRestrictionEdge = {
  __typename?: 'RestrictionEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosRestriction>;
};

/** ============================================================ RestrictionResult + AppliedRestrictions ============================================================ */
export type ZonosRestrictionResult = {
  __typename?: 'RestrictionResult';
  /** When this result was created. */
  createdAt: Scalars['DateTime'];
  /** The user that created this result. */
  createdBy: Maybe<Scalars['ID']>;
  /** RestrictionResult ID, prefixed with `restriction_result_`. */
  id: Scalars['ID'];
  /** The items with their applied restrictions. */
  items: Array<ZonosAppliedRestrictions>;
  /** The organization that owns this result. */
  organizationId: Scalars['ID'];
  /** Origin country. */
  shipFromCountry: ZonosCountryCode;
  /** Destination country. */
  shipToCountry: ZonosCountryCode;
  /** When this result was last updated. */
  updatedAt: Maybe<Scalars['DateTime']>;
  /** The user that last updated this result. */
  updatedBy: Maybe<Scalars['ID']>;
};

/** ============================================================ RestrictionResult Connection types ============================================================ */
export type ZonosRestrictionResultConnection = {
  __typename?: 'RestrictionResultConnection';
  edges: Maybe<Array<Maybe<ZonosRestrictionResultEdge>>>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

export type ZonosRestrictionResultEdge = {
  __typename?: 'RestrictionResultEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosRestrictionResult>;
};

/** ============================================================ Inputs — RestrictionResult Filters ============================================================ */
export type ZonosRestrictionResultsFilter = {
  /** Filter by creation date range. */
  createdAt?: InputMaybe<ZonosDateTimeRange>;
  /** Filter by origin country. */
  shipFromCountry?: InputMaybe<ZonosCountryCode>;
  /** Filter by destination country. */
  shipToCountry?: InputMaybe<ZonosCountryCode>;
};

/** Restricted-item match summary aggregated across items. */
export type ZonosRestrictionRiskSummary = {
  __typename?: 'RestrictionRiskSummary';
  /** Number of items that matched at least one restriction. 0 if no restriction matched. */
  affectedItemCount: Scalars['Int'];
  /** Total number of restriction matches across all items. 0 if no restriction matched. */
  matchedCount: Scalars['Int'];
  /** Maximum confidence score (0-1) observed across all matched restrictions. Null if no restriction matched. */
  maxConfidenceScore: Maybe<Scalars['Decimal']>;
  /** Worst (highest-severity) restriction category matched across all items. Null if no restriction matched. */
  worstCategory: Maybe<ZonosGreenLightRestrictionCategory>;
  /** Worst (highest) confidence level observed on any matched restriction. Null if no restriction matched. */
  worstConfidence: Maybe<ZonosRestrictionConfidence>;
};

export type ZonosRestrictionUpdateInput = {
  /** Countries this restriction applies to. */
  appliesToCountries?: InputMaybe<Array<InputMaybe<ZonosCountryCode>>>;
  /** The carrier this restriction applies to (null = general restriction). */
  carrierCode?: InputMaybe<ZonosRestrictionCarrier>;
  /** TRUE = certain match (skip AI), FALSE = needs AI. */
  certainMatch?: InputMaybe<Scalars['Boolean']>;
  /** Confidence level. */
  confidence?: InputMaybe<ZonosRestrictionConfidence>;
  /** When the restriction expires. */
  endsAt?: InputMaybe<Scalars['DateTime']>;
  /** The HS code. */
  hsCode?: InputMaybe<Scalars['String']>;
  /** Description of the HS code. */
  hsDescription?: InputMaybe<Scalars['String']>;
  /** The ID of the restriction to update. */
  id: Scalars['ID'];
  /** Country imposing this restriction. */
  imposingCountryCode?: InputMaybe<ZonosCountryCode>;
  /** IMPORT or EXPORT. */
  measureDirection?: InputMaybe<ZonosMeasureDirection>;
  /** NTM code. */
  ntmCode?: InputMaybe<Scalars['String']>;
  /** Description of the NTM code. */
  ntmDescription?: InputMaybe<Scalars['String']>;
  /** Title of the regulation. */
  regulationTitle?: InputMaybe<Scalars['String']>;
  /** Source regulation UUID. */
  sourceId?: InputMaybe<Scalars['String']>;
  /** When the restriction takes effect. */
  startsAt?: InputMaybe<Scalars['DateTime']>;
  /** AI-generated summary. */
  summary?: InputMaybe<Scalars['String']>;
  /** URL to the source regulation or documentation. */
  url?: InputMaybe<Scalars['String']>;
};

export type ZonosResult =
  | 'FAILURE'
  | 'SUCCESS';

export type ZonosResultMessage = {
  __typename?: 'ResultMessage';
  message: Maybe<Scalars['String']>;
  result: ZonosResult;
};

/** Extends the Root type to include associated Declarations. */
export type ZonosRoot = {
  __typename?: 'Root';
  cartons: Maybe<Array<Maybe<ZonosCarton>>>;
  /** A list of Declarations associated with the root entity. */
  declarations: Maybe<Array<ZonosDeclaration>>;
  exchangeRates: Array<ZonosExchangeRate>;
  /** The unique identifier for the root entity. */
  id: Scalars['ID'];
  items: Maybe<Array<Maybe<ZonosItem>>>;
  landedCosts: Maybe<Array<Maybe<ZonosLandedCost>>>;
  /** The `Order` placed between the root `parties`. */
  order: Maybe<ZonosOrder>;
  /** A list of parties associated with the root entity. */
  parties: Maybe<Array<Maybe<ZonosParty>>>;
  restrictedItems: Maybe<Array<Maybe<ZonosRestrictedItem>>>;
  /** @deprecated Use the `shipments` field instead. */
  shipment: Maybe<ZonosShipment>;
  shipmentRatings: Maybe<Array<Maybe<ZonosShipmentRating>>>;
  shipments: Array<ZonosShipment>;
};

export type ZonosRule = {
  __typename?: 'Rule';
  id: Scalars['ID'];
};

export type ZonosRunRestrictTestInput = {
  aiMode?: InputMaybe<Scalars['Boolean']>;
  testId?: InputMaybe<Scalars['String']>;
};

export type ZonosScope =
  | 'DEFAULT'
  | 'STORES'
  | 'WEBSITES';

export type ZonosScreenExistingPartyInput = {
  partyId: Scalars['ID'];
};

export type ZonosScreenPartyInput = {
  location?: InputMaybe<ZonosDeniedPartyLocationInput>;
  person?: InputMaybe<ZonosDeniedPartyPersonInput>;
};

/** The screening scores for the party screening. */
export type ZonosScreeningScores = {
  __typename?: 'ScreeningScores';
  /** The score for the party screening's location. */
  location: Maybe<Scalars['Decimal']>;
  /** The score for the party screening's name. */
  name: Maybe<Scalars['Decimal']>;
  /** The overall score for the party screening's name and location combined. */
  overall: Maybe<Scalars['Decimal']>;
};

/** Extends the ServiceLevel type to include associated parties. */
export type ZonosServiceLevel = {
  __typename?: 'ServiceLevel';
  /** Enumerated value that specifies whether a ServiceLevel is available to all customers or is specifically contracted */
  availability: ZonosServiceLevelAvailability;
  /** The `Carrier` associated with ServiceLevel. */
  carrier: ZonosCarrier;
  /** The code for the ServiceLevel as defined by the external carrier API */
  carrierApiCode: Scalars['String'];
  /** The code used to generate labels for this ServiceLevel defined by the external carrier API. */
  carrierLabelApiCode: Maybe<Scalars['String']>;
  /** The enumerated value of ServiceLevel options that can be sent in the API. */
  code: Scalars['String'];
  /** The list of restrictions that exist around countries, weights, dims, and prices for a ServiceLevel. */
  countryConstraints: Maybe<Array<ZonosCountryConstraint>>;
  /** When this `serviceLevel` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ServiceLevel. */
  createdBy: Scalars['ID'];
  /** The method of delivery that indicates how the clearance is processed with this ServiceLevel. */
  deliveryType: Maybe<ZonosDeliveryType>;
  /** The unique identifier for the service level entity. */
  id: Scalars['ID'];
  /** The ServiceLevel display name as prescribed by the `Carrier`. */
  name: Scalars['String'];
  /** A list of parties associated with the service level entity. */
  parties: Maybe<Array<Maybe<ZonosParty>>>;
  /** Transit Time breakdown that applies to the ServiceLevel. */
  transitTime: Maybe<ZonosTransitTime>;
  /** When this ServiceLevel was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ServiceLevel. */
  updatedBy: Scalars['ID'];
};

/** A `serviceLevelArea` object is a grouping of countries, regions, or zip codes that can be associated with a `serviceLevel`. Usage of this will only happen in conjunction with rate charts. */
export type ZonosServiceLevelArea = {
  __typename?: 'ServiceLevelArea';
  /** The search pattern of an administrative area or region code of the country. */
  administrativeAreaCodePattern: Maybe<Scalars['String']>;
  /** The search pattern of the country code. */
  countryCodePattern: Maybe<Scalars['String']>;
  /** When the ServiceLevelArea was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ServiceLevelArea. */
  createdBy: Scalars['ID'];
  /** A unique identifier for the ServiceLevelArea. */
  id: Scalars['ID'];
  /** Specifies whether the ServiceLevelArea is in live or test mode. */
  mode: ZonosMode;
  /** The humanly-memorable display name for the ServiceLevelArea. */
  name: Scalars['String'];
  /** Regular expression of postal codes that apply to the area. */
  postalCodePattern: Maybe<Scalars['String']>;
  /** The `ServiceLevel` that the area is being used for. */
  serviceLevel: ZonosServiceLevel;
  /** When the ServiceLevelArea was updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ServiceLevelArea. */
  updatedBy: Scalars['ID'];
};

/** Filter the areas that apply to a service level down to a single country, administrative area and postal code */
export type ZonosServiceLevelAreasFilter = {
  /** A single administrative area code if one applies to this location */
  administrativeAreaCode?: InputMaybe<Scalars['String']>;
  /** The country code for the location */
  countryCode?: InputMaybe<ZonosCountryCode>;
  /** A single postal code if one applies to the location */
  postalCode?: InputMaybe<Scalars['String']>;
  /** The ID of the `ServiceLevel` */
  serviceLevel: Scalars['ID'];
};

export type ZonosServiceLevelAvailability =
  | 'CONTRACTED'
  | 'DISABLED'
  | 'GENERAL';

export type ZonosServiceLevelClearanceType =
  /** Consolidated clearance service level. */
  | 'CONSOLIDATED'
  /** Courier clearance service level. */
  | 'COURIER'
  /** Postal clearance service level. */
  | 'POSTAL';

/** ServiceLevel Connection */
export type ZonosServiceLevelConnection = {
  __typename?: 'ServiceLevelConnection';
  /** Field edges */
  edges: Maybe<Array<Maybe<ZonosServiceLevelEdge>>>;
  /** Field pageInfo */
  pageInfo: ZonosPageInfo;
};

export type ZonosServiceLevelDetailInput = {
  /** The code used in the carrier API call */
  apiCode: Scalars['String'];
  /** ID of the carrier associated with the service level */
  carrier: Scalars['ID'];
  /** The Zonos `ServiceLevel`.`code` */
  code: Scalars['String'];
  /** ID of the `ServiceLevel` */
  id: Scalars['ID'];
};

/** ServiceLevel Edge */
export type ZonosServiceLevelEdge = {
  __typename?: 'ServiceLevelEdge';
  /** Field cursor */
  cursor: Maybe<Scalars['String']>;
  /** Field node */
  node: Maybe<ZonosServiceLevel>;
};

export type ZonosServiceLevelFilter = {
  /** The carrier the service level belongs to. */
  carrier?: InputMaybe<Scalars['String']>;
  /** The Zonos specific human readable service level code */
  code?: InputMaybe<Scalars['String']>;
};

export type ZonosServiceLevelOptimizationSummariesInput = {
  /** The end of the date range */
  endDate: Scalars['DateTime'];
  /** The start of the date range */
  startDate: Scalars['DateTime'];
};

export type ZonosServiceLevelOptimizationSummary = {
  __typename?: 'ServiceLevelOptimizationSummary';
  /** The count of landed cost quotes analyzed to create the `ServiceLevelOptimizationSummary` */
  analyzedCount: Scalars['Int'];
  /** The average amount difference from this `ServiceLevel` to the other lowest-priced `ServiceLevel` the organization has enabled */
  averageAmountDifference: Scalars['Decimal'];
  /** The carrier code for the `ServiceLevelOptimizationSummary` */
  carrier: Scalars['String'];
  /** The currency code the `ServiceLevelOptimizationSummary` is in */
  currency: ZonosCurrencyCode;
  /** The end date of the `ServiceLevelOptimizationSummary` */
  endDate: Scalars['DateTime'];
  /** The `ServiceLevel` name for the `ServiceLevelOptimizationSummary` */
  serviceLevel: Scalars['String'];
  /** The start date of the `ServiceLevelOptimizationSummary` */
  startDate: Scalars['DateTime'];
};

/** A ServiceLevelRateChart would apply to a specific service level. The ServiceLevelRateChart would be used before a external carrier API. */
export type ZonosServiceLevelRateChart = {
  __typename?: 'ServiceLevelRateChart';
  /** When this ServiceLevelRateChart was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ServiceLevelRateChart. */
  createdBy: Scalars['ID'];
  /** The `shipFrom` `countryCode` that applies to filter by. */
  fromCountryCode: Maybe<ZonosCountryCode>;
  /** A unique identifier for the ServiceLevelRateChart. */
  id: Scalars['ID'];
  /** The destination locations for the ServiceLevelRateChart. */
  locations: Maybe<Array<ZonosShippingRateLocation>>;
  /** Specifies whether the ServiceLevelRateChart is in live or test mode. */
  mode: ZonosMode;
  /** The specific rate values that apply to the given ServiceLevelRateChart. */
  rates: Array<ZonosShippingRate>;
  /** The `ServiceLevel` associated with the ServiceLevelRateChart. */
  serviceLevel: ZonosServiceLevel;
  /** When this ServiceLevelRateChart was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ServiceLevelRateChart. */
  updatedBy: Scalars['ID'];
};

export type ZonosServiceLevelRateChartsFilter = {
  /** The ID of the `ServiceLevel`. */
  serviceLevel: Scalars['ID'];
};

export type ZonosShipment = ZonosNode & {
  __typename?: 'Shipment';
  /** The total calculated amount for all labels associated with this shipment */
  amount: Maybe<Scalars['Decimal']>;
  /** Automation rules that were applied to this Shipment during creation */
  appliedRules: Array<ZonosShipmentAppliedRule>;
  /** Booking number for freight shipments */
  bookingNumber: Maybe<Scalars['String']>;
  /** The date and time this Shipment was created */
  createdAt: Scalars['DateTime'];
  /** The user who created this Shipment */
  createdBy: Scalars['ID'];
  /** the currency of the shipment */
  currencyCode: Maybe<ZonosCurrencyCode>;
  customsDocuments: Array<ZonosCustomsDocument>;
  customsSpec: Maybe<ZonosCustomsSpec>;
  /** The declaration ID associated with this shipment */
  declarationId: Maybe<Scalars['ID']>;
  /** The declared value (insurance) of the shipment */
  declaredValue: Maybe<Scalars['Decimal']>;
  /** Exemption code for shipments requiring an ITN */
  exemption: Maybe<Scalars['String']>;
  /** The `FulfillmentCenter` that was used to fulfill the Shipment. */
  fulfillmentCenter: Maybe<ZonosFulfillmentCenter>;
  /** A unique identifier for the shipment */
  id: Scalars['ID'];
  /** ITN that was applied on the label request */
  itnNumber: Maybe<Scalars['String']>;
  /** The `Order` associated with this Shipment */
  order: Maybe<ZonosOrder>;
  /** The organization that this Shipment belongs to */
  organization: Scalars['ID'];
  /** All of the `Party`s involved with this Shipment */
  parties: Array<ZonosParty>;
  pddpSubmission: Maybe<ZonosPddpSubmission>;
  /** Optional references to be added on the Label and CI */
  references: Maybe<ZonosShipmentReference>;
  /** The `ServiceLevel` utilized by the `Carrier` for this Shipment */
  serviceLevel: ZonosServiceLevel;
  /** A list of `ShipmentCarton`s related to this Shipment */
  shipmentCartons: Array<ZonosShipmentCarton>;
  /** The `ShipmentConsolidation` this Shipment belongs to */
  shipmentConsolidation: Maybe<ZonosShipmentConsolidation>;
  /** The scheduled shipment date for this `Shipment` */
  shipmentDate: Maybe<Scalars['DateTime']>;
  /** Indicates whether the Shipment is international or domestic */
  shipmentType: ZonosShipmentType;
  /** A list of `ShipmentSpecialService`s to apply to this Shipment */
  specialServices: Maybe<Array<ZonosShipmentSpecialService>>;
  /** The status of the shipment */
  status: ZonosShipmentStatusType;
  /** A list of statuses of the shipment */
  statusTransitions: Array<ZonosShipmentStatusTransition>;
  /**
   * An optional master tracking
   * @deprecated Use `trackingDetails` field instead.
   */
  tracking: Maybe<ZonosTracking>;
  /** All tracking details associated with this Shipment */
  trackingDetails: Array<ZonosTracking>;
};

export type ZonosShipmentAmountFilter = {
  /** Amount between two values */
  between?: InputMaybe<ZonosShipmentAmountRange>;
  /** Exact amount match */
  equal?: InputMaybe<Scalars['Decimal']>;
  /** Amount greater than */
  greaterThan?: InputMaybe<Scalars['Decimal']>;
  /** Amount less than */
  lessThan?: InputMaybe<Scalars['Decimal']>;
};

export type ZonosShipmentAmountRange = {
  /** Maximum amount (inclusive) */
  max: Scalars['Decimal'];
  /** Minimum amount (inclusive) */
  min: Scalars['Decimal'];
};

export type ZonosShipmentAmountType =
  | 'BUFFER'
  | 'DISCOUNT'
  | 'FUEL_SURCHARGE'
  | 'INSURANCE'
  | 'PUBLISHED_RATE'
  | 'RATE_CHART'
  | 'SURCHARGE';

export type ZonosShipmentAppliedRule = {
  __typename?: 'ShipmentAppliedRule';
  /** When the rule was applied to the shipment */
  createdAt: Scalars['DateTime'];
  /** The rule that was applied */
  rule: ZonosRule;
};

export type ZonosShipmentBulkCreateError = {
  __typename?: 'ShipmentBulkCreateError';
  /** Name of the `Carrier` that threw the error during label creation. Will be null if error did not occur during label processing. */
  carrierName: Maybe<Scalars['String']>;
  /** Error message that was returned during Shipment or Label processing. */
  errorMessage: Maybe<Scalars['String']>;
  /** ID of the `Order` that threw the error during Shipment or Label processing. */
  orderId: Scalars['ID'];
};

export type ZonosShipmentBulkCreateInput = {
  /** Optional ID of the FulfillmentCenter to be used for bulk printing of labels. If not provided, the PRIMARY FulfillmentCenter of the caller will be used. */
  fulfillmentCenter?: InputMaybe<Scalars['ID']>;
  /** A list of IDs or accountOrderNumber(s) associated with the `Order`(s) to create `Shipment`(s) and `Label`(s) for. Maximum size of 50. */
  orderReferenceIds: Array<Scalars['ID']>;
};

export type ZonosShipmentBulkCreateResult = ZonosShipment | ZonosShipmentBulkCreateError;

export type ZonosShipmentCarton = ZonosNode & {
  __typename?: 'ShipmentCarton';
  /** Details for a package containing alcohol. */
  alcoholRecipientType: Maybe<ZonosAlcoholRecipientType>;
  /** Details for a package containing battery materials. Required if BATTERY is present in `serviceTypes`. */
  batteryDetail: Maybe<ZonosBatteryDetail>;
  /** The `Carton` related to this ShipmentCarton */
  carton: ZonosCarton;
  /** Details for a package containing dangerous goods. Required if DANGEROUS_GOODS is present in `serviceTypes`. */
  dangerousGoodsDetail: Maybe<ZonosDangerousGoodsDetail>;
  /** A unique identifier for this ShipmentCarton */
  id: Scalars['ID'];
  label: Maybe<ZonosLabel>;
  /** Type of packaging used for this ShipmentCarton. If not provided the carriers default is used. */
  packagingType: Maybe<ZonosShipmentPackagingTypeCode>;
  /** The `PackingSlip` associated with this ShipmentCarton */
  packingSlip: Maybe<ZonosPackingSlip>;
  /** List of the original order item ids to use as a comparator for this ShipmentCarton */
  shipmentOrderItems: Array<ZonosShipmentOrderItem>;
  /** Signature option type to apply at the package level. */
  signatureOptionType: Maybe<ZonosSignatureOptionType>;
  /** A list of `ShipmentCartonSpecialService`s that apply to this `ShipmentCarton` */
  specialServices: Maybe<Array<ZonosShipmentCartonSpecialService>>;
  /** The `Tracking` related to this ShipmentCarton */
  tracking: Maybe<ZonosTracking>;
};

export type ZonosShipmentCartonInput = {
  /** The measurement units of the height, length and width for the `ShipmentCarton`'s `Carton` */
  dimensionalUnit: ZonosDimensionalUnitCode;
  /** The numeric height of the `ShipmentCarton`. */
  height?: InputMaybe<Scalars['Decimal']>;
  /** The list of `Item`s included in this `ShipmentCarton`. Optional when providing cartons purely for packaging type information. */
  items?: InputMaybe<Array<ZonosShipmentCartonItemInput>>;
  /** The numeric length of the `ShipmentCarton`. */
  length?: InputMaybe<Scalars['Decimal']>;
  /** Optional type of packaging being used for the packages in the shipment. If not provided, will default to the carrier default. */
  packagingType?: InputMaybe<ZonosShipmentPackagingTypeCode>;
  /** Input field including details for all special services required at the package level */
  specialServiceDetails?: InputMaybe<ZonosShipmentCartonSpecialServiceDetailInput>;
  /** The tracking number for this specific Carton, if different than the tracking number for the entire `Shipment` */
  trackingNumber?: InputMaybe<Scalars['String']>;
  /** The weight of the `ShipmentCarton`. */
  weight?: InputMaybe<Scalars['Decimal']>;
  /** The type of weight associated with the `ShipmentCarton`. */
  weightUnit: ZonosWeightUnitCode;
  /** The numeric width of the `ShipmentCarton`. */
  width?: InputMaybe<Scalars['Decimal']>;
};

export type ZonosShipmentCartonItemInput = {
  /** The country of origin for the `Item` in this `ShipmentCarton` */
  countryOfOrigin?: InputMaybe<ZonosCountryCode>;
  /** The HS code for the `Item` in this `ShipmentCarton` */
  hsCode?: InputMaybe<Scalars['String']>;
  /** The reference to the item included in this `ShipmentCarton`: SKU, Product ID, or `Item` ID */
  itemReference: Scalars['String'];
  /** The name of the `Item` in this `ShipmentCarton` */
  labelName?: InputMaybe<Scalars['String']>;
  /** The quantity of the `Item` in this `ShipmentCarton` */
  quantity?: InputMaybe<Scalars['Int']>;
};

export type ZonosShipmentCartonSpecialService =
  /** Indicates this package contains alcohol. `alcoholRecipientType` field is required when this value is present. */
  | 'ALCOHOL'
  /** Indicates this package contains some form of battery. `batteryDetail` field is required when this value is present. */
  | 'BATTERY'
  | 'BATTERY_INSIDE_EQUIPMENT'
  | 'BATTERY_ONLY'
  | 'BATTERY_PACKAGED_WITH_EQUIPMENT'
  /** Indicates this package contains some form of dangerous good. */
  | 'DANGEROUS_GOODS'
  /** Indicates this package contains dry ice. */
  | 'DRY_ICE'
  /** Indicates this package may require a signature when being delivered. */
  | 'SIGNATURE_OPTION';

export type ZonosShipmentCartonSpecialServiceDetailInput = {
  /** Details for a package containing alcohol. Required if ALCOHOL is present in `serviceTypes`. */
  alcoholRecipientType?: InputMaybe<ZonosAlcoholRecipientType>;
  /** Details for a package containing battery materials. Required if BATTERY is present in `serviceTypes`. */
  batteryDetail?: InputMaybe<ZonosBatteryDetailInput>;
  /** Details for a package containing dangerous goods. Required if DANGEROUS_GOODS is present in `serviceTypes`. */
  dangerousGoodsDetail?: InputMaybe<ZonosDangerousGoodsDetailInput>;
  /** List of `ShipmentCartonSpecialService` options to apply at the package level. */
  serviceTypes?: InputMaybe<Array<ZonosShipmentCartonSpecialService>>;
  /** Signature option type to apply at the package level. Required if SIGNATURE_OPTION is present in `serviceTypes`. */
  signatureOptionType?: InputMaybe<ZonosSignatureOptionType>;
};

export type ZonosShipmentConnection = {
  __typename?: 'ShipmentConnection';
  edges: Maybe<Array<Maybe<ZonosShipmentEdge>>>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Maybe<Scalars['Int']>;
};

/** ShipmentConsolidation is used to consolidate shipments to send to a carrier. For UPS, this would facilitate the Worldwide Economy master carton functionality. */
export type ZonosShipmentConsolidation = {
  __typename?: 'ShipmentConsolidation';
  /** Carrier account number this consolidation is billed against. Format is carrier-specific. */
  accountNumber: Maybe<Scalars['String']>;
  carrierCode: ZonosShipmentConsolidationCarrier;
  /** Timestamp of when this ShipmentConsolidation was initially created. */
  createdAt: Scalars['DateTime'];
  customsDocuments: Array<ZonosCustomsDocument>;
  /** ID of the batch that was created by the carrier. For UPS, this would be the Master Carton ID. */
  externalId: Scalars['String'];
  /** Unique identifier for the ShipmentConsolidation. */
  id: Scalars['ID'];
  /** Human readable name for the ShipmentConsolidation */
  name: Maybe<Scalars['String']>;
  /** `Shipment`(s) associated with this ShipmentConsolidation. */
  shipments: Array<ZonosShipment>;
  /** Indicates if this ShipmentConsolidation is open or closed. */
  status: ZonosShipmentConsolidationStatus;
  /** List of `ShipmentConsolidationStatusTransition` to show a history of status changes. */
  statusTransitions: Array<ZonosShipmentConsolidationStatusTransition>;
};

export type ZonosShipmentConsolidationCarrier =
  | 'CANADA_POST'
  /** Japan Post deferred-payment consolidation. Closes via Code 61 to produce a dispatch slip plus bundled customer/post-office copies. */
  | 'JAPAN_POST';

export type ZonosShipmentConsolidationConnection = {
  __typename?: 'ShipmentConsolidationConnection';
  /** A list of `ShipmentConsolidationEdge` objects. */
  edges: Array<ZonosShipmentConsolidationEdge>;
  /** Pagination info for the connection object. */
  pageInfo: Maybe<ZonosPageInfo>;
  /** Total count of `ShipmentConsolidation` objects that match the given filter criteria. */
  totalCount: Maybe<Scalars['Int']>;
};

export type ZonosShipmentConsolidationCreateInput = {
  /** Carrier account number this consolidation will be billed against. For Japan Post, this is the hyphen-formatted deferred-payment customer number (`NNNNNNNNNN-NNNNNN-NNNNNNNNNN-NNNNNN`). When omitted, the carrier service falls back to the merchant's default ACCOUNT_NUMBER credential on their CarrierAccount. Format is carrier-specific. */
  accountNumber?: InputMaybe<Scalars['String']>;
  /** The carrier this ShipmentConsolidation is associated with */
  carrierCode: ZonosShipmentConsolidationCarrier;
  /** Batch ID provided by the carrier. For UPS, this would be the Master Carton ID. */
  externalId?: InputMaybe<Scalars['String']>;
  /** A human readable name to give to the `ShipmentConsolidation` */
  name?: InputMaybe<Scalars['String']>;
  /** Initial `Shipment` IDs to start the `ShipmentConsolidation`. */
  shipmentIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type ZonosShipmentConsolidationEdge = {
  __typename?: 'ShipmentConsolidationEdge';
  /** String cursor pointing to this object in the current pagination connection. */
  cursor: Scalars['String'];
  /** The `ShipmentConsolidation` associated with this edge. */
  node: ZonosShipmentConsolidation;
};

export type ZonosShipmentConsolidationFilter = {
  /** Filter by when the `ShipmentConsolidation` was created. */
  createdAt?: InputMaybe<ZonosDateTimeRange>;
  /** ID of a `Shipment` that is part of the ShipmentConsolidation */
  shipmentId?: InputMaybe<Scalars['ID']>;
  /** Filter by the status of the `ShipmentConsolidation`. */
  status?: InputMaybe<ZonosShipmentConsolidationStatus>;
};

export type ZonosShipmentConsolidationStatus =
  | 'CLOSED'
  | 'MANIFEST_CREATED'
  | 'OPEN';

export type ZonosShipmentConsolidationStatusTransition = {
  __typename?: 'ShipmentConsolidationStatusTransition';
  /** Timestamp of when this status changed occurred. */
  changedAt: Scalars['DateTime'];
  /** Text describing this status change. */
  note: Maybe<Scalars['String']>;
  /** Status of this `ShipmentConsolidation`. */
  status: ZonosShipmentConsolidationStatus;
};

export type ZonosShipmentConsolidationUpdateInput = {
  /** ID of the fulfillment center the consolidation will be shipped from. Required for Canada Post to populate the manifest sender address. Not used by Japan Post (the dispatch slip uses the merchant's deferred-payment account on file). */
  fulfillmentCenterId?: InputMaybe<Scalars['ID']>;
  /** ID of the `ShipmentConsolidation` to update. */
  id: Scalars['ID'];
  /** IDs of `Shipment`s to add to the `ShipmentConsolidation`. If `status` is provided in the input, `shipmentIds` will be added to the consolidation, and then the desired status will be set. */
  shipmentIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Desired status for the `ShipmentConsolidation`. Should be null unless the consolidation should be closed. */
  status?: InputMaybe<ZonosShipmentConsolidationStatus>;
};

export type ZonosShipmentCreateInput = {
  /** The booking number for freight shipments */
  bookingNumber?: InputMaybe<Scalars['String']>;
  /** Exemption code for shipments requiring an ITN */
  exemption?: InputMaybe<Scalars['String']>;
  /** A flag to say if a `CustomSpec` should be generated from this Shipment */
  generateCustoms: Scalars['Boolean'];
  /** A flag to say if a `Label` should be generated from this Shipment */
  generateLabel: Scalars['Boolean'];
  /** The declared value (insurance) of the shipment */
  isDeclaredValue?: InputMaybe<Scalars['Boolean']>;
  /** ITN to apply on the label request */
  itnNumber?: InputMaybe<Scalars['String']>;
  /** The optional label specifications for the `Label` to be generated */
  labelSpec?: InputMaybe<ZonosLabelSpecInput>;
  /** The ID or accountOrderNumber of the `Order` this Shipment belongs to */
  orderId: Scalars['ID'];
  /** The list of `Party`s related to this Shipment, if different than all the parties on the `Order` */
  parties?: InputMaybe<Array<Scalars['ID']>>;
  /** The `ServiceLevel` code or id that the shipment is shipping with, if different that the service level on the `Order` */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** A list of details about the `ShipmentCarton`s for this Shipment, if the items and packaging options are different than those on the `Order` */
  shipmentCartons?: InputMaybe<Array<ZonosShipmentCartonInput>>;
  /** ID of the `ShipmentConsolidation` this Shipment will belong to */
  shipmentConsolidationId?: InputMaybe<Scalars['ID']>;
  /** A specified date for a future shipment */
  shipmentDate?: InputMaybe<Scalars['DateTime']>;
  /** Custom declaration statement for this shipment, takes priority over org-level settings */
  shipmentDeclarationStatement?: InputMaybe<Scalars['String']>;
  /** Any special instructions related to this Shipment */
  specialInstructions?: InputMaybe<Scalars['String']>;
  /** A list of `ShipmentSpecialService`s to apply to this Shipment */
  specialServices?: InputMaybe<Array<ZonosShipmentSpecialService>>;
  /** The optional tracking number related to the shipment */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type ZonosShipmentCreateWithTrackingInput = {
  /** List of items to include in the Shipment. These items will all be included in the same carton. */
  items?: InputMaybe<Array<ZonosShipmentCartonItemInput>>;
  /** The ID of the `Order` to create and associate the shipment with. */
  orderId: Scalars['ID'];
  /** Optional `ServiceLevel` ID or code. If not provided, the `ServiceLevel` on the `Order.landedCost` will be used. */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** List of inputs containing tracking information */
  tracking: Array<ZonosTrackingInput>;
};

export type ZonosShipmentCreateWorkflowInput = {
  /** The booking number for freight shipments */
  bookingNumber?: InputMaybe<Scalars['String']>;
  /** The declared value (insurance) of the shipment */
  declaredValue?: InputMaybe<Scalars['Decimal']>;
  /** Exemption code for shipments requiring an ITN */
  exemption?: InputMaybe<Scalars['String']>;
  /** IDs of fulfilled order items. When provided, only cartons where all items are fulfilled will have labels generated. Used for partial kit fulfillment. */
  fulfilledItemIds?: InputMaybe<Array<Scalars['String']>>;
  /** Optional ID of the `FulfillmentCenter` this Shipment is being fulfilled from. */
  fulfillmentCenter?: InputMaybe<Scalars['ID']>;
  /** Boolean value to indicate if a `CustomSpec` should be generated from this `Shipment` */
  generateCustoms?: InputMaybe<Scalars['Boolean']>;
  /** Boolean value to indicate if a `Label` should be generated for the `ShipmentCarton`(s) in this `Shipment` */
  generateLabel?: InputMaybe<Scalars['Boolean']>;
  /** Boolean value to indicate if a `PackingSlip` should be generated for this `Shipment` */
  generatePackingSlip?: InputMaybe<Scalars['Boolean']>;
  /** The declared value (insurance) of the shipment */
  isDeclaredValue?: InputMaybe<Scalars['Boolean']>;
  /** ITN to apply on the label request */
  itnNumber?: InputMaybe<Scalars['String']>;
  /** The optional label specifications for the `Label` to be generated */
  labelSpec?: InputMaybe<ZonosLabelSpecInput>;
  /** Instructions for handling non-deliverable shipments */
  nonDelivery?: InputMaybe<ZonosShipmentNonDeliveryInput>;
  /** ID or accountOrderNumber of the `Order` this Shipment will belong to. Required if no `Party` or `Carton` objects are present. */
  orderId?: InputMaybe<Scalars['ID']>;
  /** Optional references to be added on the Label and CI */
  references?: InputMaybe<ZonosShipmentReferenceInput>;
  /** ID or `code` of the `ServiceLevel` to be used for this Shipment. */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** Special service details to apply at the ShipmentCarton level */
  shipmentCartonSpecialServices?: InputMaybe<ZonosShipmentCartonSpecialServiceDetailInput>;
  /** Optional field to specify `ShipmentCarton` objects associated with the Shipment. */
  shipmentCartons?: InputMaybe<Array<ZonosShipmentCartonInput>>;
  /** ID of the `ShipmentConsolidation` this Shipment will belong to */
  shipmentConsolidationId?: InputMaybe<Scalars['ID']>;
  /** A specified date for a future shipment */
  shipmentDate?: InputMaybe<Scalars['DateTime']>;
  /** Custom declaration statement for this shipment, takes priority over org-level settings */
  shipmentDeclarationStatement?: InputMaybe<Scalars['String']>;
  /** Any special instructions related to this Shipment */
  specialInstructions?: InputMaybe<Scalars['String']>;
  /** A list of `ShipmentSpecialService`s to apply to this Shipment */
  specialServices?: InputMaybe<Array<ZonosShipmentSpecialService>>;
  /** Tracking numbers associated with this Shipment */
  trackingNumbers?: InputMaybe<Array<Scalars['String']>>;
};

export type ZonosShipmentDocumentType =
  | 'CUSTOMS_DOCUMENTS'
  | 'LABELS'
  | 'PACKING_SLIPS';

export type ZonosShipmentDocumentsMergeResult = {
  __typename?: 'ShipmentDocumentsMergeResult';
  /** Number of individual documents that were merged */
  count: Scalars['Int'];
  /** File format of the merged document */
  format: ZonosLabelFileType;
  /** Pre-signed S3 URL to download the merged file */
  url: Scalars['String'];
};

export type ZonosShipmentEdge = {
  __typename?: 'ShipmentEdge';
  cursor: Maybe<Scalars['String']>;
  node: Maybe<ZonosShipment>;
};

export type ZonosShipmentFilter = {
  /** Return `Shipment` resources created within a given date range */
  between?: InputMaybe<ZonosDateTimeRange>;
  /** Filter by carrier code */
  carrier?: InputMaybe<Scalars['String']>;
  /** Enhanced date filter for created_at with various comparison options */
  createdAt?: InputMaybe<ZonosDateTimeRange>;
  /** Filter by currency code */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** Filter by destination admin1 (state/province code, e.g. CA, ON, NSW). Best used with destinationCountryCode. */
  destinationAdmin1?: InputMaybe<Scalars['String']>;
  /** Filter by destination country code */
  destinationCountryCode?: InputMaybe<ZonosCountryCode>;
  /** The ID of the `Order` this Shipment belongs to */
  orderId?: InputMaybe<Scalars['ID']>;
  /** Fuzzy search query - searches across tracking numbers, order IDs, customer names, addresses, service levels, and countries */
  q?: InputMaybe<Scalars['String']>;
  /** A `ServiceLevel` ID that is used for a Shipment */
  serviceLevelId?: InputMaybe<Scalars['String']>;
  /** A list of ServiceLevel codes or names that are used for a ShipmentA list of ServiceLevel codes or names that are used for a Shipment */
  serviceLevels?: InputMaybe<Array<Scalars['String']>>;
  /** A date range to filter Shipment objects by their ship date */
  shipDate?: InputMaybe<ZonosDateTimeRange>;
  /** The type of Shipment */
  shipmentType?: InputMaybe<ZonosShipmentType>;
  /** Filter by shipment status */
  status?: InputMaybe<Scalars['String']>;
  /** Enhanced amount filter for total amount with various comparison options */
  totalAmount?: InputMaybe<ZonosShipmentAmountFilter>;
  /** The tracking number associated with the Shipment */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type ZonosShipmentLabelWorkflowInput = {
  /** The booking number for freight shipments */
  bookingNumber?: InputMaybe<Scalars['String']>;
  /** Exemption code for shipments requiring an ITN */
  exemption?: InputMaybe<Scalars['String']>;
  /** Optional ID of the `FulfillmentCenter` this Shipment is being fulfilled from. */
  fulfillmentCenter?: InputMaybe<Scalars['ID']>;
  /** Boolean value to indicate if a `PackingSlip` should be generated for this `Shipment` */
  generatePackingSlip?: InputMaybe<Scalars['Boolean']>;
  /** The declared value (insurance) of the shipment */
  isDeclaredValue?: InputMaybe<Scalars['Boolean']>;
  /** ITN to apply on the label request */
  itnNumber?: InputMaybe<Scalars['String']>;
  /** The optional label specifications for the `Label` to be generated */
  labelSpec?: InputMaybe<ZonosLabelSpecInput>;
  /** The ID of the landed cost to create the shipment from. Either landedCostId or orderId are required. */
  landedCostId?: InputMaybe<Scalars['ID']>;
  /** ID or accountOrderNumber of the `Order` this Shipment will belong to. Required if no `Party` or `Carton` objects are present. */
  orderId?: InputMaybe<Scalars['ID']>;
  /** Optional references to be added on the Label and CI */
  references?: InputMaybe<ZonosShipmentReferenceInput>;
  /** ID or `code` of the `ServiceLevel` to be used for this Shipment. */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** Special service details to apply at the ShipmentCarton level */
  shipmentCartonSpecialServices?: InputMaybe<ZonosShipmentCartonSpecialServiceDetailInput>;
  /** Optional field to specify `ShipmentCarton` objects associated with the Shipment. */
  shipmentCartons?: InputMaybe<Array<ZonosShipmentCartonInput>>;
  /** Optional ID of the `ShipmentConsolidation` this Shipment will belong to. */
  shipmentConsolidationId?: InputMaybe<Scalars['ID']>;
  /** A specified date for a future shipment */
  shipmentDate?: InputMaybe<Scalars['DateTime']>;
  /** Custom declaration statement for this shipment, takes priority over org-level settings */
  shipmentDeclarationStatement?: InputMaybe<Scalars['String']>;
  /** Any special instructions related to this Shipment */
  specialInstructions?: InputMaybe<Scalars['String']>;
  /** A list of `ShipmentSpecialService`s to apply to this Shipment */
  specialServices?: InputMaybe<Array<ZonosShipmentSpecialService>>;
};

export type ZonosShipmentLabelsMergeResult = {
  __typename?: 'ShipmentLabelsMergeResult';
  /** The format of the merged labels file */
  format: ZonosLabelFileType;
  /** The number of labels that were merged */
  labelCount: Scalars['Int'];
  /** The pre-signed S3 URL to download the merged labels file */
  url: Scalars['String'];
};

export type ZonosShipmentNonDeliveryInput = {
  /** What to do if the shipment cannot be delivered */
  option: ZonosShipmentNonDeliveryOptionType;
  /** Transport method for return/forwarding */
  transportMethod?: InputMaybe<ZonosShipmentNonDeliveryTransportType>;
};

export type ZonosShipmentNonDeliveryOptionType =
  | 'ABANDON'
  | 'FORWARD'
  | 'RETURN_AFTER_RETENTION'
  | 'RETURN_IMMEDIATELY';

export type ZonosShipmentNonDeliveryTransportType =
  | 'AIR'
  | 'MOST_ECONOMICAL';

export type ZonosShipmentOrderItem = {
  __typename?: 'ShipmentOrderItem';
  /** The ID of the `Item` on the `Order` */
  originalOrderItemId: Scalars['ID'];
  /** The quantity of this `Item` on the `Order` */
  quantity: Scalars['Int'];
};

export type ZonosShipmentPackagingTypeCode =
  /** UPS: BPM */
  | 'BPM'
  /** UPS: BPM Flat */
  | 'BPM_FLAT'
  /** UPS: BPM Parcel */
  | 'BPM_PARCEL'
  /** UPS: Customer Supplied Package */
  | 'CUSTOMER_SUPPLIED_PACKAGE'
  /** DHL: Bottle Box 1 containing 1 Bottle */
  | 'DHL_BOTTLE_BOX_1'
  /** DHL: Bottle Box 2 containing 2 Bottles */
  | 'DHL_BOTTLE_BOX_2'
  /** DHL: Bottle Box 3 containing 3 Bottles */
  | 'DHL_BOTTLE_BOX_3'
  /** DHL: Bottle Box 6 containing 6 Bottles */
  | 'DHL_BOTTLE_BOX_6'
  /** DHL: Box 2A (Shoe) */
  | 'DHL_BOX_2A'
  /** DHL: Box 2B (Pizza) */
  | 'DHL_BOX_2B'
  /** DHL: Box 2C (Cube) */
  | 'DHL_BOX_2C'
  /** DHL: Box 3 */
  | 'DHL_BOX_3'
  /** DHL: Box 4 */
  | 'DHL_BOX_4'
  /** DHL: Box 5 (Jumbo Small) */
  | 'DHL_BOX_5'
  /** DHL: Box 6 */
  | 'DHL_BOX_6'
  /** DHL: Box 7 */
  | 'DHL_BOX_7'
  /** DHL: Box 8 (Jumbo Large) */
  | 'DHL_BOX_8'
  /** DHL: Card Envelope */
  | 'DHL_CARD_ENVELOPE'
  /** DHL: Card Envelope (Imperial Units) */
  | 'DHL_CARD_ENVELOPE_IMPERIAL'
  /** DHL: Express Envelope */
  | 'DHL_EXPRESS_ENVELOPE'
  /** DHL: Tube Large */
  | 'DHL_TUBE_LARGE'
  /** DHL: Tube Small */
  | 'DHL_TUBE_SMALL'
  /** DHL: Wine Box 2 (1 Bottle) */
  | 'DHL_WINE_BOTTLE_BOX_2'
  /** DHL: Wine Box 3 (2 Bottles) */
  | 'DHL_WINE_BOTTLE_BOX_3'
  /** DHL: Wine Box 4 (3 Bottles) */
  | 'DHL_WINE_BOTTLE_BOX_4'
  /** DHL: Wine Box 5 (6 Bottles) */
  | 'DHL_WINE_BOTTLE_BOX_5'
  /** Express documents */
  | 'EMS_DOCUMENTS'
  /** Express merchandise */
  | 'EMS_MERCHANDISE'
  /** E-packet lite */
  | 'E_PACKET_LITE'
  /** FedEx: 10kg Box */
  | 'FEDEX_10KG_BOX'
  /** FedEx: 25kg Box */
  | 'FEDEX_25KG_BOX'
  /** FedEx: Box */
  | 'FEDEX_BOX'
  /** FedEx: Envelope */
  | 'FEDEX_ENVELOPE'
  /** FedEx: Extra Large Box */
  | 'FEDEX_EXTRA_LARGE_BOX'
  /** FedEx: Large Box */
  | 'FEDEX_LARGE_BOX'
  /** FedEx: Legal Envelope */
  | 'FEDEX_LEGAL_ENVELOPE'
  /** FedEx: Medium Box */
  | 'FEDEX_MEDIUM_BOX'
  /** FedEx: Padded Pak */
  | 'FEDEX_PADDED_PAK'
  /** FedEx: Pak */
  | 'FEDEX_PAK'
  /** FedEx: Small Box */
  | 'FEDEX_SMALL_BOX'
  /** FedEx: Tube */
  | 'FEDEX_TUBE'
  /** UPS: First Class */
  | 'FIRST_CLASS'
  /** UPS: Flats */
  | 'FLATS'
  /** Parcel */
  | 'INTERNATIONAL_PARCEL'
  /** UPS: Irregulars */
  | 'IRREGULARS'
  /** UPS: Large Express Box */
  | 'LARGE_EXPRESS_BOX'
  /** Letter */
  | 'LETTER'
  /** Registered letter */
  | 'LETTER_REGISTERED'
  /** UPS: Machineables */
  | 'MACHINEABLES'
  /** UPS: Media Mail */
  | 'MEDIA_MAIL'
  /** UPS: Medium Express Box */
  | 'MEDIUM_EXPRESS_BOX'
  /** UPS: Pak */
  | 'PAK'
  /** UPS: Pallet */
  | 'PALLET'
  /** UPS: Parcels */
  | 'PARCELS'
  /** UPS: Parcel Post */
  | 'PARCEL_POST'
  /** printed matter */
  | 'PRINTED_MATTER'
  /** Registered printed matter contents */
  | 'PRINTED_MATTER_REGISTERED_CONTENTS'
  /** UPS: Priority */
  | 'PRIORITY'
  /** UPS: Small Express Box */
  | 'SMALL_EXPRESS_BOX'
  /** Small packet */
  | 'SMALL_PACKET'
  /** UPS: Standard Flat */
  | 'STANDARD_FLAT'
  /** UPS: Tube */
  | 'TUBE'
  /** UPS: UPS 10kg Box */
  | 'UPS_10KG_BOX'
  /** UPS: UPS 25kg Box */
  | 'UPS_25KG_BOX'
  /** UPS: UPS Express Box */
  | 'UPS_EXPRESS_BOX'
  /** UPS: UPS Letter */
  | 'UPS_LETTER'
  /** FedEx: Your Packaging */
  | 'YOUR_PACKAGING';

/** A Shipment rating quote that can be displayed. */
export type ZonosShipmentRating = {
  __typename?: 'ShipmentRating';
  /** The quoted amount for the ShipmentRating. */
  amount: Scalars['Decimal'];
  /** Subtotal amounts of how the ShipmentRating amount was calculated. */
  amountSubtotals: ZonosShipmentRatingSubtotals;
  /** When this ShipmentRating was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ShipmentRating */
  createdBy: Scalars['ID'];
  /** The currency this ShipmentRating price amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** Breakdown of the details returned from the carrier. */
  details: Maybe<Array<ZonosShipmentRatingDetail>>;
  /** The customer facing display name of the ShipmentRating. */
  displayName: Scalars['String'];
  /** A unique identifier for the ShipmentRating. */
  id: Scalars['ID'];
  /** The ISO-8601 timestamp of when the delivery will be delivered */
  maxTransitAt: Maybe<Scalars['DateTime']>;
  /** The ISO-8601 timestamp of when the delivery could first be delivered */
  minTransitAt: Maybe<Scalars['DateTime']>;
  /** For shipments that contain multiple fulfillment warehouses the multipleShipFromRatings will contain the individual `ShipmentRating` calculations. The aggregated totals will be reflected on the parent object. In these cases the shipFrom location will be null. */
  multipleShipFromRatings: Maybe<Array<Maybe<ZonosShipmentRating>>>;
  /** The `Organization` associated with the ShipmentRating */
  organization: Scalars['ID'];
  /** The `ServiceLevel` resolved at rating time. Null for legacy rows that pre-date this column; consumers should fall back to `serviceLevelCode`. */
  serviceLevel: Maybe<ZonosServiceLevel>;
  /** The `ServiceLevel` code associated with the ShipmentRating. */
  serviceLevelCode: Scalars['String'];
  /** The `Location` associated with the origin of the shipment. */
  shipFrom: Maybe<ZonosLocation>;
  /** Specifies the `Carton`'s destination. */
  shipTo: Maybe<ZonosLocation>;
  /** Amount details in difference currencies for the rating amount */
  shipmentRatingAmountDetail: Array<ZonosShipmentRatingAmountDetail>;
  /** The `Carton` data included in the ShipmentRating. */
  shipmentRatingCartons: Array<ZonosShipmentRatingCarton>;
  /** The `ShippingProfile` associated with the ShipmentRating. */
  shippingProfile: Maybe<ZonosShippingProfile>;
  /** The source of the rating i.e. LIVE or CACHE */
  source: Maybe<ZonosShipmentRatingSourceType>;
  /** Detailed breakdown of subtotal amounts for the shipment rating, including currency-specific calculations for each component. */
  subtotalAmountDetails: Array<ZonosShipmentRatingSubtotalAmountDetail>;
  /** When this ShipmentRating was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShipmentRating. */
  updatedBy: Scalars['ID'];
};

export type ZonosShipmentRatingAdjustmentInput = {
  /** The adjustment amount. Negative values reduce the cart total. */
  amount: Scalars['Decimal'];
  /** The currency of the adjustment amount. Used for FX conversion when the adjustment currency differs from the rating currency. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** The type of adjustment. */
  type: ZonosShipmentRatingAdjustmentType;
};

export type ZonosShipmentRatingAdjustmentType =
  /** Adjustment applied to the entire cart total (e.g., a discount code). */
  | 'CART_TOTAL';

export type ZonosShipmentRatingAmountDetail = {
  __typename?: 'ShipmentRatingAmountDetail';
  amount: Scalars['Decimal'];
  amountUnrounded: Scalars['Decimal'];
  createdAt: Scalars['DateTime'];
  currencyCode: ZonosCurrencyCode;
  exchangeRateIds: Array<Scalars['ID']>;
  id: Scalars['ID'];
  target: ZonosShipmentRatingAmountTargetType;
  targets: Array<Maybe<ZonosShipmentRatingAmountTargetType>>;
};

export type ZonosShipmentRatingAmountTargetType =
  | 'BILLING_COMPANY'
  | 'MERCHANT_BASE'
  | 'MERCHANT_PROVIDED'
  | 'MERCHANT_SETTLED'
  | 'SHIPMENT_RATING_PROVIDED'
  | 'SHOPPER_PRESENTED'
  | 'ZONOS_BASE';

export type ZonosShipmentRatingBatteryDetail = {
  /** Indicates what material the battery is composed of */
  materialType: ZonosShipmentRatingBatteryMaterialType;
  /** Indicates how the battery is packaged within the shipment */
  packingType: ZonosShipmentRatingBatteryPackingType;
};

export type ZonosShipmentRatingBatteryMaterialType =
  /** Indicates battery is a lithium ion battery */
  | 'LITHIUM_ION'
  /** Indicates battery is a lithium metal battery */
  | 'LITHIUM_METAL';

export type ZonosShipmentRatingBatteryPackingType =
  /** Battery is contained inside an item in the package */
  | 'BATTERY_INSIDE_EQUIPMENT'
  /** The package only contains a battery/batteries. */
  | 'BATTERY_ONLY'
  /** Battery is packaged with the equipment and not contained in the item */
  | 'BATTERY_PACKAGED_WITH_EQUIPMENT';

export type ZonosShipmentRatingCalculateQuoterWorkflowInput = {
  /** Container for special service details to apply to the `ShipmentRating` */
  specialServiceDetail?: InputMaybe<ZonosShipmentRatingSpecialServiceDetail>;
};

export type ZonosShipmentRatingCalculateWorkflowInput = {
  /** Adjustments to apply to the cart total for rule evaluation (e.g., discounts, promo codes). Amounts should be negative to reduce the total. */
  adjustments?: InputMaybe<Array<ZonosShipmentRatingAdjustmentInput>>;
  /** The currency code to calculate the `ShipmentRating` in */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** The presentment currency for checkout quotes */
  currencyCodePresentment?: InputMaybe<ZonosCurrencyCode>;
  /** Specifies what profiles to be used for rating. ZONE is the default and will only return rates for profiles in the corresponding `ShippingZone` */
  rateType?: InputMaybe<ZonosShipmentRatingRateType>;
  /** The source of the `ShipmentRating` */
  source?: InputMaybe<ZonosShipmentRatingSource>;
  /** Container for special service details to apply to the `ShipmentRating` */
  specialServiceDetail?: InputMaybe<ZonosShipmentRatingSpecialServiceDetail>;
};

/** The Carton details containing the package dimensions and items included in the `ShipmentRating` */
export type ZonosShipmentRatingCarton = {
  __typename?: 'ShipmentRatingCarton';
  /** The monetary amount to insure a `Carton` for to account for unexpected incidents. */
  amountInsured: Scalars['Decimal'];
  /** The `Carton` associated with the ShipmentRatingCarton */
  carton: ZonosCarton;
  /** The weight the carrier is charging for this carton. This could be actual or dimensional weight of the carton. */
  chargeableWeight: Maybe<Scalars['Decimal']>;
  /** Indicates whether the chargeable weight is based on dimensional weight or physical weight. */
  chargeableWeightType: Maybe<ZonosWeightUnitType>;
  /** The weight the carrier is charging for this carton. This could be actual or dimensional weight of the carton. */
  chargeableWeightUnit: Maybe<ZonosWeightUnitCode>;
  /** The `dimensionalWeight` factor used to determine the `dimensionalWeight`. */
  dimensionalFactor: Maybe<Scalars['Int']>;
  /** The dimensional unit used for the carton dimensions. */
  dimensionalUnit: Maybe<ZonosDimensionalUnitCode>;
  /** The calculated `dimensionalWeight` of the carton. */
  dimensionalWeight: Maybe<Scalars['Decimal']>;
  /** The weight unit of the chargeable weight. */
  weightUnit: Maybe<ZonosWeightUnitCode>;
};

export type ZonosShipmentRatingConnection = {
  __typename?: 'ShipmentRatingConnection';
  /** A list of edges containing `ShipmentRatingEdge` objects of the current page in the connection */
  edges: Array<ZonosShipmentRatingEdge>;
  /** `PageInfo` for the current pagination connection */
  pageInfo: Maybe<ZonosPageInfo>;
  /** The total number of objects that apply to the given filters */
  totalCount: Maybe<Scalars['Int']>;
};

/** Input to create a non-calculated shipmentRating. */
export type ZonosShipmentRatingCreateWorkflowInput = {
  /** The amount for the `ShipmentRating`. */
  amount: Scalars['Decimal'];
  /** The currency this `ShipmentRating` price amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** The customer facing display name of the `ShipmentRating`. */
  displayName?: InputMaybe<Scalars['String']>;
  /** The `ServiceLevel` code associated with the `ShipmentRating`. */
  serviceLevelCode: Scalars['String'];
};

/** A surcharge or discount breakdown provided by the carrier. */
export type ZonosShipmentRatingDetail = {
  __typename?: 'ShipmentRatingDetail';
  /** Amount for each charge as defined by the `Carrier`. */
  amount: Scalars['Decimal'];
  /** Unique identifier that will be tied to each fee that is charged by the carrier for the `ShipmentRating`. */
  carrierCode: Scalars['String'];
  /** The type of fee that is being broken down as part of the `ShipmentRating`. */
  type: ZonosShipmentAmountType;
};

export type ZonosShipmentRatingEdge = {
  __typename?: 'ShipmentRatingEdge';
  /** A cursor pointing to this `ShipmentRating` in the current connection */
  cursor: Scalars['String'];
  /** The `ShipmentRating` object */
  node: ZonosShipmentRating;
};

export type ZonosShipmentRatingFilter = {
  /** A range of DateTime to filter by the createdAt field */
  createdAtBetween?: InputMaybe<ZonosDateTimeRange>;
  /** A two-letter ISO country code */
  destinationCountry?: InputMaybe<ZonosCountryCode>;
  /** A two-letter ISO country code */
  originCountry?: InputMaybe<ZonosCountryCode>;
  /** The ID of the `ServiceLevel` the `ShipmentRating` was calculated from */
  serviceLevel?: InputMaybe<Scalars['ID']>;
};

export type ZonosShipmentRatingRateType =
  /** Will return rates for all profiles, regardless of `ShippingZone` association that are associated with valid service levels. */
  | 'LABEL_ENABLED'
  /** Will only return rates for profiles in the `ShippingZone` for the origin and destination locations. */
  | 'ZONE';

export type ZonosShipmentRatingSignatureOptionType =
  /** An adult signature is required */
  | 'ADULT'
  /** Signature requirement based on the service level default */
  | 'DEFAULT'
  /** Direct signature required */
  | 'DIRECT'
  /** Indirect signature required */
  | 'INDIRECT';

export type ZonosShipmentRatingSource =
  | 'API_REQUEST'
  | 'CHECKOUT';

export type ZonosShipmentRatingSourceType =
  | 'CACHE'
  | 'LIVE'
  | 'PROVIDED';

export type ZonosShipmentRatingSpecialServiceDetail = {
  /** Detail input required when BATTERY is present in `serviceTypes` */
  batteryDetail?: InputMaybe<ZonosShipmentRatingBatteryDetail>;
  /** List of `ShipmentRatingSpecialServiceTypes` to apply to the `ShipmentRating` */
  serviceTypes: Array<ZonosShipmentRatingSpecialServiceType>;
  /** Specifies the type of signature required. Required when SIGNATURE_OPTION is present in `serviceTypes` */
  signatureOptionType?: InputMaybe<ZonosShipmentRatingSignatureOptionType>;
};

export type ZonosShipmentRatingSpecialServiceType =
  | 'ALCOHOL'
  | 'BATTERY'
  | 'CUT_FLOWERS'
  | 'DANGEROUS_GOODS'
  | 'DRY_ICE'
  | 'SATURDAY_DELIVERY'
  | 'SIGNATURE_OPTION'
  | 'SUNDAY_DELIVERY';

/** Detailed breakdown of subtotal amounts for a shipment rating, showing currency-specific calculations. */
export type ZonosShipmentRatingSubtotalAmountDetail = {
  __typename?: 'ShipmentRatingSubtotalAmountDetail';
  /** The calculated amount in the specified currency. */
  amount: Scalars['Decimal'];
  /** The unrounded amount with higher precision, used for calculation accuracy. */
  amountUnrounded: Scalars['Decimal'];
  /** When this subtotal amount detail was created. */
  createdAt: Scalars['DateTime'];
  /** The currency code for this amount detail. */
  currencyCode: ZonosCurrencyCode;
  /** References to exchange rates used for currency conversion. */
  exchangeRateIds: Maybe<Array<Scalars['ID']>>;
  /** A unique identifier for the ShipmentRatingSubtotalAmountDetail. */
  id: Scalars['ID'];
  /** The shipment rating this detail belongs to. */
  shipmentRatingId: Scalars['ID'];
  /** The specific targets this amount applies to. */
  targets: Array<ZonosShipmentRatingAmountTargetType>;
  /** The type of subtotal amount (e.g., SHIPPING, FUEL_SURCHARGE, INSURANCE, etc). Indicates what component of the total this amount represents. */
  type: Maybe<Scalars['String']>;
};

/** Subtotal amounts of how the `ShipmentRating` amount was calculated */
export type ZonosShipmentRatingSubtotals = {
  __typename?: 'ShipmentRatingSubtotals';
  /** Amount charged for the fuel surcharge by the `Carrier`. */
  fuelSurcharge: Maybe<Scalars['Decimal']>;
  /** Cost to insure items that is charged by the `Carrier`. */
  insuranceCost: Maybe<Scalars['Decimal']>;
  /** The sum of any other surcharges that are not individually broken down by the `Carrier` (residential falls into this bucket). */
  otherSurcharge: Maybe<Scalars['Decimal']>;
  /** Cost of shipping as defined by the `Carrier`. */
  shipping: Scalars['Decimal'];
};

export type ZonosShipmentReference = {
  __typename?: 'ShipmentReference';
  /** Certificate number for customs */
  certificateNumber: Maybe<Scalars['String']>;
  /** Customs or invoice remarks */
  customsRemarks: Maybe<Scalars['String']>;
  /** Optional merchant-provided invoice number */
  invoiceNumber: Maybe<Scalars['String']>;
  /** Export/import license number for customs */
  licenseNumber: Maybe<Scalars['String']>;
  /** Free-text payment conditions for customs invoice */
  paymentConditions: Maybe<Scalars['String']>;
  /** Optional merchant-provided purchase order number */
  purchaseOrderNumber: Maybe<Scalars['String']>;
};

export type ZonosShipmentReferenceInput = {
  /** Certificate number for customs */
  certificateNumber?: InputMaybe<Scalars['String']>;
  /** Customs or invoice remarks */
  customsRemarks?: InputMaybe<Scalars['String']>;
  /** Optional merchant-provided invoice number */
  invoiceNumber?: InputMaybe<Scalars['String']>;
  /** Export/import license number for customs */
  licenseNumber?: InputMaybe<Scalars['String']>;
  /** Free-text payment conditions for customs invoice */
  paymentConditions?: InputMaybe<Scalars['String']>;
  /** Optional merchant-provided purchase order number */
  purchaseOrderNumber?: InputMaybe<Scalars['String']>;
  /** Optional custom tax code to set on the label */
  taxCode?: InputMaybe<Scalars['String']>;
};

export type ZonosShipmentRefundStatus =
  | 'ELIGIBLE_FOR_REFUND'
  | 'NOT_APPLICABLE'
  | 'NOT_ELIGIBLE_FOR_REFUND';

export type ZonosShipmentSearchBackfillInput = {
  /** Number of shipments to process per batch. Default: 100 */
  batchSize?: InputMaybe<Scalars['Int']>;
  /** If true, re-processes shipments even if search_text is already populated. Default: false */
  forceRebackfill?: InputMaybe<Scalars['Boolean']>;
  /** Maximum number of shipments to process. Null for all. */
  maxShipments?: InputMaybe<Scalars['Int']>;
  /** If true, only processes shipments that have missing search fields (tracking, service level, customer name, country, address). Default: false */
  onlyMissingSearchFields?: InputMaybe<Scalars['Boolean']>;
  /** Optional: Filter by specific organization ID. Null for all organizations. */
  organizationId?: InputMaybe<Scalars['String']>;
  /** Number of parallel threads to use for processing. 1 = sequential, 2-10 = parallel. Default: 1 */
  parallelThreads?: InputMaybe<Scalars['Int']>;
};

export type ZonosShipmentSearchBackfillResult = {
  __typename?: 'ShipmentSearchBackfillResult';
  /** List of error messages */
  errors: Array<Scalars['String']>;
  /** Number of shipments that failed to update */
  failureCount: Scalars['Int'];
  /** Number of shipments skipped (already had search data) */
  skippedCount: Scalars['Int'];
  /** Number of shipments successfully updated */
  successCount: Scalars['Int'];
};

export type ZonosShipmentSpecialService =
  | 'CONSOLIDATION'
  | 'CUT_FLOWERS'
  | 'DRY_ICE'
  | 'EXTENDED_AREA'
  | 'RETURN_SHIPMENT'
  | 'SATURDAY_DELIVERY'
  | 'SATURDAY_PICKUP'
  | 'SCHEDULED_DELIVERY'
  | 'SINGLE_SHIPMENT';

export type ZonosShipmentStatusTransition = {
  __typename?: 'ShipmentStatusTransition';
  /** DateTime indicating when this status change occurred */
  changedAt: Scalars['DateTime'];
  /** Text describing this status change */
  note: Maybe<Scalars['String']>;
  /** Status of this `Shipment` at the associated DateTime */
  status: ZonosShipmentStatusType;
};

export type ZonosShipmentStatusType =
  /** Default status */
  | 'CREATED'
  /** Shipment was delivered */
  | 'DELIVERED'
  /** Shipment was delivered to the consolidation center */
  | 'DELIVERED_TO_CONSOLIDATION_CENTER'
  /** Shipment is in transit to the destination */
  | 'IN_TRANSIT'
  /** Shipment is in transit to the consolidation center */
  | 'IN_TRANSIT_TO_CONSOLIDATION_CENTER'
  /** Shipment was canceled */
  | 'VOIDED';

export type ZonosShipmentStatusUpdateInput = {
  /** Optional flag to force the status change */
  force?: InputMaybe<Scalars['Boolean']>;
  /** Optional note about the status change */
  note?: InputMaybe<Scalars['String']>;
  /** The shipment which status should be updated */
  shipment: Scalars['ID'];
  /** The new status type the shipment should be updated to */
  status: ZonosShipmentStatusType;
};

export type ZonosShipmentType =
  | 'DOMESTIC'
  | 'INTERNATIONAL';

export type ZonosShipmentsCreateFromOrderInput = {
  /** The ID of the `Order` to create and associate shipments with. */
  orderId: Scalars['ID'];
  /** List of inputs containing Shipment details. */
  shipments: Array<ZonosOrderShipmentCreateInput>;
};

export type ZonosShippingPaymentType =
  /** The shipper will be responsible for paying shipping charges. Default value. */
  | 'SENDER'
  /** A third party will be responsible for paying shipping charges */
  | 'THIRD_PARTY';

/** A ShippingProfile object is used to map a `ServiceLevel` to an `Organization`. Allowing the Organization to adjust the display name and apply rate charts to the service level. */
export type ZonosShippingProfile = {
  __typename?: 'ShippingProfile';
  /** When this ShippingProfile was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ShippingProfile. */
  createdBy: Scalars['ID'];
  /** A customized carrier service level code to identify how to fulfill the shipment. */
  customServiceLevelCode: Maybe<Scalars['String']>;
  /** A unique identifier for the ShippingProfile. */
  id: Scalars['ID'];
  /** The method to use for the landed cost calculation for the ShippingProfile. */
  landedCostMethod: Maybe<ZonosLandedCostMethod>;
  /** Specifies whether the ShippingProfile is in live or test mode. */
  mode: ZonosMode;
  /** The humanly-memorable display name of the ShippingProfile. */
  name: Scalars['String'];
  /** The `Organization` associated with the ShippingProfile. */
  organization: Scalars['ID'];
  /** The `ServiceLevel` associated with the ShippingProfile. */
  serviceLevel: ZonosServiceLevel;
  /** The `ShippingProfileRateCharts` that apply to this profile. */
  shippingRates: Maybe<Array<ZonosShippingProfileRateChart>>;
  /** Status of the shipping profile */
  status: ZonosShippingProfileStatus;
  /** `TransitTime` breakdown that applies to the ShippingProfile. */
  transitTime: Maybe<ZonosTransitTime>;
  /** When this ShippingProfile was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShippingProfile. */
  updatedBy: Scalars['ID'];
};

/** A `ShippingProfileRateChart` would apply to a specific shipping profile. The `ShippingProfileRateChart` would be used before any `ServiceLevelRateChart` as well as any external carrier API. */
export type ZonosShippingProfileRateChart = {
  __typename?: 'ShippingProfileRateChart';
  /** When this ShippingProfileRateChart was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ShippingProfileRateChart. */
  createdBy: Scalars['ID'];
  /** Dimensional weight divisor used when evaluating weight-based rate chart rules. - null: use the carrier-standard factor for the unit (CM or IN) - 0: disable dimensional weight — rules evaluate against physical weight only - > 0: use this custom divisor */
  dimensionalWeightFactor: Maybe<Scalars['Decimal']>;
  /** The `shipFrom` `countryCode` that applies to filter by. */
  fromCountryCode: Maybe<ZonosCountryCode>;
  /** A unique identifier for the ShippingProfileRateChart. */
  id: Scalars['ID'];
  /** The destination locations for the ShippingProfileRateChart. */
  locations: Maybe<Array<ZonosShippingRateLocation>>;
  /** Specifies whether the ShippingProfileRateChart is in live or test mode. */
  mode: ZonosMode;
  /** The specific rate values that apply to the given ShippingProfileRateChart. */
  rates: Array<ZonosShippingRate>;
  /** The `ShippingProfile` associated with the ShippingProfileRateChart. */
  shippingProfile: ZonosShippingProfile;
  /** The transit time that applies to the ShippingProfileRateChart. */
  transitTime: Maybe<ZonosTransitTime>;
  /** When this ShippingProfileRateChart was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShippingProfileRateChart. */
  updatedBy: Scalars['ID'];
};

export type ZonosShippingProfileRateChartsFilter = {
  /** The `ShippingProfile` that should be used to check for rates. */
  shippingProfile: Scalars['ID'];
};

export type ZonosShippingProfileStatus =
  /** shipping profile is active */
  | 'ACTIVE'
  /** shipping profile is deleted */
  | 'DELETED';

export type ZonosShippingProfilesFilter = {
  /** The ID or `code` of the `Carrier`. */
  carrier?: InputMaybe<Scalars['ID']>;
  /** The ID or `code` of the `ServiceLevel`. */
  serviceLevel?: InputMaybe<Scalars['ID']>;
  /** Status of the shipping profile. */
  status?: InputMaybe<ZonosShippingProfileStatus>;
};

/** A Shipping rate that is based on either weight our currency amount */
export type ZonosShippingRate = ZonosShippingRateAmount | ZonosShippingRateWeight;

/** A `ShippingRateAmount` defines the range in a specific currency unit that applies to a given rate amount */
export type ZonosShippingRateAmount = {
  __typename?: 'ShippingRateAmount';
  /** The subtotal amount used to find the applied rate. */
  amount: Scalars['Decimal'];
  /** How the amount is applied based on the units. */
  calculationType: ZonosShippingRateCalculation;
  /** The currency this `shippingRate` price amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** The inclusive maximum amount that applies to the given rate. */
  maxUnit: Maybe<Scalars['Decimal']>;
  /** The exclusive minimum amount that applies to the given rate. */
  minUnit: Maybe<Scalars['Decimal']>;
  /** The `currencyCode` that defines the min/max values. */
  unit: ZonosCurrencyCode;
};

/** Specify how the rate amount would be applied. */
export type ZonosShippingRateCalculation =
  /** The rate uses the amount as it was entered. */
  | 'FIXED'
  /** The rate multiplies the amount by the units. */
  | 'PER_UNIT';

/** A `ShippingRateLocation` is used to limit the destination that would apply to a `ShippingProfileRateChart`. */
export type ZonosShippingRateLocation = {
  __typename?: 'ShippingRateLocation';
  /** Which administrative area the shipper must be located in to trigger this configuration. */
  administrativeAreaCode: Maybe<Scalars['String']>;
  /** A single country code if one applies to this location. */
  countryCode: Maybe<ZonosCountryCode>;
  /** A pre-defined area or carrier zone that applies to the rate. */
  serviceLevelArea: Maybe<ZonosServiceLevelArea>;
};

/** A `ShippingRateWeight` defines the range in a specific weight unit that applies to a given rate amount */
export type ZonosShippingRateWeight = {
  __typename?: 'ShippingRateWeight';
  /** The subtotal amount used to find the applied rate. */
  amount: Scalars['Decimal'];
  /** How the amount is applied based on the units. */
  calculationType: ZonosShippingRateCalculation;
  /** The currency this `shippingRate` price amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** The inclusive maximum weight that applies to the given rate. */
  maxUnit: Maybe<Scalars['Decimal']>;
  /** The exclusive minimum weight that applies to the given rate. */
  minUnit: Maybe<Scalars['Decimal']>;
  /** The type of weight associated with the `ShippingRate`. */
  unit: ZonosWeightUnitCode;
};

export type ZonosShippingSettings = {
  __typename?: 'ShippingSettings';
  /** When these `shippingSettings` were created. */
  createdAt: Scalars['DateTime'];
  /** The user who created these `shippingSettings`. */
  createdBy: Scalars['String'];
  /** A rough estimate of item weight when calculating shipping, if no per-item weights are provided. */
  defaultWeightMultiplier: Scalars['Decimal'];
  /** A unique identifier for the ShippingSettings. */
  id: Scalars['String'];
  /** Specifies whether the ShippingSettings is in live or test mode. */
  mode: ZonosMode;
  /** The `Organization` associated with the ShippingSettings. */
  organization: Scalars['String'];
  /** ID of the `Preferred Packaging Option` for this `Organization`. */
  preferredPackagingOptionId: Maybe<Scalars['ID']>;
  /** When these `ShippingSettings` were most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShippingSettings. */
  updatedBy: Scalars['String'];
};

/** A `ShippingStoreSettings` object represents store-specific settings for shipping related processes. */
export type ZonosShippingStoreSettings = {
  __typename?: 'ShippingStoreSettings';
  /** When ShippingStoreSettings was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ShippingStoreSettings. */
  createdBy: Scalars['ID'];
  /** Display transit time inline */
  displayTransitTimeInline: Maybe<Scalars['Boolean']>;
  /** A buffer amount to be applied to duty and tax amounts */
  dutyTaxBuffer: Maybe<Scalars['Decimal']>;
  /** A buffer represented as a percentage to be applied to duty and tax amounts */
  dutyTaxBufferPercent: Maybe<Scalars['Decimal']>;
  /** Fulfillment days */
  fulfillmentDays: Maybe<Scalars['Int']>;
  /** A unique identifier for the ShippingStoreSettings. */
  id: Scalars['ID'];
  /** Landed cost countries */
  landedCostCountries: Maybe<Scalars['String']>;
  /** Landed cost prepay */
  landedCostPrepay: Maybe<Scalars['String']>;
  /** Pickup time */
  pickupTime: Maybe<Scalars['DateTime']>;
  /** The ID of the store these settings apply to */
  storeId: Scalars['Int'];
  /** The stores Tax Payer Identification (TIN) number */
  tinNumber: Maybe<Scalars['String']>;
  /** The type of TIN number ex. Business National, Personal State */
  tinType: Maybe<Scalars['String']>;
  /** When ShippingStoreSettings was updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShippingStoreSettings. */
  updatedBy: Scalars['ID'];
};

/** A `ShippingZone` is a group of countries that will be serviced by a `FulfillmentCenter`. */
export type ZonosShippingZone = {
  __typename?: 'ShippingZone';
  /** A list of two-letter ISO country codes that are supported by this ShippingZone. */
  countryCodes: Maybe<Array<ZonosCountryCode>>;
  /** When the ShippingZone was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the ShippingZone. */
  createdBy: Scalars['ID'];
  /** The default `FulfillmentCenter` that services the ShippingZone. */
  fulfillmentCenter: Maybe<ZonosFulfillmentCenter>;
  /** A unique identifier for the ShippingZone. */
  id: Scalars['ID'];
  /** What should dictate what landed cost method should be used. */
  landedCostConfiguration: ZonosZoneLandedCostConfiguration;
  /** Specifies whether the ShippingZone is in live or test mode. */
  mode: ZonosMode;
  /** The humanly-memorable display name for the ShippingZone. */
  name: Scalars['String'];
  /** The `Organization` associated with the ShippingZone. */
  organization: Scalars['ID'];
  /** A list of shipping profiles associated with the ShippingZone. */
  profiles: Maybe<Array<ZonosShippingProfile>>;
  /** When the ShippingZone was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the ShippingZone. */
  updatedBy: Scalars['ID'];
};

export type ZonosShippingZonesFilter = {
  /** A two-letter ISO country code. */
  countryCode: ZonosCountryCode;
};

export type ZonosShortUrl = {
  __typename?: 'ShortUrl';
  active: Scalars['Boolean'];
  /** Running redirect count */
  clickCount: Scalars['Int'];
  /** The short code slug (e.g. "aB3xZ9q") or custom alias */
  code: Scalars['String'];
  createdAt: Maybe<Scalars['DateTime']>;
  createdBy: Maybe<Scalars['String']>;
  /** Optional human-readable alias (e.g. "summer-sale") */
  customAlias: Maybe<Scalars['String']>;
  /** Null means never expires */
  expiresAt: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  /** The full destination URL */
  originalUrl: Scalars['String'];
  updatedAt: Maybe<Scalars['DateTime']>;
  updatedBy: Maybe<Scalars['String']>;
  /** The full redirect URL (e.g. "https://tiny.zonos.com/r/aB3xZ9q"); null if base URL is not configured */
  url: Maybe<Scalars['String']>;
};

export type ZonosShortUrlClick = {
  __typename?: 'ShortUrlClick';
  acceptLanguage: Maybe<Scalars['String']>;
  clickedAt: Scalars['DateTime'];
  id: Scalars['ID'];
  ipAddress: Maybe<Scalars['String']>;
  referer: Maybe<Scalars['String']>;
  shortUrlCode: Scalars['String'];
  userAgent: Maybe<Scalars['String']>;
};

export type ZonosShortUrlCreateInput = {
  /** Override the auto-generated code with a custom alias */
  customAlias?: InputMaybe<Scalars['String']>;
  /** Optional expiry; null = never expires */
  expiresAt?: InputMaybe<Scalars['DateTime']>;
  originalUrl: Scalars['String'];
};

export type ZonosSignatureOptionType =
  /** An adult signature is required */
  | 'ADULT'
  /** Signature requirement based on the service level default */
  | 'DEFAULT'
  /** Direct signature required */
  | 'DIRECT'
  /** Indirect signature required */
  | 'INDIRECT'
  /** No signature required */
  | 'NONE';

export type ZonosStackConfiguration = {
  __typename?: 'StackConfiguration';
  /** How deep (in dimensional units) one item nests into another when stacked. Will use same dimensional unit as `CatalogItem` dimensions */
  stackDepth: Scalars['Decimal'];
  /** The Grouping key for items that can stack together. Items with the same stackGroup will be stacked together. */
  stackGroup: Maybe<Scalars['String']>;
  /** The limit of items that can be stacked */
  stackLimit: Maybe<Scalars['Int']>;
};

export type ZonosStackConfigurationInput = {
  /** How deep (in dimensional units) one item nests into another when stacked. Will use same dimensional unit as `CatalogItem` dimensions */
  stackDepth: Scalars['Decimal'];
  /** The Grouping key for items that can stack together. Items with the same stackGroup will be stacked together. */
  stackGroup?: InputMaybe<Scalars['String']>;
  /** The limit of items that can be stacked */
  stackLimit?: InputMaybe<Scalars['Int']>;
};

export type ZonosStageUploadResult = {
  __typename?: 'StageUploadResult';
  /** ID of the `StagedUploadResult`. */
  id: Scalars['ID'];
  /** URL designating where to upload the resource. */
  url: Scalars['String'];
};

/** A status change recorded for a consignment, entry, or consolidation. */
export type ZonosStatusTransition = {
  __typename?: 'StatusTransition';
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  message: Maybe<Scalars['String']>;
  status: Scalars['String'];
};

export type ZonosStoreCredit = {
  __typename?: 'StoreCredit';
  /** The current balance */
  balance: Scalars['Decimal'];
  /** The checkout customer ID associated with this store credit */
  checkoutCustomerId: Scalars['ID'];
  /** The currency code */
  currencyCode: ZonosCurrencyCode;
  /** The unique identifier for the store credit */
  id: Scalars['ID'];
  /** Metadata key-value pairs (for merchant data) */
  metadata: Maybe<Array<ZonosStoreCreditMetadata>>;
  /** References key-value pairs (for internal record linking) */
  references: Maybe<Array<ZonosStoreCreditReference>>;
};

export type ZonosStoreCreditAddCreditInput = {
  /** The amount of credit to add */
  amount: Scalars['Decimal'];
  /** The checkout customer ID to associate the store credit with */
  checkoutCustomerId: Scalars['ID'];
  /** The currency code for the credit */
  currencyCode: ZonosCurrencyCode;
  /** Optional metadata key-value pairs (for merchant data) */
  metadata?: InputMaybe<Array<ZonosStoreCreditMetadataInput>>;
  /** Optional references key-value pairs (for internal record linking) */
  references?: InputMaybe<Array<ZonosStoreCreditReferenceInput>>;
};

export type ZonosStoreCreditApplicationInput = {
  /** Required when mode = PARTIAL. The exact amount of store credit to apply. Must be positive and will be validated against available balance and cart total. The currency on the CheckoutSession's CheckoutSubtotals will be used when fetching the available store credit amount. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** Determines whether to apply the full available balance or a partial amount. The currency on the CheckoutSession's CheckoutSubtotals will be used when fetching the available store credit amount. */
  mode: ZonosStoreCreditApplicationMode;
};

export type ZonosStoreCreditApplicationMode =
  /** Apply the maximum possible amount */
  | 'FULL'
  /** Remove store credit from the checkout session */
  | 'NONE'
  /** Apply exactly the specified amount */
  | 'PARTIAL';

export type ZonosStoreCreditApplyToCheckoutInput = {
  /** The checkout session ID to apply store credit to. Customer, amount, and currency are read from the session. */
  checkoutSessionId: Scalars['ID'];
  /** Optional metadata key-value pairs for the transaction */
  metadata?: InputMaybe<Array<ZonosStoreCreditMetadataInput>>;
  /** Optional references key-value pairs for the transaction */
  references?: InputMaybe<Array<ZonosStoreCreditReferenceInput>>;
};

export type ZonosStoreCreditFilter = {
  /** Filter by currency code */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
};

export type ZonosStoreCreditMetadata = {
  __typename?: 'StoreCreditMetadata';
  /** The key used to identify this metadata */
  key: Scalars['String'];
  /** The value of this metadata */
  value: Scalars['String'];
};

export type ZonosStoreCreditMetadataInput = {
  /** The key used to identify this metadata */
  key: Scalars['String'];
  /** The value of this metadata */
  value: Scalars['String'];
};

export type ZonosStoreCreditReference = {
  __typename?: 'StoreCreditReference';
  /** The key used to identify this reference */
  key: Scalars['String'];
  /** The value of this reference */
  value: Scalars['String'];
};

export type ZonosStoreCreditReferenceInput = {
  /** The key used to identify this reference */
  key: Scalars['String'];
  /** The value of this reference */
  value: Scalars['String'];
};

export type ZonosStoreCreditRemoveCreditInput = {
  /** The amount to remove (fails if insufficient balance) */
  amount: Scalars['Decimal'];
  /** The checkout customer ID */
  checkoutCustomerId: Scalars['ID'];
  /** The currency code */
  currencyCode: ZonosCurrencyCode;
  /** Optional metadata */
  metadata?: InputMaybe<Array<ZonosStoreCreditMetadataInput>>;
  /** Optional references for internal record linking */
  references?: InputMaybe<Array<ZonosStoreCreditReferenceInput>>;
};

export type ZonosStoreCreditReverseTransactionInput = {
  /** Optional amount for partial reversal. If not provided, reverses the full remaining amount. */
  amount?: InputMaybe<Scalars['Decimal']>;
  /** Optional metadata key-value pairs (for merchant data) */
  metadata?: InputMaybe<Array<ZonosStoreCreditMetadataInput>>;
  /** Optional notes for the reversal transaction */
  notes?: InputMaybe<Scalars['String']>;
  /** Optional references key-value pairs (for internal record linking) */
  references?: InputMaybe<Array<ZonosStoreCreditReferenceInput>>;
  /** The ID of the transaction to reverse */
  transactionId: Scalars['ID'];
};

export type ZonosStoreCreditTransaction = {
  __typename?: 'StoreCreditTransaction';
  /** The transaction amount */
  amount: Scalars['Decimal'];
  /** The balance after this transaction */
  balanceAfter: Scalars['Decimal'];
  /** The checkout session ID if this was a purchase transaction */
  checkoutSessionId: Maybe<Scalars['ID']>;
  /** The currency code */
  currencyCode: ZonosCurrencyCode;
  /** The unique identifier for the transaction */
  id: Scalars['ID'];
  /** Metadata key-value pairs (for merchant data) */
  metadata: Maybe<Array<ZonosStoreCreditMetadata>>;
  /** Transaction notes */
  notes: Maybe<Scalars['String']>;
  /** Reference to another transaction (e.g., the debit transaction that was refunded) */
  referenceId: Maybe<Scalars['ID']>;
  /** References key-value pairs (for internal record linking) */
  references: Maybe<Array<ZonosStoreCreditReference>>;
  /** Reversal transactions for this transaction */
  reversalTransactions: Array<ZonosStoreCreditTransaction>;
  /** The source transaction this reversal originated from */
  sourceTransaction: Maybe<ZonosStoreCreditTransaction>;
  /** The store credit account this transaction belongs to */
  storeCredit: ZonosStoreCredit;
  /** The type of transaction */
  type: ZonosStoreCreditTransactionType;
};

export type ZonosStoreCreditTransactionConnection = {
  __typename?: 'StoreCreditTransactionConnection';
  /** A list of edges. */
  edges: Array<ZonosStoreCreditTransactionEdge>;
  /** Pagination information about the connection. */
  pageInfo: ZonosPageInfo;
  /** The total number of transactions in the connection */
  totalCount: Maybe<Scalars['Int']>;
};

export type ZonosStoreCreditTransactionEdge = {
  __typename?: 'StoreCreditTransactionEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Maybe<Scalars['String']>;
  /** The transaction at this edge. */
  node: Maybe<ZonosStoreCreditTransaction>;
};

export type ZonosStoreCreditTransactionFilter = {
  /** Filter by checkout session ID */
  checkoutSessionId?: InputMaybe<Scalars['ID']>;
  /** Filter transactions created on or before this date */
  createdAtEnd?: InputMaybe<Scalars['DateTime']>;
  /** Filter transactions created on or after this date */
  createdAtStart?: InputMaybe<Scalars['DateTime']>;
  /** Filter by store credit ID(s) */
  storeCreditIds?: InputMaybe<Array<Scalars['ID']>>;
  /** Filter by transaction type */
  type?: InputMaybe<ZonosStoreCreditTransactionType>;
};

export type ZonosStoreCreditTransactionType =
  /** Credit was added to the account */
  | 'CREDIT'
  /** Credit was used/removed from the account */
  | 'DEBIT';

export type ZonosStoreFeeRule = {
  __typename?: 'StoreFeeRule';
  /** The carrier associated with the StoreFeeRule */
  carrierId: Maybe<Scalars['Int']>;
  /** When this StoreFeeRule was created. */
  createdAt: Scalars['DateTime'];
  /** Who created the StoreFeeRule.. */
  createdBy: Maybe<Scalars['ID']>;
  /** When this StoreFeeRule was deleted. */
  deletedAt: Maybe<Scalars['DateTime']>;
  /** Who deleted the StoreFeeRule.. */
  deletedBy: Maybe<Scalars['ID']>;
  /** The detail category ID to which the StoreFeeRule belongs. */
  detailCategoryId: Maybe<Scalars['String']>;
  /** Optional date the rule stops being effective. */
  endsAt: Maybe<Scalars['DateTime']>;
  /** The formula that implements the StoreFeeRule */
  formula: Maybe<Scalars['String']>;
  /** A unique identifier for the StoreFeeRule. */
  id: Scalars['Int'];
  /** The conditions in which the StoreFeeRule will apply */
  ifStatement: Scalars['String'];
  /** The label of the StoreFeeRule */
  label: Maybe<Scalars['String']>;
  /** The localeType of the StoreFeeRule */
  localeType: Maybe<ZonosFeeRuleLocaleType>;
  /** A note to describe the StoreFeeRule */
  note: Maybe<Scalars['String']>;
  /** The organization associated with the StoreFeeRule */
  organizationId: Scalars['String'];
  /** The processing group associated with the StoreFeeRule */
  processingGroup: Maybe<Scalars['Int']>;
  /** The service level associated with the StoreFeeRule */
  serviceLevelId: Maybe<Scalars['Int']>;
  /** The country an item ships from that implements the StoreFeeRule */
  shipFromCountry: Maybe<ZonosCountryCode>;
  /** The country an item ships to that implements the StoreFeeRule */
  shipToCountry: Maybe<ZonosCountryCode>;
  /** Optional date the rule becomes effective. */
  startsAt: Maybe<Scalars['DateTime']>;
  /** The id of the store associated with the StoreFeeRule */
  storeId: Scalars['Int'];
  /** Whether of not the StoreFeeRule is can be taxed */
  taxable: Maybe<Scalars['Boolean']>;
  /** The following step after the StoreFeeRule is applied */
  then: Scalars['String'];
  /** The type of the StoreFeeRule */
  type: Maybe<ZonosStoreFeeRuleType>;
  /** When this StoreFeeRule was most recently updated */
  updatedAt: Scalars['DateTime'];
};

/** Detail categories for Store Fee Rule creation. */
export type ZonosStoreFeeRuleDetailCategoryIdCreateType =
  | 'ADDITIONAL_TARIFF_LINES'
  | 'ADVANCEMENT'
  | 'ADVANCEMENT_MIN'
  | 'ADVANCEMENT_PERCENT'
  | 'API_CROSS_DOCKING_BUFFER'
  | 'API_GUARANTEE_ORDER'
  | 'API_GUARANTEE_ORDER_LEGACY'
  | 'API_GUARANTEE_PERCENT'
  | 'API_GUARANTEE_PERCENT_LEGACY'
  | 'API_REVENUE_SHARE_BUFFER'
  | 'BIGCOMMERCE_CROSS_DOCKING_BUFFER'
  | 'BIGCOMMERCE_GUARANTEE_ORDER'
  | 'BIGCOMMERCE_GUARANTEE_PERCENT'
  | 'BREXIT_FEE'
  | 'BROKERAGE_FEE'
  | 'CHECKOUT_GUARANTEE_ORDER'
  | 'CHECKOUT_GUARANTEE_ORDER_LEGACY'
  | 'CHECKOUT_GUARANTEE_PERCENT'
  | 'COD'
  | 'COLLECT_ORDER'
  | 'COLLECT_PERCENT'
  | 'COUNTRY'
  | 'CROSS_DOCK_BUFFER'
  | 'CURRENCY_CONVERSION_FEE'
  | 'CUSTOM'
  | 'DDP_SERVICE_FEE'
  | 'DUTY_BUFFER'
  | 'DUTY_TAX_BUFFER'
  | 'ETSY_GUARANTEE_ORDER'
  | 'ETSY_GUARANTEE_PERCENT'
  | 'ETSY_MERCHANT_FEE_PERCENT'
  | 'FRANCE_CUSTOMS_TAX'
  | 'GUARANTEE_ORDER_DUTY_EXEMPT'
  | 'LANDED_COST_GUARANTEE_BUFFER'
  | 'LANDED_COST_GUARANTEE_SUBSIDY'
  | 'MAGENTO_CROSS_DOCKING_BUFFER'
  | 'MAGENTO_GUARANTEE_ORDER'
  | 'MAGENTO_GUARANTEE_PERCENT'
  | 'PGA_AMS_PROCESSING'
  | 'PGA_APHIS'
  | 'PGA_BTA_PRIOR_NOTICE'
  | 'PGA_DISCLAIM'
  | 'PGA_DOT'
  | 'PGA_FDA_CLEARANCE'
  | 'SHIPPING_FEE'
  | 'SHOPIFY_CROSS_DOCKING_BUFFER'
  | 'SHOPIFY_DUTY_TAX_BUFFER'
  | 'SHOPIFY_DUTY_TAX_FEE_BUFFER'
  | 'SHOPIFY_GUARANTEE_ORDER'
  | 'SHOPIFY_GUARANTEE_ORDER_LEGACY'
  | 'SHOPIFY_GUARANTEE_PERCENT'
  | 'SHOPIFY_GUARANTEE_PERCENT_GUARANTEE_ORDER'
  | 'TAX_BUFFER'
  | 'TRANSACTION_ORDER'
  | 'ZONOS_EXPORT_PROCESSING'
  | 'ZONOS_EXPORT_PROCESSING_OFFSET';

export type ZonosStoreFeeRuleFilter = {
  /** Return `StoreFeeRule` resources by the associated organization Id. */
  organizationId?: InputMaybe<Scalars['String']>;
};

/** Classifies how the fee rule should be treated during processing and enforcement. */
export type ZonosStoreFeeRuleType =
  | 'CUSTOM'
  | 'NEGOTIABLE'
  | 'NON_NEGOTIABLE'
  | 'REQUIRED_CUSTOM'
  | 'REQUIRED_NEGOTIABLE'
  | 'REQUIRED_NON_NEGOTIABLE'
  | 'TRANSITORY'
  | 'TRANSITORY_CUSTOM';

export type ZonosStringRange = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
};

/** An implementation of `ReconciliationCharge` that represents a charge submitted by Zonos to Stripe */
export type ZonosStripeSubscriptionCharge = ZonosReconciliationCharge & {
  __typename?: 'StripeSubscriptionCharge';
  /** The sum of the transaction fees for this `LegacyOrderTransaction` */
  amount: Scalars['Decimal'];
  /** Date and time of when this `StripeSubscriptionCharge` object was created */
  createdAt: Scalars['DateTime'];
  /** The currency the amount is displayed in */
  currencyCode: ZonosCurrencyCode;
  /** A unique identifier for this `StripeSubscriptionCharge` */
  id: Scalars['ID'];
  /** An optional note about this `StripeSubscriptionCharge` */
  note: Maybe<Scalars['String']>;
  /** The Stripe charge that Zonos used to bill the merchant */
  zonosStripeCharge: ZonosZonosStripeCharge;
};

export type ZonosSubscriptionInterval =
  | 'DAILY'
  | 'MONTHLY'
  | 'WEEKLY'
  | 'YEARLY';

/** Represents a tax amount on a `LandedCost` quote */
export type ZonosTax = {
  __typename?: 'Tax';
  /** `Tax` amount in the currency specified by the `Root` object which owns this `LandedCost` */
  amount: Scalars['Decimal'];
  /** Details associated with the `LandedCostTax` */
  amountDetails: Maybe<Array<ZonosLandedCostTaxAmountDetail>>;
  /** Currency the `Tax` amount is in. @deprecated use currencyCode instead. */
  currency: ZonosCurrencyCode;
  /** Currency the `Tax` amount is in. */
  currencyCode: ZonosCurrencyCode;
  /** Human-readable description of this `Tax`. */
  description: Maybe<Scalars['String']>;
  /** Exchange rate information for foreign currency `Tax` amounts */
  exchangeRate: Maybe<ZonosExchangeRate>;
  /** Human readable formula indicating how this tax was calculated */
  formula: Scalars['String'];
  /** `Item` that this tax amount applies to */
  item: Maybe<ZonosItem>;
  /** Additional note for this `Tax`. */
  note: Maybe<Scalars['String']>;
  /** `Party` responsible for receiving payment on this tax amount */
  payee: Maybe<ZonosParty>;
  /** `Party` responsible for rendering payment on this tax amount */
  payor: Maybe<ZonosParty>;
  /** Type of `Tax`. Use DUTY_ITEM for tax on item duty, DUTY_SHIPPING for tax on shipping duty. */
  type: ZonosLandedCostFeeType;
};

export type ZonosTaxCalculationType =
  | 'CIF'
  | 'CUSTOM'
  | 'FOB';

export type ZonosTaxId = {
  __typename?: 'TaxId';
  administrativeAreaCode: Maybe<Scalars['String']>;
  allowLowValueOrders: Maybe<Scalars['Boolean']>;
  countryCode: ZonosCountryCode;
  createdAt: Maybe<Scalars['DateTime']>;
  createdBy: Maybe<Scalars['ID']>;
  effectiveAt: Maybe<Scalars['DateTime']>;
  expiresAt: Maybe<Scalars['DateTime']>;
  id: Scalars['ID'];
  method: ZonosTaxMethodType;
  mode: Maybe<ZonosMode>;
  organization: Maybe<Scalars['ID']>;
  sendEmails: Maybe<Scalars['Boolean']>;
  taxIdNumber: Scalars['String'];
  type: ZonosTaxIdType;
  updatedAt: Maybe<Scalars['DateTime']>;
  updatedBy: Maybe<Scalars['ID']>;
};

export type ZonosTaxIdFilterInput = {
  administrativeAreaCodes?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  countryCodes?: InputMaybe<Array<InputMaybe<ZonosCountryCode>>>;
  taxIdType?: InputMaybe<Array<InputMaybe<ZonosTaxIdType>>>;
};

export type ZonosTaxIdMasterDataSourceInput = {
  taxIds?: InputMaybe<Array<Scalars['ID']>>;
};

export type ZonosTaxIdType =
  /** Brazil CNPJ/CPF Federal Tax */
  | 'CNP'
  /** Argentina CUIL / CUIT Unique Labor Identification Code */
  | 'CUIL'
  /** Mexico Clave Única de Registro de Población */
  | 'CURP'
  /** Deferment account duties only */
  | 'DAN'
  /** Peru National Identity Document */
  | 'DNI'
  /** Deferment account duties, taxes, and fees only */
  | 'DTF'
  /** Data Universal Numbering System */
  | 'DUN'
  /** Employer Identification Number */
  | 'EIN'
  /** Economic Operator registration ID */
  | 'EORI'
  /** Federal Tax ID */
  | 'FED'
  /** France Custom VAT on low value quotes */
  | 'FTPC'
  /** Free Trade Zone ID */
  | 'FTZ'
  /** VAT registration */
  | 'GST'
  /** GB VAT (foreign) registration */
  | 'HMRC'
  /** Import One Stop Shop */
  | 'IOSS'
  /** Oversees Registered Supplier */
  | 'LVG'
  /** Indonesia Tax Identification Number */
  | 'NPWP'
  /** AUSid GST registration */
  | 'OSR'
  /** India Permanent Account Number */
  | 'PAN'
  /** South Korea Personal Customs Clearance Code */
  | 'PCC'
  /** Deprecated */
  | 'PCCC'
  /** Mexico Taxpayer ID */
  | 'RFC'
  /** Chile National Unique Roll */
  | 'RUN'
  /** Social Security Number */
  | 'SSN'
  /** State Tax ID */
  | 'STA'
  /** Deferment account tax only */
  | 'TAN'
  /** US Tax Identification Number */
  | 'TIN'
  /** South Africa Tax Reference Number */
  | 'TRN'
  /** VAT on E-Commerce */
  | 'VOEC';

export type ZonosTaxInput = {
  /** `Tax` price amount. */
  amount: Scalars['Decimal'];
  /** Currency the `Tax` amount is in. @deprecated use currencyCode instead. */
  currency?: InputMaybe<ZonosCurrencyCode>;
  /** Currency the `Tax` amount is in. */
  currencyCode?: InputMaybe<ZonosCurrencyCode>;
  /** Human-readable description of this `Tax`. */
  description?: InputMaybe<Scalars['String']>;
  /** Exchange rate information for foreign currency `Tax` amounts. */
  exchangeRate?: InputMaybe<Scalars['ID']>;
  /** Human readable formula indicating how this `Tax` was calculated. */
  formula: Scalars['String'];
  /** `Item` this `Tax` amount applies to. */
  item?: InputMaybe<Scalars['ID']>;
  /** Additional note for this `Tax`. */
  note?: InputMaybe<Scalars['String']>;
  /** `Party` responsible for receiving payment on this `Tax` amount. */
  payee?: InputMaybe<Scalars['ID']>;
  /** `Party` responsible for rendering payment on this `Tax` amount. */
  payor?: InputMaybe<Scalars['ID']>;
  /** Type of `Tax`. */
  type?: InputMaybe<ZonosLandedCostFeeType>;
};

export type ZonosTaxMethodType =
  /** generic tax number not used for our landedCost calculation */
  | 'BUSINESS_NUMBER'
  | 'CONSIGNMENT'
  | 'DEFAULT'
  | 'DOMESTIC'
  | 'DOMESTIC_LCG'
  | 'SELLER_OF_RECORD';

export type ZonosTermEndAction =
  /** Charge the customer at the end of the term */
  | 'CHARGE'
  /** Send an email to the customer at the end of the term */
  | 'EMAIL';

/** A party accredited to perform regulatory compliance testing. */
export type ZonosTestingParty = {
  __typename?: 'TestingParty';
  /** Party email address. */
  email: Maybe<Scalars['String']>;
  /** Party ID. */
  id: Scalars['ID'];
  /** Party name. */
  name: Scalars['String'];
  /** Type of testing party. */
  partyType: ZonosTestingPartyType;
  /** Party phone number. */
  phone: Maybe<Scalars['String']>;
  /** Party website URL. */
  website: Maybe<Scalars['String']>;
};

export type ZonosTestingPartyType =
  /** Testing laboratory. */
  | 'LAB';

/** A test required for regulatory compliance. */
export type ZonosTestingRequirement = {
  __typename?: 'TestingRequirement';
  /** Description of what the test covers. */
  description: Maybe<Scalars['String']>;
  /** Test name/identifier (e.g. "CPSC-CH-E1003-09.1", "ASTM F963 8.3"). */
  name: Scalars['String'];
  /** Parties accredited to perform this test. Ordered by number of accredited citations. */
  parties: Maybe<Array<ZonosTestingParty>>;
};


/** A test required for regulatory compliance. */
export type ZonosTestingRequirementPartiesArgs = {
  first?: InputMaybe<Scalars['Int']>;
};

export type ZonosThirdPartyAccountType =
  | 'DHL'
  | 'FEDEX'
  | 'UPS'
  | 'USPS';

export type ZonosTracking = ZonosNode & {
  __typename?: 'Tracking';
  /** The carrier code for this `Tracking` */
  carrierCode: Maybe<Scalars['String']>;
  /** The `Tracking` details from the carrier. */
  details: Maybe<ZonosTrackingDetails>;
  /** A unique identifier for this Tracking */
  id: Scalars['ID'];
  /**
   * The `Label` related to this Tracking
   * @deprecated Use label field on ShipmentCarton for label details
   */
  label: Maybe<ZonosLabel>;
  /** The tracking number related to this Tracking */
  number: Scalars['String'];
  /** The type of tracking number. Either SHIPMENT or PACKAGE */
  type: ZonosTrackingType;
  /** The tracking url for this Tracking */
  url: Scalars['String'];
};

/** A structured postal address. */
export type ZonosTrackingAddress = {
  __typename?: 'TrackingAddress';
  /** The state, province, or administrative area code. */
  administrativeAreaCode: Maybe<Scalars['String']>;
  /** The country code (ISO 2-letter). */
  countryCode: Maybe<Scalars['String']>;
  /** The full country name. */
  countryName: Maybe<Scalars['String']>;
  /** Street address line 1. */
  line1: Maybe<Scalars['String']>;
  /** Street address line 2. */
  line2: Maybe<Scalars['String']>;
  /** Street address line 3. */
  line3: Maybe<Scalars['String']>;
  /** The city or locality name. */
  locality: Maybe<Scalars['String']>;
  /** The postal/ZIP code. */
  postalCode: Maybe<Scalars['String']>;
  /** Whether this is a residential address. */
  residential: Maybe<Scalars['Boolean']>;
};

/** Contact and address information for a shipper or recipient. */
export type ZonosTrackingContact = {
  __typename?: 'TrackingContact';
  /** The structured address. */
  address: Maybe<ZonosTrackingAddress>;
  /** The company name. */
  companyName: Maybe<Scalars['String']>;
  /** The email address. */
  email: Maybe<Scalars['String']>;
  /** The contact name. */
  name: Maybe<Scalars['String']>;
  /** The phone number. */
  phoneNumber: Maybe<Scalars['String']>;
};

export type ZonosTrackingDetailFilter = {
  /** The tracking API to fetch the details from. If not provided, the carrier code on the tracking number will be used. */
  carrierCode?: InputMaybe<Scalars['String']>;
  /** The ID of the `Shipment` to fetch details for all tracking numbers associated with it. */
  shipmentId?: InputMaybe<Scalars['ID']>;
  /** The tracking number to fetch details for. */
  trackingNumber?: InputMaybe<Scalars['String']>;
};

export type ZonosTrackingDetails = {
  __typename?: 'TrackingDetails';
  /** The current status of the tracking number. */
  currentStatus: Maybe<ZonosTrackingStatus>;
  /** The estimated delivery date of the tracking number */
  estimatedDeliveryDate: Maybe<Scalars['DateTime']>;
  /** The tracking number related to this `Tracking`. */
  number: Scalars['String'];
  /** Proof of delivery details if available. */
  proofOfDelivery: Maybe<ZonosProofOfDelivery>;
  /** The recipient/destination contact and address information. */
  recipient: Maybe<ZonosTrackingContact>;
  /** Status indicating if the shipment is eligible for a refund */
  refundStatus: ZonosShipmentRefundStatus;
  /** The shipper/origin contact and address information. */
  shipper: Maybe<ZonosTrackingContact>;
  /** The status history of the tracking number. */
  statusHistory: Array<ZonosTrackingStatus>;
};

export type ZonosTrackingEventTypeCode =
  | 'CANCELED'
  | 'IN_TRANSIT'
  | 'OUT_FOR_DELIVERY'
  | 'PICKED_UP'
  | 'PRE_TRANSIT';

export type ZonosTrackingInput = {
  /** The tracking number */
  number?: InputMaybe<Scalars['String']>;
  /** The type of tracking number. Either SHIPMENT or PACKAGE */
  type: ZonosTrackingType;
};

export type ZonosTrackingStatus = {
  __typename?: 'TrackingStatus';
  /** Time the status was recorded by the carrier. */
  createdAt: Maybe<Scalars['DateTime']>;
  /** Description of the status or event. */
  description: Maybe<Scalars['String']>;
  /** Location where the status event occurred. */
  location: Maybe<Scalars['String']>;
  /** The status type of the tracking number. */
  status: ZonosTrackingStatusType;
};

export type ZonosTrackingStatusType =
  /** The shipment carton was cancelled or voided. */
  | 'CANCELLED'
  /** The shipment carton has been created (label printed) but not yet handed off to the carrier. */
  | 'CREATED'
  /** The shipment carton has been delivered to the recipient. */
  | 'DELIVERED'
  /** A catch-all code for shipment exceptions (failed delivery attempts, customs holds, address changes, or other issues). */
  | 'EXCEPTION'
  /** The shipment carton is currently in-transit within the carrier network. */
  | 'IN_TRANSIT'
  /** The returned status from the carrier does not map to any known code. */
  | 'UNKNOWN';

export type ZonosTrackingType =
  | 'PACKAGE'
  | 'SHIPMENT';

export type ZonosTransactionFee = {
  __typename?: 'TransactionFee';
  /** The total amount of the transaction */
  amount: Scalars['Decimal'];
  /** The currency the amount is displayed in */
  currencyCode: ZonosCurrencyCode;
  /** The type of the `TransactionFee` */
  type: ZonosTransactionFeeType;
};

export type ZonosTransactionFeeType =
  /** `TransactionFee` type representing duty and tax fees */
  | 'DUTY_TAX'
  /** `TransactionFee` type representing Zonos' LCG percentage fee */
  | 'LCG_PERCENTAGE'
  /** `TransactionFee` type representing Zonos' LCG per shipment */
  | 'LCG_PER_SHIPMENT'
  /** `TransactionFee` type representing merchant fees */
  | 'MERCHANT'
  /** `TransactionFee` type representing shipping fees */
  | 'SHIPPING';

export type ZonosTransitTime = {
  __typename?: 'TransitTime';
  /** ISO-8601 timestamp of when the delivery will be delivered. Only the time portion will be used. */
  guaranteedDelivery: Maybe<Scalars['DateTime']>;
  /** The maximum number of transit days. */
  max: Maybe<Scalars['Int']>;
  /** The minimum number of transit days. */
  min: Maybe<Scalars['Int']>;
  /** Indicates what type of value the min and max fields represent. (default: days) */
  type: Maybe<ZonosTransitTypeCode>;
};

export type ZonosTransitTypeCode =
  | 'BUSINESS_DAYS'
  | 'DAYS'
  | 'WEEKS';

/** Enumeration for the different transportation modes */
export type ZonosTransportationMode =
  | 'AIR'
  | 'INLAND_WATERWAY'
  | 'OTHER'
  | 'RAIL'
  | 'ROAD'
  | 'SEA';

/** Under-valuation risk aggregated across items. */
export type ZonosUnderValuationRisk = {
  __typename?: 'UnderValuationRisk';
  /** Maximum probability of under-valuation observed across items with a declared value. Null if no item had a declared value. */
  maxProbability: Maybe<Scalars['Decimal']>;
};

export type ZonosUnreconciledShipmentCreateInput = {
  /** The account number of the `UnreconciledShipment` */
  accountNumber?: InputMaybe<Scalars['String']>;
  /** The amount assessed by the carrier for the `UnreconciledShipment` */
  amount: Scalars['Decimal'];
  /** The carrier code of the `UnreconciledShipment` */
  carrierCode: Scalars['String'];
  /** The destination party for the `UnreconciledShipment` */
  destinationParty?: InputMaybe<ZonosUnreconciledShipmentPartyInput>;
  /** The ID of the `UnreconciledShipment` */
  id: Scalars['ID'];
  /** The ID of the organization of the `UnreconciledShipment` */
  organizationId: Scalars['ID'];
  /** The origin party for the `UnreconciledShipment` */
  originParty?: InputMaybe<ZonosUnreconciledShipmentPartyInput>;
  /** The associated reference numbers of the `UnreconciledShipment`. Used to identify the shipment */
  referenceNumbers: Array<Scalars['String']>;
  /** The service level of the `UnreconciledShipment` */
  serviceLevel?: InputMaybe<Scalars['String']>;
  /** The shipment date of the `UnreconciledShipment` */
  shipmentDate?: InputMaybe<Scalars['DateTime']>;
  /** The tracking number of the `UnreconciledShipment` */
  trackingNumber: Scalars['String'];
};

export type ZonosUnreconciledShipmentPartyInput = {
  /** The ID of the location object associated with the `UnreconciledShipment` */
  location?: InputMaybe<Scalars['ID']>;
  /** The ID of the person object associated with the `UnreconciledShipment` */
  person?: InputMaybe<Scalars['ID']>;
};

export type ZonosUnreconciledShipmentReportCreateInput = {
  /** The `UnreconciledShipment` objects to include in the report */
  unreconciledShipments: Array<ZonosUnreconciledShipmentCreateInput>;
};

export type ZonosUnreconciledShipmentStatus =
  /** The `UnreconciledShipment` is approved to get charged */
  | 'CHARGE_APPROVED_MERCHANT'
  /** The `UnreconciledShipment` is disputed */
  | 'DISPUTE_MERCHANT';

export type ZonosUnreconciledShipmentStatusUpdateInput = {
  /** The ID of the `UnreconciledShipment` to update status for */
  id: Scalars['ID'];
  /** Reason for updating the status of the `UnreconciledShipment` */
  note: Scalars['String'];
  /** The status to update the `UnreconciledShipment` to */
  status: ZonosUnreconciledShipmentStatus;
};

export type ZonosUnreconciledShipmentStatusesUpdateInput = {
  /** The IDs of the `UnreconciledShipment`s to update status for */
  ids: Array<Scalars['ID']>;
  /** Reason for updating the status of the `UnreconciledShipment`s */
  note: Scalars['String'];
  /** The status to update the `UnreconciledShipment`s to */
  status: ZonosUnreconciledShipmentStatus;
};

export type ZonosUnreconciledShipmentsRemoveInput = {
  /** The `UnreconciledShipment` IDs to remove from the report */
  unreconciledShipmentIds: Array<Scalars['ID']>;
};

export type ZonosUpdateClassifySettingInput = {
  boostedProductCategories: Array<InputMaybe<Scalars['String']>>;
  id: Scalars['String'];
  minimumConfidenceThreshold: Scalars['Decimal'];
};

export type ZonosUpdateDashboardSettingsInput = {
  defaultDisplayCurrency?: InputMaybe<Scalars['String']>;
  defaultDisplayLanguage?: InputMaybe<Scalars['String']>;
  defaultDisplayLocal?: InputMaybe<Scalars['String']>;
  defaultDisplayTimezone?: InputMaybe<Scalars['String']>;
  defaultUnit?: InputMaybe<ZonosDashboardUnit>;
  displayName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  multiFactorAuth?: InputMaybe<ZonosMultiFactorAuthSetting>;
};

export type ZonosUpdatePaymentsSettingsInput = {
  /** The day of the week payouts occur. */
  dayOfWeek?: InputMaybe<ZonosDay>;
  /** Whether orders should be considered "end of day" for payout. */
  endOfDayBehavior?: InputMaybe<ZonosEndOfDayBehavior>;
  /** How often payouts occur, in days. */
  frequencyDays?: InputMaybe<Scalars['Int']>;
  /** Specifies which system to use for billing Lcg Fees */
  lcgBillingMethod?: InputMaybe<ZonosLcgBillingMethod>;
  /** The minimum balance required to trigger a payout, in USD. */
  minimum?: InputMaybe<Scalars['Int']>;
  /** Specifies which system to use for billing order complete fees */
  orderCompleteBillingMethod?: InputMaybe<ZonosOrderCompleteBillingMethod>;
  /** Specifies which system to use for billing order transaction fees */
  orderTransactionBillingMethod?: InputMaybe<ZonosOrderTransactionBillingMethod>;
};

export type ZonosUpdateShippingSettingsInput = {
  /** A rough estimate of item weight when calculating shipping, if no per-item weights are provided. */
  defaultWeightMultiplier?: InputMaybe<Scalars['Decimal']>;
  /** ID of the `Preferred Packaging Option` for this `Organization`. */
  preferredPackagingOptionId?: InputMaybe<Scalars['ID']>;
};

export type ZonosUploadErrors = {
  __typename?: 'UploadErrors';
  lineNumber: Maybe<Scalars['Int']>;
  message: Maybe<Scalars['String']>;
  productId: Maybe<Scalars['String']>;
  sku: Maybe<Scalars['String']>;
};

export type ZonosUsage = {
  __typename?: 'Usage';
  /** The number of usages allowed for the organization. */
  allotment: Scalars['Int'];
  /** The date and time the usage event was archived. */
  archivedAt: Maybe<Scalars['DateTime']>;
  /** The organization that the usage event is associated with. */
  billingCompany: Scalars['ID'];
  /** The usage count */
  count: Scalars['Int'];
  /** When the usage was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the usage event. */
  createdBy: Scalars['ID'];
  /** Unique identifier for the usage event. */
  id: Scalars['ID'];
  /** The subscription interval for the usage event. */
  interval: ZonosSubscriptionInterval;
  /** The api source of the usage event. */
  type: ZonosUsageType;
  /** When the usage was updated */
  updatedAt: Scalars['DateTime'];
  /** The user who updated the usage event. */
  updatedBy: Scalars['ID'];
  /** The date and time the usage event is valid until. */
  validUntil: Scalars['DateTime'];
};

export type ZonosUsageConnection = {
  __typename?: 'UsageConnection';
  edges: Array<ZonosUsageEdge>;
  pageInfo: Maybe<ZonosPageInfo>;
  totalCount: Scalars['Int'];
};

export type ZonosUsageEdge = {
  __typename?: 'UsageEdge';
  cursor: Scalars['String'];
  node: ZonosUsage;
};

export type ZonosUsageFilter = {
  allotment?: InputMaybe<Scalars['Int']>;
  billingCompany?: InputMaybe<Scalars['ID']>;
};

export type ZonosUsageType =
  | 'CARTON'
  | 'CATALOG'
  | 'CLASSIFY'
  | 'LABEL'
  | 'LANDED_COST'
  | 'ORDER'
  | 'RESTRICT'
  | 'RULE'
  | 'SHIPMENT'
  | 'SHIPMENT_RATING'
  | 'USER';

export type ZonosValidatedItem = {
  __typename?: 'ValidatedItem';
  /** The input item data provided by the user */
  content: ZonosValidatedItemContent;
  /** Country of origin validation result (if declaredCountryOfOrigin provided) */
  countryOfOriginValidation: Maybe<ZonosCountryOfOriginValidation>;
  /** HS code validation result via Classification (if declaredHsCode provided) */
  hsCodeValidation: Maybe<ZonosClassification>;
  /** Unique identifier */
  id: Scalars['ID'];
  /** Pre-signed URL to the validated item image (valid for 15 minutes) */
  imageUrl: Maybe<Scalars['String']>;
  /** AI-extracted item matched to this input */
  matchedExtraction: Maybe<ZonosMatchedExtraction>;
  /** Value validation result (if declaredValue provided) */
  valueValidation: Maybe<ZonosValueValidation>;
};

export type ZonosValidatedItemContent = {
  __typename?: 'ValidatedItemContent';
  categories: Maybe<Array<Scalars['String']>>;
  declaredCountryOfOrigin: Maybe<ZonosCountryCode>;
  declaredHsCode: Maybe<Scalars['String']>;
  declaredValue: Maybe<Scalars['Decimal']>;
  description: Scalars['String'];
  materials: Maybe<Scalars['String']>;
  name: Scalars['String'];
  quantity: Scalars['Int'];
};

export type ZonosValueEstimateInput = {
  /** The brand of the item. */
  brand?: InputMaybe<Scalars['String']>;
  /** The category hierarchy associated with an item for value estimation. */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** The currency of the desired value estimation (results will be returned in this currency). */
  currency: ZonosCurrencyCode;
  /** This is the full description associated with an item. */
  description?: InputMaybe<Scalars['String']>;
  /** The location of an image related to an item. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** The material composition of an item for value estimation. */
  material?: InputMaybe<Scalars['String']>;
  /** The product name or short description. */
  name: Scalars['String'];
};

/** A `ValueEstimateRange` resource represents the confidence band of a product's value estimate. */
export type ZonosValueEstimateRange = {
  __typename?: 'ValueEstimateRange';
  /** The upper bound of the the confidence band. */
  high: Scalars['Decimal'];
  /** The lower bound of the the confidence band. */
  low: Scalars['Decimal'];
  /** The confidence band width, typically set to 0.95 (2.5-97.5% confidence bounds). */
  width: Scalars['Decimal'];
};

/** A `ValueEstimation` resource represents the inferred estimation of a product's value. */
export type ZonosValueEstimation = {
  __typename?: 'ValueEstimation';
  /** The brand of the item. */
  brand: Scalars['String'];
  /** The category hierarchy associated with an item for value estimation. */
  categories: Array<Scalars['String']>;
  /** When this `ValueEstimation` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `ValueEstimation`. */
  createdBy: Scalars['ID'];
  /** The currency of the estimated value (matches input currency). */
  currency: ZonosCurrencyCode;
  /** This is the full description associated with an item. */
  description: Scalars['String'];
  /** A unique identifier for the `ValueEstimation`. */
  id: Scalars['ID'];
  /** The location of an image related to an item. */
  imageUrl: Scalars['String'];
  /** The material composition of an item for value estimation. */
  material: Scalars['String'];
  /** The model ID used to generate the value estimation. */
  modelId: Scalars['String'];
  /** The product name or short description. */
  name: Scalars['String'];
  /** The `Organization` associated with the CatalogItem. */
  organization: Scalars['ID'];
  /** When this `ValueEstimation` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `ValueEstimation`. */
  updatedBy: Scalars['ID'];
  /** The estimated value of the product (in the requested currency). */
  value: Scalars['Decimal'];
  /** The confidence bands of the value estimate. */
  valueEstimateRange: ZonosValueEstimateRange;
};

/** Cursor-based pagination for `ValueEstimation`. */
export type ZonosValueEstimationConnection = {
  __typename?: 'ValueEstimationConnection';
  /** A list of `ValueEstimationEdge`. */
  edges: Array<ZonosValueEstimationEdge>;
  /** Pagination information about the connection. */
  pageInfo: ZonosPageInfo;
  /** The total number of `ValueEstimation` items. */
  totalCount: Scalars['Int'];
};

/** Cursor-based pagination for `ValueEstimation`. */
export type ZonosValueEstimationEdge = {
  __typename?: 'ValueEstimationEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Scalars['String'];
  /** The object located at this `ValueEstimation`. */
  node: ZonosValueEstimation;
};

export type ZonosValueValidateInput = {
  /** The brand of the item. */
  brand?: InputMaybe<Scalars['String']>;
  /** The category hierarchy associated with an item for value validation. */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** The currency of the declared value (will be converted to USD internally for model processing). */
  currency: ZonosCurrencyCode;
  /** This is the full description associated with an item. */
  description?: InputMaybe<Scalars['String']>;
  /** The location of an image related to an item. */
  imageUrl?: InputMaybe<Scalars['String']>;
  /** The material composition of an item for value validation. */
  material?: InputMaybe<Scalars['String']>;
  /** The product name or short description. */
  name: Scalars['String'];
  /** The declared value of the item (in the currency specified above). */
  value: Scalars['Decimal'];
};

/** A `ValueValidation` resource represents the inferred validation of a product's declared value. */
export type ZonosValueValidation = {
  __typename?: 'ValueValidation';
  /** The brand of the item. */
  brand: Scalars['String'];
  /** The category hierarchy associated with an item for value validation. */
  categories: Array<Scalars['String']>;
  /** When this `ValueValidation` was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the `ValueValidation`. */
  createdBy: Scalars['ID'];
  /** The currency of the declared value (matches input currency). */
  currency: ZonosCurrencyCode;
  /** This is the full description associated with an item. */
  description: Scalars['String'];
  /** A unique identifier for the `ValueValidation`. */
  id: Scalars['ID'];
  /** The location of an image related to an item. */
  imageUrl: Scalars['String'];
  /** The material composition of an item for value validation. */
  material: Scalars['String'];
  /** The model ID used to generate the value validation. */
  modelId: Scalars['String'];
  /** The product name or short description. */
  name: Scalars['String'];
  /** The `Organization` associated with the CatalogItem. */
  organization: Scalars['ID'];
  /** The likelihood of undervaluation. */
  probabilityOfUnderValuation: Scalars['Decimal'];
  /** When this `ValueValidation` was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the `ValueValidation`. */
  updatedBy: Scalars['ID'];
  /** The declared value of the item (in the specified currency). */
  value: Scalars['Decimal'];
  /** The confidence bands of the value estimate. */
  valueEstimateRange: ZonosValueEstimateRange;
};

/** Cursor-based pagination for `ValueValidation`. */
export type ZonosValueValidationConnection = {
  __typename?: 'ValueValidationConnection';
  /** A list of `ValueValidationEdge`. */
  edges: Array<ZonosValueValidationEdge>;
  /** Pagination information about the connection. */
  pageInfo: ZonosPageInfo;
  /** The total number of `ValueValidation` items. */
  totalCount: Scalars['Int'];
};

/** Cursor-based pagination for `ValueValidation`. */
export type ZonosValueValidationEdge = {
  __typename?: 'ValueValidationEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Scalars['String'];
  /** The object located at this `ValueValidation`. */
  node: ZonosValueValidation;
};

export type ZonosVendorAddressInput = {
  /** `AccountAddress` state */
  administrativeArea?: InputMaybe<Scalars['String']>;
  /** `AccountAddress` country */
  countryCode?: InputMaybe<ZonosCountryCode>;
  /** `AccountAddress` first line */
  line1?: InputMaybe<Scalars['String']>;
  /** `AccountAddress` second line */
  line2?: InputMaybe<Scalars['String']>;
  /** `AccountAddress` city */
  locality?: InputMaybe<Scalars['String']>;
  /** `AccountAddress` postal code */
  postalCode?: InputMaybe<Scalars['String']>;
};

export type ZonosVendorUserInput = {
  /** The email of the root user on the account. */
  email: Scalars['String'];
  /** First name of the root user on the account. */
  firstName: Scalars['String'];
  /** Last name of the root user on the account. */
  lastName: Scalars['String'];
};

export type ZonosVisibilityCode =
  | 'HIDE'
  | 'OPTIONAL'
  | 'REQUIRED';

export type ZonosVolumeUnitCode =
  | 'BARREL_PETROLEUM'
  | 'BUSHEL_UK'
  | 'BUSHEL_US_DRY'
  | 'CENTILITER_CL'
  | 'CUBIC_CENTIMETER'
  | 'CUBIC_DECIMETER'
  | 'CUBIC_FOOT'
  | 'CUBIC_INCH'
  | 'CUBIC_METER'
  | 'CUBIC_MILLIMETER'
  | 'CUBIC_YARD'
  | 'DECALITER_DAL'
  | 'DECILITER'
  | 'FLUID_DRAM_FL_DR'
  | 'FLUID_OUNCE_FL_OZ'
  | 'FLUID_OUNCE_UK'
  | 'GALLON_FLUID'
  | 'GALLON_UK'
  | 'GILL_GI'
  | 'HECTOLITER'
  | 'KILOLITER'
  | 'LITER'
  | 'MICROLITER'
  | 'MILLILITER_ML'
  | 'MINIM_MIN'
  | 'PECK_US_DRY'
  | 'PINT_FLUID'
  | 'PINT_UK'
  | 'PINT_US_DRY'
  | 'QUART_FLUID'
  | 'QUART_UK'
  | 'QUART_US_DRY';

export type ZonosWcoVersion =
  | 'WCO_1997'
  | 'WCO_2002'
  | 'WCO_2007'
  | 'WCO_2012'
  | 'WCO_2017'
  | 'WCO_2022'
  | 'WCO_2027'
  | 'WCO_2032'
  | 'WCO_2037'
  | 'WCO_2042'
  | 'WCO_2047'
  | 'WCO_2052'
  | 'WCO_2057'
  | 'WCO_2062'
  | 'WCO_2067'
  | 'WCO_2072';

export type ZonosWebhook = {
  __typename?: 'Webhook';
  /** When this Webhook was created. */
  createdAt: Scalars['DateTime'];
  /** The user who created the Webhook. */
  createdBy: Scalars['ID'];
  /** The headers to be attached to the request. */
  headers: Maybe<Array<ZonosWebhookHeader>>;
  /** A unique identifier for the Webhook. */
  id: Scalars['ID'];
  /** Whether this Webhook is in live or test mode */
  mode: ZonosMode;
  /** The `Organization` associated with the Webhook. */
  organizationId: Scalars['ID'];
  /** The query that will be sent in the webhook request. */
  query: Scalars['String'];
  /** Client secret key to validate request authentication */
  secret: Scalars['String'];
  /** The status of the Webhook. */
  status: ZonosWebhookStatus;
  /** The type of Webhook. */
  type: ZonosWebhookType;
  /** When this Webhook was most recently updated. */
  updatedAt: Scalars['DateTime'];
  /** The user who most recently updated the Webhook. */
  updatedBy: Scalars['ID'];
  /** The url to send the Webhook to. */
  url: Scalars['String'];
};

/** An auto-generated type for paginating through multiple `Webhook`s. */
export type ZonosWebhookConnection = {
  __typename?: 'WebhookConnection';
  /** A list of `edges`. */
  edges: Array<ZonosWebhookEdge>;
  /** Pagination information about the connection. */
  pageInfo: ZonosPageInfo;
  /** The total count of the items in the connection. */
  totalCount: Scalars['Int'];
};

export type ZonosWebhookCreateInput = {
  /** The headers to be added to be added to the requests. */
  headers?: InputMaybe<Array<ZonosWebhookHeaderInput>>;
  /** The status of the webhook. */
  status: ZonosWebhookStatus;
  /** The type of Webhook. */
  type: ZonosWebhookType;
  /** The url to send the Webhook to. */
  url: Scalars['String'];
};

/** An auto-generated type used in pagination. */
export type ZonosWebhookEdge = {
  __typename?: 'WebhookEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Maybe<Scalars['String']>;
  /** The object located at this `Edge`. */
  node: Maybe<ZonosWebhook>;
};

export type ZonosWebhookHeader = {
  __typename?: 'WebhookHeader';
  /** The name of the header to be sent. */
  key: Scalars['String'];
};

export type ZonosWebhookHeaderInput = {
  /** The name of the header to be sent. */
  key: Scalars['String'];
  /** The value of the header to be sent. */
  value: Scalars['String'];
};

export type ZonosWebhookLog = {
  __typename?: 'WebhookLog';
  /** When this Webhook was created. */
  createdAt: Scalars['DateTime'];
  /** A unique identifier for the WebhookLog. */
  id: Scalars['ID'];
  /** Whether this WebhookLog is in live or test mode */
  mode: ZonosMode;
  /** The `Organization` associated with the Webhook. */
  organizationId: Scalars['ID'];
  /** The request body sent to the webhook url. */
  request: Scalars['String'];
  /** The http response status code. */
  responseStatus: Maybe<Scalars['Int']>;
  /** The type of webhook. */
  type: ZonosWebhookType;
  /** The url to send the webhook to. */
  url: Scalars['String'];
  /** The webhook that this log is associated with. */
  webhook: Maybe<ZonosWebhook>;
};

/** An auto-generated type for paginating through multiple `WebhookLog`s. */
export type ZonosWebhookLogConnection = {
  __typename?: 'WebhookLogConnection';
  /** A list of `edges`. */
  edges: Array<ZonosWebhookLogEdge>;
  /** Pagination information about the connection. */
  pageInfo: ZonosPageInfo;
};

/** An auto-generated type used in pagination. */
export type ZonosWebhookLogEdge = {
  __typename?: 'WebhookLogEdge';
  /** A string used to identify this object in the current pagination connection. */
  cursor: Maybe<Scalars['String']>;
  /** The object located at this `Edge`. */
  node: Maybe<ZonosWebhookLog>;
};

export type ZonosWebhookLogsFilterInput = {
  /** Filter by the webhook type. */
  type?: InputMaybe<ZonosWebhookType>;
};

export type ZonosWebhookStatus =
  | 'DISABLED'
  | 'ENABLED';

export type ZonosWebhookType =
  | 'COLLECT_EMAIL_SENT'
  | 'COLLECT_PAYMENT_FAILED'
  | 'COLLECT_PAYMENT_LINK_OPENED'
  | 'COLLECT_PAYMENT_SUCCEEDED'
  | 'INCLUSIVE_PRICE_CONFIGURATION_CHANGED'
  | 'INCLUSIVE_PRICE_CONFIGURATION_CREATED'
  | 'INCLUSIVE_PRICE_CONFIGURATION_DELETED'
  | 'INCLUSIVE_PRICE_CONFIGURATION_UPDATED'
  | 'INCLUSIVE_PRICE_SYNC_READY'
  | 'INVENTORY_CHECK'
  | 'INVENTORY_REFUND'
  | 'IP_SETTING_STATUS_CHANGED'
  /** Any change on this Enum must also be applied on webhook-client/src/main/java/com/zonos/webhookclient/wrappers/WebhookType.java */
  | 'ORDER_CANCELED'
  | 'ORDER_COMBINED'
  | 'ORDER_CREATED'
  | 'ORDER_SHIPPING'
  | 'ORDER_STATUS_CHANGED'
  | 'ORDER_UPDATED'
  | 'SHIPMENT_CANCELED'
  | 'SHIPMENT_CREATED';

export type ZonosWebhookUpdateInput = {
  /** The headers to be added to be added to the requests. */
  headers?: InputMaybe<Array<ZonosWebhookHeaderInput>>;
  /** The unique identifier for the Webhook. */
  id: Scalars['ID'];
  /** The status of the webhook. */
  status?: InputMaybe<ZonosWebhookStatus>;
  /** The type of webhook. */
  type?: InputMaybe<ZonosWebhookType>;
  /** The url to send the webhook to. */
  url?: InputMaybe<Scalars['String']>;
};

export type ZonosWebhooksFilterInput = {
  /** Filter by webhook mode (LIVE or TEST) */
  mode?: InputMaybe<ZonosMode>;
  /** Filter by the webhook status */
  status?: InputMaybe<ZonosWebhookStatus>;
  /** Filter by the webhook type. */
  type?: InputMaybe<ZonosWebhookType>;
};

export type ZonosWeightEstimateInput = {
  /** The brand of the item. */
  brand?: InputMaybe<Scalars['String']>;
  /** The category hierarchy associated with an item. */
  categories?: InputMaybe<Array<Scalars['String']>>;
  /** This is the full description associated with an item. */
  description?: InputMaybe<Scalars['String']>;
  /** The product name or short description. */
  name: Scalars['String'];
};

/** A `WeightEstimation` resource represents the inferred weight estimate of a product. */
export type ZonosWeightEstimation = {
  __typename?: 'WeightEstimation';
  /** The brand of the item. */
  brand: Scalars['String'];
  /** The category hierarchy associated with an item. */
  categories: Array<Scalars['String']>;
  /** When this `WeightEstimation` was created. */
  createdAt: Scalars['DateTime'];
  /** This is the full description associated with an item. */
  description: Scalars['String'];
  /** A unique identifier for the `WeightEstimation`. */
  id: Scalars['ID'];
  /** The median weight estimate in kilograms. */
  medianKg: Scalars['Decimal'];
  /** The model ID used to generate the weight estimation. */
  modelId: Scalars['String'];
  /** The product name or short description. */
  name: Scalars['String'];
  /** Log-normal sigma — higher values indicate more uncertainty. Flag if > 1.0. */
  sigma: Scalars['Decimal'];
  /** The 80% confidence band for the weight estimate. */
  weightRange: ZonosWeightRange;
};

/** A `WeightRange` resource represents an 80% confidence band for a weight estimate. */
export type ZonosWeightRange = {
  __typename?: 'WeightRange';
  /** The confidence percentage (80). */
  confidencePct: Scalars['Int'];
  /** The upper bound of the weight confidence band in kilograms. */
  highKg: Scalars['Decimal'];
  /** The lower bound of the weight confidence band in kilograms. */
  lowKg: Scalars['Decimal'];
};

export type ZonosWeightUnitCode =
  | 'GRAM'
  | 'KILOGRAM'
  | 'OUNCE'
  | 'POUND';

export type ZonosWeightUnitType =
  | 'DIMENSIONAL'
  | 'PHYSICAL';

export type ZonosZoneLandedCostConfiguration =
  /** The landed cost method will be DAP. */
  | 'DAP_FORCED'
  /** The landed cost method will be determined by the `LandedCostMethod` on the `ShippingProfile` used in this zone. */
  | 'SHIPPING_PROFILE';

export type ZonosZonosApp =
  | 'API'
  | 'CHECKOUT'
  | 'CLASSIFY'
  | 'DUTY_TAX'
  | 'HELLO'
  | 'RESTRICT'
  | 'SCREEN';

export type ZonosZonosAttribution =
  | 'DISABLED'
  | 'ENABLED';

/** `ZonosStripeCharge` is an object that represents what Zonos billed a merchant through Stripe for a subscription item */
export type ZonosZonosStripeCharge = {
  __typename?: 'ZonosStripeCharge';
  /** A timestamp of when this ZonosStripeCharge was created */
  createdAt: Scalars['DateTime'];
  /** The confirmation ID returned by Stripe for this ZonosStripeCharge */
  stripeConfirmationId: Scalars['String'];
  /** The Stripe subscription item ID this charge was billed to */
  stripeSubscriptionItemId: Scalars['String'];
  /** The `TransactionFee` object associated with this ZonosStripeCharge */
  transactionFee: ZonosTransactionFee;
  /** The price per unit for this ZonosStripeCharge */
  unitPrice: Scalars['Decimal'];
  /** The number of units that were billed for this ZonosStripeCharge */
  units: Scalars['Int'];
};

export type ZonosCartUpsertMutationVariables = Exact<{
  input: ZonosCartUpsertInput;
}>;


export type ZonosCartUpsertMutation = (
  { __typename?: 'Mutation' }
  & { cartUpsert: (
    { __typename?: 'Cart' }
    & Pick<ZonosCart, 'id' | 'organizationId' | 'createdAt' | 'expiresAt'>
    & { adjustments: Array<(
      { __typename?: 'CartAdjustment' }
      & Pick<ZonosCartAdjustment, 'amount' | 'currencyCode' | 'description' | 'productId' | 'sku' | 'type'>
    )>, items: Array<(
      { __typename?: 'Item' }
      & Pick<ZonosItem, 'id' | 'amount' | 'name' | 'currencyCode' | 'description' | 'imageUrl' | 'quantity' | 'sku' | 'countryOfOrigin' | 'provinceOfOrigin' | 'productId'>
      & { measurements: Maybe<Array<Maybe<(
        { __typename?: 'ItemMeasurement' }
        & Pick<ZonosItemMeasurement, 'source' | 'type' | 'unitOfMeasure' | 'value'>
      )>>>, restriction: Maybe<(
        { __typename?: 'RestrictedItem' }
        & Pick<ZonosRestrictedItem, 'reason' | 'action'>
      )>, attributes: Maybe<Array<Maybe<(
        { __typename?: 'ItemAttribute' }
        & Pick<ZonosItemAttribute, 'key' | 'value'>
      )>>>, metadata: Maybe<Array<Maybe<(
        { __typename?: 'ItemMetadata' }
        & Pick<ZonosItemMetadata, 'key' | 'value'>
      )>>> }
    )>, metadata: Array<(
      { __typename?: 'CartMetadata' }
      & Pick<ZonosCartMetadata, 'key' | 'value'>
    )> }
  ) }
);

export type ZonosCartByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type ZonosCartByIdQuery = (
  { __typename?: 'Query' }
  & { cart: Maybe<(
    { __typename?: 'Cart' }
    & Pick<ZonosCart, 'id' | 'organizationId' | 'createdAt' | 'expiresAt'>
    & { adjustments: Array<(
      { __typename?: 'CartAdjustment' }
      & Pick<ZonosCartAdjustment, 'amount' | 'currencyCode' | 'description' | 'productId' | 'sku' | 'type'>
    )>, items: Array<(
      { __typename?: 'Item' }
      & Pick<ZonosItem, 'id' | 'amount' | 'name' | 'currencyCode' | 'description' | 'imageUrl' | 'quantity' | 'sku' | 'countryOfOrigin' | 'provinceOfOrigin' | 'productId'>
      & { measurements: Maybe<Array<Maybe<(
        { __typename?: 'ItemMeasurement' }
        & Pick<ZonosItemMeasurement, 'source' | 'type' | 'unitOfMeasure' | 'value'>
      )>>>, restriction: Maybe<(
        { __typename?: 'RestrictedItem' }
        & Pick<ZonosRestrictedItem, 'reason' | 'action'>
      )>, attributes: Maybe<Array<Maybe<(
        { __typename?: 'ItemAttribute' }
        & Pick<ZonosItemAttribute, 'key' | 'value'>
      )>>>, metadata: Maybe<Array<Maybe<(
        { __typename?: 'ItemMetadata' }
        & Pick<ZonosItemMetadata, 'key' | 'value'>
      )>>> }
    )>, metadata: Array<(
      { __typename?: 'CartMetadata' }
      & Pick<ZonosCartMetadata, 'key' | 'value'>
    )> }
  )> }
);

export type ZonosCartFragmentFragment = (
  { __typename?: 'Cart' }
  & Pick<ZonosCart, 'id' | 'organizationId' | 'createdAt' | 'expiresAt'>
  & { adjustments: Array<(
    { __typename?: 'CartAdjustment' }
    & Pick<ZonosCartAdjustment, 'amount' | 'currencyCode' | 'description' | 'productId' | 'sku' | 'type'>
  )>, items: Array<(
    { __typename?: 'Item' }
    & Pick<ZonosItem, 'id' | 'amount' | 'name' | 'currencyCode' | 'description' | 'imageUrl' | 'quantity' | 'sku' | 'countryOfOrigin' | 'provinceOfOrigin' | 'productId'>
    & { measurements: Maybe<Array<Maybe<(
      { __typename?: 'ItemMeasurement' }
      & Pick<ZonosItemMeasurement, 'source' | 'type' | 'unitOfMeasure' | 'value'>
    )>>>, restriction: Maybe<(
      { __typename?: 'RestrictedItem' }
      & Pick<ZonosRestrictedItem, 'reason' | 'action'>
    )>, attributes: Maybe<Array<Maybe<(
      { __typename?: 'ItemAttribute' }
      & Pick<ZonosItemAttribute, 'key' | 'value'>
    )>>>, metadata: Maybe<Array<Maybe<(
      { __typename?: 'ItemMetadata' }
      & Pick<ZonosItemMetadata, 'key' | 'value'>
    )>>> }
  )>, metadata: Array<(
    { __typename?: 'CartMetadata' }
    & Pick<ZonosCartMetadata, 'key' | 'value'>
  )> }
);

export type ZonosCatalogItemQueryVariables = Exact<{
  id: InputMaybe<Scalars['ID']>;
  productId: InputMaybe<Scalars['String']>;
  sku: InputMaybe<Scalars['String']>;
}>;


export type ZonosCatalogItemQuery = (
  { __typename?: 'Query' }
  & { catalogItem: Maybe<(
    { __typename?: 'CatalogItem' }
    & Pick<ZonosCatalogItem, 'brand' | 'catalogItemUrl' | 'countryOfOrigin' | 'description' | 'hsCode' | 'id' | 'itemType' | 'material' | 'packingPreference' | 'productId' | 'restrictedCountries' | 'sku'>
    & { attributes: Maybe<Array<Maybe<(
      { __typename?: 'ItemAttribute' }
      & Pick<ZonosItemAttribute, 'key' | 'value'>
    )>>>, catalogItemReferences: Array<(
      { __typename?: 'CatalogItemReference' }
      & Pick<ZonosCatalogItemReference, 'priceRatio'>
      & { catalogItem: (
        { __typename?: 'CatalogItem' }
        & Pick<ZonosCatalogItem, 'brand' | 'catalogItemUrl' | 'countryOfOrigin' | 'createdAt' | 'description' | 'hsCode' | 'id' | 'itemType' | 'material' | 'productId' | 'restrictedCountries' | 'sku' | 'updatedAt'>
        & { attributes: Maybe<Array<Maybe<(
          { __typename?: 'ItemAttribute' }
          & Pick<ZonosItemAttribute, 'key' | 'value'>
        )>>>, hsCodes: Maybe<Array<Maybe<(
          { __typename?: 'CatalogItemHsCode' }
          & Pick<ZonosCatalogItemHsCode, 'hsCode'>
        )>>>, measurements: Maybe<Array<Maybe<(
          { __typename?: 'ItemMeasurement' }
          & Pick<ZonosItemMeasurement, 'source' | 'type' | 'unitOfMeasure' | 'value'>
        )>>>, metadata: Maybe<Array<Maybe<(
          { __typename?: 'ItemMetadata' }
          & Pick<ZonosItemMetadata, 'key' | 'value'>
        )>>> }
      ) }
    )>, hsCodes: Maybe<Array<Maybe<(
      { __typename?: 'CatalogItemHsCode' }
      & Pick<ZonosCatalogItemHsCode, 'hsCode'>
    )>>>, measurements: Maybe<Array<Maybe<(
      { __typename?: 'ItemMeasurement' }
      & Pick<ZonosItemMeasurement, 'source' | 'type' | 'unitOfMeasure' | 'value'>
    )>>>, metadata: Maybe<Array<Maybe<(
      { __typename?: 'ItemMetadata' }
      & Pick<ZonosItemMetadata, 'key' | 'value'>
    )>>> }
  )> }
);

export type ZonosClassificationsCalculateMutationVariables = Exact<{
  inputs: Array<ZonosClassificationCalculateInput> | ZonosClassificationCalculateInput;
}>;


export type ZonosClassificationsCalculateMutation = (
  { __typename?: 'Mutation' }
  & { classificationsCalculate: Array<(
    { __typename?: 'Classification' }
    & Pick<ZonosClassification, 'confidenceScore'>
    & { hsCode: Maybe<(
      { __typename?: 'HsCode' }
      & Pick<ZonosHsCode, 'code'>
    )> }
  )> }
);

export type ZonosFullLandedCostMutationVariables = Exact<{
  itemCreateWorkflowInput: Array<ZonosItemCreateWorkflowInput> | ZonosItemCreateWorkflowInput;
  landedCostCalculateWorkflowInput: ZonosLandedCostWorkFlowInput;
  partyCreateWorkflowInput: Array<ZonosPartyCreateWorkflowInput> | ZonosPartyCreateWorkflowInput;
}>;


export type ZonosFullLandedCostMutation = (
  { __typename?: 'Mutation' }
  & { partyCreateWorkflow: Array<(
    { __typename?: 'Party' }
    & Pick<ZonosParty, 'id' | 'type'>
    & { location: Maybe<(
      { __typename?: 'Location' }
      & Pick<ZonosLocation, 'administrativeArea' | 'administrativeAreaCode' | 'countryCode' | 'line1' | 'locality' | 'postalCode'>
    )> }
  )>, itemCreateWorkflow: Array<(
    { __typename?: 'Item' }
    & Pick<ZonosItem, 'amount' | 'countryOfOrigin' | 'description' | 'hsCode' | 'id' | 'productId' | 'quantity'>
    & { restriction: Maybe<(
      { __typename?: 'RestrictedItem' }
      & Pick<ZonosRestrictedItem, 'id'>
    )> }
  )>, cartonizeWorkflow: Maybe<Array<Maybe<(
    { __typename?: 'Carton' }
    & Pick<ZonosCarton, 'id'>
  )>>>, shipmentRatingCalculateWorkflow: Array<(
    { __typename?: 'ShipmentRating' }
    & Pick<ZonosShipmentRating, 'id'>
  )>, landedCostCalculateWorkflow: Maybe<Array<Maybe<(
    { __typename?: 'LandedCost' }
    & Pick<ZonosLandedCost, 'currencyCode' | 'id' | 'method' | 'rootId'>
    & { amountSubtotals: Maybe<(
      { __typename?: 'LandedCostAmountSubtotals' }
      & Pick<ZonosLandedCostAmountSubtotals, 'duties' | 'fees' | 'shipping' | 'taxes'>
    )>, deMinimis: Array<(
      { __typename?: 'DeMinimis' }
      & Pick<ZonosDeMinimis, 'threshold' | 'type'>
    )>, remittance: Array<(
      { __typename?: 'LandedCostRemittance' }
      & Pick<ZonosLandedCostRemittance, 'amount'>
    )>, shipmentRating: (
      { __typename?: 'ShipmentRating' }
      & Pick<ZonosShipmentRating, 'displayName' | 'id' | 'maxTransitAt' | 'minTransitAt'>
      & { shippingProfile: Maybe<(
        { __typename?: 'ShippingProfile' }
        & Pick<ZonosShippingProfile, 'customServiceLevelCode' | 'landedCostMethod'>
      )> }
    ) }
  )>>> }
);

export type ZonosLandedCostOnlyMutationVariables = Exact<{
  partyCreateWorkflowInput: Array<ZonosPartyCreateWorkflowInput> | ZonosPartyCreateWorkflowInput;
  itemCreateWorkflowInput: Array<ZonosItemCreateWorkflowInput> | ZonosItemCreateWorkflowInput;
  landedCostCalculateWorkflowInput: ZonosLandedCostWorkFlowInput;
  shipmentRatingCreateWorkflowInput: ZonosShipmentRatingCreateWorkflowInput;
}>;


export type ZonosLandedCostOnlyMutation = (
  { __typename?: 'Mutation' }
  & { partyCreateWorkflow: Array<(
    { __typename?: 'Party' }
    & Pick<ZonosParty, 'id' | 'type'>
    & { location: Maybe<(
      { __typename?: 'Location' }
      & Pick<ZonosLocation, 'administrativeArea' | 'administrativeAreaCode' | 'countryCode' | 'line1' | 'locality' | 'postalCode'>
    )> }
  )>, itemCreateWorkflow: Array<(
    { __typename?: 'Item' }
    & Pick<ZonosItem, 'amount' | 'countryOfOrigin' | 'description' | 'hsCode' | 'id' | 'productId' | 'quantity'>
    & { restriction: Maybe<(
      { __typename?: 'RestrictedItem' }
      & Pick<ZonosRestrictedItem, 'id'>
    )> }
  )>, cartonizeWorkflow: Maybe<Array<Maybe<(
    { __typename?: 'Carton' }
    & Pick<ZonosCarton, 'id'>
  )>>>, shipmentRatingCreateWorkflow: Maybe<(
    { __typename?: 'ShipmentRating' }
    & Pick<ZonosShipmentRating, 'id'>
  )>, landedCostCalculateWorkflow: Maybe<Array<Maybe<(
    { __typename?: 'LandedCost' }
    & Pick<ZonosLandedCost, 'currencyCode' | 'id' | 'method' | 'rootId'>
    & { amountSubtotals: Maybe<(
      { __typename?: 'LandedCostAmountSubtotals' }
      & Pick<ZonosLandedCostAmountSubtotals, 'duties' | 'fees' | 'shipping' | 'taxes'>
    )>, deMinimis: Array<(
      { __typename?: 'DeMinimis' }
      & Pick<ZonosDeMinimis, 'threshold' | 'type'>
    )>, remittance: Array<(
      { __typename?: 'LandedCostRemittance' }
      & Pick<ZonosLandedCostRemittance, 'amount'>
    )>, shipmentRating: (
      { __typename?: 'ShipmentRating' }
      & Pick<ZonosShipmentRating, 'displayName' | 'id' | 'maxTransitAt' | 'minTransitAt'>
      & { shippingProfile: Maybe<(
        { __typename?: 'ShippingProfile' }
        & Pick<ZonosShippingProfile, 'customServiceLevelCode' | 'landedCostMethod'>
      )> }
    ) }
  )>>> }
);

export type ZonosOrderCreateMutationVariables = Exact<{
  input: ZonosOrderCreateInput;
}>;


export type ZonosOrderCreateMutation = (
  { __typename?: 'Mutation' }
  & { orderCreate: Maybe<(
    { __typename?: 'Order' }
    & Pick<ZonosOrder, 'id' | 'accountOrderNumber' | 'currencyCode' | 'status' | 'createdAt' | 'updatedAt' | 'zonosOrderId'>
    & { metadata: Maybe<Array<Maybe<(
      { __typename?: 'OrderMetadata' }
      & Pick<ZonosOrderMetadata, 'key' | 'value'>
    )>>>, references: Maybe<Array<(
      { __typename?: 'OrderReference' }
      & Pick<ZonosOrderReference, 'key' | 'value'>
    )>> }
  )> }
);

export const CartFragmentFragmentDoc = `
    fragment CartFragment on Cart {
  id
  organizationId
  createdAt
  expiresAt
  adjustments {
    amount
    currencyCode
    description
    productId
    sku
    type
  }
  items {
    id
    amount
    name
    currencyCode
    description
    imageUrl
    quantity
    sku
    countryOfOrigin
    provinceOfOrigin
    measurements {
      source
      type
      unitOfMeasure
      value
    }
    productId
    restriction {
      reason
      action
    }
    attributes {
      key
      value
    }
    metadata {
      key
      value
    }
  }
  metadata {
    key
    value
  }
}
    `;
export const CartUpsertDocument = `
    mutation cartUpsert($input: CartUpsertInput!) {
  cartUpsert(input: $input) {
    ...CartFragment
  }
}
    ${CartFragmentFragmentDoc}`;
export const CartByIdDocument = `
    query cartById($id: ID!) {
  cart(id: $id) {
    ...CartFragment
  }
}
    ${CartFragmentFragmentDoc}`;
export const CatalogItemDocument = `
    query catalogItem($id: ID, $productId: String, $sku: String) {
  catalogItem(id: $id, productId: $productId, sku: $sku) {
    attributes {
      key
      value
    }
    brand
    catalogItemReferences {
      catalogItem {
        attributes {
          key
          value
        }
        brand
        catalogItemUrl
        countryOfOrigin
        createdAt
        description
        hsCode
        hsCodes {
          hsCode
        }
        id
        itemType
        material
        measurements {
          source
          type
          unitOfMeasure
          value
        }
        metadata {
          key
          value
        }
        productId
        restrictedCountries
        sku
        updatedAt
      }
      priceRatio
    }
    catalogItemUrl
    countryOfOrigin
    description
    hsCode
    hsCodes {
      hsCode
    }
    id
    itemType
    material
    measurements {
      source
      type
      unitOfMeasure
      value
    }
    metadata {
      key
      value
    }
    packingPreference
    productId
    restrictedCountries
    sku
  }
}
    `;
export const ClassificationsCalculateDocument = `
    mutation classificationsCalculate($inputs: [ClassificationCalculateInput!]!) {
  classificationsCalculate(input: $inputs) {
    confidenceScore
    hsCode {
      code
    }
  }
}
    `;
export const FullLandedCostDocument = `
    mutation fullLandedCost($itemCreateWorkflowInput: [ItemCreateWorkflowInput!]!, $landedCostCalculateWorkflowInput: LandedCostWorkFlowInput!, $partyCreateWorkflowInput: [PartyCreateWorkflowInput!]!) {
  partyCreateWorkflow(input: $partyCreateWorkflowInput) {
    id
    location {
      administrativeArea
      administrativeAreaCode
      countryCode
      line1
      locality
      postalCode
    }
    type
  }
  itemCreateWorkflow(input: $itemCreateWorkflowInput) {
    amount
    countryOfOrigin
    description
    hsCode
    id
    productId
    quantity
    restriction {
      id
    }
  }
  cartonizeWorkflow {
    id
  }
  shipmentRatingCalculateWorkflow {
    id
  }
  landedCostCalculateWorkflow(input: $landedCostCalculateWorkflowInput) {
    amountSubtotals {
      duties
      fees
      shipping
      taxes
    }
    currencyCode
    deMinimis {
      threshold
      type
    }
    id
    method
    remittance {
      amount
    }
    rootId
    shipmentRating {
      displayName
      id
      maxTransitAt
      minTransitAt
      shippingProfile {
        customServiceLevelCode
        landedCostMethod
      }
    }
  }
}
    `;
export const LandedCostOnlyDocument = `
    mutation landedCostOnly($partyCreateWorkflowInput: [PartyCreateWorkflowInput!]!, $itemCreateWorkflowInput: [ItemCreateWorkflowInput!]!, $landedCostCalculateWorkflowInput: LandedCostWorkFlowInput!, $shipmentRatingCreateWorkflowInput: ShipmentRatingCreateWorkflowInput!) {
  partyCreateWorkflow(input: $partyCreateWorkflowInput) {
    id
    location {
      administrativeArea
      administrativeAreaCode
      countryCode
      line1
      locality
      postalCode
    }
    type
  }
  itemCreateWorkflow(input: $itemCreateWorkflowInput) {
    amount
    countryOfOrigin
    description
    hsCode
    id
    productId
    quantity
    restriction {
      id
    }
  }
  cartonizeWorkflow {
    id
  }
  shipmentRatingCreateWorkflow(input: $shipmentRatingCreateWorkflowInput) {
    id
  }
  landedCostCalculateWorkflow(input: $landedCostCalculateWorkflowInput) {
    amountSubtotals {
      duties
      fees
      shipping
      taxes
    }
    currencyCode
    deMinimis {
      threshold
      type
    }
    id
    method
    remittance {
      amount
    }
    rootId
    shipmentRating {
      displayName
      id
      maxTransitAt
      minTransitAt
      shippingProfile {
        customServiceLevelCode
        landedCostMethod
      }
    }
  }
}
    `;
export const OrderCreateDocument = `
    mutation orderCreate($input: OrderCreateInput!) {
  orderCreate(input: $input) {
    id
    accountOrderNumber
    currencyCode
    status
    createdAt
    updatedAt
    metadata {
      key
      value
    }
    references {
      key
      value
    }
    zonosOrderId
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    cartUpsert(variables: ZonosCartUpsertMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ZonosCartUpsertMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZonosCartUpsertMutation>({ document: CartUpsertDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'cartUpsert', 'mutation', variables);
    },
    cartById(variables: ZonosCartByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ZonosCartByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZonosCartByIdQuery>({ document: CartByIdDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'cartById', 'query', variables);
    },
    catalogItem(variables?: ZonosCatalogItemQueryVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ZonosCatalogItemQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZonosCatalogItemQuery>({ document: CatalogItemDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'catalogItem', 'query', variables);
    },
    classificationsCalculate(variables: ZonosClassificationsCalculateMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ZonosClassificationsCalculateMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZonosClassificationsCalculateMutation>({ document: ClassificationsCalculateDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'classificationsCalculate', 'mutation', variables);
    },
    fullLandedCost(variables: ZonosFullLandedCostMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ZonosFullLandedCostMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZonosFullLandedCostMutation>({ document: FullLandedCostDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'fullLandedCost', 'mutation', variables);
    },
    landedCostOnly(variables: ZonosLandedCostOnlyMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ZonosLandedCostOnlyMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZonosLandedCostOnlyMutation>({ document: LandedCostOnlyDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'landedCostOnly', 'mutation', variables);
    },
    orderCreate(variables: ZonosOrderCreateMutationVariables, requestHeaders?: GraphQLClientRequestHeaders, signal?: RequestInit['signal']): Promise<ZonosOrderCreateMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<ZonosOrderCreateMutation>({ document: OrderCreateDocument, variables, requestHeaders: { ...requestHeaders, ...wrappedRequestHeaders }, signal }), 'orderCreate', 'mutation', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;