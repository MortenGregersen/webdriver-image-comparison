import {RectanglesOutput} from './rectangles.interfaces';

export interface ResizeDimensions {
  // The bottom margin
  bottom: number;
  // The left margin
  left: number;
  // The right margin
  right: number;
  // The top margin
  top: number;
}

export interface ImageCompareOptions {
  // Debug the comparison with extra logging
  debug: boolean;
  // The device pixel ratio of the device
  devicePixelRatio: number;
  // The compare options
  compareOptions: {
    wic: WicImageCompareOptions;
    method: ScreenMethodImageCompareCompareOptions;
  };
  // The name of the file
  fileName: string;
  // The folders object
  folderOptions: ImageCompareFolderOptions;
  // The name of the platform
  platformName: string;
  // If this is a native web screenshot
  isAndroidNativeWebScreenshot: boolean;
}

export interface WicImageCompareOptions {
  // Block out the status bar yes or no
  blockOutStatusBar: boolean;
  // Block out the tool bar yes or no
  blockOutToolBar: boolean;
  // Compare images and discard alpha
  ignoreAlpha: boolean;
  // Compare images an discard anti aliasing
  ignoreAntialiasing: boolean;
  // Even though the images are in colour, the comparison wil compare 2 black/white images
  ignoreColors: boolean;
  // Compare images and compare with red = 16, green = 16, blue = 16,alpha = 16, minBrightness=16, maxBrightness=240
  ignoreLess: boolean;
  // Compare images and compare with red = 0, green = 0, blue = 0, alpha = 0, minBrightness=0, maxBrightness=255
  ignoreNothing: boolean;
  // Will ignore all pixels that have some transparency in one of the images
  ignoreTransparentPixel: boolean;
  // Default false. If true, return percentage will be like 0.12345678, default is 0.12
  rawMisMatchPercentage: boolean;
  // Return all the compare data object
  returnAllCompareData: boolean;
  // Allowable value of misMatchPercentage that prevents saving image with differences
  saveAboveTolerance: number;
}

export interface DefaultImageCompareCompareOptions extends MethodImageCompareCompareOptions {
  // Block out array with x, y, width and height values
  blockOut?: RectanglesOutput[];
}

export interface ScreenMethodImageCompareCompareOptions extends DefaultImageCompareCompareOptions, MethodImageCompareCompareOptions{
  // Block out the status bar yes or no
  blockOutStatusBar?: boolean;
  // Block out the tool bar yes or no
  blockOutToolBar?: boolean;
}

export interface MethodImageCompareCompareOptions{
  // Block out array with x, y, width and height values
  blockOut?: RectanglesOutput[];
  // Compare images and discard alpha
  ignoreAlpha?: boolean;
  // Compare images an discard anti aliasing
  ignoreAntialiasing?: boolean;
  // Even though the images are in colour, the comparison wil compare 2 black/white images
  ignoreColors?: boolean;
  // Compare images and compare with red = 16, green = 16, blue = 16,alpha = 16, minBrightness=16, maxBrightness=240
  ignoreLess?: boolean;
  // Compare images and compare with red = 0, green = 0, blue = 0, alpha = 0, minBrightness=0, maxBrightness=255
  ignoreNothing?: boolean;
  // Will ignore all pixels that have some transparency in one of the images
  ignoreTransparentPixel?: boolean;
  // Default false. If true, return percentage will be like 0.12345678, default is 0.12
  rawMisMatchPercentage?: boolean;
  // Return all the compare data object
  returnAllCompareData?: boolean;
  // Allowable value of misMatchPercentage that prevents saving image with differences
  saveAboveTolerance?: number;
}

export interface ImageCompareFolderOptions {
  // Auto save image to baseline
  autoSaveBaseline: boolean;
  // The actual folder
  actualFolder: string;
  // The baseline folder
  baselineFolder: string;
  // The name of the browser
  browserName: string;
  // The name of the device
  deviceName: string;
  // The diff folder
  diffFolder: string;
  // Is the instance a mobile instance
  isMobile: boolean;
  // If the folder needs to have the instance name in it
  savePerInstance: boolean;
}

export interface ImageCompareResult {
  // The file name
  fileName: string;
  folders: {
    // The actual folder and file name
    actual: string;
    // The baseline folder and file name
    baseline: string;
    // This following folder is optional and only if there is a mismatch
    // The folder that holds the diffs and the file name
    diff?: string;
  };
  // The mismatch percentage
  misMatchPercentage: number;
}

export interface CompareOptions {
  ignore:string[];
  ignoreRectangles: RectanglesOutput[];
  ignoreTransparentPixel: boolean;
}
