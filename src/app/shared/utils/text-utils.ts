export class TextUtils {
  public static toQueryString(params: Object): string {
    return Object.keys(params)
      .map(k => k !== undefined && params[ k ] !== undefined ? `${encodeURIComponent(k)}=${encodeURIComponent(params[ k ])}` : '')
      .join('&');
  }

  public static getFirstName(nameStr: string): string {
    const arr: string[] = nameStr.split(' ');
    return arr.length === 1 ? arr[ 0 ] : arr.slice(0, -1).join(' ');
  }

  public static getLastName(nameStr: string): string {
    const arr: string[] = nameStr.split(' ');
    return arr.length === 1 ? '' : arr.slice(-1).join(' ');
  }

  public generateRandomString(): string {
    const randomString = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    const short = randomString.substring(0, 5);
    return short;
  }

}
