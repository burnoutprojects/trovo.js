import { AxiosRequestConfig } from "axios";

export type RequestHeaders = {
  Accept: string;
  "Content-Type": string;
  "CLIENT-ID"?: string;
};

export type RequestConfig = AxiosRequestConfig;
