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

export const mockResponseList =[
  {
      "url": "chrome-extension://elnmhoaohpepealfibfpihakidobnldj/index.html?start=%27true%27",
      "method": "GET",
      "statusCode": 200,
      "type": "main_frame",
      "timestamp": "2025-02-15T07:15:29.024Z"
  },
  {
      "url": "chrome-extension://elnmhoaohpepealfibfpihakidobnldj/assets/popup-B8H3SZ1w.css",
      "method": "GET",
      "statusCode": 200,
      "type": "stylesheet",
      "timestamp": "2025-02-15T07:15:29.027Z"
  },
  {
      "url": "chrome-extension://elnmhoaohpepealfibfpihakidobnldj/popup/popup.js",
      "method": "GET",
      "statusCode": 200,
      "type": "script",
      "timestamp": "2025-02-15T07:15:29.027Z"
  },
  {
      "url": "chrome-extension://elnmhoaohpepealfibfpihakidobnldj/vite.svg",
      "method": "GET",
      "statusCode": 200,
      "type": "image",
      "timestamp": "2025-02-15T07:15:29.086Z"
  },
  {
      "url": "https://rr1---sn-h557snzr.googlevideo.com/videoplayback?expire=1739624371&ei=UzuwZ_zVGfra3LUP_efcgAk&ip=2401%3A4900%3A883b%3A833a%3A30a4%3A44e1%3A4ba2%3A6b3c&id=o-ANWl5Qw8VN3XHKup6VQtv74a-FKlE1rgaawZeQxJitmb&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1739602771%2C&mh=Hy&mm=31%2C29&mn=sn-h557snzr%2Csn-h5576nsr&ms=au%2Crdu&mv=m&mvi=1&pl=52&rms=au%2Cau&ctier=A&pfa=5&pcm2=yes&initcwndbps=2118750&hightc=yes&siu=1&spc=RjZbSSFtJWgisprnkzCtTzBSrwLN3ebYZWXaIYNv3irnKVJgN_ZYO4193g9G55I&svpuc=1&ns=7ev0Nl3CZomtXkFWm-IX5UIQ&sabr=1&rqh=1&mt=1739602388&fvip=3&keepalive=yes&fexp=51326932%2C51355912&c=WEB&n=IZQ-eBxr_vVRDw&sparams=expire%2Cei%2Cip%2Cid%2Csource%2Crequiressl%2Cxpc%2Cctier%2Cpfa%2Cpcm2%2Chightc%2Csiu%2Cspc%2Csvpuc%2Cns%2Csabr%2Crqh&sig=AJfQdSswRgIhANFiHHGGIx90UC0Q4Mwc6_G82h4BDA96x5bfVtEoM4kBAiEAuYLWvogyDGbsd6RbKrRFHN-U__HijyCGVNnmkwatRyI%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRAIgZ5k4tJ-kCPYnmYnQjVZU8P6Jgmw_SMWe0KX8KCQlRBYCIBkChXqzSGz3KplqjtUP-R149Wg641HmDbUTfdNed4bH&cpn=QWRYHko-KuiVgXXi&cver=2.20250213.05.00&rn=539&alr=yes",
      "method": "POST",
      "statusCode": 200,
      "type": "xmlhttprequest",
      "timestamp": "2025-02-15T07:15:29.542Z"
  },
  {
      "url": "https://ssl.gstatic.com/docs/common/netcheck.gif?zx=hgm6nt9ysk1n",
      "method": "GET",
      "statusCode": 200,
      "type": "image",
      "timestamp": "2025-02-15T07:15:30.274Z"
  },
  {
      "url": "https://www.youtube.com/api/stats/qoe?fmt=244&afmt=251&cpn=QWRYHko-KuiVgXXi&el=detailpage&ns=yt&fexp=v1%2C23986028%2C18616%2C434717%2C127326%2C133212%2C14625955%2C11684381%2C43454%2C9954%2C9105%2C18310%2C4420%2C2821%2C59112%2C19100%2C8479%2C19339%2C18644%2C13046%2C1823%2C18242%2C28968%2C12968%2C2156%2C65%2C3548%2C1242%2C5711%2C3025%2C391%2C12774%2C13730%2C9252%2C148%2C3331%2C2024%2C495%2C6731%2C268%2C2551%2C961%2C3672%2C1664%2C922%2C1336%2C1630%2C7521%2C208%2C3189%2C789%2C2275%2C238%2C6759%2C1765%2C291%2C54%2C1150%2C768%2C63%2C2776%2C1206%2C109%2C2701%2C324&cl=725870172&seq=31&docid=sdE1fKOppXc&ei=UzuwZ_zVGfra3LUP_efcgAk&event=streamingstats&feature=g-high-rec&osid=AAAAAbDexJU%3AAOeUNAYCdvyu7OG18xLRuNbKn2YOJPA3sw&plid=AAYuKNU-JlgpNM7Z&referrer=https%3A%2F%2Fwww.youtube.com%2F&sdetail=p%3A%2F&sourceid=y&cbr=Chrome&cbrver=132.0.0.0&c=WEB&cver=2.20250213.05.00&cplayer=UNIPLAYER&cos=Windows&cosver=10.0&cplatform=DESKTOP&vps=960.005:PL&bwm=960.005:937615:0.274&bwe=960.005:3455316&bat=960.005:0.39:1&cmt=960.005:959.382&bh=960.005:120.668&qclc=ChBRV1JZSGtvLUt1aVZnWFhpEB8",
      "method": "POST",
      "statusCode": 204,
      "type": "xmlhttprequest",
      "timestamp": "2025-02-15T07:15:31.603Z"
  },
  {
      "url": "https://json.org/example.html",
      "method": "GET",
      "statusCode": 200,
      "type": "main_frame",
      "timestamp": "2025-02-15T07:15:31.619Z"
  },
  {
      "url": "https://json.org/img/json160.gif",
      "method": "GET",
      "statusCode": 200,
      "type": "image",
      "timestamp": "2025-02-15T07:15:31.637Z"
  },
  {
      "url": "https://json.org/favicon.ico",
      "method": "GET",
      "statusCode": 200,
      "type": "image",
      "timestamp": "2025-02-15T07:15:31.663Z"
  },
  {
      "url": "https://rr1---sn-h557snzr.googlevideo.com/videoplayback?expire=1739624371&ei=UzuwZ_zVGfra3LUP_efcgAk&ip=2401%3A4900%3A883b%3A833a%3A30a4%3A44e1%3A4ba2%3A6b3c&id=o-ANWl5Qw8VN3XHKup6VQtv74a-FKlE1rgaawZeQxJitmb&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1739602771%2C&mh=Hy&mm=31%2C29&mn=sn-h557snzr%2Csn-h5576nsr&ms=au%2Crdu&mv=m&mvi=1&pl=52&rms=au%2Cau&ctier=A&pfa=5&pcm2=yes&initcwndbps=2118750&hightc=yes&siu=1&spc=RjZbSSFtJWgisprnkzCtTzBSrwLN3ebYZWXaIYNv3irnKVJgN_ZYO4193g9G55I&svpuc=1&ns=7ev0Nl3CZomtXkFWm-IX5UIQ&sabr=1&rqh=1&mt=1739602388&fvip=3&keepalive=yes&fexp=51326932%2C51355912&c=WEB&n=IZQ-eBxr_vVRDw&sparams=expire%2Cei%2Cip%2Cid%2Csource%2Crequiressl%2Cxpc%2Cctier%2Cpfa%2Cpcm2%2Chightc%2Csiu%2Cspc%2Csvpuc%2Cns%2Csabr%2Crqh&sig=AJfQdSswRgIhANFiHHGGIx90UC0Q4Mwc6_G82h4BDA96x5bfVtEoM4kBAiEAuYLWvogyDGbsd6RbKrRFHN-U__HijyCGVNnmkwatRyI%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRAIgZ5k4tJ-kCPYnmYnQjVZU8P6Jgmw_SMWe0KX8KCQlRBYCIBkChXqzSGz3KplqjtUP-R149Wg641HmDbUTfdNed4bH&cpn=QWRYHko-KuiVgXXi&cver=2.20250213.05.00&rn=540&alr=yes",
      "method": "POST",
      "statusCode": 200,
      "type": "xmlhttprequest",
      "timestamp": "2025-02-15T07:15:32.652Z"
  },
  {
      "url": "chrome-extension://elnmhoaohpepealfibfpihakidobnldj/index.html?start=%27true%27",
      "method": "GET",
      "statusCode": 200,
      "type": "other",
      "timestamp": "2025-02-15T07:15:33.469Z"
  },
  {
      "url": "chrome-extension://elnmhoaohpepealfibfpihakidobnldj/assets/popup-B8H3SZ1w.css",
      "method": "GET",
      "statusCode": 200,
      "type": "stylesheet",
      "timestamp": "2025-02-15T07:15:33.469Z"
  },
  {
      "url": "https://rr1---sn-h557snzr.googlevideo.com/videoplayback?expire=1739624371&ei=UzuwZ_zVGfra3LUP_efcgAk&ip=2401%3A4900%3A883b%3A833a%3A30a4%3A44e1%3A4ba2%3A6b3c&id=o-ANWl5Qw8VN3XHKup6VQtv74a-FKlE1rgaawZeQxJitmb&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1739602771%2C&mh=Hy&mm=31%2C29&mn=sn-h557snzr%2Csn-h5576nsr&ms=au%2Crdu&mv=m&mvi=1&pl=52&rms=au%2Cau&ctier=A&pfa=5&pcm2=yes&initcwndbps=2118750&hightc=yes&siu=1&spc=RjZbSSFtJWgisprnkzCtTzBSrwLN3ebYZWXaIYNv3irnKVJgN_ZYO4193g9G55I&svpuc=1&ns=7ev0Nl3CZomtXkFWm-IX5UIQ&sabr=1&rqh=1&mt=1739602388&fvip=3&keepalive=yes&fexp=51326932%2C51355912&c=WEB&n=IZQ-eBxr_vVRDw&sparams=expire%2Cei%2Cip%2Cid%2Csource%2Crequiressl%2Cxpc%2Cctier%2Cpfa%2Cpcm2%2Chightc%2Csiu%2Cspc%2Csvpuc%2Cns%2Csabr%2Crqh&sig=AJfQdSswRgIhANFiHHGGIx90UC0Q4Mwc6_G82h4BDA96x5bfVtEoM4kBAiEAuYLWvogyDGbsd6RbKrRFHN-U__HijyCGVNnmkwatRyI%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRAIgZ5k4tJ-kCPYnmYnQjVZU8P6Jgmw_SMWe0KX8KCQlRBYCIBkChXqzSGz3KplqjtUP-R149Wg641HmDbUTfdNed4bH&cpn=QWRYHko-KuiVgXXi&cver=2.20250213.05.00&rn=541&alr=yes",
      "method": "POST",
      "statusCode": 200,
      "type": "xmlhttprequest",
      "timestamp": "2025-02-15T07:15:36.033Z"
  },
  {
      "url": "https://rr1---sn-h557snzr.googlevideo.com/videoplayback?expire=1739624371&ei=UzuwZ_zVGfra3LUP_efcgAk&ip=2401%3A4900%3A883b%3A833a%3A30a4%3A44e1%3A4ba2%3A6b3c&id=o-ANWl5Qw8VN3XHKup6VQtv74a-FKlE1rgaawZeQxJitmb&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&met=1739602771%2C&mh=Hy&mm=31%2C29&mn=sn-h557snzr%2Csn-h5576nsr&ms=au%2Crdu&mv=m&mvi=1&pl=52&rms=au%2Cau&ctier=A&pfa=5&pcm2=yes&initcwndbps=2118750&hightc=yes&siu=1&spc=RjZbSSFtJWgisprnkzCtTzBSrwLN3ebYZWXaIYNv3irnKVJgN_ZYO4193g9G55I&svpuc=1&ns=7ev0Nl3CZomtXkFWm-IX5UIQ&sabr=1&rqh=1&mt=1739602388&fvip=3&keepalive=yes&fexp=51326932%2C51355912&c=WEB&n=IZQ-eBxr_vVRDw&sparams=expire%2Cei%2Cip%2Cid%2Csource%2Crequiressl%2Cxpc%2Cctier%2Cpfa%2Cpcm2%2Chightc%2Csiu%2Cspc%2Csvpuc%2Cns%2Csabr%2Crqh&sig=AJfQdSswRgIhANFiHHGGIx90UC0Q4Mwc6_G82h4BDA96x5bfVtEoM4kBAiEAuYLWvogyDGbsd6RbKrRFHN-U__HijyCGVNnmkwatRyI%3D&lsparams=met%2Cmh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Crms%2Cinitcwndbps&lsig=AGluJ3MwRAIgZ5k4tJ-kCPYnmYnQjVZU8P6Jgmw_SMWe0KX8KCQlRBYCIBkChXqzSGz3KplqjtUP-R149Wg641HmDbUTfdNed4bH&cpn=QWRYHko-KuiVgXXi&cver=2.20250213.05.00&rn=542&alr=yes",
      "method": "POST",
      "statusCode": 200,
      "type": "xmlhttprequest",
      "timestamp": "2025-02-15T07:15:37.084Z"
  },
  {
      "url": "https://www.youtube.com/youtubei/v1/player/heartbeat?alt=json",
      "method": "POST",
      "statusCode": 200,
      "type": "xmlhttprequest",
      "timestamp": "2025-02-15T07:15:37.182Z"
  },
  {
      "url": "https://json.org/example.html",
      "method": "GET",
      "statusCode": 200,
      "type": "main_frame",
      "timestamp": "2025-02-15T07:15:39.459Z"
  }
]
export const mode = import.meta.env.MODE;