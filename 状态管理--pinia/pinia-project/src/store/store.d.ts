import "pinia";

declare module "pinia" {
  export interface PiniaCustomStateProperties<S> {
    myPlugin: string;
  }
}
