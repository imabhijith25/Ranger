import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ResponseHeaders = [
  { "value": "Accept-Ranges", "label": "Accept Ranges" },
  { "value": "Access-Control-Allow-Credentials", "label": "Access Control Allow Credentials" },
  { "value": "Access-Control-Allow-Headers", "label": "Access Control Allow Headers" },
  { "value": "Access-Control-Allow-Methods", "label": "Access Control Allow Methods" },
  { "value": "Access-Control-Allow-Origin", "label": "Access Control Allow Origin" },
  { "value": "Access-Control-Expose-Headers", "label": "Access Control Expose Headers" },
  { "value": "Access-Control-Max-Age", "label": "Access Control Max Age" },
  { "value": "Age", "label": "Age" },
  { "value": "Allow", "label": "Allow" },
  { "value": "Alt-Svc", "label": "Alternative Service" },
  { "value": "Authorization", "label": "Authorization" },
  { "value": "Cache-Control", "label": "Cache Control" },
  { "value": "Clear-Site-Data", "label": "Clear Site Data" },
  { "value": "Connection", "label": "Connection" },
  { "value": "Content-Disposition", "label": "Content Disposition" },
  { "value": "Content-Encoding", "label": "Content Encoding" },
  { "value": "Content-Language", "label": "Content Language" },
  { "value": "Content-Length", "label": "Content Length" },
  { "value": "Content-Location", "label": "Content Location" },
  { "value": "Content-Range", "label": "Content Range" },
  { "value": "Content-Security-Policy", "label": "Content Security Policy" },
  { "value": "Content-Type", "label": "Content Type" },
  { "value": "Date", "label": "Date" },
  { "value": "ETag", "label": "Entity Tag" },
  { "value": "Expect-CT", "label": "Expect CT" },
  { "value": "Expires", "label": "Expires" },
  { "value": "Feature-Policy", "label": "Feature Policy" },
  { "value": "Keep-Alive", "label": "Keep Alive" },
  { "value": "Last-Modified", "label": "Last Modified" },
  { "value": "Link", "label": "Link" },
  { "value": "Location", "label": "Location" },
  { "value": "Permissions-Policy", "label": "Permissions Policy" },
  { "value": "Proxy-Authenticate", "label": "Proxy Authenticate" },
  { "value": "Public-value-Pins", "label": "Public value Pins" },
  { "value": "Referrer-Policy", "label": "Referrer Policy" },
  { "value": "Retry-After", "label": "Retry After" },
  { "value": "Server", "label": "Server" },
  { "value": "Server-Timing", "label": "Server Timing" },
  { "value": "Set-Cookie", "label": "Set Cookie" },
  { "value": "Strict-Transport-Security", "label": "Strict Transport Security" },
  { "value": "Timing-Allow-Origin", "label": "Timing Allow Origin" },
  { "value": "Trailer", "label": "Trailer" },
  { "value": "Transfer-Encoding", "label": "Transfer Encoding" },
  { "value": "Upgrade", "label": "Upgrade" },
  { "value": "Vary", "label": "Vary" },
  { "value": "Via", "label": "Via" },
  { "value": "WWW-Authenticate", "label": "WWW Authenticate" },
  { "value": "Warning", "label": "Warning" },
  { "value": "X-Content-Type-Options", "label": "X Content Type Options" },
  { "value": "X-DNS-Prefetch-Control", "label": "X DNS Prefetch Control" },
  { "value": "X-Frame-Options", "label": "X Frame Options" },
  { "value": "X-Powered-By", "label": "X Powered By" },
  { "value": "X-Redirect-By", "label": "X Redirect By" },
  { "value": "X-Request-ID", "label": "X Request ID" },
  { "value": "X-Robots-Tag", "label": "X Robots Tag" },
  { "value": "X-UA-Compatible", "label": "X UA Compatible" },
  { "value": "X-XSS-Protection", "label": "X XSS Protection" }
]


export const mode = import.meta.env.MODE;