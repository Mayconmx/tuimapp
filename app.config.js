const EAS_PROJECT_ID = process.env.EAS_PROJECT_ID;
const EXPO_OWNER = process.env.EXPO_OWNER;

module.exports = {
  "expo": {
    "name": "Tuim",
    "slug": "tuim-app",
    "version": "1.0.0",
    "scheme": "tuim",
    "orientation": "portrait",
    "userInterfaceStyle": "automatic",
    "icon": "./assets/icon.png",
    "newArchEnabled": true,
    "plugins": [
      "expo-font",
      "expo-secure-store",
      "expo-web-browser",
      [
        "expo-image-picker", {
          "photosPermission": "The app accesses your photos to let you share them with other users."
        }
      ],
      "./plugins/setClearTextTrafficFalse",
      "./plugins/withGradleProperties",
      "expo-localization",
      "expo-build-properties"
    ],
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#3DBE72",
      "dark": {
        "image": "./assets/splash.png",
        "backgroundColor": "#1A1A2E"
      }
    },
    "updates": {
      "enabled": false,
      "checkAutomatically": "ON_ERROR_RECOVERY",
      "url": EAS_PROJECT_ID ? `https://u.expo.dev/${EAS_PROJECT_ID}` : "https://github.com/Alovoa/alovoa-expo/releases/latest"
    },
    "assetBundlePatterns": [
      "**/*"
    ],
    "ios": {
      "supportsTablet": true,
      "usesAppleSignIn": true,
      "bundleIdentifier": "com.tuim.app",
      "associatedDomains": [
        "applinks:tuim.app"
      ],
      "infoPlist": {
        "LSApplicationQueriesSchemes": [
          "tuim"
        ],
        "ITSAppUsesNonExemptEncryption": false,
        "NSLocationWhenInUseUsageDescription": "Este app usa a localização para encontrar usuários próximos",
        "NSDocumentsFolderUsageDescription": "Este app usa a pasta Documentos para armazenar os dados do usuário",
        "NSMicrophoneUsageDescription": "Este app usa o microfone para gravar áudio do usuário"
      },
      "buildNumber": "1"
    },
    "android": {
      "icon": "./assets/icon-round.png",
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "monochromeImage": "./assets/monochrome-icon.png",
        "backgroundColor": "#3DBE72"
      },
      "intentFilters": [
        {
          "action": "VIEW",
          "data": [
            {
              "scheme": "tuim"
            }
          ],
          "category": [
            "BROWSABLE",
            "DEFAULT"
          ]
        }
      ],
      "package": "com.tuim.app",
      "softwareKeyboardLayoutMode": "pan",
      "permissions": [
        "android.permission.ACCESS_COARSE_LOCATION",
        "android.permission.ACCESS_FINE_LOCATION",
        "android.permission.RECORD_AUDIO"
      ],
      "lintOptions": {
        "checkReleaseBuilds": false,
        "abortOnError": false
      },
      "versionCode": 1
    },
    "web": {
      "favicon": "./assets/favicon.png"
    },
    "extra": {
      "eas": {
        "projectId": EAS_PROJECT_ID
      }
    },
    "owner": EXPO_OWNER,
    "runtimeVersion": {
      "policy": "appVersion"
    }
  },
  "build": {
    "android": {
      "env": {
        "ORG_GRADLE_JVMARGS": "-Xmx6g -XX:MaxMetaspaceSize=3g -Dfile.encoding=UTF-8"
      }
    }
  }
};
