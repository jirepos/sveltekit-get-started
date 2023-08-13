import { env } from '$env/dynamic/public';


export class GwAppConstants  { 
    public static readonly API_SERVER_DOMAIN:string   = env.PUBLIC_API_SERVER_DOMAIN;
    public static readonly STYLE_SERVER_DOMAIN:string = env.PUBLIC_STYLE_SERVER_DOMAIN;
    public static readonly UI_SERVER_DOMAIN:string = env.PUBLIC_UI_SERVER_DOMAIN;
}

