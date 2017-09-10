import { BREAKPOINT_SIZES, isMobileUserAgent } from '../constants';

export const getBreakpointFor = (windowWidth) => (
  Object.keys(BREAKPOINT_SIZES).find(name => (
    windowWidth <= BREAKPOINT_SIZES[name]
  ))
);

export const isMobile = (breakpoint) => (
  breakpoint === 'xs' ||
  breakpoint === 'sm' ||
  isMobileUserAgent
);