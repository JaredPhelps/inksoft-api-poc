export interface ProductBase {
  id: number;
  longDescription?: string;
  manufacturer?: string;
  name: string;
  sku: string;
  styles?: ProductStyleBase[];
  unitPrice?: number;
}

export interface ProductStyleBase {
  htmlColor1: string;
  htmlColor2: string;
  id: number;
  imageFilePath_Front: string;
  name: string;
  sides: any[];
  unitPrice?: number;
  sizes: ProductStyleSize[];
}

export interface ProductSide {
  imageFilePath: string;
  side: string;
}

export interface ProductStyleSize {
  upCharge: number;
  id: number;
  sortOrder: number;
  unitPrice: number;
  name: string;
}

export interface ShoppingCartPackage {
  cart: ShoppingCart;
  products: ProductBase[];
}

export interface ShoppingCart {
  totalDue: number;
  shippingAmount: number;
  itemTotal: number;
  items: ShoppingCartItem[];
  sessionToken: string;
  designSummaries: DesignSummary[];
}

export interface ShoppingCartItem {
  designId: number;
  productId: number;
  productStyleId: number;
  productStyleSizeId: number;
  quantity: number;
  fullName: string;
  sidePreviews: ShoppingCartItemPreview[];
}

export interface ShoppingCartItemPreview {
  sideName: string;
  productOnlyUrl: string;
  designOnlyUrl: string;
  designOnProductUrl: string;
  sideArtId: number;
}

export interface DesignSummary {
  canvases: CanvasSummary[];
  designID: number;
  name: string;
  designedOnProductId?: number;
  designedOnProductStyleId?: number;
  designedOnSku?: string;
  designedOnStyleName?: string;
  lastModified?: Date;
  notes?: string;
  uri?: string;
}

export interface CanvasSummary {
  colors: string[];
  isFullColor: boolean;
  matchFileColor: boolean;
  pngRelativeUrl: string;
  pngRelativeUrlWithProduct: string;
  printRegion: string;
  sideDisplayName: string;
  sideName: string;
  svgRelativeUrl: string;
  thumbnailRelativeUrl: string;
  numColors?: number;
}

export interface ApiResponseType<T> {
  ok: boolean;
  data: T;
  messages: Message[];
  pagination?: ApiResultPagination;
  statusCode?: string;
}

export interface ApiResponse extends ApiResponseType<any> {}

export interface ApiResultPagination {
  index: number;
  includedResults: number;
  totalResults: number;
}

export interface Message {
  title?: string;
  content: string;
  severity: string;
}
