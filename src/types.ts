/**
 * Options for the SVG sprite generation.
 */
export interface SvgOptions {
  /**
   * Match SVG files in the project root directory.
   *
   * @default src/assets/icons/**\/*.svg
   */
  pattern?: string | string[]
  /**
   * Prefix for the SVG symbol IDs.
   *
   * @default icon
   */
  prefix?: string
}
