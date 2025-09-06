export class LogUtil {
  static debug(message: string, ...args: any[]) {
    console.debug(message, ...args);
  }

  static error(message: string, ...args: any[]) {
    console.error(message, ...args);
  }

  static info(message: string, ...args: any[]) {
    console.info(message, ...args);
  }

  static sum = (a: number, b: number) => a + b;
}
