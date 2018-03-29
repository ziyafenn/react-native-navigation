const { Navigation } = require('react-native-navigation');
const { registerScreens } = require('./screens');
const { Platform } = require('react-native');

if (Platform.OS === 'android') {
  alert = (title) => {
    Navigation.showOverlay({
      component: {
        name: 'navigation.playground.alert',
        passProps: {
          title
        },
        options: {
          overlay: {
            interceptTouchOutside: true
          }
        }
      }
    });
  };
}

function start() {
  registerScreens();
  Navigation.events().onAppLaunched(() => {
    Navigation.setDefaultOptions({
      animations: {
        startApp: {
          y: {
            from: 1000,
            to: 0,
            duration: 500,
            interpolation: 'accelerate',
          },
          alpha: {
            from: 0,
            to: 1,
            duration: 500,
            interpolation: 'accelerate'
          }
        },
        push: {
          topBar: {
            id: 'TEST',
            alpha: {
              from: 0,
              to: 1,
              duration: 500,
              interpolation: 'accelerate'
            },
            scaleX: {
              from: 0,
              to: 1,
              duration: 500,
              interpolation: 'accelerate'
            },
            scaleY: {
              from: 0,
              to: 1,
              duration: 500,
              interpolation: 'accelerate'
            }
          },
          bottomTabs: {
            alpha: {
              from: 0,
              to: 1,
              duration: 500,
              interpolation: 'decelerate'
            },
            scaleX: {
              from: 0,
              to: 1,
              duration: 500,
              interpolation: 'accelerate'
            },
            scaleY: {
              from: 0,
              to: 1,
              duration: 500,
              interpolation: 'accelerate'
            }
          },
          content: {
            alpha: {
              from: 0,
              to: 1,
              duration: 500,
              interpolation: 'accelerate'
            },
            scaleX: {
              from: 0,
              to: 1,
              duration: 500,
              interpolation: 'accelerate'
            },
            scaleY: {
              from: 0,
              to: 1,
              duration: 500,
              interpolation: 'accelerate'
            }
          }
        },
        pop: {
          topBar: {
            id: 'TEST',
            alpha: {
              from: 1,
              to: 0,
              duration: 500,
              interpolation: 'accelerate'
            },
            scaleX: {
              from: 1,
              to: 0,
              duration: 500,
              interpolation: 'accelerate'
            },
            scaleY: {
              from: 1,
              to: 0,
              duration: 500,
              interpolation: 'accelerate'
            }
          },
          bottomTabs: {
            alpha: {
              from: 1,
              to: 0,
              duration: 500,
              interpolation: 'accelerate'
            },
            scaleX: {
              from: 1,
              to: 0,
              duration: 500,
              interpolation: 'accelerate'
            },
            scaleY: {
              from: 1,
              to: 0,
              duration: 500,
              interpolation: 'accelerate'
            }
          },
          content: {
            alpha: {
              from: 1,
              to: 0,
              duration: 500,
              interpolation: 'accelerate'
            },
            scaleX: {
              from: 1,
              to: 0,
              duration: 500,
              interpolation: 'accelerate'
            },
            scaleY: {
              from: 1,
              to: 0,
              duration: 500,
              interpolation: 'accelerate'
            }
          }
        }
      }
    });

    Navigation.setRoot({
      stack: {
        id: 'TEST',
        children: [
          {
            component: {
              name: 'navigation.playground.WelcomeScreen'
            }
          }
        ]
      }
    });
  });
}

module.exports = {
  start
};
