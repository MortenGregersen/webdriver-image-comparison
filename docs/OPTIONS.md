# Options

## Plugin options
Plugin options are the options that can be set when the plugin is instantiated.

### `addressBarShadowPadding`
- **Type:** `number`
- **Mandatory:** No
- **Default:** `6`

The padding that needs to be added to the address bar on iOS and Android to do a proper cutout of the the viewport.

### `autoSaveBaseline`
- **Type:** `boolean`
- **Mandatory:** No
- **Default:** `false`

If no baseline image is found during the comparison the image is automatically copied to the baseline folder when this is set to `true`

### `baselineFolder`
- **Type:** `string`
- **Mandatory:** No
- **Default:** `./wic/baseline/`

The directory that will hold all the baseline images that are used to during the comparison.

### `debug`
- **Type:** `boolean`
- **Mandatory:** No
- **Default:** `false`

Enable extra console logging or always saving the diff images during comparison.

### `disableCSSAnimation`
- **Type:** `boolean`
- **Mandatory:** No
- **Default:** `false`

En/Disable all css animations in the application. If set to true all animations will be disabled before taking a screenshot
and reset when done

### `formatImageName`
- **Type:** `string`
- **Mandatory:** No
- **Default:** `{tag}-{browserName}-{width}x{height}-dpr-{dpr}`

The name of the saved images can be customized by passing the parameter `formatImageName` with a format string like:

	{tag}-{browserName}-{width}x{height}-dpr-{dpr}

The following variables can be passed to format the string and will automatically been read from the instance capabilities. 
If they can't be determined the defaults will be used.

- `browserName`: The name of the device from the capabilities (default: 'no-provided-browserName-in-caps')
- `deviceName`: The orientation from capabilities (default: 'no-provided-deviceName-in-caps')
- `dpr`: The orientation from capabilities
- `height`: The orientation from capabilities
- `logName`: The orientation from capabilities (default: 'no-provided-logName-in-caps')
- `mobile`: The orientation from capabilities
- `name`: The orientation from capabilities (default: 'no-provided-name-in-caps')
- `tag`: The orientation from capabilities
- `width`: The orientation from capabilities

#### `fullPageScrollTimeout`
- **Type:** `number`
- **Mandatory:** No
- **Default:** `1500`

The timeout in milliseconds to wait after a scroll. This might help identifying pages with lazy loading.

#### `hideScrollBars`
- **Type:** `boolean`
- **Mandatory:** No
- **Default:** `false`

Hide scrollbars in the application. If set to true all scrollbars will be disabled before taking a screenshot

### `savePerInstance`
- **Type:** `boolean`
- **Default:** `false`
- **Mandatory:** no

Save the images per instance in a separate folder so for example all Chrome screenshots will be saved in a chrome folder like `desktop_chrome`.

### `screenshotPath`
- **Type:** `string`
- **Default:** `.tmp/`
- **Mandatory:** no

The directory that will hold all the actual / difference screenshots

### `toolBarShadowPadding`
- **Type:** `number`
- **Mandatory:** No
- **Default:** `6`

The padding that needs to be added to the toolbar bar on iOS and Android to do a proper cutout of the the viewport.

### Plugin compare options 
The compare options can be set as plugin options, see [Compare options](./OPTIONS.md#compare-options)


## Method options
Methods options are the options that can be set per method. If the option has the same key as an options that has been set during the instantiation of the plugin, this method option will override the plugin option value.

### `saveElement`
#### `disableCSSAnimation`
- **Type:** `boolean`
- **Mandatory:** No
- **Default:** `false`

En/Disable all css animations in the application. If set to true all animations will be disabled before taking a screenshot
and reset when done

#### `hideScrollBars`
- **Type:** `boolean`
- **Mandatory:** No
- **Default:** `false`

Hide scrollbars in the application. If set to true all scrollbars will be disabled before taking a screenshot 

#### `resizeDimensions`
- **Type:** `object`
- **Mandatory:** no
- **Default:** `{ top: 0, right: 0, bottom: 0, left: 0}`

An object that need to hold a `top`, `right`, `bottom` and a `left` amount of pixels that need to make the element cutout bigger.

### `saveScreen`
#### `disableCSSAnimation`
- **Type:** `boolean`
- **Mandatory:** No
- **Default:** `false`

En/Disable all css animations in the application. If set to true all animations will be disabled before taking a screenshot
and reset when done

#### `hideScrollBars`
- **Type:** `boolean`
- **Mandatory:** No
- **Default:** `false`

Hide scrollbars in the application. If set to true all scrollbars will be disabled before taking a screenshot 

### `saveFullPageScreen`
#### `disableCSSAnimation`
- **Type:** `boolean`
- **Mandatory:** No
- **Default:** `false`

En/Disable all css animations in the application. If set to true all animations will be disabled before taking a screenshot
and reset when done

#### `fullPageScrollTimeout`
- **Type:** `number`
- **Mandatory:** No
- **Default:** `1500`

The timeout in milliseconds to wait after a scroll. This might help identifying pages with lazy loading.

#### `hideScrollBars`
- **Type:** `boolean`
- **Mandatory:** No
- **Default:** `false`

Hide scrollbars in the application. If set to true all scrollbars will be disabled before taking a screenshot 

### `checkElement`
#### `blockOut`
- **Type:** `array`
- **Mandatory:** No
- **Default:** `[{height: 10, width: 5, x: 40, y: 65}, {height: 250, width: 500,x: 0,y: 35}]`

Block out array with x, y, width and height values. These block outs will be black areas on both images that will be excluded during comparison.
The values will automatically be transformed to the correct DPR-values.  

#### `disableCSSAnimation`
- **Type:** `boolean`
- **Mandatory:** No
- **Default:** `false`

En/Disable all css animations in the application. If set to true all animations will be disabled before taking a screenshot
and reset when done

#### `hideScrollBars`
- **Type:** `boolean`
- **Mandatory:** No
- **Default:** `false`

Hide scrollbars in the application. If set to true all scrollbars will be disabled before taking a screenshot 

#### `resizeDimensions`
- **Type:** `object`
- **Mandatory:** no
- **Default:** `{ top: 0, right: 0, bottom: 0, left: 0}`

An object that need to hold a `top`, `right`, `bottom` and a `left` amount of pixels that need to make the element cutout bigger.

### `checkElement` compare options 
The compare options can be set as `checkElement` options, see [Compare options](./OPTIONS.md#compare-options)

### `checkScreen`
#### `blockOut`
- **Type:** `array`
- **Mandatory:** No
- **Default:** `[{height: 10, width: 5, x: 40, y: 65}, {height: 250, width: 500,x: 0,y: 35}]`

Block out array with x, y, width and height values. These block outs will be black areas on both images that will be excluded during comparison.
The values will automatically be transformed to the correct DPR-values.
 
#### `disableCSSAnimation`
- **Type:** `boolean`
- **Mandatory:** No
- **Default:** `false`

En/Disable all css animations in the application. If set to true all animations will be disabled before taking a screenshot
and reset when done

#### `hideScrollBars`
- **Type:** `boolean`
- **Mandatory:** No
- **Default:** `false`

Hide scrollbars in the application. If set to true all scrollbars will be disabled before taking a screenshot  

### `checkScreen` compare options 
The compare options can be set as `checkScreen` options, see [Compare options](./OPTIONS.md#compare-options)

### `checkFullPageScreen`
#### `blockOut`
- **Type:** `array`
- **Mandatory:** No
- **Default:** `[{height: 10, width: 5, x: 40, y: 65}, {height: 250, width: 500,x: 0,y: 35}]`

Block out array with x, y, width and height values. These block outs will be black areas on both images that will be excluded during comparison.
The values will automatically be transformed to the correct DPR-values.

#### `disableCSSAnimation`
- **Type:** `boolean`
- **Mandatory:** No
- **Default:** `false`

En/Disable all css animations in the application. If set to true all animations will be disabled before taking a screenshot
and reset when done

#### `fullPageScrollTimeout`
- **Type:** `number`
- **Mandatory:** No
- **Default:** `1500`

The timeout in milliseconds to wait after a scroll. This might help identifying pages with lazy loading.

#### `hideScrollBars`
- **Type:** `boolean`
- **Mandatory:** No
- **Default:** `false`

Hide scrollbars in the application. If set to true all scrollbars will be disabled before taking a screenshot  

### `checkFullPageScreen` compare options 
The compare options can be set as `checkFullPageScreen` options, see [Compare options](./OPTIONS.md#compare-options)


## Compare options

> **NOTE:** All compare options can also be used for `checkElement`,`checkScreen` and `checkFullPageScreen`.

Compare options are the options that can be set during instantiation of the plugin or per method. If the options has the same key as an option that has been set during the instantiation of the plugin, the method compare option will override the plugin compare option value.

### `ignoreAlpha`
- **Type:** `boolean`
- **Default:** `false`
- **Mandatory:** no
- **Remark:** *Can also be used for `checkElement`, `checkScreen()` and `checkFullPageScreen()`. It will override the plugin setting*

Compare images and discard alpha.

### `blockOutStatusBar`
- **Type:** `boolean`
- **Default:** `false`
- **Mandatory:** no
- **Remark:** *Can also be used for `checkElement`, `checkScreen()` and `checkFullPageScreen()`. It will override the plugin setting*

Automatically blockout the status and address bar during comparions. This prevents failures on time, wifi or battery status. This is mobile only.

### `blockOutToolBar`
- **Type:** `boolean`
- **Default:** `false`
- **Mandatory:** no
- **Remark:** *Can also be used for `checkElement`, `checkScreen()` and `checkFullPageScreen()`. It will override the plugin setting*

Automatically blockout the tool bar. This is mobile only.

### `ignoreAntialiasing`
- **Type:** `boolean`
- **Default:** `false`
- **Mandatory:** no
- **Remark:** *Can also be used for `checkElement`, `checkScreen()` and `checkFullPageScreen()`. It will override the plugin setting*

Compare images and discard anti aliasing.

### `ignoreColors`
- **Type:** `boolean`
- **Default:** `false`
- **Mandatory:** no
- **Remark:** *Can also be used for `checkElement`, `checkScreen()` and `checkFullPageScreen()`. It will override the plugin setting*

Even though the images are in colour, the comparison wil compare 2 black/white images

### `ignoreLess`
- **Type:** `boolean`
- **Default:** `false`
- **Mandatory:** no
- **Remark:** *Can also be used for `checkElement`, `checkScreen()` and `checkFullPageScreen()`. It will override the plugin setting*

Compare images and compare with `red = 16, green = 16, blue = 16, alpha = 16, minBrightness=16, maxBrightness=240`

### `ignoreNothing`
- **Type:** `boolean`
- **Default:** `false`
- **Mandatory:** no
- **Remark:** *Can also be used for `checkElement`, `checkScreen()` and `checkFullPageScreen()`. It will override the plugin setting*

Compare images and compare with `red = 0, green = 0, blue = 0, alpha = 0, minBrightness=0, maxBrightness=255`

### `ignoreTransparentPixel`
- **Type:** `boolean`
- **Default:** `false`
- **Mandatory:** no
- **Remark:** *Can also be used for `checkElement`, `checkScreen()` and `checkFullPageScreen()`. It will override the plugin setting*

Compare images and it will ignore all pixels that have some transparency in one of the images

### `rawMisMatchPercentage`
- **Type:** `boolean`
- **Default:** `false`
- **Mandatory:** no
- **Remark:** *Can also be used for `checkElement`, `checkScreen()` and `checkFullPageScreen()`. It will override the plugin setting*

If true the return percentage will be like `0.12345678`, default is `0.12`

### `returnAllCompareData`
- **Type:** `boolean`
- **Default:** `false`
- **Mandatory:** no
- **Remark:** *Can also be used for `checkElement`, `checkScreen()` and `checkFullPageScreen()`. It will override the plugin setting*

This will retun all compare data, not only the mismatch percentage

### `saveAboveTolerance`
- **Type:** `boolean`
- **Default:** `false`
- **Mandatory:** no
- **Remark:** *Can also be used for `checkElement`, `checkScreen()` and `checkFullPageScreen()`. It will override the plugin setting*

Allowable value of misMatchPercentage that prevents saving image with differences


	### `largeImageThreshold`
	- **Type:** `number`
	- **Default:** `0`
	- **Mandatory:** no
	- **Remark:** *Can also be used for `checkElement`, `checkScreen()` and `checkFullPageScreen()`. It will override the plugin setting*
	
	Comparing large images can lead to performance issues.
	When providing a number for the amount of pixels here (higher then 0), the comparison algorithm skips pixels when the image width or height is larger than `largeImageThreshold` pixels.