declare namespace NodeJS {
  export interface ProcessEnv {
    STAGE: string
    LEANCLOUD_APP_ID: string
    LEANCLOUD_APP_KEY: string
    LEANCLOUD_APP_MASTER_KEY: string
    SERVER_URL: string
  }
}
