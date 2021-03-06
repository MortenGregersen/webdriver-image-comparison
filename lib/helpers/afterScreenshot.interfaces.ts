export interface ScreenshotOutput {
  // The device pixel ratio of the instance
  devicePixelRatio: number;
  // The filename
  fileName: string;
  // The path where the file can be found
  path: string;
}

export interface AfterScreenshotOptions {
  // The actual folder where the images need to be saved
  actualFolder: string;
  // The image
  base64Image: string;
  // If scrollbars need to be hidden
  hideScrollBars: boolean;
  // The file path options
  filePath: ScreenshotFilePathOptions;
  // The file name options object
  fileName: ScreenshotFileNameOptions;
}

export interface ScreenshotFilePathOptions {
  // The name of the browser
  browserName: string;
  // The name of the device
  deviceName: string;
  // Is the instance a mobile
  isMobile: boolean;
  // If the folder needs to have the instance name in it
  savePerInstance: boolean;
}

export interface ScreenshotFileNameOptions {
  // The browser name
  browserName: string;
  // The device name
  deviceName: string;
  // The device pixel ratio
  devicePixelRatio: number;
  // The string that needs to be formated
  formatImageName: string;
  // Is this a mobile
  isMobile: boolean;
  // Is the test executed in a browser
  isTestInBrowser: boolean;
  // The log name of the instance
  logName: string;
  // The the name of the instance
  name: string;
  // The outer height of the screen
  outerHeight: number;
  // The outer width of the screen
  outerWidth: number;
  // The height of the screen
  screenHeight: number;
  // The width of the screen
  screenWidth: number;
  // The tag of the image
  tag: string;
}
