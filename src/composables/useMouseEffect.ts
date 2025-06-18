import { onMounted, onUnmounted } from "vue";

/**
 * 鼠标特效 composable
 * 提供鼠标移动时的视觉特效功能
 */
export function useMouseEffect() {
  // 创建鼠标特效元素
  const createMouseEffect = (event: MouseEvent) => {
    const effectElement = document.createElement("div");
    effectElement.className = "mouse-effect";
    effectElement.style.left = `${event.pageX}px`;
    effectElement.style.top = `${event.pageY}px`;
    document.body.appendChild(effectElement);

    // 动画结束后移除特效元素
    setTimeout(() => {
      if (document.body.contains(effectElement)) {
        effectElement.remove();
      }
    }, 1000); // 持续时间与动画时长一致
  };

  // 节流函数，避免过度触发
  let isThrottled = false;
  const throttledMouseEffect = (event: MouseEvent) => {
    if (!isThrottled) {
      createMouseEffect(event);
      isThrottled = true;
      setTimeout(() => {
        isThrottled = false;
      }, 16); // 约60fps
    }
  };

  // 生命周期管理
  onMounted(() => {
    window.addEventListener("mousemove", throttledMouseEffect);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", throttledMouseEffect);
  });

  return {
    createMouseEffect: throttledMouseEffect,
  };
}
