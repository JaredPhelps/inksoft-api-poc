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
