import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export const DefaultGltfLoader = new GLTFLoader()
export const DefaultAssetBasePath = 'https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles/'

export type {
  XRControllerComponent,
  XRControllerGamepadComponentId,
  XRControllerGamepadComponentState,
  XRControllerGamepadState,
  XRControllerLayout,
  XRControllerLayoutLoader,
  XRControllerLayoutLoaderOptions,
  XRControllerState,
  XRControllerVisualResponse,
} from './controller/index.js'
export type {
  XRHandInputSource,
  XRHandLoaderOptions,
  XRHandPoseState,
  XRHandPoseUrls,
  XRHandState,
} from './hand/index.js'
export {
  type XRGazeState,
  type XRInputSourceState,
  type XRScreenInputState,
  type XRTransientPointerState,
  isXRInputSourceState,
} from './input.js'
export type { WithRecord, XRElementImplementations, XRState, XRStore, XRStoreOptions } from './store.js'
export type { GetXRSpace } from './space.js'
export * from './visible.js'
export * from './pointer/index.js'
export type * from './default.js'
export * from './vanilla/index.js'
export * from './misc.js'
export * from './teleport.js'
