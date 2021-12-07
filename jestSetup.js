import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock('react-native', () => ({
  Platform: { OS: 'android' }
}))

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);

// Mock React Navigation
jest.mock('@react-navigation/stack');

jest.mock("react-native/Libraries/EventEmitter/NativeEventEmitter");

jest.mock('react-native-reanimated', () => {
  const Reanimated = require('react-native-reanimated/mock');

  // The mock for `call` immediately calls the callback which is incorrect
  // So we override it with a no-op
  Reanimated.default.call = () => {};

  return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

// /* eslint-disable no-undef */
jest.mock('@react-native-firebase/app', () => {
  const data = { ActionID: 'unnamed' };
  const snapshot = { val: () => data, exportVal: () => data, exists: jest.fn(() => true) };
  
  return {
    firebaseConfig: jest.fn().mockReturnValue({}),
    database: jest.fn().mockReturnValue({
      ref: jest.fn().mockImplementation(() => ({
        child: jest.fn().mockImplementation(() => ({
          push: jest.fn().mockReturnValue({
            key: 'someValueAsKey'
          })
        })),
        set: jest.fn(),
      })),
      once: jest.fn(() => Promise.resolve(snapshot))
    }),
    notifications: jest.fn(() => ({
      onNotification: jest.fn(),
      onNotificationDisplayed: jest.fn(),
    })),
    analytics: jest.fn(() => ({
      logEvent: jest.fn(),
      setUserProperties: jest.fn(),
      setUserId: jest.fn(),
      setCurrentScreen: jest.fn(),
    })),
}});

jest.mock('@react-native-firebase/database', () => {
  const data = { ActionID: 'unnamed' };
  const snapshot = { val: () => data, exportVal: () => data, exists: jest.fn(() => true) };
  return {
    ref: jest.fn().mockImplementation(() => ({
      child: jest.fn().mockImplementation(() => ({
        push: jest.fn().mockReturnValue({
          key: 'someValueAsKey'
        })
      })),
      set: jest.fn(),
    })),
    once: jest.fn(() => Promise.resolve(snapshot))
  }
});

jest.mock('@react-native-firebase/messaging', () => {
  return {
    messaging: jest.fn(() => ({
      hasPermission: jest.fn(() => Promise.resolve(true)),
      subscribeToTopic: jest.fn(),
      unsubscribeFromTopic: jest.fn(),
      requestPermission: jest.fn(() => Promise.resolve(true)),
      getToken: jest.fn(() => Promise.resolve('myMockToken')),
    })),
  }
});

jest.mock('react-native-vector-icons/Ionicons', () => 'Icon')

jest.mock('react-native-gesture-handler', () => ({
  UIManager: {
    RCTView: () => {},
  },
  RNGestureHandlerModule: {
    attachGestureHandler: jest.fn(),
    createGestureHandler: jest.fn(),
    dropGestureHandler: jest.fn(),
    updateGestureHandler: jest.fn(),
    State: {},
    Directions: {},
  },
}))