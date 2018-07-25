import { ImageRequireSource, Insets } from 'react-native';

type Color = string;
type FontFamily = string;
type LayoutOrientation = 'portrait' | 'landscape';
type AndroidDensityNumber = number;

interface OptionsStatusBar {
  // Change the statusbar visibility (default: true)
  visible?: boolean;
  // Change the statusbar style (default: light)
  style?: 'light' | 'dark';

  // Android specific
  backgroundColor: Color;
  drawBehind: boolean;
}

interface OptionsLayout {
  backgroundColor?: Color;
  orientation?: LayoutOrientation[];

  // Android specific
  topMargin: number;
}

enum OptionsModalPresentationStyle {
  'formSheet',
  'pageSheet',
  'overFullScreen',
  'overCurrentContext',
  'currentContext',
  'popOver',
  'fullScreen',
  'none',
}

interface OptionsTopBarLargeTitle {
  visible?: boolean;
  fontSize?: number;
  color?: Color;
  fontFamily?: FontFamily;
}

interface OptionsTopBarTitle {
  text?: string;
  fontSize?: number;
  color?: Color;
  fontFamily?: FontFamily;
  component?: {
    name?: string;
    alignment?: 'center';
  };

  // Android specific
  height: number; // dp
}

interface OptionsTopBarSubtitle {
  text?: string;
  fontSize?: number;
  color?: Color;
  fontFamily?: FontFamily;
  alignment?: 'center';
}

interface OptionsTopBarBackButton {

  /**
   * Image to show as the back button
   */
  icon: ImageRequireSource;

  /**
   * Weither the back button is visible or not
   * @default true
   */
  visible: boolean;

  /**
   * Set the back button title
   * #### (iOS specific)
   */
  title: string;

  /**
   * Show title or just the icon
   * #### (iOS specific)
   */
  showTitle: boolean;

  /**
   * Back button icon or text color
   * #### (Android specific)
   */
  color?: Color;
}

interface  OptionsTopBarBackground {
  /**
   * Background color of the top bar
   */
  color?: Color;

  /**
   * Set a custom component for the Top Bar background
   */
  component?: {
    name?: string;
  };
}

interface OptionsTopBar {
  /**
   * Show or hide the top bar
   */
  visible?: boolean;
  /**
   * Controls whether TopBar visibility changes should be animated
   */
  animate?: boolean;
  /**
   * Top bar will hide and show based on users scroll direction
   */
  hideOnScroll?: boolean;
  /**
   * Change button colors in the top bar
   */
  buttonColor?: Color;
  /**
   * Draw behind the navbar
   */
  drawBehind?: boolean;
  /**
   * Can be used to reference the top bar in E2E tests
   */
  testID?: string;
  /**
   * Title configuration
   */
  title?: OptionsTopBarTitle;
  /**
   * Subtitle configuration
   */
  subtitle?: OptionsTopBarSubtitle;
  /**
   * Back button configuration
   */
  backButton?: OptionsTopBarBackButton;
  /**
   * Background configuration
   */
  background?: OptionsTopBarBackground;
  /**
   * Control the NavBar blur style
   * #### (iOS specific)
   * @requires translucent: true
   * @default 'default'
   */
  barStyle: 'default' | 'black';
  /**
   * Allows the NavBar to be translucent (blurred)
   * #### (iOS specific)
   * @requires transparent: false
   */
  translucent: boolean;
  /**
   * Allows the NavBar to be transparent
   * #### (iOS specific)
   */
  transparent: boolean;
  /**
   * Disable the border on bottom of the navbar
   * #### (iOS specific)
   * @default false
   */
  noBorder: boolean;
  /**
   * Enable background blur
   * #### (iOS specific)
   */
  blur: boolean;
  /**
   * Show a UISearchBar in the Top Bar
   * #### (iOS 11+ specific)
   */
  searchBar?: boolean;
  /**
   * Hides the UISearchBar when scrolling
   * #### (iOS 11+ specific)
   */
  searchBarHiddenWhenScrolling?: boolean;
  /**
   * The placeholder value in the UISearchBar
   * #### (iOS 11+ specific)
   */
  searchBarPlaceholder?: string;
  /**
   * Control the Large Title configuration
   * #### (iOS 11+ specific)
   */
  largeTitle?: OptionsTopBarLargeTitle;
  /**
   * Set the height of the navbar in dp
   * #### (Android specific)
   */
  height?: AndroidDensityNumber;
  /**
   * Change the navbar border color
   * #### (Android specific)
   */
  borderColor?: Color;
  /**
   * Set the border height of the navbar in dp
   * #### (Android specific)
   */
  borderHeight?: AndroidDensityNumber;
  /**
   * Set the elevation of the navbar in dp
   * #### (Android specific)
   */
  elevation?: AndroidDensityNumber;
}

interface OptionsBottomTabs {
  visible?: boolean;
  animate?: boolean;
  currentTabIndex?: number;
  currentTabId?: string;
  testID?: string;
  drawBehind?: boolean;
  backgroundColor?: Color;

  // iOS specific
  barStyle?: 'default' | 'black';
  translucent?: boolean;
  hideShadow?: boolean;

  // Android specific
  titleDisplayMode?: 'alwaysShow' | 'showWhenActive' | 'alwaysHide';
}

interface OptionsBottomTab {
  text?: string;
  badge?: string;
  testID?: string;
  icon?: ImageRequireSource;
  iconColor?: Color;
  textColor?: Color;
  selectedIconColor?: Color;
  selectedTextColor?: Color;
  fontFamily?: FontFamily;
  fontSize?: number;

  // iOS specific
  iconInsets?: Insets;
  selectedIcon?: ImageRequireSource;
  disableIconTint?: boolean; // set true if you want to disable the icon tinting
  disableSelectedIconTint?: boolean;

  // Android specific
  selectedFontSize?: number;
}

interface SideMenuSide {
  visible?: boolean;
  enabled?: boolean;
}

interface OptionsSideMenu {
  left?: SideMenuSide;
  right?: SideMenuSide;
}

interface OptionsOverlay {
  interceptTouchOutside?: boolean;
}

interface PreviewAction {
  /**
   * Reference ID to get callbacks from
   */
  id: string;
  /**
   * Action text
   */
  title: string;
  /**
   * Action style
   */
  style?: 'default' | 'selected' | 'destructive';
  /**
   * Subactions that will be shown when this action is pressed.
   */
  actions?: PreviewAction[];
}

interface OptionsPreview {
  /**
   * Pass a react node tag to mark a SourceRect for a specific
   * peek and pop preview element.
   */
  reactTag?: number;
  /**
   * You can set this property specify the width of the preview.
   * If the width is greater than the device width, it will be zoomed in.
   */
  width?: number;
  /**
   * Height of the preview
   */
  height?: 100;
  /**
   * You can control if the users gesture will result in pushing
   * the preview screen into the stack.
   */
  commit?: boolean;
  /**
   * List of actions that will appear underneath the preview window.
   * They can be nested for sub actions.
   */
  actions?: PreviewAction[];
}

interface OptionsAnimationPropertyConfig {
  from: number;
  to: number;
  duration?: number; // Default value is 300 ms
  startDelay?: number; // Default value is 0
  interpolation?: 'accelerate' | 'decelerate';
}

interface OptionsAnimationProperties {
  x?: OptionsAnimationPropertyConfig;
  y?: OptionsAnimationPropertyConfig;
  alpha?: OptionsAnimationPropertyConfig;
  scaleX?: OptionsAnimationPropertyConfig;
  scaleY?: OptionsAnimationPropertyConfig;
  rotationX?: OptionsAnimationPropertyConfig;
  rotationY?: OptionsAnimationPropertyConfig;
  rotation?: OptionsAnimationPropertyConfig;
}

interface OptionsAnimationPropertiesId extends OptionsAnimationProperties {
  id?: string;
}

interface OptionsAnimationSeparate {
  topBar?: OptionsAnimationPropertiesId;
  bottomTabs?: OptionsAnimationPropertiesId;
  content?: OptionsAnimationPropertiesId;
}

interface OptionsAnimations {
  startApp?: OptionsAnimationProperties;
  push?: OptionsAnimationSeparate;
  pop?: OptionsAnimationSeparate;
  showModal?: OptionsAnimationProperties;
  dismissModal?: OptionsAnimationProperties;
}

export interface Options {
  statusBar?: OptionsStatusBar;
  layout?: OptionsLayout;
  modalPresentationStyle?: OptionsModalPresentationStyle;
  topBar?: OptionsTopBar;
  bottomTabs?: OptionsBottomTabs;
  bottomTab?: OptionsBottomTab;
  sideMenu?: OptionsSideMenu;
  overlay?: OptionsOverlay;

  /**
   * Animation used for navigation commands that modify the layout
   * hierarchy can be controlled in options.
   *
   * Animations can be modified per command and it's also possible
   * to change the default animation for each command.
   */
  animations?: OptionsAnimations;

  /**
   * Preview configuration for Peek and Pop
   * #### (iOS specific)
   */
  preview?: OptionsPreview;

  /**
   * Enable or disable swipe back to pop gesture
   * #### (iOS specific)
   * @default true
   */
  popGesture?: boolean;

  /**
   * Background image for the screen
   * #### (iOS specific)
   */
  backgroundImage?: ImageRequireSource;

  /**
   * Background image for the Navigation View
   * #### (iOS specific)
   */
  rootBackgroundImage?: ImageRequireSource;
}