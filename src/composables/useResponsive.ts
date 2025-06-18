import { ref, onMounted, onUnmounted } from "vue";

export interface BreakpointState {
  xs: boolean;
  sm: boolean;
  md: boolean;
  lg: boolean;
  xl: boolean;
  xxl: boolean;
}

/**
 * 响应式布局 composable
 * 提供断点检测和响应式状态管理
 */
export function useResponsive() {
  const breakpoints = ref<BreakpointState>({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
    xxl: false,
  });

  const windowWidth = ref(0);
  const windowHeight = ref(0);

  const updateBreakpoints = () => {
    const width = window.innerWidth;
    windowWidth.value = width;
    windowHeight.value = window.innerHeight;

    breakpoints.value = {
      xs: width >= 0,
      sm: width >= 576,
      md: width >= 768,
      lg: width >= 992,
      xl: width >= 1200,
      xxl: width >= 1400,
    };
  };

  const isMobile = () => breakpoints.value.md === false;
  const isTablet = () => breakpoints.value.md && !breakpoints.value.lg;
  const isDesktop = () => breakpoints.value.lg;

  // 节流函数，优化性能
  let resizeTimer: number | null = null;
  const handleResize = () => {
    if (resizeTimer) {
      clearTimeout(resizeTimer);
    }
    resizeTimer = window.setTimeout(updateBreakpoints, 100);
  };

  onMounted(() => {
    updateBreakpoints();
    window.addEventListener("resize", handleResize);
  });

  onUnmounted(() => {
    window.removeEventListener("resize", handleResize);
    if (resizeTimer) {
      clearTimeout(resizeTimer);
    }
  });

  return {
    breakpoints,
    windowWidth,
    windowHeight,
    isMobile,
    isTablet,
    isDesktop,
  };
}
